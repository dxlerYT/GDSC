class garage{
    carPlateNumber
    sensor
    constructor(sensor, carPlateNumber){
        this.sensor = sensor
        this.carPlateNumber = carPlateNumber
    }
    

    //enter garage
    enterGarage = ()=>{
        if (this.sensor === false) {
            console.log(`car with ${this.carPlateNumber} number can park here`)
        } else {
            console.log("there is a car already parked here")
            this.sensor=true
        }
    }
    //leave garage
    leaveGarage = ()=>{
        if (this.sensor === false) {
            console.log("the garage is empty")
        } else {
            console.log(`Car with ${this.carPlateNumber} plat number is leaving the garage`)
        }
    }
}
export default garage
