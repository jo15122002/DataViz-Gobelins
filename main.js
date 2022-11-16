//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Pong!");

    let lastScrollX = 0;
    let slideNumber = 1;
    
    console.log(document.body);

    window.scrollTo(0, 0);
    
    window.addEventListener("scroll", (event) => {
        console.log(window.scrollX)

        console.log(event.type)

        /*if(window.scrollX > lastScrollX){
            console.log("scrolling right")
            slideNumber += 1
            console.log(slideNumber)
            event.preventDefault()
            window.removeEventListener("scroll")
            window.scrollTo(document.querySelector('#slide' + slideNumber), 0)
        } else {
            console.log("scrolling left")
            slideNumber -= 1
            console.log(slideNumber)
            event.preventDefault()
            window.removeEventListener("scroll")
            window.scrollTo(document.querySelector('#slide' + slideNumber), 0)
        }*/
    
        if(window.scrollX > window.innerWidth){
            document.body.style.backgroundColor ="red";
        }else{
            document.body.style.backgroundColor ="blue";
        }
    })

    let btn_next = document.querySelector('.btn-suivant')

    btn_next.addEventListener('click', ()=> {
        window.scrollTo(window.scrollX + window.innerWidth, 0);
    })

})