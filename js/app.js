"use strict"

let hoursOOp = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

function getRandom(maxCust, minCust) {
  return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}


function headerRender() {

  let headerHours = document.createElement("tr");
  let hrsFiller = document.createElement("th");
  hrsFiller.innerHTML = "Operating Hours";
  headerHours.append(hrsFiller);

  for (let i = 0; i < hoursOOp.length; i++) {
    let hrsData = document.createElement("th");
    hrsData.innerHTML = `${hoursOOp[i]}`;
    headerHours.append(hrsData);

  }

  document.getElementById("operationHours").append(headerHours);
  let headerTotal = document.createElement("th");
  headerTotal.innerHTML = "Daily Totals";
  headerHours.append(headerTotal);

}

headerRender();




function cookieStandLocation(location, min, max, avg, hours) {
  let stand = {};
  stand.location = location;
  stand.minCust = min;
  stand.maxCust = max;
  stand.avgCSales = avg;
  stand.opHrs = hours;
  stand.hrlyCookies = [];

  stand.hrlyCust = function () {
    return getRandom(this.maxCust, this.minCust);
  }

  stand.getCookies = function getCookies() {
    for (let i = 0; i < hoursOOp.length; i++) {
      this.hrlyCookies.push(Math.ceil(this.avgCSales * this.hrlyCust()));
    }
    return this.hrlyCookies;
  }

  stand.dailySales = function dailySales() {
    let sum = 0;
    for (let s = 0; s < hoursOOp.length; s++) {
      sum += this.getCookies()[s];
    }
    return sum;
  }



  //loop through sales per hour, add them up then render 

  stand.render = function () {
    let trCookieStands = document.createElement("tr");
    let localeTD = document.createElement("td");
    localeTD.innerHTML = this.location;
    trCookieStands.append(localeTD);

    for (let c = 0; c < this.opHrs.length; c++) {
      let tdCookies = document.createElement("td");

      tdCookies.innerHTML = `${this.hrlyCookies[c]} cookies`;
      document.getElementById("salesData")
      trCookieStands.append(tdCookies);
    }

    document.getElementById("salesData").append(trCookieStands);
    let dailySum = document.createElement("td");
    dailySum.innerHTML = `${this.dailySales()} cookies`;
    trCookieStands.append(dailySum);


  }

  return stand;


}


const sea = new cookieStandLocation("Seattle", 23, 65, 6.3, hoursOOp, []);
sea.hrlyCust();
sea.getCookies();
sea.dailySales();
sea.render();

const tok = cookieStandLocation("Tokyo", 3, 24, 1.2, hoursOOp, []);
tok.hrlyCust();
tok.getCookies();
tok.dailySales();
tok.render();

const dub = cookieStandLocation("Dubai", 11, 38, 3.7, hoursOOp, []);
dub.hrlyCust();
dub.getCookies();
dub.dailySales();
dub.render();

const par = cookieStandLocation("Paris", 20, 38, 2.3, hoursOOp, []);
par.hrlyCust();
par.getCookies();
par.dailySales();
par.render();

const lim = cookieStandLocation("Lima", 2, 16, 4.6, hoursOOp, []);
lim.hrlyCust();
lim.getCookies();
lim.dailySales();
lim.render();

let cookieStandObjects = [sea, tok, dub, par, lim];


//new location from form
const locBuild = document.getElementById("locAdd");

locBuild.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent default submission behavior

  const location = document.getElementById("addedLoc").value;
  const minCust = parseInt(document.getElementById("addedMinCust").value);
  const maxCust = parseInt(document.getElementById("addedMaxCust").value);
  const avgCSales = parseInt(document.getElementById("addedAvgCSales").value);

  const newLocation = cookieStandLocation(location, minCust, maxCust, avgCSales, hoursOOp, []);
  newLocation.hrlyCust();
  newLocation.getCookies();
  newLocation.dailySales();
  newLocation.render();

  cookieStandObjects.push(newLocation);

  renderFooter();

  console.log(newLocation);
});

//iterates over the hrlyCookies arrays of each object and sums the values at each index position
function getTotalCPH(objArr) {
  let totalCPH = new Array(objArr[0].opHrs.length).fill(0);
  for (let l = 0; l < objArr.length; l++) {
    let cookiesArr = objArr[l].hrlyCookies;
    for (let h = 0; h < hoursOOp.length; h++) {
      totalCPH[h] += cookiesArr[h];
    }
  }

  return totalCPH;
}

//call total cookies per hour function

function renderFooter() {
  let salesFoot = document.querySelector("#totalsByHour");
  salesFoot.replaceChildren();
  let totalCPH = getTotalCPH(cookieStandObjects);
  let hrlyTotals = document.createElement("tr");
  let totals = document.createElement("th");
  totals.innerHTML = "Hourly Totals";
  hrlyTotals.insertBefore(totals, hrlyTotals.firstChild);

  for (let t = 0; t < totalCPH.length; t++) {
    let CPH = document.createElement("th");
    CPH.innerHTML = `${totalCPH[t]} cookies`;
    hrlyTotals.append(CPH);
  }

  let totalsTotal = 0

  for (let r = 0; r < totalCPH.length; r++) {
    totalsTotal += totalCPH[r];
  }

  let totalTotals = document.createElement("th");
  totalTotals.innerHTML = `${totalsTotal} cookies`;
  hrlyTotals.append(totalTotals);
  salesFoot.append(hrlyTotals);

  console.log(totalCPH);

}

renderFooter();



/*function getTotalCookiesByHour(hours) {
    let totalCookiesByHour = [];
    for (let i = 0; i < hours.length; i++) {
      let sum = 0;
      for (let j = 0; j < cookieStands.length; j++) {
        sum += cookieStands[j].hrlyCookies[i];
      }
      totalCookiesByHour.push(sum);
    }
    return totalCookiesByHour;
  }
  
  let totalCookies = getTotalCookiesByHour(hoursOOp);
  
  console.log(totalCookies);*/