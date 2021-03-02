import { ServerRequest } from "https://deno.land/std@0.89.0/http/server.ts";
// TODO: implement bcrypt !!
// import * as bcrypt from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts';

export interface User {
    username: string;
    password: string;
    token: string;
}

const SECRET_USER_DB: User[] = [
    {
        username: 'bb',
        password: 'pass',
        token: 'FAKE-TOKEN-WbA2QQvKgGupDrrh2FQeZ9bT7Q3sRC'
    }
];

const BÄR = 'Bearer ';

export const authCheck = async (req: ServerRequest) => {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith(BÄR))
        throw Error('No Token');
    
    const reqToken = authHeader.substring(BÄR.length);
    const user = SECRET_USER_DB.find(({ token }) => token === reqToken);

    if (!user)
        throw Error('invalid token');
};
