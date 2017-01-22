console.log('Jan Klever');

$('a').on('mouseenter', function () {
    var attr = $(this).attr('id');
    $('#icon').html(attr);
    $('body').addClass('hover-' + attr);
});

$('a').on('mouseout', function () {
    var attr = $(this).attr('id');
    $('body').removeClass().fadeIn();
});
