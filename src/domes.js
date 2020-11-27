export default class DOMes {
	constructor(parameters) {
		this.parameters = parameters || {}
	}

	dispatch() {
		const elements = {}
		document.querySelectorAll("*").forEach(({ tagName: name }) => {
			elements[name] = elements[name] ? elements[name] + 1 : 1
		})

		return !!this.parameters.displayed ? console.table(elements) : elements
	}
}
