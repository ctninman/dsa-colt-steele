// GRAPHS

/*
	Nodes + Connections

	*Tree is a type of graph

	USES for Graphs

		-	Social Networks
		- Mapping
		- Location
		- Routing Algorithms
		- Recommendations
			-- People also watched
			-- Frequently bought with


*/

// THIS IS AN UNDIRECTED GRAPH
class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex (vertexName) {
		if (!this.adjacencyList[vertexName]) {
			this.adjacencyList[vertexName] = [];
		} else {
			console.log('this key exists')
		}
	}

	addEdge (vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2)
			this.adjacencyList[vertex2].push(vertex1)
		}
	}

	removeEdge (vertex1,vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v !== vertex2
		)
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v !== vertex1
		)
	}

	removeVertex (vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex]
	}

	depthFirstRecursive (start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList

		function dfs(vertex) {
			if (!vertex) return null;

			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return dfs(neighbor)
				}
			})
		} 
		dfs(start)
	}

}

const g1 = new Graph()
g1.addVertex("Tokyo")
g1.addVertex("Atlanta")
g1.addVertex("Seoul")
g1.addVertex("Beijing")
g1.addVertex("NYC")

g1.addEdge("Tokyo", "Seoul")
g1.addEdge("Tokyo", "NYC")
g1.addEdge("Atlanta", "NYC")
g1.addEdge("Beijing", "Tokyo")
g1.addEdge("Beijing", "Seoul")

g1.removeEdge("NYC", "Tokyo")

// GRAPH TRAVERSAL

// Graph - has no specific root
// To traverse, we must specify a starting point

/*  Real world uses

-peer to peer networking
-web crawlers
-finding 'closest' matches/recommendations
-shortest path problems
	+GPS navigation
	+Solving mazes
	+AI shortest path



Traversal = visiting/updating/checking every vertex in a graph

*/

const g2 = new Graph();
g2.addVertex("A")
g2.addVertex("B")
g2.addVertex("C")
g2.addVertex("D")
g2.addVertex("E")
g2.addVertex("F")

g2.addEdge("A", "B")
g2.addEdge("A", "C")
g2.addEdge("B", "D")
g2.addEdge("C", "E")
g2.addEdge("D", "E")
g2.addEdge("D", "F")
g2.addEdge("E", "F")
