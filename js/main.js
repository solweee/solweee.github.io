$(function () {

    $('.news__slider-inner').slick({
        dots: true,
        arrows: true,
        infinite: false,
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    });


    $(".menu-store").click(function () {
        $(this).toggleClass("down");
    });


    $('.header__btn-menu').on('click', function () {
        $('.menu').slideToggle();
    });


});

function myFunction() {
    document.getElementById("dropDown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-store')) {
        var dropdowns = document.getElementsByClassName("sub__menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


