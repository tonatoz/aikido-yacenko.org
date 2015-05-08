(function (d, w, c) {
  "use strict";
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter26160183 = new Ya.Metrika({
        id: 26160183,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    } catch (e) {
    }
  });
  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () {
      n.parentNode.insertBefore(s, n);
    };
  s.type = "text/javascript";
  s.async = true;
  s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else {
    f();
  }
})(document, window, "yandex_metrika_callbacks");
