// search
function toggleSearchDropdown() {
	document.getElementById("searchDrop").classList.toggle("show");

	document.getElementById("search-field").focus();
	document.getElementById("search-field").select();
}
// Big menu mobile
const toggleBigSubmenu = () => {
	const link1 = document.getElementById("first-sub-link");
	link1.classList.remove("submenu-active");
	const menu = document.getElementById("bigSubmenu");
	const wrapper = document.getElementById("bigSubmenuWrapper");
	const toggle = document.getElementById("bigSubmenuToggle");
	const arrow = document.getElementById("bigSubmenuArrow");
	toggle.addEventListener("click",()=>{
		wrapper.classList.toggle("bigMenu--active");
		menu.classList.toggle("bigMenu--active");
		arrow.classList.toggle("arrow--rotate");
	}) 
	arrow.addEventListener("click",()=>{
		wrapper.classList.toggle("bigMenu--active");
		menu.classList.toggle("bigMenu--active");
		arrow.classList.toggle("arrow--rotate");
	}) 
		
	
}
// services
const otherServicesToggle = () =>{
	const links = document.querySelectorAll(".service-link");
	const footerDividers = document.querySelectorAll(".service-links .footer-divider");
	
	links.forEach(function(link,i){
		link.addEventListener("click",()=>{
			// close other
			links.forEach(function(link2,i){
				const ul = link2.nextSibling.nextSibling;
				const plus = link2.children[0];
				if((plus.innerHTML=="-")  && (link != link2)){
					plus.innerHTML = "+";
					ul.classList.remove("active");
					footerDividers[i].classList.toggle("hide");
				}
			})
			// open
			const ul = link.nextSibling.nextSibling;
			const plus = link.children[0];
			plus.innerHTML=="+" ? (plus.innerHTML) = "-" : (plus.innerHTML = "+"); 
			ul.classList.toggle("active");
			footerDividers[i].classList.toggle("hide");
			
		});
	} );
	
}
// function otherServicesToggle() {
	// 	document.getElementById("other-services-dropdown-content").classList.toggle("active");
	// 	const p = document.getElementById("last-plus");
	// 	p.innerHTML == "+" ? (p.innerHTML = "-") : (p.innerHTML = "+");
	// 	document.getElementById("last-divider").classList.toggle("hide");
	
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
const wrapper = document.getElementById("bigSubmenuWrapper");
const arrow = document.getElementById("bigSubmenuArrow");
burger.addEventListener("click", () => {
	burger.classList.toggle("burger-active");
	header.classList.toggle("header-active");
	wrapper.classList.remove("bigMenu--active")
	arrow.classList.remove("arrow--rotate");

});
function endScroll(id){
	document.getElementById(id).scrollLeft += 1000;
}
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
			if(toggle.offsetWidth+toggle.scrollLeft + 1 >= toggle.scrollWidth){
				toggle.style.transition = "all 0.1s linear";
				toggle.style.transform="translateX(-5px)";
				setTimeout(()=>{
					toggle.style.transform="translateX(0)";
				},300);

			} else {
				toggle.scrollLeft+=240;

			}
		})
	}
}

const toggleText = (contentID, toggleID, arrowID) => {
	const content = document.getElementById(contentID);
	const toggle = document.getElementById(toggleID);
	const arrow = document.getElementById(arrowID);
	arrow.style.transition = "all 0.2s ease-in-out"
	toggle.addEventListener('click',()=> {
		if(content.classList.contains("show-more-text")) {
			arrow.style.transform = "rotate(0)"
			content.classList.remove("show-more-text");
		}
		else {
			arrow.style.transform = "rotate(180deg)"
			content.classList.add("show-more-text");
		
		}
	})
}

const toggleArrowDown = () => {
	const arrow = document.getElementById("footer-arrow-down");
	const ul = document.getElementById("footer-phone-links");
	const activePhone = document.getElementById("footer-active-phone");
	const container = document.getElementById("footer-phone-wrapper");
	arrow.addEventListener("mouseover", ()=>{
		arrow.style.display = "none";
		ul.style.display="block";
		activePhone.style.display="none";
	})
	container.addEventListener("mouseleave",()=>{
		arrow.style.display = "block";
		ul.style.display="none";
		activePhone.style.display = "block";
	}) 

	
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
toggleBigSubmenu();
toggleArrowDown();
toggleText("big-text-content","big-text-toggle","big-text-arrow");
horizontalScroll("letters-scroll","letters-left","letters-right");
horizontalScroll("exp-boxes","box-left","box-right");
horizontalScroll("services-scroll-nav","services-left","services-right");
otherServicesToggle();
