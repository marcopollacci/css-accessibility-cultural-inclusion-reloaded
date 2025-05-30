const exampleTwo = () => {
  const spanToCheck = Array.from(document.querySelectorAll('.example-inclusion-2 div span'));
  const faces = spanToCheck.map(el => el.innerHTML);
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      const isVisibile = mutation.target.getAttribute('aria-hidden') === 'false';
      const hasBorderRed = mutation.target.hasAttribute('border-red');
      if (hasBorderRed) {
        const divRtl = document.querySelector('.example-inclusion-2 div[dir="rtl"] span');
        divRtl.style.borderColor = isVisibile ? '#ff0000' : '#ffffff';
        return;
      }
      spanToCheck.forEach((el, index) => {
        const value = '1em';
        el.style.marginRight = !isVisibile ? value : '';
        el.style.marginInlineEnd = isVisibile ? value : '';
        if (index === 1) {
          el.innerHTML = faces[isVisibile ? 0 : 1];
          el.style.borderColor = '';
        }
      });
    });
  });
  document.querySelectorAll('.example-inclusion-2 p-fragment.trigger').forEach(el => {
    observer.observe(el, {
      attributes: true,
      attributeFilter: ['aria-hidden']
    });
  });
};

exampleTwo();
