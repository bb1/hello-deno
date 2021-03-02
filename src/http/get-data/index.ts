import { ServerRequest } from "https://deno.land/std@0.89.0/http/server.ts";
import { authCheck } from '../auth/auth-service';

export async function handler (req: ServerRequest) {
  try {
    await authCheck(req);
  } catch (err) {
    // NOT logged in
    return {
      statusCode: 403,
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: err.message,
    }
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      data: 'Hello world'
    }),
  }
}
