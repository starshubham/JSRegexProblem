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
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
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
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
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
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
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
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
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
            console.log('Email id is valid');
        else
            throw 'Error! Email id is not valid';
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
            console.log('Email id is valid');
        else
            throw 'Error! Email id is not valid';
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
            console.log('Email id is valid');
        else
            throw 'Error! Email id is not valid';
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
            console.log('Email id is valid');
        else
            throw 'Error! Email id is not valid';
    }
    catch (e) {
        //catch the error and print it
        console.error(e);
    }
}