const express = require('express');
const app = express();

const { getDatas } = require('./funcs');

app.use('/animalsPhotos', express.static('./images'));

app.get('/api/getDatas', (req, res) => {
  const path = req.query.path;
  const img = getDatas(`./images${path}`);
  res.json(img);
});

app.listen(8080, () => {
  console.log('server started');
});
