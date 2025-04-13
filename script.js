/* 
Ashleigh Parker - MGD2041

True Creamery - Lactose Free Ice Cream Brand

Document for all the Script that is being used for the project.
*/

/********** - All Pages - Mobile Menu - **********/
/* On Mobile Layout the Menu Icon when clicked toggles the below the header the Menu Links and Search. */

$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".mobile-links").toggle();
    })
})

/********** - All Pages - **********/
/* When Search Icon is clicked a Search Box is Toggled to Appear. When Search Box is selected and Enter is clicked an Alert Appears. After Alert Page Refreshes. */

$(document).ready(function(){

    $(".search").click(function(){
      $(".search-text-box").toggle();
    });
});

document.getElementById("search-desktop").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        alert ("Search Complete")
        window.location.reload();
    }
})

document.getElementById("search-mobile").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        alert ("Search Complete")
        window.location.reload();
    }
})

/********** - Each Flavor Page - Image Slide Show - **********/


if (document.getElementById("flvr-body")) {

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/Previous Controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail Image Controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("flvr-img-slides");
        let dots = document.getElementsByClassName("demo");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

/********** - Contact Page - Sending Alert for Form Submission - **********/

document.getElementById("contact-form").addEventListener("submit", function(event) {
    alert("Thank you for submitting!");
    window.location.reload();
});