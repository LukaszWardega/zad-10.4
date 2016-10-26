//zadanie 10.4

//konstrukcja

function Telefon(marka, kolor, cena) {
    this.marka = marka;
    this.kolor = kolor;
    this.cena = cena;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".")
}

var iPhone6S = new Telefon("Apple", "srebny", 2250);
var SamsungGalaxy6S = new Telefon("Samsung", "czarny", 2000);
var OnePlusOne = new Telefon("One Plus", "czarny", 1000);

iPhone6S.prototype.replaceableBattery = "no";