import { environment } from "src/environments/environment";

export enum Endpoint {
    USERS = '/users',
    LOGIN = '/login',
    TOKEN = '/token',
    EXPENSES = '/expenses',
    NOTES = '/notes'
}

export namespace Endpoint {
    export function withContextPath(endpoint: string): string {
        return environment.apiContext + endpoint;
    }
}
