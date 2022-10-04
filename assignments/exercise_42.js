const magicians_names = ["salar", "momo", "ayan"];
const show_magicians = (magician) => {
  magicians_names.push(magician);
  console.log({ magicians_names });
};

show_magicians("rizwan");
