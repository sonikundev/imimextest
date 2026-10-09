export default function initialize(dom, timers) {
// Cadena de continuidad
        var LINKS = [
          {
            id: "torre",
            n: "Acometida",
            h: "Acometida y calidad del suministro",
            f: "Huecos, sobretensiones y transitorios que llegan de la red y afectan a todo lo que está aguas abajo.",
            w: "Calidad de energía, demanda, factor de potencia y eventos con fecha y hora en el punto de entrada.",
            g: "Sabe si un problema vino de la red o de su instalación, y tiene evidencia para reclamarlo.",
            t: "Principalmente Power Automation",
          },
          {
            id: "planta",
            n: "Planta y transferencia",
            h: "Planta de emergencia y transferencia",
            f: "Una planta que no arranca a tiempo o una transferencia que tarda más de lo esperado.",
            w: "Estado de la planta y de la transferencia, tiempos de cada maniobra y resultado de las pruebas periódicas.",
            g: "Confianza de que el respaldo responderá cuando lo necesite, con registro de cada prueba.",
            t: "Building Automation y Power Automation",
          },
          {
            id: "ups",
            n: "UPS y baterías",
            h: "UPS y baterías",
            f: "Un UPS sobrecargado, en bypass o con baterías degradadas que no darán la autonomía esperada.",
            w: "Carga, modo de operación, alarmas y estado reportado por cada UPS y sus baterías.",
            g: "Detecta a tiempo un respaldo que ya no es suficiente, antes de una falla de la red.",
            t: "Building Automation y Power Automation",
          },
          {
            id: "dist",
            n: "Distribución",
            h: "Tableros y distribución a racks",
            f: "Circuitos al límite, cargas desbalanceadas o una redundancia que en la práctica ya no existe.",
            w: "Consumo, demanda y capacidad disponible por tablero y por alimentación A y B.",
            g: "Sabe exactamente dónde puede crecer y dónde ya no hay margen.",
            t: "Principalmente Power Automation",
          },
          {
            id: "frio",
            n: "Enfriamiento",
            h: "Enfriamiento de precisión",
            f: "Una unidad en falla, un control mal ajustado o equipos trabajando unos contra otros.",
            w: "Estado y alarmas de cada unidad, temperaturas de suministro y retorno, y su consumo eléctrico.",
            g: "Enfriamiento confiable con el menor consumo posible, y un PUE que puede mejorar.",
            t: "Principalmente Building Automation",
          },
          {
            id: "rack",
            n: "Sala y racks",
            h: "Condiciones de la sala y los racks",
            f: "Puntos calientes, humedad fuera de rango, fugas de agua o accesos no autorizados.",
            w: "Temperatura y humedad por pasillo o rack, detección de fugas, accesos y estado del sistema contra incendio.",
            g: "Sus equipos de TI siempre en las condiciones que usted definió.",
            t: "Principalmente Building Automation",
          },
        ];
        var chain = dom.getElementById("chain"),
          btns = [],
          cur = 0;
        LINKS.forEach(function (l, i) {
          var b = document.createElement("button");
          b.className = "cbtn";
          b.type = "button";
          b.setAttribute("role", "tab");
          b.setAttribute("aria-controls", "link-panel");
          b.innerHTML =
            '<span class="cico"><svg aria-hidden="true"><use href="#c-' +
            l.id +
            '"/></svg></span><span>' +
            l.n +
            "</span>";
          b.addEventListener("click", function () {
            show(i);
          });
          b.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              show((i + 1) % LINKS.length, true);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              show((i - 1 + LINKS.length) % LINKS.length, true);
            }
          });
          chain.appendChild(b);
          btns.push(b);
        });
        function show(i, focus) {
          cur = i;
          var l = LINKS[i];
          btns.forEach(function (b, j) {
            b.setAttribute("aria-selected", j === i ? "true" : "false");
            b.tabIndex = j === i ? 0 : -1;
          });
          if (focus) btns[i].focus();
          dom.getElementById("lp-title").textContent = l.h;
          dom.getElementById("lp-fail").textContent = l.f;
          dom.getElementById("lp-watch").textContent = l.w;
          dom.getElementById("lp-gain").textContent = l.g;
          dom.getElementById("lp-tag").textContent = "Plataforma: " + l.t;
        }
        show(0);

        // Aviso y formulario
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

        // Lecturas ilustrativas del hero
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        var live = {
          pue: {
            el: dom.querySelector('[data-live="pue"]'),
            v: 1.58,
            min: 1.54,
            max: 1.62,
            step: 0.01,
            dec: 2,
          },
          ups: {
            el: dom.querySelector('[data-live="ups"]'),
            v: 46,
            min: 42,
            max: 51,
            step: 1,
            dec: 0,
          },
          temp: {
            el: dom.querySelector('[data-live="temp"]'),
            v: 22.1,
            min: 21.5,
            max: 22.8,
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
