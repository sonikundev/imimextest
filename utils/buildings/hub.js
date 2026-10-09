export default function initialize(dom, timers) {
// En la vista previa publicada, el enlace a mantenimiento apunta a su prototipo

        // Botones que preseleccionan el tipo de solicitud en el formulario
        var bms = dom.getElementById("f-bms");
        dom.querySelectorAll("[data-interes]").forEach(function (a) {
          a.addEventListener("click", function () {
            if (a.dataset.interes === "existente") {
              bms.value = "si-falla";
            } else if (
              a.dataset.interes === "nuevo" &&
              bms.value === "si-falla"
            ) {
              bms.value = "";
            }
          });
        });

        // Aviso para paginas que aun no existen (fase 1)
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
        // Fichas de casos de referencia
        dom.querySelectorAll("[data-modal]").forEach(function (b) {
          var dlg = dom.getElementById(b.dataset.modal);
          if (!dlg) return;
          b.addEventListener("click", function () {
            if (dlg.showModal) dlg.showModal();
            else dlg.setAttribute("open", "");
          });
        });
        dom.querySelectorAll(".case-modal").forEach(function (dlg) {
          dlg.addEventListener("click", function (e) {
            if (e.target === dlg) dlg.close();
          });
          dlg.querySelectorAll("[data-close]").forEach(function (c) {
            c.addEventListener("click", function () {
              dlg.close();
            });
          });
        });
        dom.querySelectorAll(".caso.pendiente").forEach(function (a) {
          a.addEventListener("click", function (e) {
            e.preventDefault();
            aviso("Caso de éxito en preparación.");
          });
        });
        dom.querySelectorAll(".proximamente").forEach(function (a) {
          a.addEventListener("click", function (e) {
            e.preventDefault();
            aviso("Esta página se construye en la siguiente etapa.");
          });
        });

        // Formulario de prototipo: valida y muestra confirmacion, no envia datos

        // Lecturas ilustrativas del hero (se desactivan con movimiento reducido)
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        var live = {
          temp: {
            el: dom.querySelector('[data-live="temp"]'),
            v: 22.4,
            min: 21.8,
            max: 23.1,
            step: 0.2,
            dec: 1,
          },
          kw: {
            el: dom.querySelector('[data-live="kw"]'),
            v: 412,
            min: 388,
            max: 436,
            step: 6,
            dec: 0,
          },
          co2: {
            el: dom.querySelector('[data-live="co2"]'),
            v: 610,
            min: 560,
            max: 690,
            step: 15,
            dec: 0,
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
