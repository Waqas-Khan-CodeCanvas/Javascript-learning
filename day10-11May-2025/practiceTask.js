function createIcecream({ scoops = 1, toppings = ["Dark Chocolate"] } = {}) {
  const scoopText = scoops === 1 ? "scoop" : "scoops";
  console.log(
    `Your sundae has ${scoops} ${scoopText} with ${toppings.join(
      " and "
    )} toppings,`
  );
}

// createIcecream({});
// createIcecream({scoops : 1});
// createIcecream({scoops : 2, toppings: [ "sparinkles", "smarties"]});
// createIcecream({toppings: [ "starawberry"]})
// createIcecream()
