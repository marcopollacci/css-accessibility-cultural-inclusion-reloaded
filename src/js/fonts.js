const replaceNoLatin = () => {
  Array.from(document.getElementsByClassName("no-replace-font")).forEach(
    (el) => {
      const originalText = el.textContent;
      const modifiedText = originalText.replace(/[^\x00-\x7F]/g, "�");
      el.innerText = modifiedText;
    }
  );
};

replaceNoLatin();
