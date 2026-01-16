
<?php
/**
 * Flatsome Child Theme Functions
 */

add_action( 'wp_enqueue_scripts', 'flatsome_child_enqueue_styles', 20 );
function flatsome_child_enqueue_styles() {
    wp_enqueue_style( 'flatsome-child-style', get_stylesheet_uri() );
}

/**
 * Custom Shortcode for Affiliate Product Card
 */
function dlstyle_product_card_shortcode( $atts ) {
    $a = shortcode_atts( array(
        'id' => '',
        'platform' => 'shopee'
    ), $atts );
    
    // Logic to fetch and display product
    return '<div class="affiliate-card">Product ' . $a['id'] . '</div>';
}
add_shortcode( 'dl_product', 'dlstyle_product_card_shortcode' );

/**
 * Add Google Fonts (Plus Jakarta Sans)
 */
function dlstyle_add_google_fonts() {
    wp_enqueue_style( 'dlstyle-google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap', false );
}
add_action( 'wp_enqueue_scripts', 'dlstyle_add_google_fonts' );
