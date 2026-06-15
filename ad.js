const popunderLinks = [
"https://s.shopee.co.id/110ZmoySIu",
"https://s.shopee.co.id/8fQ0v0D2BA",
"https://s.shopee.co.id/2g8nm6AiKl",
"https://s.shopee.co.id/W4JC41Xo2"
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
