function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// welcome greaetin
 const time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = "Good afternoon! welcome to ";
    } else if (time < 20) {
      greeting = "Good day ! welcome to ";
    } else {
      greeting = "Good evening ! welcome to ";
    }
    document.getElementById("demo").innerHTML = greeting;