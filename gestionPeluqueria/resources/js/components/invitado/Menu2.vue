<template>
    <div>
        <nav>
            <div>
                <router-link :to="{name: 'inicio'}"><img src="images/logo.png" v-on:click="cambiarFondoDivNada"></router-link>
            </div>
        </nav>
    </div>
</template>