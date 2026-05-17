
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    let currentIndex = 0;

        // OPEN LIGHTBOX
        images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
        });

    function showImage() {
        lightboxImg.src = images[currentIndex].src;
        }

    // NEXT / PREV

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    showImage();
        }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
        }

    // CLOSE

    function closeLightbox() {
        lightbox.style.display = "none";
        }

    // FILTER FUNCTION

    function filterImages(category) {
        images.forEach(img => {
            if (category === "all" || img.classList.contains(category)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
        }
