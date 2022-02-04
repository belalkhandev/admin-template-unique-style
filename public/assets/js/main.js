(function($){
    "use-strict"

    //on document ready function
    jQuery(document).ready(function(){
        
        $(document).on('click', '.has-multimenu .menu-link', function(e) {
            e.preventDefault();            
            $('.navigation-item').removeClass('open');
            $(this).closest('.navigation-item').addClass('open');
        });
        
        $(document).on('click', '.navigation-content', function(e) {
            e.preventDefault();            
            $(this).closest('.navigation-item').removeClass('open');
        });

        $(document).on('click', '.rs-open-sidebar .navigation-item .menu-link', function() {                      
            $('.wrapper').removeClass('rs-open-sidebar');
        });

        $(document).on('click', '#drawer', function(e) {
            $('.wrapper').addClass('rs-open-sidebar');
        });

    });

    //on load windw
    jQuery(window).on('load', function() {
        
    });



}(jQuery))
