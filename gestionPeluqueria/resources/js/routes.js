const Inicio = ()=> import('./components/invitado/InicioInvitado.vue');
const SobreNosotros = ()=> import('./components/invitado/SobreNosotros.vue');
const Servicios = ()=> import('./components/invitado/ServiciosInvitado.vue');
const Equipo = ()=> import('./components/invitado/Equipo.vue');
const Login = ()=> import('./components/invitado/Login.vue');

export const routes = [
    {
        name: 'inicio',
        path: '/inicio',
        component: Inicio
    },

    {
        name: 'sobre-nosotros',
        path: '/sobreNosotros',
        component: SobreNosotros
    },

    {
        name: 'servicios',
        path: '/servicios',
        component: Servicios,
    },

    {
        name: 'equipo',
        path: '/equipo',
        component: Equipo,
    },

    {
        name: 'login',
        path: '/login',
        component: Login,
    }
]