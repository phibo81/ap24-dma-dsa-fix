// Append a "HostedByString" to instance dependent on beeing a website, a carport or an exeption (website running on subdomain for example)

jQuery(document).ready(function(){

    // Get the window location and split it
    var hostname = window.location.hostname;
    var parts = hostname.split('.');

    // Define Exceptions = WEBSITES behaving strange
    var exceptionArray = ['autohaus.lutztulln.com', 'fahrzeuge.motormobil.at'];

    // Validate for Exceptions
    var isException = exceptionArray.some(function(exception) {
        return hostname.includes(exception);
    });

    // Check for the exception == 'fahrzeuge.motormobil.at'
    if (hostname.includes('fahrzeuge.motormobil.at')) {
        console.log('DMA / DSA Fix returned due to exception.');
        return;
    }

    // If is Exception
    if (isException) {
        console.log('Exception case');
        addStringToWebsite();
    }

    // If running on subdomain but not www., so we assume it's a carport
    else if (parts.length > 2 && parts[0].toLowerCase() !== 'www') {
        addStringToCarport();
    }

    // Not running on subdomain but www. included, so we assume it's a website
    else { 
        addStringToWebsite();
    }

});

// Add the string to a website
function addStringToWebsite() {

    // console.log("Is website");

    var websiteHostedByString = '' +
        '<a id="ap24hostedby" ' + 
        'style="font-size: .82em; text-align: center; display: block; ' +
        'width: 100%; clear: both; float: left; position: absolute; ' +
        'bottom: 0; margin-bottom: .75rem;" ' +
        'href="https://www.autopro24.at/?impressum" target="_blank">' +
        'Website hosted by autoPro24</a>';

    var unstyledWebsiteHostedByString = '<a id="ap24hostedby" href="https://www.autopro24.at/?impressum" target="_blank">Website hosted by autoPro24</a>';
    var mainFooterElement = jQuery('#main_footer, #main_footer_opel');
    var oldStringsArray = ['CMS by autoPro24', 'CMS by autopro24', 'CMS By autoPro24',  'CMS BY AUTOPRO24'];

    // Loop through oldStringsArray
    for (var i = 0; i < oldStringsArray.length; i++) {

        var searchString = oldStringsArray[i];

        // Check if the string is present within #main_footer and below it  
        if (mainFooterElement.find('*:contains("' + searchString + '")').length > 0) {

            // Replace the string with unstyledWebsiteHostedByString 
            mainFooterElement.html(function (index, oldHtml) {
                return oldHtml.replace(searchString, unstyledWebsiteHostedByString);
            });
            
            //Remove the old link
            mainFooterElement.find('a[target="_blank"][rel="noopener"][href="http://www.autopro24.at"]').remove(); 
            return; 
        }
        
    }

    // Append the string
    var contentWrapper = jQuery('#outer_main_wrapper');
    contentWrapper.append(websiteHostedByString);

}

// Add the string to a carport
function addStringToCarport() {

    // console.log('Is carport');

    var carportHostedByString = '' +
        '<a id="ap24hostedby" ' +
        'style="font-size: .82em; text-align: center; display: block; width: 100%; ' +
        'clear: both; float: left; margin-top: 1rem; position: relative; ' +
        'margin-bottom: 1.5rem;" ' +
        'href="https://www.autopro24.at/?impressum" target="_blank">' +
        'Vehicle list hosted by autoPro24</a>';

    var ap24WrapperElement = jQuery("#ap24_wrapper");
    var ap24AppElement = jQuery("#ap24-app");

    if (ap24WrapperElement.length > 0) {
        jQuery(ap24WrapperElement).append(carportHostedByString);
    } 
    
    else if (ap24AppElement.length > 0) {
        jQuery(carportHostedByString).insertAfter(ap24AppElement);
    } 
    
    else {
        console.log('DSA fix needs other element to mount to.');
    }

}
