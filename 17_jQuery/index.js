$(document).ready(function(){

$('h1').addClass("big-title");
$('button').addClass("boxes");

$("button").click(function(){
    $("h1").slideToggle();
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").before("<button>New!</button>");

});

