$(window).on('load', function(){

    'use strict';

    /* ---- Custom Astropinion Scripts ---- */

    /* ========================================================== */
    /*  Event Tagging                                             */
    /* ========================================================== */

    /**
     * Instrument HTML code to track events in Google Tag Manager.
     * Setting the transport method to 'beacon' lets the hit be sent
     * using 'navigator.sendBeacon' in browsers that support it.
     */
    var trackPageEvents = function($) {
        var wrapTrackEvent = function(action, category, label) {
            return function() {
                gtag('event', action, {
                    'event_category': category,
                    'event_label': label,
                    'transport_type': 'beacon',
                });
            };
        };

        var mutateTaggedElement = function(element, eventTrigger, trackEvent) {
            var trigger = eventTrigger.toLowerCase();
            if (trigger === 'onclick') {
                $(element).click(trackEvent);
            } else if (trigger === 'onsubmit') {
                $(element).submit(trackEvent);
            }
        };

        var instrumentEvents = function() {
            $('[data-tag]').each(function(_, element) {
                var tag = element.getAttribute('data-tag').split('|');
                var eventTrigger = tag[0];
                var action = tag[1];
                var category = tag[2];
                var label = tag[3];

                mutateTaggedElement(element, eventTrigger, wrapTrackEvent(action, category, label));
            });
        }

        return instrumentEvents;
    }

    trackPageEvents(jQuery)();


    /* ----  Default Template Scripts ---- */

    /* ========================================================== */
    /*   Navigation Background Color                              */
    /* ========================================================== */
    
    // $(window).on('scroll', function() {
    // 	if($(this).scrollTop() > 200) {
    // 		$('.navbar-fixed-top').addClass(['theme-light']);
    // 	} else {
    // 		$('.navbar-fixed-top').removeClass(['theme-light']);
    // 	}
    // });
 
    
    /* ========================================================== */
    /*   Hide Responsive Navigation On-Click                      */
    /* ========================================================== */
    
      $('.navbar-nav li a').on('click', function(event) {
        $('.navbar-collapse').collapse('hide');
      });

    
    /* ========================================================== */
    /*   Navigation Color                                         */
    /* ========================================================== */
    
    $('#navbarCollapse').onePageNav({
        filter: ':not(.external)'
    });


    /* ========================================================== */
    /*   SmoothScroll                                             */
    /* ========================================================== */
    
    $('.navbar-nav li a, a.scrool').on('click', function(e) {
        
        var full_url = this.href;
        var parts = full_url.split('#');
        var trgt = parts[1];
        var target_offset = $('#'+trgt).offset();
        var target_top = target_offset.top;
        
        $('html,body').animate({scrollTop:target_top -70}, 1000);
            return false;
        
    });


    /* ========================================================== */
    /*   Newsletter                                               */
    /* ========================================================== */
    
    $('.newsletter-form').each( function(){
        var form = $(this);
        //form.validate();
        form.submit(function(e) {
            if (!e.isDefaultPrevented()) {
                jQuery.post(this.action, {
                    'email': $('input[name="EMAIL"]').val(),
                }, function(data){
                    console.log(data);
                    form.fadeOut('fast', function() {
                        $(this).siblings('p.newsletter_success_box').show();
                    });
                });
                e.preventDefault();
            }
        });
    });		
    

    /* ========================================================== */
    /*   Register                                                 */
    /* ========================================================== */
    
    // $('#register-form').each( function(){
    // 	var form = $(this);
    // 	//form.validate();
    // 	form.submit(function(e) {
    // 		if (!e.isDefaultPrevented()) {
    // 			jQuery.post(this.action,{
    // 				'names':$('input[name="register_names"]').val(),
    // 				'phone':$('input[name="register_phone"]').val(),
    // 				'email':$('input[name="register_email"]').val(),
    // 				'ticket':$('select[name="register_ticket"]').val(),
    // 			},function(data){
    // 				form.fadeOut('fast', function() {
    // 					$(this).siblings('p.register_success_box').show();
    // 				});
    // 			});
    // 			e.preventDefault();
    // 		}
    // 	});
    // })
    
    
    /* ========================================================== */
    /*   Contact                                                  */
    /* ========================================================== */

    // $('#contact-form').each( function(){
    // 	var form = $(this);
    // 	//form.validate();
    // 	form.submit(function(e) {
    // 		if (!e.isDefaultPrevented()) {
    // 			jQuery.post(this.action,{
    // 				'names':$('input[name="contact_names"]').val(),
    // 				'subject':$('input[name="contact_subject"]').val(),
    // 				'email':$('input[name="contact_email"]').val(),
    // 				'phone':$('input[name="contact_phone"]').val(),
    // 				'message':$('textarea[name="contact_message"]').val(),
    // 			},function(data){
    // 				form.fadeOut('fast', function() {
    // 					$(this).siblings('p').show();
    // 				});
    // 			});
    // 			e.preventDefault();
    // 		}
    // 	});
    // })
});
