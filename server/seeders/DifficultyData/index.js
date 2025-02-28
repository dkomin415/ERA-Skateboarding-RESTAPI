import namingTypes from '../TrickData/helpers/namingTypes.js';

let difficulty = (lists) => {
    let count;

   // itterates through levels in difficulty
    for (levels in difficulty){
        count = levels;

        // create and define each level in difficulty
        lists.difficulty.levels["level_" + count] = {
            "list": [],
            "types":{}
        };
        
        // itterates through tricks in levels 
        for(param in difficulty[levels].list){
            namingTypes(difficulty[levels].list[param], lists.difficulty.levels["level_" + count].types);

            // fill lists.difficulty.level_[count].list with each list of the corresponding difficulty
            lists.difficulty.levels["level_" + count].list.push({"name": difficulty[levels].list[param].name, "trick_id": difficulty[levels].list[param].trick_id, "expWorth": difficulty[levels].list[param].exp});
        }
    }
    return (lists);
}

export default difficulty;