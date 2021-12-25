let btn = document.getElementById("S-box")
let txt = document.getElementById("btn")
let cp = document.getElementById("catchphrase")

let score = localStorage.getItem("points")
let time = localStorage.getItem('Time')
let max = localStorage.getItem("full-points")
let converted = false;

if(time < 120) unit = 's';
if(time > 120) unit = 'min', time = Math.round(time/60), converted = true;

//get score
btn.addEventListener("click", function(){
btn.classList.remove("score"), btn.classList.remove("S-box")
void this.offsetHeight;
btn.classList.add("score-revealed")

btn.innerText = `Du hast ${score} von ${max} Punkten in ${time + " " + unit} erreicht!`;
})

//send user back to beginning
let send = document.getElementById("send");
send.addEventListener("click", function(){ window.open("index.html")})

//set percentPoints
let pp = score/max;

//set catchphrases
if(pp < 0.2){
cp.innerText = "Kopf hoch - aus Fehlern lernt man! Beim nächsten mal wird's besser!."
} 

if(pp >= 0.2 && pp < 0.4){
cp.innerText = "Für den Anfang gar nicht mal so schlecht. Da kommt aber noch was -- Oder!?"    
}  

if(pp >= 0.4 && pp < 0.6){
cp.innerText = "Auffällig unauffällig! Darauf können wir aufbauen!"    
} 
if(pp >= 0.6 && pp < 0.8){
cp.innerText = "Sie sind auf bestem Wege, zum Quizz-Master aufzusteigen! Weiter so!"   
} 

if(pp >= 0.8 && pp < 1){
cp.innerText = "Welch unfassbare Leistung! Ihre Freunde können stolz auf sie sein! Können Sie den Thron des Quizz-Master erklimmen?"
} 

if(pp == 1){
cp.innerText = "Das ist ja unglaublich! Wenn sie das ohne Hilfsmittel geschafft haben sind sie vorerst Quizz-Master. Wenn nicht, dann: Gehen Sie ins Gefängnis, gehen Sie nicht über 'Los', ziehen sie keine 200$ ein!"
}

if(converted == true && time >= 25){
cp.innerText = "Das muss doch auch schneller gehen! Geben Sie sich weiter Mühe!"
}
if(converted == true && time >= 35){
cp.innerText = "ENDLICH! - Ich dachte schon, Sie würden mir den Feierabend streichen! Legen sie zwei Zähne zu!!"
}
