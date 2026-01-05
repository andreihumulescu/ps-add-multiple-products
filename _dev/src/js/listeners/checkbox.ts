import { getCheckboxes, getActiveCheckboxes } from '../elements/checkboxes';
import { getButton } from '../elements/add-to-cart-button';

function addListeners() {
  for (let checkbox of Array.from(getCheckboxes())) {
    checkbox.addEventListener('click', () => {
      if (getActiveCheckboxes().length === 0) {
        getButton()!.setAttribute('disabled', 'disabled');
      } else {
        getButton()!.removeAttribute('disabled');
      }
    });
  }
}

export default addListeners;
