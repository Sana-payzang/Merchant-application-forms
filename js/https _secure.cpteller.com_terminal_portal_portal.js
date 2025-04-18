/*
#
# *******************************************************************************
#  COPYRIGHT (C) 2015 CONVENIENT PAYMENTS, LLC
# *******************************************************************************
#
#  FILE: ~/terminal/portal/portal.js 
#
#  ***** D E S C R I P T I O N **************************************************
#
#  JS file for the OPP.
#
#  ***** R E V I S I O N   L I S T **********************************************
#
#  REV   DATE     BY       PURPOSE
#  ===== ======== ======== ======================================================
#  2.0.1 07/10/15 Zirbel   Added logic to strip commas and dollar signs from the amount field in calcFee(). 
#  2.0.2 08/17/15 Zirbel   added js method to remove disabled property from State and Province select inputs when the form is submitted. 
#  2.0.3 08/21/15 Zirbel   custom fields now required, cleaned up unused methods like searchAction() addToCart(),
#  2.0.4 09/03/15 Zirbel   updated calcFee() to work with visa debit fee structure
#  2.0.5 09/09/15 Zirbel   updated calcFee() to send valid arguments to calc_fee in terminal.cfc in all cases.
# *******************************************************************************
#
*/

$(document).ready(function () {
	$("input[type=text]").first().focus();
	$('#GrpTextProvince').hide();
	if ($('#OpKey').val() == "HHTNoaK3qDDp" || $('#thismid').val() == "1114") {
		$('#AccountGroup').hide();
		//$('#Account').prop('required', false);
	}
	setPaymentMethod();
	selectCountry();
	calcFee();
	hideDepartmentFields();
	//alert($('#Address1').is(':required'));
	$("#sessionTimeoutAlert").hide();
	var thismid = $('#thismid').val();
	if (thismid == 884 || thismid == 918 || thismid == 919 || thismid == 920 || thismid == 921 || thismid == 922 || thismid == 1012){
		//alert($('#approvalURL').val());
		if ($('#reloadvalue').val() == ''){
			$('#reloadvalue').val("x");
		}
		else {
			$('#reloadvalue').val("");
			location.reload();
		}
		var approval_present = $('#wyApproval').val();
		//alert(approval_present);
		if (approval_present == 'approved'){
			alert("Your payment has been approved, but you are not done yet. You will be redirected to the Wyoming Game and Fish site to complete your transaction.");
			var approval_url = $('#approvalURL').val();
			window.location.href = approval_url;
		}
		if (approval_present == 'declined'){
			var checkit = confirm("Your payment was not successful. Click OK to try another payment. Click Cancel to return to the Wyoming Game and Fish page.");
			if (checkit){
				var retry_url = $('#retryURL').val();
				window.location.href = retry_url;
			}
			else {
				window.location.href = 'https://wgfd.wyo.gov/';
			}
		}
		if (approval_present != 'approved' && approval_present != 'declined'){
			var url = '';
			$('#AccountGroup').hide();
			$("#sessionTimeoutAlert").show();
			//alert('minutes elapsed: ' + $('#MinutesElapsed').val() + 'seconds_elapsed' + $('#SecondsElapsed').val());
			var time_is_up = $('#wytimeout').val();
			if (time_is_up == 'true'){
				//inform and redirect
				var url = 'https://wgfd.wyo.gov/';
				alert("Your session has expired. You will be redirected to the Wyoming Game and Fish site.");
				window.location.href = url;
			}
			else{
				//get the remaining time and populate the clock
				var minutes_left = $('#minutesleft').val();
				var seconds_left = $('#secondsleft').val();
				if (seconds_left == 0 && minutes_left > 0){
					minutes_left = minutes_left -1;
					seconds_left = 59;
				}
				$('#Minutes').text(minutes_left);
				$('#Seconds').text(seconds_left);
				var countdownTimer = setInterval(function(){
					seconds_left = seconds_left - 1;
					if (seconds_left >= 0 && minutes_left >= 0){
						//display the minutes and seconds
						$('#Minutes').text(minutes_left);
						if (seconds_left < 10){
							$('#Seconds').text('0' + seconds_left);
						}
						else{
							$('#Seconds').text(seconds_left);
						}
					}
					else{
						seconds_left = 59;
						minutes_left = minutes_left -1;
						if (minutes_left <= -1){
							//time expired while on the page -
							$('#Minutes').text('0');
							$('#Seconds').text('0');
							//inform and redirect
							var url = 'https://wgfd.wyo.gov/';
							clearInterval(countdownTimer);
							alert("Your session has expired. You will be redirected to the Wyoming Game and Fish site.");
							window.location.href = url;
						}
						else{
							//display minutes and seconds
							$('#Minutes').text(minutes_left);
							if (seconds_left < 10){
								$('#Seconds').text('0' + seconds_left);
							}
							else{
								$('#Seconds').text(seconds_left);
							}
						}
					}
				}, 1000);
			}
		}
				
	}
	
	//if radio Individual is checked on load(default)
	if ($('#RadioIndividual').is(':checked')) {
		$('#FirstName').attr('required', true);
		$('#FirstName').show();
		$('#FirstNameLabel').show();
		$('#LastNameLabel').text("Last Name");
	}
	//if radio Business is checked on load
	if ($('#RadioBusiness').is(':checked')) {
		$('#FirstName').removeAttr('required');
		$('#FirstName').hide();
		$('#FirstNameLabel').hide();
		$('#LastNameLabel').text("Business Name");
	}
	//click Business Radio Button
	$('#RadioBusiness').on('click', function(){
		$('#FirstName').removeAttr('required');
		$('#FirstName').val('');
		$('#FirstName').hide();
		$('#FirstNameLabel').hide();
		$('#LastNameLabel').text("Business Name");
	});
	//click Individual Radio Button
	$('#RadioIndividual').on('click', function(){
		$('#FirstName').attr('required', true);
		$('#FirstName').show();
		$('#FirstNameLabel').show();
		$('#LastNameLabel').text("Last Name");
	});
	
	if ($('#CardName').is(':visible')) {
		$('#CardName').attr('required', true);
	}
	else {
		$('#CardName').attr('required', false);
	}
	if ($('#CardNum').is(':visible')) {
		$('#CardNum').attr('required', true);
	}
	else {
		$('#CardNum').attr('required', false);
	}
	if ($('#ExpMonth').is(':visible')) {
		$('#ExpMonth').attr('required', true);
	}
	else {
		$('#ExpMonth').attr('required', false);
	}
	if ($('#ExpYear').is(':visible')) {
		$('#ExpYear').attr('required', true);
	}
	else {
		$('#ExpYear').attr('required', false);
	}
	if ($('#CvvCode').is(':hidden')) {
		$('#CvvCode').attr('required', false);
	}
	if ($('#RoutingNum').is(':visible')) {
		$('#RoutingNum').attr('required', true);
	}
	else {
		$('#RoutingNum').attr('required', false);
	}
	if ($('#BankAcctNum').is(':visible')) {
		$('#BankAcctNum').attr('required', true);
	}
	else {
		$('#BankAcctNum').attr('required', false);
	}
	if ($('#BankAcctType').is(':visible')) {
		$('#BankAcctType').attr('required', true);
	}
	else {
		$('#BankAcctType').attr('required', false);
	}
	
	$('#PaymentMethod').on('change', function(){
		if ($('#CardName').is(':visible')) {
			$('#CardName').attr('required', true);
		}
		else {
			$('#CardName').attr('required', false);
		}
		if ($('#CardNum').is(':visible')) {
			$('#CardNum').attr('required', true);
		}
		else {
			$('#CardNum').attr('required', false);
		}
		if ($('#ExpMonth').is(':visible')) {
			$('#ExpMonth').attr('required', true);
		}
		else {
			$('#ExpMonth').attr('required', false);
		}
		if ($('#ExpYear').is(':visible')) {
			$('#ExpYear').attr('required', true);
		}
		else {
			$('#ExpYear').attr('required', false);
		}
		if ($('#CvvCode').is(':hidden')) {
			$('#CvvCode').attr('required', false);
		}
		if ($('#RoutingNum').is(':visible')) {
			$('#RoutingNum').attr('required', true);
		}
		else {
			$('#RoutingNum').attr('required', false);
		}
		if ($('#BankAcctNum').is(':visible')) {
			$('#BankAcctNum').attr('required', true);
		}
		else {
			$('#BankAcctNum').attr('required', false);
		}
		if ($('#BankAcctType').is(':visible')) {
			$('#BankAcctType').attr('required', true);
		}
		else {
			$('#BankAcctType').attr('required', false);
		}
		
	});
	
	$("#Department option:selected").trigger("change");
	
	$("#CustomFieldArea input[type=text]").each(function(){
		if ($(this).is(':visible')){
			$(this).attr('required', true);
		}
		else {
			$(this).attr('required', false);
		}
	});
	$("#Department").on("change", function(){
		$("#CustomFieldArea input[type=text]").each(function(){
			if ($(this).is(':visible')){
				$(this).attr('required', true);
			}
			else {
				$(this).attr('required', false);
			}
		});
	});
	
	$('#btnThumbsUp').show();
	
	//display what card types are ACCEPTED above the CardNum field.
	var cardsourceconfig = $('#cardsourceconfigdisplay').val();
	if (cardsourceconfig == 2) {
		$("#lblCardAccepted").html("");
		$("#lblCardAccepted").html("Acceptable Card Types: CREDIT, DEBIT");
	}
	if (cardsourceconfig == 3) {
		$("#lblCardAccepted").html("");
		$("#lblCardAccepted").html("Acceptable Card Types: DEBIT");
	}
	if (cardsourceconfig == 4) {
		$("#lblCardAccepted").html("");
		$("#lblCardAccepted").html("Acceptable Card Types: CREDIT");
	}
	
	//check the bin and display card type info if the CardNum field is populated on load 
	clearCardValid();
	var cardnum_on_load = $('#CardNum').val().trim();
	if ((cardnum_on_load.length < 15 && cardnum_on_load.substring(0,1) == 3) || (cardnum_on_load.length < 16 && cardnum_on_load.substring(0,1) != 3)){
		$("#checkOrXDisplay").removeClass("icon-remove");
		$("#checkOrXDisplay").removeClass("icon-ok");
	} 
	
	//cardnum, on keyup
	$('#CardNum').on('keyup', function(){
		var pending_cardnum = $('#CardNum').val().trim();
		if ((pending_cardnum.length == 15 && pending_cardnum.substring(0,1) == 3) || pending_cardnum.length == 16) {
			var block_card = getCardBinInfo();
		}
	});
	
	$('#portalform').on('submit', function(e){
		//safari does not honor html5 form validation, so a javascript validator is required.
		var error_msg = validateForm();
		if (error_msg == "") {
			$("#btnThumbsUp").prop('disabled','true');
			$('#State').prop('disabled', false);
			$('#Province').prop('disabled', false);
		}
		else {
			e.preventDefault();
			alert(error_msg);
		}
	});
	
//	$('#btnThumbsUp').on('click', function(e){
//		var errorMsg = validateForm();
//		if (errorMsg == "") {
//			
//		}
//		else {
//			alert("Errors:\n\n" + errorMsg);
//			e.preventDefault();
//		}
//	});
	
//	$('#customsubmitbutton').on('click', function(e){
//		var errorMsg = validateForm();
//		if (errorMsg == "") {
//			
//		}
//		else {
//			alert("Errors:\n\n" + errorMsg);
//			e.preventDefault();
//		}
//	});
});

