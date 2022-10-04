const t_shirt = (size, text) => {
  if (size === "sm") {
    console.log(
      `size of shirt should be, ${size}. Text on shirt should be ${text}`
    );
  } else {
    console.log(
      `size of shirt should be, ${size}. Text on shirt should be, I love Javascript. `
    );
  }
};

t_shirt("md", "i love my family");
