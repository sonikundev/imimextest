export default function initialize(dom, timers) {
var tipo = dom.getElementById("f-tipo"),
          com = dom.getElementById("f-com");
        dom.querySelectorAll("[data-tipo]").forEach(function (a) {
          a.addEventListener("click", function () {
            tipo.value = a.dataset.tipo;
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

        // Autodiagnostico
        var boxes = dom.querySelectorAll("#sc-list input"),
          n = dom.getElementById("sc-n"),
          bars = dom.querySelectorAll("#sc-meter i"),
          msg = dom.getElementById("sc-msg"),
          cta = dom.getElementById("sc-cta");
        function evalua() {
          var marcadas = Array.prototype.filter.call(boxes, function (b) {
            return b.checked;
          });
          var k = marcadas.length;
          n.textContent = k;
          bars.forEach(function (b, i) {
            b.classList.toggle("on", i < k);
          });
          msg.textContent =
            k === 0
              ? "Marque las señales que reconozca en su sistema."
              : k <= 2
                ? "Su sistema muestra señales tempranas. Revisarlo a tiempo evita que crezcan."
                : k <= 5
                  ? "Su sistema está perdiendo valor. Conviene revisarlo pronto."
                  : "Es probable que su sistema ya no cumpla su función. Podemos ayudarle a recuperarlo.";
          return marcadas;
        }
        boxes.forEach(function (b) {
          b.addEventListener("change", evalua);
        });
        cta.addEventListener("click", function () {
          var marcadas = evalua();
          tipo.value = "diagnostico";
          if (marcadas.length) {
            com.value =
              "Señales identificadas en el autodiagnóstico:\n" +
              marcadas
                .map(function (b) {
                  return "- " + b.value;
                })
                .join("\n");
          }
        });

        // Formulario de prototipo
}
