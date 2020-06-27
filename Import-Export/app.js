import PendingPurchase from "./PendingPurchase.js";

const compra1 = new PendingPurchase("Marcelo", "ir al almacen", [
  "Leche",
  "Atun",
  "Mandioca",
]);
console.log(compra1.showList());
console.log(compra1.show());
