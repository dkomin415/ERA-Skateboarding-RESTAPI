import checkProp from '../../utils/checkProp.js';
import Difficulty from '../../models/Difficulty.js';

// sorts trick by property into object with trickType class
let sortByTrickType = (obj, newObj, prop) => {
    if (checkProp(newObj, prop)) {
        newObj[prop].list.push(obj);
    } else {
        newObj[prop] = { };
        newObj[prop].list = [];
        newObj[prop].list.push(obj);
    }
    return newObj;
}

// sorts trick by difficulty levels and adds properties to them
let sortForDifficulty = (obj, newObj, prop) => {
    if(checkProp(newObj, prop)) {
        newObj[prop].list.push(obj);
    } else{ 
        newObj[prop] = new Difficulty;
        newObj[prop].list = [];
        newObj[prop].types = {};
        newObj[prop].list.push(obj);
    }
    return newObj;
}

export default { sortByTrickType, sortForDifficulty };