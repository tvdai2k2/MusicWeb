$(document).ready(function () {
    $('.info-post .col-md-2').hover(
        function () {
            $(this).addClass(["dark-light-bg", "rounded"]);
            $(this).find('.play-btn').css("visibility","visible")
        },
        function () {
            $(this).removeClass(["dark-light-bg", "rounded"])
            $(this).find('.play-btn').css("visibility", "hidden")
        }
    )
});
