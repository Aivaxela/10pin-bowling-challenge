//   const initStr = "X 42 90 80 2/ 5/ 90 8/ 71 44";
const initStr = "43 2/ 6/";
const initArr = initStr.split(" ");
let score = 0;
let strikes = 0;
let sparePending = false;
let frame = 1;

initArr.forEach((item) => {
  debugger;
  if (item.length > 1) {
    if (sparePending) {
      score = score + 10 + Number(item[0]);
      sparePending = false;
      score = score + Number(item[0]);
      if (!item[1].includes("/")) {
        score = score + Number(item[1]);
      }
    } else {
      if (!item[1].includes("/")) {
        score = score + Number(item[0]);
        score = score + Number(item[1]);
      }
    }

    if (item[1].includes("/")) {
      sparePending = true;
    }

    //   if (sparePending) {
    //     score = score + 10 + Number(item[0]);
    //     sparePending = false;
    //     if (item[1].includes("/")) {
    //       sparePending = true;
    //     } else {
    //       score = score + Number(item[1]);
    //     }
    //   } else if (item[1].includes("/")) {
    //     score = score + Number(item[0]);
    //     return;
    //   } else {
    //     score = score + Number(item[0]);
    //     score = score + Number(item[1]);
    //   }
    //   if (item[1].includes("/")) {
    //     sparePending = true;
    //   }
    //
    //
  } else if (item === "X") {
    strikes++;
  }
  // console.log("frame " + frame + ": " + score);
  console.log("score: " + score);

  frame++;
});

console.log("strikes: " + strikes);
console.log("spare?: " + sparePending);

//
//
//
//
//
//
//
//
//
//
//
//
//
