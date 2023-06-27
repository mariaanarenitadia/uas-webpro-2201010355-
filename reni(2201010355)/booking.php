<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $checkIn = $_POST['check-in'];
    $checkOut = $_POST['check-out'];
    $guests = $_POST['no_telp'];

    // Process the data (e.g., save to a database)

    // Display a success message
    echo "Booking successful. Thank you!";
}
?>