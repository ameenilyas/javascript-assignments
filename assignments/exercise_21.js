function addFav(url) {
  const sport = "Cricket";
  const place = "Sydney";
  const language = "Arabic";

  return { sport, place, language };
}

const favs = addFav();
console.log(favs);
