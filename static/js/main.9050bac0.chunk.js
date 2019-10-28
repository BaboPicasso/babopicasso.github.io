(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,n,t){e.exports=t(48)},48:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(27),i=t.n(o),c=t(2),l=t(1),u=t(9),s=t(7),d=t(28),p=t(4),f=t(5);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{duration:500,color:"rgba(0, 0, 0, 0.5)",size:10},n=e.duration,t=e.color,r=e.size,o=a.a.useRef(),i=a.a.useState([]),c=Object(p.a)(i,2),l=c[0],u=c[1];a.a.useEffect((function(){o.current.addEventListener("click",b);var e=o;return function(){for(var n=0;n<l.length;n++)window.clearTimeout(l[n].timer);console.log(l),e.current.removeEventListener("click",b)}}),[]);var s=function(){for(var e="",n=0;n<16;n++)e+=String.fromCharCode(Math.floor(255*Math.random()));return e},b=function(e){var t=o.current.getBoundingClientRect(),r=window.setTimeout((function(){return g()}),2*n);u(l.concat({key:s(),x:e.clientX-t.x,y:e.clientY-t.y,timer:r}))},g=function(){u((function(e){var n=Object(d.a)(e);n[0];return n.slice(1)}))},v=Object(f.d)(l,(function(e){return e.key}),{from:{transform:"scale(0)",opacity:1},enter:{transform:"scale(".concat(r,")"),opacity:0},leave:{transform:"scale(".concat(r,")"),opacity:0}});return[o,v.map((function(e){var n=e.item,r=e.props;e.key;return a.a.createElement(f.a.div,{key:n.key,style:m({},r,{left:n.x,top:n.y,backgroundColor:t,width:10,height:10,position:"absolute",borderRadius:5})})}))]};function v(){var e=Object(c.a)(["\n    border-radius: 50%;\n    padding: 2px;\n    border: 2px solid ",";\n    ","\n"]);return v=function(){return e},e}function h(){var e=Object(c.a)(["\n    -webkit-tap-highlight-color: transparent;\n    outline: none !important;\n    flex: 1 1 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-shrink: 0;\n    text-decoration: none;\n    min-width: 120px;\n"]);return h=function(){return e},e}function x(){var e=Object(c.a)(["\n    background: url(",") center center / cover;\n    height: 64px;\n    width: 64px;\n    overflow: hidden;\n    border-radius: 50%;\n"]);return x=function(){return e},e}function O(){var e=Object(c.a)(["\n    padding: 16px;\n    padding-bottom: 0;\n    color: #666;\n    font-size: 8pt;\n"]);return O=function(){return e},e}var y=l.b.div(O()),j=l.b.div(x(),(function(e){return e.pictureUrl})),E=Object(l.b)(u.b)(h()),w=l.b.div(v(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.elevation[3]})),k=function(e){var n=e.pictureUrl,t=e.title,r=e.to,o=e.disabled;return a.a.createElement(E,{to:r,onClick:function(e){o&&e.preventDefault()}},a.a.createElement(w,null,a.a.createElement(j,{pictureUrl:n})),a.a.createElement(y,null,t))},P=a.a.createContext(),S={Gleichstromtechnik:{description:"In diesem Kurs werden die Grundlagen der Gleichstromtechnik erl\xe4utert.",pictureUrl:"https://www.elektro.net/wp-content/uploads/2016/10/DE_2016_20_74-75_GIG1-Bild22.jpg",type:"course",children:{Grundlagen:{type:"group",children:{"Strom, Spannung und Widerstand":{type:"module",pictureUrl:"https://www.stwz.ch/upload/rm/strom.jpg?_=1553532388000",active:!0,children:[{title:"Theorie Beispiel",type:"theory",theory:"Als elektrischen Strom bezeichnet man die Bewegung von Ladungstr\xe4gern durch einen Stoff oder durch einen luftleeren Raum (Vakuum). Ladungstr\xe4ger sind zum Beispiel Elektronen oder Ionen. Bewegen sich also Elektronen zum Beispiel durch einen Kupferdraht, spricht man von Stromfluss. Stellt euch das wie einen Fluss (Wasser) in der Natur vor. Dort flie\xdft auch Wasser in einem Flussbett. Und so flie\xdfen Elektronen in einem Kupferdraht."},{title:"Multiple Choice Beispiel",type:"multiple-choice",question:"Was versteht man unter Spannung?",choices:["Falsche Antwort","Falsche Antwort","Richtige Antwort","Falsche Antwort"],solution:2},{title:"Rechenbeispiel",type:"calculation",question:"Berechnen Sie den Strom der durch einen Widerstand flie\xdft, dieser besitzt einen Widerstand von 100 Ohm. Es wird eine Spannung von 10V angelegt.",solution:.1}]},"Ohmsches Gesetz":{type:"module",pictureUrl:"https://banner2.cleanpng.com/20180412/yte/kisspng-ohm-s-law-series-and-parallel-circuits-electrical-law-5acfa52b6e37b9.8287530415235576754515.jpg",active:!1},Spannungsteiler:{type:"module",pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Einfacher-Spannungsteiler.svg/220px-Einfacher-Spannungsteiler.svg.png",active:!1}}},Fortgeschritten:{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}},Experte:{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}},"Abschlusspr\xfcfung":{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}}}},Wechselstromtechnik:{type:"course",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",pictureUrl:"https://asset.conrad.com/media10/isa/160267/c1/-/de/Drehstrom",children:{Grundlagen:{type:"group",children:{Vektoren:{type:"module"},"Komplexe Zahlen":{type:"module"}}}}},Debug:{pictureUrl:"https://cis.bentley.edu/sandbox/wp-content/uploads/2017/03/debug.png",children:{Debug:{children:{Debug:{active:!0}}}}}},C=function(e){var n=e.children,t=a.a.useState(S),r=Object(p.a)(t,1)[0];return a.a.createElement(P.Provider,{value:r},n)},z=t(14);function D(){var e=Object(c.a)(["\n    ","\n    margin: 16px;\n"]);return D=function(){return e},e}var F=l.b.div(D(),(function(e){return e.theme.elevation[2]}));function N(){var e=Object(c.a)(["\n    font-size: 14pt;\n    padding: 16px;\n"]);return N=function(){return e},e}var q=l.b.div(N()),R=function(e){var n=e.title,t=e.children;Object(z.a)(e,["title","children"]);return a.a.createElement(F,null,a.a.createElement(q,null,n),t)},I=t(12),L=function(e){var n=Object(I.h)().courseId;return function(e){var t=[];for(var r in e.children){var o=[],i=e.children[r].children;for(var c in i)o.push(a.a.createElement(k,{title:c,key:c,pictureUrl:i[c].pictureUrl,to:{pathname:"/course/".concat(n,"/").concat(r,"/module/").concat(c),state:c}}));t.push(a.a.createElement(R,{title:r,key:r},a.a.createElement("div",{style:{display:"flex",paddingBottom:16,flexWrap:"wrap",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}},o)))}return t}(Object(r.useContext)(P)[n])};function U(){var e=Object(c.a)(["\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    padding: 16px;\n    box-sizing: border-box;\n"]);return U=function(){return e},e}var B=l.b.div(U()),M=function(e){var n=a.a.useContext(P);return a.a.createElement(B,null,function(e){var n=[];for(var t in e)n.push(a.a.createElement(k,{key:t,to:"/course/".concat(t),title:t,pictureUrl:e[t].pictureUrl}));return n}(n))},W=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{title:"Mein Kurs"},a.a.createElement("div",{style:{padding:16}},"Hier steht bald dein zuletzt bearbeiteter Kurs.")),a.a.createElement(R,{title:"Elektrotechnik Kurse"},a.a.createElement(M,null)),a.a.createElement(R,{title:"Leaderboard"},a.a.createElement("div",{style:{padding:16}},"Hier steht bald ein Leaderboard.")))},A=t(3);function G(){var e=Object(c.a)(["\n    transition: background-color 0.3s ease;\n    height: 1px;\n    background-color: #ccc;\n    position: relative;\n    \n    :before {\n        transition: 0.3s ease transform;\n        content: '';\n        position: absolute;\n        background-color: blue;\n        width: 100%;\n        transform: scale(0, 1);\n        height: 1px;\n    }\n"]);return G=function(){return e},e}function X(){var e=Object(c.a)(["\n    border: none;\n    outline: none;\n    padding: 8px;\n    overflow: show;\n    \n    ","\n    \n    :placeholder-shown + div:before {\n        transform: scale(0, 1);\n    }\n    \n    :not(:placeholder-shown) + div:before {\n        transform: scale(1, 1);\n    }\n    \n    :focus + div:before {\n        transform: scale(1, 1);\n    }\n"]);return X=function(){return e},e}function K(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return K=function(){return e},e}var T=l.b.div(K()),H=l.b.input(X(),(function(e){return e.required?"\n    :valid + div {\n        background-color: green;\n    }\n    \n    :invalid + div:before {\n        background-color: red;\n    }\n    \n    :invalid + div {\n        background-color: red;\n    }\n    \n    :valid + div:before {\n        background-color: green;\n    } \n    ":""})),_=l.b.div(G()),Z=function(e){var n=e.value,t=e.placeholder,r=e.required,o=e.onChange,i=e.type;Object(z.a)(e,["value","placeholder","required","onChange","type"]);return a.a.createElement(T,null,a.a.createElement(H,{type:i,onChange:o,value:n,placeholder:t,required:r}),a.a.createElement(_,null))},V=a.a.createContext(),Y={nickName:"tganz",fullName:"Tobias Ganzhorn",email:"tganzhorn@gmail.com",initials:"TG",progress:0},J=function(){var e=a.a.useContext(V),n=Object(p.a)(e,2);return[n[0],n[1]]},$=function(e){var n=e.children,t=a.a.useState(Y);return a.a.createElement(V.Provider,{value:t},n)};function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(){var e=Object(c.a)(["\n    padding: 0px 16px;\n    padding-bottom: 16px;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n\n"]);return te=function(){return e},e}var re=l.b.div(te()),ae=l.b.div(ne()),oe=function(e){Object(A.a)({},e);var n=J(),t=Object(p.a)(n,2),r=t[0],o=t[1],i=function(e,n){var t=e.target.value;switch(n){case"fullName":o((function(e){return ee({},e,{fullName:t})})),console.log(t,n);break;case"nickName":o((function(e){return ee({},e,{nickName:t})})),console.log(t,n);break;case"email":o((function(e){return ee({},e,{email:t})})),console.log(t,n);break;default:return}};return a.a.createElement(R,{title:"Profil"},a.a.createElement(re,null,a.a.createElement(ae,null,"Name",a.a.createElement(Z,{value:r.fullName,onChange:function(e){return i(e,"fullName")}})),a.a.createElement(ae,null,"Nickname",a.a.createElement(Z,{value:r.nickName,onChange:function(e){return i(e,"nickName")}})),a.a.createElement(ae,null,"Email Adresse",a.a.createElement(Z,{value:r.email,onChange:function(e){return i(e,"email")}}))))};function ie(){var e=Object(c.a)(["\n    position: absolute;\n    width: ","%;\n    background-color: green;\n    height: 100%;\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n    width: 100%;\n    height: 8px;\n    background-color: #ccc;\n    overflow: hidden;\n    position: relative;\n"]);return ce=function(){return e},e}var le=l.b.div(ce()),ue=l.b.div(ie(),(function(e){return 100*e.progress})),se=function(e){var n=e.progress;return a.a.createElement(le,null,a.a.createElement(ue,{progress:n}))},de=t(15),pe=t.n(de),fe=t(20);function be(){var e=Object(c.a)(["\n    position: relative;\n    transition: 0.1s ease background-color, 0.1 ease box-shadow;\n    display: inline-block;\n    padding: 16px;\n    margin: 8px;\n    border-radius: 4px;\n    ","\n    background-color: ",";\n    overflow: hidden;\n"]);return be=function(){return e},e}var me=Object(f.a)(l.b.div(be(),(function(e){return e.theme.elevation[4]}),(function(e){return e.theme.secondary.main}))),ge=function(e){var n=e.children,t=e.onClick,r=g({duration:500,color:"rgba(255, 255, 255, 0.5)",size:10}),o=Object(p.a)(r,2),i=o[0],c=o[1],l=Object(f.c)((function(){return{config:f.b.wobbly}})),u=Object(p.a)(l,2),s=u[0],d=u[1];return a.a.createElement(me,{ref:i,style:s,onClick:function(){d({from:{transform:"scale(1.1)"},to:function(){var e=Object(fe.a)(pe.a.mark((function e(n,t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({transform:"scale(1.1)"});case 2:return e.next=4,n({transform:"scale(1)"});case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),t()}},c,n)};function ve(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return ve=function(){return e},e}function he(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return he=function(){return e},e}var xe=l.b.div(he()),Oe=l.b.form(ve()),ye=function(e){var n=e.children,t=e.choices,r=e.solution,o=a.a.useState(null),i=Object(p.a)(o,2),c=i[0],l=i[1],u=function(e){var n=e.value,t=e.children;return a.a.createElement("label",null,t,a.a.createElement("input",{onChange:s,type:"radio",value:n,checked:n===c}))},s=function(e){l(parseInt(e.target.value))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,null,n),a.a.createElement(Oe,{onSubmit:function(e){return e.preventDefault()}},function(){for(var e=[],n=0;n<t.length;n++)e.push(a.a.createElement(u,{key:n,value:n},t[n]));return e}()),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:function(){return r(c)}},"L\xf6sung abgeben.")))};function je(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return je=function(){return e},e}var Ee=l.b.div(je()),we=function(e){var n=e.children,t=e.next;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,null,n),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:t},"Weiter")))};function ke(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return ke=function(){return e},e}var Pe=l.b.div(ke()),Se=function(e){var n=e.children,t=e.solution,r=a.a.useState(""),o=Object(p.a)(r,2),i=o[0],c=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe,null,n),a.a.createElement(Pe,null,a.a.createElement("form",{onSubmit:function(e){t(parseFloat(i)),e.preventDefault()}},a.a.createElement(Z,{placeholder:"L\xf6sung",value:i,onChange:function(e){return c(e.target.value)}}))),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:function(){return t(parseFloat(i))}},"Rechnung abgeben")))},Ce=t(33);function ze(){var e=Object(c.a)(["\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"]);return ze=function(){return e},e}var De=l.b.div(ze()),Fe=Object(f.a)(De);function Ne(){var e=Object(c.a)(["\n    color: white;\n    position: absolute;\n"]);return Ne=function(){return e},e}function qe(){var e=Object(c.a)(["\n    text-align: center;\n    width: 200px;\n    display: inline-block;\n    padding: 16px;\n    color: black;\n    background-color: ",";\n    border-radius: 4px;\n    ","\n"]);return qe=function(){return e},e}function Re(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    color: transparent;\n    border-radius: 4px;\n    width: 200px;\n    margin: 0 auto;\n"]);return Re=function(){return e},e}var Ie=Object(f.a)(l.b.div(Re(),(function(e){return e.theme.secondary.dark}))),Le=Object(f.a)(l.b.div(qe(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.elevation[3]}))),Ue=Object(l.b)(Fe)(Ne()),Be=function(e){var n=e.children,t=e.onClick,r=a.a.useRef(),o=a.a.useRef(),i=Object(f.c)((function(){return{x:0}})),c=Object(p.a)(i,2),l=c[0].x,u=c[1],s=Object(Ce.a)((function(e){var n=e.down,a=e.movement;u({x:n&&a[0]>0?a[0]:0}),a[0]>r.current.offsetWidth&&t()}));return a.a.createElement(Ie,{ref:r},a.a.createElement(Ue,null,"send"),a.a.createElement(Le,Object.assign({ref:o},s(),{style:{transform:l.interpolate((function(e){return"translateX(".concat(e,"px)")}))}}),n))};function Me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function We(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Me(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Me(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ae=function(e){Object(A.a)({},e);var n=Object(I.h)(),t=(n.courseId,n.groupId,n.moduleId,function(e){e===i[u.progress].solution&&r()}),r=function(){s((function(e){return We({},e,{progress:e.progress+1})}))},o=function(e){switch(i[u.progress].type){case"theory":return function(e){var n=e.theory;return a.a.createElement(we,{next:r},n)}(i[u.progress]);case"multiple-choice":return function(e){var n=e.question,r=e.choices;return a.a.createElement(ye,{choices:r,solution:t},n)}(i[u.progress]);case"calculation":return function(e){var n=e.question;return a.a.createElement(Se,{solution:t},n)}(i[u.progress]);default:return a.a.createElement("div",null,"Ups uns ist da ein Fehler unterlaufen.")}},i=function(e,n,t){return a.a.useContext(P)[e].children[n].children[t].children}("Gleichstromtechnik","Grundlagen","Strom, Spannung und Widerstand"),c=J(),l=Object(p.a)(c,2),u=l[0],s=l[1];return i.length>u.progress?a.a.createElement(a.a.Fragment,null,a.a.createElement(se,{progress:u.progress/i.length}),a.a.createElement(R,{title:i[u.progress].title},o(i[u.progress].type))):a.a.createElement(a.a.Fragment,null,a.a.createElement(se,{progress:1}),a.a.createElement(R,{title:"Ende Demo"},a.a.createElement("div",{style:{padding:16}},"Aufgaben gel\xf6st! ",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Be,{onClick:function(){return s((function(e){return We({},e,{progress:0})}))}},"Demo zur\xfccksetzen"))))},Ge=function(){return a.a.createElement(R,{title:"Einstellungen"},a.a.createElement("div",{style:{padding:16}},"Es gibt noch keine Einstellungen die du vornehmen kannst. Tut uns leid! :'("))};function Xe(){var e=Object(c.a)(["\n    width: 100%;\n    overflow: hidden;\n"]);return Xe=function(){return e},e}var Ke=l.b.div(Xe()),Te=function(e){var n=Object(I.g)();return a.a.createElement(Ke,null,a.a.createElement(I.c,{location:n},a.a.createElement(I.a,{exact:!0,path:"/course/:courseId"},a.a.createElement(L,null)),a.a.createElement(I.a,{exact:!0,path:"/"},a.a.createElement(W,null)),a.a.createElement(I.a,{exact:!0,path:"/profile"},a.a.createElement(oe,null)),a.a.createElement(I.a,{exact:!0,path:"/settings"},a.a.createElement(Ge,null)),a.a.createElement(I.a,{exact:!0,path:"/course/:courseId/:groupId/module/:moduleId"},a.a.createElement(Ae,null)),a.a.createElement(I.a,{exact:!0,path:"/slider"},a.a.createElement(Be,null))))};function He(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _e(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?He(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ze=a.a.createContext(),Ve=[{user:"tganzhorn@gmail.com",password:"123",id:0}],Ye={authenticated:!1,id:null},Je=function(){var e=a.a.useContext(Ze),n=Object(p.a)(e,2),t=n[0],r=n[1];return[function(e,n){for(var t=0;t<Ve.length;t++)if(e===Ve[t].user&&n===Ve[t].password)return r((function(e){return _e({},e,{authenticated:!0})})),!0;return!1},function(){return r((function(e){return _e({},e,{authenticated:!1})})),!0},t]},$e=function(e){var n=e.children,t=a.a.useState(Ye);return a.a.createElement(Ze.Provider,{value:t},n)};function Qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function en(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Qe(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function nn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return nn=function(){return e},e}function tn(){var e=Object(c.a)(["\n    padding: 8px;\n"]);return tn=function(){return e},e}function rn(){var e=Object(c.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    color: #666;\n    font-size: 8pt;\n    padding: 16px;\n"]);return rn=function(){return e},e}function an(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    padding: 16px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    ","\n"]);return an=function(){return e},e}var on=l.b.div(an(),(function(e){return e.theme.elevation[4]})),cn=l.b.div(rn()),ln=l.b.div(tn()),un=l.b.form(nn()),sn=function(e){var n=e.children,t=Je(),r=Object(p.a)(t,1)[0],o=a.a.useState({user:"",password:""}),i=Object(p.a)(o,2),c=i[0],l=i[1],u=Object(f.d)(!0,null,{from:{position:"absolute",opacity:0},enter:{opacity:1,position:""},leave:{opacity:0,position:"absolute"}});return u.map((function(e){var t=e.item,o=(e.key,e.props);return t?a.a.createElement(f.a.div,{key:1,style:o},n):a.a.createElement(f.a.div,{key:0,style:o},a.a.createElement(a.a.Fragment,null,a.a.createElement(cn,null,"Alpha-Build 28.10.2019 | 17:54"),a.a.createElement(on,null,a.a.createElement(ln,null,"Login"),a.a.createElement(un,{onSubmit:function(e){e.preventDefault(),r(c.user,c.password)}},a.a.createElement(Z,{type:"text",placeholder:"Email Adresse",value:c.user,onChange:function(e){return l(en({},c,{user:e.target.value}))}}),a.a.createElement(Z,{type:"password",placeholder:"Passwort",value:c.password,onChange:function(e){return l(en({},c,{password:e.target.value}))}}),a.a.createElement("input",{type:"submit",style:{visibility:"hidden"}})))))}))},dn={primary:{main:"#0d47a1",light:"#5472d3",dark:"#002171",color:"#ffffff"},secondary:{main:"#ffa000",light:"#ffd149",dark:"#c67100",color:"#000000"},progress:{finished:"#000000",disabled:"#000000",unfinished:"#000000"},elevation:["box-shadow: none;","box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);","box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);","box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);","box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);","box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);","box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);","box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);","box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);","box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);","box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);"]},pn=function(e){var n=e.children;return a.a.createElement(l.a,{theme:dn},a.a.createElement($e,null,a.a.createElement($,null,a.a.createElement(C,null,n))))};function fn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function bn(){var e=Object(c.a)(["\n    width: calc(100% + 20px);\n    margin-left: -20px;\n    position: absolute;\n    height: 100%;\n    transform: translateX(100%);\n    background-image: linear-gradient(90deg, #0d47a100 0px,  #0d47a1ff 20px,  #0d47a1ff 100%);\n"]);return bn=function(){return e},e}function mn(){var e=Object(c.a)(["\n    overflow: hidden;\n    position: relative;\n"]);return mn=function(){return e},e}var gn=Object(f.a)(l.b.div(mn())),vn=Object(f.a)(l.b.div(bn())),hn=function(e){var n=e.children,t=(Object(z.a)(e,["children"]),a.a.useState(n)),o=Object(p.a)(t,2),i=o[0],c=o[1];Object(r.useEffect)((function(){n.key!==i.key&&l()}));var l=function(){m(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fn(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},g,{onRest:function(){c(n),m(v)}}))},u=Object(f.c)((function(){return{transform:"translateX(100%)"}})),d=Object(p.a)(u,2),b=d[0],m=d[1],g={from:{transform:"translateX(100%)"},to:{transform:"translateX(0%)"}},v={from:{transform:"translateX(0%)"},to:{transform:"translateX(100%)"}};return a.a.createElement(gn,null,a.a.createElement(vn,{style:b}),i)};function xn(){var e=Object(c.a)(["\n    box-sizing: border-box;\n    line-height: 0;\n    transition: 0.3s ease transform, 0.3s ease background-color;\n    transform: ",";\n    background-color: ",";\n    overflow: hidden;\n    position: relative;\n    padding: 12px;\n    border-radius: 50%;\n"]);return xn=function(){return e},e}var On=l.b.div(xn(),(function(e){return e.active?"rotateZ(-90deg)":"none"}),(function(e){return e.active?"rgba(0, 0, 0, 0.25)":"transparent"})),yn=function(e){var n=e.onClick,t=e.active,r=g(),o=Object(p.a)(r,2),i=o[0],c=o[1];return a.a.createElement(On,{ref:i,active:t,onClick:n},c,a.a.createElement(Fe,null,"menu"))};function jn(){var e=Object(c.a)(["\n    color: ",";\n    background-color: ",";\n    padding: 4px 16px;\n    display: flex;\n    align-items: center;\n    \n    ","\n"]);return jn=function(){return e},e}function En(){var e=Object(c.a)(["\n    position: sticky;\n    top: 0;\n    left: 0;\n    z-index: 900;\n"]);return En=function(){return e},e}var wn=l.b.div(En()),kn=l.b.div(jn(),(function(e){return e.theme.primary.color}),(function(e){return e.theme.primary.main}),(function(e){return e.theme.elevation[6]})),Pn=Object(l.c)((function(e){var n=e.sideNavHandle,t=e.active;return a.a.createElement(wn,null,a.a.createElement(kn,null,a.a.createElement(yn,{onClick:n,active:t}),a.a.createElement(hn,null,a.a.createElement("div",null,"eLearning App"))))}));function Sn(){var e=Object(c.a)(["\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 12px;\n    color: ",";\n    \n    ","\n"]);return Sn=function(){return e},e}var Cn=Object(f.a)(l.b.div(Sn(),(function(e){return e.color.color}),(function(e){switch(e.size){case"small":return"padding: 8px";case"medium":return"padding: 12px";case"large":return"padding: 16px";default:return"padding: 8px"}}))),zn=Object(l.c)((function(e){var n=e.size,t=e.icon,r=e.onClick,o=void 0===r?function(){}:r,i=e.color,c=e.theme;i=i||{main:c.secondary.main,highlight:c.secondary.light,color:c.secondary.color};var l=g({color:"rgba(255, 255, 255, 0.5)",size:10,duration:500}),u=Object(p.a)(l,2),s=u[0],d=u[1],b=Object(f.c)((function(){return{transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1),config:f.b.wobbly}})),m=Object(p.a)(b,2),v=m[0],h=m[1];return a.a.createElement(Cn,{size:n,ref:s,style:v,color:i,onClick:function(){o(),h({from:{transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1)},to:function(){var e=Object(fe.a)(pe.a.mark((function e(n,t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({transform:"scale(1.25)",backgroundColor:i.highlight,boxShadow:c.elevation[7].slice(12,-1)});case 2:return e.next=4,n({transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1)});case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()})}},d,a.a.createElement(Fe,null,t))}));function Dn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 8px;\n    \n    > div {\n        margin-bottom: 8px;\n    }\n"]);return Dn=function(){return e},e}function Fn(){var e=Object(c.a)(["\n    display: inline-block;\n    user-select: none;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    z-index: 900;\n    padding: 16px;\n"]);return Fn=function(){return e},e}var Nn=l.b.div(Fn()),qn=Object(f.a)(l.b.div(Dn())),Rn=Object(l.c)((function(e){var n=a.a.useState(!1),t=Object(p.a)(n,2),r=t[0],o=t[1],i=Object(f.c)({transform:r?"translateY(0)":"translateY(200%)",config:f.b.gentle}),c=function(e,n){var t=a.a.useRef(),r=a.a.useState(!1),o=Object(p.a)(r,2),i=o[0],c=o[1],l=a.a.useCallback((function(r){(n||void 0===n)&&(t.current&&!t.current.contains(r.target)&&t.current!==r.target?(c(!0),e()):c(!1))}),[e,n,c,t]);return a.a.useEffect((function(){return document.addEventListener("click",l),function(){document.removeEventListener("click",l)}}),[i,l]),t}((function(){return o(!1)})),l=Object(I.f)(),u=function(){window.setTimeout((function(){return o(!1)}),500)};return a.a.createElement(Nn,{ref:c},a.a.createElement(qn,{style:i},a.a.createElement(zn,{size:"medium",color:{main:e.theme.primary.main,highlight:e.theme.primary.light,color:e.theme.primary.color},icon:"home",onClick:function(){l.push("/","Startseite"),u()}}),a.a.createElement(zn,{size:"medium",color:{main:"#2e7d32",highlight:"#60ad5e",color:"#ffffff"},icon:"fullscreen",onClick:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),u()}}),a.a.createElement(zn,{size:"medium",color:{main:"#d84315",highlight:"#ff7543",color:"#000000"},icon:"local_library"}),a.a.createElement(zn,{size:"medium",color:{main:"#6a1b9a",highlight:"#9c4dcc",color:"#ffffff"},icon:"note"})),a.a.createElement(zn,{icon:"add",size:"large",animation:{from:"rotateZ(0deg)",to:"rotateZ(405deg)"},active:r,onClick:function(){o(!r)}}))}));function In(){var e=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 300px;\n    height: 100vh;\n    z-index: 1200;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n    display: flex;\n"]);return In=function(){return e},e}var Ln=Object(f.a)(l.b.div(In()));function Un(){var e=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: 1100;\n    background-color: rgba(0, 0, 0, 0.5);\n"]);return Un=function(){return e},e}var Bn=Object(f.a)(l.b.div(Un()));function Mn(){var e=Object(c.a)(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: stretch;\n    width: 100%;\n    \n    > li:first-child {\n        border: none;\n    }\n"]);return Mn=function(){return e},e}var Wn=l.b.ul(Mn());function An(){var e=Object(c.a)(["\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-decoration: none;\n\n    transition: 0.3s ease background-color;\n    padding: 16px;\n    \n    :hover {\n        background-color: #ccc;\n    }\n    \n    border-top: 1px solid #ccc;\n"]);return An=function(){return e},e}var Gn=l.b.li(An()),Xn=function(e){var n=e.children,t=e.style,r=e.onClick,o=g({duration:2e3,color:"rgba(0, 0, 0, 0.5)",size:50}),i=Object(p.a)(o,2),c=i[0],l=i[1];return a.a.createElement(Gn,{ref:c,style:t,onClick:r},l,n)};function Kn(){var e=Object(c.a)(["\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      background-color: ",";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 12pt;\n      color: ",";\n"]);return Kn=function(){return e},e}var Tn=l.b.div(Kn(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.secondary.color}));function Hn(){var e=Object(c.a)(["\n    color: #bbb;\n    font-size: 8pt;\n"]);return Hn=function(){return e},e}function _n(){var e=Object(c.a)(["\n    font-size: 12pt;\n"]);return _n=function(){return e},e}function Zn(){var e=Object(c.a)(["\n    flex-grow: 1;\n    margin-left: 16px;\n    color: white;\n"]);return Zn=function(){return e},e}var Vn=l.b.div(Zn()),Yn=l.b.div(_n()),Jn=l.b.div(Hn()),$n=function(e){return a.a.createElement(Vn,null,a.a.createElement(Yn,null,e.children),a.a.createElement(Jn,null,e.subtitle))},Qn=Object(l.c)((function(e){var n=e.active,t=e.sideNavHandle,r=e.theme,o=Object(f.c)({opacity:n?1:0,transform:n?0:-310}),i=o.opacity,c=o.transform,l=(Object(I.g)().state,J()),s=Object(p.a)(l,1)[0],d=Je(),b=Object(p.a)(d,2),m=(b[0],b[1]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ln,{style:{transform:c.interpolate((function(e){return"translateX(".concat(e,"px)")})),visibility:i.interpolate((function(e){return e>0?"visible":"hidden"}))}},a.a.createElement(Wn,null,a.a.createElement(u.b,{to:{pathname:"/profile",state:"Profil"},style:{textDecoration:"none"}},a.a.createElement(Xn,{style:{backgroundColor:r.primary.main,paddingBottom:24,paddingTop:24}},a.a.createElement(Tn,null,s.initials),a.a.createElement($n,{subtitle:s.email},s.fullName))),a.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/settings",state:"Einstellungen"}},a.a.createElement(Xn,null,"Einstellungen")),a.a.createElement(Xn,{onClick:m},"Logout"))),a.a.createElement(Bn,{onClick:t,style:{opacity:i.interpolate((function(e){return e})),visibility:i.interpolate((function(e){return e>0?"visible":"hidden"}))}}))}));function et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var nt=function(e){Object(A.a)({},e);var n=a.a.useState({sideNav:!1}),t=Object(p.a)(n,2),r=t[0],o=t[1],i=function(){o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?et(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):et(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},r,{sideNav:!r.sideNav}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qn,{active:r.sideNav,sideNavHandle:i}),a.a.createElement(Pn,{active:r.sideNav,sideNavHandle:i}),a.a.createElement(Rn,null))};var tt=function(){return a.a.createElement(u.a,null,a.a.createElement(pn,null,a.a.createElement(sn,null,a.a.createElement(nt,null),a.a.createElement(Te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9050bac0.chunk.js.map