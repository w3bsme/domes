export default class DOMes {
	constructor(displayed) {
		this.displayed = displayed || false
	}

	dispatch() {
		const elements = {}
		document.querySelectorAll("*").forEach(({ tagName: name }) => {
			elements[name] = elements[name] ? elements[name] + 1 : 1
		})

		return this.displayed ? console.table(elements) : elements
	}
}
