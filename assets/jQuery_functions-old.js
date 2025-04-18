var form_2 = false;

$(document).ready(function () {

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Website validation regex
    const websiteRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\/?$/;

    $('.confirm').on('paste copy', function (e) {
        e.preventDefault();
        alert('Copy-paste is disabled on this field. Please type the values manually.');
    });
    $(".pricing__container").hide();
    $(".card-pricing").hide();
    var regions = {
        'United States': [
            { name: 'Alabama', value: 'AL' },
            { name: 'Alaska', value: 'AK' },
            { name: 'Arizona', value: 'AZ' },
            { name: 'Arkansas', value: 'AR' },
            { name: 'California', value: 'CA' },
            { name: 'Colorado', value: 'CO' },
            { name: 'Connecticut', value: 'CT' },
            { name: 'Delaware', value: 'DE' },
            { name: 'Florida', value: 'FL' },
            { name: 'Georgia', value: 'GA' },
            { name: 'Hawaii', value: 'HI' },
            { name: 'Idaho', value: 'ID' },
            { name: 'Illinois', value: 'IL' },
            { name: 'Indiana', value: 'IN' },
            { name: 'Iowa', value: 'IA' },
            { name: 'Kansas', value: 'KS' },
            { name: 'Kentucky', value: 'KY' },
            { name: 'Louisiana', value: 'LA' },
            { name: 'Maine', value: 'ME' },
            { name: 'Maryland', value: 'MD' },
            { name: 'Massachusetts', value: 'MA' },
            { name: 'Michigan', value: 'MI' },
            { name: 'Minnesota', value: 'MN' },
            { name: 'Mississippi', value: 'MS' },
            { name: 'Missouri', value: 'MO' },
            { name: 'Montana', value: 'MT' },
            { name: 'Nebraska', value: 'NE' },
            { name: 'Nevada', value: 'NV' },
            { name: 'New Hampshire', value: 'NH' },
            { name: 'New Jersey', value: 'NJ' },
            { name: 'New Mexico', value: 'NM' },
            { name: 'New York', value: 'NY' },
            { name: 'North Carolina', value: 'NC' },
            { name: 'North Dakota', value: 'ND' },
            { name: 'Ohio', value: 'OH' },
            { name: 'Oklahoma', value: 'OK' },
            { name: 'Oregon', value: 'OR' },
            { name: 'Pennsylvania', value: 'PA' },
            { name: 'Rhode Island', value: 'RI' },
            { name: 'South Carolina', value: 'SC' },
            { name: 'South Dakota', value: 'SD' },
            { name: 'Tennessee', value: 'TN' },
            { name: 'Texas', value: 'TX' },
            { name: 'Utah', value: 'UT' },
            { name: 'Vermont', value: 'VT' },
            { name: 'Virginia', value: 'VA' },
            { name: 'Washington', value: 'WA' },
            { name: 'West Virginia', value: 'WV' },
            { name: 'Wisconsin', value: 'WI' },
            { name: 'Wyoming', value: 'WY' }
        ],
        'Canada': [
            { name: 'Alberta', value: 'AB' },
            { name: 'British Columbia', value: 'BC' },
            { name: 'Manitoba', value: 'MB' },
            { name: 'New Brunswick', value: 'NB' },
            { name: 'Newfoundland and Labrador', value: 'NL' },
            { name: 'Nova Scotia', value: 'NS' },
            { name: 'Ontario', value: 'ON' },
            { name: 'Prince Edward Island', value: 'PE' },
            { name: 'Quebec', value: 'QC' },
            { name: 'Saskatchewan', value: 'SK' },
            { name: 'Northwest Territories', value: 'NT' },
            { name: 'Nunavut', value: 'NU' },
            { name: 'Yukon', value: 'YT' }
        ]
    };
    // alert($('ion-icon[name="create-outline"]').attr('id'));
    $('ion-icon[name="create-outline"]').each(function (index) {
        var i = $(this).attr('id').replace('edit_', '');
        $("#" + i).attr("readonly", true);
        $(this).click(function () {
            $("#" + i).removeAttr("readonly");
            $("#" + i).focus();
        });
        $("#" + i).focusout(function () {
            $("#" + i).attr("readonly", true);
        });

    });

    $(".selection").each(function (index) {
        $(this).click(function () {
        });
    });

    // $("#match_LEADCF4").hide();
    $("#industry_1").click(function (e) {
        $("#match_LEADCF4").val("5552 Electric Vehicle Charging");
        $("#price_plan").text("Flat Rate 3.25% + 10¢");

    });
    $("#industry_2").click(function (e) {
        $("#match_LEADCF4").val("5499 Miscellaneous Food Stores-Convenience Stores and Specialty Markets");
        $("#price_plan").text("Flat Rate 4.25% + 5¢");
    });
    $("#industry_3").click(function (e) {
        $("#match_LEADCF4").val("7542 Car Washes");
        $("#price_plan").text("Flat Rate 3.25% + 10¢");
    });

    $("#accountNumber, #match_LEADCF14").on("input", function () {
        const accountNumber = $("#accountNumber").val().trim();
        const confirmAccountNumber = $("#match_LEADCF14").val().trim();

        if (confirmAccountNumber.length > 0 && accountNumber !== confirmAccountNumber) {
            $("#match_LEADCF14").css("border-color", "red");
            $("#accountNumber").css("border-color", "red");
            $('.accountError').text("Account Number does not match.").show(); // Show error message
            $('.accountError').css("margin-top", "-0.8rem");
        } else {
            $("#match_LEADCF14").css("border-color", "");
            $("#accountNumber").css("border-color", "");
            $('.accountError').text(''); // Clear error message
            $('.accountError').css("margin-top", "0rem");

        }
    });

    // Validate Routing Number and Confirm Routing Number in real-time
    $("#routingNumber, #match_LEADCF15").on("input", function () {
        const routingNumber = $("#routingNumber").val().trim();
        const confirmRoutingNumber = $("#match_LEADCF15").val().trim();

        if (confirmRoutingNumber.length > 0 && routingNumber !== confirmRoutingNumber) {
            $("#match_LEADCF15").css("border-color", "red");
            $("#routingNumber").css("border-color", "red");
            $('.routingError').text("Routing Number does not match.").show(); // Show error message
            $('.routingError').css("margin-top", "-0.8rem");
        
        } else {
            $("#match_LEADCF15").css("border-color", "");
            $("#routingNumber").css("border-color", "");
            $('.routingError').text(''); // Clear error message
            $('.routingError').css("margin-top", "0rem");
        }
    });

    // Real-time Email Validation
    $("#match_Email").on("input", function () {
        const email = $(this).val().trim();

        if (!emailRegex.test(email)) {
            $(this).css("border-color", "red");
            $('.emailError').text("Please enter a valid email address.").show(); // Show error message
            $('.emailError').css("margin-top", "-0.8rem");
        } else {
            $(this).css("border-color", "");
            $('.emailError').text(''); // Clear error message
            $('.emailError').css("margin-top", "0rem");
        }
    });

    // Real-time Email Validation
    $("#match_Secondary_Email").on("input", function () {
        const email = $(this).val().trim();

        if (!emailRegex.test(email)) {
            $(this).css("border-color", "red");
            $('.persEmailError').text("Please enter a valid email address.").show(); // Show error message
            $('.persEmailError').css("margin-top", "-0.8rem");
        } else {
            $(this).css("border-color", "");
            $('.persEmailError').text(''); // Clear error message
            $('.persEmailError').css("margin-top", "0rem");
        }
    });

    // Real-time Website Validation
    $("#match_Website").on("input", function () {
        const website = $(this).val().trim();

        if (website.length > 0 && !websiteRegex.test(website)) {
            $(this).css("border-color", "red");
            $('.websiteError').text("Please enter a valid website URL (e.g., http://example.com).").show(); // Show error message
            $('.websiteError').css("margin-top", "-0.8rem");
        } else {
            $(this).css("border-color", "");
            $('.websiteError').text(''); // Clear error message
            $('.websiteError').css("margin-top", "0rem");
        }
    });

    // Social ID Number Validation
    $("#socialIDNum, #match_LEADCF9").on("input", function () {
        const socialIDNum = $("#socialIDNum").val().trim();
        const confirmSocialID = $("#match_LEADCF9").val().trim();

        if (confirmSocialID.length > 0 && socialIDNum !== confirmSocialID) {
            $("#match_LEADCF9").css("border-color", "red");
            $("#socialIDNum").css("border-color", "red");
            $('.ssnError').text("Social ID Number does not match.").show();
            $('.ssnError').css("margin-top", "-0.8rem");
        } else {
            $("#match_LEADCF9").css("border-color", "");
            $("#socialIDNum").css("border-color", "");
            $('.ssnError').text('');
            $('.ssnError').css("margin-top", "0rem");
        }
    });
    /*
    $("#next_0").click(function (e) {
       console.log("Country Form Exit");
        nextForm();
    });*/

    // Changing various fields based on Country selection
    // Example: if US is selected US states will show up through out the form
    // if Canada is selected, Canada provinces will show up instead
    $('input[name="countrybtn"]').change(function () {
        var selectedCountry = $(this).val();
        var $regionSelect = $("#match_State");
        var $perRegionSelect = $("#match_LEADCF8");
        var $reviewSelect = $("#State");
        var $reviewPSelect = $("#LEADCF8");
        var $currency = $('[data-currency="currency"]');
        var $regionLBL = $('[data-region="regionLBL"]');
        var $bzID = $('[data-bzID="bizID"]');
        var $socialID = $('[data-socialID="socialID"]');
        var $bizType = $("#match_LEADCF5");
        var $confirmBizType = $("#LEADCF5");
        var $appReceived = $("#LEADCF1");
        var $leadSource = $("#Lead_Source");

        // Clear the previous options
        $regionSelect.empty();
        $regionSelect.append('<option selected hidden value="-None-">-- Select --</option>');
        $perRegionSelect.empty();
        $perRegionSelect.append('<option selected hidden value="-None-">-- Select --</option>');
        $reviewSelect.empty();
        $reviewSelect.append('<option selected hidden value="-None-">-- Select --</option>');
        $reviewPSelect.empty();
        $reviewPSelect.append('<option selected hidden value="-None-">-- Select --</option>');

        if (regions[selectedCountry]) {
            // Populate the region select with the appropriate options
            regions[selectedCountry].forEach(function (region) {
                $regionSelect.append('<option value="' + region.value + '">' + region.name + '</option>');
                $perRegionSelect.append('<option value="' + region.value + '">' + region.name + '</option>');
                $reviewPSelect.append('<option value="' + region.value + '">' + region.name + '</option>');
                $reviewSelect.append('<option value="' + region.value + '">' + region.name + '</option>');
            });
        }

        if (selectedCountry === "United States") {
            $currency.text("USD");
            $regionLBL.text("State");
            $bzID.text("EIN/TIN/Tax ID");
            $socialID.text("Social Security Number");
            $bizType.append('<option value="Limited Liability Company">Limited Liability Company</option>');
            $confirmBizType.append('<option value="Limited Liability Company">Limited Liability Company</option>');
            $appReceived.append('<option value="Payter US" selected>Payter US</option>');
            $leadSource.append('<option value="Payter US" selected>Payter US</option>');
            $(".pricing__container").show();


        } else if (selectedCountry === "Canada") {
            $currency.text("CAD");
            $regionLBL.text("Province");
            $bzID.text("BN");
            $socialID.text("Social Insurance Number");
            $bizType.append('<option value="Cooperative">Cooperative</option>');
            $confirmBizType.append('<option value="Cooperative">Cooperative</option>');
            $appReceived.append('<option value="Payter Canada" selected>Payter Canada</option>');
            $leadSource.append('<option value="Payter Canada" selected>Payter Canada</option>');
            $("#price_plan").text("Canada");
            $(".pricing__container").hide();
        }
    });

    $(".next-btn").click(function (e) {
        // Retrieve the specific form index or other attributes if needed
        const formIndex = $(this).data('next-form');

        // Example of handling different forms based on the index (modify as needed)
        if (formIndex === 0) {
            var countryslct = $('input[type=radio]:checked');
            if (countryslct.length > 0) {
                //alert(countryslct.val());
                $("#Country").val(countryslct.val());
                $("#LEADCF10").val(countryslct.val());
                nextForm();
            } else {
                alert("Please select your country.");
            }
        }

        if (formIndex === 1) {
            if (!$("#match_LEADCF4").val()) {
                alert("Please select your industry.");
            } else {
                $("#LEADCF4").val($("#match_LEADCF4").val());
                nextForm();
                $("#LEADCF30").val($("#price_plan").text());
                $(".card-pricing").show();

            }

        }

        if (formIndex === 2) {

            const accountNumber = $("#accountNumber").val().trim();
            const confirmAccountNumber = $("#match_LEADCF14").val().trim();
            const routingNumber = $("#routingNumber").val().trim();
            const confirmRoutingNumber = $("#match_LEADCF15").val().trim();
            const email = $("#match_Email").val().trim();
            const website = $("#match_Website").val().trim();

            var mndFileds = new Array('match_Company', 'match_Email', 'match_Phone', 'match_Website', 'match_Street', 'match_City', 'match_State', 'match_Zip_Code', 'match_LEADCF2', 'match_LEADCF81', 'match_LEADCF5', 'match_LEADCF6', 'match_LEADCF13', 'match_LEADCF14', 'match_LEADCF15', 'match_LEADCF16', 'match_LEADCF17', 'match_LEADCF18', 'match_LEADCF30');
            var fldLangVal = new Array('Company Name', 'Email', 'Phone', 'Website', 'Street', 'City', 'State / Province', 'Zip Code', 'EIN/TIN/Tax ID', 'Date of Incorporation', 'Business Type', 'Ownership Type', 'Bank Name', 'Bank Account Number', 'Confirm Bank Account Number', 'Bank Routing Number', 'Confirm Bank Routing Number', 'Estimated Annual Revenue', 'Highest Ticket Size', 'Average Ticket Size', 'Pricing Plan');

            for (i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads857022000077249001'][mndFileds[i]];
                if (fieldObj) {
                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                        if (fieldObj.type == 'file') {
                            alert('Please select a file to upload.');
                            fieldObj.focus();
                            return false;
                        }
                        alert('Please enter ' + fldLangVal[i] + '.');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName == 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                            alert('Please select ' + fldLangVal[i] + '.');
                            fieldObj.focus();
                            return false;
                        }
                    }

                }

            }

            if (accountNumber !== confirmAccountNumber) {
                alert('Bank Account Number does not match Confirm Bank Account Number.');
                $("#match_LEADCF14").focus();
                return false;
            }

            if (routingNumber !== confirmRoutingNumber) {
                alert('Bank Routing Number does not match Confirm Bank Routing Number.');
                $("#match_LEADCF15").focus();
                return false;
            }

            // Check email validity before submission
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                $("#match_Email").focus();
                return false;
            }

            // Check website validity before submission
            if (website.length > 0 && !websiteRegex.test(website)) {
                alert('Please enter a valid website URL (e.g., http://example.com).');
                $("#match_Website").focus();
                return false;
            }

            $("#State").val($("#match_State").val());
            $("#LEADCF5").val($("#match_LEADCF5").val());
            $("#LEADCF6").val($("#match_LEADCF6").val());
            nextForm();

        }

        if (formIndex === 3) {
            const socialIDNum = $("#socialIDNum").val().trim();
            const confirmSocialID = $("#match_LEADCF9").val().trim();
            const email = $("#match_Secondary_Email").val().trim();

            var mndFileds = new Array('match_LEADCF35', 'match_First_Name', 'match_Last_Name', 'match_LEADCF11', 'match_LEADCF12', 'match_LEADCF8', 'match_LEADCF7', 'match_Mobile', 'match_Secondary_Email', 'match_LEADCF82', 'match_LEADCF9');
            var fldLangVal = new Array('Job Title', 'First Name', 'Last Name', 'Street Address', 'City', 'State / Province', 'Zip Code', 'Phone', 'Email', 'Date of Birth', 'Social Security / Social Insurance Number');
            for (i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads857022000077249001'][mndFileds[i]];
                if (fieldObj) {
                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                        if (fieldObj.type == 'file') {
                            alert('Please select a file to upload.');
                            fieldObj.focus();
                            return false;
                        }
                        alert(fldLangVal[i] + ' cannot be empty.');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName == 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                            alert(fldLangVal[i] + ' cannot be none.');
                            fieldObj.focus();
                            return false;
                        }
                    }
                }

            }


            if (socialIDNum !== confirmSocialID) {
                alert('Social ID Number does not match Confirm Social ID Number.');
                $("#match_LEADCF9").focus();
                return false;
            }

            // Check email validity before submission
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                $("#match_Secondary_Email").focus();
                return false;
            }
            $("#LEADCF8").val($("#match_LEADCF8").val());

            nextForm();

        }

        if (formIndex === 4) {
            var mndFileds = new Array('checkbox-2');
            var fldLangVal = new Array('the Terms & Conditions.');
            for (i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads857022000077249001'][mndFileds[i]];
                if (fieldObj) {
                    if (fieldObj.type == 'checkbox') {
                        if (fieldObj.checked == false) {
                            alert('Please accept  ' + fldLangVal[i]);
                            fieldObj.focus();
                            return false;
                        }
                    }

                }
            }
            nextForm();
        }
        // You can add more conditions for different form indexes if needed
    });

    var $date_inc = jQuery('input[id="match_LEADCF81"]');
    var $d_o_b = jQuery('input[id="match_LEADCF82"]');

    $date_inc.bind('keyup', 'keydown', function (e) {
        //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
        if (e.which !== 8) {
            var numChars = $date_inc.val().length;
            if (numChars === 2 || numChars === 5) {
                var thisVal = $date_inc.val();
                thisVal += '/';
                $date_inc.val(thisVal);
            }
        }
    });

    $d_o_b.bind('keyup', 'keydown', function (e) {
        //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
        if (e.which !== 8) {
            var numChars = $d_o_b.val().length;
            if (numChars === 2 || numChars === 5) {
                var thisVal = $d_o_b.val();
                thisVal += '/';
                $d_o_b.val(thisVal);
            }
        }
    });

    $("#routingNumber").on("change", function () {
        validateRoutingNum();
    });

    $("#match_LEADCF15").on("change", function () {
        validateRoutingNum();
    });

});

function validateRoutingNum() {

}
function validateAccountNum() {

}
