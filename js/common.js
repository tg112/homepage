const navbarItems = [
	{
		name: "Home",
		link: "./index.html"
	},
	{
		name: "About",
		link: "./about.html"
	},
	{
		name: "Contact",
		link: "./contact.html"
	},
];

const createNavbar = (navBarItem) => {
	return `
		<a href=${navBarItem.link} class="navbar-link">
            <span>${navBarItem.name}</span>
        </a>
	`;
}

document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
	document.querySelector('.navbar').innerHTML = navbarItems.map(createNavbar).join("\n");
})
