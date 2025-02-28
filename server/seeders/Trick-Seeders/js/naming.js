import models from "../models/index.js";
// const { NumberOfFlips } = models;

// if single flip remove the 'single' keyword
let ifSingleFlip = (name, flip) => {
  if (flip.numberOfFlips.numberType === "single") {
    name = name.replace("single ", "");
  }
  return name;
};

// names each trick
let naming = async (stance, flip, boardRotation, bodyVarial) => {
  let name = "";

  // add stance type to name if stance is not regular
  if (stance != "regular") {
    name = `${stance} `;
  }
  // if no board spin, flip or body varial
  if (
    boardRotation.type === "none" &&
    bodyVarial.type === "none" &&
    flip.type === "none"
  ) {
    if (stance != "nollie") {
      name += "ollie";
    }
  }

  // if only board spin
  if (
    boardRotation.type != "none" &&
    bodyVarial.type === "none" &&
    flip.type === "none"
  ) {
    name += `${boardRotation.type} ${boardRotation.degrees} pop shuvit`;
  }

  // if only body varial
  if (
    boardRotation.type === "none" &&
    bodyVarial.type != "none" &&
    flip.type === "none"
  ) {
    name += `${bodyVarial.type} ${bodyVarial.degrees} body varial`;
  }

  // if only flip
  if (
    boardRotation.type === "none" &&
    bodyVarial.type === "none" &&
    flip.type != "none"
  ) {
    name += `${flip.numberOfFlips.numberType} ${flip.type}`;
  }

  // if the board spins and the body spins
  if (
    boardRotation.type != "none" &&
    bodyVarial.type != "none" &&
    flip.type === "none"
  ) {
    // if the board and body spin the same way
    if (boardRotation.type === bodyVarial.type) {
      // if they spin the same degrees
      if (boardRotation.degrees === bodyVarial.degrees) {
        // if the stance is fakie
        if (stance === "fakie") {
          if (boardRotation.degrees === 180) {
            name = `${boardRotation.type} half cab`;
          } else if (boardRotation.degrees === 360) {
            name = `${boardRotation.type} full cab`;
          } else {
            name = `${boardRotation.type} ${boardRotation.degrees} cab`;
          }
        } else {
          name += `${boardRotation.type} ${boardRotation.degrees}`;
        }

        // if the board rotation is more than the body varial
      } else if (boardRotation.degrees === 360 && bodyVarial.degrees === 180) {
        name += `${boardRotation.type} big spin`;
      } else if (boardRotation.degrees === 540 && bodyVarial.degrees === 180) {
        name += `${boardRotation.type} bigger spin`;
      } else if (boardRotation.degrees === 540 && bodyVarial.degrees === 360) {
        name += `${boardRotation.type} gazelle spin`;
      } else if (bodyVarial.degrees === 360 && boardRotation.degrees === 180) {
        name += `${boardRotation.type} anti big spin`;
      } else if (bodyVarial.degrees === 540 && boardRotation.degrees === 180) {
        name += `${boardRotation.type} anti bigger spin`;
      } else if (bodyVarial.degrees === 540 && boardRotation.degrees === 360) {
        name += `${boardRotation.type} anti gazelle spin`;
      } else {
        name += `${bodyVarial.type} ${bodyVarial.degrees} body varial ${boardRotation.type} ${boardRotation.degrees}`;
      }
    } else {
      // every other alternative for body and board spin
      name += `${bodyVarial.type} ${bodyVarial.degrees} body varial ${boardRotation.type} ${boardRotation.degrees}`;
    }
  }

  // if the board spins and board flips
  if (
    boardRotation.type != "none" &&
    flip.type != "none" &&
    bodyVarial.type === "none"
  ) {
    // if board spin and board flip are cohesive
    if (
      (boardRotation.type === "backside" && flip.type === "kickflip") ||
      (boardRotation.type === "frontside" && flip.type === "heelflip")
    ) {
      // if the board spins 180
      if (boardRotation.degrees === 180) {
        // if the board flips double
        if (flip.numberOfFlips.numberType === "double" && flip.type === "kickflip") {
          name += "nightmare flip";
        } else {
          name += `${flip.numberOfFlips.numberType} varial ${flip.type}`;
        }

        // if the board spins 360
      } else if (boardRotation.degrees === 360) {
        // check the board flip type
        if (flip.type === "kickflip") {
          name += `${flip.numberOfFlips.numberType} tre flip`;
        } else if (flip.type === "heelflip") {
          name += `${flip.numberOfFlips.numberType} laser flip`;
        }

        // all other un unique names for coheisve board spin and board flip
      } else {
        // check board flip type
        if (flip.type === "kickflip") {
          name += `${boardRotation.degrees} ${flip.numberOfFlips.numberType} flip`;
        } else {
          name += `${boardRotation.degrees} ${flip.numberOfFlips.numberType} ${flip.type}`;
        }
      }

      // if board rotation and board flip are not cohesive
    } else if (
      (boardRotation.type === "backside" && flip.type === "heelflip") ||
      (boardRotation.type === "frontside" && flip.type === "kickflip")
    ) {
      // check board flip type
      if (flip.type === "kickflip") {
        name += `${boardRotation.degrees} ${flip.numberOfFlips.numberType} hard flip`;
      } else if (flip.type === "heelflip") {
        name += `${boardRotation.degrees} ${flip.numberOfFlips.numberType} inward heelflip`;
      }

      // check if 180
      if (boardRotation.degrees === 180) {
        name = name.replace("180 ", "");
      }

      // all other un unique names for uncohesive board spin and board flip
    } else {
      name += `${boardRotation.type} ${boardRotation.degrees} ${flip.numberOfFlips.numberType} ${flip.type}`;
    }
  }

  // if the body spins and board flips
  if (
    boardRotation.type === "none" &&
    bodyVarial.type != "none" &&
    flip.type != "none"
  ) {
    name += `${bodyVarial.type} ${bodyVarial.degrees} body varial ${flip.numberOfFlips.numberType} ${flip.type}`;
  }

  // if the board spins, body spins, and board flips
  if (
    boardRotation.type != "none" &&
    bodyVarial.type != "none" &&
    flip.type != "none"
  ) {
    // if board rotation and body varial are the same type
    if (boardRotation.type === bodyVarial.type) {
      // if board degrees and body degrees are the same
      if (boardRotation.degrees === bodyVarial.degrees) {
        name += `${boardRotation.type} ${boardRotation.degrees} ${flip.numberOfFlips.numberType} ${flip.type}`;

        // if the stance is fakie
        if (stance === "fakie") {
          if (boardRotation.degrees === 180) {
            name = `${boardRotation.type} half cab ${flip.type}`;
          } else if (boardRotation.degrees === 360) {
            name = `${boardRotation.type} full cab ${flip.type}`;
          } else {
            name = `${boardRotation.type} ${boardRotation.degrees} cab ${flip.type}`;
          }
        }

        // if board rotation is greater than body varial
      } else if (boardRotation.degrees === 360 && bodyVarial.degrees === 180) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} big flip`;
      } else if (boardRotation.degrees === 540 && bodyVarial.degrees === 180) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} bigger flip`;
      } else if (boardRotation.degrees === 540 && bodyVarial.degrees === 360) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} gazelle flip`;

        // if body varial is more than board rotation
      } else if (bodyVarial.degrees === 360 && boardRotation.degrees === 180) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} anti big flip`;
      } else if (bodyVarial.degrees === 540 && boardRotation.degrees === 180) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} anti bigger flip`;
      } else if (bodyVarial.degrees === 540 && boardRotation.degrees === 360) {
        name += `${boardRotation.type} ${flip.numberOfFlips.numberType} anti gazelle flip`;
      } else {
        // all other un unque named variations
        name += `${bodyVarial.type} ${bodyVarial.degrees} body varial ${boardRotation.type} ${boardRotation.degrees} ${flip.numberOfFlips.numberType} ${flip.type}`;
      }
    } else {
      name += `${bodyVarial.type} ${bodyVarial.degrees} body varial ${boardRotation.type} ${boardRotation.degrees} ${flip.numberOfFlips.numberType} ${flip.type}`;
    }

    if (
      flip.type === "heelflip" &&
      boardRotation.degrees != bodyVarial.degrees
    ) {
      name = name.replace(" flip", " heel");
    }
  }

  // check if single flip
  name = ifSingleFlip(name, flip);

  return name;
};

export default naming;
