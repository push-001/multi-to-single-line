document.getElementById("copy-text-area")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit-button").click();
    }
});

function pasteFunction(){
  navigator.clipboard.readText()
    .then((copiedText) => {
      document.getElementById("copy-text-area").value = copiedText;
      setTimeout(()=> {
        copyFunction();
      }, 1000);
    });
}

function copyFunction() {
  document.getElementById("success-alert").style.display = "block";
  var content = document.getElementById("copy-text-area").value;
  // console.log(content);
  content = content.replace(/[\r\n]+/g, "\n");
  content = content.replace(/\n/g, " ");

  // console.log(content);
  var textArea = document.createElement("textarea");
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
  } catch (err) {
    console.log("Fallback: Oops, unable to copy", err);
  }
  document.body.removeChild(textArea);

  document.getElementById("copy-text-area").value = "";

  let hideSeek = setTimeout(function showElement(){
    document.getElementById("success-alert").style.display = "none";
}, 2000);

  
}
