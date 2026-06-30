document.addEventListener("DOMContentLoaded", () => {

    // Contact Form

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            const contactData = {
                name,
                email,
                message
            };

            localStorage.setItem(
                "contactData",
                JSON.stringify(contactData)
            );

            alert("Message saved successfully!");
            this.reset();
        });
    }


    // Welcome Message
    
    const header = document.querySelector("header");

    if (header) {
        const welcome = document.createElement("p");
        welcome.textContent =
            "Welcome to my personal portfolio website!";
        header.appendChild(welcome);
    }

    
    // To-Do List
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    function displayTasks() {
        if (!taskList) return;

        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
                ${task}
                <button class="delete-btn"
                        data-index="${index}">
                    Delete
                </button>
            `;

            taskList.appendChild(li);
        });

        document.querySelectorAll(".delete-btn")
            .forEach(button => {
                button.addEventListener("click", () => {
                    const index =
                        button.dataset.index;

                    tasks.splice(index, 1);

                    localStorage.setItem(
                        "tasks",
                        JSON.stringify(tasks)
                    );

                    displayTasks();
                });
            });
    }

    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", () => {
            const task = taskInput.value.trim();

            if (task === "") {
                alert("Please enter a task.");
                return;
            }

            tasks.push(task);

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            taskInput.value = "";
            displayTasks();
        });
    }

    displayTasks();

    
    // Dark/Light Mode

    const themeBtn =
        document.getElementById("themeToggle") ||
        document.getElementById("theme-toggle");

    function updateThemeButton() {
        if (!themeBtn) return;

        const isDarkMode = document.body.classList.contains("dark-mode");
        themeBtn.textContent = isDarkMode
            ? "☀️ Switch to Light Mode"
            : "🌙 Switch to Dark Mode";
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButton();

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isDarkMode = document.body.classList.toggle("dark-mode");

            if (isDarkMode) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            updateThemeButton();
        });
    }
});