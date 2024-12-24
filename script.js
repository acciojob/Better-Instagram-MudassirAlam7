//your code here
let imageList = document.getElementsByClassName('image')
let firstElement = null
for(let list of imageList){
	list.addEventListener('dragstart', function (e) {
		firstElement = e.target
	})
	list.addEventListener('dragover', function (e) {
		e.preventDefault()	
	})
	list.addEventListener('drop', function(e){
		e.preventDefault()
		let secondElement = e.target
		if(firstElement && firstElement!==secondElement){
			let firstBg = window.getComputedStyle(firstElement).backgroundImage
			let secondBg = window.getComputedStyle(secondElement).backgroundImage

			firstElement.style.backgroundImage = secondBg
			secondElement.style.backgroundImage = firstBg
		}
		firstElement = null
	})
}
