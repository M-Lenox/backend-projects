const white = {
  1: "Play a gambit line",
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

const black = {
  e4: {
    1: "Play the French defence.",
    2: "Play the Petroff defence",
    3: "Play the Najdorf Variation of the Sicilian defence",
    4: "Play the Shveshnikov variation of the Sicilian defence",
    5: "Play a dubious opening and survive the trouble.",
    6: "Play the Pirc or Modern defence",
  },
  d4: {
    1: "Play the Lasker variation of the Queen's gambit declined.",
    2: "Accept the gambit ie Queen's gambit",
    3: "Play the King's Indian Defence",
    4: "Play the Grunfeld defence",
  },
  c4: {
    1: "Play 1...e5",
    2: "Play 1...e6",
    3: "Play 1...Nf6 KID",
    4: "Play a dubious 1st move",
  },
  others: "Have fun, it is never that serious.",
};

const fun = {
  1: "a3/a6",
  2: "a4/a5",
  3: "b3/b6",
  4: "b4/b5",
  5: "c3/c6",
  6: "c4/c5",
  7: "d3/d6",
  8: "d4/d5",
  9: "e3/e6",
  10: "e4/e5",
  11: "f3/f6",
  12: "f4/f5",
  13: "g3/g6",
  14: "g4/g5",
  15: "h3/h6",
  16: "h4/h5",
  17: "Na3/Na6",
  18: "Nc3/Nc6",
  19: "Nf3/Nf6",
  20: "Nh3/Nh6",
};

module.exports = { white, black, fun };
