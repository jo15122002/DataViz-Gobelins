//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {

    //Variables
    const NBR_SLIDE = document.querySelectorAll('.slide').length;

    let btns_slides = document.querySelectorAll('.btn-slide');

    document.querySelector('.slides-container').style.width = NBR_SLIDE * 100+'vw';

    displaySlideHome();

    window.addEventListener("scroll", (event) => {

        if(window.scrollX > window.innerWidth){
            document.body.style.backgroundColor ="red";
        }else{
            document.body.style.backgroundColor ="blue";
        }
    })

    document.querySelector('.btn-restart').addEventListener('click', () =>{
        document.getElementById('slide0').scrollIntoView();
    })



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
        let passenger = document.createElement('div');
        BUS.appendChild(passenger);
        passenger.classList.add('passenger');
        setTimeout(() => {
            if(Math.floor(i/numberOfSeatsPerlines) > (((numberOfLines - 1)/2.0))){
                centerLineOffset = (100/numberOfLines);
            }else{
                centerLineOffset = 0;
            }
            x1 = (2*(100/numberOfLines)) * 0.8 + "%";
            y = ((i % numberOfSeatsPerlines) * (100/numberOfSeatsPerlines)) + (passenger.offsetWidth / (numberOfSeatsPerlines)) + '%';
            x2 = ((Math.floor(i/numberOfSeatsPerlines)) * (100/numberOfLines)) * 0.8 + 1 + centerLineOffset + '%';
            goToPlace(passenger, x1, y, x2);
        }, i*200);
    }
}

function goToPlace(passenger, x1, y, x2){
    passenger.style.top = x1
    setTimeout(() => {
        passenger.style.left = y
        setTimeout(() => {
            passenger.style.top = x2
        }, 200);
    }, 200);
};

function displaySlideHome(){

    let btn_start = document.querySelector('.btn-launch');
    let bus = document.querySelector('.bus');
    let bubles = document.querySelectorAll('.buble');
    let names = document.querySelectorAll('.name');

    btn_start.addEventListener('click', ()=> {

        bubles.forEach(function (buble){
            buble.classList.add('animate__fadeOut')
        });

        names.forEach(function (name){
            name.classList.add('animate__fadeOut')
        });

        setTimeout(() => {
            bus.style.display = 'block';
            bus.classList.add('animate__bounceInLeft');
        }, 1000);

        setTimeout(() => {
            document.querySelector('.girl').style.display="none";
        }, 2500);

        setTimeout(() => {
            document.querySelector('.boy').style.display="none";
            document.querySelector('.titre-home').style.display="none"
        }, 3000);

        setTimeout(() => {
            bus.classList.add('animate__bounceOutRight');
        }, 3500);

        setTimeout(() => {
            document.getElementById('slide1').scrollIntoView();
            }, 4000);
    });
}