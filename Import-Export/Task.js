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

export const sayHi = () => "Hi!"; // That export require a import with destructuring => { sayHi }
export default Task; // Default export
