import i from"./ProseCodeCopyButton.ebb4ad68.js";import{c as m,r as u,l as n,m as a,H as d,B as p,N as c,D as f,q as g}from"./runtime-core.esm-bundler.92c6bc06.js";/* empty css                      */import{d as v}from"./Container.6caa0b4c.js";import"./DocsAsideTree.b47c7654.js";import"./index.e6837c14.js";import"./cookie.e9152437.js";import"./index.37d83a56.js";const y={key:0,class:"filename"},h=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const o=u(!1);return(s,t)=>{const l=i;return n(),a("div",{class:g([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=r=>o.value=!0),onMouseleave:t[1]||(t[1]=r=>o.value=!1)},[e.filename?(n(),a("span",y,d(e.filename),1)):p("",!0),c(s.$slots,"default",{},void 0,!0),f(l,{show:o.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),P=v(h,[["__scopeId","data-v-07c2a9f8"]]);export{P as default};
