//Dom content loaded
const GIRLSCOLOR = '#9712DD';
const BOYSCOLOR = '#FF791F';
var slide_state = 1;

document.addEventListener('DOMContentLoaded', function() {

    //Variables
    const NBR_SLIDE = document.querySelectorAll('.slide').length;

    let btns_slides = document.querySelectorAll('.btn-slide');
    let btn_next = document.querySelector('.next');
    let btn_prev = document.querySelector('.prev');

    if(slide_state >= 2){
        btn_prev.style.display = 'inline-block';
    }

    btn_next.addEventListener('click',(event) => {
        slide_state+=1;
        if(slide_state >= 2){
            btn_prev.style.display = 'inline-block';
            document.getElementById('slide'+slide_state).scrollIntoView();
            document.querySelector('.barre-etat').src = 'img/barre-etat-'+slide_state+'.png';
        }

        if(slide_state == 4){
            displaySlideHouse();
        }
    });

    btn_prev.addEventListener('click', (event) => {
        slide_state -= 1;
        if(slide_state <= 2 ){
            btn_prev.style.display = 'none';
        }
        document.getElementById('slide'+slide_state).scrollIntoView();
        document.querySelector('.barre-etat').src = 'img/barre-etat-'+slide_state+'.png';

    })

    document.querySelector('.slides-container').style.width = NBR_SLIDE * 100+'vw';

/*    document.querySelector('.btn-restart').addEventListener('click', () =>{
        document.getElementById('slide1').scrollIntoView();
    })*/

    displaySlideHome();
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

    foule = document.querySelector(".foule-slide2");

    busInterieur = document.querySelector('#slide2 .bus-interieur-slide2')

    busCote = document.querySelector('.bus-cote-slide2')
    console.log(busCote)

    busCote.style.left = "0%";
    busCote.style.opacity = "0%";

    busInterieur.style.opacity = "0%"

    busCote.style.opacity = "100%"
    foule.style.opacity = "100%"
    setTimeout(() => {
        busCote.style.left = "40%";
        setTimeout(() => {
            busInterieur.style.opacity = "100%"
            foule.style.opacity = "0%"
        }, 1000);
    }, 1000);

    setTimeout(() => {
        for(let i = 0; i < numberOfPassengers; i++){
            let passenger = document.createElement('div');
            let passengerImg = buildSVGBoy();
            passengerImg.classList.add('passenger-img');
            passenger.appendChild(passengerImg);
            BUS.appendChild(passenger);
            passenger.classList.add('passenger');
    
            if(i >= numberOfPassengers/2){
                passengerImg.classList.add('passenger-girl');
            }else{
                passengerImg.classList.add('passenger-boy');
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
                        busCote.style.left = "100%";
                        busCote.style.opacity = "0%";
                        document.querySelector('#slide2 .percentage').style.opacity = '100%';
                    }, 2200);
                }
            }, i*200);
        }
    }, 2000);

    setTimeout(() => {
        fillEmUp();
    }, numberOfPassengers * 200 + 3000);
}

function fillEmUp(){
    //Filles 23% garcons 11%

    boys = document.querySelectorAll(".passenger-boy");
    girls = document.querySelectorAll(".passenger-girl");

    girls.forEach((element, index) =>{
        fillDiv = document.createElement("div");
        element.appendChild(fillDiv);
        fillDiv.classList.add("fillPassenger");
    })

    boysToFill = [
        boys[9]
    ]

    girlsToFill = [
        girls[9], girls[8], girls[7]
    ]

    boysToFill.forEach((element, index) => {
        setTimeout(() => {
            element.style.fill = BOYSCOLOR
        }, index*200);
    });

    girlsToFill.forEach((element, index) => {
        setTimeout(() => {
            element.style.fill = GIRLSCOLOR
        }, index*200);
    });
}

function goToPlace(passenger, x1, y, x2){
    passenger.style.top = x1;
    setTimeout(() => {
        passenger.style.right = y;
        setTimeout(() => {
            passenger.style.top = x2;
        }, 200);
    }, 200);
};

function displaySlideHome(){

    let btn_start = document.querySelector('.btn-launch');

    let names = document.querySelectorAll('.name');

    btn_start.addEventListener('click', ()=> {

        names.forEach(function (name){
            name.classList.add('animate__fadeOut');
        });


        document.querySelector('.btn-launch').style.display = "none";
        document.querySelector('.btn-launch').classList.remove('animate__infinite');
        busAnimation();

        setTimeout(() => {
            displaySlideBus();
        },5000);

    });
}

