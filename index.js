let cards= document.querySelectorAll(".card");

cards.forEach(function(card, index){
    card.addEventListener("mouseenter", function(enter){
        document.querySelector(".paragraph" +index ).style.opacity= 1;
        document.querySelector(".image"+ index).style.opacity= 0;
    })
})

cards.forEach(function(card, index){
    card.addEventListener("mouseleave", function(event){
        document.querySelector(".paragraph"+index).style.opacity= 0;
        document.querySelector(".image"+index).style.opacity= 0.3;
    })
})
