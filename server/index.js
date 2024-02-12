const express = require('express');
const app = express();
const cors = require("cors");
const router = require('./src/routes/notes');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
