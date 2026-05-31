const copyButton = document.getElementById('copy-citation');
const citationText = document.getElementById('citation-text');

if (copyButton && citationText) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citationText.textContent.trim());
      copyButton.textContent = 'Copied';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy BibTeX';
      }, 1500);
    } catch {
      copyButton.textContent = 'Copy failed';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy BibTeX';
      }, 1500);
    }
  });
}