import { expensesMeta } from "./expenses"
import { AsyncState } from "./AsyncState";

export interface Store {
    expenses: AsyncState<expensesMeta>
}