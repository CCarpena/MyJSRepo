// Below you will find a string that I have encrypted.

// Encryption is basically when you take a symbol, and you modify it.
// When you encrypt something, it can be decrypted by using the key. 

// A key in this sense is just, a pattern that allows you to reverse the encryption. 
// Lets say I wanted to ENCRYPT my birthday which is 03/18/1993 by subtracting two to each number.
// 03 - 2 = 01 | 18 - 2 = 16 | 1993 - 2 = 1991 => So my encrypted birthday is 01/16/1991 

// One thing to note, if my birthday is already in January (01), and I subtract two... It won't work.
// So I'll need to say if(birthday == 01) => birthday = 11 <--- November 
// Same thing if my birthday was in february => 02 - 2 = 00 == 12 or December. 
// And you can decrypt the birthday by adding 2. Make sense?

// Next I have a string for you, and I also have an array of letters in the alphabet. Your job is to decrypt the message.
// I have shifted everything to the left by one character and you cannot cheat and decrypt it by hand. You have to use code. 
// For Example: C == 2 so my Encryption would turn C into "B" or 1. Make sense?

var decoder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// This is for the example of encryption when you run the code. 
var original = "CHICKEN NOODLE SOUP";

//You will decode this message.
var encryptedMessage = "BNMFQZSTKZSHNMR LHRRHNM ZBBNLOKHRGDC"

function encrypt(phrase){
    //New Phrase Starts Out Empty
    var newPhrase = "";
    //This is a type of for loop, specifically a For Each or For In
    //We use this by saying, for each i (which is a character) in the phrase (which is String meaning an ARRAY of characters)
    for(var i in phrase){
        //Here I'm checking if the position of the letter from the phrase within the decoder is 0. 
        //Note** In digital world, arrays and counting start at 0
        //You can check it out by referring to the commented code at line
        if(decoder.indexOf(phrase[i]) === 0){
            newPhrase += decoder[25];
        }else if(!decoder.includes(phrase[i])){
            //This section of code is saying, if there is a "_" in the phrase just add the space no need to encrypt
            // note that in the else if i use the "!" exclamation mark this make a true statement false
            // if(true) = true, but if(!true) = false
            newPhrase += " ";
        }else{
            //Basically this means if its not an A or not a space, then proceed to subtract one and replace the position.
            var np = (decoder.indexOf(phrase[i]) - 1);
            newPhrase += decoder[np];
        }
        //Finally, if the new phrase length is equal to the original, we can return this to the top. 
        if(newPhrase.length == phrase.length){
            return newPhrase;
        }
    }
}

//You will write your code here.
function decrypt(phrase){
    console.log("\nYou haven't completed your decrypt method");
    return phrase;
}

//Uncomment the code by deleting the // <-- two slashes Commenting allows you to make notes in code that don't get processed by the computer.
//They also help you communicate to other developers if some of the code is tricky. 

//Beginning of the Alphabet
// console.log(decoder[0]);
//End of the Alphabet
// console.log(decoder[25]);


// Here we tell the program to send the encrypted message to the screen.
console.log(encrypt(original));
// You'll know that your code is working officially when this decodes the message successfully.
console.log(decrypt(encryptedMessage));