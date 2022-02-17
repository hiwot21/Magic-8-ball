const ballButton = document.getElementById("askButton");
const outerCircle = document.getElementById("outer-circle");
const input = document.querySelector("input");
ballButton.addEventListener("click", ask);
function ask() {
  let answer = "";
  let ballText = document.getElementById("eightball-text");
  let randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber) {
    case 0:
      {
        answer = "It is certain.";
      }
      break;
    case 1:
      {
        answer = "It is decidedly so.";
      }
      break;
    case 2:
      {
        answer = "Without a doubt.";
      }
      break;
    case 3:
      {
        answer = "Yes - definitely.";
      }
      break;
    case 4:
      {
        answer = "You may rely on it.";
      }
      break;
    case 5:
      {
        answer = "As I see it, yes.";
      }
      break;
    case 6:
      {
        answer = "Most likely.";
      }
      break;
    case 7:
      {
        answer = "Outlook good.";
      }
      break;

    default: {
      answer = "You need to try harder.";
    }
  }
  outerCircle.classList.remove("animate-ball");
  // allows evaluating expressions that produce a value into places
  void outerCircle.offsetWidth; //returns the viewable width of an element
  outerCircle.classList.add("animate-ball");

  ballText.classList.remove("animate-text");
  void ballText.offsetWidth;
  ballText.classList.add("animate-text");

  setTimeout(() => {
    if (!input.value) {
      ballButton.innerHTML = "Please ask a question";
    } else document.getElementById("eightball-text").innerHTML = answer;
    input.innerHTML = answer;
    input.remove();
  }, 2000);
}
