$("a")
  .each(function(i) {
    if (i != 0) { 
      $("#fart")
        .clone()
        .attr("id", "fart" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("farter", i);
  })
  .mouseenter(function() {
    $("#fart" + $(this).data("farter"))[0].play();
  });
$("#fart").attr("id", "fart0");