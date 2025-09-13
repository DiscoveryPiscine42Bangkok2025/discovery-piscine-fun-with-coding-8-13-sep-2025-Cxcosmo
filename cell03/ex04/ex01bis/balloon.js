$(document).ready(function () {
    let size = 200;
    const colors = ['#bbedffff', '#77d8fbff', '#00bbffff'];
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
    $("#balloon").mouseenter(function () { 
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