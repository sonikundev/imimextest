export default function initialize(dom, timers) {
var tabs = Array.prototype.slice.call(
          dom.querySelectorAll(".qa-tab"),
        );
        function select(tab) {
          tabs.forEach(function (t) {
            var on = t === tab;
            t.setAttribute("aria-selected", on ? "true" : "false");
            t.tabIndex = on ? 0 : -1;
            dom.getElementById(t.getAttribute("aria-controls")).hidden =
              !on;
          });
        }
        tabs.forEach(function (t, i) {
          t.addEventListener("click", function () {
            select(t);
          });
          t.addEventListener("keydown", function (e) {
            var k = e.key,
              n = null;
            if (k === "ArrowDown" || k === "ArrowRight")
              n = tabs[(i + 1) % tabs.length];
            if (k === "ArrowUp" || k === "ArrowLeft")
              n = tabs[(i - 1 + tabs.length) % tabs.length];
            if (n) {
              e.preventDefault();
              select(n);
              n.focus();
            }
          });
        });
        var toast = dom.getElementById("toast"),
          tt;
        function aviso(msg) {
          toast.textContent = msg;
          toast.classList.add("show");
          timers.clearTimeout(tt);
          tt = timers.setTimeout(function () {
            toast.classList.remove("show");
          }, 2600);
        }
        dom.querySelectorAll(".proximamente").forEach(function (a) {
          a.addEventListener("click", function (e) {
            e.preventDefault();
            aviso("Esta página se construye en la siguiente etapa.");
          });
        });
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        var live = {
          hr: { v: 52, min: 49, max: 55, step: 1, dec: 0 },
          ref: { v: 4.6, min: 4.2, max: 5.1, step: 0.1, dec: 1 },
        };
        Object.keys(live).forEach(function (k) {
          live[k].el = dom.querySelector('[data-live="' + k + '"]');
        });
        timers.setInterval(function () {
          Object.keys(live).forEach(function (k) {
            var s = live[k];
            s.v = Math.min(
              s.max,
              Math.max(s.min, s.v + (Math.random() - 0.5) * 2 * s.step),
            );
            s.el.textContent = s.v.toFixed(s.dec);
          });
        }, 2400);
}
