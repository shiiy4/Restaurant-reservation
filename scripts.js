document.getElementById('booking-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !email || !date || !time || !guests) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
    }
});
