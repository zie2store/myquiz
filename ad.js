const popunderLinks = [
"https://s.shopee.co.id/60OLpWYeu7",
"https://s.shopee.co.id/BQYsjbrFb",
"https://s.shopee.co.id/1qYmrj59K7",
"https://s.shopee.co.id/9UyDzkdmjR",
"https://s.shopee.co.id/7ppzjesrY6"
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
