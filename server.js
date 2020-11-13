const express = require('express');

const app = express();

app.use(express.static('./dist/material-app'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/material-app/'}),
);

app.listen(process.env.PORT || 8080);
