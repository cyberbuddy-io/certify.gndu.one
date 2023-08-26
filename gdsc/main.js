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
   let url = document.getElementById("name").value;
   if (!url) {
      alert("Please enter your name");
      return;
   }

   url = capitalizeWords(url);

   document.getElementById("btn").href = "./Certificates/" + url + ".pdf";
   document.getElementById("btn").download = "./Certificates/" + url + ".pdf";
   document.getElementById("btn").click();
}