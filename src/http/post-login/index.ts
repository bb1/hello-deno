// @ts-ignore
import { ServerRequest } from "https://deno.land/std@0.89.0/http/server.ts";
// @ts-ignore
import { LoginCredentials, User } from "./types.ts";
// @ts-ignore
import { loginUser } from "./auth-service.ts";

const textDecoder = new TextDecoder();

// @ts-ignore
export async function readToText(body: Deno.Reader) {
  // @ts-ignore
  const textBody = textDecoder.decode(await Deno.readAll(body));

  return textBody;
}


export async function handler (request: ServerRequest) {
  let user: User | undefined;
  let cred;

  try {
    const textBody = await readToText(request.body);
    const credential = cred = JSON.parse(textBody) as LoginCredentials;
    console.log(credential);
    user = await loginUser(credential);
  } catch (error) {}

  if (!user) {
    return {
      statusCode: 403,
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: JSON.stringify({
        error: 'INVALID CREDENTIALS!',
        data: cred,
      })
    };
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      token: user.token,
    })
  }
}
