//Openings for white
const whiteOpenings = {
  0: "Play the Bird opening",
  1: "Play a gambit line ",
  2: "Play a dubious opening and survive the trouble",
  3: "Play the closed sicilian",
  4: "Play 1.e4",
  5: "Play the Torre",
  6: "Play the Barry attack",
  7: "Play 1.d4, 2.Nc3",
  8: "Play the double fianchetto English",
  9: "Play the London system",
  10: "Sacrifice a pawn for quick development",
  11: "Play the Zukertort opening",
  12: "Play the Smyslov variation 1.d4 2.Nf3 ... 5.Bg5 6.e3",
  13: "Play the English with Nge2",
  14: "Play the Reti opening 1.Nf3",
  15: "Play the Ruy Lopez against 1...e5",
};

//Openings for black
const blackOpenings = {
  e4: {
    0: "Play the caro-kann opening",
    1: "Play the French defence.",
    2: "Play the Petroff defence",
    3: "Play the Najdorf Variation of the Sicilian defence",
    4: "Play the Shveshnikov variation of the Sicilian defence",
    5: "Play a dubious opening and survive the trouble.",
    6: "Play the Pirc or Modern defence",
  },
  d4: {
    0: "Play 1...b6",
    1: "Play the Lasker variation of the Queen's gambit declined.",
    2: "Accept the gambit ie Queen's gambit",
    3: "Play the King's Indian Defence",
    4: "Play the Grunfeld defence",
  },
  c4: {
    0: "Play 1...c5",
    1: "Play 1...e5",
    2: "Play 1...e6",
    3: "Play 1...Nf6, the King's Indian Defence",
    4: "Play a dubious 1st move",
  },
  others: {
    0: "Play 1.a3/a6",
    1: "Play 1.a4/a5",
    2: "Play 1.b3/b6",
    3: "Play 1.b4/b5",
    4: "Play 1.c3/c6",
    5: "Play 1.c4/c5",
    6: "Play 1.d3/d6",
    7: "Play 1.d4/d5",
    8: "Play 1.e3/e6",
    9: "Play 1.e4/e5",
    10: "Play 1.f3/f6",
    11: "Play 1.f4/f5",
    12: "Play 1.g3/g6",
    13: "Play 1.g4/g5",
    14: "Play 1.h3/h6",
    15: "Play 1.h4/h5",
    16: "Play 1.Na3/Na6",
    17: "Play 1.Nc3/Nc6",
    18: "Play 1.Nf3/Nf6",
    19: "Play 1.Nh3/Nh6",
  },
};

//Random first legal moves
const randomFirstMoves = {
  1: "Play 1.a3/a6",
  2: "Play 1.a4/a5",
  3: "Play 1.b3/b6",
  4: "Play 1.b4/b5",
  5: "Play 1.c3/c6",
  6: "Play 1.c4/c5",
  7: "Play 1.d3/d6",
  8: "Play 1.d4/d5",
  9: "Play 1.e3/e6",
  10: "Play 1.e4/e5",
  11: "Play 1.f3/f6",
  12: "Play 1.f4/f5",
  13: "Play 1.g3/g6",
  14: "Play 1.g4/g5",
  15: "Play 1.h3/h6",
  16: "Play 1.h4/h5",
  17: "Play 1.Na3/Na6",
  18: "Play 1.Nc3/Nc6",
  19: "Play 1.Nf3/Nf6",
  20: "Play 1.Nh3/Nh6",
};

//pick a random white opening
function white() {
  const randomWhiteOpening = function () {
    const keys = Object.keys(whiteOpenings);
    return whiteOpenings[keys[(keys.length * Math.random()) << 0]];
  };
  console.log(">> ", randomWhiteOpening());
}

//pick a random black opening
function black(firstMove) {
  const randomBlackOpening = function () {
    const whiteMove = firstMove;
    const keys = Object.keys(blackOpenings[whiteMove]);

    const blackMove = keys[(keys.length * Math.random()) << 0];
    return blackOpenings[whiteMove][blackMove];
  };
  console.log(">> ", randomBlackOpening());
}

//pick a random first move
function randomFirstMove() {
  const randomOpening = function () {
    const keys = Object.keys(randomFirstMoves);
    return randomFirstMoves[keys[(keys.length * Math.random()) << 0]];
  };
  console.log(">> ", randomOpening());
}
module.exports = { white, black, randomFirstMove };
