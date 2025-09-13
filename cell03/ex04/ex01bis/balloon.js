$(document).ready(function () {
    let size = 200;
    const colors = ['#ffbbbbff', '#77fb86ff', '#00bbffff'];
    let colorIndex = 0;
    $("#balloon").click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }
        $("#balloon").css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
    });
    $("#balloon").mouseleave(function () { 
        if (size > 220) {
            size -= 5;
            colorIndex = (colorIndex + 1) % colors.length;
        }
        $("#balloon").css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
    });
});