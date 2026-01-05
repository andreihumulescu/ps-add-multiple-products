import { isOnProductPage, getProductsSection } from './product';
import createElement from '../utils/create-element';

function displayAddToCartButton() {
  if (!isOnProductPage()) {
    return;
  }

  const div = createElement('div', { className: 'button-container' });
  const button = createElement('button', {
    className: 'btn btn-primary center-block addmultipleproducts-add-to-cart',
    text: window.addmultipleproducts.addProductsButtonText,
    attributes: { disabled: 'disabled' },
  });

  div.appendChild(button);
  getProductsSection()?.insertAdjacentElement('beforebegin', div);
}

function getButton() {
  return document.querySelector('.addmultipleproducts-add-to-cart');
}

export { displayAddToCartButton, getButton };
