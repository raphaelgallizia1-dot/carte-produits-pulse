(function () {
  var optis = window.OPTIS || [];
  var parId = {};
  optis.forEach(function (o) { parId[o.id] = o; });
  function $(id) { return document.getElementById(id); }
  function ic(nom, cls) { return '<svg class="' + cls + '" aria-hidden="true"><use href="#' + nom + '"></use></svg>'; }

  var items = Array.prototype.slice.call(document.querySelectorAll('.appli-item'));
  function montrer(id) {
    var o = parId[id];
    if (!o) return;
    items.forEach(function (b) { b.classList.toggle('est-active', b.dataset.opti === id); });
    $('ad-ic').innerHTML = ic(o.icone, 'ic');
    $('ad-cat').textContent = o.categorie;
    $('ad-nom').textContent = o.nom;
    $('ad-accroche').textContent = o.accroche;
    $('ad-prix').textContent = o.prix + ' €';
    var ul = $('ad-contenu');
    ul.innerHTML = '';
    o.contenu.forEach(function (t) {
      var li = document.createElement('li');
      li.innerHTML = ic('i-check', 'ic-check');
      li.appendChild(document.createTextNode(t));
      ul.appendChild(li);
    });
  }
  items.forEach(function (b) {
    b.addEventListener('click', function () { montrer(b.dataset.opti); });
  });
})();
