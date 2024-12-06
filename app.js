var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel);



const button = document.querySelector('.toup');

button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll('.toggle-icon');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const targetId = this.getAttribute('data-bs-target');
            const target = document.querySelector(targetId);

            if (target.classList.contains('show')) {
                this.classList.remove('fa-minus');
                this.classList.add('fa-plus');
            } else {
                this.classList.remove('fa-plus');
                this.classList.add('fa-minus');
            }

            toggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherTarget = document.querySelector(otherToggle.getAttribute('data-bs-target'));
                    if (otherTarget.classList.contains('show')) {
                        otherTarget.classList.remove('show');
                        otherToggle.classList.remove('fa-minus');
                        otherToggle.classList.add('fa-plus');
                    }
                }
            });
        });
    });
});


