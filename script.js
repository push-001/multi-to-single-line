document.getElementById("copy-text-area")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") { // Use 'key' instead of 'keyCode'
        document.getElementById("submit-button").click();
    }
});

function pasteFunction() {
  navigator.clipboard.readText()
    .then((copiedText) => {
      const textArea = document.getElementById("copy-text-area");
      textArea.value = copiedText;
      copyFunction(); // No need for setTimeout
    })
    .catch((err) => {
      console.error("Failed to read clipboard content:", err);
    });
}

function copyFunction() {
  const contentElement = document.getElementById("copy-text-area");
  let content = contentElement.value.trim(); // Remove extra spaces/newlines
  
  // Replace multiple spaces between words with a single space
  content = content.replace(/\s+/g, " ");

  navigator.clipboard.writeText(content)
    .then(() => {
      document.getElementById("success-alert").style.display = "block";
      contentElement.value = ""; // Clear input after copying

      setTimeout(() => {
        document.getElementById("success-alert").style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy content:", err);
    });
}
