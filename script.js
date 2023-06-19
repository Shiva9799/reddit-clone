// window confirm

function createpost() {
    let text = "Press a button\n Click Ok to submit or Cancel if you are not sure.";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
}

// scroll to top

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}

// date

const d = new Date();
document.getElementById("date").innerHTML = d;

// status alert in joining community

$(document).ready(function () {
    $("button").click(function () {
        $.get("demo.asp", function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});



// greeting 

const myTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
    document.getElementById("greet").innerHTML = "Nice to see you here"
}


// toggle popup not working

function togglePopup() {
    $(".content").toggle();
}

// new window open

function downloadapp() {
    var myWindow = window.open("", "", "width=500, height=500");
    myWindow.blur();
}


//form validate

function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Please Enter More Than 20 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}


//review addition

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }