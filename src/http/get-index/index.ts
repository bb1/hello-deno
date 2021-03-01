// import { render } from './render.tsx';

// export async function handler() {
//   const body = await render();

//   return {
//     statusCode: 200,
//     headers: {
//       'content-type': 'text/html; charset=utf8',
//       'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
//     },
//     // body,
//   }
// }

export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/_static/index.html',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}