
// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// ANO AUTOMÁTICO
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// ANIMAÇÕES AO ROLAR A PÁGINA
const elements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .journey-content, .contact-form"
);

elements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

elements.forEach(element => observer.observe(element));

// FORMULÁRIO DEMONSTRATIVO
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        feedback.textContent = "Preencha todos os campos.";
        return;
    }

    feedback.textContent =
        "Mensagem registrada nesta demonstração! O formulário ainda não envia e-mails.";

    contactForm.reset();
});
