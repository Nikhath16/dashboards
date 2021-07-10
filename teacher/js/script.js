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
        pageLength : 10,
    });
});
// $('body').on('mouseover mouseout', '.header-bottom .dropdown', function(e) {
//     $(e.target).dropdown('toggle');
// });
 // var table = $('#student-table').DataTable({
 //    pageLength : 5,
 //    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']]
 //  })