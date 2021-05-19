const express = require('express')
const app = express()
const port = 3001


app.use(express.json());
app.get('/', (req, res) => {
	console.log(require("os").hostname())
	res.send('Hello World!')
})


app.post('/webhook', express.text(), (req, res) => {
	console.log(req.headers);
	console.log(req.body)
	console.log(JSON.stringify(req.body))
	return res.json({
		success: true,
		message: 'success'
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))