document.addEventListener('DOMContentLoaded', () => {
    const cardElements = document.querySelectorAll('.animate-card');

    // Observer Configuration Parameters
    const observerOptions = {
        root: null,          // Track intersection within the viewport window standard
        rootMargin: '0px',   // Zero geometric element extensions
        threshold: 0.15      // Trigger entry when 15% of target structural bounds clear view thresholds
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                const targetCard = entry.target;
                
                // Extract historical positioning index layout parameter to establish custom dynamic render cascades
                const gridPosition = Array.from(cardElements).indexOf(targetCard);
                const sequentialDelay = (gridPosition % 4) * 150; // 150ms incremental frame translation delay per card column

                setTimeout(() => {
                    targetCard.classList.add('reveal-active');
                }, sequentialDelay);

                // Unobserve node block execution path after completing presentation compile loop
                observer.unobserve(targetCard);
            }
        });
    };

    const scrollTrackingNode = new IntersectionObserver(intersectionCallback, observerOptions);

    // Bind monitoring execution parameters explicitly to the initialized target elements array
    cardElements.forEach(card => {
        scrollTrackingNode.observe(card);
    });
});
