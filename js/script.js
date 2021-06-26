// button fill function
$(function() {
    $('button[type="submit"]').prop('disabled', true);
    $('#donasiForm').on('input', function(e) {
        if(this.value.length >= 6) {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });
});
//end function
