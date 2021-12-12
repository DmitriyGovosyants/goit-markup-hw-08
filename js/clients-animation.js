(function () {
  var square = document.querySelector('.clients-animation-wrapper');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.clients-animation');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('clients-animation-added');
        return;
      }

      entrySquare.classList.remove('clients-animation-added');
    });
  });

  observer.observe(square);
})();