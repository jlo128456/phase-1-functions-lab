// Code your solution in this file!
function distanceFromHqInBlocks(someValue)
{
    const Hq = 42;

    const distanceInBlock = Math.abs(someValue - Hq);
    return distanceInBlock;
}
function distanceFromHqInFeet(distanceInBlock)
{
    return distanceFromHqInBlocks(distanceInBlock) * 264;
}
function distanceTravelledInFeet(start, destination)
{
    if ( start < destination)
        {
          return (destination - start) *264
        }
    else 
       {
         return (start - destination) *264
       }    
}
function calculatesFarePrice(start, destination)
{
    const distance = Math.abs((start - destination) *264); 
    let fare = 0;
    switch (true) {
        case (distance <= 400):
            return 0;
        case (distance >= 400 && distance <= 2000):
            return fare = (distance - 400) * 0.02;
        case  (distance >= 2000 && distance <= 2500 ):
            return fare = 25;
        case (distance > 2500):
            return fare ="cannot travel that far";         
        default:
            return fare;
    }
       
}          