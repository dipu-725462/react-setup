import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './Routes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  // Initialize & Load data to store

  const promises = matchRoutes(Routes, req.path).map(item => {
    const { route: { loadData } } = item;
    return loadData ? loadData(store) : null;
  });

  Promise.all(promises)
    .then(() => {
      const html = renderer(req, store);
      res.send(html);
    })
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
