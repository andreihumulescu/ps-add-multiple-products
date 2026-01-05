<div class="addmultipleproducts" data-product-id="{$product_id|escape:'htmlall':'UTF-8'}">
  <input
    value="1"
    min="1"
    class="form-control quantity"
    name="qty"
    aria-label={l s='Quantity:' d='Shop.Theme.Checkout'}
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
  >
  <label class="checkbox-container">
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
</div>
