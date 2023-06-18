

function scrollToTop() {
	window.scroll({
		top: 0, 
		behavior: "smooth",
	});
}

const d = new Date();
document.getElementById("date").innerHTML = d;