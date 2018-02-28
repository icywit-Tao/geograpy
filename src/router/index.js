import Vue from 'vue'
import Router from 'vue-router'
import {fetch} from '../utils/fetch';
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
          path:':session',
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

router.beforeEach((to,from,next)=>{
  let {grade,session}=to.params;
  if(to.path==='/'|| to.path ==='/admin'&&global.debug){
    next();
  }else{
    new Promise(res=>{
        if(global.category){
            res();
        }else{
            res(fetch('/api/getCategory').then(res=>global.category=res))
        }
    }).then(()=>{
        if(/^(junior|senior)$/.test(grade)&&(!session||global.category[session])){
            next();     
        }else{
            next('/');
        }
    })
  }
  
})
export default router
