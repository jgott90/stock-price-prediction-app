document.addEventListener('DOMContentLoaded', function() {
    const predictionForm = document.querySelector('form');
    const submitButton = predictionForm.querySelector('button[type="submit"]');
    const stockSymbolInput = predictionForm.querySelector('input[name="stock_symbol"]');
    const predictionDateInput = predictionForm.querySelector('input[name="prediction_date"]');

    predictionForm.addEventListener('submit', function(event) {
        if (!stockSymbolInput.value || !predictionDateInput.value) {
            alert("Please fill in all fields.");
            event.preventDefault(); // Prevent form submission
        } else {
            submitButton.disabled = true; // Disable button to prevent multiple submissions
        }
    });
});
