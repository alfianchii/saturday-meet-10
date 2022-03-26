const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

//
const db = [
	{
		name: "Akbar",
		phone: "08999982828",
		address: "Jakarta",
	},
	{
		name: "Hanna",
		phone: "08293923892",
		address: "Bandung",
	},
];

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/buku-tamu", function (req, res) {
	res.json(db);
});

app.post("/buku-tamu", function (req, res) {
	const data = req.body;

	db.push(data);

	res.send("Data berhasil disimpan");
});

app.delete("/buku-tamu/:index", function (req, res) {
	db.splice(req.params.index, 1);

	res.send("Id " + req.params.index + " berhasil dihapus");
});

app.listen(port, () => {
	console.log("Server berjalan di port " + port);
});
