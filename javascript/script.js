//This variable gets the padding value ID /element that will target the element that will display the padding taken from the slider
const paddingDisplay = document.querySelector("#padding-value");
//Variable that will target the input of the slider
const paddingInput = document.querySelector("#padding");
//To display the value onto my web page I will have to target the padding-value ID (responsible for displaying the output)
//To do this I can set the textContent to the value I get from the slider input and add px
paddingDisplay.textContent = paddingInput.value + "px";

//input event is used for form fields like input,textarea or select
// The input event fires every time the value of an input changes
//it is real time so when a user types or drags a slider or pastes text the event is triggered immediately
//So when a user moves the slider the padding value will be displayed on the scrren in real time
//Event = a package of info about “what just happened”.
//Event.target = the element that triggered it.
//event.target.value = the value of that element.
paddingInput.addEventListener("input", function (event) {
  //set the display textcontent to the value that triggered the event
  paddingDisplay.textContent = event.target.value + "px";
  //when that happens change the value padding of my box in real time as well
  document.querySelector(".adjustable-box").style.padding =
    paddingInput.value + "px";
  document.querySelector(".adjustable-box").style.backgroundColor = "coral";
  document.querySelector("#padding-value").style.color = "coral";
  paddingDisplay.style.fontSize = "15px";

  console.log(paddingInput.value);
});

//“When an event fires, the browser passes an event object to my handler.
// That object contains details about what triggered the event. Using event.target.value makes my function more flexible because it always points to the element that caused the event.
// This is useful when one function is shared across multiple inputs. In a simple case, like a single slider, I could use slider.value directly since I already have a reference — both approaches are valid.”

//Get the element that will display the margin value and store it in a variable called Margin display
const marginDisplay = document.querySelector("#margin-value");
console.log(marginDisplay);
//Get the slider input element and store it in a variable
const sliderInput = document.querySelector("#margin");
console.log(sliderInput);
//Set the textContent of the margin Display to the value I get when moving the slider
marginDisplay.textContent = sliderInput.value + "px";

sliderInput.addEventListener("input", function (event) {
  //Set the textContent of the margin Display to the value I get when moving the slider
  marginDisplay.textContent = event.target.value + "px";

  //As I set the margin in real time it should also dynamically change the margin of my adjustable-box
  //Get the adjustable box element and set the style to the new margin value
  document.querySelector(".adjustable-box").style.margin =
    sliderInput.value + "px";

  //Set the backgroundcolor of the margin
  document.querySelector(".wrapper").style.backgroundColor = "#1a1d24";
  document.querySelector(".adjustable-box").style.backgroundColor = "white";
  document.querySelector("#margin-value").style.color = "coral";
  marginDisplay.style.fontSize = "15px";
});
