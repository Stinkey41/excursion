function vibor() {
	let x = document.querySelector('#spisok');
	let selValue = x.value;
	let l1 = document.querySelector('.loc1');
	let l2 = document.querySelector('.loc2');
	let l3 = document.querySelector('.loc3');
	let l4 = document.querySelector('.loc4');
	let l5 = document.querySelector('.loc5');
	let df = document.querySelector('.default')
	switch (selValue) {
		case "m1":
			l1.classList.remove('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			df.classList.add('hidden');
			break;
		case "m2":
			l1.classList.add('hidden');
			l2.classList.remove('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			df.classList.add('hidden');
			break;
		case "m3":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.remove('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			df.classList.add('hidden');
			break;
		case "m4":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.remove('hidden');
			l5.classList.add('hidden');
			df.classList.add('hidden');
			break;
		case "m5":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.remove('hidden');
			df.classList.add('hidden');
			break;
		case "default":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			df.classList.remove('hidden');
			break;

	}
}