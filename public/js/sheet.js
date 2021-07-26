let rollOne;
let rollTwo;

$(".str").click(function () {
    let stat = parseInt($(".str").text());
    statRoll(stat);
    console.log(result);
    if (result > 9) {
        $(".level-of-success").text('Success!');
    } else if (result > 5) {
        $(".level-of-success").text('Partial Success!');
    } else {
        $(".level-of-success").text('Failure! Mark Experience...');
    }
    $(".dice-result").text(`${rollOne} + ${rollTwo} + ${stat} = ${result}`);
})

function statRoll(stat) {
    rollOne = Math.floor(Math.random() * 6) + 1;
    rollTwo = Math.floor(Math.random() * 6) + 1;

    result = rollOne + rollTwo + stat;
}