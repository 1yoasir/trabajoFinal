<template>
    <div id="principal">
        <div id="introduccion">
            <div id="introduccion2">
                <div id="introduccion3">
                    <div id="introduccion4">
                        <div class="espaciado"></div>
                        <p id="pretitulo">Introduccion</p>
                        <h1 id="titulo">HairCut Tienda de Barbería</h1>
                        <p id="subtitulo">Un peluquero es una persona cuya ocupación es principalmente cortar, vestir, arreglar, peinar y afeitar el cabello de hombres y niños. El lugar de trabajo de un peluquero se conoce como "barbería"</p>
                        <div class="espaciado"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="historia">
            <div id="subHistoria1">
                <div id="subHistoria2">
                    <div id="imagen"></div>
                </div>
                <div id="texto">
                    <div id="subTexto">
                        <div id="subTexto2">
                            <ul id="lista">
                                <li id="itemLista1">
                                    <a href="#" id="itemLista2">Desde 1996</a>
                                </li>
                            </ul>
                            <div id="textoHistoria" tabindex="0">
                                <div id="textoHistoria2" style="height: 580px;">
                                    <div id="textoHistoria3" style="left: 0px; transform: translateX(0%);">
                                        <div id="textoHistoria4" style="position: absolute; left: 0%;">
                                            <h2 id="tituloHistoria">Nuestra Historia</h2>
                                            <p class="parrafo">La Peluquería HairCut es una clásica barbería de lujo. Ofrecemos una variedad de servicios, atendiendo a todos.<br> HairCut es una tienda de caballeros, que recuerda a la clásica barbería. <br>Nos esforzamos por traer de vuelta los recuerdos, pensando únicamente en la clientela. <br>La gente paga por la calidad: HairCut es donde la obtendrá.</p>
                                            <p class="parrafo">Somos peluqueros que amamos nuestro oficio y brindamos un servicio de primer nivel que ayuda a los hombres a mantenerse en forma.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #introduccion2{
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    #introduccion2::before{
        content: " ";
        display: table;
        box-sizing: border-box;
    }

    @media (min-width: 992px){
        #introduccion2{
            width: 970px;
        }
    }

    @media (min-width: 768px){
        #introduccion2{
            width: 750px;
        }
    }

    #introduccion2::after{
        clear: both;
        content: " ";
        display: table;
    }
    
    #introduccion3{
        opacity: 1;
        transition: opacity 0.5s ease-in;
        margin-left: -15px;
        margin-right: -15px;
    }

    #introduccion3::before{
        content: " ";
        display: table;
    }

    #introduccion::after{
        clear: both;
        content: " ";
        display: table;
    }

    #introduccion4{
        position: inherit;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (min-width: 992px){
        #introduccion4 {
            margin-left: 16.66666667%;
            width: 66.66666667%;
            float: left;
        }
    }

    .espaciado{
        padding-bottom: 90px;
    }

    #pretitulo{
        font-family: 'Bitter', sans-serif;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 3px;
        font-style: italic;
        color: #000000;
        text-align: center;
    }

    #pretitulo::before{
        content: "~";
        display: inline-block;
        width: 20px;
        margin: 0 14px 4px;
    }

    #pretitulo::after{
        content: "~";
        display: inline-block;
        width: 20px;
        margin: 0 14px 4px;
    }

    @media (min-width: 768px){
        #titulo {
            font-size: 52px;
            line-height: 62px;
        }
    }

    #titulo{
        font-family: Oswald;
        color: #000000;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: 52px;
        line-height: 50px;
        font-weight: 700;
    }

    #subtitulo{
        font-size: 16px;
        color: #b59472;
        letter-spacing: 3px;
        text-align: center;
        line-height: 30px;
        font-family: 'Merriweather', sans-serif;
    }

    #historia{
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
        height: 500px;
    }
    @media (min-width: 992px) {

    #historia #subHistoria1 #imagen {
      display: -moz-box;
      display: -webkit-flexbox;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: -moz-flex;
      display: flex;
    }
    #historia #subHistoria1 #imagen {
        position: unset;
        width: 100%;
        height: 100%;
    }
}


    @media (min-width: 992px){
     #subHistoria1{
            display: -moz-box;
            display: -webkit-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: -moz-flex;
            display: flex;
        }
    }


    #subHistoria1{
        opacity: 1;
        transition: opacity 0.5s ease-in;
        margin-right: 0;
        margin-left: 0;
        -webkit-transition: opacity 0.5s ease-in;
        -o-transition: opacity 0.5s ease-in;
    }

    #subhistoria1::before{
        content: " ";
        display: table;
        box-sizing: border-box;
    }

    #subhistoria1::after{
        content: " ";
        display: table;
        box-sizing: border-box;
    }

    #subHistoria2{
       position: unset;
       min-height: 1px;
       padding-right: 0;
       padding-left: 0;
    }

    @media (min-width: 992px){
        #subHistoria2{
            width: 50%;
            float: left;
        }
    }

    #imagen{
        background-image: url("../../../../storage/app/public/images/sobrenosotros1.png");
        height: 500px;
        background-color: #000;
        color: #fff;
        position: unset;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    @media (min-width: 992px){
        #imagen{
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    #texto{
        padding-left: 0;
        padding-right: 0;
        position: relative;
        min-height: 1px;
    }

    @media (min-width: 992px){
        #texto {
            width: 50%;
            float: left;
        }
    }

    #subTexto{
        height: auto;
        padding: 120px 0;
        background-color: #000000;
        color: #fff;
        
    }

    @media (min-width: 768px){
        #subTexto{
            height: 720px;
        }
    }

    @media (max-width: 991px){
        #subTexto{
            padding: 30px 0;
        }
    }

    @media (min-width: 768px){
        #subTexto > div{
            padding: 0px 17%;
        }
    }

    #subTexto > div{
        padding: 0px 10%;
    }

    @media (min-width: 768px){
        #lista{
            margin-bottom: 0px;
            margin-top: -72px;
        }
    }

    #lista{
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        font-size: 16px;
        letter-spacing: 2px;
        margin-top: 0;
        font-style: italic;
        line-height: 40px;
        margin-bottom: 10px;
        font-family: 'Merriweather', sans-serif;
    }

    #itemLista1{
        display: inline-block;
    }

    #itemLista2{
        font-style: italic;
        border-bottom: 2px solid #ffffff;
        color: #B08B66;
        font-style: normal;
        letter-spacing: 3px;
        padding: 0 7px 9px 7px;
        position: relative;
    }

    #textoHistoria{
        position: relative;
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        -vertical-align: baseline;
        outline: none;
        width: 100%;
        height: 100%;
        
    }

    #textoHistoria2{
        overflow: hidden;
        position: relative;
        height: 100%;
    }

    #textoHistoria3{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #textoHistoria4{
        width: 100%;
        position: absolute;
        overflow: hidden;
    }

    #tituloHistoria{
        text-align: left;
        color: #ffffff;
        font-family: Oswald;
        margin-top: 25px;
        margin-bottom: 25px;
        font-weight: 700;
    }

    @media (min-width: 768px){
        #tituloHistoria {
            font-size: 52px;
            line-height: 62px;
        }
    }

    #texto p{
        line-height: 36px;
        font-family: 'Merriweather', sans-serif;
    }

    .parrafo{
        line-height: 36px;
        font-family: 'Merriweather', sans-serif;
        font-weight: 400;
    }

    div {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    -vertical-align: baseline;
    outline: none;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
        margin-top: 0;
        margin-bottom: 10px;
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        
    }

    li{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        outline: none;
        display: list-item;
        text-align: left;
    }
    a{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        outline: none;
        color: #428bca;
        text-decoration: none;
        background: transparent;
        box-sizing: border-box;
    }

    a::after{
        content: "";
        display: block;
        width: 25px;
        height: 1px;
        border-bottom: 2px solid #000000;
        margin: 0 12px 3px;
        position: absolute;
        left: calc(50% - 25px);
        bottom: -13px;
        border-color: transparent;
        left: calc(50% - 12px);
        -webkit-transition: width .3s ease 0s,left .3s ease 0s;
        -o-transition: width .3s ease 0s,left .3s ease 0s;
        transition: width .3s ease 0s,left .3s ease 0s;
        width: 0;
    }
    h2{
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
    }

    p{
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
    }

    h1{
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -vertical-align: baseline;
        outline: none;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
</style>