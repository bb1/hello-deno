import { LoginCredentials, User } from '../types/types';

let TOKEN_CACHE: string | null = null;

export const login = async ({username, password} :LoginCredentials) => {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const { token } = (await response.json()) as User;

        // TODO: better safe it in localStorage / Cookie etc.
        TOKEN_CACHE = token;
        
        return true;
    } catch (err) {
        console.error(err);

        return false;
    }
}
