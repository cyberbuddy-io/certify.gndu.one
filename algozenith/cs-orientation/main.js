function alertBoot(text) {
   document.querySelector(".alert h6").innerHTML = text;
   $(".alert").show("fade");
   setTimeout(() => {
      $('.alert').hide('fade');
   }, 4000);
}

function viewCerti() {
   let url = document.querySelector(".sBtn-text").innerHTML;
   if (url == "Select your name") {
      alertBoot("Please select your name");
      return;
   }
   document.getElementById("btn1").href = "./Certificates/" + url + ".pdf";
   document.getElementById("btn1").click();
}

function downloadCerti() {
   let url = document.querySelector(".sBtn-text").innerHTML;
   if (url == "Select your name") {
      alertBoot("Please select your name");
      return;
   }
   document.getElementById("btn2").download = "./Certificates/" + url + ".pdf";
   document.getElementById("btn2").click();
}

function copyCerti() {
   let url = document.querySelector(".sBtn-text").innerHTML;
   if (url == "Select your name") {
      alertBoot("Please select your name");
      return;
   }
   navigator.clipboard.writeText(location.href + "./Certificates/" + url + ".pdf");
   alertBoot("Link Copied to clipboard");
}

let names = [
   "Jaideep Singh",
   "Sahil Chabra",
   "Lavuluri Adarsh Royal",
   "Vanshi Puri",
   "Vishal Yadav",
   "Tanish Vansil",
   "Shaurya khosla",
   "Jasleen Kaur",
   "Aakriti Mathur",
   "Akshita raina",
   "Manoj Lakhera",
   "Sneha Goswami",
   "Naman Dhingra",
   "Kartik Sharma",
   "Vimanpreet kaur",
   "Kanan mahajan",
   "Jashan khokhar",
   "Md Yunus",
   "Kirandeep Kaur",
   "parneet kaur",
   "Sarthak Mittal",
   "Sahibjot Singh",
   "Kunal Khanna",
   "Vishnu Pratap Singh",
   "Sachin singh",
   "Rohain Singh Aulakh",
   "Samarjeet Singh",
   "Sourav Pathania",
   "Ashwath Soni",
   "Manseerat Kaur",
   "Harshleen Kaur",
   "Yuvika dabur",
   "Priyansh",
   "Jatin kumar",
   "Ganak Aggarwal",
   "Mahima Mahajan",
   "Parth Bhagat",
   "Aditya dadwal",
   "Harshwardhan Singh",
   "Harmanmeet Kaur",
   "Roushni Sharma",
   "Vasu Jindal"
]

names.sort();

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

for (let i in names) {
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