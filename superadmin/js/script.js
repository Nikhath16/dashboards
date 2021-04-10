$(document).ready(function() {

    $('#sidebarCollapse').click(function() {
        $("#sidebar").toggleClass('sidebar-minimized');
        // $("#sidebar").toggleClass('sidebar-show');
        // $("#overlay").toggleClass('active');
    });
    // $('#overlay').click(function() {
    //     $("#overlay").removeClass('active');
    //     $("#sidebar").toggleClass('sidebar-show');
    // });


});
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
    $('[data-toggle="popover"]').popover()
});

$(document).ready(function() {
    $('#student-table').DataTable({
        lengthChange: true,
    });
});
$(document).ready(function() {
    $('#student-table1').DataTable({
        lengthChange: true,
    });
});
// $('body').on('mouseover mouseout', '.header-bottom .dropdown', function(e) {
//     $(e.target).dropdown('toggle');
// });