function calculateTip() {
    //get input from form elements
  let bill = document.querySelector("#bill").value;
  let percentage = document.querySelector("#tipamount").value;
  let numOfPeople = document.querySelector("#numofpeople").value;

  // validate bill input
  if (bill === "") {
    return alert("Please enter a bill amount");
  }
  //validate tip percentage
  if (percentage === 0 || percentage === "") {
    return alert("Please enter a tip amount");
  }
  // validate number of people
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
  }
  // formula to calculate and format tip
  let tip = bill * percentage;
  let tipSplit = tip / numOfPeople;
  tipSplit = tipSplit.toFixed(2);

//Create element and text to add tip amount to
  var div = document.createElement("div");
  div.textContent = `Your tip amount is $${tipSplit} each.`;
  if (numOfPeople === "" || numOfPeople === 1) {
    div.textContent = `Your tip amount is $${tipSplit}.`;
  }
  div.setAttribute("id", "tipdiv");
  let container = document.querySelector("#form-container");
  container.setAttribute("style", "height: 480px;");
  container.appendChild(div);

// button text and onclick changed to clear page on next click
  let button = document.querySelector("#calculate");
  button.setAttribute("onclick", "clearPage()");
  button.textContent = "Reset";
}

function clearPage() {
    //change button text and onclick function to run calculator again
  let button = document.querySelector("#calculate");
  button.textContent = "Calculate!";
  button.setAttribute("onclick", "calculateTip()");

  // clear form inputs and values
  document.querySelector("#tipcalculator").reset();

  //remove previously created div and remove extra container space
  let tipDiv = document.querySelector("#tipdiv");
  tipDiv.remove("#tipdiv");
  let container = document.querySelector("#form-container");
  container.setAttribute("style", "height:400px;");
}
