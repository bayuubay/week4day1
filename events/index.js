const Event = require("events");

//iniasi sebuah variable event
const eventEmitter = new Event();

//inisiasi function handler
function airMendidih(celcius){
    // console.log(celcius+ " derajat celcius maka air mendidih")
    console.log(`${celcius} derajat celcius maka air mendidih`)
}
function airHangat(celcius){
    console.log(celcius+ " derajat celcius maka air hangat")
}
function esBatu(celcius){
    console.log(celcius+ " derajat celcius maka air membeku")
}
//regist sebuah event
eventEmitter.on("mendidih",airMendidih);
eventEmitter.on("hangat",airHangat);
eventEmitter.on("esbatu",esBatu)

//trigger the events
 for(let celcius=200;celcius>=-2;celcius--){
//   if(celcius==100){
//       eventEmitter.emit("mendidih",celcius);
//   }else if(celcius==50){
//       eventEmitter.emit("hangat",celcius);
//   }else if(celcius==0){
//       eventEmitter.emit("esbatu",celcius);
//   }else{
//       console.log(celcius)
//   }
  
     switch (celcius) {
    case 100:
        eventEmitter.emit("mendidih",celcius);
        break;
    case 50:
        eventEmitter.emit("hangat",celcius);
        break;
    case 0:
        eventEmitter.emit("esbatu",celcius);
        break;
    default:
        console.log(celcius);
        break;
}

}

/**100=> mendidih
 * 50=> air hangat
 * 0=>es batu
 */