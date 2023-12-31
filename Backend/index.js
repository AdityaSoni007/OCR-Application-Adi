const express = require('express');
const app = express();
const cors = require("cors");
const database = require("./config/database");
const idCardRoutes = require("./routes/idCard.routes");

require('dotenv').config();
const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(
	cors({
		origin:process.env.CORS_ORIGIN,
		credentials:true,
	})
);

app.use("/api/v1/idCard", idCardRoutes);

app.get("/", (req, res) => {
	return res.status(400).json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})


