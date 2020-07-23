var temperature = 10;
var raining  = true;
if (temperature < 0) {
  console.log("Dint'freeze out there!");
}
  else if (temperature < 15 && raining === true){
    console.log("Dont forget jacket!");
}
  else if (temperature <25){
    console.log("Have anice day :)");
}
  else{
    console.log("keep cool today!");
}
