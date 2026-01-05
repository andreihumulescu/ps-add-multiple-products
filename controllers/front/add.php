<?php
/**
 * NOTICE OF LICENSE
 *
 * This source file is subject to the MIT Free License
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/license/mit
 *
 * @author    Andrei H
 * @copyright Since 2024 Andrei H
 * @license   MIT
 */
if (!defined('_PS_VERSION_')) {
    exit;
}

class AddMultipleProductsAddModuleFrontController extends ModuleFrontController
{
    public function postProcess()
    {
        $requestData = json_decode(Tools::file_get_contents('php://input'), true);

        try {
            if (empty($requestData['productData']) || !is_array($requestData['productData'])) {
                throw new LogicException($this->module->getTranslator()->trans('Please provide product data!', [], 'Modules.Addmultipleproducts.Shop'));
            }

            $productsCount = 0;
            foreach ($requestData['productData'] as $productData) {
                $this->context->cart->updateQty($productData['quantity'], $productData['id']);
                $productsCount += $productData['quantity'];
            }

            $this->ajaxRender(
                json_encode([
                    'success' => true,
                    'message' => $this->module->getTranslator()->trans('Products successfully added to your shopping cart', [], 'Modules.Addmultipleproducts.Shop'),
                    'productsCount' => $productsCount,
                ])
            );
            exit;
        } catch (Exception $e) {
            $this->ajaxRender(
                json_encode([
                    'success' => false,
                    'message' => $e->getMessage(),
                ])
            );
            exit;
        }
    }
}
