"use strict";(self.webpackChunkwebgame_matching=self.webpackChunkwebgame_matching||[]).push([[687],{687:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid px-0",on:{paste:function(e){return e.preventDefault(),t.onPaste.apply(null,arguments)},drop:function(e){return e.preventDefault(),t.onDrop.apply(null,arguments)},dragover:function(t){t.preventDefault()}}},[i("nav",{staticClass:"navbar navbar-dark bg-dark"},[i("div",{staticClass:"navbar-brand d-flex"},[i("div",{staticClass:"mr-1"},[t._v("翻翻樂")]),i("open-image",{staticClass:"mb-0",on:{load:t.insert}},[t._v("上傳")]),t.items.length?[t.isAllFlipped()?i("div",{staticClass:"btn btn-primary btn-sm my-auto",on:{click:function(e){return t.flipAll(!1)}}},[t._v("蓋牌")]):t._e(),t.isAllFlipped()?t._e():i("div",{staticClass:"btn btn-primary btn-sm my-auto",on:{click:function(e){return t.flipAll(!0)}}},[t._v("亮牌")]),i("div",{staticClass:"btn btn-warning btn-sm my-auto",on:{click:t.reset}},[t._v("重置")]),i("b-form-input",{staticClass:"my-auto ml-1",attrs:{type:"range",min:"100",max:"400",step:"5"},model:{value:t.size,callback:function(e){t.size=t._n(e)},expression:"size"}})]:t._e()],2)]),i("div",{staticClass:"container-fluid px-0 d-flex flex-wrap justify-content-around align-items-center",staticStyle:{"min-height":"calc(100vh - 60px)"}},t._l(t.items,(function(e,s){return i("div",{key:e._uid,staticClass:"game-card mt-2",style:{width:t.size+"px",height:t.size+"px"}},[i("transition",{staticClass:"d-relative",attrs:{name:"flip"}},[e.flipped?i("div",{key:"front",staticClass:"card pb-0 d-absolute game-card justify-content-around align-items-center",style:{width:t.size+"px",height:t.size+"px"},on:{click:function(e){return t.choice(s)}}},[i("img",{staticClass:"mw-100 mh-100",attrs:{src:e.src}})]):i("div",{key:"back",staticClass:"card p-0 d-absolute btn",attrs:{src:e.src},on:{click:function(e){return t.choice(s)}}},[i("div",{staticClass:"w-100 game-card jumbotron p-0 text-center mb-0 d-flex justify-content-around align-items-center h1",style:{width:t.size+"px",height:t.size+"px"}},[t._v(t._s(e.no))])])])],1)})),0)])},staticRenderFns:[],components:{OpenImage:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.id?i("div",{staticClass:"d-inline-block"},[i("input",{staticClass:"d-none",attrs:{id:t.id,type:"file",accept:"image/*",multiple:""},on:{change:t.change}}),i("label",{staticClass:"btn btn-secondary btn-sm mb-0",attrs:{for:t.id}},[i("b-icon-card-image")],1)]):t._e()},staticRenderFns:[],props:[],data:function(){return{id:""}},created(){this.id=`img-${this._uid}`},mounted(){},methods:{change(t){const e=t.srcElement;for(const t of e.files)this.readFile(t);e.value=""},readFile:function(t){const e=this,i=new window.FileReader;i.addEventListener("load",(function(){const t=i.result,s=new window.Image;s.onload=function(){const{width:i,height:n}=this;Object.assign(e,{width:i,height:n,url:t}),e.$emit("load",s,e)},s.src=t}),!1),t&&i.readAsDataURL(t)}}}},data:()=>({size:200,first:null,second:null,items:[]}),mounted(){i.e(368).then(i.bind(i,368))},methods:{onPaste(t){[...t.clipboardData.files].forEach((t=>{this.parseImg(t)}))},onDrop(t){[...t.dataTransfer.files].forEach((t=>{this.parseImg(t)}))},parseImg:function(t){const e=this,i=new window.FileReader;i.addEventListener("load",(function(){const t=i.result,s=new window.Image;s.onload=function(){e.insert(s)},s.src=t}),!1),t&&i.readAsDataURL(t)},insert(t){if(!t)return;const e=this.items.length/2;for(let i=0;i<2;i++)this.items.push({id:e,flipped:!1,src:t.src});this.reset()},choice(t){const{items:e}=this,i=e[t];if(this.second)return this.first.flipped=!1,this.second.flipped=!1,void Object.assign(this,{first:null,second:null});if(i.flipped)return;const{first:s}=this;i.flipped=!0,s?i.id===s.id?this.first=null:this.second=i:this.first=i},isAllFlipped(){const{items:t}=this;return t.filter((t=>t.flipped)).length===t.length},flipAll(t){const{items:e}=this;for(let i=0;i<e.length;i++)e[i].flipped=t;Object.assign(this,{first:null,second:null})},reset(){const t=this.items,e=t.length;for(let i=0;i<e;i++)for(let s=i+1;s<e;s++){const s=parseInt(Math.random()*e),n=t[s];t[s]=t[i],t[i]=n}Object.assign(this,{first:null,second:null});for(let i=0;i<e;i++)t[i].no=i+1,t[i].flipped=!1}}}}}]);