window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element && element.tagName === 'DETAILS') {
        element.open = true;
      }
    }
  });