document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predict-form');
    const resultDiv = document.getElementById('result');

    // Handle form submission using the Fetch API
    form.addEventListener('submit', async (event) => {
        // Prevent the form's default behavior
        event.preventDefault();

        // Get the form data
        const formData = new FormData(form);

        // Display a loading message
        resultDiv.textContent = 'Predicting...';

        try {
            // Send a POST request to the /predict endpoint
            const response = await fetch('/predict', {
                method: 'POST',
                body: formData
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const data = await response.json();

            // Update the result div with the predicted class
            resultDiv.textContent = `Predicted class: ${data.class}`;

        } catch (error) {
            // Log the error to the console
            console.error('Error during prediction:', error);

            // Display an error message to the user
            resultDiv.textContent = 'An error occurred during prediction. Please try again.';
        }
    });
});