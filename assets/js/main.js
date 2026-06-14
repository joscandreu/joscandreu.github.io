// Responsive menu: toggles the sections menu on mobile.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-sections');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
