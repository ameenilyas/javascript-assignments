const make_CAr = (manufacturer, model, options) => {
  const details = { manufacturer, model, ...options };

  console.log(details);
};

make_CAr("mercedes", "2014", { engine: "turbo", color: "Royal Blue" });
