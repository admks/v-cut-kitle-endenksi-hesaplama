let massMark = 80;
let heightMark = 1.89;
let massJohn = 69;
let heightJohn = 1.70;
let BMIJohn;
let BMIMark;
let higherBMI;
let higherBMI1;
BMIJohn = massJohn / (heightJohn*heightJohn);
BMIMark = massMark / (heightMark*heightMark);
console.log("John'un Kitle İndeksi:",Math.floor(BMIJohn));
console.log("Mark'ın Kitle İndeksi:",Math.round(BMIMark));
console.log("Mark'ın Kitle İndeksi:",(BMIMark).toFixed(2));
higherBMI = BMIJohn > BMIMark;
higherBMI1 = BMIJohn < BMIMark;
console.log(higherBMI);
console.log(higherBMI1);
console.log(`Mark'ın BMI'si John'unkinden daha mı küçük? Cevap "${higherBMI}". Çünkü Mark'ın VKİ'si ${Math.floor(BMIMark)} ve John'un VKİ'si ${Math.floor(BMIJohn)}`);
if (BMIJohn > BMIMark) { 
    console.log("John'un VKİ'si Mark'ın VKİ'sinden büyük."); 
    } else { 
         console.log("Mark'ın VKİ'si John'un VKİ'sinden büyük");
     }
