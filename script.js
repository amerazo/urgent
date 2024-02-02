const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const responseDiv = document.getElementById("response");
const responseText = document.getElementById("responseText");

const phrases = [
  "Are you sure?",
  "You never loved me, it was all a lie.... are you REALLY sure?",
  "Think again!",
  "WOWWWWWWWWWW, Last chance!",
  "Surely not?",
  "You might regret this!",
  "Our daughter does not approve of this behavior, try this again....",
  "Give it another thought!",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "You HAVE NO option, you WILLLLLLL be my Valentine ;(",
];

let noCount = 0;

noButton.addEventListener("click", () => {
  if (noCount < phrases.length) {
    responseText.textContent = phrases[noCount];
    noCount++;
    responseDiv.style.display = "block";
  } else {
    responseText.textContent = "Okay, I understand. I may not be your valentine, but in my heart, you are mine";
    responseDiv.style.display = "block";
    noButton.disabled = true;
  }
});

yesButton.addEventListener("click", () => {
    responseText.textContent = "Looking forward to date night at Berretta's hot stuff ;)";
    responseDiv.style.display = "block";
    yesButton.disabled = true;
    noButton.disabled = true;
  
    const image = document.createElement("img");
    image.src = "jacque.jpeg";
    image.alt = "Heart Image";
  
    image.classList.add("centered-image");
  
    responseDiv.appendChild(image);
  });