# This project has been archived as I am focusing my efforts on https://github.com/w3bdesign/nuxtjs-woocommerce and https://github.com/w3bdesign/nextjs-woocommerce

<hr>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_astro-woocommerce&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=w3bdesign_astro-woocommerce)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2134b6e594884f489ad4dad6502c5a2a)](https://www.codacy.com/gh/w3bdesign/astro-woocommerce/dashboard?utm_source=github.com&utm_medium=referral&utm_content=w3bdesign/astro-woocommerce&utm_campaign=Badge_Grade)

## Astro/Vue 3 Ecommerce site with WooCommerce backend

<img src="https://user-images.githubusercontent.com/45217974/106988377-f129a080-676f-11eb-94b9-a44c86ea6c79.png" alt="Project screenshot" />

## Table Of Contents (TOC)

-   [Installation](#Installation)
-   [Features](#Features)
-   [Troubleshooting](#Troubleshooting)
-   [TODO](#TODO)

## Installation

1.  Install and activate the following required plugins, in your WordPress plugin directory:

-   [woocommerce](https://wordpress.org/plugins/woocommerce) Ecommerce for WordPress.
-   [wp-graphql](https://wordpress.org/plugins/wp-graphql) Exposes GraphQL for WordPress.
-   [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) Adds WooCommerce functionality to a WPGraphQL schema. Currently only confirmed to be working with version 0.61 of this plugin.
-   [algolia-woo-indexer](https://github.com/w3bdesign/algolia-woo-indexer) Sends WooCommerce products to Algolia. Required for search to work.
-   [wp-graphql-cors](https://github.com/funkhaus/wp-graphql-cors) May be needed if you experience CORS errors. Check "Send site credentials" and add domain to Extend "Access-Control-Allow-Origin” header

Optional plugin:

-   [headless-wordpress](https://github.com/w3bdesign/headless-wp) Disables the frontend so only the backend is accessible.
-   [wp-graphql-cors](https://github.com/funkhaus/wp-graphql-cors) Ensures that CORS works correctly. Remember to add the domain to the store under `Extend "Access-Control-Allow-Origin” header`

The current release has been tested and is confirmed working with the following plugin versions:

-   WordPress version 6.1.1
-   WooCommerce version 7.1.0
-   WP GraphQL version 1.5.0
-   WooGraphQL version 0.6.2

2.  For debugging and testing, install either:

    <https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/> (Firefox)

    <https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm> (Chrome)

    Rename .env.example to .env so the Apollo debugger will correctly load. It will not load if the NODE_ENV variable is not correctly set.

3.  Make sure WooCommerce has some products already or import some sample products

    The WooCommerce sample products CSV file is available at `wp-content/plugins/woocommerce/sample-data/sample_products.csv` or [Sample products](sample_products/)

    Import the products at `WP Dashboard > Tools > Import > WooCommerce products(CSV)`

4.  Clone or fork the repo and modify `.env` with the URL to the GraphQL endpoint (or set environment variables in the configuration UI for your deployment solution)

5.  Start the server with `npm run dev`

6.  Enable COD (Cash On Demand) payment method in WooCommerce

7.  Add a product to the cart

8.  Proceed to checkout

9.  Fill in your details and place the order

## Features

-   Astro
-   Vue 3 with <script setup>
-   Tailwind CSS
-   Custom fetch function with Axios
-   Responsive design
-   Support for simple and variable products
-   Vue Instantsearch with Algolia
-   GraphQL-based filters
-   CSS animations and transitions
-   Form handling and validation with Vee Validate and Yup
-   Checkout process
-   Animated mobile menu
-   Stock quantity on products

## Troubleshooting

### I am getting a cart undefined error or other GraphQL errors

Check that you are using the 0.6.2 version of the [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) plugin

### The products page isn't loading

Check the attributes of the products. Right now the application requires Size and Color.

## TODO

-   Add ability to update product quantity in cart
