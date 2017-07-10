/**
 * Created by fletcher on 7/9/2017.
 */

/* PROBLEM 1*/
function BankAccount(balance){
    this.acctNum = "New Account";
    this.acctOwner = "Undefined Owner";
    this.checkBalance = balance;
    this.saveBalance = 0.00;
    this.acctType = "New";

    this.checkTransfer = function(amount){
        if(this.checkBalance + amount >0 ){
            this.checkBalance += amount;
        }
    }
}

var Abe = new BankAccount(100.00);

console.log(Abe.checkBalance);
Abe.checkTransfer(220.00);
console.log(Abe.checkBalance);



