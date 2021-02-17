const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
