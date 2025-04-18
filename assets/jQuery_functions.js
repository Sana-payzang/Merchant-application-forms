$(document).ready(function() {
    // Knockout.js ViewModel
    function FormViewModel() {
        this.bind_country = ko.observable('');
        this.bind_industry = ko.observable('');
        this.bind_company = ko.observable('');
        this.bind_dba = ko.observable('');
        this.bind_ein = ko.observable('');
        this.bind_inc = ko.observable('');
        this.bind_biz_type = ko.observable('');
        this.bind_own_type = ko.observable('');
        this.bind_bank_name = ko.observable('');
        this.bind_routingNum = ko.observable('');
        this.bind_accountNum = ko.observable('');
        this.bind_avTick = ko.observable('');
        this.bind_highTick = ko.observable('');
        this.bind_annualRev = ko.observable('');
        this.bind_biz_street = ko.observable('');
        this.bind_biz_city = ko.observable('');
        this.bind_biz_state = ko.observable('');
        this.bind_biz_zip = ko.observable('');
        this.bind_biz_phone = ko.observable('');
        this.bind_biz_email = ko.observable('');
        this.bind_biz_web = ko.observable('');
        this.bind_first_name = ko.observable('');
        this.bind_last_name = ko.observable('');
        this.bind_job_title = ko.observable('');
        this.bind_pers_email = ko.observable('');
        this.bind_mobile = ko.observable('');
        this.bind_dob = ko.observable('');
        this.bind_social_id = ko.observable('');
        this.bind_confirm_social_id = ko.observable('');
        this.bind_pers_street = ko.observable('');
        this.bind_pers_city = ko.observable('');
        this.bind_pers_state = ko.observable('');
        this.bind_pers_zip = ko.observable('');
        this.stateOptions = ko.observableArray([]);
    }

    // Apply Knockout.js bindings
    const viewModel = new FormViewModel();
    ko.applyBindings(viewModel);

    // Regions object
    const regions = {
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

    // Form navigation setup
    let viewId = 0;
    const forms = Array.from(document.querySelectorAll('[id^="form"]'));
    const icons = Array.from(document.querySelectorAll('[id^="icon"]'));
    const titles = Array.from(document.querySelectorAll('.side__titles .title__name'));
    const iconNames = [
        { active: 'globe', inactive: 'globe-outline' },
        { active: 'bar-chart', inactive: 'bar-chart-outline' },
        { active: 'business', inactive: 'business-outline' },
        { active: 'person', inactive: 'person-outline' },
        { active: 'newspaper', inactive: 'newspaper-outline' },
        { active: 'search-circle', inactive: 'search-circle-outline' }
    ];

    function updateView() {
        forms.forEach((form, index) => {
            form.classList.toggle('active__form', index === viewId);
            form.classList.toggle('hidden', index !== viewId);
        });
        icons.forEach((li, index) => {
            li.classList.toggle('active', index === viewId);
            const icon = li.querySelector('ion-icon');
            icon.setAttribute('name', index === viewId ? iconNames[index].active : iconNames[index].inactive);
        });
        titles.forEach((title, index) => {
            title.classList.toggle('active-title', index === viewId);
        });
        console.log('Current viewId:', viewId, 'Active form:', forms[viewId]?.id);
    }

    // Bootstrap validation helper
    function validateForm($form) {
        let isValid = true;
        $form.find('input, select, textarea').not(':submit, :reset, :hidden').each(function() {
            const $field = $(this);
            const field = this;

            // Skip unchecked radio buttons to avoid duplicate validation
            if ($field.is(':radio') && !$field.is(':checked')) {
                return;
            }

            if (field.checkValidity()) {
                $field.removeClass('is-invalid').addClass('is-valid');
                $field.next('.invalid-feedback').hide();
            } else {
                $field.removeClass('is-valid').addClass('is-invalid');
                $field.next('.invalid-feedback').show();
                isValid = false;
            }
        });

        // Handle radio groups separately
        $form.find('input[type="radio"]').each(function() {
            const $radio = $(this);
            const name = $radio.attr('name');
            const $radioGroup = $form.find(`input[name="${name}"]`);
            const $container = $radioGroup.closest('.form-group');
            const isChecked = $radioGroup.is(':checked');

            if (isChecked) {
                $container.find('.invalid-feedback').hide();
                $radioGroup.removeClass('is-invalid').addClass('is-valid');
            } else if ($radioGroup.filter('[required]').length) {
                $container.find('.invalid-feedback').show();
                $radioGroup.removeClass('is-valid').addClass('is-invalid');
                isValid = false;
            }
        });

        // Add was-validated class
        $form.addClass('was-validated');
        console.log('Form validation result:', isValid);
        return isValid;
    }

    function nextForm(formIndex) {
        const $currentForm = $(`#form${formIndex}`);

        console.log(`Validating form${formIndex}, viewId:`, viewId);

        // Reset validation styles
        $currentForm.find('input, select, textarea')
            .removeClass('is-valid is-invalid')
            .next('.invalid-feedback').hide();
        $currentForm.removeClass('was-validated');

        // Validate form
        const isValid = validateForm($currentForm);

        // Sync data if valid
        if (isValid) {
            if (formIndex === 0) {
                const country = $('input[name="countrybtn"]:checked').val();
                if (country) {
                    viewModel.bind_country(country);
                    $('#Country, #LEADCF10').val(viewModel.bind_country());
                    $('#Lead_Source').val(country === 'United States' ? 'Payter US' : 'Payter Canada');
                    console.log('Synced #Country:', country, '#Lead_Source:', $('#Lead_Source').val());
                }
            } else if (formIndex === 1) {
                const industry = $('#match_LEADCF4').val();
                if (industry && industry !== '-- Select --') {
                    viewModel.bind_industry(industry);
                    $('#LEADCF4').val(viewModel.bind_industry());
                    $('#LEADCF30').val($('#price_plan').text());
                    console.log('Synced #LEADCF4:', industry, '#LEADCF30:', $('#LEADCF30').val());
                    if (viewModel.bind_country() === 'United States' && viewModel.bind_industry()) {
                        $('.card-pricing').addClass('show');
                    } else {
                        $('.card-pricing').removeClass('show');
                    }
                }
            } else if (formIndex === 2) {
                const fields = [
                    { match: 'match_Company', zoho: 'Company', observable: 'bind_company' },
                    { match: 'match_LEADCF34', zoho: 'LEADCF34', observable: 'bind_dba' },
                    { match: 'match_LEADCF2', zoho: 'LEADCF2', observable: 'bind_ein' },
                    { match: 'match_LEADCF81', zoho: 'LEADCF81', observable: 'bind_inc' },
                    { match: 'match_LEADCF5', zoho: 'LEADCF5', observable: 'bind_biz_type' },
                    { match: 'match_LEADCF6', zoho: 'LEADCF6', observable: 'bind_own_type' },
                    { match: 'match_LEADCF13', zoho: 'LEADCF13', observable: 'bind_bank_name' },
                    { match: 'match_LEADCF18', zoho: 'LEADCF18', observable: 'bind_avTick' },
                    { match: 'match_LEADCF17', zoho: 'LEADCF17', observable: 'bind_highTick' },
                    { match: 'match_LEADCF16', zoho: 'LEADCF16', observable: 'bind_annualRev' },
                    { match: 'match_Street', zoho: 'Street', observable: 'bind_biz_street' },
                    { match: 'match_City', zoho: 'City', observable: 'bind_biz_city' },
                    { match: 'match_State', zoho: 'State', observable: 'bind_biz_state' },
                    { match: 'match_Zip_Code', zoho: 'Zip_Code', observable: 'bind_biz_zip' },
                    { match: 'match_Phone', zoho: 'Phone', observable: 'bind_biz_phone' },
                    { match: 'match_Email', zoho: 'Email', observable: 'bind_biz_email' },
                    { match: 'match_Website', zoho: 'Website', observable: 'bind_biz_web' },
                    { match: 'routingNumber', zoho: 'LEADCF15', observable: 'bind_routingNum' },
                    { match: 'accountNumber', zoho: 'LEADCF14', observable: 'bind_accountNum' }
                ];

                fields.forEach(({ match, zoho, observable }) => {
                    const value = $(`#${match}`).val() || '';
                    viewModel[observable](value);
                    $(`#${zoho}`).val(value);
                    console.log(`Synced #${zoho} with value:`, value);
                });
            } else if (formIndex === 3) {
                const fields = [
                    { match: 'match_First_Name', zoho: 'First_Name', observable: 'bind_first_name' },
                    { match: 'match_Last_Name', zoho: 'Last_Name', observable: 'bind_last_name' },
                    { match: 'match_LEADCF35', zoho: 'LEADCF35', observable: 'bind_job_title' },
                    { match: 'match_Secondary_Email', zoho: 'Secondary_Email', observable: 'bind_pers_email' },
                    { match: 'match_Mobile', zoho: 'Mobile', observable: 'bind_mobile' },
                    { match: 'match_LEADCF82', zoho: 'LEADCF82', observable: 'bind_dob' },
                    { match: 'match_LEADCF11', zoho: 'LEADCF11', observable: 'bind_pers_street' },
                    { match: 'match_LEADCF12', zoho: 'LEADCF12', observable: 'bind_pers_city' },
                    { match: 'match_LEADCF8', zoho: 'LEADCF8', observable: 'bind_pers_state' },
                    { match: 'match_LEADCF7', zoho: 'LEADCF7', observable: 'bind_pers_zip' },
                    { match: 'socialIDNum', zoho: 'LEADCF9', observable: 'bind_social_id' }
                ];

                fields.forEach(({ match, zoho, observable }) => {
                    const value = $(`#${match}`).val() || '';
                    viewModel[observable](value);
                    $(`#${zoho}`).val(value);
                    console.log(`Synced #${zoho} with value:`, value);
                });
            } else if (formIndex === 4) {
                const checkbox = $('#checkbox-2');
                if (checkbox.length && !checkbox.is(':checked')) {
                    checkbox.addClass('is-invalid').removeClass('is-valid');
                    checkbox.next('.invalid-feedback').show();
                    isValid = false;
                } else if (checkbox.length) {
                    checkbox.addClass('is-valid').removeClass('is-invalid');
                    checkbox.next('.invalid-feedback').hide();
                }
            }
        }

        if (!isValid) {
            console.log('Validation failed for form' + formIndex);
            console.log('Invalid fields:', $currentForm.find('.is-invalid').map((i, el) => el.id).get());
            $currentForm.find('.is-invalid').first().focus();
            return false;
        }

        if (viewId < forms.length - 1) {
            viewId++;
            console.log('Advancing to viewId:', viewId, 'Form:', forms[viewId].id);
            updateView();
        } else {
            console.warn('Cannot advance: viewId', viewId, 'is at max', forms.length - 1);
        }
        return true;
    }

    function prevForm() {
        if (viewId > 0) {
            viewId--;
            if (viewId < 2) {
                $('.card-pricing').removeClass('show');
            }
            updateView();
        }
    }

    // Event listeners
    const $form = $('form[name="WebToLeads857022000077249001"]');

    // Form submission
    $form.on('submit', function(event) {
        console.log('Validating form for submission...');

        // Reset validation styles
        $form.find('input, select, textarea')
            .removeClass('is-valid is-invalid')
            .next('.invalid-feedback').hide();
        $form.removeClass('was-validated');

        // Validate entire form
        const isValid = validateForm($form);

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
            console.log('Form validation failed');
            $form.find('.is-invalid').first().focus();
            return false;
        }

        console.log('Form is valid, submitting to Zoho CRM...');
    });

    // Form navigation
    $('.next-btn').on('click', function() {
        const formIndex = $(this).data('next-form');
        console.log(`Next button clicked for form${formIndex}, viewId:`, viewId);
        nextForm(formIndex);
    });

    $('.prev-btn').on('click', function() {
        prevForm();
    });

    // Industry tile selection
    const pricingMap = {
        '5552 Electric Vehicle Charging': 'Flat Rate 3.25% + 10¢',
        '5499 Miscellaneous Food Stores-Convenience Stores and Specialty Markets': 'Flat Rate 4.25% + 5¢',
        '7542 Car Washes': 'Flat Rate 3.25% + 10¢'
    };
    $('.selection').on('click', function() {
        const mcc = $(this).attr('id').replace('industry_', '');
        const mccValue = {
            '1': '5552 Electric Vehicle Charging',
            '2': '5499 Miscellaneous Food Stores-Convenience Stores and Specialty Markets',
            '3': '7542 Car Washes'
        }[mcc];
        $('#match_LEADCF4').val(mccValue).addClass('is-valid').removeClass('is-invalid');
        viewModel.bind_industry(mccValue);
        $('#price_plan').text(pricingMap[mccValue] || 'Select an industry');
        console.log('Industry selected:', mccValue);
    });

    // Prevent copy-paste on confirm fields
    $('.confirm').on('paste copy', function(e) {
        e.preventDefault();
        alert('Copy-paste is disabled on this field. Please type the values manually.');
    });

    // Edit functionality for review fields
    $('ion-icon[name="create-outline"]').each(function() {
        const id = $(this).attr('id').replace('edit_', '');
        $(`#${id}`).prop('readonly', true);
        $(this).attr('tabindex', '0').attr('role', 'button').attr('aria-label', `Edit ${id}`);
        $(this).on('click keydown', function(e) {
            if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
                $(`#${id}`).prop('readonly', false).focus();
            }
        });
        $(`#${id}`).on('focusout', function() {
            $(this).prop('readonly', true);
        });
    });

    // Country selection
    $(document).on('change', 'input[name="countrybtn"]', function() {
        const selectedCountry = $(this).val();
        console.log('Country changed to:', selectedCountry);
        viewModel.bind_country(selectedCountry);

        // Update Knockout state options
        viewModel.stateOptions(regions[selectedCountry] || []);

        // Select elements to populate
        const $regionSelect = $("#match_State");
        const $perRegionSelect = $("#match_LEADCF8");
        const $reviewSelect = $("#State");
        const $reviewPSelect = $("#LEADCF8");

        // Function to populate a select element
        function populateSelect($select, fieldName) {
            if ($select.length) {
                $select.empty().append('<option selected hidden value="">-- Select --</option>');
                if (regions[selectedCountry]) {
                    regions[selectedCountry].forEach(function(region) {
                        $select.append(`<option value="${region.value}">${region.name}</option>`);
                    });
                    console.log(`Appended ${regions[selectedCountry].length} options to #${fieldName}`);
                } else {
                    console.warn(`No regions found for country: ${selectedCountry} for #${fieldName}`);
                }
            } else {
                console.error(`Element #${fieldName} not found`);
            }
        }

        // Populate all select elements
        populateSelect($regionSelect, 'match_State');
        populateSelect($perRegionSelect, 'match_LEADCF8');
        populateSelect($reviewSelect, 'State');
        populateSelect($reviewPSelect, 'LEADCF8');

        // Reset state observables
        viewModel.bind_biz_state('');
        viewModel.bind_pers_state('');

        // Update UI labels
        $('[data-bzID="bizID"]').text(selectedCountry === 'United States' ? 'EIN/TIN' : 'Tax ID/BN');
        $('[data-socialID="socialID"]').text(selectedCountry === 'United States' ? 'Social Security Number' : 'Social Insurance Number');
        $('[data-region="regionLBL"]').text(selectedCountry === 'United States' ? 'State' : 'Province');
        $('[data-currency="currency"]').text(selectedCountry === 'United States' ? 'USD' : 'CAD');
        $('#Lead_Source').val(selectedCountry === 'United States' ? 'Payter US' : 'Payter Canada');
    });

    // Initialize view
    updateView();
});