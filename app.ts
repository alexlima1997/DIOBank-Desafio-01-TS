import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { DepositAccount } from "./class/DepositAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Pessoa 1", 10);
const companyAccount: CompanyAccount = new CompanyAccount("Pessoa 2", 20);
const depositAccount: DepositAccount = new DepositAccount("Pessoa 3", 30);

console.log("------------------------------");
peopleAccount.getName();
peopleAccount.getBalance();
peopleAccount.deposit(10);
peopleAccount.withdraw(10)
peopleAccount.getBalance();
console.log("------------------------------");
companyAccount.getName();
companyAccount.getBalance();
companyAccount.deposit(10);
companyAccount.withdraw(10)
companyAccount.getLoan(100);
companyAccount.getBalance();
console.log("------------------------------");
depositAccount.getName();
depositAccount.getBalance();
depositAccount.deposit(10);
depositAccount.withdraw(10)
depositAccount.moreThenDeposit(500);
depositAccount.getBalance();