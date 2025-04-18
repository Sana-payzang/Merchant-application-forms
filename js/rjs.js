var mndFileds=new Array('LEADCF130','LEADCF129','LEADCF151','LEADCF30', 'LEADCF51', 'Company','Last Name','LEADCF32','LEADCF2','LEADCF3', 'LEADCF81',
    'Street', 'City', 'State', 'Zip Code', 'Country', 'Phone', 'Email', 'Website', 'LEADCF13',
    'LEADCF15', 'Routing Number Confirm', 'LEADCF14', 'DepBankAccntConfirm', 'LEADCF16', 'LEADCF18', 'LEADCF17',
    'LEADCF35', 'First Name', 'LEADCF11', 'LEADCF12','LEADCF8', 'LEADCF7', 'LEADCF10', 'Mobile', 'Secondary Email', 'LEADCF82', 'LEADCF6',
    'LEADCF5', 'Industry Type', 'tsAndCs');
var fldLangVal=new Array('TID','MID','Fiserv Merchant Number','Pricing Plan', 'Number of Stations', 'Company','Last Name', 'Residential Status','EIN/TIN/Tax ID','App Status', 'Date Of Incorporation',
    'Business Address', 'Business City', 'Business State', 'Business Zip Code', 'Business Country', 'Business Phone Number', 'Business Email Address', 'Business Website', 'Depository Bank Name',
    'Depository Bank Routing Number', 'Depository Bank Routing Number', 'Depository Bank Account Number', 'Depository Bank Account Number', 'Estimated Annual Revenue', 'Average Ticket Size', 'Highest Ticket Size',
    'Job Title', 'First Name', 'Street Address', 'City', 'State', 'Zip Code', 'Country', 'Phone Number', 'Email Address', 'Date of Birth', 'Ownership Type',
    'Business Type', 'Industry Type', 'Terms and Conditions before proceeding.' );
var name='';
var email='';

function checkMandatory857022000022608001() {
    for(i=0;i<mndFileds.length;i++) {
        var fieldObj=document.forms['WebToLeads857022000022608001'][mndFileds[i]];
        if(fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
                if(fieldObj.type =='file')
                {
                    alert('Please select a file to upload.');
                    fieldObj.focus();
                    return false;
                }
                alert('Please enter a valid ' + fldLangVal[i] + '.');
                fieldObj.focus();
                return false;
            }  else if(fieldObj.nodeName=='SELECT') {
                if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
                    alert('Please select ' + fldLangVal[i] +'.');
                    fieldObj.focus();
                    return false;
                }
            } else if(fieldObj.type =='checkbox'){
                if(fieldObj.checked == false){
                    alert('Please accept  '+fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                }
            }
            try {
                if(fieldObj.name == 'Last Name') {
                    name = fieldObj.value;
                }
            } catch (e) {}
        }
    }
    document.getElementById('formsubmit').disabled=true;
}
function myNewFunction(sel) {
    //alert(sel.options[sel.selectedIndex].text);
    $("#LEADCF4").val(sel.options[sel.selectedIndex].text);
}
var myScript = document.createElement("script");
var myScript2 = document.createElement("script2");
var myScript3 = document.createElement("script3");
myScript3.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.8/jquery.form-validator.min.js";
myScript2.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";
myScript.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js";
myScript2.onload = function() {
    console.log("jQuery loaded.");
};
myScript.onload = function() {
    console.log("BootStrap loaded.");
};
myScript3.onload = function() {
    console.log("jQuery Validator loaded.");
};
$(document).ready(function () {
    $('#routingNumberConfirm').bind("cut copy paste",function(e) {
        e.preventDefault();
    });
    $('#accountNumberConfirm').bind("cut copy paste",function(e) {
        e.preventDefault();
    });
    $('#ssnConfirm').bind("cut copy paste",function(e) {
        e.preventDefault();
    });
    $("#formsubmit").click(function(e){
        if(document.getElementById("routingNumber").value.localeCompare(document.getElementById("routingNumberConfirm").value)!=0){
            alert("Depository Bank Routing Number and Confirm Depository Routing Number fields do not match.")
            $("#routingNumberConfirm").focus();
            e.preventDefault();
        }
        if(document.getElementById("accountNumber").value.localeCompare(document.getElementById("accountNumberConfirm").value)!=0){
            alert("Depository Bank Account Number and Confirm Depository Bank Account Number fields do not match.")
            $("#accountNumberConfirm").focus();
            e.preventDefault();
        }
        if(document.getElementById("ssn").value.localeCompare(document.getElementById("ssnConfirm").value)!=0){
            alert("Social Security Number and Confirm Social Security Number fields do not match.")
            $("#ssnConfirm").focus();
            e.preventDefault();
        }
        if(document.getElementById("passportnum").value.localeCompare(document.getElementById("passportnumrepeat").value)!=0){
            alert("Passport Number and Confirm Passport Number fields do not match.")
            $("#ssnConfirm").focus();
            e.preventDefault();
        }

        //if credit card/debit card option has been chosen then check to see if acceptTsAndCs checkbox has been checked or not
        // if(!$('#tsAndCs').is(':checked')) {
        //     console.log("The check boxes are loaded.");
        //     alert("Please accept terms and conditions before proceeding.");
        //     $("#tsAndCs").focus();
        //     e.preventDefault();
        // }
        //
        // if(document.getElementById("none").selected){
        //     alert("Please select business type before proceeding.");
        //     $("#businessType").focus();
        //     e.preventDefault();
        // }
        // if(document.getElementById("none1").selected){
        //     alert("Please select ownership type before proceeding.");
        //     $("#ownershipType").focus();
        //     e.preventDefault();
        // }
        // if(document.getElementById("none2").selected){
        //     alert("Please select industry type before proceeding.");
        //     $("#mccCodes").focus();
        //     e.preventDefault();
        // }
        // if(document.getElementById("none3").selected){
        //     alert("Please select if you have an existing merchant account before proceeding.");
        //     $("#existingAccount").focus();
        //     e.preventDefault();
        //}
    });

    $.validate({
        form : '#billingInformation',
        modules : 'security',
        onError : function($form) {
            alert('Validation of form '+$form.attr('id')+' failed!');
        },
        onSuccess : function($form) {
            alert('The form '+$form.attr('id')+' is valid!');
            return false; // Will stop the submission of the form
        },
        onValidate : function($form) {
            return {
                element : $('#some-input'),
                message : 'This input has an invalid value for some reason'
            }
        },
        onElementValidate : function(valid, $el, $form, errorMess) {
            console.log('Input ' +$el.attr('name')+ ' is ' + ( valid ? 'VALID':'NOT VALID') );
        }
    });
    // Validation event listeners
    $('input')
        .on('beforeValidation', function() {
            console.log('Input "'+this.name+'" is about to become validated');
        })
        .on('validation', function(evt, valid) {
            console.log('Input "'+this.name+'" is ' + (valid ? 'VALID' : 'NOT VALID'));
        });
    $.validate({
        borderColorOnError : '#FFF',
        addValidClassOnAll : true
    });
});

$( function() {
    $( "#datepicker" ).datepicker({minDate: 0, showOtherMonths: true,
        selectOtherMonths: true});
    $("#datepicker").on("change",function(){
        var selected = $(this).val();
        $("#dateSelected").val(selected);
    });
} );