// JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross platform
//OOP uygun

//Single Comment
/*
Multiple Comment
*/

// console.log("loglama");
// console.info("info");
// console.warn("warn");
// console.error("error");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");
// window.document.writeln("ekranda yazı");

// Variable
var result = 4423;
console.log(typeof result+" => "+result);

var result = 44.23;
console.log(typeof result+" => "+result)

var result = "Js öğreniyorum";
console.log(typeof result+" => "+result)

var result = true;
console.log(typeof result+" => "+result)

// Naming Convensition
var deneme="JS Data"
console.log(deneme);

var deneme44="JS Data"
console.log(deneme44);

var $deneme44="JS Data"
console.log($deneme44);

var _$deneme44="JS Data"
console.log(_$deneme44);

var denemeVerisi="JS Data"
console.log(denemeVerisi);

// var &~44$deneme44="JS Data"
// console.log(&~44$deneme44);

// whoisting
result2=56;
var result2;

/////////////////////////////////////////////////////////
// Operators
// + - * ** / % 
// ! DEĞİL   && = VE  ||= VEYA
// x++
// x--
// ++x
// --x


// =     ATAMA
// ==    EŞİT (TÜRÜNE BAKMA)
// ===   EŞİT (TÜRÜNE BAK)

var number1=40;
var number2=5;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

// cast
// Number
// String()
var userData=Number(prompt("Lütfen sayı giriniz"));
console.log(userData+45);

// undefined
var result4;
console.log(result4);

//NaN: Not A Number
var result5="asd"/4;
console.log(result5);


// isNaN
var result6=4;
console.log(isNaN(result6)); // false: sayıdır

// Infinity
console.log(4/0);

/////////////////////////////////////////////////////////
// Math

console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,1,99,555,22,-111));
console.log(Math.max(4,1,99,555,22,-111));

console.log(Math.sqrt(16));  // karekök
console.log(Math.abs(-25));  // mutlak değer
console.log(Math.pow(2,5));  // üslü sayılar

console.log(Math.floor(3.9));  // sayı ne olursa olsun her zaman aşağı yuvarlar
console.log(Math.ceil(3.1));  // sayı ne olursa olsun her zaman yukarıya yuvarlar
console.log(Math.round(6.4));  // .4 ve aşağısında olanları aşağı yuvarlar
console.log(Math.round(6.5));  // .5 ve üzerindekileri yukarıya yuvarlar

console.log(Math.sin(45));

console.log(Math.round(Math.random()*9+1));  // rastgele sayılar üretir

/*
Örnek-4: Aşağıdaki örnekleri math ile çözelim?
 -5.9 sayısına aşağıdaki işlemleri yaptıralım
 1- mutlak değeri alsın 5.9
 2- yuvarlama yapsın 6.0
 3- karesini alsın 36.00
 4- karekök alsın 6.0
 5- yuvarlama yapsın 6.0
 6- çıkan sonucu 5 bölsün 6/5=1
 7- iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
 8- küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

 örnek-5: Kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi
 not: cast kullanalım?

 örnek-6: Kullanıcı tarafından password ve repassword alalım sonrasında
 eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yap
*/

/////////////////////////////////////////////////////////

// Number
var sayi=15000;
console.log(sayi);

var sayi2=1.5E+4;  // same as (var sayi2= 15E+3;) bilimsel gösterim
console.log(sayi2);

//binary : 0-1
var binary=0b00011;
console.log(binary);

//octal : 0-1-2-3-4-5-6-7
var octal=0o7612;
console.log(octal);

//decimal : 0-1-2-3-4-5-6-7-8-9
var decimal=123456;
console.log(decimal);

//hexadecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
var hexadecimal=0xffa;
console.log(hexadecimal);

// Cast
// database, port, api (string)
console.log(Number("10")+10);
console.log(parseInt("10")+10);

console.log(String(30)+10);

var number=30;
console.log(number.toString()+10);

/////////////////////////////////////////////////////////
// var, let, const

var data1=11;
console.log(data1);

var data1=22;
console.log(data1);

// let bir veri yazdıysan o veriyi sonradan değiştireblilirsin
let data2=33;
console.log(data2);

let data3=33;
data3=44;
console.log(data3);

// const bir veri yazdıysan o veriyi değiştiremezsin
const data4=55;
console.log(data4);

// const data5=55;
// data5=66;
// console.log(data5);


/////////////////////////////////////////////////////////
// String
let str="js ÖĞreniyorum js ";
console.log(str);
console.log(str.length);

console.log(str.trim().length); // kesitleme -> başındaki ve sonundaki boşlukları aldı

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.charAt(0));

console.log(str.indexOf("js"));  //soldan bulmaya başlar
console.log(str.lastIndexOf("js"));  //sondan bulmaya başlar

console.log(str.concat("js"));  // sona veri ekleme
console.log(str.replace(str,"değiştir"));

console.log(str.substring(1));  // parçalama
console.log(str.substring(0.4));


/*
Kullanıcı tarafından girilen bir kelimenin (prompt)
let userData = pronpt("Lütfen bir şeyler yazınız");
S-1 Kaç karakterlidir? (length)
S-2 Boşluklar alınarak kaç karakterlidir? (trim)
S-3 Bütün kelimeyi küçük harfle göstermek? (toLowerCase())
S-4 Bütün kelimeyi büyük harfle göstermek? (toUpperCase())
S-5 Kullanıcıdan alınan ilk kelimeyle, "javascript" kelimeyle değiştir
console.log(userData.replace("xxxxxx"),"javascript");
console.log(userData.replace(userData.substring(0,userData.indexOf(" ")), ""))
S-6 Yazdığınız kelimede "javascript ile mi başlıyor" (startsWith())
S-7 Yazdığınız kelimede "javascript ile mi bitiyor" (endsWith())
S-8 İlk harf nedir? (charAt())
S-9 Girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
S-10 Girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin (subString())
*/

/////////////////////////////////////////////////////////
// Function (Normal)

// 1 returnsuz parametresiz
function returnsuzParametresiz() {
    console.log("deneme");
}
returnsuzParametresiz();

// 2 returnsuz Parametreli
function returnsuzParametreli(adi){ // parametre: adi
    console.log("deneme "+adi);
}
returnsuzParametreli("BuseB")  // argüman: "BuseB"

// 3 returnlu Parametresiz
function returnluParametresiz(){
    return "deneme22";
}
let result3 = returnluParametresiz();
console.log(result3);

// 4 returnlu Parametreli
function returnluParametreli(soyadi){
    return "deneme66 "+soyadi;
}
let result44 = returnluParametreli("Beker");
console.log(result44);

/////////////////////////////////////////////////////////
// Anoymous (Function)

/////////////////////////////////////////////////////////
// Arrow (Function)