// Import modules
import Task, { sayHi } from "./Task.js";

// console.log(sayHi());

export default class PendingPurchase extends Task {
  // Note: super() represents the parent constructor
  constructor(owner, name, products, state = true) {
    super(owner, name, state);
    this.products = products;
  }

  // Note: Objet super contains all the methods of the parent class
  // Note: All the methods of the parent class are available on the inherit class

  // Rewrite method
  show() {
    return `${super.show()} para comprar cosas`;
  }

  // Create a new method that belongs only to the inherit class
  showList() {
    let products = this.products.reduce(
      (total, product) => (total += product + " "),
      ""
    );
    return `${this.owner} tiene que ${this.name} para comprar ${products}`;
  }
}
