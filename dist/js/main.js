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
