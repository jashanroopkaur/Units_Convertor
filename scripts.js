function celToFah()
{
    var x=document.getElementById("input").value;
    var y=(((x/5)*9)+32);
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Fahrenheit";
}
function fahToCel()
{
    var x=document.getElementById("input").value;
    var y=((x-32)*5)/9;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Celcius";
}
function feetToMeters()
{
    var x=document.getElementById("input").value;
    var y=x/3.2808;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Meters";
}
function metersToFeet()
{
    var x=document.getElementById("input").value;
    var y=x*3.2808;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Feet";
}
function inchesToCm()
{
    var x=document.getElementById("input").value;
    var y=x/0.39370;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Centimeters";
}
function cmToInches()
{
    var x=document.getElementById("input").value;
    var y=x*0.39370;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Inches";
}
function poundsToKg()
{
    var x=document.getElementById("input").value;
    var y=x/2.2046;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Kilograms";
}
function kgToPounds()
{
    var x=document.getElementById("input").value;
    var y=x*2.2046;
    var z=y.toFixed(2);
    document.getElementById("output").innerHTML=z+" Pounds";

}
function clearer(){
    document.getElementById("input").value="";
    document.getElementById("output").innerHTML="";
}