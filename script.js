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

/********** - Homepage - Fade in on Scroll - **********/

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is in view, add the animation class
        entry.target.classList.add("prompt-fade-in");
      } else {
        // Element is out of view, remove the animation class; If you want the animation to trigger every time it comes in view
        entry.target.classList.remove("prompt-fade-in");
      }
    });
});
  
const prompts = document.querySelectorAll(".prompt-2");
prompts.forEach(prompt => {
    observer1.observe(prompt);
});

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

/********** - Our Story - Fade in on Scroll - **********/

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is in view, add the animation class
        entry.target.classList.add("timeline-fade-in");
      } else {
        // Element is out of view, remove the animation class; If you want the animation to trigger every time it comes in view
        entry.target.classList.remove("timeline-fade-in");
      }
    });
});

const timelines = document.querySelectorAll(".date, .date-dot, .timeline-info")
timelines.forEach(timeline => {
    observer2.observe(timeline);
})

/********** - Our Story - Fade in on Scroll - **********/

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is in view, add the animation class
        entry.target.classList.add("timeline-draw-line");
      } else {
        // Element is out of view, remove the animation class; If you want the animation to trigger every time it comes in view
        entry.target.classList.remove("timeline-draw-line");
      }
    });
});

const lines = document.querySelectorAll(".date-line")
lines.forEach(line => {
    observer3.observe(line);
})

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