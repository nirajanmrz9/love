const answers_no = [
  "No",
  "Are you sure?",
  "Are you really sure??",
  "Are you really really sure???",
  "Think again?",
  "Don't believe in second chances?",
  "Why are you being so cold?",
  "Maybe we can talk about it?",
  "I am not going to ask again!",
  "Ok now this is hurting my feelings!",
  "You are now just being mean!",
  "Why are you doing this to me?",
  "Please give me a chance!",
  "I am begging you to stop!",
  "Ok, Let's just start over..",
];

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const banner = document.getElementById("banner");
const buttons = document.getElementsByClassName("buttons")[0];
const successMessage = document.getElementById("success-message");
const qtnMessage = document.getElementById("question-heading");

let i = 1;
let size = 50;
let clicks = 0;

/* NO button click */
no_button.addEventListener("click", () => {
  // Change banner first time
  if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  clicks++;

  // Increase YES button size
  const sizes = [40, 50, 30, 35, 45];
  const random = Math.floor(Math.random() * sizes.length);
  size += sizes[random];

  yes_button.style.height = `${size}px`;
  yes_button.style.width = `${size}px`;

  // Change NO button text
  if (i < answers_no.length) {
    no_button.innerText = answers_no[i];
    i++;
  } else {
    alert(answers_no[answers_no.length - 1]);

    // Reset
    i = 1;
    size = 50;

    no_button.innerText = answers_no[0];
    yes_button.innerText = "Yes";

    yes_button.style.height = "50px";
    yes_button.style.width = "50px";
  }
});

/* YES button click */
yes_button.addEventListener("click", () => {
  // Change banner
  banner.src = "public/images/yes.gif";
  refreshBanner();

  // Hide buttons
  buttons.style.display = "none";

  // Show success message
  successMessage.style.display = "block";
  qtnMessage.style.display = "none";
});

/* Refresh GIF */
function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
