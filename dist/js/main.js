function toggleSearchDropdown() {
	document.getElementById("searchDrop").classList.toggle("show");

	document.getElementById("search-field").focus();
	document.getElementById("search-field").select();
}
