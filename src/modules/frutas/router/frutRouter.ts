
const frutRouter = [
    {
        path: '/frutas',
        name: 'ofertas',
        // beforeEnter: [isAuthenticatedGuard],
        component: () => import('@/modules/frutas/frutDashboard.vue')
      }
];

export default frutRouter 