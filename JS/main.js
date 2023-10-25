
alert ("BIENVENIDO A LA BATALLA");
prompt ("elige el nombre del player RED:");
prompt ("elige el nombre del player BLUE:");

const golpe_maximo = 33;
const golpe_minimo = 10;

let energiaplayerRed = 100;
let energiaplayerBlue = 100;  
let round = 0;


while ((energiaplayerRed >0) && (energiaplayerBlue >0)){
    round +=1;
    console.log("-------- ROUND " + round + " --------");
   
    let golpePlayerRed = Math.ceil(Math.random()*(golpe_maximo - golpe_minimo) + golpe_minimo);
    let golpePlayerBlue = Math.ceil(Math.random()*(golpe_maximo - golpe_minimo) + golpe_minimo);
    
    console.log("RED golpea con fuerza de" + golpePlayerRed);
    console.log("BLUE golpea con fuerza de" + golpePlayerBlue);


    if (golpePlayerBlue === golpePlayerRed) {
        console.log("round empatado");
    
    } else if (golpePlayerBlue > golpePlayerRed) {
        energiaplayerRed -= golpePlayerBlue
        console.log("la energia de Red se disminuyó a " + energiaplayerRed)
        document.write("<div class='pega-rojo'><h3>pego el jugador RED</h3><img src='IMG/rojopega.jpg'  /></div>")
    
     }else{
        energiaplayerBlue -= golpePlayerRed
        console.log("la energia de Blue se disminuyó a " + energiaplayerBlue)
        document.write("<div class='pega-azul'><h3>pego el jugador BLUE</h3><img src='IMG/azulpega.jpg'  /></div>")
        }

        console.log("La energia de BLUE es " + energiaplayerBlue)
        console.log("La energia de RED es " + energiaplayerRed)
    
}
console.log("------- EL GANADOR ES ----------");

if(energiaplayerBlue>0){
    console.log("BLUEEE!!!!")
    document.write("<div class='ganoblue'><h3> GANO BLUE</h3><img src='IMG/ganoazul.jpg'></div>")
}else{
    console.log("RED!!!!")
    document.write("<div class='ganored'><h3> GANO RED</h3><img src='IMG/ganorojo.jpeg'></div>")
    
}