"use strict"

function getRandom (maxCust, minCust) {
    return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}


const sea = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCSales: 6.3,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust() {
        //console.log(this.maxCust);
        //console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies() {
        for (let i = 0; i < this.opHrs.length; i++) {
            //console.log("seatle avg cookies/sale", this.avgCSales);
            //console.log("seatle avg customer/hour", this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
    }

 
}

    let seaDArray = document.getElementById("seaData")
    for (let i = 0; i < sea.opHrs.length; i++) {
        let seaVar = document.createElement("li");
        seaVar.innerHTML = `${sea.opHrs[i]}: ${sea.getCookies()[i]} cookies`;
        seaDArray.append(seaVar);
    }

const tok = {
    location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCSales: 1.2,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust: function() {
        //console.log(this.maxCust);
        //console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies() {
        for (let i = 0; i < this.opHrs.length; i++) {
           // console.log(`${this.location} avg cookies/sale`, this.avgCSales);
            //console.log(`${this.location} avg customer/hour`, this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
    } 
}

    let tokDArray = document.getElementById("tokData")
    for (let i = 0; i < tok.opHrs.length; i++) {
        let tokVar = document.createElement("li");
        tokVar.innerHTML = `${tok.opHrs[i]}: ${tok.getCookies()[i]} cookies`;
        tokDArray.append(tokVar);
    }


const dub = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCSales: 3.7,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust() {
        //console.log(this.maxCust);
        //console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies() {
        for (let i = 0; i < this.opHrs.length; i++) {
            //console.log(`${this.location} avg cookies/sale`, this.avgCSales);
            //console.log(`${this.location} avg customer/hour`, this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
    } 
}

    let dubDArray = document.getElementById("dubData")
    for (let i = 0; i < dub.opHrs.length; i++) {
        let dubVar = document.createElement("li");
        dubVar.innerHTML = `${dub.opHrs[i]}: ${dub.getCookies()[i]} cookies`;
        dubDArray.append(dubVar);
    }



const par = {
    location: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCSales: 2.3,    avgCSales: 3.7,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust() {
        //console.log(this.maxCust);
        //console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies() {
        for (let i = 0; i < this.opHrs.length; i++) {
            //console.log(`${this.location} avg cookies/sale`, this.avgCSales);
            //console.log(`${this.location} avg customer/hour`, this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
    },
    totalCSales() {
        let sum = 0;
        for (let s = 0; s < this.opHrs.length; s++){
        sum += this.getCookies()[s];
        }
        return sum
    }
     
}

    let parDArray = document.getElementById("parData")
    for (let i = 0; i < par.opHrs.length; i++) {
        let parVar = document.createElement("li");
        parVar.innerHTML = `${par.opHrs[i]}: ${par.getCookies()[i]} cookies`;
        parDArray.append(parVar);
    }


const lim = {
    location: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCSales: 4.6,
    avgCSales: 3.7,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust() {
        //console.log(this.maxCust);
        //console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies() {
        for (let i = 0; i < this.opHrs.length; i++) {
            //console.log(`${this.location} avg cookies/sale`, this.avgCSales);
            //console.log(`${this.location} avg customer/hour`, this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
    },
    totalCSales() {
        let sum = 0;
        for (let s = 0; s < this.opHrs.length; s++){
        sum += this.getCookies()[s];
        }
        return sum
    },
    
    
}

    let limDArray = document.getElementById("limData")
    for (let i = 0; i < lim.opHrs.length; i++) {
        let limVar = document.createElement("li");
        limVar.innerHTML = `${lim.opHrs[i]}: ${lim.getCookies()[i]} cookies`;
        limDArray.append(limVar);
        //let limSum = document.createElement("li");
        //limSum.innerHTML = `Total: ${lim.totalCSales()} cookies`;
        //limSum.appendChild(".limData");
        //limSum.append("#limData")
    }
    
    let limSum = document.createElement("li");
    limSum.innerHTML = `Total: ${lim.totalCSales()} cookies`;
    limDArray.append(limSum);
