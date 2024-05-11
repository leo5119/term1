document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('gpt-form');
    var responsePara = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var inputText = document.getElementById('input-text').value;

        fetch('/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: inputText })
        })
        .then(response => response.json())
        .then(data => {
            responsePara.textContent = data.response;
        })
        .catch((error) => {
            console.error('Error:', error);
            responsePara.textContent = "An error occurred while fetching the data.";
        });
    });
});