// Scroll back to top of page action for the orange button

// Get the button
const topButton = document.getElementById('topButton');

// Functionality to actually work on click
topButton.addEventListener('click', function() {
    
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"

    // Using jQuery for animation, this is the most compatible
    // way for the most browser compatability coverage
    $("html, body").animate({ scrollTop: 0}, "slow");
});