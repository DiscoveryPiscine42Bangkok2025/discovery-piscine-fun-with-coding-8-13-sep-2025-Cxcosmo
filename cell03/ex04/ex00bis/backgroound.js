$(document).ready(function() {
  $("#btn").click(function() {
    $("body").css({
      backgroundColor: RandomColor()
    });
  });
  function RandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
});
