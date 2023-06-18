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

// explaination on profile page

$(document).ready(function () {
    $("button").click(function () {
        $("#create").load("create.txt");
    });
});

// toggle popup not working

function togglePopup() {
    $(".content").toggle();
}

// new window open

function downloadapp() {
    var myWindow = window.open("", "", "width=500, height=500");
    myWindow.blur();
}