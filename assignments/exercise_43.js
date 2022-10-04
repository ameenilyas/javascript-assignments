const magicians_names = ["salar", "Mehar", "ayan"];
const show_magicians = (magicians) => {
  magicians.forEach((name) => console.log(name));
  const new_magicians = magicians.map((name) => `${name} great magician`);
  console.log({ new_magicians });
};

show_magicians(magicians_names);
