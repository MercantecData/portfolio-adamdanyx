$(document).ready(function () {
    $("img").hide()

    $(".button.imageButton").click(function (e) { 
        e.preventDefault();
        $("img").fadeIn()
    });
});