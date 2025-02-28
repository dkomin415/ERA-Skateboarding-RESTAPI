
let trickExp = (difficulty) => {

    let exp = 5;
    for(let i = 1; i < difficulty; i++){
        exp = exp * 2;
    }

    return exp;
}

export default trickExp;