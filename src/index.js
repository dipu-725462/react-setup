import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';

import Home from '../src/client/components/Home';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = ReactDomServer.renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
      <div id='root'>
        ${content}
        <script type="module" src='bundle.js'></script>
      </div>
      </body>
    </html>
  `
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
