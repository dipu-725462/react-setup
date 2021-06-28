import '@babel/polyfill';
import express from 'express';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  //some logic to initialize and load data to store

  const html = renderer(req, store);
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