function hideDepartmentFields() {
   var customFieldName = "";
   $('#Department option').each(function() {
      customFieldName = "#Dept" + $(this).val();
      $(customFieldName).hide();
   });
}

function showDepartmentFields(e) {
   hideDepartmentFields();
   var customFieldName = "#Dept" + $(e).val();
   $(customFieldName).show();
}

function setPaymentMethod() {
    switch ($('#PaymentMethod').val())
    {
        case 'ACH':
            $('#GrpCardInfo').hide();
            $('#GrpBankInfo').show();
            break;
        case 'CC':
            $('#GrpBankInfo').hide();
            $('#GrpCardInfo').show();
            break;
    }
    calcFee();
}

function selectCountry() {
    switch ($('#Country').val()) {
        case 'USA':
            $('#GrpProvince').hide();
            $('#GrpTextProvince').hide();
            $('#GrpState').show();
            $('#lblZipCode').html("Zip Code");
            break;
        case 'CAN':
            $('#GrpState').hide();
            $('#GrpTextProvince').hide();
            $('#GrpProvince').show();
            $('#lblZipCode').html("Postal Code");
            break;
        default:
        	$('#GrpState').hide();
        	$('#GrpProvince').hide();
        	$('#GrpTextProvince').show();
        	$('#lblZipCode').html("Postal Code");
    }
}

