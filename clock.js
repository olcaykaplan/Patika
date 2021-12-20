//haftanın günlerini const atadık, böylece day sırasına göre günün ismini bulabileceğiz
const weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let name = prompt("Lütfen isminizi girin:")
document.getElementById("myName").innerText=name

if(name){
    document.getElementById("container").style.visibility= "visible";
} else{
    document.getElementById("login").style.visibility = "visible";
}


const showTime = () =>  {
    let today = new Date()
    let dateStringText = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + weekdays[today.getDay()]
    document.getElementById("myClock").innerText = dateStringText;
}
// sayfa loading olduğunda show time çalışacak
// setInterval ile 1 saniyede bir çağıracak
setInterval(()=>{
    showTime();
},1000)