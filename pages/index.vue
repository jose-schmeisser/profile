<script setup>
import {
  IconBrandMedium,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconBrandAzure,
  IconBrandPython,
  IconBrandPhp,
  IconBrandJavascript,
  IconBrandNuxt,
  IconBrandVue,
  IconBrandTailwind,
  IconBrandReact,
  IconTerminal2,
  IconPlus,
  IconRefresh,
  IconLayoutKanban,
  IconRocket,
} from "@tabler/icons-vue";

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Dancing+Script:wght@400..700&display=swap");

.albert-sans-<uniquifier> {
  font-family: "Albert Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.dancing-script-<uniquifier> {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
</style>
<template>
  <div class="bg-gray-50 dark:bg-neutral-900">
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      <div class="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <!-- Profile -->
        <div class="flex items-center gap-x-3">
          <div class="shrink-0">
            <NuxtImg class="shrink-0 size-20 rounded-full border border-gray-800 dark:border-neutral-700"
              src="images/avatar2.png" alt="Jose Schmeisser" />
          </div>

          <div class="grow">
            <h1 class="text-2xl font-medium text-gray-800 dark:text-neutral-200 dancing-script-700">
              Jose Schmeisser
            </h1>
            <p class="text-xl text-gray-600 dark:text-neutral-400 dark:gradient-dark">
              Senior Full Stack Developer & Tech Lead
            </p>
          </div>
        </div>
        <!-- End Profile -->

        <!-- About -->
        <div class="mt-8">
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            Ingeniero en Computación con más de 14 años de experiencia en desarrollo fullstack, arquitectura de software
            y liderazgo técnico. He construido aplicaciones web, APIs y microservicios utilizando React.js, Python (FastAPI, Django),
            C# (.NET Core), MongoDB, PostgreSQL y SQL Server, trabajando en entornos cloud y DevOps con Azure, Docker y CI/CD.
          </p>

          <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
            Mi valor diferencial está en combinar liderazgo humano, mentoría técnica y visión arquitectónica para impulsar
            equipos autónomos, entregar soluciones escalables y generar impacto estratégico. He liderado equipos multidisciplinarios
            bajo metodologías ágiles (Scrum, Kanban) y implementado procesos de automatización que han reducido tiempos operativos
            en un 30%.
          </p>

          <ul class="mt-5 flex flex-col gap-y-3">
            <li class="flex items-center gap-x-2.5">
              <IconMail class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="mailto:jose.schmeisser.saavedra@gmail.com">
                jose.schmeisser.saavedra@gmail.com
              </a>
            </li>

            <li class="flex items-center gap-x-2.5">
              <IconPhone class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="tel:+56997958640">
                +569 9795 8640
              </a>
            </li>

            <li class="flex items-center gap-x-2.5">
              <IconBrandLinkedin class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://www.linkedin.com/in/jschmeisser/">
                @jschmeisser
              </a>
            </li>

            <li class="flex items-center gap-x-2.5">
              <IconBrandGithub class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/jose-schmeisser">
                @jose-schmeisser
              </a>
            </li>
          </ul>
        </div>
        <!-- End About -->

        <!-- Skills -->
        <div class="my-11">
          <h2 class="mb-2 font-medium text-gray-800 dark:text-neutral-200">
            Skills
          </h2>

          <!-- List -->
          <div class="space-y-3 border-t border-gray-200 dark:border-neutral-700 pt-5">
            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Backend</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandPython class="shrink-0 size-5 me-1" />
                    Python
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:csharp"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    C# (.NET Core)
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:django"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    Django
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:fastapi"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    FastAPI
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandJavascript class="shrink-0 size-5 me-1" />
                    JavaScript
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Frontend</span>
              </dt>
              <dd>
                <ul>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandReact class="shrink-0 size-5 me-1" />
                    React
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandJavascript class="shrink-0 size-5 me-1" />
                    JavaScript
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:jquery"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    jQuery
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:bootstrap"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    Bootstrap
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Databases</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:mongodb"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    MongoDB
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:postgresql"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    PostgreSQL
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:microsoftsqlserver"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    SQL Server
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Cloud & DevOps</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandAzure class="shrink-0 size-5 me-1 text-gray-800 dark:text-neutral-200" />
                    Azure
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:docker"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    Docker
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:github"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    GitHub
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:bitbucket"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    Bitbucket
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:jira"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    JIRA
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Data & BI</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="simple-icons:powerbi"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    Power BI
                  </li>
                  
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon
                      name="mdi:database-sync"
                      class="shrink-0 text-[20px] me-1 text-gray"
                    />
                    ETL Processes
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Methodologies</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconRefresh class="shrink-0 size-5 me-1" />
                    Scrum
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconLayoutKanban class="shrink-0 size-5 me-1" />
                    Kanban
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconRocket class="shrink-0 size-5 me-1" />
                    CI/CD
                  </li>
                </ul>
              </dd>
            </dl>

          </div>
          <!-- End List -->
        </div>
        <!-- End Skills -->

        <!-- Work Experience -->
        <div class="my-11">
          <h2 class="mb-2 font-medium text-gray-800 dark:text-neutral-200">
            Work Experience
          </h2>

          <!-- Timeline -->
          <div class="space-y-3 border-t border-gray-200 dark:border-neutral-700 pt-5">
            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  OL
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2023 - 2025
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Consultor TI at Openlink
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Diseñé e implementé aplicaciones fullstack utilizando React.js, FastAPI, MongoDB y Docker bajo arquitecturas de microservicios, garantizando escalabilidad y mantenibilidad en entornos de producción.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Desarrollé e integré APIs REST y Web Services que optimizaron flujos de negocio clave, mejorando la interoperabilidad entre sistemas. Implementé procesos de automatización en Azure y Logic Apps, reduciendo en un 30% los tiempos operativos en áreas críticas.
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Logros destacados:
                </p>

                <ul class="list-disc ms-6 mt-2 space-y-1.5">
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Introduje prácticas de visualización de datos con Power BI, habilitando dashboards estratégicos para la toma de decisiones.
                  </li>
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Fomenté una cultura de retroalimentación y mentoría técnica, impulsando la autonomía y colaboración del equipo.
                  </li>
                </ul>

              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  ECOS
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2019 - 2023
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Encargado de Desarrollo at ECOS Chile
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Lideré el desarrollo de plataformas para la gestión del cumplimiento ambiental, construidas con Django y PostgreSQL, mejorando la trazabilidad y reportabilidad de procesos internos y de clientes externos.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Formé y consolidé un equipo de desarrollo fullstack, fomentando autonomía, colaboración y aprendizaje continuo con un liderazgo cercano que redujo la rotación. Introduje nuevas metodologías y herramientas de desarrollo, logrando una mejora del 25% en la eficiencia del ciclo de desarrollo.
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Logros destacados:
                </p>

                <ul class="list-disc ms-6 mt-2 space-y-1.5">
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Diseñé e implementé APIs y dashboards en Power BI, integrando datos críticos y agilizando reportes regulatorios.
                  </li>
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Coordiné equipos multidisciplinarios bajo Scrum y Kanban, garantizando entregas más ágiles y alineadas a las necesidades del negocio.
                  </li>
                </ul>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  SMA
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2012 - 2019
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Profesional TI at Superintendencia del Medio Ambiente
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Lideré y participé en el desarrollo de sistemas de gestión ambiental a nivel nacional, construidos con C#, .NET Framework/Core y SQL Server, dirigidos tanto a la ciudadanía como a empresas reguladas.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Desarrollé aplicaciones críticas como el Sistema Nacional de Fiscalización Ambiental, Sistema Nacional deSeguimiento Ambiental y el Sistema Nacional de Información de Fiscalización, utilizados por miles de usuarios en todo el país.
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Logros destacados:
                </p>

                <ul class="list-disc ms-6 mt-2 space-y-1.5">
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Diseñé soluciones escalables y seguras, optimizando la trazabilidad de datos y la gestión de procesos regulatorios.
                  </li>
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Coordiné equipos multidisciplinarios, asegurando entregas oportunas y de alto impacto en el sector público.
                  </li>
                </ul>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  TN
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2011 - 2012
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Ingeniero de Desarrollo at TECNOVA S.A.
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Desarrollé soluciones informáticas de escritorio y móviles para clientes estratégicos, aplicando tecnologías de la época como PhoneGap y Visual Basic.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Optimicé procesos ETL en el sector bancario, logrando mejoras significativas en el rendimiento y la eficiencia del manejo de datos. Contribuí a la integración de herramientas de control de versiones (Tortoise SVN), fortaleciendo la trazabilidad y calidad del código en proyectos críticos.
                </p>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  PM
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2010 - 2011
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Encargado de Desarrollo at Municipalidad de Puerto Montt
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Desarrollé y mantuve sistemas municipales utilizando PHP, PostgreSQL y jQuery, asegurando estabilidad y continuidad operativa en áreas críticas como salud.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Diseñé la línea gráfica e interfaces de usuario, garantizando experiencias coherentes, funcionales y orientadas a la usabilidad. Reestructuré la organización y arquitectura de proyectos del Sistema de Salud Municipal, aumentando su escalabilidad y mantenibilidad a largo plazo.
                </p>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->
          </div>
          <!-- End Timeline -->
        </div>
        <!-- End Work Experience -->

        <!-- Education -->
        <div class="mt-10 sm:mt-14 pb-5">
          <h2 class="mb-3 font-medium text-gray-800 dark:text-neutral-200">
            Education
          </h2>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
              <NuxtImg 
                class="shrink-0 size-8 dark:hidden" 
                src="images/uaustralchile-dark.png" 
                alt="Universidad Austral de Chile" 
              />
              <NuxtImg 
                class="shrink-0 size-8 hidden dark:block" 
                src="images/uaustralchile-light.png" 
                alt="Universidad Austral de Chile" 
              />
              <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2011
              </h3>
              <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Ingeniería en Computación
              </p>
              <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Universidad Austral de Chile
              </p>
            </div>            
            <div class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
              <NuxtImg 
                class="shrink-0 size-8 dark:hidden" 
                src="images/uchile-dark.png" 
                alt="Universidad de Chile" 
              />
              <NuxtImg 
                class="shrink-0 size-8 hidden dark:block" 
                src="images/uchile-light.png" 
                alt="Universidad de Chile" 
              />
              <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2022
              </h3>
              <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Diplomado en Negocios y Gestión Empresarial
              </p>
              <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Universidad de Chile - Facultad de Economía y Negocios
              </p>
            </div>
                   
            <div class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
              <NuxtImg 
                class="shrink-0 size-8 dark:hidden" 
                src="images/gtalent-dark.png" 
                alt="G-Talent.net" 
              />
              <NuxtImg 
                class="shrink-0 size-8 hidden dark:block" 
                src="images/gtalent-light.png" 
                alt="G-Talent.net" 
              />
              <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2025
              </h3>
              <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Diplomado Scrum Master Professional
              </p>
              <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                G-Talent.net ID:<a href="https://courses.architechpro.cc/g-talent/validez_certificado?h=j%2BV6W9jN7lgR7tKhSVDQ2JehwLqxParQg6XZtKeHOBuL4nbBGcQtACghSf1j3zXM" target="_blank">GT20250902</a>
              </p>
            </div>
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Education -->
      </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->

    <!-- ========== FOOTER ========== -->
    <footer class="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div class="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p class="text-xs text-gray-600 dark:text-neutral-400">
              © {{ new Date().getFullYear() }} Jose Schmeisser.
            </p>
          </div>
          <!-- End Col -->

          <!-- List -->
          <ul class="flex flex-wrap items-center">
            <li class="inline-block">
              <!-- Dark Mode -->
              <button type="button"
                class="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-theme-click-value="dark">
                <span class="sr-only">Dark</span>
                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
              <button type="button"
                class="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-theme-click-value="light">
                <span class="sr-only">Light</span>
                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </button>
              <!-- End Dark Mode -->
            </li>
          </ul>
          <!-- End List -->
        </div>
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>
