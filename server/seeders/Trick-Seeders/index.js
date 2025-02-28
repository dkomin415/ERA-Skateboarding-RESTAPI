import models from './models/index.js';
import functs from './js/index.js';

const { TrickData, Flip, NumberOfFlips, BoardRotation, BodyVarial } = models;
const { cycle, findDifficulty, naming, trickExp } = functs;

//seed database
const seedTricks = async () => {
     // all properties of skate tricks
     let stancesData = ["regular", "switch", "nollie", "fakie"];
     let rotationTypeData = ["none", "frontside", "backside"];
     let degreesData = [0, 180, 360, 540, 720];
     let flipTypeData = ["none", "kickflip", "heelflip"];
     let numberOfFlipsData = [
         { numberType: "none", number: 0 },
         { numberType: "single", number: 1 },
         { numberType: "double", number: 2 },
         { numberType: "triple", number: 3 },
         { numberType: "quadruple", number: 4 }
     ];
    
    //  await NumberOfFlips.collection.drop();
    //  await NumberOfFlips.collection.insertMany(numberOfFlipsData);

    //  let numberOfFlips_id = [];
    // // if there is a flip add a plus 1 
    // for await (let i of NumberOfFlips.find()){
    //     numberOfFlips_id.push(i._id);
    //     await i.save();
    // }
    
    // creates unique variations of property values
    let boardRotationData = cycle(rotationTypeData, "boardRotation", degreesData, "degrees");
    let bodyVarialData = cycle(rotationTypeData,"bodyVarial", degreesData, "degrees");
    let flipData = cycle(flipTypeData,"flip", numberOfFlipsData, "numberOfFlips");  
     
    //  await BoardRotation.collection.drop();
    //  await BodyVarial.collection.drop();
    //  await Flip.collection.drop();

    //  await BoardRotation.collection.insertMany(boardRotationData);
    //  await BodyVarial.collection.insertMany(bodyVarialData);
    //  await Flip.collection.insertMany(flipData);
         
     // creates unique tricks iterating through each variation
     let trickList = [];
     
    for (let i = 0; i < stancesData.length; i++) {
        for (let j in flipData) {
            for (let k in boardRotationData) {
                for (let l in bodyVarialData) {
                   let trick = {};
                //    const m = await NumberOfFlips.findOne( { _id: j.numberOfFlips_id } );

                        // console.log(j.numberOfFlips);
                       trick.name = await naming(stancesData[i], flipData[j], boardRotationData[k], bodyVarialData[l]);                        
                       trick.difficulty = await findDifficulty(stancesData[i], flipData[j], boardRotationData[k], bodyVarialData[l]);
                       trick.exp = trickExp(trick.difficulty);

                       trick.stance = stancesData[i];
                       trick.flip = flipData[j];
                       trick.boardRotation = boardRotationData[k];
                       trick.bodyVarial = bodyVarialData[l];

                       trickList.push(trick);
                    //    await m.save();
                    //    await j.save();
                    //    await k.save();
                    //    await l.save();
                    //    console.log(trick);
               }
            }
        }
    }

    // drop model collection 
    await TrickData.collection.drop(); 
    // seed tricks model
    await TrickData.collection.insertMany(trickList);

}



export default seedTricks;