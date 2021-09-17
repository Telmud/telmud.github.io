class TypeAnimation {
	constructor(text, element, delayFrom, delayTo){
		this.text = text;
		this.element = element;
		this.delayFrom = delayFrom;
		this.delayTo = delayTo;
		this.position = 0;
	}

	play() {
		this.increment();
	}

	increment(){
		this.element.innerHTML += this.text[this.position];
		this.position += 1;
		if(this.position < this.text.length){
			setTimeout(this.increment.bind(this), Math.floor(Math.random() * this.delayTo) + this.delayFrom);
		}
	}
}

function forEachObjectToAnimate(item, index){
	let anim = new TypeAnimation(item.getAttribute("data-anim"), item, 25, 50);
	setTimeout(anim.play.bind(anim), 1500 + (index * 250));
}

function onLoadFunc(){
	let header_anim = new TypeAnimation("Telmud", document.getElementById("header-text-anim"), 150, 200);
	header_anim.play();
	let toAnimate = document.querySelectorAll(".animate");
	toAnimate.forEach(forEachObjectToAnimate);
}

document.addEventListener("DOMContentLoaded", onLoadFunc); // Take it away from global scope
