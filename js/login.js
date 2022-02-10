
document.getElementById('login-submit').addEventListener('click', function(){
	//get user email and password
	const userEmail = document.getElementById('user-email');
	const userPassword = document.getElementById('user-password');
	//check user email and password
	if(userEmail.value == 'bank@gmail.com' && userPassword.value == '12345678'){
		window.location.href = 'banking.html?loginSuccess=1';
		
	}
	
})

//log out Toast
const { search } = window.location;
const logoutSuccess = (new URLSearchParams(search)).get('logoutSuccess');
if(logoutSuccess==1){
	toastr.options = {
		"closeButton": true,
		"debug": false,
		"newestOnTop": false,
		"progressBar": true,
		"positionClass": "toast-bottom-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "2000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	      }
	 toastr["success"]("Successfully", "Logout");
	//  window.location.href = '';
	 
}

//when reload

// window.onbeforeunload = function(e) {
// //   window.location.href = 'www.google.com';
// window.location.replace("index.html?logoutSuccess=0");
// };

// window.addEventListener('beforeunload', function (e) {
// 	// Cancel the event
// 	e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
// 	// Chrome requires returnValue to be set
// 	e.returnValue = '';
// 	console.log('Refreshed');
// });

//when reload
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	window.location.replace("index.html?logoutSuccess=0");
}