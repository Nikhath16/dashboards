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
$(document).ready(function() {
    $('#student-table2').DataTable({
        lengthChange: true,
    });
});
$('body').on('mouseover mouseout', '.header-bottom .dropdown', function(e) {
    $(e.target).dropdown('toggle');
});
$(".panel-left").resizable({
   handleSelector: ".splitter",
   resizeHeight: false
 });

 $(".panel-top").resizable({
   handleSelector: ".splitter-horizontal",
   resizeWidth: false
 });



 function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}