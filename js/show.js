$(document).ready(function(){

var man = document.getElementById("man");

$(man).click(function(){


$("#series1").val($("#one11").text());
$("#name1").val($("#one22").text());
$("#address1").val($("#one33").text());
$("#pay1").val($("#one44").text());
$("#max1").val($("#one55").text());
$("#phone1").val($("#one66").text());


});



})

var data2 = document.getElementById("data2");
var series1 = document.getElementById("series1");
var name1 = document.getElementById("name1");
var address1 = document.getElementById("address1");
var pay1 = document.getElementById("pay1");
var max1 = document.getElementById("max1");
var phone1 = document.getElementById("phone1");
var notes1 = document.getElementById("notes1");

data2.onclick = function(){

series1.value = document.getElementById("one11").innerText;
name1.value = document.getElementById("one22").innerText;
address1.value = document.getElementById("addres").innerText;
pay1.value = document.getElementById("one33").innerText;
max1.value = document.getElementById("one44").innerText;
phone1.value = document.getElementById("one55").innerText;
notes1.value = document.getElementById("one66").innerText;

}