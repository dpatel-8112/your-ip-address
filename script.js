function myFunction() {
  var copyText = document.getElementById("ip-address1");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Successfully !!! Copied the text: " + copyText.value);
}


