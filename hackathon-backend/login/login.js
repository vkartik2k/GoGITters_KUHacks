$(document).ready(function () {
	async function postData(url = '', data = {}) {
		const response = await fetch(url, {
		  method: 'POST',
		  mode: 'cors',
		  cache: 'no-cache',
		  credentials: 'same-origin',
		  headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		  redirect: 'follow', 
		  referrerPolicy: 'no-referrer', 
		  body: JSON.stringify(data) 
		});
		return response.json();
	  }
	$("form").submit(function(e){
        e.preventDefault();
    });
    const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});

	$("#signInBtn").click(() => {
		console.log("clicked")
		let email = $("#emailLogin").val()
		let password = $("#passwordLogin").val()

		postData('../route/login', { email:email, password:password })
		.then(data => {
			console.log(data); 
			if(data.done === true ) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				console.log(data.user)
				if(data.user.role === 'STUDENT') window.location.href = '/dashboard'
				else window.location.href = '/teacher/dashboard'
			}
			else {
				alert(data.error)
			}
		});	
	})

	$("#signUpBtn").click(() => {
		let email = $("#signUpEmail").val()
		let password = $("#signUpPassword").val()
		let first = $("#signUpFirstName").val()
		let last = $("#signUpLastName").val()
		let role = $("#signUpRole").val()


		postData('../route/signup', { email:email, password:password, role: role, firstName: first, lastName: last })
		.then(data => {
			console.log(data); 
			if(data.done === true ) {
				$("#signIn").click()
				alert(data.message)
			}
			else {
				alert(data.error)
			}
		});	
	})
})