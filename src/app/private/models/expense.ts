import { BaseModel } from "src/app/shared/models/base";
import { User } from "./user";

export class Expense extends BaseModel {
    visibility!: ExpenseVisibility;
    type!: ExpenseType;
    subType?: string;
    name!: string;
    price!: number;
    date!: Date | string;
    userId!: number;
    user!: User;
    forPerson?: string;
    note?: string
    status!: ExpenseStatus;
}


enum ExpenseType {
    GROCERIES,
    CAR,
    HOUSEHOLD,
    TECH,
    TRAVEL,
    GIFTS,
    JEWELRY
  }
  
  enum ExpenseStatus {
    PENDING,
    COMPLETED,
    CANCELED
  }
  
  enum ExpenseVisibility {
    PUBLIC,
    PRIVATE
  }