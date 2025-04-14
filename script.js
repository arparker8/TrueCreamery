/* 
Ashleigh Parker - MGD2041

True Creamery - Lactose Free Ice Cream Brand

Document for all the Script that is being used for the project.
*/

/********** - All Pages - Search Icon - **********/

// When Search Icon is clicked a Search Box is Toggled to show.
$(document).ready(function(){

    $(".search").click(function(){
      $(".search-text-box").toggle();
    });
});

// (On Desktop) When Search Box is selected and the Enter button is clicked an Alert Appears. After Alert is closed Page Refreshes.
document.getElementById("search-desktop").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        alert ("Search Complete")
        window.location.reload();
    }
})

// (On Mobile) When Search Box is selected and the Enter button is clicked an Alert Appears. After Alert is closed Page Refreshes.
document.getElementById("search-mobile").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        alert ("Search Complete")
        window.location.reload();
    }
})

/********** - All Pages - Mobile Layout - Menu Icon - **********/

// The Menu Icon when clicked toggles to show below the header the Search and Menu Links.
$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".mobile-links").toggle();
    })
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

if (document.getElementById("contact-body")){

    // When Submit Button on Form is Clicked an Alert Appears. After Alert is closed Page Refreshes.
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        alert("Thank you for submitting!");
        window.location.reload();
    });

    // This formats for Phone Numbers so that when typing it Adds Dashes.
    $('#phone').keyup(function(){
        adddashes(this);
    });
      
    function adddashes(el){
        let val = $(el).val().split('-').join('');      //remove all dashes (-)
        if(val.length < 9){
          let finalVal = val.match(/.{1,3}/g).join('-');//add dash (-) after every 3rd char.
          $(el).val(finalVal);
        }
    }
}