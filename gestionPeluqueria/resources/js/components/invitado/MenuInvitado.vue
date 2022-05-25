<template>
    <div class="menu" :style="{ backgroundColor: color }">
        <router-link :to="{name: 'inicio'}"><img src="images/logo.png" v-on:click="cambiarFondoDivNada"></router-link>
        <nav id="nav">
            <ul id="menuUl">
                <li id="menu_item" v-on:click="cambiarFondoDivNada"><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
                <li id="menu_item" v-on:click="cambiarFondoDiv"><router-link :to="{name: 'sobre-nosotros'}">Sobre Nosotros</router-link></li>
                <li id="menu_item" v-on:click="cambiarFondoDiv"><router-link :to="{name: 'servicios'}">Servicios</router-link></li>
                <li id="menu_item" v-on:click="cambiarFondoDiv"><router-link :to="{name: 'equipo'}">Equipo</router-link></li>
                <li id="menu_item" v-on:click="cambiarFondoDiv"><router-link :to="{name: 'login'}">Login</router-link></li>
            </ul>
        </nav>
        <span><img id="menuIcono" src="images/menuIcono.png" alt="menu"></span>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: "logo.png",
            color: "",
        }
    },
    props: {
        pepe: String,
        pepa: String
    },
    created() {
        this.$root.$on('changecolor', (data)=>{
            this.color=data;
        });
    },
    methods: {
        cambiarFondoDiv(){
            this.color = "black"
        },
        cambiarFondoDivNada(){
            this.color = ""
        }
    },
}
</script>

<style scoped>
    #menuIcono{
        /* background: #B59476; */
        padding: 20px;
        /* display: block; */
        /* color: white; */
        /* cursor: pointer;
        font-size: 1.5rem;
        width: 100%; */
    }

    @media (max-width: 840px) {
        #menuIcono{
            visibility: visible;
        }   
    }
    

    @media (max-width: 840px) {
        #nav{
            display: none;
        }   
    }

    .menu{
        width: 100%;
        margin: 0 auto;
        clear: both;
        display: table;
        position: fixed;
        height: 100px;
        
    }

    img{
        height: 100px;
        width: 100px;
        float: left;
        padding: 8px;
    }

    nav{
        float: right;
    }

    

    nav ul li{
        list-style: none;
        margin-left: 60px;
        margin-right: 25px;
        float: left;
        padding: 30px 0;
        position: relative;
    }
    h5{
        color: rebeccapurple;
    }

    nav ul li a{
        text-decoration: none;
        color: rgb(157, 153, 153);
        font-weight: bold;
    }

    nav ul li a::before{
        display: block;
        content: '';
        width: 0%;
        background: rgb(157, 153, 153);
        height: 5px;
        bottom: 20px;
        position: absolute;
    }

    nav ul li a::before{
        display: block;
        content: '';
        width: 0%;
        background: #B59476;
        height: 5px;
        bottom: 20px;
        position: absolute;
    }

    nav ul li a:hover::before{
        width: 100%;
    }

    nav ul li a:hover{
        color: white;
    }
    #menu{
        background: black;
    }
</style>