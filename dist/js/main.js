// search
function toggleSearchDropdown() {
	document.getElementById("searchDrop").classList.toggle("show");

	document.getElementById("search-field").focus();
	document.getElementById("search-field").select();
}
// services
function otherServicesToggle() {
	document.getElementById("other-services-dropdown-content").classList.toggle("active");
	const p = document.getElementById("last-plus");
	p.innerHTML == "+" ? (p.innerHTML = "-") : (p.innerHTML = "+");
	document.getElementById("last-divider").classList.toggle("hide");
}

// Phone card
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
// split btn
const btnRight = document.getElementById("split-right");
const splitDrop = document.getElementById("split-drop");
const arrowDown = document.getElementById("split-down");

splitDrop.addEventListener("mouseover", () => {
	btnRight.classList.add("active-right");
	arrowDown.classList.add("arrow-down");
});
splitDrop.addEventListener("mouseout", () => {
	arrowDown.classList.remove("arrow-down");
	btnRight.classList.remove("active-right");
});

// Burger
const burger = document.querySelector(".burger");
const header = document.querySelector("#header");
burger.addEventListener("click", () => {
	burger.classList.toggle("burger-active");
	header.classList.toggle("header-active");
});

const horizontalScroll = (toggleId, leftId, rightId) => {
	const toggle = document.getElementById(toggleId);
	left = document.getElementById(leftId);
	right = document.getElementById(rightId);

	if(toggle && left && right) {
		left.addEventListener('click',()=>{
			if(toggle.scrollLeft == 0){
				toggle.style.transition = "all 0.1s linear";
				toggle.style.transform="translateX(5px)";
				setTimeout(()=>{
					toggle.style.transform="translateX(0)";
				},300);
			}
			else {
				toggle.scrollLeft-=240;
			}
		})
		right.addEventListener('click',()=>{

			toggle.scrollLeft+=240;
		})
	}
}

// turn off clickable links
$("a").click 
(
    function (evt)
    {
        evt.preventDefault(); 
        return false;  
    } 
);
// Run
horizontalScroll("letters-scroll","letters-left","letters-right");
horizontalScroll("exp-boxes","box-left","box-right");
