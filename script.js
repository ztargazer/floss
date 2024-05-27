document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const resetButton = document.getElementById('reset');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('clicked');
            checkAllClicked();
        });
    });

    resetButton.addEventListener('click', resetAll);

    function checkAllClicked() {
        const allClicked = Array.from(sections).every(section => section.classList.contains('clicked'));
        if (allClicked) {
            setTimeout(() => {
                alert('All sections flossed! Starting over.');
                resetAll();
            }, 500);
        }
    }

    function resetAll() {
        sections.forEach(section => section.classList.remove('clicked'));
    }
});
