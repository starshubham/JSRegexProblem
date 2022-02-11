/* Patterns or Regex:-
        Patterns or Regular expressions are special characters which help search data, matching
        complex patterns. Regular expressions are shortened as 'regexp' or 'regex’.
*/

/* UC 1: The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used
by India Post. Create a regex pattern to validate PIN Code UC 1 PIN code 400088
*/
{
    let validateWithoutSpace = () => {
        console.log("\n***** UC1 *****");
        try {
            let pincode = "400088"//prompt("Enter pincode:");
            //regex pattern for pincode not allowing spaces
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5}$');
            //test pincode with pattern
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Error! Pincode is not valid.';
        }
        catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }
    validateWithoutSpace();
}


/* UC 2: Restrict the PIN code from taking alphabets or special characters at the beginning.
Check for A400088 – this should fail
*/
{
    let validatePINCode = () => {
        console.log("\n***** UC2 *****");
        try {
            let pincode = "A400088"//prompt("Enter pincode:");
            //regex pattern for pincode not allowing spaces
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            //test pincode with pattern
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Error! Pincode is not valid.';
        }
        catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }
    validatePINCode();
}


/* UC 3: Restrict the PIN code from taking alphabets or special characters at the End.
Check for 400088B – this should fail
*/
{
    let validatePINCode = () => {
        console.log("\n***** UC3 *****");
        try {
            let pincode = "400088B"//prompt("Enter pincode:");
            //regex pattern for pincode not allowing spaces
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            //test pincode with pattern
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Error! Pincode is not valid.';
        }
        catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }
    validatePINCode();
}


/* UC 4: Make sure 400 088 is also valid along with 400088
*/
{
    let validatePINCode = () => {
        console.log("\n***** UC4 *****");
        try {
            const prompt=require("prompt-sync")();  // For Taking input from user
            let pincode = prompt("Enter pincode: ");// string ex- 400 088
            //regex pattern for pincode not allowing spaces
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
            //test pincode with pattern
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Error! Pincode is not valid.';
        }
        catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }
    validatePINCode();
}


/* UC 5:- Validate Email address with a regex. The email consists of minimum 3 and optional 2 more
parts with mandatory @ and .    ex:- abc.xyz@bridgelabz.co.in 
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional
To begin with lets validate the mandatory part and start with abc
*/
const prompt=require("prompt-sync")();  // For Taking input from user
{
    console.log("\n***** UC5 Ex:- abc.xyz@gmail.com *****");
    let emailId = prompt("Enter your email id: ");  // ex:- abc.xyz@gmail.com 

    try {
        //regex pattern for email id
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@][a-z]{5,}.?[a-z]{2,}$");
        //test email id with pattern
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Error! Email id is not valid.';
    }
    catch (e) {
        //catch the error and print it
        console.error(e);
    }
}


/* UC 6: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz */
{
    console.log("\n***** UC6 Ex:- abc.xyz@bridgelabz.com *****");
    let emailId = prompt("Enter your email id: ");  // ex:- abc.xyz@bridgelabz.com 

    try {
        //regex pattern for email id
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@](bridgelabz).?[a-z]{2,}$");
        //test email id with pattern
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Error! Email id is not valid.';
    }
    catch (e) {
        //catch the error and print it
        console.error(e);
    }
}


/* UC 7: Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co */
{
    console.log("\n***** UC7 Ex:- abc.xyz@bridgelabz.co.any *****");
    let emailId = prompt("Enter your email id: ");  // ex:- abc.xyz@bridgelabz.co.any 

    try {
        //regex pattern for email id
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$");
        //test email id with pattern
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Error! Email id is not valid.';
    }
    catch (e) {
        //catch the error and print it
        console.error(e);
    }
}


/* UC 8: Lets handle optional part i.e. xyz in abc.xyz@bridgelabz.co.in
NOTE: make sure only following are valid special characters _,+,-,. proceeding to xyz 
*/
{
    console.log("\n***** UC8 Ex:- abc-xyz@bridgelabz.co.in *****");
    let emailId = prompt("Enter your email id: ");  // ex:- abc-xyz@bridgelabz.co.any 

    try {
        //regex pattern for email id
        let emailPattern = new RegExp("^(abc)[\. _ + -]{1}[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$");
        //test email id with pattern
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Error! Email id is not valid.';
    }
    catch (e) {
        //catch the error and print it
        console.error(e);
    }
}


/* UC 9: Finally lets close the expression with supporting optional parts.
Note: Top Level Domains (TLD) in the last part is the optional country code and its 2 characters only.

Sample Emails to Test
• A. Valid Emails
• 1. abc@yahoo.com,
• 2. abc-100@yahoo.com,
• 3. abc.100@yahoo.com
• 2. abc111@abc.com,
• 4. abc-100@abc.net,
• 5. abc.100@abc.com.au
• 6. abc@1.com,
• 7. abc@gmail.com.com
• 8. abc+100@gmail.com

B. Invalid Emails (TLD - Top Level Domains)
1. abc – must contains “@” symbol
2. abc@.com.my – tld can not start with dot “.”
3. abc123@gmail.a – “.a” is not a valid tld, last tld must contains at least two characters
4. abc123@.com – tld can not start with dot “.”
5. abc123@.com.com – tld can not start with dot “.”
6. .abc@abc.com – email’s 1st character can not start with “.”
7. abc()*@gmail.com – email’s is only allow character, digit, underscore and dash
8. abc@%*.com – email’s tld is only allow character and digit
9. abc..2002@gmail.com – double dots “.” are not allow
10. abc.@gmail.com – email’s last character can not end with dot “.”
11. abc@abc@gmail.com – double “@” is not allow
12. abc@gmail.com.1a -email’s tld which has two characters can not contains digit
13. abc@gmail.com.aa.au - cannont have multiple email’s tld
*/

{
    console.log("\n***** UC9 Validate all given examples *****");
    while(true) {
        let emailId = prompt("Enter your email id: ");  

        try {
            //regex pattern for email id
            let emailPattern = new RegExp("^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$");
            //test email id with pattern
            if (emailPattern.test(emailId))
                console.log('Email id is valid.');
            else
                throw 'Error! Email id is not valid.';
        }
        catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }   
}
