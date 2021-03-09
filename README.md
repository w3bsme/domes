<h1 align="center">
  <a href="https://github.com/w3bsme/domes">
    DOMes
  </a>
</h1>

<p align="center">
  Lightweight library allowing collect detailed statistics of DOM elements
</p>

## 🚀 Install

Using npm:
```javascript
npm install --save-dev domeslib
```

## 📋 Using

```javascript
import DOMes from "domeslib"

const DOMElementsStatistics = new DOMes({
	displayed: true,
}).dispatch()
```
Using [Effect Hook](https://reactjs.org/docs/hooks-effect.html)

```javascript
useEffect(() => {
	const DOMElementsStatistics = new DOMes({
		displayed: true,
	}).dispatch()
}, [])
```
