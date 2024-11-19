function respond() {
    let headerParagraph = document.getElementById("firsttext");
    let mainParagraph = document.getElementById("respond");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    headerParagraph.innerHTML = "Response <del>Received<del>!"

    mainParagraph.innerHTML = fname + " " + lname + ", your message from " + email + " would've been sent to us if we had actually paid for an email service.";
}