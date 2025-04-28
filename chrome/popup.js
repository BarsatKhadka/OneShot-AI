function clearTextBox() {
    const promptInput = document.getElementById('promptInput');
    promptInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.getElementById('clearPrompt');
    clearButton.addEventListener('click', clearTextBox);
});