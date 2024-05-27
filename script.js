document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const resetButton = document.getElementById('reset');

    // Load saved state from local storage
    loadState();

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('clicked');
            saveState();
            checkAllClicked();
        });
    });

    resetButton.addEventListener('click', () => {
        resetAll();
        saveState();
    });

    function checkAllClicked() {
        const allClicked = Array.from(sections).every(section => section.classList.contains('clicked'));
        if (allClicked) {
            setTimeout(() => {
                alert('All sections flossed! Starting over.');
                resetAll();
                saveState();
            }, 500);
        }
    }

    function resetAll() {
        sections.forEach(section => section.classList.remove('clicked'));
    }

    function saveState() {
        const state = Array.from(sections).map(section => section.classList.contains('clicked'));
        localStorage.setItem('flossingTrackerState', JSON.stringify(state));
    }

    function loadState() {
        const state = JSON.parse(localStorage.getItem('flossingTrackerState'));
        if (state) {
            sections.forEach((section, index) => {
                if (state[index]) {
                    section.classList.add('clicked');
                }
            });
        }
    }
});