function calcFee() {
	var feemethod = $("#FeeMethod").val();
	if (feemethod > 0) {
		var opkey = $("#OpKey").val();
		var amount = $("#Amount").val();
		var cardnum = $("#CardNum").val();
		amount = amount.replace(/\$/g, "");
		amount = amount.replace(/\,/g, "");
		amount = parseFloat(amount);
		var state = $("#State").val();
		var type = $("#PaymentMethod").val();
		if (type == "ACH") {
			type = "1";
			cardnum = "";
		} else {
			if ($("#CardNum").val() != "") {
				type = $("#CardNum").val().trim()[0];
			}
			else {
	    		type = "4";
	    	}
		}
		var fee = 0;

	    if (amount > 0) {
	    	state = state == "" ? "ZZ" : state;
	    	opkey = opkey == "" ? "opkey" : opkey;
	    	amount = isNaN(amount) ? 0 : amount;
	    	var url = "/terminal/terminal.cfc?method=calc_fee&cardnum=" + cardnum + "&op=" + opkey + "&type=" + type + "&amount=" + amount + "&state=" + state + "&feemethod=" + feemethod + "&__bdreturnformat=plain";
	        var request = new XMLHttpRequest();
	        request.open("GET", url, false);
	        request.send(null);
	        if (request.status == 200) {
	        	fee = request.responseText;
	        }
	    }
        var totalAmount = isNaN(parseFloat(amount) + parseFloat(fee)) ? 0 : parseFloat(amount) + parseFloat(fee);
        $("#FeeDisplay").html("$" + parseFloat(fee).toFixed(2) + "<input type='hidden' name='Fee' value='" + fee + "'>");
        $("#TotalAmount").html("$" + totalAmount.toFixed(2));
        $("#GrpFee").show();
    } else {
        $("#GrpFee").hide();
    }
}

