//your JS code here. If required.
const counterElement=document.getElementById("counter");
const incrementBtn=document.getElementById("incrementBtn");
incrementBtn.addEventListener("click",function() {
	let currValue=parseInt(counterElement.textContent);
	alert("Current value before increment: " + currValue);

      // Increment the value and update paragraph
      counterElement.textContent = currValue + 1;
	
})