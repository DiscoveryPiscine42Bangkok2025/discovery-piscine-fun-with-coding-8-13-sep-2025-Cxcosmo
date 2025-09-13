$(document).ready(function () {
    $("#result").click(function(){
        let left = $("#left").val().trim();
        let right = $("#right").val().trim();
        let op = $("#operator").val();

        if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
            alert("Error :(");
            return;
        }
        const a = parseInt(left, 10);
        const b = parseInt(right, 10);
        let result;
        if ((op === "/" || op === "%") && b === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }
        switch (op) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = a / b; break;
            case "%": result = a % b; break;
        }
        alert(result);
        console.log(result);
    });
    setInterval(function () {
        alert("Please, use me....·°՞(っ-ᯅ-ς)՞°·.");
    }, 30000);
});