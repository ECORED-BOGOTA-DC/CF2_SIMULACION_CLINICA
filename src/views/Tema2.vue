<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Teorías de la simulación clínica

    p.mb-5(data-aos="fade-right") De acuerdo con Peter Dieckmann, un ambiente de simulación se define como aquel donde al reunirse varias personas en un espacio o tiempo, pueden realizar actividades que se asemejan a la realidad en torno a un simulador (Elsevier, 2015). Esta práctica social, tiene como fin dar cumplimiento a los objetivos propuestos para el aprendizaje. Peter Dieckmann diseñó un modelo en el cual se puede entender de una manera más clara las actividades realizadas en simulación, dividido en tres (3) fases con ocho (8) momentos diferentes.
      br
      br
      |Como se mencionó anteriormente sobre el concepto de cada fase o etapa de la simulación clínica, a continuación se explicará con mayor profundización su importancia y aplicación:
    .p-4.mb-5(style="background-color: #E7F9FF")
      SlyderB.col-xl-11(:datos="datosSlyder" data-aos="fade-left")
    p.mb-5 Dentro de las fases de la simulación, existen algunos momentos que son importantes como se evidencia en el siguiente video (Departamento de Integración de Ciencias Médicas, 2020):

    .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto(style="background: linear-gradient(0deg, rgba(99,242,228,1) 0%, rgba(71,71,255,1) 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1 Fases de la simulación clínica 
              p.text-white.text-small Aquí hace falta un texto
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/5Nng3DX3fTY" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")
    
    p.mb-5(data-aos="fade-right") Los ocho (8) momentos mencionados dentro de las tres (3) fases se presentan en la siguiente figura, es de resaltar que los momentos cinco (5), seis (6) y siete (7) son recomendados para integrar el pensamiento crítico en la formación durante su proceso de ejecución. 

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 10
          p.mb-0.text-small Momentos de las etapas en simulación clínica 
        .col-lg-6.mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 610px" data-aos="fade-left" alt="Muestra los 8 momentos de las etapas en simulación clínica: 1 Información previa. Introducción Indicaciones de manejo. Teoría. Socialización del caso clínico. Escenario. Debriefing Conclusión.")
          span.text-small Nota.SENA (2022)
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Primera etapa “<em>Prebriefing</em>”',
        texto:
          'También llamada diagnóstico clínico, donde se encuentra la información previa e información general de las actividades de aprendizaje con simulación identificando limitaciones o beneficios, la introducción a los ambientes de simulación donde se pretende contextualizar frente al conocimiento del simulador. Para este momento se prepara la llegada del aprendiz y se incentiva al desarrollo de las actividades propuestas para la formación. Con estas indicaciones se da seguridad en la creación del ambiente de aprendizaje siendo este positivo y adecuado.',
        imagen: require('@/assets/curso/temas/tema2/img-6.png'),
      },
      {
        titulo: 'Segunda etapa “Escenario de simulación”',
        texto:
          'Está ubicada en el escenario e intervención del evento clínico, donde se contextualiza a los participantes con la información general de acuerdo a la primera fase y los conocimientos previos obtenidos. Una vez dada la información sobre el simulador y cuál será el objetivo del evento clínico a resolver, se indicará dónde y cuándo se llevará a cabo la actividad con base al ambiente y cuáles son los recursos con lo que cuentan para su desarrollo. Se debe asignar y tener claro el juego de roles que cada participante tendrá en el escenario simulado como, por ejemplo: rol del aprendiz, instructor y la preparación de los aprendices para ingresar a la realidad de dicho escenario.',
        imagen: require('@/assets/curso/temas/tema2/img-7.png'),
      },
      {
        titulo: 'Tercera fase “<em>debriefing</em>”',
        texto:
          'También llamada etapa de reflexión tiene como intención socializarse en un área distinta a la que haya tenido en simulación, mediante una discusión facilitada donde se exponen las experiencias vividas en el escenario y cómo se resolvió el evento clínico sobre acciones y cuál fue el desempeño transcurrido el tiempo desde su inicio y hasta el final. Los momentos del <em>debriefing</em> están conformados por: descripción, análisis y aplicación.',
        imagen: require('@/assets/curso/temas/tema2/img-8.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
