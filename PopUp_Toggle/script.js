$(document).ready(() => {
  $(".pop").click(() => {
    $("#box").addClass("show");
  });
  $(".toggle").click(function () {
    $("#box").toggleClass("show");
  });

  $(".material-symbols-outlined").click(() => {
    $("#box").removeClass("show");
  });
  $("#submission").click(() => {
    let valid = true;
    let name = document.getElementById("uname").value;
    if (name.length < 3) {
      valid = valid & false;
      $("#warn-name").text("Invalid username");
      $("#warn-name").css("color", "red");
    }
    let mail = document.getElementById("mail").value;
    if (mail.search("@gmail.com") == -1) {
      valid = valid & false;
      $("#warn-mail").text("Invalid email");
      $("#warn-mail").css("color", "red");
    }
    if (valid == true) {
      $("warn-name").text("");
      $("warn-mail").text("");
      $("#box").removeClass("show");
    }
  });
});
