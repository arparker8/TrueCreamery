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

// All Pages but Bag Page when the Bag Icon is Clicked a Bag Pop Out will Display.
if (document.body.dataset.page !== "bag") {

    // When Bag Icon is clicked the Bag Pop Out shows.
    $(".shop-cont").click(function(){
        $(".bag").show();
    });

    // When X is clicked the Bag Pop Out hides.
    $("#bag-close").click(function(){
        $(".bag").hide();
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

// Function to Add to Bag.
function addToBag(eachFlavor) {
    const existingItem = cart.find(cart => cart.name === eachFlavor.name);
    console.log(existingItem);

    // If the product is already in the bag an alert will be sent.
    if (existingItem) {
        alert("Item is already in the cart.")
        return;
    } else {
        cart.push(eachFlavor);
        displayItem(eachFlavor);
    }

    // Storing the product in the localStorage so it will stay on all pages.
    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayItem(eachFlavor) {

    // Creating a Div with the product information for the Bag.
    const bagBox = document.createElement("div");
    bagBox.classList.add("bag-box");
    bagBox.innerHTML = `
        <img src="${eachFlavor.photo}" alt="Image of Item in Bag." class="bag-img">
        <div class="bag-detail">
            <h3>${eachFlavor.name}</h3>
            <p class="bag-price">$${eachFlavor.price.toFixed(2)}</p>
            <div class="bag-amount">
                <div class="bag-quantity">
                    <button type="button" class="decrement">-</button>
                    <p class="number">${eachFlavor.quantity}</p>
                    <button type="button" class="increment">+</button>
                </div>
                <button type="button" class="bag-remove">Remove</button>
            </div>
        </div>
    `;

    bagCont.appendChild(bagBox);

    // When the Remove Button is clicked.
    bagBox.querySelector(".bag-remove").addEventListener("click", () => {
        bagBox.remove();

        updateBagCount(-(eachFlavor.quantity));

        updateBagCountMobile(-(eachFlavor.quantity));
    
        updateSubtotalPrice();
    
        removeObjectByName("cart", eachFlavor.name);

        window.location.reload();
    
    });
    
    // A function to connect Remove Button and the localStorage.
    function removeObjectByName(key, objectName) {
        const storedArrayString = localStorage.getItem(key);
        
        if (storedArrayString) {
            const storedArray = JSON.parse(storedArrayString);
        
            const filteredArray = storedArray.filter(obj => obj.name !== objectName);
        
            localStorage.setItem(key, JSON.stringify(filteredArray));
        }
    }
    
    // Changing the Quantity of the product amount when Minus or Plus Buttons are clicked.
    bagBox.querySelector(".bag-quantity").addEventListener("click", event => {
        const numberElement = bagBox.querySelector(".number");
        const myArray = JSON.parse(localStorage.getItem("cart"));
        const desiredName = eachFlavor.name;
        const index = myArray.findIndex(data => data.name === desiredName)
    
        // When Minus Button is clicked.
        if (event.target.className === "decrement" && eachFlavor.quantity > 1) {
            eachFlavor.quantity--;

            updateBagCount(-1);

            updateBagCountMobile(-1);

            if (myArray && myArray.length > index) {
                myArray[index].quantity = eachFlavor.quantity;
            }
    
            localStorage.setItem("cart", JSON.stringify(myArray));
    
        // When Plus Button is clicked.
        } else if (event.target.className === "increment") {
            eachFlavor.quantity++;

            updateBagCount(1);

            updateBagCountMobile(1);

            if (myArray && myArray.length > index) {
                myArray[index].quantity = eachFlavor.quantity;
            }
    
            localStorage.setItem("cart", JSON.stringify(myArray));
        }

        numberElement.textContent = eachFlavor.quantity;
    
        updateSubtotalPrice();
    
    });

    // This for the Bag Icon count to work on Mobile and Desktop.
    if (window.innerWidth <= 800) {
        updateBagCountMobile(eachFlavor.quantity);
    } else {
        updateBagCount(eachFlavor.quantity);
    }

    updateSubtotalPrice();

}

// Adding together the Subtotal of the products and Updating as quantity changes.
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
        bagItemCountBadge.style.display = "flex";
        bagItemCountBadge.textContent = bagItemCount;
    } else {
        bagItemCountBadge.style.display = "none";
        bagItemCountBadge.textContent = "";
    }
}

// Updating the Bag Icon Count on Mobile View.
let bagItemCountMobile = 0;
const updateBagCountMobile = change => {
    const bagItemCountBadge = document.querySelector(".shop-item-count-mobile");
    bagItemCountMobile += change;
    if (bagItemCountMobile > 0) {
        bagItemCountBadge.style.display = "flex";
        bagItemCountBadge.textContent = bagItemCountMobile;
    } else {
        bagItemCountBadge.style.display = "none";
        bagItemCountBadge.textContent = "";
    }
}

// Retrieve and Display Data (e.g., on page load)
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

// The Menu Icon when clicked toggles to show below the header the Menu Links and Search Bar.
$(document).ready(function(){

    $(".mobile-menu-icon").click(function(){
        $(".mobile-links").toggle();
    })
})

/********** - Homepage - Fading in on View for Prompt Two Info - **********/

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

/********** - Each Flavor Pages - Photo Gallery - **********/

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

/********** - Our Story - Info Fading in when in View - **********/

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

/********** - Our Story - Draw Line for Timeline - **********/

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
    $('#phone-contact').keyup(function(){
        addDashes(this);
    });
      
    function addDashes(el){
        let val = $(el).val().split('-').join('');      //remove all dashes (-)
        if(val.length < 9){
          let finalVal = val.match(/.{1,3}/g).join('-');//add dash (-) after every 3rd char.
          $(el).val(finalVal);
        }
    }
}

/********** - Bag Page - Adding items to Check Out Page - **********/

const checkoutCont = document.querySelector(".checkout-box");

function checkoutDisplay(eachFlavor) {

        // Creating a Div with the product information for the Checkout Bag.
        const checkoutBox = document.createElement("div");
        let quantity = 1;
        checkoutBox.classList.add("checkout-items");
        checkoutBox.innerHTML = `
            <img src="${eachFlavor.photo}" alt="Product image of Item in Bag." class="checkout-img">
            <div class="checkout-detail">
                <div class="checkout-text">
                    <h3>${eachFlavor.name}</h3>
                    <p class="checkout-price">$${eachFlavor.price.toFixed(2)}</p>
                </div>
                <div class="checkout-amount">
                    <div class="checkout-quantity">
                        <button type="button" class="checkout-decrement">-</button>
                        <p class="checkout-number">${eachFlavor.quantity}</p>
                        <button type="button" class="checkout-increment">+</button>
                    </div>
                    <button type="button" class="bag-remove">Remove</button>
                </div>
            </div>
        `;
    
        checkoutCont.appendChild(checkoutBox);
    
        // When the Remove Button is clicked.
        checkoutBox.querySelector(".bag-remove").addEventListener("click", () => {
            checkoutBox.remove();
        
            updateBagCount(-(eachFlavor.quantity));

            updateBagCountMobile(-(eachFlavor.quantity));
        
            updateTotalPrice();
        
            removeObjectByName("cart", eachFlavor.name);

            window.location.reload();
        
        });
        
        // A function to connect Remove Button and the localStorage.
        function removeObjectByName(key, objectName) {
            const storedArrayString = localStorage.getItem(key);
            
            if (storedArrayString) {
                const storedArray = JSON.parse(storedArrayString);
            
                const filteredArray = storedArray.filter(obj => obj.name !== objectName);
            
                localStorage.setItem(key, JSON.stringify(filteredArray));
            }
        }
        
        // Changing the Quantity of the product amount when Minus or Plus Buttons are clicked.
        checkoutBox.querySelector(".checkout-quantity").addEventListener("click", event => {
            const numberElement = checkoutBox.querySelector(".checkout-number");
            const myArray = JSON.parse(localStorage.getItem("cart"));
            const desiredName = eachFlavor.name;
            const index = myArray.findIndex(data => data.name === desiredName)
        
            // When Minus Button is clicked.
            if (event.target.className === "checkout-decrement" && eachFlavor.quantity > 1) {
                eachFlavor.quantity--;
        
                updateBagCount(-1);

                updateBagCountMobile(-1);

                if (myArray && myArray.length > index) {
                    myArray[index].quantity = eachFlavor.quantity;
                }
        
                localStorage.setItem("cart", JSON.stringify(myArray));
        
            // When Plus Button is clicked.
            } else if (event.target.className === "checkout-increment") {
                eachFlavor.quantity++;
        
                updateBagCount(1);

                updateBagCountMobile(1);

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

// Adding together the Total of the products and Updating as quantity changes.
function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total-price");
    const checkoutBoxes = checkoutCont.querySelectorAll(".checkout-items");
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

/********** - Checkout Page - Sending Alert for Form Submission - **********/

if (document.getElementById("checkout-body")){

    // When Submit Button on Form is Clicked an Alert Appears. After Alert is closed Page Refreshes.
    document.getElementById("checkout-form").addEventListener("submit", function(event) {
        alert("Thank you for Ordering!");
        window.location.reload();
    });

    // This formats for Phone Numbers so that when typing it Adds Dashes.
    $('#phone-checkout').keyup(function(){
        addDashes(this);
    });
      
    function addDashes(el){
        let val = $(el).val().split('-').join('');      //remove all dashes (-)
        if(val.length < 9){
          let finalVal = val.match(/.{1,3}/g).join('-');//add dash (-) after every 3rd char.
          $(el).val(finalVal);
        }
    }
}