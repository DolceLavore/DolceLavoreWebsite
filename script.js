(function () {
  var S = window.SITE, $ = function (s) { return document.querySelector(s); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t == null ? "" : t; return d.innerHTML; };

  // Menu
  $("#menu-groups").innerHTML = S.menu.map(function (g) {
    return '<div class="group"><h3>' + esc(g.group) + '</h3><div class="grid">' + g.items.map(function (i) {
      return '<article class="card">' + (S.images[i.name] ? '<img src="' + S.images[i.name] + '" alt="' + esc(i.name) + '" loading="lazy" width="1100" height="800">' : '<div class="ph" role="img" aria-label="Photo of ' + esc(i.name) + ' coming soon">Photo coming soon</div>') + '<div class="body"><h4>' + esc(i.name) + '</h4>' +
        (i.desc ? '<p>' + esc(i.desc) + '</p>' : '') + (i.flavors.length ? '<p><em>' + i.flavors.map(esc).join(", ") + '</em></p>' : '') +
        '<span class="price">' + esc(i.price || S.priceNote) + '</span><a class="btn small order-link" href="#contact">ORDER</a></div></article>';
    }).join("") + '</div></div>';
  }).join("");

  // Events
  $("#events").innerHTML = S.events.length ? S.events.map(function (e) {
    return '<article class="card"><div class="body"><h4>' + esc(e.name) + '</h4><p>' + esc(e.date) + ' · ' + esc(e.time) + '</p><p>' + esc(e.location) + '<br>' + esc(e.address) + '</p><p><em>' + esc(e.desserts) + '</em></p>' +
      (e.mapUrl ? '<a class="btn small alt" href="' + esc(e.mapUrl) + '">DIRECTIONS</a>' : '') + '</div></article>';
  }).join("") : '<p class="empty" style="grid-column:1/-1">No pop-ups are posted right now. Follow us or contact us for upcoming dates.</p>';

  // Reviews
  $("#reviews-list").innerHTML = S.testimonials.length ? S.testimonials.map(function (t) {
    return '<blockquote class="quote"><p>' + esc(t.text) + '</p><footer style="all:unset"><strong>' + esc(t.name) + '</strong>' + (t.item ? ', ' + esc(t.item) : '') + (t.stars ? ' · ' + t.stars + '/5' : '') + '</footer></blockquote>';
  }).join("") : '<p class="empty" style="grid-column:1/-1">Customer reviews will appear here.</p>';

  // FAQ
  $("#faq-list").innerHTML = S.faq.map(function (f) { return '<details><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>'; }).join("");

  // Gallery with category filter
  var cats = ["All"].concat(S.gallery.map(function (g) { return g.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  function drawGal(c) { $("#gal").innerHTML = S.gallery.filter(function (g) { return c === "All" || g.cat === c; }).map(function (g) { return '<img src="' + g.f + '" alt="' + esc(g.alt) + '" loading="lazy">'; }).join(""); }
  $("#gal-filter").innerHTML = cats.map(function (c, i) { return '<button type="button" class="chip" aria-pressed="' + (i === 0) + '">' + c + '</button>'; }).join("");
  $("#gal-filter").addEventListener("click", function (e) { if (e.target.className !== "chip") return; document.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", b === e.target); }); drawGal(e.target.textContent); });
  drawGal("All");

  var lb = $("#lb"), lbi = $("#lb img");
  $("#gal").addEventListener("click", function (e) { if (e.target.tagName === "IMG") { lbi.src = e.target.src; lbi.alt = e.target.alt; lb.showModal(); } });
  lb.addEventListener("click", function () { lb.close(); });
  window.addEventListener("scroll", function () { document.querySelector("header").classList.toggle("stuck", window.scrollY > 10); }, { passive: true });

  // Contact extras + social
  $("#contact-extra").textContent = [S.phone && "Phone: " + S.phone, S.hours && "Hours: " + S.hours, S.serviceArea && "Area: " + S.serviceArea].filter(Boolean).join(" · ");
  $("#social").innerHTML = Object.keys(S.social).filter(function (k) { return S.social[k]; }).map(function (k) { return '<li><a href="' + esc(S.social[k]) + '" rel="noopener">' + k + '</a></li>'; }).join("");

  // Order links: use external ordering service when configured
  document.querySelectorAll(".order-link").forEach(function (a) { if (S.orderUrl) { a.href = S.orderUrl; a.target = "_blank"; a.rel = "noopener"; } });

  // Mobile nav
  var btn = $(".menu-btn"), list = $("#nav-list");
  btn.addEventListener("click", function () { var o = list.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  list.addEventListener("click", function (e) { if (e.target.tagName === "A") { list.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });

  // Forms: validate, and only claim success if a real endpoint is configured
  document.querySelectorAll("form[data-form]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var m = f.querySelector(".msg"); m.hidden = false;
      var bad = Array.prototype.filter.call(f.elements, function (el) { return el.name && !el.checkValidity(); });
      if (bad.length) { m.className = "msg err"; m.textContent = "Please complete: " + bad.map(function (el) { return el.closest("label").firstChild.textContent; }).join(", ") + "."; bad[0].focus(); return; }
      if (!S.formEndpoint) { m.className = "msg info"; m.innerHTML = 'Online sending is not connected yet, so nothing was sent. Please email <a href="mailto:' + S.email + '">' + S.email + '</a> instead.'; return; }
      m.className = "msg info"; m.textContent = "Sending…";
      fetch(S.formEndpoint, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw 0; m.className = "msg ok"; m.textContent = "Thank you. Your " + f.dataset.form.toLowerCase() + " was sent."; f.reset(); })
        .catch(function () { m.className = "msg err"; m.innerHTML = 'Something went wrong and your message was not sent. Please email <a href="mailto:' + S.email + '">' + S.email + '</a>.'; });
    });
  });

  // Gentle reveal on headings only
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); });
    document.querySelectorAll("h2").forEach(function (h) { h.classList.add("reveal"); io.observe(h); });
  }
})();
