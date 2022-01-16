(function($){
    "use-strict"

    //on document ready function
    jQuery(document).ready(function(){
        
        $(document).on('click', '.has-multimenu .nav-link', function(e) {
            e.preventDefault();            
            $('.navigation-item').removeClass('open');
            $(this).closest('.navigation-item').addClass('open');
        });
        
        $(document).on('click', '.navigation-content', function(e) {
            e.preventDefault();            
            $(this).closest('.navigation-item').removeClass('open');
        });

    });

    //on load windw
    jQuery(window).on('load', function() {
        
    });



}(jQuery))
