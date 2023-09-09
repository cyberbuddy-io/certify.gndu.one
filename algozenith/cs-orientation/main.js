function capitalizeWords(str) {
   // Split the string into an array of words
   const words = str.split(' ');

   // Capitalize the first letter of each word and join them back together
   const capitalizedWords = words.map(word => {
      // Ensure the word is not an empty string
      if (word.length > 0) {
         return word[0].toUpperCase() + word.slice(1);
      } else {
         return '';
      }
   });

   // Join the capitalized words with a space to form the final string
   const result = capitalizedWords.join(' ');

   return result;
}

function func1() {
   let url = document.querySelector(".sBtn-text").innerHTML;
   if (!url) {
      alert("Please enter your name");
      return;
   }

   url = capitalizeWords(url);

   document.getElementById("btn").href = "./Certificates/" + url + ".pdf";
   document.getElementById("btn").download = "./Certificates/" + url + ".pdf";
   document.getElementById("btn").click();
}

let names = ["aditya dadwal", "saksham", "bhavishya", "sayam"];

function createDrop(name) {
   const li = document.createElement("li");
   li.classList.add("option");

   // Create the <i> element for the icon
   const icon = document.createElement("i");
   icon.classList.add("bx", "bxl-github");
   icon.style.color = "#171515";

   // Create the <span> element for the text
   const span = document.createElement("span");
   span.classList.add("option-text");
   span.textContent = name;

   // Append the <i> and <span> elements to the <li> element
   li.appendChild(icon);
   li.appendChild(span);

   document.getElementsByClassName("options")[0].append(li);
}

for(let i in names) {
   createDrop(names[i]);
}

const optionMenu = document.querySelector(".select-menu"),
   selectBtn = optionMenu.querySelector(".select-btn"),
   options = optionMenu.querySelectorAll(".option"),
   sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option => {
   option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
   });
});