function findMatching(driverArr, name){
   return driverArr.filter(x => x.toUpperCase().includes(name.toUpperCase()))
   
}

function fuzzyMatch(driverArr, name){
    return driverArr.filter(x => x.startsWith(name))
}

function matchName(driverArr, name){
    return driverArr.filter(x => x.name.toUpperCase().includes(name.toUpperCase()))
}