const carNames = ["Tesla", "lamborghini", "Audi", "Carolla", "Sabura"];

console.log(carNames[0] === "tesla");
console.log(carNames[0] !== "tesla");
console.log(carNames[1].toLowerCase() !== "Lamborghini");
console.log(carNames[0].length === carNames[1].length);
console.log(carNames[0].length > carNames[1].length);
console.log(carNames[0].length < carNames[1].length);
console.log(carNames[0] == "Tesla" && carNames[-1] == "Sabura");
console.log(carNames[0] == "Caroolla" || carNames[-1] == "Sabura");
console.log(carNames.includes("Tesla"));
console.log(carNames.includes("tesla"));
