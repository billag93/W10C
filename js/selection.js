var partner = Cookies.get('selection');
var yourpokemon = document.getElementById('enemy-attack');
yourpokemon.innerHTML = partner;
var usermaxhealth = 250;
var computerMaxHealth = 250; 
var userhealth= document.getElementById('userhealth')
var enemyhealth = document.getElementById('enemyhealth')

userhealth.innerHTML=usermaxhealth;
enemyhealth.innerHTML= computerMaxHealth;

function Attack1(){
 usermaxhealth = usermaxhealth -20;
 computerMaxHealth = computerMaxHealth -32;
 userhealth.innerHTML= usermaxhealth;
 enemyhealth.innerHTML = computerMaxHealth;
}
function Attack2(){
   usermaxhealth = usermaxhealth -16;
   computerMaxHealth = computerMaxHealth -22;
   userhealth.innerHTML= usermaxhealth;
   enemyhealth.innerHTML = computerMaxHealth;
}
function Attack3(){
   usermaxhealth = usermaxhealth -10;
   computerMaxHealth = computerMaxHealth -8;
   userhealth.innerHTML= usermaxhealth;
   enemyhealth.innerHTML = computerMaxHealth;
}

function Attack4(){
   usermaxhealth = usermaxhealth -15;
   computerMaxHealth = computerMaxHealth -17;
   userhealth.innerHTML= usermaxhealth;
   enemyhealth.innerHTML = computerMaxHealth;
}



if (partner == 'charizard') {
  yourpokemon.innerHTML = ' <img src="https://usercontent1.hubstatic.com/13812156_f520.jpg" alt="Charizard"> <p>Charizard I choose you</p>'
}

else if (partner == 'raichu') {
   yourpokemon.innerHTML = '<img src="https://static.pokemonpets.com/images/monsters-images-300-300/26-Raichu.png" alt="Raichu"> <p>Rachiu I choose you</p>'
}

else if (partner == 'blastoise') {
   yourpokemon.innerHTML = ' <img src="https://www.pngitem.com/pimgs/m/129-1290996_blastoise-png-vector-clipart-psd-pokemon-blastoise-transparent.png" alt="blastoise"> <p>Blastoise I choose you</p>'
}

else{
   yourpokemon.innerHTML = '<p>Invalid</p>'
}

