document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");

    if (headerContainer) {
        fetch("header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load header.html");
                }
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
                initializeNavbar(); // Call function to make menu work
            })
            .catch(error => console.error("Error loading navbar:", error));
    }

    function initializeNavbar() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navigation = document.querySelector(".navigation");

        if (menuToggle && navigation) {
            menuToggle.addEventListener("click", function () {
                navigation.classList.toggle("show");
            });

            document.addEventListener("click", function (event) {
                if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
                    navigation.classList.remove("show");
                }
            });
        }

        // Highlight active page
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
        const navLinks = document.querySelectorAll(".navigation a");

        navLinks.forEach(link => {
            if (link.getAttribute("href").replace(".html", "") === currentPage) {
                link.classList.add("active");
            }
        });
    }
});
