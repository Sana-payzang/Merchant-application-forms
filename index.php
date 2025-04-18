<!doctype html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>
            Merchant Account Signup Form - Payter
        </title>
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <?php include 'assets/header-tag.php'?>
            <link href="assets/styles.css" rel="stylesheet">
            <script>
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({
                        pageLanguage: 'en'
                    },
                    'google_translate_element');
                }
            </script>
            <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
            </script>
    </head>
    
    <body>
        <div class="form__container container-fluid px-5">
            <!-- Header -->
            <div class="title__container d-flex flex-row justify-content-between align-items-center">
                <img src="https://www.payter.us/img/PTR%20Asset%20LRG.png" alt="Payter logo"
                class="img-fluid">
                <div class="nav-item dropdown flex-shrink-1 ml-auto">
                    <a class="nav-link dropdown-toggle language-toggle d-flex align-items-center"
                    href="#" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <ion-icon name="globe-outline" style="width:2rem; height:2rem;">
                        </ion-icon>
                        <span class="pl-3" data-lang="en">
                            English
                        </span>
                    </a>
                    <ul class="dropdown-menu shadow-lg" id="language-dropdown" aria-labelledby="languageDropdown">
                        <li id="google_translate_element">
                        </li>
                        <li class="dropdown-item" data-lang="en">
                            English
                        </li>
                        <li class="dropdown-item" data-lang="es">
                            Spanish
                        </li>
                        <li class="dropdown-item" data-lang="fr">
                            French
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Body -->
            <div class="body__container ">
                <div class="left__container">
                    <div class="side__titles ">
                        <div class="title__name">
                            <h3>Select Country</h3>
                            <p>
                            </p>
                        </div>
                        <div class="title__name">
                            <h3>
                                Select Industry
                            </h3>
                            <p>
                            </p>
                        </div>
                        <div class="title__name">
                            <h3>
                                Business Information
                            </h3>
                            <p>
                            </p>
                        </div>
                        <div class="title__name">
                            <h3>
                                Personal Information
                            </h3>
                            <p>
                            </p>
                        </div>
                        <div class="title__name">
                            <h3>
                                Terms & Conditions
                            </h3>
                            <p>
                            </p>
                        </div>
                        <div class="title__name">
                            <h3>
                                Review & Submit
                            </h3>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div class="progress__bar__container">
                        <ul class="">
                            <li class="active" id="icon0">
                                <ion-icon name="globe-outline">
                                </ion-icon>
                            </li>
                            <li id="icon1">
                                <ion-icon name="bar-chart-outline">
                                </ion-icon>
                            </li>
                            <li id="icon2">
                                <ion-icon name="business-outline">
                                </ion-icon>
                            </li>
                            <li id="icon3">
                                <ion-icon name="person-outline">
                                </ion-icon>
                            </li>
                            <li id="icon4">
                                <ion-icon name="newspaper-outline">
                                </ion-icon>
                            </li>
                            <li id="icon5">
                                <ion-icon name="search-circle-outline">
                                </ion-icon>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='crmWebToEntityForm' class="right__container align-items-center">
                    <!-- Note : - You can modify the font style and form style to suit your
                    website. - Code lines with comments Do not remove this code are required
                    for the form to work properly, make sure that you do not remove these lines
                    of code. - The Mandatory check script can modified as to suit your business
                    needs. - It is important that you test the modified form before going live.-->
                    <form action='https://crm.zoho.com/crm/WebToLeadForm' name="WebToLeads857022000077249001"
                        method="POST" accept-charset='UTF-8' class="needs-validation" novalidate>
                        <!-- Hidden Zoho fields -->
                        <input type='text' style='display:none;' name='xnQsjsdp' value='23c8431dcce82e4a70acb7855e168c61203ffdb39c8f9f415c7c203728b79e17'
                        />
                        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                        <input type='text' style='display:none;' name='xmIwtLD' value='ce0d3c4c8f3d9973b5c3fdc681a39d8aeea3efcfd53c93f7694f9070f75b3851380a13ccb471cc9591adbc1d614dc51d'
                        />
                        <input type='text' style='display:none;' name='actionType' value='TGVhZHM='
                        />
                        <input type='text' style='display:none;' name='returnURL' value='https://payter.us/apply/submission.html'
                        />
                        <input type='text' style='display:none;' id='LEADCF3' name='LEADCF3' value='New'
                        />
                        <input type='text' style='display:none;' id='LEADCF1' name='LEADCF1' value='Card Only'
                        />
                        <input type='text' style='display:none;' id='Lead_Source' name='Lead Source'
                        value='' />
                        <input type='text' style='display:none;' id='LEADCF158' name='LEADCF158'
                        value='Merchant Application' />
                        <!-- Step 1: Select Country -->
                        <fieldset id="form0" class="active__form">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="px-3">Step 1/6</span>
                                        <span id="next_0" class="arrow next-btn" data-next-form="0">▶</span>
                                    </p>
                                </div>
                                <h2>Select your country</h2>
                            </div>
                            <div class="input__container pb-5 mb-5">
                                <div class="row">
                                    <div class="col-lg-5">
                                       
                                    <div class="form-group">
        
                                    <div class="form-check radio-container">
                                    <input type="radio" name="countrybtn" value="United States" id="countrybtn1" class="form-check-input" required>
                                    <label for="countrybtn1" class="form-check-label">United States</label>
                                    </div>
                                    <div class="form-check radio-container">
                                    <input type="radio" name="countrybtn" value="Canada" id="countrybtn2" class="form-check-input">
                                    <label for="countrybtn2" class="form-check-label">Canada</label>
                                    </div>
                                    <div class="invalid-feedback">Please select a country.</div>
                                </div>
                                        
                                    </div>
                                </div>
                                <div class="buttons py-5 my-5">
                                    <button type="button" class="nxt__btn button  next-btn" data-next-form="0">Next</button>
                                </div>
                            </div>
                        </fieldset>
                        <!-- Step 2: Select Industry -->
                        <fieldset id="form1" class="hidden">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="arrow prev-btn">◀</span>
                                        <span class="px-3">Step 2/6</span>
                                        <span class="arrow next-btn" data-next-form="1">▶</span>
                                    </p>
                                </div>
                                <h2>Select your industry</h2>
                                <p>
                                    A <a id="btn" href="#" data-bs-toggle="modal" data-bs-target="#open-modal">Merchant Category Code</a>will be applied based on the choice.
                                </p>
                            </div>
                            <div class="input__container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="selection newB" id="industry_1">
                                        <div class="descriptionTitle">
                                            <h3>EV Charging</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="selection exitB" id="industry_3">
                                        <div class="descriptionTitle">
                                            <h3>Car Wash</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10">
                                        <div class="selection exitB" id="industry_2">
                                        <div class="descriptionTitle">
                                            <h3>Food & Drink Vending</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10">
                                        <div class="form-group">
                                        <label for="match_LEADCF4" class="form-label">Search for your industry</label>
                                        <select class="form-select" id="match_LEADCF4" name="match_LEADCF4" required data-bind="value: bind_industry">
                                            <option selected hidden value="">-- Select --</option>
                                            <option value="4111 Local and Suburban Commuter Passenger Transportation">Local and Suburban Commuter Passenger Transportation</option>
                                            <option value="4131 Bus Lines">Bus Lines</option>
                                            <option value="4784 Tolls and Bridge Fees">Tolls and Bridge Fees</option>
                                            <option value="4900 Electric, Gas, Water, and Sanitary">Electric, Gas, Water, and Sanitary</option>
                                            <option value="5411 Grocery Stores and Supermarkets">Grocery Stores and Supermarkets</option>
                                            <option value="5499 Miscellaneous Food Stores-Convenience Stores and Specialty Markets">Miscellaneous Food Stores-Convenience Stores and Specialty Markets</option>
                                            <option value="5552 Electric Vehicle Charging">Electric Vehicle Charging</option>
                                            <option value="5814 Quick Payment Service - Fast Food Restaurants">Quick Payment Service - Fast Food Restaurants</option>
                                            <option value="7523 Parking Lots, Parking Meters and Garages">Parking Lots, Parking Meters and Garages</option>
                                            <option value="7542 Car Washes">Car Washes</option>
                                            <option value="8220 Colleges, Universities, Professional Schools, and Junior Colleges">Colleges, Universities, Professional Schools, and Junior Colleges</option>
                                            <option value="8249 Vocational and Trade Schools">Vocational and Trade Schools</option>
                                            <option value="9211 Court Costs, Including Alimony and Child Support">Court Costs, Including Alimony and Child Support</option>
                                            <option value="9222 Government Fines">Government Fines</option>
                                            <option value="9311 Tax Payments">Tax Payments</option>
                                            <option value="9399 Bail & Bond Payments; Government Services - Not Elsewhere Classified; U.S. Federal Government Agencies">Bail & Bond Payments; Government Services - Not Elsewhere Classified; U.S. Federal Government Agencies</option>
                                        </select>
                                        <div class="invalid-feedback">Please select industry or MCC.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button type="button" class="prev__btn button prev-btn">
                                        Back
                                    </button>
                                    <button type="button" class="nxt__btn button next-btn" data-next-form="1">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <!-- Step 3: Business Information -->
                        <fieldset id="form2" class="hidden">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="arrow prev-btn">◀</span>
                                        <span class="px-3">Step 3/6</span>
                                        <span class="arrow next-btn" data-next-form="2">▶</span>
                                    </p>
                                </div>
                                <h2>Business Information</h2>
                                <p>Provide business information</p>
                            </div>
                            <div class="input__container">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_Company" class="form-label">Company Name</label>
                                        <input type="text" class="form-control" id="match_Company" name="match_Company" placeholder="Legal, Registered Company Name" required data-bind="value: bind_company">
                                        <div class="invalid-feedback">Please enter the company name.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF34" class="form-label">DBA</label>
                                        <input type="text" class="form-control" id="match_LEADCF34" name="match_LEADCF34" data-bind="value: bind_dba" required>
                                        <div class="invalid-feedback">Please enter the DBA name.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF2" class="form-label">
                                            <span data-bzID="bizID">EIN/TIN/Tax ID/BN</span>
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF2" name="match_LEADCF2" placeholder="EIN/TIN/Tax ID/BN" required data-bind="value: bind_ein">
                                        <div class="invalid-feedback">Please enter a valid EIN/TIN/Tax ID/BN.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF81" class="form-label">Date of Incorporation</label>
                                        <input type="text" class="form-control" id="match_LEADCF81" name="match_LEADCF81" placeholder="MM/DD/YYYY" required pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])/(19|20)\d{2}$" data-bind="value: bind_inc">
                                        <div class="invalid-feedback">Please enter a valid date (MM/DD/YYYY).</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF5" class="form-label">Business Type</label>
                                        <select class="form-select" id="match_LEADCF5" name="match_LEADCF5" required>
                                            <option selected hidden value="">-- Select --</option>
                                            <option value="Corporation">Corporation</option>
                                            <option value="Individual Sole Proprietorship">Individual Sole Proprietorship</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Tax Exempt Organization">Tax Exempt Organization</option>
                                        </select>
                                        <div class="invalid-feedback">Please select a business type.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF6" class="form-label">Ownership Type</label>
                                        <select class="form-select" id="match_LEADCF6" name="match_LEADCF6" required>
                                            <option selected hidden value="">-- Select --</option>
                                            <option>Private</option>
                                            <option>Public</option>
                                        </select>
                                        <div class="invalid-feedback">Please select an ownership type.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="form-group">
                                        <label for="match_LEADCF13" class="form-label">Bank Name</label>
                                        <input type="text" class="form-control" id="match_LEADCF13" name="match_LEADCF13" placeholder="Bank Name" required data-bind="value: bind_bank_name">
                                        <div class="invalid-feedback">Please enter the bank name.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="routingNumber" class="form-label">Routing Number</label>
                                        <input type="text" class="form-control validate" id="routingNumber" placeholder="Routing Number" required>
                                        <div class="invalid-feedback" id="routingError">Please enter a valid routing number.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF15" class="form-label">Confirm Routing Number</label>
                                        <input type="text" class="form-control confirm" id="match_LEADCF15" name="match_LEADCF15" placeholder="Routing Number" required data-bind="value: bind_routingNum">
                                        <div class="invalid-feedback" id="confirmRoutingError">Routing numbers do not match.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="accountNumber" class="form-label">Account Number</label>
                                        <input type="text" class="form-control validate" id="accountNumber" placeholder="Account Number" required>
                                        <div class="invalid-feedback" id="accountError">Please enter a valid account number.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_LEADCF14" class="form-label">Confirm Account Number</label>
                                        <input type="text" class="form-control confirm" id="match_LEADCF14" name="match_LEADCF14" placeholder="Account Number" required data-bind="value: bind_accountNum">
                                        <div class="invalid-feedback" id="confirmAccountError">Account numbers do not match.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_LEADCF18" class="form-label">
                                            Average Ticket Size (<span data-currency="currency" class="notranslate"></span>)
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF18" name="match_LEADCF18" placeholder="Average Ticket Size" required pattern="^\d+(\.\d{1,2})?$" data-bind="value: bind_avTick">
                                        <div class="invalid-feedback">Please enter a valid amount (e.g., 100.00).</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_LEADCF17" class="form-label">
                                            Highest Ticket Size (<span data-currency="currency" class="notranslate"></span>)
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF17" name="match_LEADCF17" placeholder="Highest Ticket Size" required pattern="^\d+(\.\d{1,2})?$" data-bind="value: bind_highTick">
                                        <div class="invalid-feedback">Please enter a valid amount (e.g., 100.00).</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_LEADCF16" class="form-label">
                                            Estimated Annual Revenue (<span data-currency="currency" class="notranslate"></span>)
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF16" name="match_LEADCF16" placeholder="Estimated Annual Revenue" required pattern="^\d+(\.\d{1,2})?$" data-bind="value: bind_annualRev">
                                        <div class="invalid-feedback">Please enter a valid amount (e.g., 1000.00).</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                        <label for="match_Street" class="form-label">Business Street Address</label>
                                        <input type="text" class="form-control" id="match_Street" name="match_Street" placeholder="Business Street Address" required data-bind="value: bind_biz_street">
                                        <div class="invalid-feedback">Please enter the business street address.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_City" class="form-label">Business City</label>
                                        <input type="text" class="form-control" id="match_City" name="match_City" placeholder="Business City" required data-bind="value: bind_biz_city">
                                        <div class="invalid-feedback">Please enter the business city.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_State" class="form-label">
                                            Business <span data-region="regionLBL"></span>
                                        </label>
                                        <select class="form-select" id="match_State" name="match_State" required>
                                            <option selected hidden value="">-- Select --</option>
                                        </select>
                                        <div class="invalid-feedback">Please select a state/province.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                        <label for="match_Zip_Code" class="form-label">Business Zip Code</label>
                                        <input type="text" class="form-control" id="match_Zip_Code" name="match_Zip_Code" placeholder="Business Zip Code" required pattern="^\d{5}(-\d{4})?$|^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$" data-bind="value: bind_biz_zip">
                                        <div class="invalid-feedback">Please enter a valid zip/postal code (e.g., 12345 or A1B 2C3).</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_Phone" class="form-label">Business Phone</label>
                                        <input type="tel" class="form-control" id="match_Phone" name="match_Phone" placeholder="Business Phone" required pattern="^\+?1?\d{10}$" data-bind="value: bind_biz_phone">
                                        <div class="invalid-feedback">Please enter a valid phone number (e.g., +12345678901).</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="match_Email" class="form-label">Business Email</label>
                                        <input type="email" class="form-control" id="match_Email" name="match_Email" placeholder="Business Email" required data-bind="value: bind_biz_email">
                                        <div class="invalid-feedback">Please enter a valid email address.</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="match_Website" class="form-label">Business Website</label>
                                            <input type="url" class="form-control" id="match_Website" name="match_Website" placeholder="Business Website" required pattern="^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}\/?$" data-bind="value: bind_biz_web" data-vflag-test="website">
                                            <div class="invalid-feedback">Please enter a valid website URL (e.g., https://www.example.com).</div>
                                        </div>
                                    </div>
                                 </div>
                                <div class="buttons mt-4">
                                    <button type="button" class="prev__btn button prev-btn">
                                        Back
                                    </button>
                                    <button type="button" class="nxt__btn button next-btn" data-next-form="2">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <!-- Step 4: Personal Information -->
                        <fieldset id="form3" class="hidden">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="arrow prev-btn">
                                            ◀
                                        </span>
                                        <span class="px-3">
                                            Step 4/6
                                        </span>
                                        <span class="arrow next-btn" data-next-form="3">
                                            ▶
                                        </span>
                                    </p>
                                </div>
                                <h2>
                                    Personal Information
                                </h2>
                                <p>
                                    Provide personal information for the account owner
                                </p>
                            </div>
                            <div class="input__container">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="match_First_Name" class="form-label">
                                            First Name
                                        </label>
                                        <input type="text" class="form-control" id="match_First_Name" name="match_First_Name"
                                        placeholder="First Name" required data-bind="value: bind_first_name">
                                        <div class="invalid-feedback">
                                            Please enter your first name.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_Last_Name" class="form-label">
                                            Last Name
                                        </label>
                                        <input type="text" class="form-control" id="match_Last_Name" name="match_Last_Name"
                                        placeholder="Last Name" required data-bind="value: bind_last_name">
                                        <div class="invalid-feedback">
                                            Please enter your last name.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_LEADCF35" class="form-label">
                                            Job Title
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF35" name="match_LEADCF35"
                                        placeholder="Job Title" required data-bind="value: bind_job_title">
                                        <div class="invalid-feedback">
                                            Please enter your job title.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_Secondary_Email" class="form-label">
                                            Personal Email
                                        </label>
                                        <input type="email" class="form-control" id="match_Secondary_Email" name="match_Secondary_Email"
                                        placeholder="Personal Email" required data-bind="value: bind_pers_email">
                                        <div class="invalid-feedback">
                                            Please enter a valid email address.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_Mobile" class="form-label">
                                            Mobile Phone
                                        </label>
                                        <input type="tel" class="form-control" id="match_Mobile" name="match_Mobile"
                                        placeholder="Mobile Phone" required pattern="^\+?1?\d{10}$" data-bind="value: bind_mobile">
                                        <div class="invalid-feedback">
                                            Please enter a valid phone number (e.g., +12345678901).
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_LEADCF82" class="form-label">
                                            Date of Birth
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF82" name="match_LEADCF82"
                                        placeholder="MM/DD/YYYY" required pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])/(19|20)\d{2}$"
                                        data-bind="value: bind_dob">
                                        <div class="invalid-feedback">
                                            Please enter a valid date (MM/DD/YYYY).
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="socialIDNum" class="form-label">
                                            <span data-socialID="socialID">
                                                Social Security Number/Social Insurance Number
                                            </span>
                                        </label>
                                        <input type="text" class="form-control validate" id="socialIDNum" name="socialIDNum"
                                        placeholder="XXX-XX-XXXX or XXX-XXX-XXX" required data-bind="value: bind_social_id">
                                        <div class="invalid-feedback" id="ssnError">
                                            Please enter a valid social ID.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="match_LEADCF9" class="form-label">
                                            Confirm
                                            <span data-socialID="socialID">
                                            </span>
                                        </label>
                                        <input type="text" class="form-control confirm" id="match_LEADCF9" name="match_LEADCF9"
                                        placeholder="XXX-XX-XXXX or XXX-XXX-XXX" required data-bind="value: bind_confirm_social_id">
                                        <div class="invalid-feedback" id="confirmSsnError">
                                            Social ID numbers do not match.
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="match_LEADCF11" class="form-label">
                                            Street Address
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF11" name="match_LEADCF11"
                                        placeholder="Street Address" required data-bind="value: bind_pers_street">
                                        <div class="invalid-feedback">
                                            Please enter your street address.
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="match_LEADCF12" class="form-label">
                                            City
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF12" name="match_LEADCF12"
                                        placeholder="City" required data-bind="value: bind_pers_city">
                                        <div class="invalid-feedback">
                                            Please enter your city.
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="match_LEADCF8" class="form-label">
                                            State/Province
                                            <span data-region="regionLBL">
                                            </span>
                                        </label>
                                        <select class="form-select" id="match_LEADCF8" name="match_LEADCF8" required>
                                            <option selected hidden value="">
                                                -- Select --
                                            </option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a state/province.
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="match_LEADCF7" class="form-label">
                                            Zip Code
                                        </label>
                                        <input type="text" class="form-control" id="match_LEADCF7" name="match_LEADCF7"
                                        placeholder="Zip Code" required pattern="^\d{5}(-\d{4})?$|^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$"
                                        data-bind="value: bind_pers_zip">
                                        <div class="invalid-feedback">
                                            Please enter a valid zip/postal code (e.g., 12345 or A1B 2C3).
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons mt-4">
                                    <button type="button" class="prev__btn button prev-btn" >
                                        Back
                                    </button>
                                    <button type="button" class="nxt__btn button next-btn" data-next-form="3">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <!-- Step 5: Terms & Conditions -->
                        <fieldset id="form4" class="hidden">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="arrow prev-btn">
                                            ◀
                                        </span>
                                        <span class="px-3">
                                            Step 5/6
                                        </span>
                                        <span class="arrow next-btn" data-next-form="4">
                                            ▶
                                        </span>
                                    </p>
                                </div>
                                <h2>
                                    Terms & Conditions
                                </h2>
                                <p>
                                    Please review and accept the terms
                                </p>
                            </div>
                            <div class="input__container">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <iframe src="https://payter.us/apply/PZTsAndCs.php" height="420" width="100%">
                                        </iframe>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="checkbox-2" name="checkbox-2"
                                            required>
                                            <label class="form-check-label" for="checkbox-2">
                                                I accept the
                                                <a href="#terms" target="_blank">
                                                    Terms & Conditions
                                                </a>
                                            </label>
                                            <div class="invalid-feedback">
                                                You must accept the Terms & Conditions to proceed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons mt-4">
                                    <button type="button" class="prev__btn btn btn-secondary prev-btn">
                                        Back
                                    </button>
                                    <button type="button" class="nxt__btn btn btn-primary next-btn" data-next-form="4">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <!-- Step 6: Review & Submit -->
                        <fieldset id="form5" class="active__form hidden">
                            <div class="sub__title__container">
                                <div class="d-inline-block">
                                    <p>
                                        <span class="arrow prev-btn">
                                            ◀
                                        </span>
                                        <span class="px-3">
                                            Step 6/6
                                        </span>
                                    </p>
                                </div>
                                <h2>
                                    Review &amp; Submit
                                </h2>
                                <p>
                                    Review your information before submitting
                                </p>
                            </div>
                            <div class="input__container">
                                <div class="row gap-4">
                                    <h5 class="">Business Information</h5>
                                    <div class="row ">
                                        <!-- Business Information -->
                                        <div class="col-md-6">
                                            <label for="Company" class="form-label">
                                                Company Name
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="Company" name="Company" readonly=""
                                                data-bind="value: bind_company">
                                                <button type="button" aria-label="Edit Company Name" class="btn ">
                                                    <ion-icon name="create-outline" id="edit_Company" tabindex="0" role="img"
                                                    aria-label="Edit Company" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="LEADCF34" class="form-label">
                                                DBA
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF34" name="LEADCF34"
                                                readonly="" data-bind="value: bind_dba">
                                                <button type="button" aria-label="Edit DBA" class="btn ">
                                                    <ion-icon name="create-outline" id="edit_LEADCF34" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF34" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="LEADCF2" class="form-label">
                                                <span data-bzid="bizID">
                                                    EIN/TIN
                                                </span>
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF2" name="LEADCF2" readonly=""
                                                data-bind="value: bind_ein">
                                                <button type="button" class="btn " aria-label="Edit EIN/TIN/Tax ID/BN">
                                                    <ion-icon name="create-outline" id="edit_LEADCF2" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF2" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="LEADCF81" class="form-label">
                                                Date of Incorporation
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF81" name="LEADCF81"
                                                readonly="" data-bind="value: bind_inc">
                                                <button type="button" class="btn " aria-label="Edit Date of Incorporation">
                                                    <ion-icon name="create-outline" id="edit_LEADCF81" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF81" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="LEADCF5" class="form-label">
                                                Business Type
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF5" name="LEADCF5" readonly=""
                                                data-bind="value: bind_biz_type">
                                                <button type="button" class="btn " aria-label="Edit Business Type">
                                                    <ion-icon name="create-outline" id="edit_LEADCF5" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF5" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="LEADCF6" class="form-label">
                                                Ownership Type
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF6" name="LEADCF6" readonly=""
                                                data-bind="value: bind_own_type">
                                                <button type="button" class="btn " aria-label="Edit Ownership Type">
                                                    <ion-icon name="create-outline" id="edit_LEADCF6" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF6" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF13" class="form-label">
                                                Bank Name
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF13" name="LEADCF13"
                                                readonly="" data-bind="value: bind_bank_name">
                                                <button type="button" class="btn " aria-label="Edit Bank Name">
                                                    <ion-icon name="create-outline" id="edit_LEADCF13" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF13" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF15" class="form-label">
                                                Routing Number
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF15" name="LEADCF15"
                                                readonly="" data-bind="value: bind_routingNum">
                                                <button type="button" class="btn " aria-label="Edit Routing Number">
                                                    <ion-icon name="create-outline" id="edit_LEADCF15" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF15" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF14" class="form-label">
                                                Account Number
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF14" name="LEADCF14"
                                                readonly="" data-bind="value: bind_accountNum">
                                                <button type="button" class="btn " aria-label="Edit Account Number">
                                                    <ion-icon name="create-outline" id="edit_LEADCF14" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF14" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF18" class="form-label">
                                                Average Ticket Size
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF18" name="LEADCF18"
                                                readonly="" data-bind="value: bind_avTick">
                                                <button type="button" class="btn " aria-label="Edit Average Ticket Size">
                                                    <ion-icon name="create-outline" id="edit_LEADCF18" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF18" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF17" class="form-label">
                                                Highest Ticket Size
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF17" name="LEADCF17"
                                                readonly="" data-bind="value: bind_highTick">
                                                <button type="button" class="btn " aria-label="Edit Highest Ticket Size">
                                                    <ion-icon name="create-outline" id="edit_LEADCF17" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF17" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="LEADCF16" class="form-label">
                                                Estimated Annual Revenue
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="LEADCF16" name="LEADCF16"
                                                readonly="" data-bind="value: bind_annualRev">
                                                <button type="button" class="btn " aria-label="Edit Estimated Annual Revenue">
                                                    <ion-icon name="create-outline" id="edit_LEADCF16" tabindex="0" role="img"
                                                    aria-label="Edit LEADCF16" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <label for="Street" class="form-label">
                                                Business Street Address
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="Street" name="Street" readonly=""
                                                data-bind="value: bind_biz_street">
                                                <button type="button" class="btn " aria-label="Edit Business Street Address">
                                                    <ion-icon name="create-outline" id="edit_Street" tabindex="0" role="img"
                                                    aria-label="Edit Street" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="City" class="form-label">
                                                Business City
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="City" name="City" readonly=""
                                                data-bind="value: bind_biz_city">
                                                <button type="button" class="btn " aria-label="Edit Business City">
                                                    <ion-icon name="create-outline" id="edit_City" tabindex="0" role="img"
                                                    aria-label="Edit City" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="State" class="form-label">
                                                Business
                                                <span data-region="regionLBL">
                                                    State
                                                </span>
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="State" name="State" readonly=""
                                                data-bind="value: bind_biz_state">
                                                <button type="button" class="btn " aria-label="Edit Business State/Province">
                                                    <ion-icon name="create-outline" id="edit_State" tabindex="0" role="img"
                                                    aria-label="Edit State" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 d-flex flex-column">
                                            <label for="Zip_Code" class="form-label">
                                                Business Zip Code
                                            </label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="Zip_Code" name="Zip_Code"
                                                readonly="" data-bind="value: bind_biz_zip">
                                                <button type="button" class="btn " aria-label="Edit Business Zip Code">
                                                    <ion-icon name="create-outline" id="edit_Zip_Code" tabindex="0" role="img"
                                                    aria-label="Edit Zip_Code" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="Phone" class="form-label">
                                                Business Phone
                                            </label>
                                            <div class="input-group">
                                                <input type="tel" class="form-control" id="Phone" name="Phone" readonly=""
                                                data-bind="value: bind_biz_phone">
                                                <button type="button" class="btn " aria-label="Edit Business Phone">
                                                    <ion-icon name="create-outline" id="edit_Phone" tabindex="0" role="img"
                                                    aria-label="Edit Phone" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="Email" class="form-label">
                                                Business Email
                                            </label>
                                            <div class="input-group">
                                                <input type="email" class="form-control" id="Email" name="Email" readonly=""
                                                data-bind="value: bind_biz_email">
                                                <button type="button" class="btn " aria-label="Edit Business Email">
                                                    <ion-icon name="create-outline" id="edit_Email" tabindex="0" role="img"
                                                    aria-label="Edit Email" class="md hydrated">
                                                    </ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <label for="Website" class="form-label">
                                            Business Website
                                        </label>
                                        <div class="input-group">
                                            <input type="url" class="form-control" id="Website" name="Website" readonly=""
                                            data-bind="value: bind_biz_web">
                                            <button type="button" class="btn " aria-label="Edit Business Website">
                                                <ion-icon name="create-outline" id="edit_Website" tabindex="0" role="img"
                                                aria-label="Edit Website" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                
                                <!-- Personal Information -->
                                <h5 class="">Personal Information</h5>
                                
                                <div class="col-md-6">
                                    <label for="LEADCF35" class="form-label">
                                        Job Title
                                    </label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="LEADCF35" name="LEADCF35"
                                        readonly="" data-bind="value: bind_job_title">
                                        <button type="button" class="btn " aria-label="Edit Job Title">
                                            <ion-icon name="create-outline" id="edit_LEADCF35" tabindex="0" role="img"
                                            aria-label="Edit LEADCF35" class="md hydrated">
                                            </ion-icon>
                                        </button>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-6">
                                        <label for="First_Name" class="form-label">
                                            First Name
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="First_Name" name="First_Name"
                                            readonly="" data-bind="value: bind_first_name">
                                            <button type="button" class="btn " aria-label="Edit First Name">
                                                <ion-icon name="create-outline" id="edit_First_Name" tabindex="0" role="img"
                                                aria-label="Edit First_Name" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="Last_Name" class="form-label">
                                            Last Name
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="Last_Name" name="Last_Name"
                                            readonly="" data-bind="value: bind_last_name">
                                            <button type="button" class="btn " aria-label="Edit Last Name">
                                                <ion-icon name="create-outline" id="edit_Last_Name" tabindex="0" role="img"
                                                aria-label="Edit Last_Name" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="Secondary_Email" class="form-label">
                                            Personal Email
                                        </label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" id="Secondary_Email" name="Secondary_Email"
                                            readonly="" data-bind="value: bind_pers_email">
                                            <button type="button" class="btn " aria-label="Edit Personal Email">
                                                <ion-icon name="create-outline" id="edit_Secondary_Email" tabindex="0"
                                                role="img" aria-label="Edit Secondary_Email" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="Mobile" class="form-label">
                                            Mobile Phone
                                        </label>
                                        <div class="input-group">
                                            <input type="tel" class="form-control" id="Mobile" name="Mobile" readonly=""
                                            data-bind="value: bind_mobile">
                                            <button type="button" class="btn " aria-label="Edit Mobile Phone">
                                                <ion-icon name="create-outline" id="edit_Mobile" tabindex="0" role="img"
                                                aria-label="Edit Mobile" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="LEADCF82" class="form-label">
                                            Date of Birth
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF82" name="LEADCF82"
                                            readonly="" data-bind="value: bind_dob">
                                            <button type="button" class="btn " aria-label="Edit Date of Birth">
                                                <ion-icon name="create-outline" id="edit_LEADCF82" tabindex="0" role="img"
                                                aria-label="Edit LEADCF82" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="LEADCF9" class="form-label">
                                            <span data-socialid="socialID">
                                                Social Security Number
                                            </span>
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF9" name="LEADCF9" readonly=""
                                            data-bind="value: bind_social_id">
                                            <button type="button" class="btn " aria-label="Edit Social ID">
                                                <ion-icon name="create-outline" id="edit_LEADCF9" tabindex="0" role="img"
                                                aria-label="Edit LEADCF9" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-9">
                                        <label for="LEADCF11" class="form-label">
                                            Personal Street Address
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF11" name="LEADCF11"
                                            readonly="" data-bind="value: bind_pers_street">
                                            <button type="button" class="btn " aria-label="Edit Personal Street Address">
                                                <ion-icon name="create-outline" id="edit_LEADCF11" tabindex="0" role="img"
                                                aria-label="Edit LEADCF11" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="LEADCF12" class="form-label">
                                            Personal City
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF12" name="LEADCF12"
                                            readonly="" data-bind="value: bind_pers_city">
                                            <button type="button" class="btn " aria-label="Edit Personal City">
                                                <ion-icon name="create-outline" id="edit_LEADCF12" tabindex="0" role="img"
                                                aria-label="Edit LEADCF12" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="LEADCF8" class="form-label">
                                            Personal
                                            <span data-region="regionLBL">
                                                State
                                            </span>
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF8" name="LEADCF8" readonly=""
                                            data-bind="value: bind_pers_state">
                                            <button type="button" class="btn " aria-label="Edit Personal State/Province">
                                                <ion-icon name="create-outline" id="edit_LEADCF8" tabindex="0" role="img"
                                                aria-label="Edit LEADCF8" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex flex-column">
                                        <label for="LEADCF7" class="form-label">
                                            Personal Zip Code
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="LEADCF7" name="LEADCF7" readonly=""
                                            data-bind="value: bind_pers_zip">
                                            <button type="button" class="btn " aria-label="Edit Personal Zip Code">
                                                <ion-icon name="create-outline" id="edit_LEADCF7" tabindex="0" role="img"
                                                aria-label="Edit LEADCF7" class="md hydrated">
                                                </ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buttons mt-4">
                                <button type="button" class="prev__btn btn btn-secondary prev-btn">
                                    Back
                                </button>
                                <button type="submit" class="nxt__btn btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                        </fieldset>
                    </form>
                </div>
                <!-- Pricing Container -->
                <div class="pricing__container ml-sm-auto mt-5 ">
                    <div class="card card-pricing text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
                            Pricing Plan
                        </span>
                        <div class="bg-transparent card-header pt-4 border-0">
                            <h4 class="font-weight-normal text-primary text-center mb-0" data-pricing-value="15"
                            id="price_plan">
                                Flat Rate 3.25 % + 10¢
                                <span class="h6 text-muted ml-2">
                                </span>
                            </h4>
                        </div>
                        <div class="card-body pt-0" id="fees_display">
                            <ul class="list-unstyled mb-4">
                                <li>
                                    Account Registration Fee $99
                                </li>
                                <li>
                                    Activation Per Terminal $9.99
                                </li>
                                <li>
                                    $9 per month without SIM
                                </li>
                                <li>
                                    $14 per month with SIM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- MCC Modal -->
            <div id="open-modal" class="modal fade" tabindex="-1" aria-labelledby="modalTitle"
            aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="modalTitle">
                                What is a Merchant Category Code?
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                                The Merchant Category Code (MCC) is a four-digit number assigned to describe
                                a Merchant’s primary business based on annual sales volume measured in
                                local currency. In addition, some MCCs identify a specific Merchant or
                                type of transaction.
                            </p>
                            <p>
                                The ranges for MCCs are generally organized as follows:
                            </p>
                            <ul>
                                <li>
                                    0001–1499: Agricultural services
                                </li>
                                <li>
                                    1500–2999: Contracted services
                                </li>
                                <li>
                                    4000–4799: Transportation services
                                </li>
                                <li>
                                    4800–4999: Utility services
                                </li>
                                <li>
                                    5000–5599: Retail outlet services
                                </li>
                                <li>
                                    5600–5699: Clothing stores
                                </li>
                                <li>
                                    5700–7299: Miscellaneous stores
                                </li>
                                <li>
                                    7300–7999: Business services
                                </li>
                                <li>
                                    8000–8999: Professional services and membership organizations
                                </li>
                                <li>
                                    9000–9999: Government services
                                </li>
                            </ul>
                            <p>
                                The MCC system helps streamline the processing of transactions and enables
                                financial institutions to offer targeted benefits and manage risks more
                                effectively.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'assets/footer.php'?>
            <script>
                function changeLanguage(lang) {
                    var translateElement = document.querySelector('select.goog-te-combo');
                    if (translateElement) {
                        translateElement.value = lang;
                        translateElement.dispatchEvent(new Event('change'));
                    }
                }

                function translateLanguage(lang) {
                    googleTranslateElementInit();
                    var $frame = $('.goog-te-menu-frame:first');
                    if (!$frame.size()) {
                        alert("Error: Could not find Google translate frame.");
                        return false;
                    }
                    $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
                    return false;
                }

                // Attach event listeners to language dropdown items
                document.querySelectorAll('#language-dropdown .dropdown-item').forEach(function(item) {
                    item.addEventListener('click',
                    function(event) {
                        event.preventDefault();
                        var lang = this.getAttribute('data-lang');
                        changeLanguage(lang);
                    });
                });
            </script>
    </body>

</html>