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

function generateLink(category,key,base){
  if(category[key]){
    let elem = category[key];
    elem.base =base;
    elem.link = base === key?`/${base}`:`/${base}/${key}`;
    for(let child of elem.children){
      generateLink(category,child,base)
    }
  }
}
router.beforeEach((to,from,next)=>{
  let {grade,session}=to.params;
  if(to.path==='/'|| to.path ==='/admin'&&global.debug){
    next();
  }else{
    new Promise(res=>{
        if(global.category){
          res();
        }else{
          res(fetch('/api/getCategory').then(res=>{
            generateLink(res,'senior','senior');
            generateLink(res,'junior','junior');
            global.category=res;
          }))
        }
    }).then(()=>{
        if(/^(junior|senior)$/.test(grade)&&(!session||global.category[session])){
          let navs = [];
          let temp = session||grade;
          while(temp && temp !== 'root'){
            let location =global.category[temp];
            navs.unshift({
              name: location.name,
              link :location.link
            });
            temp = location.parent;
          }
          to.meta.navs = navs;
          next();     
        }else{
            next('/');
        }
    })
  }
  
})
export default router
