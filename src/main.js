currentSlideId = 1;
currentCardId = 1;
currentPicId = 1;

sliderElement = document.getElementById('slider');
cardsElement = document.getElementById('cards');
picsElement = document.getElementById('about');

totalSlides = sliderElement.childElementCount;
totalCards = cardsElement.childElementCount;
totalPics = picsElement.childElementCount;


// SLIDES
function nextSlide() {
    if(currentSlideId < totalSlides) {
        currentSlideId++;
        showSlide()
    }
}

function prevSlide() {
    if(currentSlideId >= 2) {
        currentSlideId--;
        showSlide()
    }
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        
        if(currentSlideId === index+1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}

// CARDS
function prevCard() {
    if(currentCardId >= 2) {
        currentCardId--;
        showCard();
    }
}

function nextCard() {
    if(currentCardId < totalCards) {
        currentCardId++;
        showCard();
    }
}

function showCard() {
    cards = document.getElementById('cards').getElementsByTagName('li');
    for (let index = 0; index < totalCards; index++) { 
        const element = cards[index];

        if (currentCardId === index+1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}

// ABOUT PICTURES
function prevPic() {
    if(currentPicId >= 2) {
        currentPicId--;
        showPic();
    }
}

function nextPic() {
    if(currentPicId < totalPics) {
        currentPicId++;
        showPic();
    }
}

function showPic() {
    pics = document.getElementById('about').getElementsByTagName('li');
    for (let index = 0; index < totalPics; index++) { 
        const element = pics[index];

        if(currentPicId === index+1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}