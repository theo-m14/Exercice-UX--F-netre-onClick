let allH1 = document.querySelectorAll('h1');//On stock tout les h1 clickable dans un tableau
let currentH1Window;
let currentDiv;

allH1.forEach(h1 => { //On ajoute une boucle foreach pour ajouter un eventlistener à tous le tableau de h1
    h1.addEventListener("click",function(e){
        e.stopPropagation(); //pour que l'évenement de se propage pas à toute la page
        //On commence par fermer toutes les fenêtres ouvertes
        allH1.forEach(otherH1 => {
            currentDiv = document.querySelector("#" +otherH1.parentElement.id+" div");
            if(currentDiv.classList.value== "show"){
                 currentDiv.classList.replace("show","hide");
                }
        });
        //Puis on s'occupe d'ouvrir ou cacher le texte correspondant à l'élément cliquer.
        currentH1Window = document.querySelector("#" +h1.parentElement.id+" div");//On sélectionne le text à afficher du h1 actuel cliqué
        if(currentH1Window.classList.value == "hide"){ //On vérifie la class actuel du h1
            currentH1Window.classList.replace("hide", "show");
        }
        else{
            currentH1Window.classList.replace("show", "hide");
        }
    });
});

 window.addEventListener("click", function(){
     allH1.forEach(h1 => {
        if(document.querySelector("#" +h1.parentElement.id+" div").classList.value=="show"){
            document.querySelector("#" +h1.parentElement.id+" div").classList.replace("show", "hide");
        }
     });
 });