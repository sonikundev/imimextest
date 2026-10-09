<template>
  <div ref="pageRoot" class="intelligent-page bms-building-automation">
<svg width="0" height="0" style="position: absolute" aria-hidden="true">
      <defs>
        <symbol id="i-clima" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 V21 M4.2 7.5 L19.8 16.5 M4.2 16.5 L19.8 7.5 M9.5 4.5 L12 6.5 L14.5 4.5 M9.5 19.5 L12 17.5 L14.5 19.5"
          />
        </symbol>
        <symbol id="i-luz" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 18 h6 M10 21 h4 M12 3 a6 6 0 0 1 4 10.5 V16 H8 v-2.5 A6 6 0 0 1 12 3 Z"
          />
        </symbol>
        <symbol id="i-aire" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 9 h11 a3 3 0 1 0 -3 -3 M3 15 h15 a3 3 0 1 1 -3 3 M3 12 h7"
          />
        </symbol>
        <symbol id="i-acceso" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 21 V4 a1 1 0 0 1 1 -1 h10 a1 1 0 0 1 1 1 V21 M3.5 21 h17 M14.5 12.5 v.5"
          />
        </symbol>
        <symbol id="i-cctv" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7 h12 l4 3 l-4 3 H3 Z M7 13 v4 M4 17 h6 M21 8 v4"
          />
        </symbol>
        <symbol id="i-fuego" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 c1 4 5 5.5 5 10.5 a5 5 0 0 1 -10 0 c0 -3 2 -4 2 -6.5 c1 1 2 2 3 2 c0 -2.5 -1 -4 0 -6 Z"
          />
        </symbol>
        <symbol id="i-agua" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3 c4 5 6 8.5 6 11.5 a6 6 0 0 1 -12 0 c0 -3 2 -6.5 6 -11.5 Z"
          />
        </symbol>
        <symbol id="i-energia" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 3 L5 13.5 h6 l-1 7.5 l8 -10.5 h-6 Z"
          />
        </symbol>
      </defs>
    </svg>

    <div class="section-navigation"><div class="wrap"><nav aria-label="En esta página" class="nav">
          <a href="#un-dia">Un día en su edificio</a>
          <a href="#integra">Qué integra</a>
          <a href="#normatividad">Normatividad</a>
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
            <p class="hero-kicker">
              Gestión de edificios con Building Automation de Schneider
              Electric, antes EcoStruxure Building Operation (EBO)
            </p>
            <h1>Cada sistema de su edificio, trabajando en equipo.</h1>
            <p class="lead">
              Integramos climatización, iluminación, accesos, seguridad, agua,
              gas y energía en una sola plataforma. Su edificio da confort,
              cuida a las personas y consume solo lo que necesita.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contacto"
                >Solicitar un diagnóstico</a>
              <a class="btn btn-ghost" href="#un-dia"
                >Ver un día en su edificio</a>
            </div>
            <div class="trust">
              <span>Certificación EcoXpert en Building Automation</span>
              <span>Integra equipos de distintos fabricantes</span>
              <span>Acompañamiento después del arranque</span>
            </div>
          </div>

          <figure class="hero-art" style="margin: 0">
            <svg viewBox="0 0 560 500" role="img" aria-labelledby="art-t">
              <title id="art-t">
                Diagrama de Building Automation al centro conectado con ocho
                sistemas del edificio: climatización, iluminación, calidad del
                aire, accesos, videovigilancia, fuego y gas, agua y energía
              </title>
              <g id="spokes"></g>
              <rect
                class="hubbox"
                x="225"
                y="210"
                width="110"
                height="80"
                rx="20"
              />
              <text class="hub-t" x="280" y="246">Building</text>
              <text class="hub-t" x="280" y="270">Automation</text>
              <g id="sysnodes"></g>
            </svg>
            <figcaption>Un solo sistema que coordina a todos</figcaption>
          </figure>
        </div>
      </section>

      <!-- 2. HOY VS CON Building Automation -->
      <section class="compare" id="hoy">
        <div class="wrap">
          <h2>Muchos sistemas no hacen un edificio inteligente.</h2>
          <p class="lead" style="margin-top: 1.25rem">
            La mayoría de los inmuebles ya tiene climatización, control de
            acceso, cámaras y detectores. El problema es que cada uno trabaja
            por su lado.
          </p>
          <div class="cmp">
            <article class="today">
              <h3>Hoy</h3>
              <ul>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M8 8 l12 12 M20 8 l-12 12" /></svg
                  >Un programa y un proveedor distinto para cada sistema.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M8 8 l12 12 M20 8 l-12 12" /></svg
                  >La temperatura y la iluminación se ajustan a mano.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M8 8 l12 12 M20 8 l-12 12" /></svg
                  >La seguridad no sabe lo que pasa con el ambiente, y
                  viceversa.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M8 8 l12 12 M20 8 l-12 12" /></svg
                  >Las fallas se descubren cuando alguien se queja.
                </li>
              </ul>
            </article>
            <article class="with">
              <h3>Con Building Automation</h3>
              <ul>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                  >Una sola plataforma para ver y operar todo el inmueble.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                  >Horarios y condiciones que se ajustan solos según la
                  ocupación.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                  >Sistemas que reaccionan juntos ante un evento.
                </li>
                <li>
                  <svg viewBox="0 0 28 28" aria-hidden="true">
                    <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                  >Alarmas que llegan antes que la queja.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- 3. UN DIA EN SU EDIFICIO -->
      <section class="day" id="un-dia">
        <div class="wrap">
          <h2>Un día en un edificio con Building Automation.</h2>
          <p class="lead">
            Elija un momento del día para ver cómo los sistemas se coordinan sin
            que nadie tenga que intervenir.
          </p>
          <div
            class="timeline"
            role="tablist"
            aria-label="Momentos del día"
            id="timeline"
          ></div>
          <div class="scene" role="tabpanel" id="scene" aria-live="polite">
            <div>
              <h3 id="sc-title"></h3>
              <p class="desc" id="sc-desc"></p>
              <div class="res">
                <strong>Resultado</strong><span id="sc-res"></span>
              </div>
              <div class="scene-nav">
                <button class="btn btn-ghost" type="button" id="sc-prev">
                  Anterior
                </button>
                <button class="btn btn-primary" type="button" id="sc-next">
                  Siguiente momento
                </button>
              </div>
            </div>
            <div>
              <p class="chips-sys-t">Sistemas que actúan</p>
              <div class="chips-sys" id="sc-chips"></div>
              <p class="scene-note">
                Escenario ilustrativo. Cada proyecto se diseña según su inmueble
                y sus prioridades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. QUE INTEGRA -->
      <section class="integra" id="integra">
        <div class="wrap">
          <h2>Todo lo que su edificio puede coordinar.</h2>
          <div class="int-grid">
            <article class="int">
              <svg aria-hidden="true"><use href="#i-clima" /></svg>
              <h3>Climatización</h3>
              <p>
                Coordina varios equipos de aire acondicionado en grandes
                espacios para regular la temperatura con el menor consumo
                posible.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-aire" /></svg>
              <h3>Calidad del ambiente</h3>
              <p>
                Temperatura, humedad, CO₂, ruido y presión en el rango correcto
                para cada espacio.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-luz" /></svg>
              <h3>Iluminación</h3>
              <p>
                Encendido por horario, zona y ocupación, para que solo haya luz
                donde se necesita.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-acceso" /></svg>
              <h3>Control de acceso</h3>
              <p>
                Puertas automáticas, lectores faciales o de huella y operación
                personalizada de elevadores.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-cctv" /></svg>
              <h3>Seguridad</h3>
              <p>
                CCTV, accesos, luces de emergencia y sensores de presencia
                sincronizados entre sí.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-fuego" /></svg>
              <h3>Fuego y gas</h3>
              <p>
                Sensores de gas y fuego que activan una respuesta coordinada del
                resto de los sistemas.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-agua" /></svg>
              <h3>Consumo de agua y gas</h3>
              <p>
                Consumo optimizado en baños, cocinas, lavado, jardinería,
                calderas y plantas de emergencia.
              </p>
            </article>
            <article class="int">
              <svg aria-hidden="true"><use href="#i-energia" /></svg>
              <h3>Energía eléctrica</h3>
              <p>
                Consumo de todo el inmueble a la vista. Con Power Automation,
                además, la calidad de la energía.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 5. NORMATIVIDAD -->
      <section class="norms" id="normatividad">
        <div class="wrap">
          <div>
            <h2>Condiciones de trabajo que puede demostrar.</h2>
            <p class="lead">
              Las normas exigen condiciones ambientales adecuadas en los centros
              de trabajo. Building Automation las vigila todo el tiempo y guarda
              la evidencia.
            </p>
            <ul class="norm-points">
              <li>
                <svg viewBox="0 0 28 28" aria-hidden="true">
                  <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                ><span
                  >Registro continuo de temperatura, humedad y otras condiciones
                  por zona.</span
                >
              </li>
              <li>
                <svg viewBox="0 0 28 28" aria-hidden="true">
                  <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                ><span>Alarmas cuando un área sale del rango definido.</span>
              </li>
              <li>
                <svg viewBox="0 0 28 28" aria-hidden="true">
                  <path class="ico" d="M6 14.5 l5 5 l11 -11" /></svg
                ><span
                  >Históricos y reportes listos para una inspección o
                  auditoría.</span
                >
              </li>
            </ul>
          </div>
          <div>
            <div class="norm-list">
              <div class="norm">
                <span class="code">NOM-015-STPS-2001</span>
                <h3>Condiciones térmicas elevadas o abatidas</h3>
                <p>
                  Vigile que la temperatura de cada área se mantenga dentro de
                  los rangos que define su programa, con registro de cada
                  desviación.
                </p>
              </div>
              <div class="norm">
                <span class="code">NOM-001-STPS-2008</span>
                <h3>Edificios, locales y áreas en los centros de trabajo</h3>
                <p>
                  Supervise de forma centralizada las condiciones e
                  instalaciones del inmueble que su programa de cumplimiento
                  debe vigilar.
                </p>
              </div>
            </div>
            <p class="norm-fine">
              El cumplimiento depende de cada centro de trabajo. El sistema le
              da las alertas y la evidencia para sostenerlo.
            </p>
          </div>
        </div>
      </section>

      <!-- 6. INTEGRACION -->
      <section class="together" id="integracion">
        <div class="wrap">
          <h2>Trabaja con lo que ya tiene.</h2>
          <div>
            <p>
              Building Automation usa protocolos abiertos como BACnet, Modbus y
              LonWorks, así que puede integrar equipos de distintos fabricantes
              en lugar de obligarle a reemplazarlos.
            </p>
            <p>
              Y si suma Power Automation, el mismo sistema que controla el
              edificio sabe también qué pasa con su energía.
            </p>
            <div class="links">
              <NuxtLink class="btn" to="/edificios-inteligentes/power-automation" data-pme
                >Conocer Power Automation</NuxtLink>
              <NuxtLink class="btn btn-ghost" to="/edificios-inteligentes" data-hub
                >Ver la solución completa</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. PROCESO -->
      <section class="process" id="proceso">
        <div class="wrap">
          <h2>Un edificio inteligente se diseña, no se compra.</h2>
          <ol class="steps">
            <li>
              <h3>Diagnóstico</h3>
              <p>
                Recorremos el inmueble, revisamos los sistemas que ya tiene y
                entendemos sus prioridades y obligaciones.
              </p>
            </li>
            <li>
              <h3>Ingeniería</h3>
              <p>
                Definimos arquitectura, controladores, secuencias de operación y
                presupuesto, con precisión para su proceso de compra.
              </p>
            </li>
            <li>
              <h3>Suministro e instalación</h3>
              <p>
                Equipos y software originales de Schneider Electric, instalados
                por personal certificado.
              </p>
            </li>
            <li>
              <h3>Puesta en marcha</h3>
              <p>
                Programamos secuencias y pantallas, probamos cada escenario y
                capacitamos a su equipo.
              </p>
            </li>
            <li>
              <h3>Acompañamiento</h3>
              <p>
                Ajustamos el sistema a los cambios de su inmueble y lo
                mantenemos con
                <NuxtLink to="/edificios-inteligentes/mantenimiento-bms" data-mant
                  >pólizas de mantenimiento</NuxtLink>.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- 8. SECTORES -->
      <section class="sectors" id="sectores">
        <div class="wrap">
          <h2>Dónde Building Automation hace la diferencia.</h2>
          <div class="sectors-list">
            <div class="sector">
              <h3>Hoteles</h3>
              <span class="prio">Confort del huésped</span>
              <p>
                Cada habitación a la temperatura correcta, menos quejas y menor
                gasto en climatización.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Hospitales</h3>
              <span class="prio">Ambientes controlados</span>
              <p>
                Condiciones ambientales estables en áreas críticas, con alarmas
                y registro continuo.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Corporativos</h3>
              <span class="prio">Confort y costo</span>
              <p>
                Espacios de trabajo cómodos y sistemas integrados en lugar de
                equipos operando cada uno por su lado.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Retail y centros comerciales</h3>
              <span class="prio">Menor costo de operación</span>
              <p>
                Horarios, climatización, iluminación y refrigeración optimizados
                en una o varias sucursales.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Aeropuertos y terminales</h3>
              <span class="prio">Infraestructura disponible</span>
              <p>
                Monitoreo centralizado de instalaciones extensas con alto flujo
                de personas.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Universidades y campus</h3>
              <span class="prio">Varios edificios</span>
              <p>
                Horarios, consumos y condiciones de todos sus edificios desde
                una sola plataforma.
              </p>
              <span></span>
            </div>
            <div class="sector">
              <h3>Industria</h3>
              <span class="prio">Servicios auxiliares</span>
              <p>
                Climatización y servicios del edificio integrados, en plantas
                con procesos sensibles al ambiente.
              </p>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. POR QUE IMIMEX -->
      <section class="why" id="por-que" style="background: var(--surface)">
        <div class="wrap">
          <div>
            <h2>Integrar sistemas es nuestro oficio.</h2>
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
              <h3>Certificados en Building Automation.</h3>
              <p>
                Somos EcoXpert de Schneider Electric en Building Automation, con
                el respaldo técnico y de garantía del fabricante.
              </p>
            </div>
            <div>
              <h3>Experiencia en control de procesos.</h3>
              <p>
                Llevamos años integrando instrumentos, controladores y
                protocolos en entornos industriales. Su edificio recibe ese
                mismo rigor.
              </p>
            </div>
            <div>
              <h3>Las personas primero.</h3>
              <p>
                Cada secuencia que programamos prioriza la seguridad y el
                bienestar de quienes usan el inmueble, y después el ahorro.
              </p>
            </div>
            <div>
              <h3>Con usted después del arranque.</h3>
              <p>
                Mesa de ayuda 24x7, mantenimiento por personal autorizado y
                asesoría aun cuando la garantía haya terminado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. CONTACTO -->
      <BuildingsTechnology />
      <section class="contact" id="contacto">
        <div class="wrap">
          <div>
            <h2>Platíquenos de su edificio.</h2>
            <p class="lead">
              Un ingeniero especialista le contactará para entender sus
              prioridades y proponerle el siguiente paso.
            </p>
            <div class="contact-note">
              Si su inmueble ya tiene un BMS que no funciona bien, conozca
              nuestro
              <NuxtLink to="/edificios-inteligentes/mantenimiento-bms" data-mant
                >servicio de mantenimiento y recuperación</NuxtLink>.
            </div>
          </div>
          <BuildingsLeadForm subject="Building Automation: gestión de edificios | IMIMEX">
            <BuildingsContactFields company-label="Empresa" />
            <div class="field">
              <label for="f-tipo"
                >Tipo de inmueble <span class="req">*</span></label
              >
              <select id="f-tipo" name="tipo_inmueble" required>
                <option value="">Seleccione una opción</option>
                <option>Hotel</option>
                <option>Hospital</option>
                <option>Corporativo</option>
                <option>Retail o centro comercial</option>
                <option>Aeropuerto o terminal</option>
                <option>Universidad o campus</option>
                <option>Planta industrial</option>
                <option>Data center</option>
                <option>Otro</option>
              </select>
            </div>
            <div class="field">
              <label for="f-proy"
                >Tipo de proyecto <span class="req">*</span></label
              >
              <select id="f-proy" name="tipo_proyecto" required>
                <option value="">Seleccione una opción</option>
                <option>Edificio nuevo</option>
                <option>Remodelación o ampliación</option>
                <option>Inmueble en operación</option>
              </select>
            </div>
            <div class="field full">
              <label for="f-bms"
                >¿Su inmueble ya cuenta con un sistema BMS?
                <span class="req">*</span></label
              >
              <select id="f-bms" name="tiene_bms" required>
                <option value="">Seleccione una opción</option>
                <option value="no">No</option>
                <option value="si-funciona">Sí, y funciona</option>
                <option value="si-falla">Sí, pero no funciona bien</option>
              </select>
            </div>
            <div class="form-hint" id="bms-hint">
              Para un sistema que no funciona bien, nuestro
              <NuxtLink to="/edificios-inteligentes/mantenimiento-bms" data-mant
                >servicio de mantenimiento</NuxtLink>
              suele ser el mejor punto de partida. Puede enviar este formulario
              de todos modos.
            </div>
            <fieldset>
              <span class="legend">¿Qué sistemas le interesa integrar?</span>
              <div class="chips">
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="climatizacion"
                  />Climatización</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="iluminacion"
                  />Iluminación</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="calidad-aire"
                  />Calidad del aire</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="accesos"
                  />Accesos</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="seguridad"
                  />Seguridad y CCTV</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="fuego-gas"
                  />Fuego y gas</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="agua"
                  />Agua</label
                >
                <label
                  ><input
                    type="checkbox"
                    name="sistemas"
                    value="energia"
                  />Energía</label
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

      <!-- 11. PREGUNTAS -->
      <section class="faq" id="preguntas" style="background: var(--surface)">
        <div class="wrap">
          <h2>Preguntas frecuentes</h2>
          <div class="faq-list">
            <details>
              <summary>
                ¿Tengo que cambiar mis equipos de climatización o iluminación?
              </summary>
              <p>
                No necesariamente. Building Automation trabaja con protocolos
                abiertos como BACnet, Modbus y LonWorks, así que muchos equipos
                existentes se pueden integrar. En el diagnóstico revisamos qué
                se conecta y qué conviene sustituir.
              </p>
            </details>
            <details>
              <summary>¿Se puede implementar por etapas?</summary>
              <p>
                Sí. Puede empezar por un piso, un edificio o un sistema, y
                crecer después sobre la misma plataforma sin rehacer lo que ya
                tiene.
              </p>
            </details>
            <details>
              <summary>
                ¿En qué se diferencia Building Automation del control que trae
                mi equipo de aire acondicionado?
              </summary>
              <p>
                El control del fabricante solo gobierna su propio equipo.
                Building Automation coordina todos los sistemas del edificio
                entre sí: clima, iluminación, accesos, seguridad, agua, gas y
                energía.
              </p>
            </details>
            <details>
              <summary>¿Puedo supervisar el edificio a distancia?</summary>
              <p>
                Sí, con acceso web seguro. Definimos con su área de TI cómo y
                quién se conecta, para cuidar la ciberseguridad del inmueble.
              </p>
            </details>
            <details>
              <summary>¿Qué pasa si falla la red o el servidor?</summary>
              <p>
                Los controladores siguen ejecutando sus secuencias de forma
                local. El servidor se usa para supervisar, guardar históricos y
                hacer cambios, así que su edificio no se detiene si se pierde la
                comunicación.
              </p>
            </details>
            <details>
              <summary>¿Cuánto tarda un proyecto?</summary>
              <p>
                Depende del alcance. Los equipos tienen tiempos de entrega de 2
                a 16 semanas; una vez en sitio, la instalación suele completarse
                en un máximo de 2 semanas.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>

    

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>
</template>

<script setup>
import initialize from "~/utils/buildings/building-automation";

const pageRoot = ref(null);
useBuildingPrototype(pageRoot, initialize);
useSeoMeta({
  title: "Building Automation: gestión de edificios | IMIMEX",
  description: "Integramos climatización, iluminación, accesos, seguridad, agua, gas y energía en una sola plataforma con Building Automation de Schneider Electric. Integradores EcoXpert.",
});
</script>

<style src="~/scss/buildings/building-automation.css"></style>
