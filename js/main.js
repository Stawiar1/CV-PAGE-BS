document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {                                         //funkcja dodająca cień na nawigacji przy scrollowaniu strony
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)

    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });
});

