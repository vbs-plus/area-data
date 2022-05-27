const grab = require("./grab");

(async () => {
  await grab("provinces");
  await grab("cities");
  await grab("areas");
  await grab("streets");

  await grab("pc");
  await grab("pca");
  await grab("pcas");

  await grab("pc-code");
  await grab("pca-code");
  await grab("pcas-code");
})();
