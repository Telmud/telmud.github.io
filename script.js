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
	let anim = new TypeAnimation(item.getAttribute("data-anim"), item, 10, 25);
	setTimeout(anim.play.bind(anim), 1500 + (index * 250));
}

function processData(data) {
	console.log(data["name"]);
	let projects_article = document.getElementById("projects");
	let section_tag = document.createElement("section");
	let text = document.createElement("p");
	let span = document.createElement("span");
	let a = document.createElement("a");
	span.setAttribute("data-anim", "> " + data["name"]);
	span.setAttribute("class", "animate");
	a.setAttribute("href", data["html_url"]);
	a.appendChild(span);
	text.appendChild(a);
	section_tag.appendChild(text);
	projects_article.appendChild(section_tag);
}

function onLoadFunc(){
	let header_anim = new TypeAnimation("Telmud", document.getElementById("header-text-anim"), 150, 200);
	header_anim.play();
	let toAnimate = document.querySelectorAll(".animate");
	toAnimate.forEach(forEachObjectToAnimate);
}

fetch("https://api.github.com/users/Telmud/repos").then(x => x.json()).then(y => y.forEach(processData)).then(onLoadFunc)
