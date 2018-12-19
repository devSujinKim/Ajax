var container = '';
var foo = document.querySelector('#foo');
$.get('https://jsonplaceholder.typicode.com/users', (data) => {
	for(var i = 0; i < data.length; i++) {
		/*
        var foo = $('#foo');으로 선언했을 경우
        container += '<li><strong>' + data[i].name +'</strong><span>' + data[i].email + '</span></li>'
        */
        foo.innerHTML += `<li><strong>${data[i].name}</strong><span>${data[i].email}</span></li>`
	}
});

/*
function () {} 

() => {}

*/