
var szam = 2;

export function udvozles(nev){
    console.log("helló " + nev + " programozni jó!");
}

export function elagazas1(){
    if (szam === 2){
        console.log("A számunk = " + szam);
        console.log(typeof szam);
    }
    else{
        console.log("A számunk nem = " + szam);
        console.log(typeof szam);
    }

}


/* a szám változóról döntsük el, hogy ps-e? */
/* azért 3 db = mert a szám típusát is és az értéket is nézi/ellenőrzi, 
-> idézőjelben számot átalakítja számmá, de így a számnak a típusát is nézi */


/* itt mindegy mikor definiálod a functionoket, mindegy hogy elötte vagy mögötte hívom meg */



export function elagazas2(){
    if(szam===0){
        console.log("A szám 0.");
    }
    else if(szam%2===0){
        console.log(szam + "páros");
    }
    else{
        console.log(szam + "paratlan");
    }    
}



export function forCiklus(){
    /* írjuk ki a consolera 10x az alábbi üzenetet */

    for (let index = 0; index < 10; index++) {
        console.log(`A(z) ${index+1}. üzenet`);
    }

    return
}


export function whileCiklus(){
    /* while ciklussal */

    let index = 0;
    while(index < 10){
        console.log("Ez az első üzenet" + index);
        index++;
    }
}

