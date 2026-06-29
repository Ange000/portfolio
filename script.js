// ce code a été generé par Claude AI

const rideaux = document.querySelectorAll('.rideau');

const observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
        if (entree.isIntersecting) {
            entree.target.classList.add('visible');
            observateur.unobserve(entree.target); 
        }
    });
}, {
    threshold: 0.2
});

rideaux.forEach(function(rideau) {
    observateur.observe(rideau);
});
