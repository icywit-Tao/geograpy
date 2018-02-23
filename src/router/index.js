import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ()=>import ('../views/index.vue'),
      meta:{
        title:'南京师范大学中学地理教学图像库'
      }
    },{
      path:'/admin',
      component:()=>import('../views/admin.vue'),
    },
    {
      path:'/:grade',
      component: ()=>import ('../views/main.vue'),
      children:[
        {
          path:':c1',
          component: ()=>import ('../views/main.vue')
        },
      ]
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
// router.afterEach((to, from) => {
// })
// router.beforeEach(function(to, from, next) {

//   // setPcode().then(res => {
//   //   attach.apply(null, arguments)
//   // })

// })
export default router
