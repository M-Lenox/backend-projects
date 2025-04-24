#!/usr/bin/env node

const { intro, select, isCancel, cancel, confirm } = require("@clack/prompts");
const { white, black, randomFirstMove } = require("./openings");
const pc = require("picocolors");

async function randomizer() {
  intro(pc.inverse("\n roll-the-chess-opening-dice "));

  const colorPlay = await select({
    message: "What color are you playing?",
    options: [
      { value: "white", label: "White." },
      { value: "black", label: "Black." },
      {
        value: "randomFirstMove",
        label: "Have fun! with a random first move.",
      },
    ],
  });

  if (isCancel(colorPlay)) {
    cancel("Operation cancelled.");
    return process.exit(0);
  }

  switch (colorPlay) {
    case "white":
      white();
      break;

    case "black":
      const firstMove = await select({
        message: "What did white play?",
        options: [
          { value: "e4", label: "1. e4" },
          { value: "d4", label: "1. d4" },
          { value: "c4", label: "1. c4" },
          { value: "others", label: "others" },
        ],
      });

      black(firstMove);

      if (isCancel(firstMove)) {
        cancel("Operation cancelled.");
        return process.exit(0);
      }
      break;

    case "randomFirstMove":
      randomFirstMove();
      break;

    default:
      console.log("There was an error with the app.");
  }

  const shouldContinue = await confirm({
    message: "Roll the chess opening dice again?",
  });

  shouldContinue ? setTimeout(randomizer, 50) : process.exit(0);
}
randomizer();