function clearCardValid() {
	if ($("#CardNum").val().trim() == "" || isValidCardNum($('#CardNum').val())) {
		$("#txtCardValid").html("");
		$("#CardNum").css("color", "black");
		$("#lblCardValid").html("");
		//this is the funding source check.
		var block_card = getCardBinInfo();
	} else {
		$("#checkOrXDisplay").removeClass("icon-remove");
		$("#checkOrXDisplay").removeClass("icon-ok");
		$("#lblCardValid").html("");
		$("#lblCardValid").css("color","red");
		$("#lblCardValid").html("Not a Valid Card Number");
	}
	calcFee();
}

function getCardValid() {
	if (isValidCardNum($('#CardNum').val())) {
		$("#CardNum").css("color", "darkgreen");
		$("#lblCardValid").html("");
	} else {
		$("#CardNum").css("color", "red");
		$("#lblCardValid").html("");
		$("#checkOrXDisplay").removeClass("icon-remove");
		$("#checkOrXDisplay").removeClass("icon-ok");
	}
}

function isValidCardNum(value) {
	if (value[0] == '3' && value.length < 15) {
		return false;
	}
	if (value[0] != '3' && value.length < 16) {
		return false;
	}

	if (/[^0-9-\s]+/.test(value)) return false;
 
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");
 
	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n), nDigit = parseInt(cDigit, 10);
		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}
		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

function cardExpired() {
    var retval = false;
    var expmonth = $('#ExpMonth').val();
    var expyear = $('#ExpYear').val();
    if (expmonth != '' && expyear != '') {
        today = new Date();
        expiry = new Date(expyear, expmonth);
        if (today.getTime() > expiry.getTime()) {
            $("#ExpMonth").css("color", "red");
            $("#ExpYear").css("color", "red");
            $("#lblCardExpired").html("<font color='red'>Card is Expired!</font>");
            retval = true;
        }
        else {
            $("#ExpMonth").css("color", "black");
            $("#ExpYear").css("color", "black");
            $("#lblCardExpired").html("");
        }
    }
    return retval;
}

function aboutCvv() {
	window.open('/terminal/aboutcvv.html',
        'Card_Verification_Value',
        'height=400,width=600,resizable=yes,status=no,location=no,toolbar=no,titlebar=yes,directories=no,menubar=no,top=10,left=10');
}

