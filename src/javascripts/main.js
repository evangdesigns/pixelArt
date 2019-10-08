import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';
import colorPicker from './components/paintbrush/paintbrush';

const init = () => {
  colorPicker.printColorPicker();
  grid.makeGrid();
};

init();
