const nxtBtn = document.querySelector('#submitBtn');
const forms = Array.from(document.querySelectorAll('[id^="form"]'));
const icons = Array.from(document.querySelectorAll('[id^="icon"]'));

let viewId = 0;

function updateView() {
    // Update progress bar
    icons.forEach((icon, index) => {
        icon.classList.toggle('active', index === viewId);
    });

    // Update form visibility
    forms.forEach((form, index) => {
        form.style.display = index === viewId ? 'block' : 'none';
    });

    // Handle specific case for the final step
    if (viewId === 5) {
        nxtBtn.innerHTML = "Submit";
    } else {
        nxtBtn.innerHTML = "Next"; // Reset to "Next" for other steps
    }
}

function nextForm() {
    if (viewId < forms.length - 1) {
        viewId++;
        updateView();
        console.log("Current View ID:", viewId);
    }
}

function prevForm() {
    
    if (viewId > 0) {
        viewId--;
        updateView();
        console.log("Current View ID:", viewId);
    }
}

// Initialize view
updateView();

// Slider functionality
const slider = document.querySelector(".slider");
const output = document.querySelector(".output__value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}