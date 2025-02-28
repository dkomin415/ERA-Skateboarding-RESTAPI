// cycles each property into unique variations
let cycle = (type, typeName, property, propertyName) => {
    let returnedObj = [];
    let count = 0;

    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < property.length; j++) {
            let obj = { };
            obj = {
                type: type[i]
            };

            obj[propertyName] = property[j];
            
            if (obj.type === "none") {
                i += 1;
                j = 0;
            } else if (
                obj[propertyName] === 0 ||
                obj[propertyName].numberType === "none"
            ) {
                j++;
                obj[propertyName] = property[j];
            }
            returnedObj[[typeName] + [count]] = obj;
            count++;
        }
    }
    return returnedObj;
};

export default cycle;