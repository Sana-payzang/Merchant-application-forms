$(document).ready(function(){
    $("#header_info").html("Business Information");
    $("#business_bank_info").hide();
    $("#personal_info").hide();
    $("#residential_info").hide();
    $("#terms").hide();
    $("#submit_section").hide();
    $("#personal_info_h").hide();
    $("#personal_info_hr").hide();
    $("#terms_h").hide();
    $("#terms_hr").hide();
    $("#next_1").click(function(){
        $("#business_bank_info").show();
        $("#business_info").hide();
    });
    $("#back_1").click(function(){
        $("#business_bank_info").hide();
        $("#business_info").show();
    });
    $("#next_2").click(function(){
        $("#business_bank_info").hide();
        $("#header_info").html("Personal Information");
        $("#personal_info").show();
    });
    
    $("#next_3").click(function(){
        $("#residential_info").show();
        $("#personal_info").hide();
        $("#business_bank_info").show();
    });
    $("#back_3").click(function(){
        $("#personal_info").hide();
        $("#header_info").html("Business Information");
        $("#business_bank_info").show();
    });
    $("#next_4").click(function(){
        $("#residential_info").show();
        $("#personal_info").hide();
        $("#header_info").html("Terms and Conditions");
        $("#residential_info").hide();
        $("#terms").show();
        $("#submit_section").show();
    });

    $("#back_4").click(function(){
        $("#personal_info").show();
        $("#header_info").html("Personal Information");
        $("#residential_info").show();
        $("#terms").hide();
        $("#submit_section").hide();
    });

    $("#formsubmit").click(function(e){
        if(document.getElementById("LEADCF9").value.localeCompare(document.getElementById("ssn_repeat").value)!=0){
            alert("Social Security Number and Confirm Social Security Number fields do not match.")
            $("#ssn_repeat").focus();
            e.preventDefault();
        }
        if(document.getElementById("LEADCF15").value.localeCompare(document.getElementById("repeat_routing_num").value)!=0){
            alert("Bank Routing Number and Confirm Bank Routing Number fields do not match.")
            $("#repeat_routing_num").focus();
            e.preventDefault();
        }
        if(document.getElementById("LEADCF14").value.localeCompare(document.getElementById("repeat_account_num").value)!=0){
            alert("Bank Account Number and Confirm Bank Account Number fields do not match.")
            $("#repeat_account_num").focus();
            e.preventDefault();
        }
    });


    
});