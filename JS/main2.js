//alert()

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

while((energiaGoku>0) && (energiaSuperman>0)){
//round = round + 1;
round +=1;
//round++;

console.log('----------Round: '+ round +'------------------------')

let golpeGoku = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER);
let golpeSuperman = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);



console.log("Goku golpea con fuerza de " + golpeGoku);
console.log("Superman golpea con fuerza de " + golpeSuperman);

if(golpeGoku === golpeSuperman){
    console.log("siga siga");
}else if(golpeSuperman > golpeGoku) {

    energiaGoku -= golpeSuperman
    document.write("<div class='card'><img src='img/golpeSuperman.jpeg'  /></div>")
}else {

    energiaSuperman -= golpeGoku;
    document.write("<div class='card'><img src='img/golpeGoku.jpeg'/></div>")

}

console.log("La energia de Goku es " + energiaGoku)
console.log("La energia de Superman es " + energiaSuperman)
}


console.log("------- GANADOR ----------");

if(energiaGoku>0){
    console.log("Gano Goku....")
    document.write("<div class='ganador'><img src='img/winGoku.jpeg'/></div>")

}else {
    console.log("Gano Superman....")
    document.write("<div class='ganador'><img src='img/winSuperman.jpeg' /></div>")
}