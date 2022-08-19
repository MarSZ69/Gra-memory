/*const tablica_z_obrazkami = ["krowa.jpg","krowa.jpg","pies.jpg","pies.jpg","kot.jpg","kot.jpg","koza.png","koza.png","owca.jpg","owca.jpg","swinia.jpg","swinia.jpg","kura.jpg","kura.jpg","królik.jpg","królik.jpg","byk.jpg","byk.jpg","gęś.jpg","gęś.jpg",];

let cards = document.querySelectorAll(".card");
cards = [...cards];*/

var tablica_z_obrazkami = new Array(20);
    tablica_z_obrazkami[0]="krowa.jpg";
    tablica_z_obrazkami[1]="pies.jpg";
    tablica_z_obrazkami[2]="kot.jpg";
    tablica_z_obrazkami[3]="kot.jpg";
    tablica_z_obrazkami[4]="koza.png";
    tablica_z_obrazkami[5]="owca.jpg";
    tablica_z_obrazkami[6]="pies.jpg";
    tablica_z_obrazkami[7]="swinia.jpg";
    tablica_z_obrazkami[8]="krowa.jpg";
    tablica_z_obrazkami[9]="owca.jpg";
    tablica_z_obrazkami[10]="swinia.jpg";
    tablica_z_obrazkami[11]="kura.jpg";
    tablica_z_obrazkami[12]="królik.jpg";
    tablica_z_obrazkami[13]="koza.png";
    tablica_z_obrazkami[14]="byk.jpg";
    tablica_z_obrazkami[15]="gęś.jpg";
    tablica_z_obrazkami[16]="kura.jpg";
    tablica_z_obrazkami[17]="byk.jpg";
    tablica_z_obrazkami[18]="gęś.jpg";
    tablica_z_obrazkami[19]="królik.jpg";


 
   
console.log(tablica_z_obrazkami);

 tablica_z_obrazkami.sort(function(a,b){
     var losowe1 = Math.random (),
         losowe2 = Math.random ();
     return losowe1 - losowe2;
 });
console.log(tablica_z_obrazkami);



    

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
                                 
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');

var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');
var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');

var c15 = document.getElementById('c15');
var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');
var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');


//var obrazy=document.querySelectorAll('div');
//obrazy.forEach(function(obr){
    
//obr.addEventListener('click',revealCard()
//});

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });
c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });

c15.addEventListener("click", function() { revealCard(15); });
c16.addEventListener("click", function() { revealCard(16); });
c17.addEventListener("click", function() { revealCard(17); });
c18.addEventListener("click", function() { revealCard(18); });
c19.addEventListener("click", function() { revealCard(19); });



/*$(document).ready(function(){
  $(".board").click(function(){
    $(revealCard().addEventListener('click');
      });*/

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 10;
var yes=new Audio("all-right.wav");
var no=new Audio("krowa02.wav");


function revealCard(nr){
    var opacityValue = $('#c'+nr).css('opacity');
    //alert('Opacity: '+opacityValue);
    if(opacityValue !=0 && lock == false && visible_nr != nr){
       //alert(nr);
        lock = true;
    //var obraz = "url(img/" + cards[nr] + ")";
            var obraz = "url(img/" + tablica_z_obrazkami[nr] + ")";
/*var yes=new Audio("kikeriki.mp3");
var no=new Audio("cat-meow.mp3");*/
		
		$('#c'+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
    
    if (oneVisible == false){
        //first card
        oneVisible = true;
        visible_nr = nr;
        lock = false;
    }
    else{
        //second card
        //if(cards[visible_nr] == cards[nr]){
        if(tablica_z_obrazkami[visible_nr] == tablica_z_obrazkami[nr]){
            //alert('para');
            setTimeout(function(){hide2cards(nr,visible_nr)},750);
           yes.play();
        }
        else{
            //alert('pudlo');
            setTimeout(function(){restore2cards(nr,visible_nr)},1000);
            no.play();

        }
        turnCounter++;
        $('.score').html('Turn counter:' +turnCounter );
        oneVisible=false;
    } 
    }
    
}
function hide2cards(nr1,nr2){
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    lock = false;
    pairsLeft--;
    
    if (pairsLeft == 0){
        $('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns <br><br><span class="reset"onclick="location.reload()">JESZCZE RAZ?</span></h1>') ;
        
        
    }
}
function restore2cards(nr1,nr2){
    $('#c'+nr1).css('background-image','url(img/na%20wsi.jpg)');/*'url(img/karta.png)');*/
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');
    
    $('#c'+nr2).css('background-image', 'url(img/na%20wsi.jpg)');/*'url(img/karta.png)');*/
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    lock = false;
}



/*var tablica_z_obrazkami = new Array(12);
    tablica_z_obrazkami[0]="ciri.png";
    tablica_z_obrazkami[1]="geralt.png";
    tablica_z_obrazkami[2]="jaskier.png";
    tablica_z_obrazkami[3]="jaskier.png";
    tablica_z_obrazkami[4]="iorweth.png";
    tablica_z_obrazkami[5]="triss.png";
    tablica_z_obrazkami[6]="geralt.png";
    tablica_z_obrazkami[7]="yen.png";
    tablica_z_obrazkami[8]="ciri.png";
    tablica_z_obrazkami[9]="triss.png";
    tablica_z_obrazkami[10]="yen.png";
    tablica_z_obrazkami[11]="iorweth.png";

 
   
console.log(tablica_z_obrazkami);

 tablica_z_obrazkami.sort(function(a,b){
     var losowe1 = Math.random (),
         losowe2 = Math.random ();
     return losowe1 - losowe2;
 });
console.log(tablica_z_obrazkami);



    

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;
var yes=new Audio("all-right.wav");
var no=new Audio("aahhzz.wav");


function revealCard(nr){
    var opacityValue = $('#c'+nr).css('opacity');
    //alert('Opacity: '+opacityValue);
    if(opacityValue !=0 && lock == false && visible_nr != nr){
       //alert(nr);
        lock = true;
    //var obraz = "url(img/" + cards[nr] + ")";
            var obraz = "url(img/" + tablica_z_obrazkami[nr] + ")";
var yes=new Audio("all-right.wav");
var no=new Audio("aahhzz.wav");
		
		$('#c'+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
    
    if (oneVisible == false){
        //first card
        oneVisible = true;
        visible_nr = nr;
        lock = false;
    }
    else{
        //second card
        //if(cards[visible_nr] == cards[nr]){
        if(tablica_z_obrazkami[visible_nr] == tablica_z_obrazkami[nr]){
            //alert('para');
            setTimeout(function(){hide2cards(nr,visible_nr)},750);
           yes.play();
        }
        else{
            //alert('pudlo');
            setTimeout(function(){restore2cards(nr,visible_nr)},1000);
            no.play();

        }
        turnCounter++;
        $('.score').html('Turn counter:' +turnCounter );
        oneVisible=false;
    } 
    }
    
}
function hide2cards(nr1,nr2){
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    lock = false;
    pairsLeft--;
    
    if (pairsLeft == 0){
        $('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns <br><br><span class="reset"onclick="location.reload()">JESZCZE RAZ?</span></h1>') ;
        
        
    }
}
function restore2cards(nr1,nr2){
    $('#c'+nr1).css('background-image', 'url(img/na%20wsi.jpg)');/*'url(img/karta.png)');*/
    /*$('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');
    
    $('#c'+nr2).css('background-image', 'url(img/na%20wsi.jpg)');/*'url(img/karta.png)');*/
   /* $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    lock = false;
}*/
