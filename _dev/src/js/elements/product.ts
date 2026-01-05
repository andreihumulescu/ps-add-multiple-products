import { getActiveCheckboxes } from './checkboxes';

function getProducts() {
  return document.querySelectorAll('.product-miniature .thumbnail-container');
}

function getProductsSection() {
  return document.querySelector('#products, .products');
}

function isOnProductPage() {
  return getProducts().length !== 0 || getProductsSection() !== null;
}

function getProductData() {
  const products = [];

  for (const activeCheckbox of Array.from(getActiveCheckboxes())) {
    const productData = {
      id: 0,
      quantity: 0,
    };

    const container = activeCheckbox.closest(
      '.addmultipleproducts'
    ) as HTMLDivElement;
    if (container.dataset.productId) {
      productData.id = parseInt(container.dataset.productId);
    } else {
      continue;
    }

    const quantityInput = container.querySelector(
      '.quantity'
    ) as HTMLInputElement;
    if (quantityInput && quantityInput.value) {
      productData.quantity = parseInt(quantityInput.value) || 1;
    }

    products.push(productData);
  }

  return products;
}

export { isOnProductPage, getProductsSection, getProductData };
