//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {

    //Variables
    const NBR_SLIDE = document.querySelectorAll('.slide').length;
    let btn_launch = document.querySelector('.btn-launch');
    let btns_slides = document.querySelectorAll('.btn-slide');

    document.getElementById('slide0').scrollIntoView();

    document.querySelector('.slides-container').style.width = NBR_SLIDE * 100+'vw';

    window.addEventListener("scroll", (event) => {

        if(window.scrollX > window.innerWidth){
            document.body.style.backgroundColor ="red";
        }else{
            document.body.style.backgroundColor ="blue";
        }
    })

    btn_launch.addEventListener('click', ()=> {
        document.getElementById('slide1').scrollIntoView();
    });

    btns_slides.forEach(btn_slide =>{
        btn_slide.addEventListener('click', () => {
            console.log(btn_slide.id);
            document.getElementById('slide'+btn_slide.id).scrollIntoView();
            displaySlideBus();
        });
    });

    displaySlideBus();
});

function displaySlideBus(){
    let busPassengers = document.querySelectorAll('.passenger');
    busPassengers.forEach(passenger => {
        passenger.remove()
    });

    const BUS = document.querySelector('.bus');
    numSlide = 2;
    container = document.querySelector('slide'+numSlide);

    numberOfPassengers = 40.0;
    numberOfLines = 4.0;
    numberOfSeatsPerlines = numberOfPassengers / numberOfLines;

    for(let i = 0; i < numberOfPassengers; i++){
        setTimeout(() => {
            let passenger = document.createElement('div');
            BUS.appendChild(passenger);
            passenger.classList.add('passenger');
            goToPlace(passenger, i, numberOfLines, numberOfSeatsPerlines, BUS);
        }, i*100);
    }


}

function goToPlace(passenger, placeNumber, numberOfLines, numberOfSeatsPerlines, bus){
    console.log(bus.offsetWidth);

    if(Math.floor(placeNumber/numberOfSeatsPerlines) > (numberOfLines/2 - 1)){
        centerLineOffset = (100/numberOfLines);
    }else{
        centerLineOffset = 0;
    }
    
    passenger.style.top = ((Math.floor(placeNumber/numberOfSeatsPerlines)) * (100/numberOfLines)) * 0.8 + 1 + centerLineOffset + '%';
    setTimeout(() => {
        passenger.style.left = ((placeNumber % numberOfSeatsPerlines) * (100/numberOfSeatsPerlines)) + (passenger.offsetWidth / (numberOfSeatsPerlines)) + '%';
    }, 1000);
}