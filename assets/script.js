const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

const toggleMenu = () => {
	toggle.classList.toggle("active");
	navigation.classList.toggle("active");
}

toggle.addEventListener("click", toggleMenu);