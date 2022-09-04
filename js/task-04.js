const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const refs = {
   valueEl :document.querySelector('#value'),
 btnDecrement : document.querySelector('[data-action="decrement"]'),
 btnIncrement  :document.querySelector('[data-action="increment"]'),
}


refs.btnDecrement.addEventListener('click', () => {
    counterValue.decrement();
    refs.valueEl.textContent = counterValue.value;
});

refs.btnIncrement.addEventListener('click', () => {
    counterValue.increment();
    refs.valueEl.textContent = counterValue.value;
});