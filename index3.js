let otvet = null;
document.getElementById("task1").addEventListener("click", function () {
    const xInput = document.getElementById("x").value;
    const yInput = document.getElementById("y").value;
    const x = parseFloat(xInput);
    const y = parseFloat(yInput);
    if (isNaN(x) || isNaN(y)) {
        document.getElementById("z").textContent = "требуется ввести числа";
        return;
    }
    let z; let formula;
    if (x > y) {
        z = Math.pow(x, y);
        formula = "z = x^y";
    }
    else {
        z = Math.log(x + y);
        formula = "z = ln(x + y)";
    }
    otvet = {
        x: x,
        y: y,
        z: z,
        formula: formula
    };
    document.getElementById("z").textContent = `Результат Z: ${z}`;
});



document.getElementById("sending").addEventListener("click", function () {
    if (!z) {
        alert("сначала нажмите 'вычислить'");
        return;
    }

    const stroka = new URLSearchParams({
        formulation: "Вычислить z по формуле. Если x>y, z=x^y, иначе z=ln(x+y).",
        x: otvet.x,
        y: otvet.y,
        z: otvet.z,
        result: `Результат: ${otvet.z}`
    }).toString();
    window.location.href = `https://www.bing.com/search?q=search&${stroka}`;
});
