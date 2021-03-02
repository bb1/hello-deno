import { ServerRequest } from "https://deno.land/std@0.89.0/http/server.ts";
import { LoginCredentials, User } from "../../types/types";
import { loginUser } from "../auth/auth-service";

export async function handler (request: ServerRequest) {
  let user: User | undefined;
  try {
    const credential = (await request.body()).value as LoginCredentials;
    user = await loginUser(credential);
  } catch (error) {}

  if (!user) {
    return {
      statusCode: 403,
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: 'INVALID CREDENTIALS!'
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
