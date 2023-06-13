// Define the texts to be typed
const texts = ["Data Engineer", "Python Developer"];

// Set the typing speed (in milliseconds)
const speed = 100;

// Get the target element
const typingTextElement = document.getElementById("typing-text");

// Function to simulate typing animation
function typeWriter(index, text, currentText = "") {
  if (index >= text.length) {
    // All texts have been typed
    return;
  }

  if (currentText !== text[index]) {
    // Text is still being typed
    typingTextElement.textContent = text[index].substring(
      0,
      currentText.length + 1
    );
    setTimeout(
      () => typeWriter(index, text, typingTextElement.textContent),
      speed
    );
  } else {
    // Text has been fully typed, wait for a delay before removing
    setTimeout(() => removeText(index, text, currentText), 1000);
  }
}

// Function to remove typed text
function removeText(index, text, currentText) {
  if (currentText.length === 0) {
    // Text has been fully removed, proceed to the next text
    index++;
    if (index >= text.length) {
      index = 0; // Start from the first text if all texts have been shown
    }
    setTimeout(() => typeWriter(index, text), speed);
  } else {
    // Text is still being removed
    typingTextElement.textContent = currentText.substring(
      0,
      currentText.length - 1
    );
    setTimeout(
      () => removeText(index, text, typingTextElement.textContent),
      speed
    );
  }
}

// Start the typing animation
typeWriter(0, texts);
