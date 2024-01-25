// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const distHq = 42 
    const distBlocks = Math.abs(blocks - distHq)
   return distBlocks 
}
const blocks = 50

const myDist =  distanceFromHqInBlocks(50)
console.log(`The distance is : ${myDist} blocks`)


 function distanceFromHqInFeet(blocks){
    const distInBlocks = distanceFromHqInBlocks(blocks)
    const blockInFeet = 264 
    const distInFeet = distInBlocks * blockInFeet
    return distInFeet
}  

const myDistInFeet = distanceFromHqInFeet(blocks)
console.log(`The distance is : ${myDistInFeet} feet`)

function distanceTravelledInFeet (start, destination){
    const feetPerBlock = 264;
    const distanceFeet = Math.abs(destination - start) * feetPerBlock

    return distanceFeet;
}
const totalDistance = distanceTravelledInFeet(34,38)
console.log(`Distance travelled in feet is ${totalDistance}`)

    function calculatesFarePrice( start , destination) {

     const distance = distanceTravelledInFeet(start, destination)
        if (distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            // charges 2 cents per foot when total feet travelled is between 400 and 2000
            return (distance - 400) * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
            // charges a flat rate of $25 for a distance over 2000 feet
            return 25;
        } else {
            // does not allow rides over 2500 feet
            return "cannot travel that far";
        }
        
    }

    const totalFare = calculatesFarePrice(34, 38)
    console.log(`total fare is $${totalFare}`)
    
    


