import { BaseModel } from "src/app/shared/models/base";
import { Expense } from "./expense";
import { Note } from "./note";

export class User extends BaseModel {
    role!: Role;
    email!: string;
    password?: string;
    username!: string;
    expenses: Expense[] = [];
    notes: Note[] = [];
}

enum Role {
    ADMIN,
    USER
}