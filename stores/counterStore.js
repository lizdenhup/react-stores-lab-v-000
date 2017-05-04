import Store from './Store';

class CounterStore extends Store {
	constructor() {
		super(0);
	}
  // Your implementation here.
  // Hint: extend the Store class!
  increment() {
  	const newState = this.getState() + 1;
  	this.setState(newState);
  }

  decrement() {
  	const newState = this.getState() - 1;
  	this.setState(newState);
  }
}

const counterStore = new CounterStore();

export default counterStore;
