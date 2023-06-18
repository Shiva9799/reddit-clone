function toggleSensitiveContent() {
	allowSensitiveContent = !hideSensitiveContentToggle.checked;
	localStorage.setItem("allowSensitiveContent", allowSensitiveContent);
	renderPosts(true);
}

function toggleSensitiveContentBlur() {
	blurSensitiveContent = blurSensitiveContentToggle.checked;
	localStorage.setItem("blurSensitiveContent", blurSensitiveContent);

	if (!blurSensitiveContent) {
		postsList.classList.add("disable-sensitive-content-blur");
	} else {
		postsList.classList.remove("disable-sensitive-content-blur");
	}

	console.log(blurSensitiveContent);
}

function scrollToTop() {
	window.scroll({
		top: 0, 
		behavior: "smooth",
	});
}

const d = new Date();
document.getElementById("date").innerHTML = d;