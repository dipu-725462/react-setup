import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';

import Home from '../src/client/components/Home';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const content = ReactDomServer.renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
