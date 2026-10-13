const roles = ["Flutter developer", "AI enthusiast", "Flutter instructor"];

const skills = ["Flutter", "Dart", "Firebase", "Bloc / Cubit", "Git & GitHub", "LangChain", "Python"];

const projects = [
    {
        title: "Crypto-Project-ENSTA",
        description: "A secure electronic voting system. I lead the architecture.",
        tags: "Security, Cryptography"
    },
    {
        title: "TaskPilot",
        description: "An AI productivity agent that you chat with on Telegram.",
        tags: "LangChain, LangGraph, MCP"
    },
    {
        title: "Flutter & Dart Course",
        description: "Live-coded lessons with slide decks and starter projects.",
        tags: "Teaching, Flutter"
    }
];



const skillsList = document.getElementById("skills-list");
skills.forEach(function (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

const projectsGrid = document.getElementById("projects-grid");
projects.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
        "<h3>" + project.title + "</h3>" +
        "<p>" + project.description + "</p>" +
        "<p class='tags'>" + project.tags + "</p>";
    projectsGrid.appendChild(card);
});

const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingEl.textContent = currentRole.slice(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }

    setTimeout(type, delay);
}
type();

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "light";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeBtn.textContent = isDark ? "light" : "dark";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

const nav = document.getElementById("nav");
document.getElementById("menu-toggle").addEventListener("click", function () {
    nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});


const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all fields.";
        status.className = "form-status error";
    } else if (!email.includes("@")) {
        status.textContent = "Please enter a valid email.";
        status.className = "form-status error";
    } else {
        status.textContent = "Thanks " + name + "! Your message is ready to send.";
        status.className = "form-status success";
        form.reset();
    }
});

document.getElementById("year").textContent = new Date().getFullYear();