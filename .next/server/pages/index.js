(()=>{var e={};e.id=332,e.ids=[220,332,636],e.modules={671:(e,r)=>{"use strict";Object.defineProperty(r,"M",{enumerable:!0,get:function(){return function e(r,s){return s in r?r[s]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,s)):"function"==typeof r&&"default"===s?r:void 0}}})},764:(e,r,s)=>{"use strict";s.r(r),s.d(r,{config:()=>k,default:()=>S,getServerSideProps:()=>E,getStaticPaths:()=>M,getStaticProps:()=>A,reportWebVitals:()=>_,routeModule:()=>$,unstable_getServerProps:()=>R,unstable_getServerSideProps:()=>O,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>G,unstable_getStaticProps:()=>C});var t={};s.r(t),s.d(t,{default:()=>v});var a=s(865),n=s(455),i=s(671),l=s(781),o=s.n(l),d=s(327),c=s(732),m=s(15);let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p=(...e)=>e.filter((e,r,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===r).join(" ").trim();var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let x=(0,m.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:t,className:a="",children:n,iconNode:i,...l},o)=>(0,m.createElement)("svg",{ref:o,...h,width:r,height:r,stroke:e,strokeWidth:t?24*Number(s)/Number(r):s,className:p("lucide",a),...l},[...i.map(([e,r])=>(0,m.createElement)(e,r)),...Array.isArray(n)?n:[n]])),f=(e,r)=>{let s=(0,m.forwardRef)(({className:s,...t},a)=>(0,m.createElement)(x,{ref:a,iconNode:r,className:p(`lucide-${u(e)}`,s),...t}));return s.displayName=`${e}`,s},g=f("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),b=f("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),P=({children:e,className:r,...s})=>(0,c.jsx)("button",{className:`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${r}`,...s,children:e}),w=({className:e,...r})=>(0,c.jsx)("input",{className:`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${e}`,...r}),j=({children:e,...r})=>(0,c.jsx)("label",{className:"block text-sm font-medium text-gray-700",...r,children:e}),N=({children:e,className:r,...s})=>(0,c.jsx)("div",{className:`bg-white shadow-md rounded-lg p-6 ${r}`,...s,children:e});function y(){let[e,r]=(0,m.useState)({name:"",email:"",password:"",confirmPassword:"",phoneNumber:""}),[s,t]=(0,m.useState)({}),[a,n]=(0,m.useState)(!1),i=e=>{let{name:s,value:t}=e.target;r(e=>({...e,[s]:t}))},l=()=>{let r={};return e.name.trim()||(r.name="Name is required"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(r.email="Email is invalid"):r.email="Email is required",e.password.length<8&&(r.password="Password must be at least 8 characters long"),e.password!==e.confirmPassword&&(r.confirmPassword="Passwords do not match"),e.phoneNumber.trim()||(r.phoneNumber="Phone number is required"),t(r),0===Object.keys(r).length},o=async r=>{r.preventDefault(),l()&&(console.log("Form submitted:",e),t({email:"This email is already registered"}))};return(0,c.jsx)("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8",children:(0,c.jsxs)(N,{className:"w-full max-w-md",children:[(0,c.jsxs)("div",{className:"space-y-1 text-center",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold",children:"Create an account"}),(0,c.jsx)("p",{className:"text-gray-500",children:"Register for our Hotel Reservation System"})]}),(0,c.jsxs)("form",{onSubmit:o,className:"space-y-4 mt-4",children:[(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsx)(j,{htmlFor:"name",children:"Name"}),(0,c.jsx)(w,{id:"name",name:"name",type:"text",placeholder:"John Doe",value:e.name,onChange:i,className:s.name?"border-red-500":""}),s.name&&(0,c.jsx)("p",{className:"text-red-500 text-sm",children:s.name})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsx)(j,{htmlFor:"email",children:"Email"}),(0,c.jsx)(w,{id:"email",name:"email",type:"email",placeholder:"john@example.com",value:e.email,onChange:i,className:s.email?"border-red-500":""}),s.email&&(0,c.jsx)("p",{className:"text-red-500 text-sm",children:s.email})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsx)(j,{htmlFor:"password",children:"Password"}),(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)(w,{id:"password",name:"password",type:a?"text":"password",placeholder:"********",value:e.password,onChange:i,className:s.password?"border-red-500":""}),(0,c.jsx)("button",{type:"button",onClick:()=>n(!a),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5",children:a?(0,c.jsx)(g,{className:"h-4 w-4 text-gray-500"}):(0,c.jsx)(b,{className:"h-4 w-4 text-gray-500"})})]}),s.password&&(0,c.jsx)("p",{className:"text-red-500 text-sm",children:s.password})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsx)(j,{htmlFor:"confirmPassword",children:"Confirm Password"}),(0,c.jsx)(w,{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"********",value:e.confirmPassword,onChange:i,className:s.confirmPassword?"border-red-500":""}),s.confirmPassword&&(0,c.jsx)("p",{className:"text-red-500 text-sm",children:s.confirmPassword})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsx)(j,{htmlFor:"phoneNumber",children:"Phone Number"}),(0,c.jsx)(w,{id:"phoneNumber",name:"phoneNumber",type:"tel",placeholder:"+1 (555) 123-4567",value:e.phoneNumber,onChange:i,className:s.phoneNumber?"border-red-500":""}),s.phoneNumber&&(0,c.jsx)("p",{className:"text-red-500 text-sm",children:s.phoneNumber})]}),(0,c.jsx)(P,{type:"submit",className:"w-full",children:"Register"})]})]})})}function v(){return(0,c.jsx)(y,{})}let S=(0,i.M)(t,"default"),A=(0,i.M)(t,"getStaticProps"),M=(0,i.M)(t,"getStaticPaths"),E=(0,i.M)(t,"getServerSideProps"),k=(0,i.M)(t,"config"),_=(0,i.M)(t,"reportWebVitals"),C=(0,i.M)(t,"unstable_getStaticProps"),G=(0,i.M)(t,"unstable_getStaticPaths"),q=(0,i.M)(t,"unstable_getStaticParams"),R=(0,i.M)(t,"unstable_getServerProps"),O=(0,i.M)(t,"unstable_getServerSideProps"),$=new a.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d.default,Document:o()},userland:t})},327:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(732);s(651);let a=function({Component:e,pageProps:r}){return(0,t.jsx)(e,{...r})}},651:()=>{},455:(e,r)=>{"use strict";Object.defineProperty(r,"A",{enumerable:!0,get:function(){return s}});var s=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},15:e=>{"use strict";e.exports=require("react")},732:e=>{"use strict";e.exports=require("react/jsx-runtime")},873:e=>{"use strict";e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[781],()=>s(764));module.exports=t})();