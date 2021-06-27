const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');

const Home = require('./client/components/Home').default;

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const content = ReactDomServer.renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
