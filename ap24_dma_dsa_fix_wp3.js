// Append a "HostedByString" to instance dependent on beeing a website or an iframe

jQuery(document).ready(function($) {

    var found = false; 

    jQuery('a').each(function() {

        // Check if copyright link is already there
        if (jQuery(this).attr('href') === "https://willhaben.at" &&
            jQuery(this).attr('target') === "_blank" &&
            jQuery(this).attr('rel') === "noopener") {
                
            // If so, update the link
            jQuery(this).attr('href', 'https://www.autopro24.at/?impressum');
            jQuery(this).text('Website hosted by autoPro24 im Auftrag vom willhaben Motornetzwerk');
            jQuery(this).attr('style', 'text-align: right; color:#3EA2E6; margin-top: 10px; display: inline-block; font-size: .62em;');
            
            found = true; 
            return false; 

        }

    });

    // If not found, it's an iframe
    if (!found) {
        jQuery('#main_container').append('<a href="https://www.autopro24.at/?impressum "' +
        'target="_blank" rel="noopener noreferrer" style="text-align: center; display: block; font-size: .62em;">' +
        'iframe hosted by autoPro24 im Auftrag vom willhaben Motornetzwerk</a>');
    }

});
