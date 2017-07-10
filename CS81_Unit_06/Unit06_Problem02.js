/**
 * Created by fletcher on 7/9/2017.
 */
// copied this stuff from my solution to problem 1
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

//This is the property checking function
function checkGivenProperty(objectToCheck,propName){
    return objectToCheck.hasOwnProperty(propName);
}

//Some output to test the function
var Abe = new BankAccount(100.00);
console.log(Abe.checkBalance);

console.log(checkGivenProperty(Abe,"blah"));
console.log(checkGivenProperty(Abe,"acctNum"));
console.log(checkGivenProperty(Abe,"saveBalance22"));
console.log(checkGivenProperty(Abe,"acctType"));
console.log(checkGivenProperty(Abe,"WhoAmI"));
