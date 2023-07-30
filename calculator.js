function temizle() {
    document.getElementById("input-sonuc").value = "";  // Çıktı ekranını temizleme
    document.getElementById("input-islem").value = "";  // İşlem ekranını temizleme
}

/*  

    veya
    form özelliği
    document.form name.input name.value
    
function temizle() {
    document.HesapMakinesi.sonuc.value = "";  // Çıktı ekranını temizleme
    document.HesapMakinesi.islem.value = "";  // İşlem ekranını temizleme
} 

    veya

function temizle() {
    HesapMakinesi.sonuc.value = "";  // Çıktı ekranını temizleme
    HesapMakinesi.islem.value = "";  // İşlem ekranını temizleme
} 

*/

function deger(value) { // Basılan butonların value değerlerini çıktı ekranına yazdırma
    if (document.HesapMakinesi.sonuc.value === "0") {  // Çıktı ekranı için 0 ile başlangıç koşulları
        document.HesapMakinesi.sonuc.value += value;
        if (document.HesapMakinesi.sonuc.value === "00") { // 0 dan sonra rakam gelemez
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "01") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "02") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "03") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "04") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "05") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "06") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "07") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "08") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
        }
        else if (document.HesapMakinesi.sonuc.value === "09") {
            document.HesapMakinesi.sonuc.value = "";
            document.HesapMakinesi.sonuc.value += value;
            
        }
    }
    else if (document.HesapMakinesi.sonuc.value === "") {  // Çıktı ekranı temizken başlangıç koşulları
        document.HesapMakinesi.sonuc.value += value;
        if (document.HesapMakinesi.sonuc.value === "*") {  // "*" işareti ile başlangıç olamaz
            document.HesapMakinesi.sonuc.value = "";
        }
        else if (document.HesapMakinesi.sonuc.value === "/") {
            document.HesapMakinesi.sonuc.value = "";
        }
        else if (document.HesapMakinesi.sonuc.value === ",") {
            document.HesapMakinesi.sonuc.value = "";
        }
    }
    else if (document.HesapMakinesi.sonuc.value === "+") {  // Çıktı ekranı için "+" ile başlangıç koşulları
        document.HesapMakinesi.sonuc.value += value;
        if (document.HesapMakinesi.sonuc.value === "++") {  // 2 "+" işareti yan yana gelemez
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "+-") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === "+*") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "+/") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "+,") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "+.") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "+0") {
            document.HesapMakinesi.sonuc.value = "0";
        }
    }
    else if (document.HesapMakinesi.sonuc.value === "-") {   // Çıktı ekranı için "-" ile başlangıç koşulları
        document.HesapMakinesi.sonuc.value += value;
        if (document.HesapMakinesi.sonuc.value === "--") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === "-+") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === "-*") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === "-/") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === "-,") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === "-0") {
            document.HesapMakinesi.sonuc.value = "-0.";
        }
    }
    else if (document.HesapMakinesi.sonuc.value === ".") {   // Çıktı ekranı için "." ile başlangıç koşulları
        document.HesapMakinesi.sonuc.value += value;
        if (document.HesapMakinesi.sonuc.value === "..") {
            document.HesapMakinesi.sonuc.value = ".";
        }
        else if (document.HesapMakinesi.sonuc.value === ".,") {
            document.HesapMakinesi.sonuc.value = ".";
        }
        else if (document.HesapMakinesi.sonuc.value === ".+") {
            document.HesapMakinesi.sonuc.value = "+";
        }
        else if (document.HesapMakinesi.sonuc.value === ".-") {
            document.HesapMakinesi.sonuc.value = "-";
        }
        else if (document.HesapMakinesi.sonuc.value === ".*") {
            document.HesapMakinesi.sonuc.value = ".";
        }
        else if (document.HesapMakinesi.sonuc.value === "./") {
            document.HesapMakinesi.sonuc.value = ".";
        }
    }
    else {
        document.HesapMakinesi.sonuc.value += value;  // Basılan butonların value değerleri çıktı ekranına yazdırılır
    }
}

function randomsifre() {
    var karakterler = "0123456789abcdefghijklmnoprstuvyz"
    var sifreuzunluk = document.HesapMakinesi.sonuc.value;  // Çıktı ekranında bulunan sayı şifrenin uzunluğu olur
    var sifre = "";
    for (var i = 0; i < sifreuzunluk; i++) {  // Çıktı ekranında belirlenen şifre uzunluğu kadar döngü devam eder
        var randomindex = Math.floor(Math.random() * karakterler.length)  // Rastgele tam sayılar için Math.random() ve Math.floor() metotları birlikte kullanılır
        sifre += karakterler.substring(randomindex, randomindex + 1); // karakterler.substring(randomindex, randomindex + 1) metodu ile karakterler arasından sadece belirlenen bir index alınıyor ve döngü boyunca o indexdeki eleman sırayla oluşacak şifreye ekleniyor
    }
    document.HesapMakinesi.sonuc.value = sifre;  // Döngü sonunda oluşan şifre çıktı ekranına yazdırılır
}

