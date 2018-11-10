// var tm0 = {

// 	firstName: 'dennis',
// 	lastName: 'reynolds',
// 	portrait: 'https://i.kinja-img.com/gawker-media/image/upload/s--yhmcyQ5d--/c_scale,f_auto,fl_progressive,q_80,w_800/qf8l1ncklxvg1yjpy6ah.jpg',
// 	title: 'co-founder'

// }
// var tm1 = {

// 	firstName: 'mac',
// 	lastName: 'macdonald',
// 	portrait:'https://i.imgur.com/omWMAkV.png',
// 	title: 'co-founder'

// }
// var tm2 = {

// 	firstName: 'charlie',
// 	lastName: 'kelly',
// 	portrait: 'https://m.media-amazon.com/images/M/MV5BZTYwNjM5ZTAtNTBlMy00ZjNkLTkxNDUtZGQ0YzExODQ3Yjc4XkEyXkFqcGdeQXVyNTgzMjQ1NDg@._V1_.jpg',
// 	title: 'cto'

// }
// var tm3 = {

// 	firstName: 'frank',
// 	lastName: 'reynolds',
// 	portrait: 'https://i.ytimg.com/vi/xi_4-wREv-I/maxresdefault.jpg',
// 	title: 'cfo'

// }
// var tm4 = {

// 	firstName: 'dee',
// 	lastName: 'reynolds',
// 	portrait: 'https://i.kinja-img.com/gawker-media/image/upload/s--mcJunkJu--/c_scale,f_auto,fl_progressive,q_80,w_800/jc30suuvtlndsdlgxdtx.jpg',
// 	title: 'cmo'

// }
document.body.className = "text-center bg";

var teamMembers = [];

function person(first, last, portrait, title) {
	this.firstName = first;
	this.lastName = last;
	this.portrait = portrait;
	this.title = title;
	


	teamMembers.push(this);
}

new person('Dennis','Reynolds','https://i.kinja-img.com/gawker-media/image/upload/s--yhmcyQ5d--/c_scale,f_auto,fl_progressive,q_80,w_800/qf8l1ncklxvg1yjpy6ah.jpg','co-founder');
new person('Charlie','Kelly','https://m.media-amazon.com/images/M/MV5BZTYwNjM5ZTAtNTBlMy00ZjNkLTkxNDUtZGQ0YzExODQ3Yjc4XkEyXkFqcGdeQXVyNTgzMjQ1NDg@._V1_.jpg','cto');
new person('Mac','Macdonald','https://i.imgur.com/omWMAkV.png','co-founder');
new person('Frank','Reynolds','https://i.ytimg.com/vi/xi_4-wREv-I/maxresdefault.jpg','cfo');
new person('Dee','Reynolds','https://i.kinja-img.com/gawker-media/image/upload/s--mcJunkJu--/c_scale,f_auto,fl_progressive,q_80,w_800/jc30suuvtlndsdlgxdtx.jpg','cmo');


person.prototype.getFullName = function() {
		return this.firstName + ' ' + this.lastName;
	};

person.prototype.founder = function() {
	if(this.title == 'co-founder') {
		this.isFounder = true;
	}
}



for(var i = 0; i < teamMembers.length; i++) {
	console.log(teamMembers[i].getFullName());
}

for(var i = 0; i < teamMembers.length; i++) {
	teamMembers[i].founder();

	var parent = document.createElement('div');
	var fn = document.createElement('p');
	var ln = document.createElement('p');
	var img = document.createElement('img');
	var t = document.createElement('p');
	var gfn = document.createElement('p');

	fn.textContent = teamMembers[i].firstName;
	ln.textContent = teamMembers[i].lastName;
	img.src = teamMembers[i].portrait;
	img.alt = teamMembers[i].getFullName();
	img.className = 'w-100 img-fluid size'
	t.textContent = teamMembers[i].title;
	gfn.textContent = teamMembers[i].getFullName();
	parent.className = 'col-4 mx-auto text-center mt-3';

	if(teamMembers[i].isFounder == true) {
		parent.className += ' shadow-lg border';
	}

	parent.appendChild(fn);
	parent.appendChild(ln);
	parent.appendChild(img);
	parent.appendChild(t);
	parent.appendChild(gfn);

	document.getElementsByClassName('row')[0].appendChild(parent);
}