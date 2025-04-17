function moveUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function eventListenerForScrollUp(){
    const scrollUpButton = document.getElementById('scroll-up');
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });
    scrollUpButton.addEventListener('click', moveUp);
}

eventListenerForScrollUp();