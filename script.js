
$("button").click(function() {
    $("#coins").show();
    $("h3").show();
});
$("#coins").click(function() {
    $("#pirate").show();
});
$("h2").show();
$("#pirate").click(function() {
    $("#bird").toggle();
    $("h4").show();
});
$("#bird").click(function() {
    $("secret").slide();
    $("h5").slide();
});

