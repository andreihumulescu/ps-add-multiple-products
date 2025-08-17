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

class AddMultipleProducts extends Module
{
    private const HOOKS = [
        'actionFrontControllerSetMedia',
        'displayProductListReviews',
    ];

    /**
     * AddMultipleProducts constructor.
     */
    public function __construct()
    {
        $this->name = 'addmultipleproducts';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'Andrei H';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '8.0.0',
            'max' => _PS_VERSION_,
        ];

        parent::__construct();

        $this->displayName = $this->trans('Add Multiple Products to the Cart', [], 'Modules.Addmultipleproducts.Admin');
        $this->description = $this->trans('PrestaShop module that enables selecting multiple products then adding all of them to the cart.', [], 'Modules.Addmultipleproducts.Admin');

        $this->confirmUninstall = $this->trans('Are you sure you want to uninstall?', [], 'Modules.Addmultipleproducts.Admin');
    }

    /**
     * {@inheritDoc}
     */
    public function install()
    {
        if (Shop::isFeatureActive()) {
            Shop::setContext(Shop::CONTEXT_ALL);
        }

        return parent::install()
            && $this->registerHook(self::HOOKS);
    }

    /**
     * {@inheritDoc}
     */
    public function uninstall()
    {
        return parent::uninstall();
    }

    /**
     * {@inheritDoc}
     */
    public function isUsingNewTranslationSystem()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function hookActionFrontControllerSetMedia()
    {
        Media::addJsDef([
            'addmultipleproducts' => [
                'addProductsButtonText' => $this->trans('Add selected products to the cart', [], 'Modules.Addmultipleproducts.Shop'),
                'addProductsController' => $this->context->link->getModuleLink('addmultipleproducts', 'add'),
                'minicartLinkLabel' => $this->trans('Shopping cart link containing %d product(s)', [], 'Modules.Addmultipleproducts.Shop'),
            ],
        ]);
        $this->context->controller->registerStylesheet(
            'addmultipleproducts',
            'modules/' . $this->name . '/views/css/styles.css'
        );
        $this->context->controller->registerJavascript(
            'addmultipleproducts',
            'modules/' . $this->name . '/views/js/main.js'
        );
    }

    /**
     * {@inheritDoc}
     */
    public function hookDisplayProductListReviews()
    {
        return $this->display(__FILE__, 'views/templates/hook/display-product-list-reviews.tpl');
    }
}
