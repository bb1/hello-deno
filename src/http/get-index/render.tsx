// @deno-types="https://servestjs.org/@v1.1.7/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render() {
  let body = ReactDOMServer.renderToString(<App/>);

  return `<!DOCTYPE html>
<html>
<head>
    <title>Hello Dino</title>
</head>
<body>
  <div id="app">${body}</div>
  <script type="module" src="/_static/browser.js"></script>
</body>
</html>
`;
}
