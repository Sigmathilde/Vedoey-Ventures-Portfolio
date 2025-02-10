document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Highlight active page
            const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
            const navLinks = document.querySelectorAll(".navigation a");
            navLinks.forEach(link => {
                if (link.getAttribute("href").replace(".html", "") === currentPage) {
                    link.classList.add("active");
                }
            });

            // Enable menu toggle only on mobile
            const menuToggle = document.querySelector(".menu-toggle");
            const navigation = document.querySelector(".navigation");

            if (menuToggle && navigation) {
                menuToggle.addEventListener("click", function() {
                    navigation.classList.toggle("show");
                });

                // Close menu when clicking outside of it
                document.addEventListener("click", function(event) {
                    if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
                        navigation.classList.remove("show");
                    }
                });
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});
