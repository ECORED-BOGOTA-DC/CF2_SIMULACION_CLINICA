<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 4
      h1 Diseño y aplicación de escenarios de simulación clínica

    .tarjeta.mb-5.p-4.px-xl-0(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,245,254,1) 50%, rgba(255,255,255,1) 100%); overflow: hidden")
      .col-xl-10.mx-auto.d-flex.flex-wrap
        p.mb-0.order-2.order-lg-1.col-lg-7.pe-lg-5(data-aos="fade-right") Los escenarios sirven como herramientas que contextualizan las condiciones de la simulación, dependiendo del tipo de objetivo, estos pueden cambiar en complejidad y tiempo. Es importante que los escenarios de simulación estén orientados por objetivos definidos exhaustivamente para que las actividades, guiones y recursos empleados permitan construir una experiencia realista y de alta fidelidad. De hecho, entre más realista sea la práctica clínica, mayor será el éxito formativo, y de esta manera se garantizará la apropiación de conocimientos, habilidades o destrezas en el personal de salud.
        img.mb-4.mb-lg-auto.order-1.order-lg-2.col-lg-5(src="@/assets/curso/temas/tema4/img-1.jpg" data-aos="fade-left" alt="describe la importancia de los escenarios en la simulación como herramientas para contextualizar las condiciones de práctica")
    
    p.mb-5(data-aos="fade-right") Sin embargo, también son importantes los resultados de las interacciones entre los participantes, el ambiente simulado y los objetivos propuestos. Teniendo esto en cuenta, los espacios de simulación pueden ser adecuados o transformados de acuerdo a la evidencia final, es por esto que posterior a cualquier experiencia, la evaluación del diseño y retroalimentación de la práctica clínica son fundamentales para ajustar los procesos y lograr el cumplimiento de la formación.  
      br
      br
      |Antes de diseñar un espacio simulado es importante tener en cuenta (ver figura):
    
    .tarjeta.p-4.mb-5(style="background: linear-gradient(0deg, rgba(71, 71, 255, 4%) 5%, white 10%,  white 90%, rgba(71, 71, 255, 4%) 96%); overflow: hidden;")
      .col-lg-11.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 12
          span.d-block.text-small Aspectos que anteceden el diseño de una simulación
        .mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema4/img-2.svg" data-aos="fade-left" alt="describe los cuatro momentos para la simuñación clínica")
          span.text-small Nota.SENA (2022)
    p.mb-5(data-aos="fade-right") Posteriormente para planificar y desarrollar el espacio simulado se puede emplear una plantilla que colabore en el montaje del espacio simulado. En la literatura de la simulación clínica existen diversos formatos para ello, pero pueden variar dependiendo de la institución, de sus objetivos, su infraestructura, entre otros factores. 
      br
      |Sin embargo, entre todos estos pueden encontrarse elementos en común como: 

    LineaTiempoD.color-acento-contenido.mb-5.linea-tiempo-d-edit-2.col-lg-7.ms-auto(data-aos="fade-left")
      p(numero="1" titulo="Título del escenario") Brinda una idea sobre el escenario. 
      p(numero="2" titulo="Objetivos") Que plantean de manera general y especifica las competencias técnicas y no técnicas a aprender.  
      p(numero="3" titulo="Índice") Enumera los apartados del escenario.  
      p(numero="4" titulo="Lista de recursos") Detalla los insumos, materiales y talento humano que se requiere para la ejecución del espacio de simulación.  
      p(numero="5" titulo="Puntos básicos") En este elemento se especifican y se explican las etapas de la simulación, la cual consta del <em>prebriefing</em>, los aspectos propios del desarrollo del escenario, y el <em>debriefing</em>. 
      p(numero="6" titulo="Flujograma") Se detalla de manera sucinta el tiempo distribuido en el <em>prebriefing</em>, simulación y <em>debriefing</em>. 
      p(numero="7" titulo="Logística") Contempla el guion de la simulación, el cual contiene el caso clínico, las acciones esperadas de los aprendices, la interacción de otros actores participantes, así como los resultados posibles.  
      p(numero="8" titulo="Estudios") Es el conjunto de laboratorios, exámenes u otros documentos en su versión impresa, que posibilita un abordaje clínico adecuado.   
      p(numero="9" titulo="Marco teórico") Compuesto por la síntesis de la revisión bibliográfica elaborada, con énfasis a la importancia para la población participante. 
      p(numero="10" titulo="Revisión bibliográfica") Es recomendable emplear información no mayor a cinco años y citar en formato APA o Vancouver. 
  
    P(data-aos="fade-right") Además, es ineludible la construcción de un guion o libreto, el cual sirve de base para toda la experiencia de la simulación, orienta las situaciones, prevé los roles y conduce a los participantes en las actividades que deben realizar. Asimismo, contiene acciones de ajuste o modificadores como los life savers (recursos salvavidas) que ayudan a cambiar o redireccionar la escena, en función a cumplir el resultado esperado. 

    P(data-aos="fade-right") Antes de la simulación se realiza el <em>prebriefing</em>, en el cual se brinda la información y los antecedentes necesarios para el desarrollo del ambiente.

    P(data-aos="fade-right") En este punto también se distribuyen los roles y actividades que deben desarrollarse. Cuando la simulación inicia, la tarea del instructor o facilitador es conducir el evento clínico, observar y consignar las acciones de los participantes, manipular el simulador según la intención de la formación. También, los participantes pueden encontrarse con ruidos o señales que son aspectos que aparecen durante el desarrollo del espacio y propenden por orientar y redirigir a los aprendices. Estos pueden ser estímulos auditivos, visuales u olfativos o también un comentario, pregunta o pista del instructor o simulador. De esta manera se procura controlar el ambiente de simulación para el logro efectivo del aprendizaje. 

    P.mb-5(data-aos="fade-right") Al terminar el evento simulado es importante que se genere el proceso de evaluación, que no solo comprende la estrategia del <em>feedback</em> y la etapa de <em>debriefing</em>, sino que también procura valorar aspectos como la orientación que brinda el instructor o facilitador y el ambiente de simulación per se.


    .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Criterios de evaluación en una simulación clínica 
              p.text-small(style="color: #262626") En el siguiente documento se puede apreciar un resumen sobre los criterios de evaluación que se pueden tener en cuenta:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/OKEst_Criterios_de_evaluacion_en_una_simulacion_clínica.docx')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    p.mb-5 A continuación se exponen tres (3) tipos de diseños y aplicación del <em>prebriefing</em>:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit")
      .row.col-lg-11.mx-auto(titulo="Diseño y aplicación del <em>prebriefing</em>")
        .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
          p Aquí se instruyen los objetivos de la formación, y los aspectos, condiciones y circunstancias concernientes al caso o evento clínico a desarrollar.
            br
            br
            |Es primordial realizar un buen diseño del <em>prebriefing</em> en el momento de la planeación de cualquier ambiente de aprendizaje, debido a que de esta puede depender el éxito o fracaso de la simulación médica. Para ello, se sugiere tener en cuenta las siguientes consideraciones:  
        .col-lg-6.mb-4.mb-lg-auto.order-1.order-lg-2(data-aos="fade-left")
          figure
            img.mx-auto(src='@/assets/curso/temas/tema4/img-3.svg' style="max-width: 505px" alt="importancia de instruir los objetivos de formación y los aspectos, condiciones y circunstancias relacionados con el caso clínico o evento a desarrollar")
      
      .row.col-lg-11.mx-auto(titulo="Diseño y aplicación del <em>feedback</em>")
        .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
          p El <em>feedback</em> ha sido conceptualizado de diversas maneras dependiendo del enfoque que lo defina, ya sea un instrumento, un ciclo o una estrategia. En la simulación clínica el <em>feedback</em> hace parte del proceso de evaluación y reflexión final que pretende retroalimentar las reacciones y respuestas de los participantes de la simulación clínica. De esta manera se busca revertir de manera positiva la formación del aprendiz y favorecer la cualificación de su práctica, ya sea en la repetición de los escenarios simulados o en contextos clínicos reales.  
        .col-lg-6.mb-4.mb-lg-auto.order-1.order-lg-2
          figure
            img.mx-auto(src='@/assets/curso/temas/tema4/img-4.svg' style="max-width: 505px" alt="ilustración que aborda el concepto del feedback en la simulación clínica, el cual puede ser considerado como un instrumento, un ciclo o una estrategia según el enfoque que se le dé")
      
      .row.col-lg-11.mx-auto(titulo="Diseño y aplicación del <em>debriefing</em>")
        .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
          p En la primera fase se promueve que los participantes puedan expresar sus reacciones inmediatas a la simulación.
            br
            br
            |En la segunda fase se profundiza sobre los eventos clínicos desarrollados y la manera cómo fueron abordados por los participantes. 
            br
            br
            |En la tercera fase se sintetizan los aprendizajes obtenidos para convertirlos en “lecciones de vida”. En este instante el debriefer debe generar espacios en los cuales los participantes puedan realizar sus propias conclusiones. 
        .col-lg-6.mb-4.mb-lg-auto.order-1.order-lg-2
          figure
            img.mx-auto(src='@/assets/curso/temas/tema4/img-5.svg' style="max-width: 505px" alt="ilustra las tres fases del proceso de <em>debriefing</em> en la simulación")

    p(data-aos="fade-right") Es indispensable que el <em>debriefing</em> se realice en su totalidad y que no se menosprecie dentro de todo el escenario simulado. Sin una adecuada retroalimentación el logro de los objetivos formativos puede verse afectado, y por lo tanto todo el proceso de educación. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass">
.linea-tiempo-d-edit-2
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number
        background-color: #7E5EE3
        color: white
.tarjeta-edit
  background-color: #ECE7FB
</style>
