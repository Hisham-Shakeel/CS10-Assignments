document.getElementById("pay").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let hours = +document.getElementById("hours").value;
  let money = +document.getElementById("money").value;

  // Process
  let total = hours * money;
  let msg = `Money for ${hours} hours at work for $${money} is $${total}`;

  // Output
  document.getElementById("output").innerHTML = msg;
}
