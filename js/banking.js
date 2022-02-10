//check input field
document.getElementById('deposite-amount').addEventListener('keyup', function(event){
	if(event.target.value != ''){
		document.getElementById('deposite-button').removeAttribute('disabled');
	} else{
		document.getElementById('deposite-button').setAttribute('disabled', true);
	}
});

//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function(){
	//get the amount deposited
	const depositeInput = document.getElementById('deposite-amount');
	const depositeAmount = parseFloat(depositeInput.value);
	
	//set deposite
	const depositeTotal = document.getElementById('deposite-total');
	const prevDeposite = parseFloat(depositeTotal.innerText);
	
	
	//clear deposite input field
	depositeInput.value = '';

	// update account balance
	const balanceTotal = document.getElementById('balance-total');
	const prevBalance = parseFloat(balanceTotal.innerText);
	
	
	if(depositeAmount>0){
		depositeTotal.innerText = depositeAmount + prevDeposite;
		balanceTotal.innerText = depositeAmount + prevBalance;
		//Toast
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
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	      }
		toastr["success"](`$${depositeAmount} Successfully`, "Deposite");
		document.getElementById('deposite-button').setAttribute('disabled', true);
		
	} else{
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
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		      }
			toastr["error"](`$${depositeAmount} Unsuccessfully for Invaild Amount`, "Deposite");
			document.getElementById('deposite-button').setAttribute('disabled', true);
			
	}
	
	

	
	
})

//check input fo withdraw
document.getElementById('withdraw-amount').addEventListener('keyup', function(event){
	if(event.target.value != ''){
		document.getElementById('withdraw-button').removeAttribute('disabled');
	} else{
		document.getElementById('withdraw-button').setAttribute('disabled', true);
	}
});



//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
	//get the amount withdraw
	const withdrawInput = document.getElementById('withdraw-amount');
	const withdrawAmount = parseFloat(withdrawInput.value);

	//set withdraw
	const withdrawTotal = document.getElementById('withdraw-total');
	const prevWithdraw = parseFloat(withdrawTotal.innerText);
	
	//clear withdraw input field
	withdrawInput.value = '';

	// update account balance
	const balanceTotal = document.getElementById('balance-total');
	const prevBalance = parseFloat(balanceTotal.innerText);
	const currentBalance = prevBalance - withdrawAmount;
	if(withdrawAmount<=0){
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
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		      }
			toastr["error"](`$${withdrawAmount} Unsuccessfully for Invaild Amount`, "Withdraw");
			document.getElementById('withdraw-button').setAttribute('disabled', true);
	} else if(currentBalance>=0){
		withdrawTotal.innerText = withdrawAmount + prevWithdraw;
		balanceTotal.innerText = currentBalance;
		//Toast
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
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	      }
		toastr["success"](`$${withdrawAmount} Successfully`, "Withdraw");
		document.getElementById('withdraw-button').setAttribute('disabled', true);
		
	}
	else{
		//Toast
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
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	      }
	toastr["error"](`$${withdrawAmount} Unsuccessfully for Less Balance`, "Withdraw");
		document.getElementById('withdraw-button').setAttribute('disabled', true);
	}
	
	

});

//logout Button
document.getElementById('logout').addEventListener('click', function(){
	
	window.location.href = 'index.html?logoutSuccess=1';
	
})


//log in Toast
const { search } = window.location;
const loginSuccess = (new URLSearchParams(search)).get('loginSuccess');
if(loginSuccess==1){
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
	 toastr["success"]("Successfully", "Login");
	//  window.location.href = '';
	 
}
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	window.location.replace("banking.html?loginSuccess=0");
}