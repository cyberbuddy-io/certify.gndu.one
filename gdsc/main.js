function func() {
   let url = document.getElementById("name").value;
   if (!url) {
      alert("Please enter your name");
      return;
   }

   document.getElementById("btn").href = "./Certificates/" + url + ".pdf";
   document.getElementById("btn").download = url + ".pdf";
   document.getElementById("btn").click();
}