function aboutFee() {
	window.open('/terminal/aboutfee.html',
        'Service_Fee',
        'height=600,width=600,resizable=yes,status=no,location=no,toolbar=no,scrollbars=1,titlebar=yes,directories=no,menubar=no,top=10,left=10');
}

function validateForm() {
	//validate captcha response if enabled
	var errorMessage = "";
	var captcha_success = false;
	if ($('#capReq').val() == 1) {
		$.ajax(
		{
			type:'post',
			url: '/terminal/portal/portal.cfc?method=captcha__bdreturnformat=plain',
			
			success: function(data)
			{			
			
			},
			error: function(textStatus, errorThrown, jqXHR)
			{
				console.log('ERROR: '+errorThrown+', status:'+textStatus);
				console.log("captcha fail");
				captcha_success = false;
			}
		});
		
		if (grecaptcha.getResponse() != '') {
			captcha_success = true;
		}
		else {
			captcha_success = false;
		}
	}
	else {
		captcha_success = true;
	}
    // Validate required fields - all browsers but Safari honor html5 validation. Safari does not check that required fields are filled befor form submission, so the below form validation of text fields is for Safari.
	errorMessage += ($('#Account').is(':visible') && $('#Account').val() == '') ? "*" + $('#lblAccount').html() + " is required.\n" : "";
	errorMessage += ($('#FirstName').is(':visible') && $('#FirstName').val() == '') ? "*First Name is required.\n" : "";
	errorMessage += $('#LastName').val() == '' ? "*" + $('#LastNameLabel').html() + " is required.\n" : "";
	errorMessage += ($('#Address1').is(':required') && $('#Address1').val() == '') ? "*Address 1 is required.\n" : "";
	errorMessage += ($('#Address2').is(':required') && $('#Address2').val() == '') ? "*Address 2 is required.\n" : "";
	errorMessage += ($('#City').is(':required') && $('#City').val() == '') ? "*City is required.\n" : "";
	errorMessage += $('#ZipCode').val() == '' ? "*Zip Code is required.\n" : "";
	errorMessage += ($('#Email').is(':required') && $('#Email').val() == '') ? "*Email is required.\n" : "";
	errorMessage += ($('#Phone').is(':required') && $('#Phone').val() == '') ? "*Phone is required.\n" : "";
	//department, if visible, needs to be selected.
	if ($('#Department').is(':visible') && $('#Department :selected').val() == ''){
		errorMessage += "*A Department selection is required.\n";
	}
	//custom fields -including orphaned custom fields- each have the customfield class assigned to them. we can check them with a loop
	var cf_error_count = 0;
	$('.customfield').each(function(){
		if ($(this).is(':visible') && $(this).val() == ''){
			cf_error_count++;
		}
	});
	if (cf_error_count > 0){
		errorMessage += "*All fields under Department are required.\n";
	}
	errorMessage += $('#Amount').val() == '' ? "*Payment Amount is required.\n" : "";
    switch ($('#PaymentMethod').val()) {
        case 'ACH':
			//errorMessage += $('#SecCode').val() == '' ? "*Authorization Type is required.\n" : "";
			errorMessage += $('#RoutingNum').val() == '' ? "*Routing Number is required.\n" : "";
			errorMessage += $('#BankAcctNum').val() == '' ? "*Bank Account Number is required.\n" : ""; 
            break;
        case 'CC':
            errorMessage += $('#CardNum').val() == '' ? "*Credit Card Number is required.\n" : "";
            errorMessage += $('#CardName').val() == '' ? "*Name On Card is required.\n" : "";
            errorMessage += ($('#CvvCode').is(':required') && $('#CvvCode').val() == '') ? "*CVV Code is required.\n" : "";
            errorMessage += $('#ExpMonth').val() == '' || $('#ExpYear').val() == '' ? "*Expiration Date is required.\n" : "";
            errorMessage += $('#CardNum').val().length > 0 && !isValidCardNum($('#CardNum').val()) ? "*Credit Card number is not valid.\n" : "";
            errorMessage += cardExpired() ? "*Credit Card is expired.\n" : "";
            break;
    }
    if ($('#FeeMethod').val() > 0) {
        errorMessage += $('#Agree').prop('checked') ? "" : "*You must accept the service fee in order to proceed.\n";  
    }
    if (!captcha_success) {
    	errorMessage += "*You must check the CAPTCHA box to prove you are not a robot in order to proceed.\n";
    }
    var block_card = getCardBinInfo();
    if (block_card && $('#cardsourceconfigdisplay').val() == 3) {
		errorMessage += "*You cannot use a Credit Card for this payment. Please choose another payment method that is not a Credit Card.\n";
	}
	if (block_card && $('#cardsourceconfigdisplay').val() == 4) {
		errorMessage += "*You cannot use DEBIT/PREPAID Cards for this payment. Please choose another payment method that is not a Debit/Prepaid Card.\n";
	}
    return errorMessage;
}

