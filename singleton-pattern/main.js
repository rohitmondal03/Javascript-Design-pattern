const COUNTER = document.getElementById("counter");
const INCREMENT_BUTTON = document.getElementById("increment-button");
const DECREMENT_BUTTON = document.getElementById("decrement-button");

let counter = 0;

const counterObject = {
  getCount: () => counter,
  incrementCounter: () => ++counter,
  decrementCounter: () => --counter,
}

export const singleTonCounterObject = Object.freeze(counterObject);


COUNTER.innerHTML = singleTonCounterObject.getCount();

INCREMENT_BUTTON.addEventListener("click", () => {
  singleTonCounterObject.incrementCounter();
  COUNTER.innerHTML = singleTonCounterObject.getCount();
})

DECREMENT_BUTTON.addEventListener("click", () => {
  singleTonCounterObject.decrementCounter();
  COUNTER.innerHTML = singleTonCounterObject.getCount();
})