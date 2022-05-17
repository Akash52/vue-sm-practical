(()=>{"use strict";var e={1954:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727);var a=r(5010),o=r(3396),n={class:"containerClass"};function l(e,t,r,a,l,s){var i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(i)])}const s={name:"App"};var i=r(89);const u=(0,i.Z)(s,[["render",l]]),d=u;var m=r(302),c=(r(8309),r(2526),r(1817),r(7139)),p={class:"flex items-center justify-center align-middle"},g={key:0,class:"px-4 mx-auto"},f={class:"relative p-2 mt-5 -mb-3 font-bold text-center text-gray-100 border-2 border-pink-300 shadow-xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl bg-cyan-800 rounded-t-2xl"},x=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),h=[x],w={class:"max-w-md py-2 my-2 border-b-2 border-pink-200 shadow-lg bg-gradient-to-r from-cyan-700 border-x-2 to-cyan-900 rounded-b-xl"},b=["src"],v={class:"pt-2"},y={class:"px-2 py-4 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"},_=(0,o._)("span",{class:"text-slate-800"},"Car Name 🏁 ",-1),k={class:"px-2 py-2 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"},V=(0,o._)("span",{class:"text-slate-800"},"Top Speed 🔥 ",-1),D={class:"px-2 py-2 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"},W=(0,o._)("span",{class:"text-slate-800"},"Price 🤑 ",-1),C=(0,o._)("h5",{class:"px-2 py-2 text-lg font-bold text-center text-gray-200"},[(0,o._)("span",{class:"text-slate-800"},"Info 📔 ")],-1),j={class:"px-2 py-2 text-sm font-bold text-center text-gray-200"},U={key:1},H=(0,o._)("div",{class:"loader mt-2 mx-auto"},null,-1),M=[H];function E(e,t,r,a,n,l){return(0,o.wg)(),(0,o.iD)("div",p,[n.loading?((0,o.wg)(),(0,o.iD)("div",U,M)):((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h1",f,(0,c.zw)(l.car.name),1),(0,o._)("span",{class:"absolute top-0 z-50 p-2 m-2 -mt-1 font-extrabold transition translate-y-3 bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-pink-300",onClick:t[0]||(t[0]=function(e){return l.goToHome()})},h),(0,o._)("div",w,[(0,o._)("img",{alt:"...",src:l.car.image_link,class:"-mt-2 transition border-2 border-b-2 shadow-xl cursor-pointer hover:opacity-80 duration-600 border-emerald-400"},null,8,b),(0,o._)("div",v,[(0,o._)("h5",y,[_,(0,o.Uk)(" "+(0,c.zw)(l.car.name),1)]),(0,o._)("h5",k,[V,(0,o.Uk)(" "+(0,c.zw)(l.car.top_speed),1)]),(0,o._)("h5",D,[W,(0,o.Uk)(" "+(0,c.zw)(l.car.price),1)]),C,(0,o._)("h5",j,(0,c.zw)(l.car.description),1)])])]))])}var q=r(8534),z=(r(9826),r(1539),r(9653),r(6133),r(6265)),A=r.n(z);const P={props:{id:{type:String,required:!0}},data:function(){return{loading:!1,cars:[]}},created:function(){var e=this;return(0,q.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,A().get("https://vue-fake-server.herokuapp.com/cardata");case 3:r=t.sent,a=r.data,e.cars=a,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},computed:{car:function(){var e=this;return this.cars.find((function(t){return t.id===Number(e.id)}))||{}}},methods:{goToHome:function(){this.$router.push("/")}}},F=(0,i.Z)(P,[["render",E]]),R=F;var S={key:0,class:"flex flex-wrap"},O={key:1},T=(0,o._)("div",{class:"loader mt-2 mx-auto"},null,-1),L=[T];function Z(e,t,r,n,l,s){var i=(0,o.up)("HeaderComp"),u=(0,o.up)("CarList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a.uT,{appear:"true",name:"bounce"},{default:(0,o.w5)((function(){return[(0,o.Wm)(i)]})),_:1}),l.loading?((0,o.wg)(),(0,o.iD)("div",O,L)):((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cars,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"w-full max-w-sm px-4 py-6 mx-auto mb-4 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"},[(0,o.Wm)(a.uT,{appear:"true",name:"fade"},{default:(0,o.w5)((function(){return[(0,o.Wm)(u,{car:e,onDeleteCar:s.handleDelete},null,8,["car","onDeleteCar"])]})),_:2},1024)])})),128))]))],64)}r(7327);var B={class:"max-w-md py-2 my-2 bg-gray-800 shadow-lg rounded-xl"},I=["src"],N={class:"pt-6 text-center"},$={class:"text-xl font-bold text-gray-400 whitespace-nowrap"},G={class:"mt-6"},Y=(0,o._)("button",{class:"px-6 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-green-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600",type:"button"}," info ",-1),K={class:"flex justify-end"},Q=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",title:"Edit"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),J=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),X=[J];function ee(e,t,r,a,n,l){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("img",{alt:"...",src:r.car.image_link,class:"-mt-2 transition border-b-2 shadow-xl cursor-pointer border-emerald-50 hover:opacity-80 duration-600"},null,8,I),(0,o._)("div",N,[(0,o._)("h5",$,(0,c.zw)(r.car.name),1),(0,o._)("div",G,[(0,o.Wm)(s,{to:{name:"CarPage",params:{id:r.car.id}}},{default:(0,o.w5)((function(){return[Y]})),_:1},8,["to"]),(0,o._)("div",K,[(0,o.Wm)(s,{to:{name:"EditCar",params:{id:r.car.id}}},{default:(0,o.w5)((function(){return[Q]})),_:1},8,["to"]),((0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",title:"Delete",onClick:t[0]||(t[0]=function(){return l.deleteCar&&l.deleteCar.apply(l,arguments)})},X))])])])])}const te={props:{car:Object},data:function(){return{uri:"https://vue-fake-server.herokuapp.com/cardata/"+this.car.id}},methods:{deleteCar:function(){var e=this;confirm("Are you sure you want to delete this car?")&&A()["delete"](this.uri).then((function(){e.$emit("deleteCar",e.car.id)}))["catch"]((function(e){console.log(e)}))}}},re=(0,i.Z)(te,[["render",ee]]),ae=re;var oe={class:"sticky top-0 z-50 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},ne={class:"z-50 max-w-4xl p-2 mx-auto font-medium text-center text-gray-800 rounded-lg shadow-md shadow-green-500 bg-gray-800 whitespace-nowrap"},le={class:"flex justify-between"},se={class:"flex items-center justify-center p-4 text-center shadow-sm bg-slate-200 hover:bg-slate-50 rounded-xl"},ie=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 transition duration-300 rounded-lg hover:text-slate-900 hover:scale-125",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),ue={class:"flex justify-between"},de={class:"flex items-center justify-center p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl"},me={title:"Add new car"},ce=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 transition duration-300 rounded-lg hover:text-slate-900 hover:scale-125",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",title:"Add new car"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),pe={class:"flex items-center justify-center ml-2 p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl",title:"Login"},ge=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1),fe={class:"flex items-center justify-center ml-2 p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl",title:"Register"},xe=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})],-1);function he(e,t,r,a,n,l){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",oe,[(0,o._)("nav",ne,[(0,o._)("div",le,[(0,o._)("ul",se,[(0,o._)("li",null,[(0,o.Wm)(s,{to:"/",title:"Home"},{default:(0,o.w5)((function(){return[ie]})),_:1})])]),(0,o._)("div",ue,[(0,o._)("ul",de,[(0,o._)("li",me,[(0,o.Wm)(s,{to:{name:"AddCar"}},{default:(0,o.w5)((function(){return[ce]})),_:1})])]),(0,o._)("ul",pe,[(0,o._)("li",null,[(0,o.Wm)(s,{to:{name:"UserLogin"}},{default:(0,o.w5)((function(){return[ge]})),_:1})])]),(0,o._)("ul",fe,[(0,o._)("li",null,[(0,o.Wm)(s,{to:{name:"UserRegister"}},{default:(0,o.w5)((function(){return[xe]})),_:1})])])])])])])}const we={},be=(0,i.Z)(we,[["render",he]]),ve=be,ye={name:"HomePage",data:function(){return{loading:!1,cars:[]}},mounted:function(){var e=this;this.loading=!0,A().get("https://vue-fake-server.herokuapp.com/cardata").then((function(t){e.cars=t.data,e.loading=!1}))["catch"]((function(e){alert(e)}))},methods:{handleDelete:function(e){return this.cars=this.cars.filter((function(t){return t.id!==e}))}},components:{CarList:ae,HeaderComp:ve}},_e=(0,i.Z)(ye,[["render",Z]]),ke=_e;var Ve={class:"mx-auto flex flex-col justify-center items-center mt-14"},De=(0,o._)("h1",{class:"text-2xl text-slate-800"},"Oops page not found 🙂",-1),We=(0,o._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Go to Home ",-1);function Ce(e,t,r,a,n,l){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Ve,[De,(0,o._)("p",null,[(0,o.Wm)(s,{to:{name:"HomePage"}},{default:(0,o.w5)((function(){return[We]})),_:1})])])}const je={},Ue=(0,i.Z)(je,[["render",Ce]]),He=Ue;var Me={class:"fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"},Ee={class:"relative w-full max-w-md mx-auto my-6"},qe={class:"relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"},ze={class:"relative flex-auto p-6"},Ae=(0,o._)("label",{htmlFor:"todo",class:"block mb-2 text-lg font-medium text-gray-900"}," Add new Car ",-1),Pe=(0,o._)("div",{class:"flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"},[(0,o._)("button",{class:"w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",type:"submit"}," UPDATE CAR ")],-1),Fe=(0,o._)("div",{class:"fixed inset-0 z-40 bg-black opacity-25"},null,-1);function Re(e,t,r,a,n,l){var s=(0,o.up)("VeeErrorMessage"),i=(0,o.up)("VeeField"),u=(0,o.up)("VeeForm");return(0,o.wg)(),(0,o.j4)(u,{onSubmit:l.handleSubmit},{default:(0,o.w5)((function(){return[(0,o._)("div",Me,[(0,o._)("div",Ee,[(0,o._)("div",qe,[(0,o._)("div",ze,[(0,o._)("div",null,[Ae,(0,o.Wm)(s,{name:"name",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"name",placeholder:"CAR NAME",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.name=e}),rules:{required:!0,min:3,max:20}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"top_speed",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"top_speed",placeholder:"TOP SPEED",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.top_speed,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.top_speed=e}),rules:{required:!0,numeric:!0,min:3,max:40}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"description",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{placeholder:"DESCRIPTION",name:"description",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.description=e}),type:"text",rules:{required:!0,min:20,max:120}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"image_link",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"url",name:"image_link",placeholder:"IMAGE URL",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",pattern:"/([a-z\\-_0-9\\/\\:\\.]*\\.(jpg|jpeg|png|gif))/i",modelValue:n.image_link,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.image_link=e}),rules:{required:!0,url:!0}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"price",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"price",placeholder:"PRICE",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.price,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.price=e}),rules:{required:!0,numeric:!0,min:0,max:1e6}},null,8,["modelValue"])])]),Pe])])]),Fe]})),_:1},8,["onSubmit"])}const Se={name:"EditCarForm",props:["id"],data:function(){return{name:"",top_speed:"",description:"",image_link:"",price:""}},mounted:function(){var e=this;fetch("https://vue-fake-server.herokuapp.com/cardata/".concat(this.id)).then((function(e){return e.json()})).then((function(t){e.name=t.name,e.top_speed=t.top_speed,e.description=t.description,e.image_link=t.image_link,e.price=t.price}))},methods:{handleSubmit:function(){var e=this,t={name:this.name,top_speed:this.top_speed,description:this.description,image_link:this.image_link,price:this.price};A().put("https://vue-fake-server.herokuapp.com/cardata/".concat(this.id),t).then((function(t){e.$router.push("/")}))["catch"]((function(e){return console.log(e)}))}}},Oe=(0,i.Z)(Se,[["render",Re]]),Te=Oe;var Le={class:"fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"},Ze={class:"relative w-full max-w-md mx-auto my-6"},Be={class:"relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"},Ie={class:"relative flex-auto p-6"},Ne=(0,o._)("label",{htmlFor:"todo",class:"block mb-2 text-lg font-medium text-gray-900"}," Add new Car ",-1),$e=(0,o._)("div",{class:"flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"},[(0,o._)("button",{class:"w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",type:"submit"}," Add ")],-1),Ge=(0,o._)("div",{class:"fixed inset-0 z-40 bg-black opacity-25"},null,-1);function Ye(e,t,r,a,n,l){var s=(0,o.up)("VeeErrorMessage"),i=(0,o.up)("VeeField"),u=(0,o.up)("VeeForm");return(0,o.wg)(),(0,o.j4)(u,{onSubmit:l.handleSubmit},{default:(0,o.w5)((function(){return[(0,o._)("div",Le,[(0,o._)("div",Ze,[(0,o._)("div",Be,[(0,o._)("div",Ie,[(0,o._)("div",null,[Ne,(0,o.Wm)(s,{name:"name",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"name",placeholder:"CAR NAME",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.name=e}),rules:{required:!0,min:3,max:20}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"top_speed",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"top_speed",placeholder:"TOP SPEED",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.top_speed,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.top_speed=e}),rules:{required:!0,numeric:!0,min:3,max:40}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"description",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{placeholder:"DESCRIPTION",name:"description",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.description=e}),type:"text",rules:{required:!0,min:20,max:120}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"image_link",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"url",name:"image_link",placeholder:"IMAGE URL",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",pattern:"/([a-z\\-_0-9\\/\\:\\.]*\\.(jpg|jpeg|png|gif))/i",modelValue:n.image_link,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.image_link=e}),rules:{required:!0,url:!0}},null,8,["modelValue"]),(0,o.Wm)(s,{name:"price",class:"text-red-500 text-xs italic"}),(0,o.Wm)(i,{type:"text",name:"price",placeholder:"PRICE",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:n.price,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.price=e}),rules:{required:!0,numeric:!0,min:0,max:1e6}},null,8,["modelValue"])])]),$e])])]),Ge]})),_:1},8,["onSubmit"])}const Ke={name:"AddCarForm",data:function(){return{name:"",top_speed:"",description:"",image_link:"",price:""}},methods:{handleSubmit:function(){var e=this,t={name:this.name,top_speed:this.top_speed,description:this.description,image_link:this.image_link,price:this.price};A().post("https://vue-fake-server.herokuapp.com/cardata",t).then((function(t){e.$router.push("/")}))["catch"]((function(e){console.log(e)}))}}},Qe=(0,i.Z)(Ke,[["render",Ye]]),Je=Qe;var Xe={class:"flex flex-col justify-center items-center sm:mx-4 sm:px-6 lg:px-8"},et=(0,o._)("div",{class:"w-full max-w-md mx-auto"},[(0,o._)("h2",{class:"text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl"}," Login to your account ")],-1),tt={class:"mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md"},rt={class:"px-4 relative py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10"},at=(0,o._)("button",{class:"w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",type:"submit"}," Login ",-1),ot={class:"mt-4 text-base text-gray-300 italic"},nt=(0,o._)("span",{class:"text-orange-300 underline"},"Click here ",-1),lt=(0,o.Uk)(" for Register "),st=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 text-slate-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),it=[st];function ut(e,t,r,n,l,s){var i=(0,o.up)("VeeErrorMessage"),u=(0,o.up)("VeeField"),d=(0,o.up)("router-link"),m=(0,o.up)("VeeForm");return(0,o.wg)(),(0,o.iD)("div",Xe,[et,(0,o._)("div",tt,[(0,o._)("div",rt,[(0,o.Wm)(m,{onSubmit:s.onSubmit},{default:(0,o.w5)((function(){return[(0,o.Wm)(i,{name:"email",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"email",name:"email",placeholder:"Email",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.formData.email=e}),rules:{required:!0,email:!0}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"password",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"password",name:"password",placeholder:"Password",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.formData.password=e}),rules:{required:!0,password:!0,min:8,max:12}},null,8,["modelValue"]),(0,o.Wm)(a.uT,{appear:"true",name:"fade"},{default:(0,o.w5)((function(){return[at]})),_:1}),(0,o._)("p",ot,[(0,o.Wm)(d,{to:{name:"UserRegister"}},{default:(0,o.w5)((function(){return[nt]})),_:1}),lt])]})),_:1},8,["onSubmit"]),(0,o._)("span",{class:"absolute top-0 left-0 z-50 ml-8 p-2 m-2 -mt-1 font-extrabold transition -translate-y-3 bg-pink-400 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-gray-100",onClick:t[2]||(t[2]=function(e){return s.goToHome()})},it)])])])}const dt={data:function(){return{formData:{email:"ac85@gmail.com",password:"Akash@123"}}},methods:{goToHome:function(){this.$router.push("/")},onSubmit:function(){var e=this;return(0,q.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A().get("https://testapi.io/api/dartya/resource/users/52").then((function(t){console.log(t.data),t&&t.data?e.formData.email===t.data.email&&e.formData.password===t.data.password&&e.$router.push("/"):alert("Invalid Credentials")}));case 2:case"end":return t.stop()}}),t)})))()}}},mt=(0,i.Z)(dt,[["render",ut]]),ct=mt;var pt={class:"flex flex-col justify-center items-center sm:mx-4 sm:px-6 lg:px-8"},gt=(0,o._)("div",{class:"w-full max-w-md mx-auto"},[(0,o._)("h2",{class:"text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl"}," Register to your account ")],-1),ft={class:"mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md"},xt={class:"px-4 relative py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10"},ht=(0,o._)("option",{disabled:"",value:""},"Please select one",-1),wt=["value","selected"],bt=(0,o._)("label",{for:"one",class:"text-white ml-1"},"Male",-1),vt=(0,o._)("label",{for:"two",class:"text-white ml-1"},"Female",-1),yt=(0,o._)("button",{class:"w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",type:"submit"}," Register ",-1),_t={class:"mt-4 text-base text-gray-300 italic"},kt=(0,o._)("span",{class:"text-orange-300 underline"},"Click here ",-1),Vt=(0,o.Uk)(" for Login "),Dt=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 text-slate-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),Wt=[Dt];function Ct(e,t,r,n,l,s){var i=(0,o.up)("VeeErrorMessage"),u=(0,o.up)("VeeField"),d=(0,o.up)("router-link"),m=(0,o.up)("VeeForm");return(0,o.wg)(),(0,o.iD)("div",pt,[gt,(0,o._)("div",ft,[(0,o._)("div",xt,[(0,o.Wm)(m,{onSubmit:s.sendForm},{default:(0,o.w5)((function(){return[(0,o.Wm)(i,{name:"name",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"text",name:"name",placeholder:"Name",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.formData.name=e}),rules:{required:!0,min:3}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"email",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"email",name:"email",placeholder:"Email",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.formData.email=e}),rules:{required:!0,email:!0}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"password",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"password",name:"password",placeholder:"Password",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.formData.password=e}),rules:{required:!0,password:!0,min:8,max:12}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"confirm_password",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"password",name:"confirm_password",placeholder:"Confirm Password",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.cpassword,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.formData.cpassword=e}),rules:{required:!0,password:!0,min:8,max:12}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"age",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"text",name:"age",placeholder:"Age",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.age,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.formData.age=e}),rules:{required:!0,min:2}},null,8,["modelValue"]),(0,o.Wm)(i,{name:"dob",class:"text-red-500 text-xs italic"}),(0,o.Wm)(u,{type:"date",name:"dob",placeholder:"Age",class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2",modelValue:l.formData.dob,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.formData.dob=e}),rules:{required:!0,min:2}},null,8,["modelValue"]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.formData.role=e}),class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 mb-2",rules:{required:!0}},[ht,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.categories,(function(e){return(0,o.wg)(),(0,o.iD)("option",{value:e,key:e,selected:e===l.formData.role,class:"bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 mb-2"},(0,c.zw)(e),9,wt)})),128))],512),[[a.bM,l.formData.role]]),(0,o.wy)((0,o._)("input",{type:"radio",id:"one",value:"Male","onUpdate:modelValue":t[7]||(t[7]=function(e){return l.formData.gender=e})},null,512),[[a.G2,l.formData.gender]]),bt,(0,o.wy)((0,o._)("input",{type:"radio",id:"two",value:"Female","onUpdate:modelValue":t[8]||(t[8]=function(e){return l.formData.gender=e}),class:"text-white ml-1"},null,512),[[a.G2,l.formData.gender]]),vt,(0,o.Wm)(a.uT,{appear:"true",name:"bounce"},{default:(0,o.w5)((function(){return[yt]})),_:1}),(0,o._)("p",_t,[(0,o.Wm)(d,{to:{name:"UserLogin"}},{default:(0,o.w5)((function(){return[kt]})),_:1}),Vt])]})),_:1},8,["onSubmit"]),(0,o._)("span",{class:"absolute top-0 left-0 z-50 ml-8 p-2 m-2 -mt-1 font-extrabold transition -translate-y-3 bg-pink-400 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-gray-100",onClick:t[9]||(t[9]=function(e){return s.goToHome()})},Wt)])])])}const jt={data:function(){return{categories:["admin","customer","employee"],formData:{name:"",email:"",password:"",cPassword:"",age:"",dob:"",role:" ",gender:null}}},methods:{goToHome:function(){this.$router.push("/")},sendForm:function(){var e=this;A().post("https://testapi.io/api/dartya/resource/users",this.formData).then((function(t){console.log(t),e.$router.push("/")}))["catch"]((function(e){console.log(e)}))}}},Ut=(0,i.Z)(jt,[["render",Ct]]),Ht=Ut;var Mt=[{path:"/car/:id",name:"CarPage",component:R,props:!0},{path:"/",name:"HomePage",component:ke},{path:"/editCar/:id",name:"EditCar",component:Te,props:!0},{path:"/addCar",name:"AddCar",component:Je},{path:"/login",name:"UserLogin",component:ct},{path:"/register",name:"UserRegister",component:Ht},{path:"/:pathMatch(.*)*",name:"NotFound",component:He}],Et=(0,m.p7)({history:(0,m.PO)(),routes:Mt});const qt=Et;r(4916),r(7601);var zt=r(5708),At=r(3990),Pt=r(579);const Ft=function(e){(0,zt.aH)("required",At.C1),(0,zt.aH)("email",At.Do),(0,zt.aH)("min",At.VV),(0,zt.aH)("max",At.Fp),(0,zt.aH)("url",At.HQ),(0,zt.aH)("numeric",At.uR),(0,zt.aH)("password",(function(e){var t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~`\-={}[\]:";'<>?,./])(?=.{8,})/;return t.test(e)})),(0,zt.jQ)({generateMessage:(0,Pt.NC)("en",{messages:{required:"{field} is required",email:"{field} is not a valid email",min:"{field} must be at least 0:{min} characters",max:"{field} must be at most 0:{max} characters",url:"{field} is not a valid url",numeric:"{field} is not a valid number",password:"{field} must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"}})}),e.component("VeeForm",zt.l0),e.component("VeeField",zt.gN),e.component("VeeErrorMessage",zt.Bc)};var Rt=(0,a.ri)(d);Rt.use(Ft),Rt.use(qt).mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a](n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,n)=>{if(!a){var l=1/0;for(d=0;d<e.length;d++){for(var[a,o,n]=e[d],s=!0,i=0;i<a.length;i++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,o,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[l,s,i]=a,u=0;if(l.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var d=i(r)}for(t&&t(a);u<l.length;u++)n=l[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},a=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(1954)));a=r.O(a)})();
//# sourceMappingURL=app.4b3d0063.js.map