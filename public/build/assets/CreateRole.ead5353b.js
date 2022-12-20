import{X as V}from"./XCheckbox.8713fbef.js";import{X as P}from"./XInput.cb365873.js";import{L as R}from"./LoadingButton.390f0142.js";import{_ as U}from"./InputError.48b28f61.js";import{_ as A}from"./SecondaryButton.af3389db.js";import{A as S}from"./AppLayout.5b6e3bb2.js";import{s as C}from"./vue-multiselect.esm.1027870c.js";import{_ as N,z as i,o as j,c as E,w as d,b as l,a as e,t as n,f as p,k as u,x as c,y as h,I}from"./app.976a1c87.js";const M={components:{XCheckbox:V,AppLayout:S,JetInputError:U,LoadingButton:R,JetSecondaryButton:A,Multiselect:C,XInput:P},props:{permissions:Array},data(){return{form:this.$inertia.form({name:"",is_staff:!1,is_hidden_from_staff_list:!1,display_name:"",color:null,weight:null,permissions:[],web_message_format:null,photo:null}),photoPreview:null}},methods:{addRole(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.role.store"),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=r=>{this.photoPreview=r.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},z={class:"max-w-6xl px-10 py-12 mx-auto"},B={class:"flex justify-between mb-8"},L={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},D={class:"mt-10 sm:mt-0"},F={class:"md:grid md:grid-cols-3 md:gap-6"},X={class:"md:col-span-1"},T={class:"px-4 sm:px-0"},W={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},H={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},J=e("br",null,null,-1),O={class:"mt-5 md:mt-0 md:col-span-2"},q={class:"shadow sm:rounded-md"},G={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},K={class:"grid grid-cols-6 gap-6"},Q={class:"col-span-6 sm:col-span-6"},Y={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Z={class:"mt-2"},$={class:"col-span-6 sm:col-span-3"},ee={class:"col-span-6 sm:col-span-3"},oe={class:"col-span-6 sm:col-span-6"},se={class:"col-span-6 sm:col-span-3"},re={class:"col-span-6 sm:col-span-3"},te={class:"flex items-center col-span-6 sm:col-span-4"},le={class:"flex items-center col-span-6 sm:col-span-4"},ie={class:"col-span-6 sm:col-span-6"},ne={for:"permissions",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},ae={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function me(o,r,g,de,s,a){const b=i("app-head"),y=i("inertia-link"),w=i("jet-secondary-button"),f=i("jet-input-error"),m=i("x-input"),_=i("x-checkbox"),v=i("multiselect"),x=i("loading-button"),k=i("app-layout");return j(),E(k,null,{default:d(()=>[l(b,{title:o.__("Add User Role")},null,8,["title"]),e("div",z,[e("div",B,[e("h1",L,n(o.__("Add User Role")),1),l(y,{href:o.route("admin.role.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:d(()=>[e("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",D,[e("div",F,[e("div",X,[e("div",T,[e("h3",W,n(o.__("Overview")),1),e("p",H,[p(n(o.__("Roles are used to authorize registered users of your website to perform actions on web like ban, mute users etc."))+" ",1),J,p(" "+n(o.__("For each role you can customize 'Web Message Format' which is the in-game chat format.")),1)])])]),e("div",O,[e("form",{onSubmit:r[9]||(r[9]=u((...t)=>a.addRole&&a.addRole(...t),["prevent"]))},[e("div",q,[e("div",G,[e("div",K,[e("div",Q,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:r[0]||(r[0]=(...t)=>a.updatePhotoPreview&&a.updatePhotoPreview(...t))},null,544),e("label",Y,n(o.__("Role Image")),1),c(e("div",Z,[e("span",{class:"block w-2/5 h-12",style:I("background-size: fill; background-repeat: no-repeat; background-position: center center; background-image: url('"+s.photoPreview+"');")},null,4)],512),[[h,s.photoPreview]]),l(w,{class:"mt-2 mr-2",type:"button",onClick:u(a.selectNewPhoto,["prevent"])},{default:d(()=>[p(n(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),l(f,{message:s.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",$,[l(m,{id:"name",modelValue:s.form.name,"onUpdate:modelValue":r[1]||(r[1]=t=>s.form.name=t),label:o.__("Role Name"),help:o.__("Eg: superadmin"),error:s.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",ee,[l(m,{id:"display_name",modelValue:s.form.display_name,"onUpdate:modelValue":r[2]||(r[2]=t=>s.form.display_name=t),label:o.__("Display Name"),help:o.__("Eg: Super Administrator"),error:s.form.errors.display_name,type:"text",name:"display_name"},null,8,["modelValue","label","help","error"])]),e("div",oe,[l(m,{id:"web_message_format",modelValue:s.form.web_message_format,"onUpdate:modelValue":r[3]||(r[3]=t=>s.form.web_message_format=t),label:o.__("Web Message Format"),help:o.__("Eg: &4&b{USERNAME}&r&7"),error:s.form.errors.web_message_format,type:"text",name:"web_message_format"},null,8,["modelValue","label","help","error"])]),e("div",se,[l(m,{id:"color",modelValue:s.form.color,"onUpdate:modelValue":r[4]||(r[4]=t=>s.form.color=t),label:o.__("Color"),help:o.__("Eg: #ff00ff"),error:s.form.errors.color,type:"text",name:"color"},null,8,["modelValue","label","help","error"])]),e("div",re,[l(m,{id:"weight",modelValue:s.form.weight,"onUpdate:modelValue":r[5]||(r[5]=t=>s.form.weight=t),label:o.__("Weight"),help:o.__("More important the role more the weight"),error:s.form.errors.weight,type:"number",name:"weight"},null,8,["modelValue","label","help","error"])]),e("div",te,[l(_,{id:"is_staff",modelValue:s.form.is_staff,"onUpdate:modelValue":r[6]||(r[6]=t=>s.form.is_staff=t),label:o.__("Is Staff"),help:o.__("This role is a staff member. This flag is used to let other know staff and show admin panel."),name:"is_staff",error:s.form.errors.is_staff},null,8,["modelValue","label","help","error"])]),e("div",le,[l(_,{id:"is_hidden_from_staff_list",modelValue:s.form.is_hidden_from_staff_list,"onUpdate:modelValue":r[7]||(r[7]=t=>s.form.is_hidden_from_staff_list=t),label:o.__("Is Hidden from List"),help:o.__("Hide this role from staff list."),name:"is_hidden_from_staff_list",error:s.form.errors.is_hidden_from_staff_list},null,8,["modelValue","label","help","error"])]),c(e("div",ie,[e("label",ne,n(o.__("Administrative Permissions")),1),l(v,{id:"permissions",modelValue:s.form.permissions,"onUpdate:modelValue":r[8]||(r[8]=t=>s.form.permissions=t),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:g.permissions,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:o.__("Search")+"..."},null,8,["modelValue","options","placeholder"]),l(f,{message:s.form.errors.permissions,class:"mt-2"},null,8,["message"])],512),[[h,s.form.is_staff]])])]),e("div",ae,[l(x,{loading:s.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:d(()=>[p(n(o.__("Add Role")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ye=N(M,[["render",me]]);export{ye as default};
