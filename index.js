const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('Pages'));

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});