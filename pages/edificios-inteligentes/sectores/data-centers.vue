<template>
  <div ref="pageRoot" class="intelligent-page bms-data-centers">
<svg width="0" height="0" style="position: absolute" aria-hidden="true">
      <defs>
        <symbol id="c-torre" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 L7 21 M12 3 L17 21 M8.5 15 h7 M9.5 10 h5 M5 7 h14 M9 21 h6"
          />
        </symbol>
        <symbol id="c-planta" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 9 h14 v9 H3 Z M17 12 h4 v3 h-4 M6 6 h6 v3 M7 13.5 l2 -2.5 v2.5 l2 -2.5"
          />
        </symbol>
        <symbol id="c-ups" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 3 h10 v18 H7 Z M10 7 h4 M12.5 10 l-2 3.5 h3 l-2 3.5"
          />
        </symbol>
        <symbol id="c-dist" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 v6 M4 9 h16 M5 9 v5 M12 9 v5 M19 9 v5 M3 14 h4 v6 H3 Z M10 14 h4 v6 h-4 Z M17 14 h4 v6 h-4 Z"
          />
        </symbol>
        <symbol id="c-frio" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 V21 M4.2 7.5 L19.8 16.5 M4.2 16.5 L19.8 7.5 M9.5 4.5 L12 6.5 L14.5 4.5 M9.5 19.5 L12 17.5 L14.5 19.5"
          />
        </symbol>
        <symbol id="c-rack" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 3 h12 v18 H6 Z M9 7 h6 M9 11 h6 M9 15 h6 M9 18.5 h1"
          />
        </symbol>
      </defs>
    </svg>

    <div class="section-navigation"><div class="wrap"><nav aria-label="En esta página" class="nav">
          <a href="#riesgos">Riesgos</a>
          <a href="#cadena">Qué vigilamos</a>
          <a href="#indicadores">Indicadores</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#preguntas">Preguntas</a>
        </nav></div></div>

    <main>
      <!-- 1. HERO -->
      <section class="hero" id="inicio">
        <svg class="wm" viewBox="425 687 682 786" aria-hidden="true">
          <path
            d="m483.45,876.25l.77.95,4.39,5.42.49.61.55.56c7,7.06,16.98,10.65,29.64,10.65,27.78,0,61.84-17.3,62.17-17.47l193.6-105.21,235.07,129.67-157.86,85.9c-.4.22-40.18,23.27-47.54,49.88-2.35,8.48-1.38,16.73,2.8,23.87l3.06,5.28c4.28,7.38,12.3,11.97,20.91,11.97,4.04,0,8.06-1.02,11.61-2.95l220.49-119.98c20.24-11.01,32.36-31.1,32.43-53.72.07-22.63-11.94-42.78-32.11-53.9l-257.72-142.16c-9.43-5.2-20.18-7.95-31.1-7.95h0c-10.78,0-21.41,2.68-30.74,7.76l-252.21,137.06c-5.74,3.12-9.86,8.27-11.61,14.5-1.74,6.19-.92,12.66,2.31,18.23l.61,1.05Zm348.06,186.43c-.16,0-.32-.02-.48-.03.43.02.86.02,1.29-.02-.27.03-.54.05-.81.05Zm248.89-161.06h0c-.02,5.26-.91,10.33-2.6,15.08,1.69-4.75,2.58-9.82,2.6-15.08Zm-302.89-146.38l257.72,142.16-257.72-142.16c-.37-.2-.76-.36-1.16-.46.4.1.79.25,1.16.46Zm-2.4-41.95s.05,0,.08,0c-.53,0-1.07.03-1.6.04.51-.02,1.02-.05,1.52-.05Zm-201.11,149.93l198.73-108s.09-.03.14-.05c-.04.02-.09.03-.14.05l-198.73,108c-.11.06-.28.15-.47.24.19-.1.35-.18.47-.24Zm-52.51,15.53c-.74.03-1.47.05-2.19.05-.09,0-.17,0-.26,0,.81,0,1.62,0,2.45-.04Z"
          />
          <path
            d="m1069.61,1021.28h-6.17c-9.88,0-18.71,3.66-25.56,10.58-11.83,11.96-17.33,33.45-16.33,63.86.01.39.02.68.03.88v171.02s-244.64,124.04-244.64,124.04c-4.73,2.4-10.16,3.67-15.72,3.67s-11.2-1.32-16-3.81l-.23-.12-.24-.11c-1.53-.73-154.04-73.75-202.64-100.45-36.24-19.91-35.86-33.38-35.28-53.77.08-2.67.16-5.42.16-8.26v-219.74c.01-.22.03-.5.05-.83.48-7.81,1.94-31.58-12.71-46.81-5.2-5.4-14.58-11.84-29.77-11.84h-5.61c-13.17,0-23.89,10.19-23.89,22.72v303.27c0,19.54,11.5,37.64,30.01,47.26l245.1,127.25c15.45,8.02,33.1,12.26,51.02,12.26s34.9-4.08,50.13-11.8l251.63-127.59c18.83-9.55,30.53-27.76,30.53-47.52v-231.44c0-12.53-10.72-22.72-23.89-22.72Zm-578.59,207.53c0,3.1-.1,6.17-.19,9.24.08-3.07.19-6.14.19-9.24h0Zm270.19,217.9c-.82,0-1.63-.05-2.45-.07.82.02,1.64.07,2.46.07h0Zm276.34-350.21c0-.37-.03-1.19-.07-2.38.04,1.19.07,2.01.07,2.38h0Z"
          />
          <path
            d="m722.95,1129.25v149.81c-.21,8.91-.26,51.31,17.22,69.25,5.84,5.99,13.15,9.16,21.14,9.16h5.96c12.53,0,22.72-10.19,22.72-22.72v-243.48c0-19.56-10.58-37.68-27.62-47.29l-213.38-120.39c-3.4-1.92-7.26-2.93-11.16-2.93h0c-8.19,0-15.77,4.43-19.79,11.56l-3.36,5.96-.68,1.2-.46,1.3c-3.23,9.18-5.25,27.49,17.43,47.05,9.5,8.19,19.58,13.44,21.98,14.64l142.47,78.67c26.89,16,27.54,44.86,27.52,48.11v.04s0,.09,0,.09Zm-185.51-192.93c.13,0,.26-.03.4-.03.23,0,.46.02.7.04-.36-.04-.73-.04-1.09-.02Zm3.87.89c-.38-.21-.77-.38-1.17-.51.4.14.79.3,1.17.51l213.38,120.39-213.38-120.39Z"
          />
        </svg>
        <div class="wrap">
          <div>
            <p class="hero-kicker">Edificios inteligentes para data centers</p>
            <h1>Su data center no puede detenerse. Su monitoreo tampoco.</h1>
            <p class="lead">
              Integramos Building Automation y Power Automation para vigilar en
              una sola plataforma la energía, el enfriamiento y las condiciones
              de su sala, desde la acometida hasta los racks.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contacto"
                >Solicitar un diagnóstico</a>
              <a class="btn btn-ghost" href="#cadena">Ver qué vigilamos</a>
            </div>
            <div class="trust">
              <span
                >Certificación EcoXpert en Building Automation y Power
                Automation</span
              >
              <span>Experiencia en procesos críticos</span>
              <span>Mesa de ayuda 24x7</span>
            </div>
          </div>

          <figure class="hero-art" style="margin: 0">
            <svg viewBox="0 0 560 500" role="img" aria-labelledby="art-t">
              <title id="art-t">
                Diagrama de un data center: acometida, planta de emergencia,
                transferencia, UPS y distribución hacia los racks, con equipo de
                enfriamiento y lecturas de PUE, carga del UPS y temperatura del
                pasillo frío
              </title>
              <!-- Cadena electrica -->
              <path
                class="sld"
                d="M90 74 V120 M90 164 V210 M90 254 V300 M150 142 H180 M150 322 H240"
              />
              <rect class="box" x="30" y="30" width="120" height="44" rx="10" />
              <text class="box-t" x="90" y="57">Acometida</text>
              <rect
                class="box"
                x="30"
                y="120"
                width="120"
                height="44"
                rx="10"
              />
              <text class="box-t" x="90" y="147">Transferencia</text>
              <rect
                class="box"
                x="180"
                y="120"
                width="120"
                height="44"
                rx="10"
              />
              <text class="box-t" x="240" y="147">Planta</text>
              <rect
                class="box"
                x="30"
                y="210"
                width="120"
                height="44"
                rx="10"
              />
              <text class="box-t" x="90" y="237">UPS</text>
              <rect
                class="box"
                x="30"
                y="300"
                width="120"
                height="44"
                rx="10"
              />
              <text class="box-t" x="90" y="327">Distribución</text>
              <circle class="meter" cx="90" cy="97" r="12" />
              <text class="meter-t" x="90" y="101">M</text>
              <circle class="meter" cx="90" cy="187" r="12" />
              <text class="meter-t" x="90" y="191">M</text>
              <circle class="meter" cx="90" cy="277" r="12" />
              <text class="meter-t" x="90" y="281">M</text>
              <!-- Racks -->
              <g>
                <rect
                  class="rack"
                  x="250"
                  y="300"
                  width="54"
                  height="140"
                  rx="6"
                />
                <rect
                  class="rack"
                  x="315"
                  y="300"
                  width="54"
                  height="140"
                  rx="6"
                />
                <rect
                  class="rack"
                  x="380"
                  y="300"
                  width="54"
                  height="140"
                  rx="6"
                />
                <path
                  class="slot"
                  d="M262 322 h30 M262 342 h30 M262 362 h30 M262 382 h30 M262 402 h30 M327 322 h30 M327 342 h30 M327 362 h30 M327 382 h30 M327 402 h30 M392 322 h30 M392 342 h30 M392 362 h30 M392 382 h30 M392 402 h30"
                />
              </g>
              <!-- Enfriamiento -->
              <rect
                class="rack"
                x="458"
                y="300"
                width="72"
                height="140"
                rx="8"
              />
              <circle class="fan" cx="494" cy="340" r="18" />
              <path class="fan" d="M494 322 v36 M476 340 h36" />
              <text class="box-t" x="494" y="412">Clima</text>
              <path class="air" d="M494 440 V462 H262 M277 457 l-15 5 l15 5" />
              <!-- Cableado de datos -->
              <path class="wire" d="M102 97 C180 97 260 72 360 72" />
              <path class="wire" d="M102 277 C150 277 160 232 170 232" />
              <path class="wire" d="M342 300 C342 270 372 254 380 254" />
              <!-- Lecturas -->
              <g class="tag" transform="translate(360 40)">
                <rect width="150" height="64" rx="12" />
                <text class="t-label" x="14" y="24">PUE del sitio</text>
                <text class="t-val" x="14" y="50">
                  <tspan data-live="pue">1.58</tspan>
                </text>
              </g>
              <g class="tag" transform="translate(170 200)">
                <rect width="150" height="64" rx="12" />
                <text class="t-label" x="14" y="24">Carga del UPS</text>
                <text class="t-val" x="14" y="50">
                  <tspan data-live="ups">46</tspan>
                  %
                </text>
              </g>
              <g class="tag" transform="translate(380 190)">
                <rect width="150" height="64" rx="12" />
                <text class="t-label" x="14" y="24">Pasillo frío</text>
                <text class="t-val" x="14" y="50">
                  <tspan data-live="temp">22.1</tspan>
                  °C
                </text>
              </g>
            </svg>
            <figcaption>Lecturas ilustrativas</figcaption>
          </figure>
        </div>
      </section>

      <!-- 2. RIESGOS -->
      <section class="risks" id="riesgos">
        <div class="wrap">
          <h2>Lo que puede detener un data center casi nunca avisa.</h2>
          <div class="risk-grid">
            <article class="risk">
              <h3>Eventos eléctricos</h3>
              <p>
                Huecos de tensión, transitorios y armónicos de las cargas de TI
                desgastan UPS y fuentes, y pueden provocar transferencias
                inesperadas.
              </p>
            </article>
            <article class="risk">
              <h3>Puntos calientes</h3>
              <p>
                Una unidad de enfriamiento que falla o un flujo de aire
                obstruido eleva la temperatura de un rack en cuestión de
                minutos.
              </p>
            </article>
            <article class="risk">
              <h3>Redundancia que nadie verifica</h3>
              <p>
                El diseño dice N+1, pero un equipo en falla o una carga que
                creció pueden dejarle sin respaldo sin que nadie lo note.
              </p>
            </article>
            <article class="risk">
              <h3>Alarmas dispersas</h3>
              <p>
                UPS, enfriamiento, incendio y accesos tienen cada uno su propia
                consola. En una emergencia, nadie ve el panorama completo.
              </p>
            </article>
            <article class="risk">
              <h3>Capacidad al límite</h3>
              <p>
                Se agregan racks sin saber cuánta potencia y enfriamiento quedan
                disponibles, hasta que el margen se termina.
              </p>
            </article>
            <article class="risk">
              <h3>Energía que se va en enfriar</h3>
              <p>
                Una parte importante del consumo del sitio no llega a TI. Sin
                medirla, no se puede saber cuánto se puede mejorar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 3. CADENA DE CONTINUIDAD -->
      <section class="chain-sec" id="cadena">
        <div class="wrap">
          <h2>Vigilamos cada eslabón de su continuidad.</h2>
          <p class="lead">
            La disponibilidad de su sitio es tan fuerte como su eslabón más
            débil. Elija uno para ver qué puede fallar y qué vigilamos.
          </p>
          <div
            class="chain"
            role="tablist"
            aria-label="Eslabones de la cadena de continuidad"
            id="chain"
          ></div>
          <div
            class="link-panel"
            role="tabpanel"
            id="link-panel"
            aria-live="polite"
          >
            <h3 id="lp-title"></h3>
            <div class="lp-cols">
              <div class="k1">
                <h4>Qué puede fallar</h4>
                <p id="lp-fail"></p>
              </div>
              <div class="k2">
                <h4>Qué vigilamos</h4>
                <p id="lp-watch"></p>
              </div>
              <div class="k3">
                <h4>Qué gana usted</h4>
                <p id="lp-gain"></p>
              </div>
            </div>
            <span class="lp-tag" id="lp-tag"></span>
          </div>
        </div>
      </section>

      <!-- 4. UNA SOLA CONSOLA -->
      <section class="together" id="consola">
        <div class="wrap">
          <div>
            <h2>Todas las alarmas de su sala, en una sola consola.</h2>
            <p class="lead">
              Building Automation y Power Automation reúnen las alarmas de
              energía, enfriamiento, incendio y accesos en un mismo lugar,
              ordenadas por prioridad y notificadas a quien está de guardia. Así
              su equipo atiende primero lo que puede detener la operación.
            </p>
          </div>
          <div>
            <ul
              class="alarm-list"
              aria-label="Ejemplo de alarmas centralizadas"
            >
              <li>
                <time>03:12:41</time
                ><span
                  >Temperatura alta, rack B-07<br /><span class="src"
                    >Enfriamiento</span
                  ></span
                ><span class="pill hi">Crítica</span>
              </li>
              <li>
                <time>03:12:44</time
                ><span
                  >Unidad de enfriamiento 2 en falla<br /><span class="src"
                    >Enfriamiento</span
                  ></span
                ><span class="pill hi">Crítica</span>
              </li>
              <li>
                <time>03:10:05</time
                ><span
                  >Carga del UPS A arriba del 80 %<br /><span class="src"
                    >Energía</span
                  ></span
                ><span class="pill mid">Alta</span>
              </li>
              <li>
                <time>02:58:30</time
                ><span
                  >Puerta de la sala abierta más de 5 min<br /><span class="src"
                    >Accesos</span
                  ></span
                ><span class="pill lo">Media</span>
              </li>
            </ul>
            <p class="alarm-note">Ejemplo ilustrativo</p>
          </div>
        </div>
      </section>

      <!-- 5. INDICADORES -->
      <section class="kpis" id="indicadores">
        <div class="wrap">
          <h2>Números para su dirección y para sus clientes.</h2>
          <div class="kpi-grid">
            <article class="kpi">
              <span class="big">PUE</span>
              <h3>Eficiencia energética</h3>
              <p>
                Relación entre la energía total del sitio y la que consume TI,
                medida de forma continua y no estimada una vez al año.
              </p>
            </article>
            <article class="kpi">
              <span class="big">kW</span>
              <h3>Capacidad disponible</h3>
              <p>
                Cuánta potencia y enfriamiento quedan en cada UPS y tablero,
                para planear el crecimiento con datos.
              </p>
            </article>
            <article class="kpi">
              <span class="big">24/7</span>
              <h3>Historial de operación</h3>
              <p>
                Reportes de eventos, alarmas y condiciones que respaldan su
                operación ante una auditoría o un cliente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 6. PROCESO -->
      <section class="process" id="proceso">
        <div class="wrap">
          <h2>Trabajamos sin poner en riesgo su operación.</h2>
          <p class="lead" style="margin-top: 1.25rem">
            En un data center, la forma de trabajar importa tanto como el
            resultado. Cada actividad se planea con su equipo.
          </p>
          <ol class="steps">
            <li>
              <h3>Diagnóstico</h3>
              <p>
                Levantamos su cadena eléctrica y de enfriamiento, sus alarmas
                actuales y la documentación del sitio.
              </p>
            </li>
            <li>
              <h3>Ingeniería</h3>
              <p>
                Definimos puntos de medición, integración de UPS y equipos de
                enfriamiento, y una arquitectura de red acordada con TI.
              </p>
            </li>
            <li>
              <h3>Instalación planeada</h3>
              <p>
                En ventanas de mantenimiento y con procedimientos de trabajo
                aprobados por usted.
              </p>
            </li>
            <li>
              <h3>Puesta en marcha</h3>
              <p>
                Probamos cada alarma y escenario, y capacitamos a su personal de
                guardia.
              </p>
            </li>
            <li>
              <h3>Acompañamiento</h3>
              <p>
                Mesa de ayuda 24x7, mantenimiento por personal autorizado y
                revisión periódica de indicadores.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- 7. POR QUE IMIMEX -->
      <section class="why" id="por-que">
        <div class="wrap">
          <div>
            <h2>Sabemos lo que cuesta un paro.</h2>
            <div class="badge-row">
              <img
                src="/assets/edificios-inteligentes/EcoXpert_Building_Automation.jpg"
                alt="EcoXpert Building Automation, certificado por Schneider Electric"
                width="280"
                height="282"
              /><img
                src="/assets/edificios-inteligentes/EcoXpert_Power_Automation.png"
                alt="EcoXpert Power Automation, certificado por Schneider Electric"
                width="280"
                height="282"
              />
            </div>
            <p class="badge-cap">
              Competencias EcoXpert de IMIMEX, certificadas por Schneider
              Electric.
            </p>
          </div>
          <div class="why-points">
            <div>
              <h3>Certificados en Building Automation y Power Automation.</h3>
              <p>
                Somos EcoXpert de Schneider Electric en ambas plataformas, con
                el respaldo técnico y de garantía del fabricante.
              </p>
            </div>
            <div>
              <h3>Cultura de procesos críticos.</h3>
              <p>
                Venimos de la medición y el control en terminales de
                hidrocarburos y procesos industriales, donde la disponibilidad
                no se negocia.
              </p>
            </div>
            <div>
              <h3>Ingeniería de la mano de TI.</h3>
              <p>
                Diseñamos la arquitectura de comunicación con su área de TI,
                cuidando la segmentación y la ciberseguridad.
              </p>
            </div>
            <div>
              <h3>Con usted a cualquier hora.</h3>
              <p>
                Mesa de ayuda 24x7 y soporte en sitio en 24 horas en el corredor
                Querétaro–CDMX–Bajío.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. CONTACTO -->
      <section class="contact" id="contacto" style="background: var(--surface)">
        <div class="wrap">
          <div>
            <h2>Hablemos de la continuidad de su sitio.</h2>
            <p class="lead">
              Un ingeniero especialista le contactará para entender su
              infraestructura y proponerle el siguiente paso.
            </p>
            <div class="contact-note" style="background: var(--bg)">
              Si cuenta con un diagrama unifilar o un inventario de UPS y
              equipos de enfriamiento, téngalo a la mano: acelera el
              diagnóstico.
            </div>
          </div>
          <BuildingsLeadForm subject="Monitoreo de energía y clima para data centers | IMIMEX">
            <BuildingsContactFields company-label="Empresa" />
            <div class="field">
              <label for="f-tipo"
                >Tipo de sitio <span class="req">*</span></label
              >
              <select id="f-tipo" name="tipo_sitio" required>
                <option value="">Seleccione una opción</option>
                <option>Data center corporativo</option>
                <option>Colocation o servicios a terceros</option>
                <option>Cuarto de TI o sitio edge</option>
                <option>Otro</option>
              </select>
            </div>
            <div class="field">
              <label for="f-kw"
                >Carga de TI aproximada <span class="req">*</span></label
              >
              <select id="f-kw" name="carga_ti" required>
                <option value="">Seleccione una opción</option>
                <option>Menos de 100 kW</option>
                <option>De 100 a 500 kW</option>
                <option>De 500 kW a 1 MW</option>
                <option>Más de 1 MW</option>
                <option>No lo sé</option>
              </select>
            </div>
            <div class="field full">
              <label for="f-hoy"
                >¿Cómo supervisa hoy su sitio? <span class="req">*</span></label
              >
              <select id="f-hoy" name="supervision_actual" required>
                <option value="">Seleccione una opción</option>
                <option>Cada equipo con su propia consola</option>
                <option>Tenemos BMS o DCIM, pero no lo cubre todo</option>
                <option>Tenemos un sistema que no funciona bien</option>
                <option>Prácticamente sin supervisión</option>
              </select>
            </div>
            <fieldset>
              <span class="legend">¿Qué le interesa?</span>
              <div class="chips">
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="calidad"
                  />Calidad de energía</label
                >
                <label
                  ><input type="checkbox" name="interes" value="ups" />UPS y
                  baterías</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="enfriamiento"
                  />Enfriamiento</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="pue"
                  />PUE</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="alarmas"
                  />Alarmas centralizadas</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="capacidad"
                  />Capacidad</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="interes"
                    value="reportes"
                  />Reportes para clientes</label
                >
              </div>
            </fieldset>
            <div class="field full">
              <label for="f-com">Comentarios</label
              ><textarea id="f-com" name="comentarios"></textarea>
            </div>
            
            
          </BuildingsLeadForm>
        </div>
      </section>

      <!-- 9. PREGUNTAS -->
      <section class="faq" id="preguntas">
        <div class="wrap">
          <h2>Preguntas frecuentes</h2>
          <div class="faq-list">
            <details>
              <summary>¿Pueden instalar sin detener mi operación?</summary>
              <p>
                Planeamos cada actividad con usted, en ventanas de mantenimiento
                y con procedimientos de trabajo aprobados por su equipo, para no
                poner en riesgo la operación.
              </p>
            </details>
            <details>
              <summary>
                ¿Se integra con mis UPS y equipos de enfriamiento de otras
                marcas?
              </summary>
              <p>
                En muchos casos sí, cuando los equipos tienen comunicación por
                protocolos abiertos como Modbus o BACnet. En el diagnóstico
                revisamos cada equipo y le decimos qué se integra y cómo.
              </p>
            </details>
            <details>
              <summary>¿Esto reemplaza mi DCIM?</summary>
              <p>
                No necesariamente. Building Automation y Power Automation se
                enfocan en la infraestructura eléctrica, el enfriamiento y las
                condiciones del edificio, y se complementan con las herramientas
                de gestión de TI que ya tenga. En el diagnóstico definimos el
                alcance de cada una.
              </p>
            </details>
            <details>
              <summary>¿Pueden calcular el PUE de mi data center?</summary>
              <p>
                Sí, siempre que se mida la energía total del sitio y la que
                consume el equipo de TI. Definimos esos puntos de medición en la
                etapa de ingeniería.
              </p>
            </details>
            <details>
              <summary>¿Me ayuda con auditorías o certificaciones?</summary>
              <p>
                La certificación la otorga cada organismo. Nosotros le damos
                registros continuos, reportes de eventos e históricos que sirven
                como evidencia de cómo opera su sitio.
              </p>
            </details>
            <details>
              <summary>¿Atienden cuartos de TI pequeños o sitios edge?</summary>
              <p>
                Sí. La solución se dimensiona según el tamaño y la criticidad
                del sitio, desde un cuarto de TI hasta un data center completo,
                y puede crecer con usted.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section class="others" aria-label="Otros sectores">
        <div class="wrap">
          <strong>Otros sectores</strong>
          <nav>
            <NuxtLink to="/edificios-inteligentes/sectores/hoteles" data-hot>Hoteles</NuxtLink><NuxtLink to="/edificios-inteligentes/sectores/hospitales" data-hos>Hospitales</NuxtLink><NuxtLink to="/edificios-inteligentes/sectores/industria" data-ind>Industria</NuxtLink>
          </nav>
        </div>
      </section>
    </main>

    

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>
</template>

<script setup>
import initialize from "~/utils/buildings/data-centers";

const pageRoot = ref(null);
useBuildingPrototype(pageRoot, initialize);
useSeoMeta({
  title: "Monitoreo de energía y clima para data centers | IMIMEX",
  description: "Supervisión de acometida, UPS, distribución y enfriamiento de su data center en una sola plataforma con Building Automation y Power Automation de Schneider Electric. Integradores EcoXpert.",
});
</script>

<style src="~/scss/buildings/data-centers.css"></style>
