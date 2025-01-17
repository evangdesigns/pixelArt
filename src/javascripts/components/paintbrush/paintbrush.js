import $ from 'jquery';
import utils from '../../helpers/utilities';

const colors = ['green', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

const printColorPicker = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
    <div class="form-check form-check-inline">
      <input name="color" class="form-check-input colorChoice" type="radio" id="${color}InlineRadio" value="${color}">
      <label class="form-check-label" for="${color}InlineRadio">${color}</label>
    </div>
    `;

    utils.printToDom('colorPicker', domString);
  }
};

const paintPixel = (e) => {
  const pixel = $(e.target);
  const colorChoice = $('.colorChoice:checked').val();
  pixel.css('backgroundColor', colorChoice);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { printColorPicker, attachEvents };
