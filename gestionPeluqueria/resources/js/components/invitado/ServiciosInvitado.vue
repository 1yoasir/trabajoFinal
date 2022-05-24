<template>
    <div id="principal">
        <!--INFORMACIÓN DEL SERVICOS EN GENERAL-->
        <div id="servicioGeneral" class="section">
            <div class="container">
                <div class="hilera visible">
                    <div class="colu-md-8 colu-md-offset-2">
                        <div class="voffset110"></div>
                        <p class="pretitulo">Características</p>
                        <h1 class="titulo">Nuestros Servicios y Precios</h1>
                        <p class="subtitulo colored">Lavado + Corte, 13€ . Lavar y cortar con cortapelos eléctrico y/o tijera con acabado a navaja. Afeitado, 15€. Con hoja. Preparación con espuma y toalla caliente.</p>
                        <div class="voffset110"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- INFORMACIÓN DE CADA SERVICIOS -->
        <div id="caracteristicas" class="section caracteristicas">
            <div class="container">
                <div class="hilera visible">
                    <div class="colu-sm-4">
                        <!-- POSIBLE FALLO -->
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/barber-chair.png" alt="silla-barbero">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Corte de pelo</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Corte de pelo increíble y profesional por solo 15€</p>
                        </div>
                    </div>
                    <div class="colu-sm-4">
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/straight-razor.png" alt="recorte-barba">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Recorte de bigote</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Recorte de bigote impresionante y profesional por solo 7€</p>
                        </div>
                    </div>
                    <div class="colu-sm-4">
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/shaving-brush.png" alt="afeitado">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Afeitado</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Impresionante y profesional afeitado facial por solo 9€</p>
                        </div>
                    </div>
                </div>
                <div class="voffset80"></div>
                <div class="hilera visible">
                    <div class="colu-sm-4">
                        <!-- POSIBLE FALLO -->
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/electric-razor.png" alt="maquina-cortar">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Recorte de barba</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Impresionante y profesional corte de barba por solo 8€</p>
                        </div>
                    </div>
                    <div class="colu-sm-4">
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/scissors.png" alt="recorte">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Corte de tijeras</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Impresionante y profesional Clipper Cut por solo 14€</p>
                        </div>
                    </div>
                    <div class="colu-sm-4">
                        <div class="horizontal-borde fadeInUp">
                            <div class="voffset40"></div>
                            <img class="icono" src="images/massage.png" alt="afeitado">
                            <div class="voffset40"></div>
                            <h4 class="titlefeat">Masaje facial</h4>
                            <div class="voffset30"></div>
                            <p class="textofeat">Impresionante y profesional masaje facial por solo 20€</p>
                        </div>
                    </div>
                </div>
                <div class="voffset80"></div>
            </div>
        </div>

        <!-- INFORMACIÓN DEL HORARIO -->
        <div class="banner full parallax-section" data-parallax-image="images/sillaBarberia.png" style="background: url('images/sillaBarberia.png'); background-position: center center; background-size: cover; background-repeat: initial; background-attachment: inherit; background-origin: initial; background-clip: initial; background-color: initial;"> <!-- background: url('images/sillaBarberia.png') 30% 381.6px fixed;-->
            <div class="container">
                <div class="row visible">
                <div class="colu-md-6 colu-md-offset-3">
                    <div class="voffset110"></div>
                    <h1 class="titulo colored invert">We are working 24/7</h1>
                    <div class="voffset10"></div>
                    <p class="subtitulo invert">Horario especial</p>
                    <div class="separator invert"></div>
                    <p class="subtitulo small invert">Día 24º Diciembre: 9:30am - 4pm <br>Día 31º Diciembre: 9:30am - 4pm</p>
                    <div class="voffset140"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/** css id:servicioGeneral */
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

.container::before,
.container::after {
    content: " ";
    display: table;
}

.container::after {
    clear: both;
}

.hilera.visible {
    opacity: 1;
}

.hilera {
    transition: opacity 0.5s ease-in;
    margin-left: -15px;
    margin-right: -15px;
}

.hilera::before,
.hilera::after {
    content: "";
    display: table;
}

.hilera::after {
    clear: both;
}

@media (min-width: 992px) {
    .colu-md-offset-2 {
        margin-left: 16.66666667%;
    }
}

