//Dom content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Pong!");

    var body = document.body
    
    console.log(body);
    
    window.addEventListener("scroll", () => {
        console.log(window.scrollX)
    
        if(window.scrollX > window.innerWidth){
            body.style.backgroundColor ="red";
        }else{
            body.style.backgroundColor ="blue";
        }
    })
})