function busAnimation(){
    let bus = document.querySelector('.bus-home');

    setTimeout(() => {
        bus.style.display = 'block';
        bus.classList.add('animate__bounceInLeft');
    }, 500);

    setTimeout(() => {
        document.querySelector('.girl').style.display="none";
    }, 2500);

    setTimeout(() => {
        document.querySelector('.boy').style.display="none";
    }, 3000);

    setTimeout(() => {
        bus.classList.add('animate__bounceOutRight');

        setTimeout(() =>{
            bus.style.display = 'none';
        }, 1000);
    }, 3500);

    setTimeout(() => {
        slide_state +=1;
        document.querySelector('.barre-etat').src = 'img/barre-etat-'+slide_state+'.png';
        document.querySelector('.next').style.display = 'inline-block';
        document.getElementById('slide'+slide_state).scrollIntoView();
    }, 4000);
}

function displaySlideSchool(){

    let boys_students = document.querySelector('.boys-students');
    let girls_students = document.querySelector('.girls-students');

    let btn_fight = document.querySelector('.btn-fight');
    let btn_ignored = document.querySelector('.btn-ignored');
    let btn_sexist = document.querySelector('.btn-sexist');

    generateGroupeOfPeolpleSVG(50,boys_students,'boy-school');
    generateGroupeOfPeolpleSVG(50,girls_students,'girl-school');

    /*To do : mettre ces données dans un fichier JSON*/
    let percentage_fight_girl = 11;
    let percentage_fight_boy = 21;
    let percentage_ignored_boy = 35;
    let percentage_ignored_girl = 42;
    let percentage_sexist_insult_boy = 6;
    let percentage_sexist_insult_girl = 11;

    let number_of_boy = document.querySelectorAll('.boy-school').length;
    let number_of_girl = document.querySelectorAll('.girl-school').length;

    let desc = document.querySelector(".school-desc");

    let fight_trace = document.querySelector('.fight-trace');
    let ignored_trace = document.querySelector('.ignored-trace');
    let sexist_trace = document.querySelector('.sexist-trace');

    clearSvg(number_of_boy, 'boy-school');
    clearSvg(number_of_girl, 'girl-school');
    fillPercentageOfPeople(percentage_fight_boy, number_of_boy, 'boy-school', BOYSCOLOR);
    fillPercentageOfPeople(percentage_fight_girl, number_of_girl, 'girl-school', GIRLSCOLOR);
    ignored_trace.style.display = 'none';
    sexist_trace.style.display = 'none';

    btn_fight.addEventListener('click', ()=>{
        clearSvg(number_of_boy, 'boy-school');
        clearSvg(number_of_girl, 'girl-school');
        fillPercentageOfPeople(percentage_fight_boy, number_of_boy, 'boy-school', BOYSCOLOR);
        fillPercentageOfPeople(percentage_fight_girl, number_of_girl, 'girl-school', GIRLSCOLOR);
        desc.innerText = "les garçons sont davantage impliqués et victimes des bagarres que les filles.";
        ignored_trace.style.display = 'none';
        sexist_trace.style.display = 'none';
        fight_trace.style.display = 'inline-block';
    });

    btn_ignored.addEventListener('click', () => {
        clearSvg(number_of_boy, 'boy-school');
        clearSvg(number_of_girl, 'girl-school');
        fillPercentageOfPeople(percentage_ignored_boy, number_of_boy, 'boy-school', BOYSCOLOR);
        fillPercentageOfPeople(percentage_ignored_girl, number_of_girl, 'girl-school', GIRLSCOLOR);
        desc.innerText = "les filles se sentent davantage mises à l’écart que les garçons.";
        ignored_trace.style.display = 'inline-block';
        sexist_trace.style.display = 'none';
        fight_trace.style.display = 'none';
    })

    btn_sexist.addEventListener('click', () => {
        clearSvg(number_of_boy,'boy-school');
        clearSvg(number_of_girl, 'girl-school');
        fillPercentageOfPeople(percentage_sexist_insult_boy, number_of_boy, 'boy-school', BOYSCOLOR);
        fillPercentageOfPeople(percentage_sexist_insult_girl, number_of_girl, 'girl-school', GIRLSCOLOR);
        desc.innerText = "davantage de filles sont victimes de moqueries et d’insultes sexistes.";
        ignored_trace.style.display = 'none';
        sexist_trace.style.display = 'inline-block';
        fight_trace.style.display = 'none';
    })
}

