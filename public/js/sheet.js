$(".stat-button").click(function () {
    let stat = parseInt($(this).text());
    let statName = $(this).data("name");
    console.log()
    console.log("Success!");
    console.log(stat);
    statRoll(stat);
    console.log(result);
    if (result > 9) {
        $(".level-of-success").text('Success!');
    } else if (result > 5) {
        $(".level-of-success").text('Partial Success!');
    } else {
        $(".level-of-success").text('Failure! Mark Experience...');
    }
    $(".dice-result").text(`${rollOne} + ${rollTwo} + ${statName}(${stat}) = ${result}`);
})

function statRoll(stat) {
    rollOne = Math.floor(Math.random() * 6) + 1;
    rollTwo = Math.floor(Math.random() * 6) + 1;
    result = rollOne + rollTwo + stat;
}

