function sendMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const mailTo = 'mailto:anukriti.student.che21@itbhu.ac.in' +
                   '?subject=' + encodeURIComponent('Message from ' + name) +
                   '&body=' + encodeURIComponent(message + '\n\nFrom: ' + email);

    window.location.href = mailTo;
}
