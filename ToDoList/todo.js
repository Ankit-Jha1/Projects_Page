$("#formin").submit(function (e) {
  // no reload
  e.preventDefault();
  var value = $("#userinput").val();
  if (value.trim() != 0) {
    $("#lists").append(
      "<li>" +
        value +
        "<span><i class='fa-solid fa-trash-can'></i></span>" +
        "</li>"
    );
    // empty the input box
    $("#userinput").val("");
  }
});

$("#userinput").val("");

$("ul").on("click", "span", function (e) {
  $(this).closest("li").remove();
});
