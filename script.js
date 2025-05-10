/* 
Ashleigh Parker - MGD2041

True Creamery - Lactose Free Ice Cream Brand

Document for all the Script that is being used for the project.
*/

/********** - All Pages - Bag Pop Out - **********/

// An Array of my Products so that it can be stored in localStorage.
const products = [
    {name: "Classic Cream", price: 12.00, photo: "./images/vanilla-img/packaging-vanilla.jpg", quantity: 1},
    {name: "Simply Chocolate", price: 12.00, photo: "./images/chocolate-img/packaging-chocolate.jpg", quantity: 1},
    {name: "Pure Strawberry", price: 12.00, photo: "./images/strawberry-img/packaging-strawberry.jpg", quantity: 1},
    {name: "Cookies 'n Cream", price: 12.00, photo: "./images/cookies-img/packaging-cookies.jpg", quantity: 1},
    {name: "Mint Chocolate Chip", price: 12.00, photo: "./images/mint-img/packaging-mint.jpg", quantity: 1},
    {name: "Butter Pecan", price: 12.00, photo: "./images/pecan-img/packaging-pecan.jpg", quantity: 1}
]

if (document.body.dataset.page !== "bag") {

    // const bagIcon = document.querySelector(".shop-cont");
    // const bag = document.querySelector(".bag");
    // const bagClose = document.querySelector("#bag-close");

    // bagIcon.addEventListener("click", () => bag.classList.add("active"));
    // bagClose.addEventListener("click", () => bag.classList.remove("active"));

    $("#bag-close").click(function(){
        $(".bag").hide();
      });
      
    $(".shop-cont").click(function(){
        $(".bag").show();
    });

}

// This is for the Add to Bag buttons on my Flavors Page
if (document.body.dataset.page === "our-flavors") {

    // Button is connected to my Classic Vanilla Flavor product.
    document.getElementById("add-btn-1").addEventListener("click", event => {
        const flavor1 = products[0];
        addToBag(flavor1);
    });

    // Button is connected to my Simple Chocolate Flavor product.
    document.getElementById("add-btn-2").addEventListener("click", event => {
        const flavor2 = products[1];
        addToBag(flavor2);
    });

    // Button is connected to my Pure Strawberry Flavor product.
    document.getElementById("add-btn-3").addEventListener("click", event => {
        const flavor3 = products[2];
        addToBag(flavor3);
    });

    // Button is connected to my Cookies 'n Cream Flavor product.
    document.getElementById("add-btn-4").addEventListener("click", event => {
        const flavor4 = products[3];
        addToBag(flavor4);
    });

    // Button is connected to my Mint Chocolate Chip Flavor product.
    document.getElementById("add-btn-5").addEventListener("click", event => {
        const flavor5 = products[4];
        addToBag(flavor5);
    });

    // Button is connected to my Butter Pecan Flavor Product.
    document.getElementById("add-btn-6").addEventListener("click", event => {
        const flavor6 = products[5];
        addToBag(flavor6);
    });

};

// This is for the Add to Bag button on Flavor 1 product page.
if (document.body.dataset.page === "product-1") {

    // Button is connected to my Classic Vanilla Flavor product.
    document.getElementById("add-btn-1").addEventListener("click", event => {
        const flavor1 = products[0];
        addToBag(flavor1);
    });
};

// This is for the Add to Bag button on Flavor 2 product page.
if (document.body.dataset.page === "product-2") {

    // Button is connected to my Simple Chocolate Flavor product.
    document.getElementById("add-btn-2").addEventListener("click", event => {
        const flavor2 = products[1];
        addToBag(flavor2);
    });
};

// This is for the Add to Bag button on Flavor 3 product page.
if (document.body.dataset.page === "product-3") {

    // Button is connected to my Pure Strawberry Flavor product.
    document.getElementById("add-btn-3").addEventListener("click", event => {
        const flavor3 = products[2];
        addToBag(flavor3);
    });
};

// This is for the Add to Bag button on Flavor 4 product page.
if (document.body.dataset.page === "product-4") {
    
    // Button is connected to my Cookies 'n Cream Flavor product.
    document.getElementById("add-btn-4").addEventListener("click", event => {
        const flavor4 = products[3];
        addToBag(flavor4);
    });
};