function tekcift() {
    if (document.HesapMakinesi.sonuc.value === "") {  // Çıktı ekranı temizken buton kullanılamaz
        document.HesapMakinesi.sonuc.value = "";
    }
    else if (document.HesapMakinesi.sonuc.value === "+") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else if (document.HesapMakinesi.sonuc.value === "-") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else if (document.HesapMakinesi.sonuc.value === ".") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        var sayi = document.HesapMakinesi.sonuc.value;  // Çıktı ekranındaki değer sayi değişkenine atanır
        if ((sayi % 2) === 0) {  // Sayi değişkeninin 2 ile bölüm sonucuna göre çıktı ekranına 0 veya 1 yazdırılır
            document.HesapMakinesi.sonuc.value = 0;
        }
        else {
            document.HesapMakinesi.sonuc.value = 1;
        }
    }
}

function cos() {
    if (document.HesapMakinesi.sonuc.value === "") {   // Çıktı ekranı temizken buton kullanılamaz
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "cos(" + document.HesapMakinesi.sonuc.value + ")=";
        document.HesapMakinesi.sonuc.value = Math.cos(document.HesapMakinesi.sonuc.value * Math.PI / 180);  // Math.cos metodu ile cosinüs işlemi
        if (document.HesapMakinesi.sonuc.value === "6.123233995736766e-17") {  // cos(90) = 6.123233995736766e-17 = 0
            document.HesapMakinesi.sonuc.value = "0";
        }
    }
}

function sin() {
    if (document.HesapMakinesi.sonuc.value === "") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "sin(" + document.HesapMakinesi.sonuc.value + ")=";
        document.HesapMakinesi.sonuc.value = Math.sin(document.HesapMakinesi.sonuc.value * Math.PI / 180);  // Math.sin metodu ile sinüs işlemi
    }
}

function mutlakdeger() {
    if (document.HesapMakinesi.sonuc.value === "") {   // Çıktı ekranı temizken buton kullanılamaz
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "|" + document.HesapMakinesi.sonuc.value + "|=";
        document.HesapMakinesi.sonuc.value = Math.abs(document.HesapMakinesi.sonuc.value);   // Math.abs metodu ile mutlak değer işlemi (Absolute value)
    }
}

function ikiussu() {
    if (document.HesapMakinesi.sonuc.value === "") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "2^" + document.HesapMakinesi.sonuc.value + "=";
        document.HesapMakinesi.sonuc.value = Math.pow(2, document.HesapMakinesi.sonuc.value);  // Math.pow metodu ile üs alma işlemi
    }
}

function onussu() {
    if (document.HesapMakinesi.sonuc.value === "") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "10^" + document.HesapMakinesi.sonuc.value + "=";
        document.HesapMakinesi.sonuc.value = Math.pow(10, document.HesapMakinesi.sonuc.value);
    }
}

function karekok() {
    if (document.HesapMakinesi.sonuc.value === "") {   // Çıktı ekranı temizken buton kullanılamaz
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "√" + document.HesapMakinesi.sonuc.value + "=";
        document.HesapMakinesi.sonuc.value = Math.pow(document.HesapMakinesi.sonuc.value, 1 / 2);
    }
}

function mod() {
    if (document.HesapMakinesi.sonuc.value === "") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = document.HesapMakinesi.sonuc.value + " mod 10 =";
        document.HesapMakinesi.sonuc.value = document.HesapMakinesi.sonuc.value % 10;  // Mod alma operatörü(%) ile mod işlemi
    }
}

function log10() {
    if (document.HesapMakinesi.sonuc.value === "") {   // Çıktı ekranı temizken buton kullanılamaz
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = "log" + document.HesapMakinesi.sonuc.value + "=";
        document.HesapMakinesi.sonuc.value = Math.log10(document.HesapMakinesi.sonuc.value);  // Math.log10 metodu ile 10 tabanında logaritma işlemi
    }
}

function esittir() {
    if (document.HesapMakinesi.sonuc.value === "") {
        document.HesapMakinesi.sonuc.value = "";
    }
    else {
        document.HesapMakinesi.islem.value = document.HesapMakinesi.sonuc.value + "=";
        document.HesapMakinesi.sonuc.value = eval(document.HesapMakinesi.sonuc.value);  // eval metodu çıktı ekranındaki button value değerlerine işlem uygular
    }
}