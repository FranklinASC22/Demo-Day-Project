function sub()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  numThree = parseInt(document.getElementById("three").value);
  numFour = parseInt(document.getElementById("four").value);
  sum = numOne - numTwo;
  fin = sum - numThree;
  if(fin >= numFour){
  document.getElementById("result").value = "Great job, saving money!!!";
  }
  if(fin < numFour){
    document.getElementById("result").value = "You need to make some changes to your budget!!!";
    }
}





