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