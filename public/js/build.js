
'use strict';

;( function ( document, window, index )
{
    $(document).ready(function(){
        var scrollTop = 0;
        $(window).scroll(function(){
            scrollTop = $(window).scrollTop();
            $('.counter').html(scrollTop);
            
            if (scrollTop >= 10) {
            $('.desktopNav').addClass('scrolled-nav');
            } else if (scrollTop < 10) {
            $('.desktopNav').removeClass('scrolled-nav');
            } 
        }); 
    });

    let $submitModal = $('.valid-register');

    function openSuccessModal() {
        $submitModal.attr('data-target', '#submissionModal')
    };

    function openErrorModal() {
        $submitModal.attr('data-target', '#errorModal')
    }

    $submitModal.on('click', function(e) {
        let firstNameLen = $(this).parent().prev().find('#firstName').val().length;
        let lastNameLen = $(this).parent().prev().find('#lastName').val().length;
        let emailLen = $(this).parent().prev().find('#emailAddress').val().length;
        let phoneLen = $(this).parent().prev().find('#phone').val().length;
        
        if ( firstNameLen < 1 || lastNameLen < 1 || emailLen < 3 || phoneLen < 10 ) {
            e.preventDefault();
            openErrorModal();
        } 
        else {
            openSuccessModal();
        }
    })
}( document, window, 0 ));