document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Wait for header elements to be added to the page
            const menuToggle = document.querySelector(".menu-toggle");
            const navigation = document.querySelector(".navigation");

            if (menuToggle && navigation) {
                menuToggle.addEventListener("click", function(event) {
                    event.stopPropagation(); // Prevents click from triggering document event
                    navigation.classList.toggle("show");
                });

                // Close menu when clicking outside of it
                document.addEventListener("click", function(event) {
                    if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
                        navigation.classList.remove("show");
                    }
                });
            } else {
                console.warn("Menu toggle or navigation not found.");
            }

            // Highlight active page
            const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
            const navLinks = document.querySelectorAll(".navigation a");
            navLinks.forEach(link => {
                if (link.getAttribute("href").replace(".html", "") === currentPage) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading navbar:", error));
});
