import utils from '../../helpers/utilities';

const colors = ['green', 'darkorchid', 'papayawhip', 'blanchalmond', 'tomato', 'cornsilk'];

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

export default { printColorPicker };
