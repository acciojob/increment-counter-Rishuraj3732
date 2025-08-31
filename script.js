//your JS code here. If required.
const counterElement=document.getElementById("counter");
const incrementBtn=document.getElementById("incrementBtn");
incrementBtn.addEventListener("click",function() {
	let currvalue=parseInt(counterElement.textContent);
	alert("Current value before increment: " + currentValue);

      // Increment the value and update paragraph
      counterElement.textContent = currentValue + 1;
	
})