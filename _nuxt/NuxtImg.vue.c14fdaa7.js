import{w as n,b as a}from"./index.e6837c14.js";import{c as u,e as o,h as i}from"./runtime-core.esm-bundler.92c6bc06.js";const g=u({props:{src:{type:[String,Object],default:null},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const r=t=>t&&t.startsWith("/")&&!t.startsWith("//")?n(t,a().app.baseURL):t;return{imgSrc:o(()=>{let t=e.src;try{t=JSON.parse(t)}catch{t=e.src}return typeof t=="string"?r(e.src):{light:r(t.light),dark:r(t.dark)}})}},render({imgSrc:e,alt:r}){if(typeof e=="string")return i("img",{src:e,alt:r});const s=[];return e.light&&s.push(i("img",{src:e.light,class:["dark-img"],alt:r})),e.dark&&s.push(i("img",{src:e.dark,class:["light-img"],alt:r})),s}});export{g as _};
