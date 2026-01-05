import { getButton } from '../elements/add-to-cart-button';
import { getProductData } from '../elements/product';
import displayModal from '../elements/modal';
import updateMinicart from '../actions/update-minicart';
import { resetCheckboxes } from '../elements/checkboxes';

function addListeners() {
  getButton()?.addEventListener('click', async () => {
    const response = await fetch(
      window.addmultipleproducts.addProductsController,
      {
        method: 'POST',
        body: JSON.stringify({
          productData: getProductData(),
        }),
      }
    );

    const result = await response.json();

    displayModal(result.message, result.success);

    if (result.success) {
      updateMinicart(result.productsCount);
      resetCheckboxes();
    }
  });
}

export default addListeners;
