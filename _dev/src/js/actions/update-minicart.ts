import createElement from '../utils/create-element';

export default function updateMinicart(quantity: number) {
  addActiveClass();

  const currentQuantity = document.querySelector('.cart-products-count');
  if (!currentQuantity) {
    return;
  }

  const newQuantity =
    Number(currentQuantity?.textContent?.match(/\d+/)?.[0]) + quantity;
  currentQuantity.textContent = `(${newQuantity})`;

  addCartLink(newQuantity);
}

function addActiveClass() {
  const cartPreview = document.querySelector('.cart-preview');
  if (!cartPreview) {
    return;
  }

  cartPreview.classList.remove('inactive');
  cartPreview.classList.add('active');
}

function addCartLink(cartItemsCount: number) {
  const cartPreview = document.querySelector('.cart-preview');
  if (!cartPreview || cartPreview.querySelector('a')) {
    return;
  }

  const link = createElement('a', {
    attributes: {
      rel: 'nofollow',
      'aria-label': window.addmultipleproducts.minicartLinkLabel.replace(
        '%d',
        cartItemsCount.toString()
      ),
      href: window.prestashop.urls.pages.cart + '?action=show',
    },
  });

  const cartPreviewHeader = cartPreview.querySelector('.header');
  if (!cartPreviewHeader) {
    return;
  }

  link.append(...Array.from(cartPreviewHeader.childNodes));
  cartPreviewHeader.append(link);
}
