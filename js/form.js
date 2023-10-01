// Function to send an email
function sendEmail() {
    // Replace with your actual email service and template IDs
    const serviceID = "service_4tgihog";
    const templateID = "template_99yqqp5";

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

// ----------------------------PRELOADER----------------------------------------------



// # function to validate phone number
// const phoneError = document.getElementById('phone-error');

// function validatePhone() {
//     var phone = document.getElementById('phone').value;
//     console.log(phone);

//     if (phone.length == 0) {
//         document.querySelector("#phone-error").innerHTML = "Phone Number is Required";
//         return false;
//     }
//     if (phone.length !== 10) {
//         document.querySelector("#phone-error").innerHTML  = 'Enter ten Digits';
//         // return false;
//     }
//     if (!phone.match(/^[0-9]{10}$/)) {
//         document.querySelector("#phone-error").innerHTML  = 'Enter 10 Digits';
//         // return false;
//     }

//     document.querySelector("#phone-error").innerHTML  = ' ';
//     return true;
// }