@media (min-width: 992px) {
    .colu-md-8 {
        width: 66.66666667%;
    }
}

@media (min-width: 992px) {
    .colu-md-8 {
        float: left;
    }
}

.colu-md-8 {
    position: unset;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

.voffset110 {
    padding-bottom: 110px;
}

.pretitulo {
    font-family: "Bitter", sans-serif;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 3px;
    font-style: italic;
    color: #000000;
    text-align: center;
}

.pretitulo:after,
.pretitulo:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    border-bottom: 1px solid #000000;
    margin: 0 14px 4px;
}

@media (min-width: 768px) {
    .titulo {
        font-size: 52px;
        line-height: 62px;
    }
}

.titulo {
    font-family: Oswald;
    color: #000000;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 52px;
    line-height: 50px;
    font-weight: 700;
}
.subtitulo.colored {
    color: #b59472 !important;
}

.subtitulo {
    font-size: 16px;
    color: #000000;
    letter-spacing: 3px;
    text-align: center;
    line-height: 30px;
    font-family: "Merriweather", sans-serif;
}
/** FIN CSS id:servicioGeneral */

/** INICIO CSS id:caracteristicas */
.caracteristicas {
    text-align: center;
}

@media (min-width: 992px) {
    .caracteristicas div[class*="colu-"] {
        padding-left: 20px;
        padding-right: 20px;
    }
}

.caracteristicas div[class*="colu-"] {
    min-height: 300px;
}

@media (min-width: 768px) {
    .colu-sm-4 {
        width: 33.33333333%;
    }
}

@media (min-width: 768px) {
    .colu-sm-4 {
        float: left;
    }
}

.colu-sm-4 {
    position: unset;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

.voffset40 {
    padding-bottom: 40px;
}

.caracteristicas div[class*="colu-"] h4 {
    font-weight: 300;
    font-size: 24px;
    letter-spacing: -0.3px;
    font-family: "Oswald", sans-serif;
    color: #373c42;
    font-weight: 700;
}
.icono {
    height: 75px;
    width: 75px;
}

.icono::before {
    content: "\e900";
}

.caracteristicas div[class*="colu-"] .horizontal-borde::after {
    content: "";
    position: unset;
    width: 2px;
    height: 100%;
    right: 0;
    top: 0;
    background-color: #f8f8f8;
}

.visible .fadeInUp:nth-child(1) {
    animation-delay: 0.4s;
}

.visible .fadeInUp {
    -webkit-animation: fadeInUp 0.5s ease-in-out both;
    -moz-animation: fadeInUp 0.5s ease-in-out both;
    animation: fadeInUp 0.5s ease-in-out both;
}

.voffset30 {
    padding-bottom: 30px;
}

.caracteristicas div[class*="colu-"] p {
    font-size: 15px;
    letter-spacing: 3.6px;
    line-height: 30px;
    color: #666666;
}

.voffset80 {
    padding-bottom: 80px;
}

/** INICIO DEL CSS HORARIO */
.banner {
    background-color: #000;
    color: #fff;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

@media (min-width: 992px) {
    .colu-md-offset-3 {
        margin-left: 25%;
    }
}

@media (min-width: 992px) {
    .col-md-6 {
        width: 50%;
    }
}

@media (min-width: 992px) {
    .colu-md-6 {
        float: left;
    }
}

.colu-md-6 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

.voffset110 {
    padding-bottom: 110px;
}

.titulo.invert {
    color: #ffffff;
}
.titulo.colored {
    color: #b59472 !important;
}

.subtitulo.invert {
    color: #ffffff;
}

.separator.invert {
    background-color: #ffffff;
}

.separator {
    height: 2px;
    width: 25px;
    background-color: #000000;
    margin: 30px auto 20px;
}

.subtitulo.small {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 3px;
}

.subtitulo.invert {
    color: #ffffff;
}

@media (min-width: 1600px) {
    .parallax-section {
        background-size: cover !important;
    }
}
/* div{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    -vertical-align: baseline;
    outline: none;
    display: block;
} */

/* p{
    font-size: 14px;
    letter-spacing: 2.9px;
    line-height: 30px;
    font-weight: 400;
    font-family: 'Merriweather', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    -vertical-align: baseline;
    outline: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
} */
</style>

