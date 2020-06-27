// Define class

// Note: Classes cannot have attributes

class Task {
  // Default proto method
  constructor(owner, name, state = true) {
    this.owner = owner;
    this.name = name;
    this.state = state;
  }

  // Define my own methods
  show() {
    return `${this.owner} tiene que ${this.name}`;
  }
}

//Test

// const tarea1 = new Task('Gonzalo', 'aprender JS');
// const tarea2 = new Task('Mariana', 'aprender React');
// console.log(tarea1.show())
// console.log(tarea2.show());

// Inheritance

class PendingPurchase extends Task {
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

//Test

// const compra1 = new PendingPurchase('Marcelo', 'ir al almacen', ['Leche', 'Atun', 'Mandioca']);
// console.log(compra1.showList());
// console.log(compra1.show());
