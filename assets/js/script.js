$(document).ready(function(){

    // For smooth scrolling effects
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 700);
    });

    // For all the modal pop ups in the project section
    $('#ShareTea').click(function() {
        $("#modal-ShareTea").modal('show');
    });

    $('#UCha').click(function() {
        $("#modal-UCha").modal('show');
    });

    $('#Plentea').click(function() {
        $("#modal-Plentea").modal('show');
    });

    $('#Sweetheart').click(function() {
        $("#modal-Sweetheart").modal('show');
    });

    $('#telegraph').click(function() {
        $("#modal-telegraph").modal('show');
    });

    $('#cory').click(function() {
        $("#modal-cory").modal('show');
    });

    $('#ucafe').click(function() {
        $("#modal-ucafe").modal('show');
    });

    $('#sk').click(function() {
        $("#modal-sk").modal('show');
    });

    $('#degreec').click(function() {
        $("#modal-degreec").modal('show');
    });

    $('#asha').click(function() {
        $("#modal-asha").modal('show');
    });

    $('#peakpoint').click(function() {
        $("#modal-peakpoint").modal('show');
    });

    $('#tastypot').click(function() {
        $("#modal-tastypot").modal('show');
    });


    // Form information

    $(function() {

     
        var form = $('#ajax-contact');

        var formMessages = $('#form-messages');

        $(form).submit(function(e) {
            e.preventDefault();

            var formData = $(form).serialize();

            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
             
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

           
                $(formMessages).text(response);

                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
              
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
   

});  