export default function initialize(dom, timers) {
var SYS = [
          { id: "clima", n: "Climatización" },
          { id: "luz", n: "Iluminación" },
          { id: "aire", n: "Calidad del aire" },
          { id: "acceso", n: "Accesos" },
          { id: "cctv", n: "Videovigilancia" },
          { id: "fuego", n: "Fuego y gas" },
          { id: "agua", n: "Agua" },
          { id: "energia", n: "Energía" },
        ];
        var NS = "http://www.w3.org/2000/svg";

        // Diagrama del hero
        var spokes = dom.getElementById("spokes"),
          nodes = dom.getElementById("sysnodes"),
          heroNodes = {};
        SYS.forEach(function (s, i) {
          var ang = ((-90 + i * 45) * Math.PI) / 180,
            cx = 280 + 190 * Math.cos(ang),
            cy = 250 + 175 * Math.sin(ang);
          var l = document.createElementNS(NS, "line");
          l.setAttribute("class", "spoke");
          l.setAttribute("x1", 280);
          l.setAttribute("y1", 250);
          l.setAttribute("x2", cx);
          l.setAttribute("y2", cy);
          spokes.appendChild(l);
          var g = document.createElementNS(NS, "g");
          g.setAttribute("class", "sys");
          var c = document.createElementNS(NS, "circle");
          c.setAttribute("cx", cx);
          c.setAttribute("cy", cy);
          c.setAttribute("r", 34);
          var u = document.createElementNS(NS, "use");
          u.setAttribute("href", "#i-" + s.id);
          u.setAttribute("x", cx - 16);
          u.setAttribute("y", cy - 16);
          u.setAttribute("width", 32);
          u.setAttribute("height", 32);
          var t = document.createElementNS(NS, "text");
          t.setAttribute("x", cx);
          t.setAttribute("y", cy > 250 ? cy + 54 : cy - 44);
          t.textContent = s.n;
          g.appendChild(c);
          g.appendChild(u);
          g.appendChild(t);
          nodes.appendChild(g);
          heroNodes[s.id] = g;
        });

        // Escenarios del dia
        var SC = [
          {
            t: "06:30",
            s: "Antes de que llegue el primero",
            h: "El edificio se prepara solo.",
            d: "La climatización arranca de forma escalonada por zonas, para que el inmueble esté a la temperatura correcta cuando llegue el personal, sin encender todo al mismo tiempo.",
            r: "Confort desde el primer minuto, sin un pico de demanda eléctrica.",
            on: ["clima", "energia"],
          },
          {
            t: "08:15",
            s: "Llega el personal",
            h: "Cada piso despierta cuando lo ocupan.",
            d: "Al registrarse el acceso, se encienden la iluminación y la climatización solo en las zonas ocupadas. Los pisos vacíos siguen en modo de ahorro.",
            r: "Solo se consume energía donde hay personas.",
            on: ["acceso", "luz", "clima"],
          },
          {
            t: "13:00",
            s: "Sala de juntas llena",
            h: "El aire se renueva antes de que alguien lo note.",
            d: "Con la sala llena, el CO₂ sube. El sistema aumenta la ventilación y ajusta la temperatura de esa zona de forma automática.",
            r: "Reuniones más productivas y condiciones dentro del rango definido.",
            on: ["aire", "clima"],
          },
          {
            t: "19:40",
            s: "Sale el último",
            h: "El edificio se apaga por zonas.",
            d: "Cuando sale la última persona, se apagan iluminación y climatización, se arma la seguridad perimetral y arranca el riego programado.",
            r: "El inmueble no gasta de noche y queda protegido.",
            on: ["luz", "clima", "acceso", "cctv", "agua"],
          },
          {
            t: "02:10",
            s: "Fuga de gas en la cocina",
            h: "Un incidente atendido de inmediato.",
            d: "El sensor detecta gas. El sistema cierra la válvula de suministro, activa la extracción, muestra la zona en las cámaras y alerta al responsable de guardia.",
            r: "Una respuesta coordinada, con registro de cada acción para su análisis.",
            on: ["fuego", "clima", "cctv"],
          },
        ];
        var tl = dom.getElementById("timeline"),
          chipsBox = dom.getElementById("sc-chips"),
          chips = {},
          btns = [],
          cur = 0;
        SYS.forEach(function (s) {
          var d = document.createElement("div");
          d.className = "csys";
          d.innerHTML =
            '<svg aria-hidden="true"><use href="#i-' +
            s.id +
            '"/></svg><span>' +
            s.n +
            "</span>";
          chipsBox.appendChild(d);
          chips[s.id] = d;
        });
        SC.forEach(function (sc, i) {
          var b = document.createElement("button");
          b.className = "tbtn";
          b.type = "button";
          b.setAttribute("role", "tab");
          b.setAttribute("aria-controls", "scene");
          b.innerHTML =
            '<span class="dot"></span><time>' +
            sc.t +
            "</time><span>" +
            sc.s +
            "</span>";
          b.addEventListener("click", function () {
            show(i);
          });
          b.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              show((i + 1) % SC.length, true);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              show((i - 1 + SC.length) % SC.length, true);
            }
          });
          tl.appendChild(b);
          btns.push(b);
        });
        function show(i, focus) {
          cur = i;
          var sc = SC[i];
          btns.forEach(function (b, j) {
            b.setAttribute("aria-selected", j === i ? "true" : "false");
            b.tabIndex = j === i ? 0 : -1;
          });
          if (focus) btns[i].focus();
          dom.getElementById("sc-title").textContent = sc.t + ". " + sc.h;
          dom.getElementById("sc-desc").textContent = sc.d;
          dom.getElementById("sc-res").textContent = sc.r;
          SYS.forEach(function (s) {
            chips[s.id].classList.toggle("on", sc.on.indexOf(s.id) > -1);
          });
          dom.getElementById("sc-prev").disabled = false;
        }
        document
          .getElementById("sc-next")
          .addEventListener("click", function () {
            show((cur + 1) % SC.length);
          });
        document
          .getElementById("sc-prev")
          .addEventListener("click", function () {
            show((cur - 1 + SC.length) % SC.length);
          });
        show(0);

        // Aviso, formulario
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
        var bms = dom.getElementById("f-bms"),
          hint = dom.getElementById("bms-hint");
        bms.addEventListener("change", function () {
          hint.classList.toggle("show", bms.value === "si-falla");
        });

        // Hero: recorre los escenarios encendiendo los sistemas que actúan
        var k = 0;
        function heroStep() {
          var on = SC[k % SC.length].on;
          SYS.forEach(function (s) {
            heroNodes[s.id].classList.toggle("on", on.indexOf(s.id) > -1);
          });
          k++;
        }
        heroStep();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          timers.setInterval(heroStep, 2600);
}
