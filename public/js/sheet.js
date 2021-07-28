$(".stat-button").click(function () {

    $(".level-of-success").text('');
    $(".dice-result").text('');

    let stat = parseInt($(this).text());
    let statName = $(this).data("name");
    
    statRoll(stat);
    console.log(result);
    if (result > 9) {
        $(".level-of-success").text('Success!');
    } else if (result > 6) {
        $(".level-of-success").text('Partial Success!');
    } else {
        $(".level-of-success").text('Failure! Mark Experience...');
    }
    $(".dice-result").text(`${rollOne} + ${rollTwo} + ${statName}(${stat}) = ${result}`);

    window.scrollTo(0, document.body.scrollHeight);
})

function statRoll(stat) {
    rollOne = Math.floor(Math.random() * 6) + 1;
    rollTwo = Math.floor(Math.random() * 6) + 1;
    result = rollOne + rollTwo + stat;
}

$(".stat-damage").click(function () {

    $(".level-of-success").text('');
    $(".dice-result").text('');

    let damage = parseInt($(this).text());
    
    damageRoll(damage);
    console.log(result);
    
    $(".dice-result").text(`Damage = ${result}`);

    window.scrollTo(0, document.body.scrollHeight);
})

function damageRoll(damage) {
    result = Math.floor(Math.random() * damage) + 1;
}

$('input[name=weakened]').change(function () {
    if ($(this).is(':checked')) {
        $("#strength").addClass("red");
        $("#dexterity").addClass("red");
    } else {
        $("#strength").removeClass("red");
        $("#dexterity").removeClass("red");
    }
});

$('input[name=dazed]').change(function () {
    if ($(this).is(':checked')) {
        $("#intelligence").addClass("red");
        $("#wisdom").addClass("red");
    } else {
        $("#intelligence").removeClass("red");
        $("#wisdom").removeClass("red");
    }
});

$('input[name=miserable]').change(function () {
    if ($(this).is(':checked')) {
        $("#constitution").addClass("red");
        $("#charisma").addClass("red");
    } else {
        $("#constitution").removeClass("red");
        $("#charisma").removeClass("red");
    }
});