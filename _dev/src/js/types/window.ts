export {};

type AddMultipleProducts = {
  addProductsButtonText: string;
  addProductsController: string;
  minicartLinkLabel: string;
};

declare global {
  interface Window {
    addmultipleproducts: AddMultipleProducts;
    prestashop: {
      urls: {
        pages: {
          cart?: string;
        };
      };
    };
  }
}
