const gerateBtn = document.querySelector(".color-genrater");
const container = document.querySelector(".color-container");

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("copy-btn")) {
    const hexavalue = event.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexavalue)
      .then(() => {
        success(event.target);
      })
      .catch(() => {
        console.error("Failed to copy text");
      });
  } else if (event.target.classList.contains("color")) {
    const hexavalue =
      event.target.nextElementSibling.querySelector(".hex-value").textContent;
    const icon = event.target.nextElementSibling.querySelector(".copy-btn");
    navigator.clipboard
      .writeText(hexavalue)
      .then(() => {
        success(icon);
      })
      .catch(() => {
        console.error("Failed to copy text");
      });
  }

  function success(ele) {
    ele.classList.remove("fa-solid","fa-copy");
    ele.classList.add("fa-solid", "fa-check");
    ele.style.color = "#27BE52";
    setTimeout(() => {
      ele.classList.remove("fa-solid", "fa-check");
      ele.classList.add("fa-solid", "fa-copy");
      ele.style.color = "";
    }, 1000);
  }
});
gerateBtn.addEventListener("click", genratePalette);
genratePalette();
function genratePalette() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(getColor());
  }

  displayPalette(array);
}
function getColor() {
  const hexa = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}

function displayPalette(array) {
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const colorContainer = document.createElement("div");
    const color = document.createElement("div");
    const colorBox = document.createElement("div");
    const colorInfo = document.createElement("div");
    const icon = document.createElement("i");
    const hexa = document.createElement("span");

    colorContainer.classList.add("color-container");
    colorBox.classList.add("color-box");
    color.classList.add("color");
    colorInfo.classList.add("color-info");
    hexa.classList.add("hex-value");

    icon.classList.add("fa-solid");
    icon.classList.add("fa-copy");
    icon.classList.add("copy-btn");

    color.style.backgroundColor = array[i];
    hexa.textContent = array[i];

    container.appendChild(colorContainer);
    colorContainer.appendChild(colorBox);
    colorBox.appendChild(color);
    colorBox.appendChild(colorInfo);
    colorInfo.appendChild(hexa);
    colorInfo.appendChild(icon);
  }
}
