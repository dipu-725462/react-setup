import React from 'react';
import { renderToString } from 'react-dom/server';

import HomePage from '../client/components/Home';

const renderer = () => {
  const content = renderToString(<HomePage />);
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
  `;

  return html;
}

export default renderer;
