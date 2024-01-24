document.addEventListener('DOMContentLoaded', () => {
	setTimeout(function () {
		navbarEvent()
	}, 100)
})

document.addEventListener('scroll', function (e) {
	navbarEvent()
})

function navbarEvent() {
	const navbar = document.querySelector('header nav')
	const traget = document.querySelector('#avatar')
	
	if ((traget.scrollHeight - 100) <= window.scrollY) {
		navbar.classList.add('active')
		navbar.setAttribute('data-bs-theme', 'light')
	} else {
		navbar.classList.remove('active')
		navbar.setAttribute('data-bs-theme', 'dark')
	}
}