// determines difficulty of ammount of degrees spun
let divideDegrees = (obj) => {
  let count = 0;
  // if (obj.type != "none" && obj.degrees % 360 === 0) {
  //     if (obj.degrees > 360) {
  //         count += obj.degrees / 360 + 1;
  //     } else {
  //         count += obj.degrees / 360;
  //     }
  // } else {
  //     if (obj.degrees > 360) {
  //         count += Math.floor(obj.degrees / 180 / 2) + 1;
  //     } else {
  //         count += Math.floor(obj.degrees / 180 / 2);
  //     }
  // }
  if (obj.type != "none") {
    count += obj.degrees / 180;
  }
  return count;
};

// determines difficulty rating of each trick
let findDifficulty = async (stance, flip, boardRotation, bodyVarial) => {
  let count = 0;

  // if the stance is switch or nollie automatic plus 2
  if (stance === "switch" || stance === "nollie") {
    count += 2;
}

// if boardRotation is greater than 180 add a plus 1
if (boardRotation.degrees >= 360) {
    count += divideDegrees(boardRotation) * 2 + 1;
} else {
    count += divideDegrees(boardRotation) + 1;
}

// if bodyVarial is greater than 180 add a plus 1
if (bodyVarial.type != "none") {
    count += divideDegrees(bodyVarial) - 1;
}

// if there is a flip add a plus 1
if (flip.numberOfFlips.number != 0) {
    count += flip.numberOfFlips.number + 1;
}

if (count === 0) {
    count++;
}

return count;
};

export default findDifficulty;
