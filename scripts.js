document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: { enable: true, value_area: 800 }
            },
            color: { value: '#ff00b3' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00e0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                random: true,
                direction: 'none',
                out_mode: 'bounce'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Theme Toggle
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });
});
