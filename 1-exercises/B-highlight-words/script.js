function highlightWords(paragraph, colours) {
  let parentElement = document.getElementById("content");
  let paragraphElement = document.createElement("p");
  let selectElement = document.createElement("select");

  colours.forEach((color) => {
    color;
    let colorOption = document.createElement("option");
    colorOption.text = color;
    colorOption.value = color;
    selectElement.appendChild(colorOption);
  });

  paragraph.split(" ").forEach((words) => {
    let wordToSpan = document.createElement("span");
    wordToSpan.innerHTML = words + " ";
    wordToSpan.addEventListener("click", function () {
      let selectedColor = selectElement.value;
      if (selectedColor === "yellow") {
        wordToSpan.style.backgroundColor = selectedColor;
      } else if (selectedColor === "green") {
        wordToSpan.style.backgroundColor = selectedColor;
      } else if (selectedColor === "blue") {
        wordToSpan.style.backgroundColor = selectedColor;
      } else {
        wordToSpan.style.backgroundColor = "none";
      }
    });
    paragraphElement.appendChild(wordToSpan);
  });
  parentElement.appendChild(selectElement);
  parentElement.appendChild(paragraphElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
