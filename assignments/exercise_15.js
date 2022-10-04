const guestList = ["Umair", "Bilal", "Ahtisham"];

for (const guest of guestList) {
  console.log(`${guest}, I would like invite you at dinner.`);
}
console.log(`
${guestList[guestList.length - 1]} can't make it for dinner.
`);

guestList.pop();
guestList.push("Ibrahim");

for (const guest of guestList) {
  console.log(`${guest}, I would like invite you at dinner.`);
}
