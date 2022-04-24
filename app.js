'use strict'

var slider = document.getElementById("tipPercent");
var total = document.getElementById("totalBill");
var tip = document.getElementById("tipAmount");
var all = document.getElementById("totalAmount");
var done = document.getElementById("enter");
var done2 = document.getElementById("enter2");
var curr = document.getElementById("currentTip");

curr.innerHTML = slider.value + "%";

slider.oninput = function() {
    curr.innerHTML = this.value + "%";
    var temp = (this.value / 100) * total.value;
    tip.innerHTML = "$" + Math.round(temp * 100) / 100;
    all.innerHTML = "$" + Math.round((Number(temp) + Number(total.value)) * 100) / 100;
}

done.addEventListener('click', function() {
    event.preventDefault();
    var temp = (slider.value / 100) * total.value;
    tip.innerHTML = "$" + Math.round(temp * 100) / 100;
    all.innerHTML = "$" + Math.round((Number(temp) + Number(total.value)) * 100) / 100;
});
