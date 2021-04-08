
// Toggle mobile nav
function navToggle(toggleClass) {
	if (document.querySelector(toggleClass)) {
		let toggle = document.querySelector(toggleClass)
		toggle.addEventListener('click', () => {
			document.body.classList.toggle('nav-open')
		})
	}
}

navToggle('.toggle')

// Toggle item details 
function itemToggle(toggleClass) {
	if (document.querySelector(toggleClass)) {
		let toggle = document.querySelectorAll(toggleClass)		
		for (let i = 0; i < toggle.length; i++) {
			let tgl = toggle[i]
			tgl.addEventListener('click', () => {
				tgl.parentElement.classList.toggle('active')
				document.querySelector('.grid').classList.add('item-active')	
				tgl.parentElement.parentElement.parentElement.scrollTop = 0
				tgl.parentElement.querySelector('.details').scrollTop = 0
			})
			if (tgl.parentElement.querySelector('.close')) {
				let cls = toggle[i].parentElement.querySelector('.close')
				cls.addEventListener('click', () => {
					cls.parentElement.parentElement.classList.remove('active')
					document.querySelector('.grid').classList.remove('item-active')
					document.querySelector('.grid').parentElement.scrollTop = 0
				})
			}
		}

	}
}

itemToggle('.thumbnail')


function scrollTest() {
	let x = document.querySelector('.active .details')
	console.log(x)
	x.scrollTop = 0
}




//image popup 

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport:false
})





