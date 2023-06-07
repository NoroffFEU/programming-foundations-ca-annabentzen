const gasGrill = {
  brand: "Weber",
  model: "Genesis IE 3000",
  color: "Black",
  price: 29999,
  isPortable: false,
  features: ["Three burners", "Porcelain-enameled grates", "Side tables"],
  ignition: function () {
    gasGrill.isIgnited = !gasGrill.isIgnited;
  },
};

console.log(gasGrill);
gasGrill.ignition();
