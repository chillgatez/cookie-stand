"use strict"

function getRandom (maxCust, minCust) {
    return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}

const Sea = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCSales: 6.3,
    opHrs: ["06:00", "07:00", "08:00", "09:00", "10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    hrlyCust: function() {
        console.log(this.maxCust);
        console.log(this.minCust);
        return getRandom (this.maxCust, this.minCust);
    },
    hrlyCookies: [],
    getCookies: function () {
        for (let i = 0; i < this.opHrs.length; i++) {
            console.log("seatle avg cookies/sale", this.avgCSales);
            console.log("seatle avg customer/hour", this.hrlyCust());
            this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
        }
        return this.hrlyCookies;
        
    }
    
}

const Tok = {
    Location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCSales: 1.2,
}

const Dub = {
    Location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCSales: 3.7,
}

const Par = {
    Location: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCSales: 2.3,
}

const Lim = {
    Location: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCSales: 4.6,
}