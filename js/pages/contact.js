/*
 *  Document   : contact.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Contact page
 */
// Get link
        var link = $('#to-bottom');
        var windowW = window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth;

        // On click get to Bottom
        link.click(function() {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
            return false;
        });
var Contact = function() {

    return {
        init: function() {
            /*
             * With Gmaps.js, Check out examples and documentation at http://hpneo.github.io/gmaps/examples.html
             */

            // Initialize map
            /*new GMaps({
                div: '#gmap',
                lat: -33.8703,
                lng: 151.2254,
                zoom: 15,
                disableDefaultUI: true,
                scrollwheel: false
            }).addMarkers([
                {
                    lat: -33.8703,
                    lng: 151.2254,
                    title: 'Find Us',
                    infoWindow: {content: '<strong>Company Address &amp; Info</strong>'},
                    animation: google.maps.Animation.DROP
                }
            ]);*/

            /*
             *  Jquery Validation, Check out more examples and documentation at https://github.com/jzaefferer/jquery-validation
             */

            /* Initialize Form Validation */
            $('#form-contact').validate({
                errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation
                errorElement: 'div',
                errorPlacement: function(error, e) {
                    e.parents('.form-group').append(error);
                },
                highlight: function(e) {
                    $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
                    $(e).closest('.help-block').remove();
                },
                success: function(e) {
                    // You can use the following if you would like to highlight with green color the input after successful validation!
                    e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
                    e.closest('.help-block').remove();
                },
                rules: {
                    'contact-email': {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    'contact-email': 'Please enter valid email id'
                },
                submitHandler: function(form) {
                    var email_id=$("#contact-email").val();
                    //ajax mail coding
                    $.post('http://spreadr.co/js/pages/mail.php', {
                        email_id : email_id
                         }, function(data) {  
                             console.log(data);
                             $('#modal-regular').modal()  ;
                             /*if(data==0){
                                 alert("thanx");
                             }
                             else{
                                 alert("Already Present");
                             }*/
                             //window.location.assign(base_url+"billing"); 
                             //window.location.reload();
                     });
                }
            });
            
            /* Initialize Form Validation */
            $('#form-contact-down').validate({
                errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation
                errorElement: 'div',
                errorPlacement: function(error, e) {
                    e.parents('.form-group').append(error);
                },
                highlight: function(e) {
                    $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
                    $(e).closest('.help-block').remove();
                },
                success: function(e) {
                    // You can use the following if you would like to highlight with green color the input after successful validation!
                    e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
                    e.closest('.help-block').remove();
                },
                rules: {
                    'contact-email': {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    'contact-email': 'Please enter valid email id'
                },
                submitHandler: function(form) {
                    var email_id=$("#contact-email-down").val();
                    //ajax mail coding
                    $.post('http://spreadr.co/js/pages/mail.php', {
                        email_id : email_id
                         }, function(data) {  
                             console.log(data);
                             $('#modal-regular').modal()  ;
                             /*if(data==0){
                                 alert("thanx");
                             }
                             else{
                                 alert("Already Present");
                             }*/
                             //window.location.assign(base_url+"billing"); 
                             //window.location.reload();
                     });
                }
            });
        }
    };
}();