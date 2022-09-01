// Code your solution in this file!
const returnFirstTwoDrivers= ()=>{
    const driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return (driver.slice(0 ,2));
}
    const returnLastTwoDrivers = ()=>{
        const driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
        return (driver.slice(-2));
}
    const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
      
    const createFareMultiplier =()=>{
        return (d)=>{
            return (d * d);
        }
}
    const fareDoubler =(fare) => {
        return fare*2;
}
    const fareTripler = (fare) =>{
        return fare * 3;
}
     const selectDifferentDrivers = (arrayOfDrivers,returnLastTwoDrivers) => {
        arrayOfDrivers =returnLastTwoDrivers();
        return arrayOfDrivers;
}