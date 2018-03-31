const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
})