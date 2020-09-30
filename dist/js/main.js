function toggleSearchDropdown() {
	document.getElementById("searchDrop").classList.toggle("show");

	document.getElementById("search-field").focus();
	document.getElementById("search-field").select();
}

function otherServicesToggle() {
	document.getElementById("other-services-dropdown-content").classList.toggle("active");
	const p = document.getElementById("last-plus");
	p.innerHTML == "+" ? (p.innerHTML = "-") : (p.innerHTML = "+");
	document.getElementById("last-divider").classList.toggle("hide");
}

function togglePhone() {
	document.getElementById("header-phone-card").classList.add("active");
	document.getElementById("phone-toggle-info").classList.add("hide");
	document.getElementById("phone-toggle").classList.add("hide");
}

document.getElementById("header-phone-card").addEventListener("mouseleave", () => {
	document.getElementById("header-phone-card").classList.remove("active");
	document.getElementById("phone-toggle-info").classList.remove("hide");
	document.getElementById("phone-toggle").classList.remove("hide");
});
