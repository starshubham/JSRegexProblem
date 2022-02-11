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
