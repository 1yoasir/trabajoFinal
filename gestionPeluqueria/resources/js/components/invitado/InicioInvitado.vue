<template>
    <div id="principal" :style="{backgroundImage: 'url('+ arrayFotos[index] + ')'}">
        <div id="secundario">
            <h1>Bienvenido a Hair Cut</h1> <br>
            <strong>La tienda de barbería</strong><br>
            <router-link :to="{name: 'sobre-nosotros'}">
                <button id="btn1" class="button" @click="changeColor('black')">
                    Conócenos
                    <div class="button__horizontal"></div>
	                <div class="button__vertical"></div>
                </button>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
   data() {
       return {
           arrayFotos: [
               "images/inicio1.png",
               "images/inicio2.png",
               "images/inicio3.png"
           ],
           index: 0,
       }
   },
   methods: {
       changeColor(color){
           this.$root.$emit('changecolor', color)
       },
       changeImage(){
           this.index++;
           if(this.index == 3){
               this.index = 0;
           }
       },
   },

   created() {
       setInterval(this.changeImage, 10000);
   },
   

}
</script>

<style scoped>
    #principal{
       
        background-repeat: no-repeat;
        /*Centramos el fondo al centro*/
        background-position: center;
        /*Y le decimos que siempre ocupe el ancho y el alto con esto*/
        background-size: cover;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #secundario{
        text-align: center;
    }

    

    h1{
        color: white;
    }
    strong{
        font-weight: 300;
        color: white;
        font-size: 105px;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 5px;
        line-height: 87px;
    }

    .button {
  --offset: 10px;
  --border-size: 2px;
  position: relative;
  padding: 1.5em 3em;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  background: transparent;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: background 0.8s ease;
  margin-top: 40px;
  transition: transform 1s;
  border-radius: 30px;
}
.button:hover {
  background: #b5947279;
  transform: scale(1.1);
  margin-top: 40px;
  box-shadow: 10px 10px 10px #48529944;
}
.button__horizontal, .button__vertical {
  position: absolute;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;
}
.button__horizontal::before, .button__vertical::before {
  content: "";
  position: absolute;
  border: inherit;
}
.button__horizontal {
  --vertical-offset: calc(var(--offset) * -1);
  border-top: var(--border-size) solid currentcolor;
  border-bottom: var(--border-size) solid currentcolor;
}
.button__horizontal::before {
  top: calc(var(--vertical-offset) - var(--border-size));
  bottom: calc(var(--vertical-offset) - var(--border-size));
  left: calc(var(--vertical-offset) * -1);
  right: calc(var(--vertical-offset) * -1);
}
.button:hover .button__horizontal {
  transform: scaleX(0);
}
.button__vertical {
  --horizontal-offset: calc(var(--offset) * -1);
  border-left: var(--border-size) solid currentcolor;
  border-right: var(--border-size) solid currentcolor;
}
.button__vertical::before {
  top: calc(var(--horizontal-offset) * -1);
  bottom: calc(var(--horizontal-offset) * -1);
  left: calc(var(--horizontal-offset) - var(--border-size));
  right: calc(var(--horizontal-offset) - var(--border-size));
}
.button:hover .button__vertical {
  transform: scaleY(0);
}
</style>