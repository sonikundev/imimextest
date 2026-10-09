export default function initialize(dom, timers) {
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

        // Pestañas de preguntas
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

        // Formulario de prototipo

        // Lecturas ilustrativas del hero
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        var live = {
          fp: {
            el: dom.querySelector('[data-live="fp"]'),
            v: 0.93,
            min: 0.9,
            max: 0.96,
            step: 0.01,
            dec: 2,
          },
          kw: {
            el: dom.querySelector('[data-live="kw"]'),
            v: 412,
            min: 388,
            max: 436,
            step: 6,
            dec: 0,
          },
          thd: {
            el: dom.querySelector('[data-live="thd"]'),
            v: 2.8,
            min: 2.3,
            max: 3.4,
            step: 0.15,
            dec: 1,
          },
        };
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
