export default class DOMes {
	constructor(parameters) {
		this.parameters = parameters || {}
	}

	dispatch() {
		const elements = {}
		const collection = document.getElementsByTagName("*")
        	const collectionLength = collection.length;
        	let name;
        	for (let i = 0; i < collectionLength; ++i) {
            		name = collection[i].tagName
            		elements[name] = (elements[name] + 1) || 1
        	}

		return !!this.parameters.displayed ? console.table(elements) : elements
	}
}
