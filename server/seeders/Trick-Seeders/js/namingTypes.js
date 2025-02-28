import sortByTrickType from './sort.js';

// naming album trickTypes
let namingTypes = (obj, lists) => {
    
    let nameId = {
        "name": obj.name,
        "trick_id": obj.trick_id,
    }

    let prop;
    
    // sorting ollies
    if(obj.boardRotation.type === "none" && obj.bodyVarial.type === "none" && obj.flip.type === "none") {
        prop = "ollies"
    }

    // sorting body varials
    if(obj.boardRotation.type === "none" && obj.bodyVarial.type != "none" && obj.flip.type === "none") {
        prop = "body varials";
    }

    // sorting pop shuv its
    if(obj.boardRotation.type != "none" && obj.bodyVarial.type === "none" && obj.flip.type === "none"){
        prop = "pop shuv its";
    }

    if(obj.boardRotation.type === "none" && obj.bodyVarial.type === "none" && obj.flip.type != "none"){
        if(obj.flip.type === "kickflip"){
            prop = "kickflips";
        } else {
            prop = "heelflips";
        }
    }
    
    if(obj.boardRotation.type === "none" && obj.bodyVarial.type != "none" && obj.flip.type != "none"){
        prop = "body varial flips";
    }
    
    if(obj.boardRotation.type != "none" && obj.bodyVarial.type != "none" && obj.flip.type === "none"){
        if(obj.boardRotation.type === obj.bodyVarial.type){
            if(obj.boardRotation.degrees === obj.bodyVarial.degrees){
                prop = "180's and more";
            } else if(obj.boardRotation.degrees > obj.bodyVarial.degrees){
                prop = "big spins and more";
            } else if(obj.boardRotation.degrees < obj.bodyVarial.degrees) {
                prop = "anti big spins and more";
            }
        } else if(obj.boardRotation.type != obj.bodyVarial.type){
            prop = "body varial 180's and more";
        }

    }

    if(obj.boardRotation.type != "none" && obj.bodyVarial.type === "none" && obj.flip.type != "none") {
        if(obj.boardRotation.type === "backside" && obj.flip.type === "kickflip" || obj.boardRotation.type === "frontside" && obj.flip.type === "heelflip") {
            if(obj.boardRotation.degrees === 180){
                if(obj.flip.type === "kickflip") {
                    prop = "varial kickflips";
                } else {
                    prop = "varial heelflips";
                }
            } else {
                if(obj.flip.type === "kickflip") {
                    prop = "tre flips and more";
                } else {
                    prop = "laser flips and more";
                }
            }
        } else if(obj.boardRotation.type === "frontside" && obj.flip.type === "kickflip" || obj.boardRotation.type === "backside" && obj.flip.type === "heelflip"){
            if(obj.flip.type === "kickflip"){
                prop = "hardflips";
            } else {
                prop = "inward heelflips";
            }
        }
    }

    if(obj.boardRotation.type != "none" && obj.bodyVarial.type != "none" && obj.flip.type != "none"){
        if(obj.boardRotation.type === obj.bodyVarial.type){
            if(obj.boardRotation.degrees === obj.bodyVarial.degrees){
                if(obj.flip.type === "kickflip"){
                    prop = "180 kickflips and more";
                } else {
                    prop = "180 heelflips and more";
                }
            } else if(obj.boardRotation.degrees > obj.bodyVarial.degrees){
                if(obj.flip.type === "kickflip"){
                    prop = "big flips and more";
                } else {
                    prop = "big heels and more";
                }
            } else if(obj.boardRotation.degrees < obj.bodyVarial.degrees){
                if(obj.flip.type === "kickflip"){
                    prop = "anti big flips and more";
                } else {
                    prop = "anti big heels and more";
                }
            }
        } else if(obj.boardRotation.type != obj.bodyVarial.type) {
            prop = "other tricks";
        }
    }
        
    lists = sortByTrickType(nameId, lists, prop);

    return lists;
}

export default namingTypes;