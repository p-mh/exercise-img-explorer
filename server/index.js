const express = require('express');
const app = express();

const { getDatas } = require('./funcs');

app.use('/animalsPhotos', express.static('./images'));

app.get('/getDatas', (req, res) => {
  const path = req.query.path;
  const img = getDatas(`./images${path}`);
  res.json(img);
});

app.use('/', express.static('../client/build/'));

app.use('/*', express.static('../client/build/index.html'));

app.listen(8080, () => {
  console.log('server started');
});
