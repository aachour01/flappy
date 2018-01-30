$("img").ready( function () {
$("img").on('click',function () {
  alert("FLAPPY EST DANS L'ESPACE !!!");
    });
});




function bougerHaut(){
$("#oiseau").animate({marginBottom:'+=100px'}, speed=200, easing="swing");
     }

function bougerBas(){
$("#oiseau").animate({marginTop:'+=100px'}, speed=200, easing="swing");
     }

function bougerGauche(){
$("#oiseau").animate({marginRight:'+=100px'}, speed=200, easing="swing");
     }

function bougerDroite(){
$("#oiseau").animate({marginLeft:'+=100px'}, speed=200, easing="swing");
     }





$(document).keyup(function(touche){ // on écoute l'évènement keyup()
           var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
           if(appui == 38){
               bougerHaut();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 40){
                bougerBas();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 37){
                bougerGauche();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 39){
                bougerDroite();
           }
});


//ATTENTION : NOTES COURS (pour avoir le code des touches, aller sur keycode)
// Code de la Flêche Gauche = 37 (le mettre dans "if(appyu == 38)")
// Code de la Flêche Haut = 38 (le mettre dans "if(appyu == 38)")
// Code de la Flêche droite = 39 (le mettre dans "if(appyu == 38)")
// Code de la Flêche Bas = 40 (le mettre dans "if(appyu == 38)")

//EXPLICATIONS
// Les 4 ecritures du haut définissent le mouvement de la touche (selon une fonction)
// Les 4 ecritures du bas définiessent la touche qui provoque un mouvement (il associe les touches au mvt)
