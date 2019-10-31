const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
	origin: 'localhost:8080/'
}));

app.use("/", express.static('static'));

const PORT = 9080;
app.listen(PORT, function() {
    console.log("Server is running @: " + "http://localhost:" + PORT);
});
