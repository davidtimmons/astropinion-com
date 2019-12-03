/**
 * Import all dependencies the default template and Parcel bundler require.
 * Parcel does not allow imported libraries to set global variables, so do that here.
 */
import jquery from 'jquery';
import initJqueryNav from './jquery.nav.js';
import initJqueryScroll from './jquery.scrollTo-min.js';
import initJqueryScrollPlugin from './jquery.scrollTo-plugin.js';

window.$ = window.jQuery = jquery;
initJqueryNav(jquery, window, document);
initJqueryScroll(jquery, window, document);
initJqueryScrollPlugin(jquery, window, document);

// Load Bootstrap plugins into the jQuery object.
import 'bootstrap';

// Load WOW.js to reveal CSS animations on page scroll.
import wowjs from 'wow.js';
window.WOW = wowjs;

const wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false, // Do not trigger animations on mobile devices.
});
wow.init();

// Setup global site tag (gtag.js) for Google Analytics.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'UA-151926575-2');

// Setup LinkedIn Insight Tag.
const _linkedin_partner_id = "1745737";
window._linkedin_partner_id = _linkedin_partner_id;
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
