var cats = ["img/mean.jpg", "img/please.jpg", "img/baby.jpg", "img/sleepy.jpg", "img/jump.jpg", "img/chill.jpg"];

var names = ["Meany", "Miney", "Moe", "Teeny", "Tiny", "Toe"];



var spans = [
				document.createElement('span'), document.createElement('span'), document.createElement('span'),
				document.createElement('span'), document.createElement('span'), document.createElement('span')
			];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {


	 // This is the number we're on...
	    var cat = cats[i];
    	var name = names[i];
    	var span = spans[i];
    	
	    // We're creating a DOM element for the number
	    var box = document.createElement('div');
	    box.setAttribute('class', 'box');
	   
    	var p = document.createElement('p');
        p.textContent = name;
	    
	    var container = document.createElement('div');
	   	container.setAttribute('class', 'container');

	    var img = document.createElement('img');
	    img.src = cat;
	    img.setAttribute('class', 'pics');
	    

	    var txt = document.createElement('span');
	    txt.setAttribute('class', 'txt');
	    txt.textContent = "Number of clicks: "

	    span.textContent = 0;

	    img.addEventListener('click', (function(span) {
		  let count = 0;

		  return function() {
		    count += 1;
		    span.textContent = count;
		  };
		})(span));
	    // ... and when we click, alert the value of `num`

	    var imgDiv = document.querySelector('.images');

	    imgDiv.appendChild(box);
	    box.appendChild(p);
	    box.appendChild(container);
	    container.appendChild(img);
	    container.appendChild(txt);
	    container.appendChild(span);
	}

	// var one = document.getElementById('one');
	// var two = document.getElementById('two');
	// var three = document.getElementById('three');


	// var meany = document.getElementById('Meany');
	// var miney = document.getElementById('Miney');
	// var moe = document.getElementById('Moe');

	// var counter = 1;
	// var counter1 = 1;
	// var counter2 = 1;

	// one.addEventListener('click', function() {
	//     	meany.textContent = counter++;
	// });

	// two.addEventListener('click', function() {
	//     	miney.textContent = counter1++;
	// });

	// three.addEventListener('click', function() {
	//     	moe.textContent = counter2++; 
	// });