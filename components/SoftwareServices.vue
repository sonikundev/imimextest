<template>
<div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 mb-1" style="padding: 0px">
      <Card style="width: 100%;">
        <template #content>
          <div class="grid">
            <div class="col-12 flex align-items-center justify-content-center" style="padding: 0px">
                <p>
                  <i class="pi pi-box consultoriaSoftware pr-2"></i>
                </p>
                
                <p class="consultoriaSoftware">
                    Consultoria en Desarrollo de Software
                </p>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw1.png" class="undraw1" />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-briefcase pr-1"></i>
                            Servicio de desarrollo a la medida
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de desarrollo a la medida crea software personalizado que se alinea con los objetivos y necesidades específicas de cada empresa para proporcionar una ventaja competitiva.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw2.png" class="undraw2"  />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-clipboard pr-1"></i>
                            Servicio de consultoría en software
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de consultoría en software ofrece asesoramiento experto para optimizar, implementar y gestionar soluciones tecnológicas que mejoren la eficiencia y productividad de las empresas.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

            <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 my-1" style="padding:0px; z-index: 10;">
            <div class="card">
                <Card class="consultoriaCard">
                    <template #header>
                        <img alt="user header" src="@/public/assets/img/undraw3.png" class="undraw3" />
                    </template>
                    <template #title>
                        <span class="titleCard">
                            <i class="pi pi-comments pr-1"></i>
                            Servicio de soporte técnico y mesa de ayuda
                        </span>
                    </template>
                    <template #content>
                        <p class="m-0 infoCard">   
                            El servicio de soporte técnico y mesa de ayuda proporciona asistencia especializada para resolver problemas técnicos, garantizar el funcionamiento continuo de sistemas y ofrecer soporte a los usuarios finales.
                        </p>
                    </template>
                </Card>
            </div>
            </div>

        </div>
        </template>
      </Card>
      
    </div>
</template>
