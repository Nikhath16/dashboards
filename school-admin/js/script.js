$(document).ready(function() {

    $('#header-toggler').click(function() {
        $("#sidebar").toggleClass('sidebar-minimized');
        $("#sidebar").toggleClass('sidebar-show');
        $("#overlay").toggleClass('active');
    });
    $('#overlay').click(function() {
        $("#overlay").removeClass('active');
        $("#sidebar").toggleClass('sidebar-show');
    });


});   
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
     $(function () {
    $('[data-toggle="popover"]').popover()
  })
     $(document).ready(function () {
$('#sessions').DataTable({
    processing: true,
    deferRender: true,
    pageLength: 10,
});
});
     