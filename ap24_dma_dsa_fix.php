<?php

/*
Plugin Name: ap24-dma-dsa-fix
Description: Adds a "Hosted by"-string to the footer dependent on beeing a website, carport or iframe product
Version: 1.0
Author: autoPro24
*/

function ap24_dma_dsa_fix() {
    
    $serverIP = $_SERVER['SERVER_ADDR'];
    $ipArray = array('89.185.118.21', '89.185.118.27');

    if (in_array($serverIP, $ipArray)) {
        wp_enqueue_script('ap24-dma-dsa-fix', plugin_dir_url(__FILE__) . 'ap24_dma_dsa_fix.js', array(), '1.0', true);
    } 
    
    else {
        wp_enqueue_script('ap24-dma-dsa-fix-wp3', plugin_dir_url(__FILE__) . 'ap24_dma_dsa_fix_wp3.js', array(), '1.0', true);
    }

}

add_action('wp_enqueue_scripts', 'ap24_dma_dsa_fix', PHP_INT_MAX);

?>
