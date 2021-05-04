/*  scrollAppear function, when scroll down page any div or container
 *   containing content fades in as needed 
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


/*  scrollAppear1 function, when scroll down page any div or container
 *   containing content fades in as needed
 */
function scrollAppear1() {
    var fadeInText = document.querySelector('.fade-in-text1');
    var textPosition = fadeInText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (textPosition < screenPosition) {
        fadeInText.classList.add('text-appear1');
    }
}

window.addEventListener('scroll', scrollAppear1);


/*  scrollAppear2 function, when scroll down page any div or container
 *   containing content fades in as needed desired elements
 */

function scrollAppear2() {
    var fadeInText2 = document.querySelector('.fade-in-text2');
    var textPosition2 = fadeInText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.2;

    if (textPosition2 < screenPosition2) {
        fadeInText2.classList.add('text-appear2');
    }
}

window.addEventListener('scroll', scrollAppear2);


/*  scrollAppear3 function, when scroll down page any div or container
 *   containing content fades in as needed desired elements
 */

function scrollAppear3() {
    var fadeInText3 = document.querySelector('.fade-in-text3');
    var textPosition3 = fadeInText3.getBoundingClientRect().top;
    var screenPosition3 = window.innerHeight / 1.2;

    if (textPosition3 < screenPosition3) {
        fadeInText3.classList.add('text-appear3');
    }
}

window.addEventListener('scroll', scrollAppear3);