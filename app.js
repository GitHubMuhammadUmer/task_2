

var userInput = prompt("Enter A string");
var StringLength = userInput.length;
for(var i =0; i<StringLength/2; i++){

}
if(userInput[i]!=userInput[StringLength-1-i]){
    alert(userInput + " " + "is a palindrome");
}else{
    alert(userInput + " " + "is not a palindrome");
}