function formUpload() {
	var filename = $('#filename').val();
	alert("Filename = " + filename);
}

function getBankName() {
    var rtnum = $("#RoutingNum").val();
    var url = "/api/22/webapi.cfc?method=bank_name&routingnum=" + rtnum + "&__bdreturnformat=plain";
    $("#BankName").load(url);
	 $("#BankName").css("color", "blue");
}

function getCardBinInfo() {
	var block_it = false;
	var cardsourceconfig = $('#cardsourceconfigdisplay').val();
	if (cardsourceconfig != 1) {
		var pending_cardnum = $('#CardNum').val();
		if (pending_cardnum.length >= 6){
			var first6 = parseInt(pending_cardnum.substring(0,6));
			if ($.isNumeric(first6)) {
				var url = "/lib/ardef.cfc?method=get_card_funding_type&first6=" + first6 + "&__bdreturnformat=plain";
			    var request = new XMLHttpRequest();
			    request.open("POST", url, false);
			    request.send(null);
			    if (request.status == 200) {
			    	var cardinfo = request.responseText;
			    	cardinfo = JSON.parse(cardinfo);
			    }
			    //alert(cardinfo + " " + cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype);
			    $("#lblCardValid").html(cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype);
			    switch(cardsourceconfig) {
			    	case "1": //do not block any type
			    		//This section is here in case we want to add functionality later
			    		break;
			    	case "2": //do not block any type
			    		//cardbrand, cardtype and cardsubtype already displayed. This section is here in case we want to add functionality later
			    		break;
			    	case "3": //block CREDIT types
			    		if (cardinfo.cardtype == "CREDIT") {
				    		$('#checkOrXDisplay').removeClass("icon-ok");
					    	$('#checkOrXDisplay').addClass("icon-remove");
					    	$("#checkOrXDisplay").removeAttr("style");
					    	$("#checkOrXDisplay").css("color","red");
					    	$("#lblCardValid").css("color","red");
					    	$("#CardNum").css("color","red");
					    	$("#lblCardValid").html(cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype + " NOT ALLOWED");
					    	block_it = true;
				    	}
			    		else {
					    	$('#checkOrXDisplay').removeClass("icon-remove");
					    	$('#checkOrXDisplay').addClass("icon-ok");
					    	$("#checkOrXDisplay").removeAttr("style");
					    	$("#checkOrXDisplay").css("color","green");
					    	$("#lblCardValid").css("color","green");
					    	$("#CardNum").css("color","black");
					    	$("#lblCardValid").html(cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype + " ALLOWED");
					    }
			    		break;
			    	case "4": //block DEBIT types (includes prepaid subtypes)
			    		if (cardinfo.cardtype == "DEBIT") {
				    		$('#checkOrXDisplay').removeClass("icon-ok");
					    	$('#checkOrXDisplay').addClass("icon-remove");
					    	$("#checkOrXDisplay").removeAttr("style");
					    	$("#checkOrXDisplay").css("color","red");
					    	$("#lblCardValid").css("color","red");
					    	$("#CardNum").css("color","red");
					    	$("#lblCardValid").html(cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype + " NOT ALLOWED");
					    	block_it = true;
				    	}
			    		else {
					    	$('#checkOrXDisplay').removeClass("icon-remove");
					    	$('#checkOrXDisplay').addClass("icon-ok");
					    	$("#checkOrXDisplay").removeAttr("style");
					    	$("#checkOrXDisplay").css("color","green");
					    	$("#lblCardValid").css("color","green");
					    	$("#CardNum").css("color","black");
					    	$("#lblCardValid").html(cardinfo.cardbrand + " " + cardinfo.cardtype + " " + cardinfo.cardsubtype + " ALLOWED");
					    }
			    		break;
			    }   
			}
		}
	}
	return block_it;
}