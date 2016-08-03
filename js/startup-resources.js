window.onload = function() {
   
};
$(document).ready(function() {
     $(document).on('click', '#show-resource-category', function(e) {
        //$("#resource-category").removeClass("hidden-xs hidden-sm");
        //$("#resource-category").hide().removeClass('hide').slideDown('fast')
        $("#resource-category").toggleClass("hidden-xs hidden-sm");
    });
});