const popunderLinks = [
"https://s.shopee.co.id/70EZcfwaNh",
"https://s.shopee.co.id/8pgDoG6d2Q",
"https://s.shopee.co.id/8KjxE4gfar",
"https://s.shopee.co.id/7fUGQ9f83b",
"https://muvibox.netlify.app/",
"https://s.shopee.co.id/W1OtbN6qW"
        ];

        function openRandomPopunder() {
            const randomIndex = Math.floor(Math.random() * popunderLinks.length);
            const linkToOpen = popunderLinks[randomIndex]; 
            const newTab = window.open(linkToOpen, "_blank");

            if (newTab) {
                newTab.blur();
                window.focus();
            }
        }

        function shouldShowPopunder() {
            const lastShown = localStorage.getItem('lastPopunderTime');
            const currentTime = Date.now();

            if (!lastShown || currentTime - lastShown > 3 * 60 * 1000) {
                localStorage.setItem('lastPopunderTime', currentTime);
                return true;
            }
            return false;
        }

        function addClickEventToDocument() {
            document.addEventListener("click", function(event) {
                if (shouldShowPopunder()) {
                    openRandomPopunder();
                }
            });
        }
        window.onload = addClickEventToDocument;
