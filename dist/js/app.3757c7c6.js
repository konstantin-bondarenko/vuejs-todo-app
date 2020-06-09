(function(t){function e(e){for(var o,i,r=e[0],s=e[1],u=e[2],l=0,p=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuejs-todo-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),c=n.n(o);c.a},2161:function(t,e,n){"use strict";var o=n("282e"),c=n.n(o);c.a},2298:function(t,e,n){"use strict";var o=n("6199"),c=n.n(o);c.a},"282e":function(t,e,n){},"3e6c":function(t,e,n){"use strict";var o=n("6931"),c=n.n(o);c.a},"3f13":function(t,e,n){"use strict";var o=n("454c"),c=n.n(o);c.a},"454c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.getState("open")||t.getState("popup")?n("Backdrop"):t._e(),n("div",{attrs:{id:"link"}},["/"!==this.$route.path?n("button",{staticClass:"routeButton",on:{click:t.routeTo}},[t._v("Return to Todo List")]):t._e()]),n("router-view")],1)},a=[],i=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"backdrop"},on:{click:t.toggle}})},s=[],u=n("2f62"),d={computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["changeOpen","changePopup"])),{},{toggle:function(){this.getState("open")?this.changeOpen():this.changePopup()}})},l=d,p=(n("f00d"),n("2877")),h=Object(p["a"])(l,r,s,!1,null,"7be993cc",null),f=h.exports,g={computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["initialState","changeBackup"])),{},{routeTo:function(){this.$router.push("/"),this.initialState(),localStorage.setItem("localtodo",JSON.stringify([])),this.changeBackup(!1)}}),components:{Backdrop:f}},b=g,v=(n("034f"),Object(p["a"])(b,c,a,!1,null,null,null)),m=v.exports,k=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("ToDo application")]),n("button",{on:{click:t.changeOpen}},[t._v("CREATE")]),t.getState("popup")?n("Popup",{attrs:{type:"delete",id:t.id}}):t._e(),t.getState("open")?n("Modal"):t._e(),n("div",{attrs:{id:"boxes"}},t._l(t.getState("todos"),(function(e,o){return n("TodoBox",{key:o,attrs:{todo:e},on:{"recive-id":t.reciveId}})})),1)],1)},_=[],T=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",on:{blur:t.changeOpen}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("p",[t._v("Add card")]),t.title?t._e():n("span",[t._v("Enter title")]),t.getState("error")&&!t.title?n("div",[n("input",{staticClass:"error",attrs:{placeholder:"Fill this line!"}})]):n("div",{staticClass:"empty",class:{title:t.title},attrs:{contenteditable:"true"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTask(e)},blur:function(e){return t.updateTask(e)}}},[t._v(" "+t._s(t.title)+" ")])]),n("AddTodo",{attrs:{length:t.contents.length},on:{"add-content":t.addContent}}),n("div",{staticClass:"scroll"},t._l(t.contents,(function(e,o){return n("div",{key:o},[n("TodoItem",{attrs:{td:e,index:o,checkbox:!0},on:{"remove-todo":t.removeTodo}})],1)})),0),t.contents.length?n("span",[t._v("Click on the text for editing")]):t._e(),n("button",{on:{click:t.onSubmit}},[t._v("Create")])],1)}),y=[],j=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.getState("error")&&!t.length&&(t.content.trim().length>30||!t.content.trim().length)?n("input",{staticClass:"error",attrs:{placeholder:"Please enter letters (max 30)"}}):n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"Write your task and press Enter"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("button",{staticClass:"cross-add",class:{show:t.content.length},attrs:{type:"submit"}},[t._v("+")])])])}),C=[],x=(n("498a"),{props:["length"],data:function(){return{content:""}},computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["changeError"])),{},{onSubmit:function(){if(this.content.trim()&&this.content.trim().length<=30){var t={id:Date.now(),content:this.content,completed:!1};this.$emit("add-content",t),this.content=""}else this.changeError()}})}),S=x,E=(n("fe16"),Object(p["a"])(S,j,C,!1,null,"74c6e902",null)),w=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",class:{done:t.td.completed}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"content"},[t.checkbox?n("button",{staticClass:"checkbox",class:{checked:t.td.completed},on:{click:function(e){t.td.completed=!t.td.completed}}}):t._e(),n("div",[t.checkbox?n("span",{staticClass:"title",attrs:{contenteditable:"true"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTask(e,t.td)},blur:function(e){return t.updateTask(e,t.td)}}},[t._v(t._s(t.td.content))]):n("span",[t._v(t._s(t.td.content))])])]),t.checkbox?n("button",{staticClass:"remove-btn",on:{click:function(e){return t.$emit("remove-todo",t.td.id)}}},[t._v("×")]):t._e()])])},B=[],I={props:["td","checkbox"],data:function(){return{beforeChange:""}},created:function(){this.beforeChange=this.td.content||""},methods:{updateTask:function(t,e){t.preventDefault(),0===t.target.innerText.length&&(t.target.innerText=this.beforeChange),e.content=t.target.innerText,t.target.blur()}}},$=I,N=(n("2161"),Object(p["a"])($,P,B,!1,null,"cd879784",null)),J=N.exports,D={data:function(){return{contents:[],title:""}},computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["b"])(["addTodo"])),Object(u["d"])(["changeOpen","changeError"])),{},{addContent:function(t){this.contents.push(t)},onSubmit:function(){if(!this.title)return this.changeError();var t={title:this.title,content:this.contents};this.addTodo(t),this.title="",this.contents=[]},updateTask:function(t){t.preventDefault(),0===t.target.innerText.length&&this.changeError(),this.title=t.target.innerText,t.target.blur()},removeTodo:function(t){this.contents=this.contents.filter((function(e){return e.id!==t}))}}),components:{AddTodo:w,TodoItem:J}},A=D,M=(n("3e6c"),Object(p["a"])(A,T,y,!1,null,"25069e7e",null)),L=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h3",[t._v(t._s(t.todo.title))]),t._l(t.todo.content,(function(t,e){return n("div",{key:e},[n("TodoItem",{attrs:{td:t,checkbox:!1}})],1)})),n("div",{staticClass:"buttons"},[n("button",{staticClass:"edit",on:{click:function(e){return t.toEdit(t.todo)}}},[t._v("EDIT")]),n("button",{staticClass:"delete",on:{click:function(e){return t.$emit("recive-id",t.todo.id)}}},[t._v("DELETE")])])],2)},F=[],W={props:["todo"],methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["changeEditing"])),{},{toEdit:function(t){this.$router.push({name:"edit",params:t}),this.changeEditing(t),localStorage.setItem("localtodo",JSON.stringify(t))}}),components:{TodoItem:J}},q=W,z=(n("ad1a"),Object(p["a"])(q,R,F,!1,null,"1dd3a4ce",null)),G=z.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pop-up"},[n("p",[t._v("Are you sure you want to do this?")]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"cancel",on:{click:function(e){return t.changePopup(t.id)}}},[t._v("Cancel")]),n("button",{staticClass:"confirm",on:{click:function(e){return t.popupBtns(t.type)}}},[t._v("Confirm")])])])},K=[],Q={props:["type","id"],methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["changePopup","deleteTodoBox","initialState","changeBackup","changeTemp"])),{},{popupBtns:function(t){this.changePopup(this.id),"delete"===t?(this.deleteTodoBox(),this.changeBackup(!1),this.changeTemp([]),"/"!==this.$route.path&&this.$router.push("/")):"cancel"===t&&(this.$emit("get-initial"),this.changeBackup(!0))}})},U=Q,V=(n("8606"),Object(p["a"])(U,H,K,!1,null,"06c4142b",null)),X=V.exports,Y={data:function(){return{id:Number}},computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["changeOpen","changePopup"])),{},{reciveId:function(t){this.id=t,this.changePopup(t)}}),components:{TodoBox:G,Modal:L,Popup:X}},Z=Y,tt=(n("2298"),Object(p["a"])(Z,O,_,!1,null,"05076a89",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edition"},[n("h1",[t._v("Editing your Todo Task")]),t.getState("popup")?n("Popup",{attrs:{type:t.type,id:t.contents.id},on:{"get-initial":t.getInitial}}):t._e(),n("div",{staticClass:"content"},[n("AddTodo",{on:{"add-content":t.addContent}}),n("div",{staticClass:"title-box"},[n("span",{staticClass:"title",attrs:{contenteditable:"true"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTask(e)},blur:function(e){return t.updateTask(e)}}},[t._v(t._s(t.contents.title))])]),t._l(t.contents.content,(function(e,o){return n("div",{key:o},[n("TodoItem",{attrs:{td:e,checkbox:!0},on:{"remove-todo":t.removeTodo}})],1)})),n("span",{staticClass:"hint"},[t._v("Click on the text for editing")]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"delete",on:{click:function(e){return t.changeType("delete")}}},[t._v("delete")]),n("div",{staticClass:"backup-box"},[n("button",{staticClass:"cancel",on:{click:function(e){return t.changeType("cancel")}}},[t._v("cancel changes")]),t.getState("backup")?n("button",{staticClass:"backup",on:{click:t.backup}},[t._v("click to return changes")]):t._e()]),n("button",{staticClass:"cancel",on:{click:function(e){return t.saveBtn()}}},[t._v("save")])])],2)],1)},ot=[],ct={data:function(){return{contents:[],beforeChanging:"",type:""}},created:function(){this.contents=JSON.parse(localStorage.getItem("localtodo")),this.beforeChanging=this.contents.title},computed:Object(u["c"])(["getState"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["saveTodo","changePopup","changeTemp","changeBackup"])),{},{addContent:function(t){this.contents.content.push(t)},updateTask:function(t){t.preventDefault(),0===t.target.innerText.length&&(t.target.innerText=this.beforeChanging),this.contents.title=t.target.innerText,t.target.blur()},removeTodo:function(t){this.contents.content=this.contents.content.filter((function(e){return e.id!==t}))},saveBtn:function(){this.changeBackup(!1),this.saveTodo(this.contents),this.$router.push("/"),this.changeTemp([])},changeType:function(t){"delete"===t?this.type="delete":(t="cancel")&&(this.type="cancel",this.changeTemp(this.contents)),this.changePopup()},backup:function(){this.contents=this.getState("temp"),this.changeBackup(!1)},getInitial:function(){this.contents=JSON.parse(localStorage.getItem("localtodo"))}}),components:{TodoItem:J,AddTodo:w,Popup:X}},at=ct,it=(n("3f13"),Object(p["a"])(at,nt,ot,!1,null,"403a8656",null)),rt=it.exports;o["a"].use(k["a"]);var st=[{path:"/",name:"Todos",component:et},{path:"/edit",name:"edit",component:rt}],ut=new k["a"]({mode:"history",routes:st}),dt=ut;n("7db0");o["a"].use(u["a"]);var lt=new u["a"].Store({state:{todos:JSON.parse(localStorage.getItem("todos"))||[],temp:[],editingTodo:[],open:!1,popup:!1,error:!1,backup:!1,id:Number},getters:{getState:function(t){return function(e){switch(e){case"todos":return t.todos;case"open":return t.open;case"popup":return t.popup;case"error":return t.error;case"backup":return t.backup;case"temp":return t.temp;case"editing":return t.editingTodo}}}},mutations:{addTodos:function(t,e){t.todos.push(e),localStorage.setItem("todos",JSON.stringify(t.todos)),t.open=!1},deleteTodoBox:function(t){t.todos=t.todos.filter((function(e){return e.id!==t.id})),localStorage.setItem("todos",JSON.stringify(t.todos)),t.popup=!1},saveTodo:function(t,e){var n=t.todos.find((function(t){return t.id===e.id}));Object.assign(n,e),localStorage.setItem("todos",JSON.stringify(t.todos))},initialState:function(t){return t.todos=JSON.parse(localStorage.getItem("todos"))||[]},changeOpen:function(t){t.open=!t.open},changePopup:function(t,e){t.popup=!t.popup,t.id=e},changeError:function(t){t.error=!0,setTimeout((function(){return t.error=!1}),1e3)},changeBackup:function(t,e){t.backup=e},changeTemp:function(t,e){t.temp=e},changeEditing:function(t,e){t.editingTodo=e}},actions:{addTodo:function(t,e){var n=t.commit,o={title:e.title,id:Date.now(),content:e.content};n("addTodos",o)}}});o["a"].config.productionTip=!1,new o["a"]({store:lt,router:dt,render:function(t){return t(m)}}).$mount("#app")},"5ee7":function(t,e,n){},6058:function(t,e,n){},6199:function(t,e,n){},"61a8":function(t,e,n){},6931:function(t,e,n){},7209:function(t,e,n){},"85ec":function(t,e,n){},8606:function(t,e,n){"use strict";var o=n("5ee7"),c=n.n(o);c.a},ad1a:function(t,e,n){"use strict";var o=n("6058"),c=n.n(o);c.a},f00d:function(t,e,n){"use strict";var o=n("61a8"),c=n.n(o);c.a},fe16:function(t,e,n){"use strict";var o=n("7209"),c=n.n(o);c.a}});
//# sourceMappingURL=app.3757c7c6.js.map