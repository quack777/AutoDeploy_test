import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('hello!sdfasdfsa');
});

app.listen(3000, () => {
  console.log('server is listening!');
});