function fillPercentageOfPeople(percentageValue, divPeoples, peopleConcerned, color){
    let relative_percentage = Math.round(percentageValue*divPeoples)/100;
    for ( let i = 0 ; i < relative_percentage; i++){
        setTimeout(() => {
            let people_concerned = document.querySelector('.'+peopleConcerned+'-'+i);
            people_concerned.style.fill = color;
        }, 100*i);
    }

    for ( let i = 1 ; i <= percentageValue; i++ ){
        setTimeout(() => {
            let percentage = document.querySelector('.percentage-'+peopleConcerned);
            percentage.innerText = i+'%';
        }, 50*i);
    }
}

function clearSvg(number_of_people, peopleConcerned){
    for ( let i = 0 ; i < number_of_people-1; i++ ){
        let people_concerned = document.querySelector('.'+peopleConcerned+'-'+i);
        people_concerned.style.fill = '#CFCFCF';
    }
}

function generateGroupeOfPeolpleSVG(numberOfPeople, parent, className){
    let generatedPeoples = [];

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

function displaySlideHouse(){
    bus = document.querySelector('#slide4 .bus');
    kids = document.querySelector('#slide4 .kids');
    house = document.querySelector('#slide4 .houseContainer');

    bus.style.opacity = '0%';
    bus.style.left = '0%';
    kids.style.opacity = '0%';

    bus.style.opacity = '100%';
    bus.style.left = '10%';

    setTimeout(() => {
        kids.style.opacity = "100%";
    }, 1000);

    setTimeout(() => {
        bus.style.opacity = "0%";
        bus.style.left = "100%";
        kids.style.opacity = "100%";
        setTimeout(() => {
            kids.style.left = house.offsetLeft + house.offsetWidth/3 + 'px';
            setTimeout(() => {
                kids.style.bottom = kids.offsetBottom * house.offsetHeight/2 + 'px';
                kids.style.scale = "0.5";
                kids.style.opacity = "0%";
                setTimeout(() => {
                    leon = kids.querySelector(".leon");
                    sarah = kids.querySelector(".sarah");
                    houseInside = document.querySelector("#slide4 .house-inside");
                    houseImg = document.querySelector('#slide4 .houseImg');
                    houseContainer = document.querySelector('#slide4 .houseContainer');
                    houseInside.appendChild(leon);
                    houseInside.appendChild(sarah);

                    leon.style.top = "20%";
                    leon.style.left = "8%";

                    sarah.style.top = "20%";
                    sarah.style.left = "53%";

                    houseInside.style.opacity = "100%";

                    houseInside.addEventListener('click', () => {
                        houseContainer.style.zIndex = '999'
                        houseContainer.style.scale = '2';
                        if(window.innerWidth <= 1200){
                            houseContainer.style.left = '21%';
                            houseContainer.style.bottom = '-5%';
                        }else{
                            houseContainer.style.bottom = '-10%';
                            houseContainer.style.left = '30%';
                        }

                        setTimeout(() => {
                            percentBoys = document.createElement("div");
                            percentBoys.classList.add("percentage-boyHouse");
                            percentBoys.classList.add("percentage-boy");
                            houseContainer.appendChild(percentBoys);

                            percentGirls = document.createElement("div");
                            percentGirls.classList.add("percentage-girlHouse");
                            percentGirls.classList.add("percentage-girl");
                            houseContainer.appendChild(percentGirls);

                            percentBoysContainer = document.createElement("div");
                            percentBoysContainer.classList.add("percentBoyContainer");
                            houseContainer.appendChild(percentBoysContainer)
                            boys = generateGroupeOfPeolpleSVG(50, percentBoysContainer, 'boyHouse');

                            percentGirlsContainer = document.createElement("div");
                            percentGirlsContainer.classList.add("percentGirlContainer");
                            houseContainer.appendChild(percentGirlsContainer);
                            girls = generateGroupeOfPeolpleSVG(50, percentGirlsContainer, 'girlHouse');

                            fillPercentageOfPeople(13, 50, 'boyHouse', BOYSCOLOR);
                            fillPercentageOfPeople(20, 50, 'girlHouse', GIRLSCOLOR);
                        }, 1000);
                    })
                }, 1000);
            }, 1000);
        }, 1000);
    }, 2000);
}