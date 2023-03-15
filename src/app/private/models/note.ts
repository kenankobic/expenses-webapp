import { BaseModel } from "src/app/shared/models/base";
import { User } from "./user";

export class Note extends BaseModel {
    note!: string;
    userId!: number;
    user!: User;
}