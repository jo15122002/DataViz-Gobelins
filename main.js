//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('slide0').scrollIntoView();

    const NBR_SLIDE = document.querySelectorAll('.slide').length;

    let btn_launch = document.querySelector('.btn-launch');
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

    btn_launch.addEventListener('click', ()=> {
        document.getElementById('slide1').scrollIntoView();
    });

    btns_slides.forEach(btn_slide =>{
        btn_slide.addEventListener('click', () => {
            console.log(btn_slide.id);
            document.getElementById('slide'+btn_slide.id).scrollIntoView();
        });
    });
});

function displaySlideHome(){
    let home_slide = document.querySelector('.slide-home');
    console.log(home_slide);
}