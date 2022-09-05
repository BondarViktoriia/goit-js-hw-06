function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetBody: document.querySelector('body'),
  colorName: document.querySelector(' span.color'),
  btnChangeColor: document.querySelector('.change-color'),
}

refs.btnChangeColor.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor( ) {
  let color = getRandomHexColor();
  refs.widgetBody.style.backgroundColor = color;
  refs.colorName.textContent = color;
}
