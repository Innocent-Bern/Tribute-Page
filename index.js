let cards= document.querySelectorAll(".card");

// mouse events
cards.forEach(function(card, index){
    card.addEventListener("mouseenter", function(enter){
        document.querySelector(".paragraph" +index ).style.opacity= 1;
        document.querySelector(".image"+ index).style.opacity= 0;
    })
})

cards.forEach(function(card, index){
    card.addEventListener("mouseleave", function(event){
        document.querySelector(".paragraph"+index).style.opacity= 0;
        document.querySelector(".image"+index).style.opacity= 0.5;
    })
})

//touch events
cards.forEach(function(card, index){
    card.addEventListener("touchstart", function(touch){
        document.querySelector(".paragraph"+ index).style.opacity= 1;
        document.querySelector(".image"+index).style.opacity= 0;
        card.style.transform= "scale(1.1)";
    })
})

cards.forEach(function(card, index){
    card.addEventListener("touchend", function(touch){
        document.querySelector(".paragraph"+ index).style.opacity= 0;
        document.querySelector(".image"+index).style.opacity= 0.5;
        card.style.transform= "scale(1)";
    })
})
