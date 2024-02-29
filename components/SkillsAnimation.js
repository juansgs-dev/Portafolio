document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.skills-list li img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            anime({
                targets: img,
                rotateY: '360deg',
                duration: 3000,
                loop: true,
                easing: 'linear'
            });
        });

        img.addEventListener('mouseleave', () => {
            anime({
                targets: img,
                rotateY: 0,
                duration: 300,
                easing: 'easeInOutSine'
            });
        });
    });
});