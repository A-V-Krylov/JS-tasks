
function compareObj(Obj1, Obj2) {

    if (Obj1 === Obj2) return true;

    if (Obj1 == null || typeof (Obj1) != "object" || Obj2 == null || typeof (Obj2) != "object")
        return false;

    let propertiesObj1 = 0;
    let propertiesObj2 = 0;

    for (property in Obj1) propertiesObj1 += 1;
    for (property in Obj2) {
        propertiesObj2 += 1;
        if (!(property in Obj1) || !compareObj(Obj1[property], Obj2[property])) {
            return false;
        }
    }
    return propertiesObj1 == propertiesObj2;
}

console.log(compareObj({}, {})); // true
console.log(compareObj({ a: 1 },{ b: 1 })); // false
