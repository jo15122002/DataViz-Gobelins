//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {

    //Variables
    const NBR_SLIDE = document.querySelectorAll('.slide').length;

    let btns_slides = document.querySelectorAll('.btn-slide');

    document.querySelector('.slides-container').style.width = NBR_SLIDE * 100+'vw';

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

    displaySlideHome();
    displaySlideBus();
    displaySlideSchool();
});

function displaySlideBus(){
    let busPassengers = document.querySelectorAll('.passenger');
    busPassengers.forEach(passenger => {
        passenger.remove()
    });

    const BUS = document.querySelector('.bus-slide2');
    numberOfPassengers = 20.0;
    numberOfLines = 2.0;
    numberOfSeatsPerlines = numberOfPassengers / numberOfLines;

    foule = document.querySelector(".foule-slide2")

    busCote = document.querySelector('.bus-cote-slide2')
    console.log(busCote)

    busCote.style.left = "0%"
    busCote.style.opacity = "0%"

    busCote.style.opacity = "100%"
    foule.style.opacity = "100%"
    setTimeout(() => {
        busCote.style.left = "50%"
        setTimeout(() => {
            foule.style.opacity = "0%"
        }, 1000);
    }, 1000);

    setTimeout(() => {
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
                if(i==numberOfPassengers-1){
                    setTimeout(() => {
                        console.log("busGOGOGO")
                        busCote.style.left = "100%"
                        busCote.style.opacity = "0%"
                    }, 2200);
                }
            }, i*200);
        }
    }, 2000);

    setTimeout(() => {
        fillEmUp();
    }, numberOfPassengers * 200 + 2000);
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

    let bubles = document.querySelectorAll('.buble');
    let names = document.querySelectorAll('.name');

    btn_start.addEventListener('click', ()=> {

        bubles.forEach(function (buble){
            buble.classList.add('animate__fadeOut')
        });

        names.forEach(function (name){
            name.classList.add('animate__fadeOut')
        });

        busAnimation();

    });
}

function busAnimation(){
    let bus = document.querySelector('.bus-home');

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
}

function displaySlideSchool(){

    let boys_students = document.querySelector('.boys-students');
    let girls_students = document.querySelector('.girls-students');

    let btn_fight = document.querySelector('.btn-bagarre');

    generateGroupeOfPeolpleSVG(50,boys_students,'boy');
    generateGroupeOfPeolpleSVG(50,girls_students,'girl');

    /*To do : mettre ces données dans un fichier JSON*/
    let percentage_fight_girl = 22;
    let percentage_fight_boy = 50;

    let number_of_people = document.querySelectorAll('.boy').length;

    let relative_percentage_boy = Math.round(percentage_fight_boy*number_of_people)/100;
    let relative_percentage_girl = Math.round(percentage_fight_girl*number_of_people)/100;

    btn_fight.addEventListener('click', ()=>{
        for ( let i = 0 ; i < relative_percentage_boy; i++ ){
            setTimeout(() => {
            let boy_concerned = document.querySelector('.boy-'+i);
            boy_concerned.style.fill = '#9712DD';
            }, 100*i);
        }

        for ( let i = 0 ; i < relative_percentage_girl; i++ ){
            setTimeout(() => {
                let girl_concerned = document.querySelector('.girl-'+i);
                girl_concerned.style.fill = '#FF791F';
            }, 100*i);
        }
    });
}

function generateGroupeOfPeolpleSVG(numberOfPeople, parent, className){
    let generatedPeoples = []

    for(let i=0; i<numberOfPeople; i++){
        let svg = buildSVGBoy();
        svg.classList.add(className+'-'+i);
        svg.classList.add(className);
        parent.appendChild(svg);
        generatedPeoples.push(svg);
    }

    return generatedPeoples;
}

function buildSVGBoy(){

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('fill', '#CFCFCF');
    svg.setAttribute('viewBox', '0 0 18 37');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '37');

    path1.setAttribute('d','M0.790039 17.1435C0.790039 14.7484 2.71078 12.8069 5.08014 12.8069H12.9453C15.3147 12.8069 17.2354 14.7484 17.2354 17.1435V27.9851H0.790039V17.1435Z');

    path2.setAttribute('d','M4.12678 26.4191C4.12678 25.4212 4.92709 24.6122 5.91432 24.6122C6.90156 24.6122 7.70187 25.4212 7.70187 26.4191V34.3697C7.70187 35.3676 6.90156 36.1766 5.91432 36.1766C4.92709 36.1766 4.12678 35.3676 4.12678 34.3697V26.4191Z');

    path3.setAttribute('d','M10.5619 26.4191C10.5619 25.4212 11.3622 24.6122 12.3495 24.6122C13.3367 24.6122 14.137 25.4212 14.137 26.4191V34.3697C14.137 35.3676 13.3367 36.1766 12.3495 36.1766C11.3622 36.1766 10.5619 35.3676 10.5619 34.3697V26.4191Z');

    path4.setAttribute('d','M14.6388 6.31526C14.6388 9.42244 12.1199 11.9413 9.01273 11.9413C5.90555 11.9413 3.38668 9.42244 3.38668 6.31526C3.38668 3.20808 5.90555 0.689209 9.01273 0.689209C12.1199 0.689209 14.6388 3.20808 14.6388 6.31526Z');

    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(path4);

    return svg;

}