const fs = require('fs')
let count=0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1),i=0,numberOfNewLine=0,stdinBuffer = Buffer.alloc(1),inc=0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {
       
        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if(buf[0] - 10===0 || buf[0] - 13===0){
            i++;
            // console.log('first',i)
        }
    }
    fs.readSync(0,stdinBuffer,0,1,null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};
// const result = prompt('Input something: ');
// const result2 = prompt('Input something: ');
// const result3 = prompt('Input something: ');
// console.log('Your input was: ' + result);
// console.log('Your input was: ' + result2);
// console.log('Your input was: ' + result3);

let option; 
let accounts = [];  
while (true) {     
    console.log("Select Your Option");     
    console.log("1) Create bank account");     
    console.log("2) View bank accounts");      

    option = prompt('Enter your option: ');           

    if (option == '1') {         
        let account = {};               
        account.name = prompt('Enter your name: ');         
        account.fatherName = prompt('Enter your father name: ');          

        let minimumDeposit = 2000; 
        let deposit;

        
        do {
            deposit = prompt(`Enter the First Deposit (minimum balance is 2000): `); 
            deposit = Number(deposit);  

            if (deposit < minimumDeposit) {
                console.log('Minimum amount is 2000. Please try again.');
            }
        } while (deposit < minimumDeposit);  

        account.amount = deposit;               
        accounts.push(account);                           
        console.log('Account created successfully');         
    }      

    else if (option == '2') {                 
        if (accounts.length === 0) {             
            console.log('No accounts found');         
        } else {                  
            for (let i = 0; i < accounts.length; i++) {             
                console.log('userName:', accounts[i].name);             
                console.log('fatherName:', accounts[i].fatherName);             
                console.log('deposit:', accounts[i].amount);             
                console.log('------------------------');            
            } 
        }     
    }      

    else {         
        console.log('Invalid option!!!');      
    } 
}
