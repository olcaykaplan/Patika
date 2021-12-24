/*
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı 
bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

const r = process.argv.slice(2)

function calculateCircleArea(r){
    if(Number(r))
    return  `Yarıçapı ${r} olan dairenin alanı: ${Math.PI * Math.pow(r,2)} şeklinde olmalıdır.`;
}

console.log(calculateCircleArea(r))
