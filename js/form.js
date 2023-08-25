// function sendMail() {
//     var params = {
//         fname: document.getElementById('fname').value,
//         phone: document.getElementById('phone').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//     };

//     const serviceID = "service_gzqwp09";
//     const templateID = "template_nf7ebou";

//     emailjs.send(serviceID, templateID, params).then((res) => {
//             document.getElementById('fname').value = "";
//             document.getElementById('phone').value = "";
//             document.getElementById('email').value = "";
//             document.getElementById('message').value = "";
//             console.log(res);
//             alert("Your Message Sent to Admin Successfully!");
//         }).catch((err) => console.log(err));

// }


// Initialize Email.js with your user ID


// Function to send an email
function sendEmail() {
    // Replace with your actual email service and template IDs
    const serviceID = "service_gzqwp09";
    const templateID = "template_sghkieu";

    // Get user input from the HTML form
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the email parameters
    const emailParams = {
        name: fname,
        lname: lname,
        phone: phone,
        email: email,
        message: message,
    };

    // Send the email
    emailjs.send(serviceID, templateID, emailParams)
        .then(function (response) {
            console.log("Email sent successfully!", response);
        }, function (error) {
            console.error("Failed to send email:", error);
        });
}