/*  scrollAppear function, when scroll down page any div or container
 *   containing the 
 */
function scrollAppear() {
    var fadeInText = document.querySelector('.fade-in-text');
    var textPosition = fadeInText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (textPosition < screenPosition) {
        fadeInText.classList.add('text-appear');
    }
}

window.addEventListener('scroll', scrollAppear);



/*  scrollAppear2 function, when scroll down page any div or container
 *   containing the desired elements
 */

function scrollAppear2() {
    var fadeInText2 = document.querySelector('.fade-in-text2');
    var textPosition2 = fadeInText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.3;

    if (textPosition2 < screenPosition2) {
        fadeInText2.classList.add('text-appear2');
    }
}

window.addEventListener('scroll', scrollAppear2);


/*  scrollAppear3 function, when scroll down page any div or container
 *   containing the desired elements
 */

function scrollAppear3() {
    var fadeInText2 = document.querySelector('.fade-in-project');
    var textPosition2 = fadeInText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.3;

    if (textPosition2 < screenPosition2) {
        fadeInText2.classList.add('text-appear-project');
    }
}

window.addEventListener('scroll', scrollAppear3);

/*  scrollAppear4 function, when scroll down page any div or container
 *   containing the desired elements
 */

function scrollAppear4() {
    var fadeInText2 = document.querySelector('.fade-in-project2');
    var textPosition2 = fadeInText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.3;

    if (textPosition2 < screenPosition2) {
        fadeInText2.classList.add('image-appear-project');
    }
}

window.addEventListener('scroll', scrollAppear4);