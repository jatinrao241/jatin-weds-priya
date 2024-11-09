function openNav() {
    document.getElementById("mySidepanel").style.width = "285px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    
    const closeButtons = document.querySelectorAll(".closemodel");
    
    const openmultiplecallbutton = document.getElementById("multiplecallbutton");
    const openmultiplewhatsappbutton = document.getElementById("multiplewhatsappbutton");
    const openmultipletextmessagebutton = document.getElementById("multipletextmessagebutton");
    const multiplecallbox = document.getElementById("multiplecallbox");
    const multiplewhatsappbox = document.getElementById("multiplewhatsappbox");
    const multipletextmessagebox = document.getElementById("multipletextmessagebox");
  
   
    openmultiplecallbutton.addEventListener("click", function () {
      multiplecallbox.style.display = "block";
    });
  
    openmultiplewhatsappbutton.addEventListener("click", function () {
      multiplewhatsappbox.style.display = "block";
    });
  
    openmultipletextmessagebutton.addEventListener("click", function () {
        multipletextmessagebox.style.display = "block";
      });
  
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            multiplecallbox.style.display = "none";
            multiplewhatsappbox.style.display = "none";
            multipletextmessagebox.style.display = "none";
        });
    });
});


