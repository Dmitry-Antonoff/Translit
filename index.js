/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
const btnAdd = document.querySelector("#btn-add");
const list = document.querySelector(".list");
const input = document.querySelector("#input");
const test = document.querySelector(".list-row-left");

btnAdd.addEventListener("click", () => {
  if (input.value !== "") {
    const divListRow = document.createElement("div");
    const divListRowLeft = document.createElement("div");
    const divListRowRight = document.createElement("div");

    divListRow.className = "list-row list-row-delete";
    divListRowLeft.className = "list-row-left";
    divListRowRight.className = "list-row-right";

    divListRow.appendChild(divListRowLeft);
    divListRow.appendChild(divListRowRight);

    let listRowText = document.createElement("p");
    listRowText.className = "list-row-text hover";
    listRowText.innerText = input.value;

    if (listRowText.innerText.length > 7) {
      listRowText.innerText = listRowText.innerText.substring(0, 7) + "...";

      let listRowHiddenText = document.createElement("p");
      listRowHiddenText.className = "list-row-text";
      listRowHiddenText.innerText = input.value;

      let listRowHiddenDiv = document.createElement("div");
      listRowHiddenDiv.className = "hidden hidden-left";
      listRowHiddenDiv.appendChild(listRowHiddenText);

      divListRowLeft.appendChild(listRowHiddenDiv);
    }

    let listRowTranslitedText = document.createElement("p");
    listRowTranslitedText.className = "list-row-text hover";
    listRowTranslitedText.innerText = translit(input.value);

    if (listRowTranslitedText.innerText.length > 7) {
      listRowTranslitedText.innerText = translit(
        listRowTranslitedText.innerText.substring(0, 7) + "..."
      );

      let listRowHiddenTranslitedText = document.createElement("p");
      listRowHiddenTranslitedText.className = "list-row-text";
      listRowHiddenTranslitedText.innerText = translit(input.value);

      let listRowHiddenTranslitedDiv = document.createElement("div");
      listRowHiddenTranslitedDiv.className = "hidden hidden-right";
      listRowHiddenTranslitedDiv.appendChild(listRowHiddenTranslitedText);

      divListRowRight.appendChild(listRowHiddenTranslitedDiv);
    }

    let btnClear = document.createElement("button");
    let imgBtn = document.createElement("img");

    btnClear.className = "list-row-btn";
    imgBtn.src = "/icons/Group 1.svg";

    btnClear.appendChild(imgBtn);

    let number = document.createElement("div");
    number.className = "number";
    divListRowLeft.insertBefore(number, divListRowLeft.firstChild);

    divListRowLeft.insertBefore(listRowText, divListRowLeft.children[1]);
    divListRowRight.insertBefore(
      listRowTranslitedText,
      divListRowRight.firstChild
    );
    divListRowRight.appendChild(btnClear);

    list.appendChild(divListRow);

    btnClear.addEventListener("click", () => {
      btnClear.parentNode.parentNode.parentNode.removeChild(
        btnClear.parentNode.parentNode
      );

      let left = document.querySelectorAll(".list-row-left");
      left.forEach((item, index) => {
        item.querySelector(".number").textContent = index + 1;
      });
    });

    let btnClearAll = document.querySelector("#btn-clear-all");
    btnClearAll.addEventListener("click", () => {
      document
        .querySelectorAll(".list-row-delete")
        .forEach((e) => e.parentNode.removeChild(e));
    });

    let left = document.querySelectorAll(".list-row-left");
    left.forEach((item, index) => {
      item.querySelector(".number").textContent = index + 1;
    });
  }
  input.value = "";
});

input.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return;
  btnAdd.click();
  input.value = "";
});

function translit(word) {
  let translited = "";
  const simbolArr = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < word.length; i++) {
    if (simbolArr[word[i]] === undefined) {
      translited += word[i];
    } else {
      translited += simbolArr[word[i]];
    }
  }
  return translited;
}
