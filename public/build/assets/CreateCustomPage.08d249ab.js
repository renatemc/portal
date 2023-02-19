import{r as u,u as P,K as L,A as T,p as w,o as k,c as R,w as _,b as i,a as e,t as r,f as p,l as A,g as a,d as N,e as B,x as n,z as m,y as E,G as g}from"./app.a3e7b7f5.js";import{A as D}from"./AppLayout.80ad2bf1.js";import{_ as c}from"./InputError.8f56ad9c.js";import{L as X}from"./LoadingButton.553a03f0.js";import{X as b}from"./XInput.2561a8e0.js";import{X as j}from"./XSelect.8cc39901.js";import{e as H}from"./easymde.ef491511.js";import{b as z,h as G,o as O,T as F}from"./darkTheme.358dde34.js";const I={class:"py-12 px-10 max-w-7xl mx-auto"},K={class:"flex justify-between mb-8"},$={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},q={class:"mt-10 sm:mt-0"},J={class:"md:grid md:grid-cols-4 md:gap-6"},Q={class:"md:col-span-1"},W={class:"px-4 sm:px-0"},Y={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},Z={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},ee=e("br",null,null,-1),se={class:"mt-5 md:mt-0 md:col-span-3"},te=["onSubmit"],ae={class:"shadow overflow-hidden sm:rounded-md"},oe={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},le={class:"grid grid-cols-6 gap-4"},re={class:"col-span-6 sm:col-span-6"},ie={class:"col-span-6 sm:col-span-6"},de={class:"col-span-6 sm:col-span-6"},ne={key:0,class:"text-sm mt-4 p-4 border border-orange-700 rounded bg-orange-200 text-orange-700 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},ce={class:"col-span-6 sm:col-span-6"},me={class:"col-span-6 sm:col-span-6"},ue={class:"col-span-6 sm:col-span-6"},_e={class:"flex items-center col-span-6 sm:col-span-6"},pe={class:"text-base font-medium text-gray-900 dark:text-gray-300"},ge={class:"mt-4 flex space-x-4"},be={class:"flex items-start"},he={class:"flex items-center h-5"},ye={class:"ml-3 text-sm"},ve={for:"is_visible",class:"font-medium text-gray-700 dark:text-gray-400"},fe={class:"text-gray-500 text-xs"},xe={class:"flex items-start"},we={class:"flex items-center h-5"},ke={class:"ml-3 text-sm"},Ve={for:"is_in_navbar",class:"font-medium text-gray-700 dark:text-gray-400"},Ce={class:"text-gray-500 text-xs"},Ue={class:"flex items-start"},Se={class:"flex items-center h-5"},Me={class:"ml-3 text-sm"},Pe={for:"is_sidebar_visible",class:"font-medium text-gray-700 dark:text-gray-400"},Le={class:"text-gray-500 text-xs"},Te={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"},ze={__name:"CreateCustomPage",setup(Re){const d=u("markdown"),h=u(""),V={markdown:"Markdown - Add your content in markdown format",html:"HTML - Add your content in code using HTML/CSS",redirect:"Redirect - This page will redirect to another URL"},s=P({title:"",body:"",path:"",is_visible:!0,is_in_navbar:!1,is_redirect:!1,redirect_url:null,is_html_page:!1,is_sidebar_visible:!0}),y=L(),v=[z,G()];window.colorMode==="dark"&&v.push(O);const f=u(""),C=t=>{y.value=t.view};let x=null;const U=()=>{d.value==="markdown"?s.body=x.value():d.value==="html"&&(s.body=y.value.state.doc.toString()),s.is_redirect=d.value==="redirect",s.is_html_page=d.value==="html",s.post(route("admin.custom-page.store"),{})};return T(()=>{x=new H({previewClass:"editor-preview prose max-w-none"})}),(t,o)=>{const S=w("app-head"),M=w("inertia-link");return k(),R(D,null,{default:_(()=>[i(S,{title:"Create Custom Page"}),e("div",I,[e("div",K,[e("h1",$,r(t.__("Create Custom Page")),1),i(M,{href:t.route("admin.custom-page.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:_(()=>[e("span",null,r(t.__("Cancel")),1)]),_:1},8,["href"])]),e("div",q,[e("div",J,[e("div",Q,[e("div",W,[e("h3",Y,r(t.__("Overview")),1),e("p",Z,[p(r(t.__("Using custom pages you can create a page based on markdown to show information like privacy, rules etc."))+" ",1),ee,p(" "+r(t.__("Using custom pages you can also redirect to some external links.")),1)])])]),e("div",se,[e("form",{onSubmit:A(U,["prevent"])},[e("div",ae,[e("div",oe,[e("div",le,[e("div",re,[i(b,{id:"title",modelValue:a(s).title,"onUpdate:modelValue":o[0]||(o[0]=l=>a(s).title=l),label:t.__("Title of Page"),help:t.__("Eg: Privacy & Policy"),error:a(s).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",ie,[i(b,{id:"path",modelValue:a(s).path,"onUpdate:modelValue":o[1]||(o[1]=l=>a(s).path=l),label:t.__("URL Path"),help:t.__("Eg: privacy-policy"),error:a(s).errors.path,type:"text",name:"path","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",de,[i(j,{id:"page_type",modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=l=>d.value=l),name:"page_type",label:t.__("Page Type"),placeholder:t.__("Select a type of page.."),"disable-null":!0,"select-list":V},null,8,["modelValue","label","placeholder"]),d.value==="html"?(k(),N("div",ne,r(t.__("Please be careful with this option, adding malicious code can expose your website to security risks. Make sure you know what you are doing.")),1)):B("",!0)]),n(e("div",ce,[i(b,{id:"redirect_url",modelValue:a(s).redirect_url,"onUpdate:modelValue":o[3]||(o[3]=l=>a(s).redirect_url=l),label:t.__("Redirect URL"),help:t.__("Eg: https://my-custom-shop.com"),error:a(s).errors.redirect_url,type:"text",name:"redirect_url","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])],512),[[m,d.value==="redirect"]]),n(e("div",me,[i(a(F),{modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=l=>f.value=l),placeholder:"Paste your HTML/CSS code here...",style:{height:"400px"},"indent-with-tab":!0,"tab-size":2,extensions:v,onReady:C},null,8,["modelValue"]),i(c,{message:a(s).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[m,d.value==="html"]]),n(e("div",ue,[n(e("textarea",{id:"body","onUpdate:modelValue":o[5]||(o[5]=l=>h.value=l),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[E,h.value]]),i(c,{message:a(s).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[m,d.value==="markdown"]]),e("div",_e,[e("fieldset",null,[e("legend",pe,r(t.__("Options")),1),e("div",ge,[e("div",be,[e("div",he,[n(e("input",{id:"is_visible","onUpdate:modelValue":o[6]||(o[6]=l=>a(s).is_visible=l),name:"is_visible",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[g,a(s).is_visible]])]),e("div",ye,[e("label",ve,r(t.__("Visible")),1),e("p",fe,r(t.__("General public can access this URL via link")),1)])]),e("div",xe,[e("div",we,[n(e("input",{id:"is_in_navbar","onUpdate:modelValue":o[7]||(o[7]=l=>a(s).is_in_navbar=l),name:"is_in_navbar",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[g,a(s).is_in_navbar]])]),e("div",ke,[e("label",Ve,r(t.__("Add to Navbar")),1),e("p",Ce,r(t.__("Add this page link to the top Navigation bar")),1)])]),n(e("div",Ue,[e("div",Se,[n(e("input",{id:"is_sidebar_visible","onUpdate:modelValue":o[8]||(o[8]=l=>a(s).is_sidebar_visible=l),name:"is_sidebar_visible",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[g,a(s).is_sidebar_visible]])]),e("div",Me,[e("label",Pe,r(t.__("Sidebar Visible")),1),e("p",Le,r(t.__("Should right sidebar be visible when user open this page")),1)])],512),[[m,d.value!=="redirect"]])]),i(c,{message:a(s).errors.is_in_navbar,class:"mt-2"},null,8,["message"]),i(c,{message:a(s).errors.is_visible,class:"mt-2"},null,8,["message"]),i(c,{message:a(s).errors.is_sidebar_visible,class:"mt-2"},null,8,["message"])])])])]),e("div",Te,[i(X,{loading:a(s).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:_(()=>[p(r(t.__("Create Page")),1)]),_:1},8,["loading"])])])],40,te)])])])])]),_:1})}}};export{ze as default};