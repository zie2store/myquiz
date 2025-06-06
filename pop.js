// Array of pop-under URLs
        const popunderLinks = [
"https://scrbd.vercel.app",
"https://scrbd.vercel.app/viewer.html?doc=4024061&Fun-English-for-Kids-English"
        ];

        // Function to open random pop-under link
        function openRandomPopunder() {
            const randomIndex = Math.floor(Math.random() * popunderLinks.length); // Generate random index
            const linkToOpen = popunderLinks[randomIndex]; // Select random link
            const newTab = window.open(linkToOpen, "_blank"); // Open the link in a new tab

            if (newTab) {
                newTab.blur(); // Make sure the new tab doesn't steal focus
                window.focus(); // Focus back on the original tab (your blog)
            }
        }

        // Function to check if 5 minutes have passed since last pop-under
        function shouldShowPopunder() {
            const lastShown = localStorage.getItem('lastPopunderTime'); // Get the last time pop-under was shown
            const currentTime = Date.now(); // Get the current time (in milliseconds)

            // If it's the first time or 5 minutes have passed
            if (!lastShown || currentTime - lastShown > 3 * 60 * 1000) {
                localStorage.setItem('lastPopunderTime', currentTime); // Update the last shown time
                return true; // It's time to show the pop-under
            }
            return false; // Don't show pop-under yet
        }

        // Add click event listener to the entire document
        function addClickEventToDocument() {
            document.addEventListener("click", function(event) {
                if (shouldShowPopunder()) {
                    openRandomPopunder(); // Open pop-under if it's time
                }
            });
        }

        // Initialize the click event
        window.onload = addClickEventToDocument;
