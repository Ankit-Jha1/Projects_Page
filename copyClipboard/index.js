const topaste = document.getElementById("t2");
var copied;
function copyToClipboard() {
  var t1 = document.getElementById("t1");
  copied = t1.value;
  navigator.clipboard.writeText(t1.value);
  alert("text copied successfully");
}

function pasteToClipboard() {
  topaste.value = copied;
}
