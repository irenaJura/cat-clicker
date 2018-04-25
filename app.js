var model = {

	currentCat: null,
	cats: [ {
			imgSrc: "img/mean.jpg", 
			name: "Meany",
			clickCount: 0
	}, 
	{
			imgSrc: "img/please.jpg", 
			name: "Miney",
			clickCount: 0
	}, 
	{
			imgSrc: "img/baby.jpg", 
			name: "Moe",
			clickCount: 0
	},
	{
			imgSrc: "img/sleepy.jpg", 
			name: "Teeny",
			clickCount: 0
	},
	{
			imgSrc: "img/jump.jpg", 
			name: "Tiney",
			clickCount: 0
	},
	{
			imgSrc: "img/chill.jpg", 
			name: "Toe",
			clickCount: 0
	},
	]
	
};

var octopus = {

	init: function() {
		model.currentCat = model.cats[0];
		catView.init();
		catListView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCount: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
	
};


var catView = {

	init: function() {

		this.catElem = document.getElementById("cat");
		this.catNameElem = document.getElementById("cat-name");
		this.catCountElem = document.getElementById("cat-count");
		this.catImageElem = document.getElementById("cat-img");

		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCount();
		});

		this.render();
	},

	render: function() {
		var currentCat = octopus.getCurrentCat();

		this.catNameElem.textContent = currentCat.name;
		this.catCountElem.textContent = currentCat.clickCount;
		this.catImageElem.src = currentCat.imgSrc;
	}

};


var catListView = {

	init: function() {
		this.catListElem = document.getElementById("cat-list");

		this.render();
	},

	render: function() {
		var cat, elem, i;
		var cats = octopus.getCats();

		this.catListElem.innerHTML = "";

		for(i = 0; i < cats.length; i++) {
			cat = cats[i]; 

			elem = document.createElement("li");
			elem.textContent = cat.name;

			// closure-in-a-loop
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
		
	}

};

octopus.init();