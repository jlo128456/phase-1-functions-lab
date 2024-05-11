// Code your solution in this file!
function distanceFromHqInBlocks(someValue)
{
    const Hq = 42;

    const distanceInBlock = Math.abs(someValue - Hq);
        return distanceInBlock;
}
function distanceFromHqInFeet()
{
    const blocksFromHq = distanceFromHqInBlocks(someValue);
    const blockLengthFeet = 264;
    const distanceFromHqInFeet = blockLengthFeet * blocksFromHq
    return distanceFromHqInFeet;



}