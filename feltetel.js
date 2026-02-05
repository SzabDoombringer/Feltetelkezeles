// -30 és 40 között van e?
//let szam = prompt("kérlek adj meg egy számot!")

//if (szam > -30 && szam < 40) {
//    console.log("A szám -30 és 40 között van")
//}
//else{
//    console.log("a szám ninics -30 és 40 között")
//}

//// 2 szám közül a nagyobbik
//
//let szam1 = parseFloat(prompt("Adj meg egy számot"))
//let szam2 = parseFloat(prompt("Adj meg egy számot"))

//if (szam1 > szam2){
//    console.log(`A nagyobb szám a ${szam1}`)
//} else if (szam2 > szam1) {
//    console.log(`A nagyobb szám a ${szam2}`)
//} else{
//    console.log(`A két szám egyenlő ${szam1}`)
//}

//3. Egy beolvasott X számnak írjuk ki az előjelét (pozitív, negatív vagy nulla)!
//hf

//4. Kérjünk be egy számot és döntsük el, hogy egész szám-e! Csak ebben az esetben írassuk ki

let szam3 = parseFloat(prompt("kérlek adj meg egy számot"))

if (Number.isInteger(szam3)) {
    console.log("A szám egész" + szam3)
}

//5. A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két szám 3 és -6.12, akkor az eredmény: 3 > -6.12.
// hf

//6. Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18),
//dolgozó (19-60), illetve nyugdíjas-e az illető!

let eletkor = parseInt(prompt("kérlek add meg az életkorod"))

if(eletkor >= 1 && eletkor <= 6){
    console.log("Gyerek")
} else if (eletkor >= 7 && eletkor <= 18){
    console.log("iskolás")
} else if (eletkor >= 19 && eletkor <= 60){
    console.log("dolgozó")
}else if (eletkor >= 60 && eletkor <= 125){
    console.log("nyugdíjas")
}else{
    console.log("Érvénytelen életkor")
}

//7. Fej vagy írás? A játék célja, hogy a játékos eltalálja, hogy a feldobott pénz fej vagy írás
//lesz. A játékos adjon tippet (fej, írás), majd a gép dobjon fel egy pénzérmét és írja ki,
//hogy a játékos nyert vagy vesztett.

let tipp = prompt("Kérlek add meg a tipped (fej / írás)")
let dobas = Math.random()
let dobasertek = ""

if (dobas < 0.5) {
    dobasertek = "Fej";
} else {
    dobasertek = "Íras"
}

if (tipp.toLowerCase == dobasertek) {
    console.log("Eltaláltad!");
}else {
    console.log("Nem találtad el!" +dobasertek)
}

//8. A gép dobjon dobókockával, majd két játékos tippelje meg a dobás eredményét. Az a
//játékos nyer, akinek a tippje közelebb van a kockadobás eredményéhez.


//9. Adott egy pont, melynek bekérjük a koordinátáit. Határozzuk meg, melyik
//síknegyedben van!


let x = prompt("Add meg az 'x' koordinátát: ")

let y = prompt("Add meg az 'y' koordinatát: ")

if (x > 0 && y > 0){
    console.log("Első")
}else if(x < 0 && y > 0){
    console.log("Második")
}else if(x < 0 && y < 0){
    console.log("Harmadik")
}else if(x > 0 && y < 0){
    console.log("Negyedik")
}else if(x = 0 && y == 0){
    console.log("Origo")
}

let evszam = 100
let szokEv = false;

if (evszam % 400 === 0){
    szokEv = true
} else if( evszam % 100 === 0 ){
    szokEv = false
} else if (evszam % 4 === 0){
    szokEv = true
}

if (szokEv) {
    console.log("Ez az évszám szökőév: " + evszam);
} else {
    console.log("Ez az évszám NEM szökőév: " + evszam);
}
    