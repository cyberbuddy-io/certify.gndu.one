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

   document.getElementById("btn2").href = "./Certificates/" + url + ".pdf";
   document.getElementById("btn2").download = "./Certificates/" + url + ".pdf";
   document.getElementById("btn2").click();
}

function copyCerti() {
   let url = document.querySelector(".sBtn-text").innerHTML;
   if (url == "Select your name") {
      alertBoot("Please select your name");
      return;
   }
   navigator.clipboard.writeText(location.href + "Certificates/" + url + ".pdf");
   alertBoot("Link Copied to clipboard");
}

let names = ["Aakhri mathur", "Akshat Srivastava", "Aanchal", "Aaryan Sharda", "Aarzoo", "Aastha", "Abhay Kumar", "Abhitesh Singh", "Abit Singh", "Aditi Kapoor", "Agam deep", "Agrim Vij", "Akansha", "Akshad", "Akshat Mehta", "Akshita raina", "Akshita Thakur", "Aman Virk", "Anantvir Singh", "Anchal", "Aniket Singh", "Ansh Arora", "Anshika Gupta", "Archi Mahajan", "ARJIT RANDEV", "Aryan Verma", "Ashwath Soni", "Bandeep kaur", "bhavishya", "Bhavisya", "Bhawik Kharod", "Bhomik khanna", "Bhumesh Mahajan", "Daman Jeet Kaur", "Danish", "Debashis Nahak", "Deepakshi", "Deepali", "Dhruv Sharma", "Diksha sharma", "Dilraj Singh", "Divanshi Sahni", "Divyatejpal singh", "Divye khanna", "Diya", "Diya behal", "Ganak Aggarwal", "Gautam chalotra", "Gopesh Mahajan", "Gouri", "GUNEET KAUR", "Gurleen Kaur", "Harashish Singh Rohewal", "Hardik Aggarwal", "Hargun Singh", "Harmanjit Singh", "Harmanmeet Kaur", "Harmanpal Singh", "Harpreet kaur", "Harsh kumar", "Harshita vashisht", "Harsimran Kaur", "Himanshi Malhotra", "Hiteshi Joshi", "Inderjit Singh", "Ishita Swaroop Sood", "Jagjeet Singh", "Jagroop kaur", "Jaskaran Singh", "JASKIRAT KAUR", "Jaskirat Singh", "Jasleen Kaur", "Jasmeen", "Jatin", "Jatin kumar", "Jatinder Singh", "Jeevika gupta", "Jessica kaur", "Jobanpreet Kaur", "Jujhar Singh", "Jyoti kumari", "Kanan mahajan", "Kanishka Vashisht", "Karan Mehta", "Karman", "Kartik Sharma", "KASAK AGGARWAL", "Kashish", "Khurram bhat", "Khushi Gupta", "Khushi Ram", "Khushmeet kaur", "Khushpreet Singh", "Khyati Arora", "Kirandeep Kaur", "Kiranveer Singh Randhawa", "Komalpreet kaur", "Krishna Sharma", "Kunal Khanna", "Lavisha Mahajan", "Lovepreet Singh", "Lukarta", "Madhav Sharma", "Manan Lamba", "Manas Gupta", "Manasvi Sharma", "Manish kumar", "Manmohit Singh", "Manoj Lakhera", "Manreet kaur", "Mansha syal", "Mansirat kaur", "Mantej Handa", "Manya Verma", "MD YUNUS", "Mehak garg", "Mehak Grover", "Mehakpreet kaur", "Mishika", "Mohan Raichand", "Mridul sharma", "Muskan sharma", "Naman Dhingra", "Namya Dutta", "Navdeep Sumbria", "Navi Kumar", "Navkirat Singh", "Navneet Kaur Saini", "Navraj Singh", "Navroz Singh", "Nikhil", "Nikhil Garg", "Nimardeep Kaur", "Nimratjot kaur", "Nitish", "Nivedika", "Paras Mahajan", "Parmanand", "Parth Bhagat", "Parth kohli", "Piyush Sharma", "Poonam", "Poonam Mehan", "Prachi", "Pragati Sharma", "Prakriti Sharma", "Pratham Mahajan", "Pratham Suri", "Pratibha Mahajan", "Preet Bhagria", "Preeti", "Preetinder Kaur", "Prem Gill", "Priya Sidhu", "Priyansh", "Priyanshu", "Rabkirat Kaur", "Raghav Bhardwaj", "Raghav Sharma", "Rahul Wadhan", "Rajwinder Kaur", "Rana Thakur", "Rashmeet Kaur", "Ridhima bhatti", "Ridhima Sharma", "Rishav Singh", "Ritika", "Ritvik", "Ritvik Sarswat", "Riya Arora", "Roushni Sharma", "Sahibjot Singh", "sahil", "Sahil Chabra", "Saksham", "Saksham Arora", "Samridhi Sharma", "Sandeep badhan", "Sanya Arora", "Sapna", "Sarah", "Sarthak khanna", "Sayam Sharma", "Shahnaj Siddique", "Shaina Soni", "Shaurya khosla", "Shivani Emanuel", "Shreya Sharma", "Shruti", "Shubham khosla", "Shubhdeep Kaur", "Simardeep kaur", "Simarpreet Kaur", "Simran", "Sneha Goswami", "Sonali", "Sourabh Awasthi", "Stuti", "Suhani Thakur", "Sujal Mahajan", "Sumedha Sharma", "Sunidhi Sharma", "Suraj Singh", "Surbhi", "Sushila", "Tania", "Tanish Bhatia", "Tanish Vansil", "Tanu Sharma", "Tanveer kaur", "Tanya", "Tanya Kalia", "Tushar", "Vania", "Vanshi Puri", "Vanshika Saini", "Varun Kumar", "Vidhi Kashyap", "Vimanpreet Kaur", "Vishal Yadav", "Yuvika dabur", "Yuvraj Bhandari", "Yuvraj Chopra", "Tanishka"];

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