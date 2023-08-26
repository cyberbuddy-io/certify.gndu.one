function func() {
   let url = document.getElementById("name").value;
   if (!url) {
      alert("Please enter your name");
      return;
   }

   document.getElementById("btn").href = "./certificates/" + url + ".pdf";
   document.getElementById("btn").download = url + "-certificate.pdf";
   document.getElementById("btn").click();
}