// This is for the Add to Bag button on Flavor 5 product page.
if (document.body.dataset.page === "product-5") {
    
    // Button is connected to my Mint Chocolate Chip Flavor product.
    document.getElementById("add-btn-5").addEventListener("click", event => {
        const flavor5 = products[4];
        addToBag(flavor5);
    });
};

// This is for the Add to Bag button on Flavor 6 product page.
if (document.body.dataset.page === "product-6") {

    // Button is connected to my Butter Pecan Flavor Product.
    document.getElementById("add-btn-6").addEventListener("click", event => {
        const flavor6 = products[5];
        addToBag(flavor6);
    });
};

const bagCont = document.querySelector(".bag-cont");
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Function to add to cart.
function addToBag(eachFlavor) {
    const existingItem = cart.find(cart => cart.name === eachFlavor.name);
    console.log(existingItem);

    // If the items is already added this alert will be sent saying it's already in the Bag.
    if (existingItem) {
        alert("Item is already in the cart.")
        return;
    } else {
        cart.push(eachFlavor);
        displayItem(eachFlavor);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayItem(eachFlavor) {

    // Creating the div with the items information for the Bag.
    const bagBox = document.createElement("div");
    let quantity = 1;
    bagBox.classList.add("bag-box");
    bagBox.innerHTML = `
        <img src="${eachFlavor.photo}" class="bag-img">
        <div class="bag-detail">
            <h3>${eachFlavor.name}</h3>
            <p class="bag-price">$${eachFlavor.price.toFixed(2)}</p>
            <div class="bag-amount">
                <div class="bag-quantity">
                    <button id="decrement">-</button>
                    <p class="number">${eachFlavor.quantity}</p>
                    <button id="increment">+</button>
                </div>
                <button class="bag-remove">Remove</button>
            </div>
        </div>
    `;

    bagCont.appendChild(bagBox);

    // This is for when the Remove button is clicked.
    bagBox.querySelector(".bag-remove").addEventListener("click", () => {
        bagBox.remove();
    
        updateBagCount(-(quantity));
    
        updateSubtotalPrice();
    
        removeObjectByName("cart", eachFlavor.name);

        window.location.reload();
    
    });
    
    // A function to connect remove Button and the localStorage.
    function removeObjectByName(key, objectName) {
        const storedArrayString = localStorage.getItem(key);
        
        if (storedArrayString) {
            const storedArray = JSON.parse(storedArrayString);
        
            const filteredArray = storedArray.filter(obj => obj.name !== objectName);
        
            localStorage.setItem(key, JSON.stringify(filteredArray));
        }
    }
    
    // Changing the Quantity of the items when minus or plus buttons are clicked.
    bagBox.querySelector(".bag-quantity").addEventListener("click", event => {
        const numberElement = bagBox.querySelector(".number");
        const myArray = JSON.parse(localStorage.getItem("cart"));
        const desiredName = eachFlavor.name;
        const index = myArray.findIndex(data => data.name === desiredName)
    
        if (event.target.id === "decrement" && eachFlavor.quantity > 1) {
            eachFlavor.quantity--;
    
            updateBagCount(-1);

            if (myArray && myArray.length > index) {
                myArray[index].quantity = eachFlavor.quantity;
            }
    
            localStorage.setItem("cart", JSON.stringify(myArray));
    
        } else if (event.target.id === "increment") {
            eachFlavor.quantity++;
    
            updateBagCount(1);

            if (myArray && myArray.length > index) {
                myArray[index].quantity = eachFlavor.quantity;
            }
    
            localStorage.setItem("cart", JSON.stringify(myArray));
        }

        numberElement.textContent = eachFlavor.quantity;
    
        updateSubtotalPrice();
    
    });
    
    updateBagCount(eachFlavor.quantity);
    
    updateSubtotalPrice();
}

// Adding together the Subtotal of the Items and Updating if things change.
const updateSubtotalPrice = () => {
    const totalPriceElement = document.querySelector(".subtotal-price");
    const bagBoxes = bagCont.querySelectorAll(".bag-box");
    let total = 0;

    bagBoxes.forEach(bagBox => {
        const priceElement = bagBox.querySelector(".bag-price");
        const quantityElement = bagBox.querySelector(".number");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity; 
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Updating the Bag Icon Count.
let bagItemCount = 0;
const updateBagCount = change => {
    const bagItemCountBadge = document.querySelector(".shop-item-count");
    bagItemCount += change;
    if (bagItemCount > 0) {
        bagItemCountBadge.style.visibility = "visible";
        bagItemCountBadge.textContent = bagItemCount;
    } else {
        bagItemCountBadge.style.visibility = "hidden";
        bagItemCountBadge.textContent = "";
    }
}

// Retrieve and display data (e.g., on page load)
const storedData = localStorage.getItem("cart");
const myArray = JSON.parse(storedData);

if (myArray && myArray.length > 0) {
    myArray.forEach(item => {
        displayItem(item);
    });
}

/********** - All Pages - Search Icon - **********/

// When Search Icon is clicked a Search Box is Toggled to show.
$(document).ready(function(){

    $(".search-icon").click(function(){
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

    $(".mobile-menu-icon").click(function(){
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

/********** - Our Story - Draw Line - **********/

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

/********** - Bag Page - Adding items to Check Out Page - **********/

const checkoutCont = document.querySelector(".checkout-cont");

function checkoutDisplay(eachFlavor) {
        // Creating the div with the items information for the Bag.
        const checkoutBox = document.createElement("div");
        let quantity = 1;
        checkoutBox.classList.add("checkout-box");
        checkoutBox.innerHTML = `
            <img src="${eachFlavor.photo}" class="checkout-img">
            <div class="checkout-detail">
                <div class="checkout-text">
                    <h3>${eachFlavor.name}</h3>
                    <p class="checkout-price">$${eachFlavor.price.toFixed(2)}</p>
                </div>
                <div class="checkout-amount">
                    <div class="checkout-quantity">
                        <button id="checkout-decrement">-</button>
                        <p class="checkout-number">${eachFlavor.quantity}</p>
                        <button id="checkout-increment">+</button>
                    </div>
                    <button class="bag-remove">Remove</button>
                </div>
            </div>
        `;
    
        checkoutCont.appendChild(checkoutBox);
    
        // This is for when the Remove button is clicked.
        checkoutBox.querySelector(".bag-remove").addEventListener("click", () => {
            checkoutBox.remove();
        
            updateBagCount(-(eachFlavor.quantity));
        
            updateTotalPrice();
        
            removeObjectByName("cart", eachFlavor.name);

            window.location.reload();
        
        });
        
        // A function to connect remove Button and the localStorage.
        function removeObjectByName(key, objectName) {
            const storedArrayString = localStorage.getItem(key);
            
            if (storedArrayString) {
                const storedArray = JSON.parse(storedArrayString);
            
                const filteredArray = storedArray.filter(obj => obj.name !== objectName);
            
                localStorage.setItem(key, JSON.stringify(filteredArray));
            }
        }
        
        // Changing the Quantity of the items when minus or plus buttons are clicked.
        checkoutBox.querySelector(".checkout-quantity").addEventListener("click", event => {
            const numberElement = checkoutBox.querySelector(".checkout-number");
            const myArray = JSON.parse(localStorage.getItem("cart"));
            const desiredName = eachFlavor.name;
            const index = myArray.findIndex(data => data.name === desiredName)
        
            if (event.target.id === "checkout-decrement" && eachFlavor.quantity > 1) {
                eachFlavor.quantity--;
        
                updateBagCount(-1);

                if (myArray && myArray.length > index) {
                    myArray[index].quantity = eachFlavor.quantity;
                }
        
                localStorage.setItem("cart", JSON.stringify(myArray));
        
            } else if (event.target.id === "checkout-increment") {
                eachFlavor.quantity++;
        
                updateBagCount(1);

                if (myArray && myArray.length > index) {
                    myArray[index].quantity = eachFlavor.quantity;
                }
        
                localStorage.setItem("cart", JSON.stringify(myArray));

            }
        
            numberElement.textContent = eachFlavor.quantity;
        
            updateTotalPrice();
        
        });
        
        updateTotalPrice();
}

// Adding together the Total of the Items and Updating if things change.
function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total-price");
    const checkoutBoxes = checkoutCont.querySelectorAll(".checkout-box");
    let total = 0;

    checkoutBoxes.forEach(checkoutBox => {
        const priceElement = checkoutBox.querySelector(".checkout-price");
        const quantityElement = checkoutBox.querySelector(".checkout-number");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity; 
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

if (document.body.dataset.page === "bag") {
    if (myArray && myArray.length > 0) {
        myArray.forEach(item => {
            checkoutDisplay(item);
        });
    }

}