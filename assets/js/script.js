let allH1 = document.querySelectorAll('h1');//On stock tout les h1 clickable dans un tableau
let currentH1Window;

allH1.forEach(h1 => { //On ajoute une boucle foreach pour ajouter un eventlistener à tous le tableau de h1
    h1.addEventListener("click",function(e){
        currentH1Window = document.querySelector("#" +h1.parentElement.id+" div");//On sélectionne le text à afficher du h1 actuel cliqué
        if(currentH1Window.classList.value == "hide"){ //On vérifie la class actuel du h1
            document.querySelector("#" +h1.parentElement.id+" div").classList.replace("hide", "show");
        }
        else{
            document.querySelector("#" +h1.parentElement.id+" div").classList.replace("show", "hide");
        }
    });
});