import { DioAccount } from "./DioAccount";

export class DepositAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  moreThenDeposit = (value: number): void => {
    this.deposit(value + 10);
  };
}
