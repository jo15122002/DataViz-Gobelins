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
});

function displaySlideBus(){
    let busPassengers = document.querySelectorAll('.passenger');
    busPassengers.forEach(passenger => {
        passenger.remove()
    });

    const BUS = document.querySelector('.bus-slide2');
    numSlide = 2;
    container = document.querySelector('slide'+numSlide);

    numberOfPassengers = 40.0;
    numberOfLines = 4.0;
    numberOfSeatsPerlines = numberOfPassengers / numberOfLines;

    for(let i = 0; i < numberOfPassengers; i++){
        let passenger = document.createElement('div');
        BUS.appendChild(passenger);
        passenger.classList.add('passenger');

        if(i >= numberOfPassengers/2){
            passenger.classList.add('passenger-girl');
        }else{
            passenger.classList.add('passenger-boy')
        }

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

    setTimeout(() => {
        fillEmUp();
    }, numberOfPassengers * 200);
}

function fillEmUp(){
    //Filles 23% garcons 11%

    boys = document.querySelectorAll(".passenger-boy");
    girls = document.querySelectorAll(".passenger-girl");

    boys.forEach((element, index) =>{
        fillDiv = document.createElement("div")
        element.appendChild(fillDiv);
        fillDiv.classList.add("fillPassenger")
    })

    girls.forEach((element, index) =>{
        fillDiv = document.createElement("div")
        element.appendChild(fillDiv);
        fillDiv.classList.add("fillPassenger")
    })

    boysToFill = [
        boys[0], boys[10]
    ]

    girlsToFill = [
        girls[0], girls[10], girls[1], girls[11], girls[2], girls[12]
    ]

    boysToFill.forEach((element, index) => {
        setTimeout(() => {
            element.querySelector('.fillPassenger').style.setProperty("--passenger-fill-width", 100 + '%')
            element.querySelector('.fillPassenger').style.setProperty("--passenger-fill-color", 'blue')
        }, index*200);
    });

    girlsToFill.forEach((element, index) => {
        setTimeout(() => {
            element.querySelector('.fillPassenger').style.setProperty("--passenger-fill-width", 100 + '%')
            element.querySelector('.fillPassenger').style.setProperty("--passenger-fill-color", 'pink')
        }, index*200);
    });

    // let toggle = true
    // let boysBack = []
    // //reformattage des tableaux
    // for(i = 0; i < boys.length/2; i++){
    //     boysBack[i] = boys[i];
    //     boysBack[i+1] = boys[i + 10];
    // }
    // console.log(boysBack)

    // boys.forEach((element, index) =>{
    //     console.log(element, index)
    //     fillDiv = element.createElement("div")
    //     fillDiv.classList.add("fillPassenger")

    //     statPourcents = 23
    //     setTimeout(() => {
    //         element.querySelector(".passengerFill").style.setProperty("--passenger-fill-width", statPourcents + '%')
    //         element.style.setProperty("--passenger-after-color", '#0000FF')
    //     }, index%numberOfSeatsPerlines * 200);
    // })

    // girls.forEach((element, index) =>{
    //     console.log(element, index)
    //     console.log(index%numberOfPassengers)
    //     //Todo donnée à changer par donnée de json
    //     if((index%numberOfSeatsPerlines) < Math.ceil(23/100*girls.length)/2 - Math.floor(index/(numberOfSeatsPerlines*numberOfLines/2))){
    //         setTimeout(() => {
    //             element.style.setProperty("--passenger-after-width", '100%')
    //             element.style.setProperty("--passenger-after-color", '#FF00E0')
    //         }, index%numberOfSeatsPerlines * 200);
    //     }
    // })
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