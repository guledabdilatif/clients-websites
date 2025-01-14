(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

const tab= document.querySelectorAll('.tab')
const tabContent= document.querySelectorAll('.tabContent')
for (let index = 0; index < tab.length; index++) {
    
tab[index].addEventListener('click', ()=>{
    removeTabContent();
    removeTab();
    tabContent[index].classList.add('activeTabContent')
    tab[index].classList.add('activeTab')
})    
}
function removeTabContent(){
    for (let index = 0; index < tabContent.length; index++) {
    tabContent[index].classList.remove('activeTabContent')        
    }
}
function removeTab(){
    for (let index = 0; index < tab.length; index++) {
    tab[index].classList.remove('activeTab')        
    }
}
// 
const protabContent= document.querySelectorAll('.protabContent')
const protab= document.querySelectorAll('.protab')
for (let index = 0; index < protab.length; index++) {
    
protab[index].addEventListener('click', ()=>{
    removeproTabContent();
    removeactiveproTab();
    protabContent[index].classList.add('activeprojectTabContent');
    protab[index].classList.add('activeprojectTab')  
    // protab[index].classList.add('activeprojectTab')
    
})    
// }
function removeproTabContent(){
    for (let index = 0; index < protabContent.length; index++) {
        protabContent[index].classList.remove('activeprojectTabContent')        
    }
}
function removeactiveproTab(){
    for (let index = 0; index < protab.length; index++) {
        protab[index].classList.remove('activeprojectTab')        
    }
}
// function removeproTab(){
//     for (let index = 0; index < protab.length; index++) {
//     protab[index].classList.remove('activeprojectTab')        
//     }
}

    document.getElementById('header-carousel').addEventListener('slid.bs.carousel', function (event) {
        var totalItems = document.querySelectorAll('.carousel-item').length;
        var currentIndex = event.to + 1;
        
        if (currentIndex === totalItems) {
            // Stop cycling when the last slide is reached
            document.querySelector('.carousel-control-next').classList.add('disabled');
        } else {
            // Enable the next button if not the last slide
            document.querySelector('.carousel-control-next').classList.remove('disabled');
        }
    });


