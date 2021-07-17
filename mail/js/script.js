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
     $(document).ready(function() {
    $('#student-table').DataTable({
        lengthChange: true,
    });
});
     $(document).ready(function () {
$('#sessions').DataTable({
    processing: true,
    deferRender: true,
    pageLength: 10,
});
});

    $('.Show').click(function() {
    $('#target').hide(200);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});

     