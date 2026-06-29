// Smooth form handling + validation + user feedback

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            showMessage("❌ Please fill in all fields", "red");
            return;
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            showMessage("❌ Please enter a valid email", "red");
            return;
        }

        // Success message
        showMessage("✅ Message sent successfully!", "green");

        // Clear form
        form.reset();
    });

    // Function to show messages
    function showMessage(text, color) {
        let msg = document.createElement("p");
        msg.textContent = text;
        msg.style.color = color;
        msg.style.fontWeight = "bold";
        msg.style.marginTop = "10px";

        form.appendChild(msg);

        // Remove after 3 seconds
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
});
// ===== Scroll reveal animation =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 300;

        if (top > offset) {
            sec.classList.add("show");
        }
    });
});