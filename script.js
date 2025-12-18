document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active'); // Toggle active class on hamburger
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Toggle nav menu visibility

    // Add/remove class to shift the main content below the header
    const mainContent = document.querySelector('main');
    if (navMenu.classList.contains('active')) {
        mainContent.classList.add('main-content-shift');  // Push content down
    } else {
        mainContent.classList.remove('main-content-shift');  // Return content to original position
    }
});

// Scroll View Adjustment Section
document.querySelector('a[href="#howtoplay"]').addEventListener('click', function (e) {
    e.preventDefault();

    // Make sure nav is closed before calculating header height
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const main = document.querySelector('main');

    // Optionally close menu first
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    main.classList.remove('main-content-shift');

    // Wait a tiny bit to let layout update (important for mobile)
    setTimeout(() => {
        const offset = document.querySelector('header').offsetHeight;

        const target = document.querySelector('#howtoplay');
        const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
        console.log(target.getBoundingClientRect().top + window.pageYOffset);

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }, 100); // Delay just enough to recalculate layout
});