(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,n,t){e.exports=t(48)},48:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(27),i=t.n(o),c=t(2),l=t(1),u=t(10),s=t(7),d=t(28),p=t(4),f=t(5);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{duration:500,color:"rgba(0, 0, 0, 0.5)",size:10},n=e.duration,t=e.color,r=e.size,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click",c=a.a.useRef(),l=a.a.useState([]),u=Object(p.a)(l,2),s=u[0],m=u[1];a.a.useEffect((function(){c.current.addEventListener(i,v);var e=c;return function(){for(var n=0;n<s.length;n++)window.clearTimeout(s[n].timer);e.current.removeEventListener(i,v)}}),[]);var g=function(){for(var e="",n=0;n<16;n++)e+=String.fromCharCode(Math.floor(255*Math.random()));return e},v=function(e){var t=c.current.getBoundingClientRect(),r=window.setTimeout((function(){return h()}),2*n);m(o?s.concat({key:g(),x:o[0],y:o[1],timer:r}):s.concat({key:g(),x:e.clientX-t.x,y:e.clientY-t.y,timer:r}))},h=function(){m((function(e){var n=Object(d.a)(e);n[0];return n.slice(1)}))},x=Object(f.d)(s,(function(e){return e.key}),{from:{transform:"scale(0)",opacity:1},enter:{transform:"scale(".concat(r,")"),opacity:0},leave:{transform:"scale(".concat(r,")"),opacity:0}});return[c,x.map((function(e){var n=e.item,r=e.props;e.key;return a.a.createElement(f.a.div,{key:n.key,style:b({},r,{left:n.x,top:n.y,backgroundColor:t,width:10,height:10,position:"absolute",borderRadius:5})})}))]};function v(){var e=Object(c.a)(["\n    border-radius: 50%;\n    padding: 2px;\n    border: 2px solid ",";\n    ","\n"]);return v=function(){return e},e}function h(){var e=Object(c.a)(["\n    -webkit-tap-highlight-color: transparent;\n    outline: none !important;\n    flex: 1 1 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-shrink: 0;\n    text-decoration: none;\n    min-width: 120px;\n"]);return h=function(){return e},e}function x(){var e=Object(c.a)(["\n    background: url(",") center center / cover;\n    height: 64px;\n    width: 64px;\n    overflow: hidden;\n    border-radius: 50%;\n"]);return x=function(){return e},e}function y(){var e=Object(c.a)(["\n    padding: 16px;\n    padding-bottom: 0;\n    color: #666;\n    font-size: 8pt;\n"]);return y=function(){return e},e}var O=l.b.div(y()),j=l.b.div(x(),(function(e){return e.pictureUrl})),E=Object(l.b)(u.b)(h()),w=l.b.div(v(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.elevation[3]})),k=function(e){var n=e.pictureUrl,t=e.title,r=e.to,o=e.disabled;return a.a.createElement(E,{to:r,onClick:function(e){o&&e.preventDefault()}},a.a.createElement(w,null,a.a.createElement(j,{pictureUrl:n})),a.a.createElement(O,null,t))},P=a.a.createContext(),C={Gleichstromtechnik:{description:"In diesem Kurs werden die Grundlagen der Gleichstromtechnik erl\xe4utert.",pictureUrl:"https://www.elektro.net/wp-content/uploads/2016/10/DE_2016_20_74-75_GIG1-Bild22.jpg",type:"course",children:{Grundlagen:{type:"group",children:{"Strom, Spannung und Widerstand":{type:"module",pictureUrl:"https://www.stwz.ch/upload/rm/strom.jpg?_=1553532388000",active:!0,children:[{title:"Theorie Beispiel",type:"theory",theory:"Als elektrischen Strom bezeichnet man die Bewegung von Ladungstr\xe4gern durch einen Stoff oder durch einen luftleeren Raum (Vakuum). Ladungstr\xe4ger sind zum Beispiel Elektronen oder Ionen. Bewegen sich also Elektronen zum Beispiel durch einen Kupferdraht, spricht man von Stromfluss. Stellt euch das wie einen Fluss (Wasser) in der Natur vor. Dort flie\xdft auch Wasser in einem Flussbett. Und so flie\xdfen Elektronen in einem Kupferdraht."},{title:"Multiple Choice Beispiel",type:"multiple-choice",question:"Was versteht man unter Spannung?",choices:["Falsche Antwort","Falsche Antwort","Richtige Antwort","Falsche Antwort"],solution:2},{title:"Rechenbeispiel",type:"calculation",question:"Berechnen Sie den Strom der durch einen Widerstand flie\xdft, dieser besitzt einen Widerstand von 100 Ohm. Es wird eine Spannung von 10V angelegt.",solution:.1}]},"Ohmsches Gesetz":{type:"module",pictureUrl:"https://banner2.cleanpng.com/20180412/yte/kisspng-ohm-s-law-series-and-parallel-circuits-electrical-law-5acfa52b6e37b9.8287530415235576754515.jpg",active:!1},Spannungsteiler:{type:"module",pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Einfacher-Spannungsteiler.svg/220px-Einfacher-Spannungsteiler.svg.png",active:!1}}},Fortgeschritten:{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}},Experte:{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}},"Abschlusspr\xfcfung":{type:"group",children:{"Modul 0":{active:!0},"Modul 1":{active:!1},"Modul 2":{active:!1}}}}},Wechselstromtechnik:{type:"course",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",pictureUrl:"https://asset.conrad.com/media10/isa/160267/c1/-/de/Drehstrom",children:{Grundlagen:{type:"group",children:{Vektoren:{type:"module"},"Komplexe Zahlen":{type:"module"}}}}},Debug:{pictureUrl:"https://cis.bentley.edu/sandbox/wp-content/uploads/2017/03/debug.png",children:{Debug:{children:{Debug:{active:!0}}}}}},S=function(e){var n=e.children,t=a.a.useState(C),r=Object(p.a)(t,1)[0];return a.a.createElement(P.Provider,{value:r},n)},z=t(12);function D(){var e=Object(c.a)(["\n    ","\n    margin: 16px;\n"]);return D=function(){return e},e}var F=l.b.div(D(),(function(e){return e.theme.elevation[2]}));function N(){var e=Object(c.a)(["\n    font-size: 14pt;\n    padding: 16px;\n"]);return N=function(){return e},e}var q=l.b.div(N()),R=function(e){var n=e.title,t=e.children;Object(z.a)(e,["title","children"]);return a.a.createElement(F,null,a.a.createElement(q,null,n),t)},A=t(13),I=function(e){var n=Object(A.h)().courseId;return function(e){var t=[];for(var r in e.children){var o=[],i=e.children[r].children;for(var c in i)o.push(a.a.createElement(k,{title:c,key:c,pictureUrl:i[c].pictureUrl,to:{pathname:"/course/".concat(n,"/").concat(r,"/module/").concat(c),state:c}}));t.push(a.a.createElement(R,{title:r,key:r},a.a.createElement("div",{style:{display:"flex",paddingBottom:16,flexWrap:"wrap",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}},o)))}return t}(Object(r.useContext)(P)[n])};function L(){var e=Object(c.a)(["\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    padding: 16px;\n    box-sizing: border-box;\n"]);return L=function(){return e},e}var U=l.b.div(L()),B=function(e){var n=a.a.useContext(P);return a.a.createElement(U,null,function(e){var n=[];for(var t in e)n.push(a.a.createElement(k,{key:t,to:"/course/".concat(t),title:t,pictureUrl:e[t].pictureUrl}));return n}(n))},M=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{title:"Mein Kurs"},a.a.createElement("div",{style:{padding:16}},"Hier steht bald dein zuletzt bearbeiteter Kurs.")),a.a.createElement(R,{title:"Elektrotechnik Kurse"},a.a.createElement(B,null)),a.a.createElement(R,{title:"Leaderboard"},a.a.createElement("div",{style:{padding:16}},"Hier steht bald ein Leaderboard.")))},W=t(3);function G(){var e=Object(c.a)(["\n    transition: background-color 0.3s ease;\n    height: 1px;\n    background-color: #ccc;\n    position: relative;\n    \n    :before {\n        transition: 0.3s ease transform;\n        content: '';\n        position: absolute;\n        background-color: ",";\n        width: 100%;\n        transform: scale(0, 1);\n        height: 1px;\n    }\n"]);return G=function(){return e},e}function X(){var e=Object(c.a)(["\n    border: none;\n    outline: none;\n    padding: 8px;\n    overflow: show;\n    \n    ","\n    \n    :placeholder-shown + div:before {\n        transform: scale(0, 1);\n    }\n    \n    :not(:placeholder-shown) + div:before {\n        transform: scale(1, 1);\n    }\n    \n    :focus + div:before {\n        transform: scale(1, 1);\n    }\n"]);return X=function(){return e},e}function K(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return K=function(){return e},e}var T=l.b.div(K()),H=l.b.input(X(),(function(e){return e.required?"\n    :valid + div {\n        background-color: green;\n    }\n    \n    :invalid + div:before {\n        background-color: red;\n    }\n    \n    :invalid + div {\n        background-color: red;\n    }\n    \n    :valid + div:before {\n        background-color: green;\n    } \n    ":""})),_=l.b.div(G(),(function(e){return e.theme.primary.main})),Z=function(e){var n=e.value,t=e.placeholder,r=e.required,o=e.onChange,i=e.type;Object(z.a)(e,["value","placeholder","required","onChange","type"]);return a.a.createElement(T,null,a.a.createElement(H,{type:i,onChange:o,value:n,placeholder:t,required:r}),a.a.createElement(_,null))},V=a.a.createContext(),Y={nickName:"tganz",fullName:"Tobias Ganzhorn",email:"tganzhorn@gmail.com",initials:"TG",progress:0},J=function(){var e=a.a.useContext(V),n=Object(p.a)(e,2);return[n[0],n[1]]},$=function(e){var n=e.children,t=a.a.useState(Y);return a.a.createElement(V.Provider,{value:t},n)};function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(){var e=Object(c.a)(["\n    padding: 0px 16px;\n    padding-bottom: 16px;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n\n"]);return te=function(){return e},e}var re=l.b.div(te()),ae=l.b.div(ne()),oe=function(e){Object(W.a)({},e);var n=J(),t=Object(p.a)(n,2),r=t[0],o=t[1],i=function(e,n){var t=e.target.value;switch(n){case"fullName":o((function(e){return ee({},e,{fullName:t})})),console.log(t,n);break;case"nickName":o((function(e){return ee({},e,{nickName:t})})),console.log(t,n);break;case"email":o((function(e){return ee({},e,{email:t})})),console.log(t,n);break;default:return}};return a.a.createElement(R,{title:"Profil"},a.a.createElement(re,null,a.a.createElement(ae,null,"Name",a.a.createElement(Z,{value:r.fullName,onChange:function(e){return i(e,"fullName")}})),a.a.createElement(ae,null,"Nickname",a.a.createElement(Z,{value:r.nickName,onChange:function(e){return i(e,"nickName")}})),a.a.createElement(ae,null,"Email Adresse",a.a.createElement(Z,{value:r.email,onChange:function(e){return i(e,"email")}}))))};function ie(){var e=Object(c.a)(["\n    position: absolute;\n    width: ","%;\n    background-color: green;\n    height: 100%;\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n    width: 100%;\n    height: 8px;\n    background-color: #ccc;\n    overflow: hidden;\n    position: relative;\n"]);return ce=function(){return e},e}var le=l.b.div(ce()),ue=l.b.div(ie(),(function(e){return 100*e.progress})),se=function(e){var n=e.progress;return a.a.createElement(le,null,a.a.createElement(ue,{progress:n}))},de=t(15),pe=t.n(de),fe=t(20);function me(){var e=Object(c.a)(["\n    position: relative;\n    transition: 0.1s ease background-color, 0.1 ease box-shadow;\n    padding: 16px;\n    margin: 8px;\n    border-radius: 4px;\n    text-align: center;\n    ","\n    background-color: ",";\n    color: ",";\n    overflow: hidden;\n"]);return me=function(){return e},e}var be=Object(f.a)(l.b.div(me(),(function(e){return e.theme.elevation[4]}),(function(e){return e.theme.primary.main}),(function(e){return e.theme.primary.color}))),ge=function(e){var n=e.children,t=e.onClick,r=g({duration:500,color:"rgba(255, 255, 255, 0.5)",size:10}),o=Object(p.a)(r,2),i=o[0],c=o[1],l=Object(f.c)((function(){return{config:f.b.wobbly}})),u=Object(p.a)(l,2),s=u[0],d=u[1];return a.a.createElement(be,{ref:i,style:s,onClick:function(){d({from:{transform:"scale(1.1)"},to:function(){var e=Object(fe.a)(pe.a.mark((function e(n,t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({transform:"scale(1.1)"});case 2:return e.next=4,n({transform:"scale(1)"});case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),t()}},c,n)};function ve(){var e=Object(c.a)(["\n    visibility: hidden;\n    width: 0;\n    height: 0;\n    margin: 0;\n    \n    :checked + div > div {\n        transform: scale(1);\n    }\n"]);return ve=function(){return e},e}function he(){var e=Object(c.a)(["\n    transition: 0.3s ease transform;\n    background-color: ",";\n    border-radius: 50%;\n    width: 8px;\n    height: 8px;\n    transform: scale(0);\n"]);return he=function(){return e},e}function xe(){var e=Object(c.a)(["\n    border-radius: 50%;\n    width: 8px;\n    height: 8px;\n    border: 2px solid ",";\n    background-color: transparent;\n    padding: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 16px;\n    ","\n"]);return xe=function(){return e},e}function ye(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return ye=function(){return e},e}function Oe(){var e=Object(c.a)(["\n    display: inline-block;\n    padding: 8px;\n    line-height: 0;\n    position: relative;\n    font-size: 10pt;\n"]);return Oe=function(){return e},e}var je=l.b.label(Oe()),Ee=l.b.div(ye()),we=l.b.div(xe(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.elevation[1]})),ke=l.b.div(he(),(function(e){return e.theme.secondary.main})),Pe=l.b.input(ve()),Ce=Object(l.c)((function(e){var n=e.children,t=e.theme,r=e.handleChange,o=e.value,i=e.checked,c=(Object(z.a)(e,["children","theme","handleChange","value","checked"]),g({duration:500,color:t.secondary.main+"AF",size:5},[11,11],"change")),l=Object(p.a)(c,2),u=l[0],s=l[1];return a.a.createElement(je,{ref:u},s,a.a.createElement(Ee,null,a.a.createElement(Pe,{value:o,onChange:r,type:"radio",checked:i}),a.a.createElement(we,null,a.a.createElement(ke,null)),n))}));function Se(){var e=Object(c.a)(["\n    padding: 16px;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n"]);return Se=function(){return e},e}function ze(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return ze=function(){return e},e}var De=l.b.div(ze()),Fe=l.b.form(Se()),Ne=function(e){var n=e.children,t=e.choices,r=e.solution,o=a.a.useState(0),i=Object(p.a)(o,2),c=i[0],l=i[1],u=function(e){l(parseInt(e.target.value))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(De,null,n),a.a.createElement(Fe,null,function(){for(var e=[],n=0;n<t.length;n++)e.push(a.a.createElement(Ce,{key:n,handleChange:u,value:n,checked:c===n},t[n]));return e}()),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:function(){return r(c)}},"L\xf6sung abgeben")))};function qe(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return qe=function(){return e},e}var Re=l.b.div(qe()),Ae=function(e){var n=e.children,t=e.next;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Re,null,n),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:t},"Weiter")))};function Ie(){var e=Object(c.a)(["\n    padding: 16px;\n"]);return Ie=function(){return e},e}var Le=l.b.div(Ie()),Ue=function(e){var n=e.children,t=e.solution,r=a.a.useState(""),o=Object(p.a)(r,2),i=o[0],c=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Le,null,n),a.a.createElement(Le,null,a.a.createElement("form",{onSubmit:function(e){t(parseFloat(i)),e.preventDefault()}},a.a.createElement(Z,{placeholder:"L\xf6sung",value:i,onChange:function(e){return c(e.target.value)}}))),a.a.createElement("div",{style:{padding:16}},a.a.createElement(ge,{onClick:function(){return t(parseFloat(i))}},"Rechnung abgeben")))},Be=t(33);function Me(){var e=Object(c.a)(["\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"]);return Me=function(){return e},e}var We=l.b.div(Me()),Ge=Object(f.a)(We);function Xe(){var e=Object(c.a)(["\n    color: white;\n    position: absolute;\n"]);return Xe=function(){return e},e}function Ke(){var e=Object(c.a)(["\n    text-align: center;\n    width: 200px;\n    display: inline-block;\n    padding: 16px;\n    color: ",";\n    background-color: ",";\n    border-radius: 4px;\n    ","\n"]);return Ke=function(){return e},e}function Te(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    color: transparent;\n    border-radius: 4px;\n    width: 200px;\n    margin: 0 auto;\n"]);return Te=function(){return e},e}var He=Object(f.a)(l.b.div(Te(),(function(e){return e.theme.primary.dark}))),_e=Object(f.a)(l.b.div(Ke(),(function(e){return e.theme.primary.color}),(function(e){return e.theme.primary.main}),(function(e){return e.theme.elevation[3]}))),Ze=Object(l.b)(Ge)(Xe()),Ve=function(e){var n=e.children,t=e.onClick,r=a.a.useRef(),o=a.a.useRef(),i=Object(f.c)((function(){return{x:0}})),c=Object(p.a)(i,2),l=c[0].x,u=c[1],s=Object(Be.a)((function(e){var n=e.down,a=e.movement;u({x:n&&a[0]>0?a[0]:0}),a[0]>r.current.offsetWidth&&t()}));return a.a.createElement(He,{ref:r},a.a.createElement(Ze,null,"send"),a.a.createElement(_e,Object.assign({ref:o},s(),{style:{transform:l.interpolate((function(e){return"translateX(".concat(e,"px)")}))}}),n))};function Ye(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Je(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ye(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $e=function(e){Object(W.a)({},e);var n=Object(A.h)(),t=(n.courseId,n.groupId,n.moduleId,function(e){e===i[u.progress].solution&&r()}),r=function(){s((function(e){return Je({},e,{progress:e.progress+1})}))},o=function(e){switch(i[u.progress].type){case"theory":return function(e){var n=e.theory;return a.a.createElement(Ae,{next:r},n)}(i[u.progress]);case"multiple-choice":return function(e){var n=e.question,r=e.choices;return a.a.createElement(Ne,{choices:r,solution:t},n)}(i[u.progress]);case"calculation":return function(e){var n=e.question;return a.a.createElement(Ue,{solution:t},n)}(i[u.progress]);default:return a.a.createElement("div",null,"Ups uns ist da ein Fehler unterlaufen.")}},i=function(e,n,t){return a.a.useContext(P)[e].children[n].children[t].children}("Gleichstromtechnik","Grundlagen","Strom, Spannung und Widerstand"),c=J(),l=Object(p.a)(c,2),u=l[0],s=l[1];return i.length>u.progress?a.a.createElement(a.a.Fragment,null,a.a.createElement(se,{progress:u.progress/i.length}),a.a.createElement(R,{title:i[u.progress].title},o(i[u.progress].type))):a.a.createElement(a.a.Fragment,null,a.a.createElement(se,{progress:1}),a.a.createElement(R,{title:"Ende Demo"},a.a.createElement("div",{style:{padding:16}},"Aufgaben gel\xf6st! ",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Ve,{onClick:function(){return s((function(e){return Je({},e,{progress:0})}))}},"Demo zur\xfccksetzen"))))},Qe=function(){return a.a.createElement(R,{title:"Einstellungen"},a.a.createElement("div",{style:{padding:16}},"Es gibt noch keine Einstellungen die du vornehmen kannst. Tut uns leid! :'("))};function en(){var e=Object(c.a)(["\n    width: 100%;\n    overflow: hidden;\n"]);return en=function(){return e},e}var nn=l.b.div(en()),tn=function(e){var n=Object(A.g)();return a.a.createElement(nn,null,a.a.createElement(A.c,{location:n},a.a.createElement(A.a,{exact:!0,path:"/course/:courseId"},a.a.createElement(I,null)),a.a.createElement(A.a,{exact:!0,path:"/"},a.a.createElement(M,null)),a.a.createElement(A.a,{exact:!0,path:"/profile"},a.a.createElement(oe,null)),a.a.createElement(A.a,{exact:!0,path:"/settings"},a.a.createElement(Qe,null)),a.a.createElement(A.a,{exact:!0,path:"/course/:courseId/:groupId/module/:moduleId"},a.a.createElement($e,null)),a.a.createElement(A.a,{exact:!0,path:"/slider"},a.a.createElement(Ve,null)),a.a.createElement(A.a,{exact:!0,path:"/radio"},a.a.createElement(Ce,null,"Falsche Antwort"),a.a.createElement(Ce,null,"Falsche Antwort"),a.a.createElement(Ce,null,"Falsche Antwort"))))};function rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function an(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?rn(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var on=a.a.createContext(),cn=[{user:"tganzhorn@gmail.com",password:"123",id:0}],ln={authenticated:!1,id:null},un=function(){var e=a.a.useContext(on),n=Object(p.a)(e,2),t=n[0],r=n[1];return[function(e,n){for(var t=0;t<cn.length;t++)if(e===cn[t].user&&n===cn[t].password)return r((function(e){return an({},e,{authenticated:!0})})),!0;return!1},function(){return r((function(e){return an({},e,{authenticated:!1})})),!0},t]},sn=function(e){var n=e.children,t=a.a.useState(ln);return a.a.createElement(on.Provider,{value:t},n)};function dn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?dn(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return fn=function(){return e},e}function mn(){var e=Object(c.a)(["\n    padding: 8px;\n"]);return mn=function(){return e},e}function bn(){var e=Object(c.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    color: #666;\n    font-size: 8pt;\n    padding: 16px;\n"]);return bn=function(){return e},e}function gn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    padding: 16px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    ","\n"]);return gn=function(){return e},e}var vn=l.b.div(gn(),(function(e){return e.theme.elevation[4]})),hn=l.b.div(bn()),xn=l.b.div(mn()),yn=l.b.form(fn()),On=function(e){var n=e.children,t=un(),r=Object(p.a)(t,1)[0],o=a.a.useState({user:"",password:""}),i=Object(p.a)(o,2),c=i[0],l=i[1],u=function(){var e=a.a.useContext(on);return Object(p.a)(e,1)[0].authenticated}(),s=Object(f.d)(u,null,{from:{position:"absolute",opacity:0},enter:{opacity:1,position:""},leave:{opacity:0,position:"absolute"}});return s.map((function(e){var t=e.item,o=(e.key,e.props);return t?a.a.createElement(f.a.div,{key:1,style:o},n):a.a.createElement(f.a.div,{key:0,style:o},a.a.createElement(a.a.Fragment,null,a.a.createElement(hn,null,"Alpha-Build 28.10.2019 | 17:54"),a.a.createElement(vn,null,a.a.createElement(xn,null,"Login"),a.a.createElement(yn,{onSubmit:function(e){e.preventDefault(),r(c.user,c.password)}},a.a.createElement(Z,{type:"text",placeholder:"Email Adresse",value:c.user,onChange:function(e){return l(pn({},c,{user:e.target.value}))}}),a.a.createElement(Z,{type:"password",placeholder:"Passwort",value:c.password,onChange:function(e){return l(pn({},c,{password:e.target.value}))}}),a.a.createElement("input",{type:"submit",style:{visibility:"hidden"}})))))}))},jn={primary:{main:"#0d47a1",light:"#5472d3",dark:"#002171",color:"#ffffff"},secondary:{main:"#ffa000",light:"#ffd149",dark:"#c67100",color:"#000000"},progress:{finished:"#000000",disabled:"#000000",unfinished:"#000000"},elevation:["box-shadow: none;","box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);","box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);","box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);","box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);","box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);","box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);","box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);","box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);","box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);","box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);"]},En=function(e){var n=e.children;return a.a.createElement(l.a,{theme:jn},a.a.createElement(sn,null,a.a.createElement($,null,a.a.createElement(S,null,n))))};function wn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function kn(){var e=Object(c.a)(["\n    width: calc(100% + 20px);\n    margin-left: -20px;\n    position: absolute;\n    height: 100%;\n    transform: translateX(100%);\n    background-image: linear-gradient(90deg, #0d47a100 0px,  #0d47a1ff 20px,  #0d47a1ff 100%);\n"]);return kn=function(){return e},e}function Pn(){var e=Object(c.a)(["\n    overflow: hidden;\n    position: relative;\n"]);return Pn=function(){return e},e}var Cn=Object(f.a)(l.b.div(Pn())),Sn=Object(f.a)(l.b.div(kn())),zn=function(e){var n=e.children,t=(Object(z.a)(e,["children"]),a.a.useState(n)),o=Object(p.a)(t,2),i=o[0],c=o[1];Object(r.useEffect)((function(){n.key!==i.key&&l()}));var l=function(){b(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?wn(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},g,{onRest:function(){c(n),b(v)}}))},u=Object(f.c)((function(){return{transform:"translateX(100%)"}})),d=Object(p.a)(u,2),m=d[0],b=d[1],g={from:{transform:"translateX(100%)"},to:{transform:"translateX(0%)"}},v={from:{transform:"translateX(0%)"},to:{transform:"translateX(100%)"}};return a.a.createElement(Cn,null,a.a.createElement(Sn,{style:m}),i)};function Dn(){var e=Object(c.a)(["\n    box-sizing: border-box;\n    line-height: 0;\n    transition: 0.3s ease transform, 0.3s ease background-color;\n    transform: ",";\n    background-color: ",";\n    overflow: hidden;\n    position: relative;\n    padding: 12px;\n    border-radius: 50%;\n"]);return Dn=function(){return e},e}var Fn=l.b.div(Dn(),(function(e){return e.active?"rotateZ(-90deg)":"none"}),(function(e){return e.active?"rgba(0, 0, 0, 0.25)":"transparent"})),Nn=function(e){var n=e.onClick,t=e.active,r=g(),o=Object(p.a)(r,2),i=o[0],c=o[1];return a.a.createElement(Fn,{ref:i,active:t,onClick:n},c,a.a.createElement(Ge,null,"menu"))};function qn(){var e=Object(c.a)(["\n    color: ",";\n    background-color: ",";\n    padding: 4px 16px;\n    display: flex;\n    align-items: center;\n    \n    ","\n"]);return qn=function(){return e},e}function Rn(){var e=Object(c.a)(["\n    position: sticky;\n    top: 0;\n    left: 0;\n    z-index: 900;\n"]);return Rn=function(){return e},e}var An=l.b.div(Rn()),In=l.b.div(qn(),(function(e){return e.theme.primary.color}),(function(e){return e.theme.primary.main}),(function(e){return e.theme.elevation[6]})),Ln=function(e){var n=e.sideNavHandle,t=e.active;return a.a.createElement(An,null,a.a.createElement(In,null,a.a.createElement(Nn,{onClick:n,active:t}),a.a.createElement(zn,null,"eLearning App")))};function Un(){var e=Object(c.a)(["\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 12px;\n    color: ",";\n    \n    ","\n"]);return Un=function(){return e},e}var Bn=Object(f.a)(l.b.div(Un(),(function(e){return e.color.color}),(function(e){switch(e.size){case"small":return"padding: 8px";case"medium":return"padding: 12px";case"large":return"padding: 16px";default:return"padding: 8px"}}))),Mn=Object(l.c)((function(e){var n=e.size,t=e.icon,r=e.onClick,o=void 0===r?function(){}:r,i=e.color,c=e.theme;i=i||{main:c.secondary.main,highlight:c.secondary.light,color:c.secondary.color};var l=g({color:"rgba(255, 255, 255, 0.5)",size:10,duration:500}),u=Object(p.a)(l,2),s=u[0],d=u[1],m=Object(f.c)((function(){return{transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1),config:f.b.wobbly}})),b=Object(p.a)(m,2),v=b[0],h=b[1];return a.a.createElement(Bn,{size:n,ref:s,style:v,color:i,onClick:function(){o(),h({from:{transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1)},to:function(){var e=Object(fe.a)(pe.a.mark((function e(n,t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({transform:"scale(1.25)",backgroundColor:i.highlight,boxShadow:c.elevation[7].slice(12,-1)});case 2:return e.next=4,n({transform:"scale(1)",backgroundColor:i.main,boxShadow:c.elevation[5].slice(12,-1)});case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()})}},d,a.a.createElement(Ge,null,t))}));function Wn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 8px;\n    \n    > div {\n        margin-bottom: 8px;\n    }\n"]);return Wn=function(){return e},e}function Gn(){var e=Object(c.a)(["\n    display: inline-block;\n    user-select: none;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    z-index: 900;\n    padding: 16px;\n"]);return Gn=function(){return e},e}var Xn=l.b.div(Gn()),Kn=Object(f.a)(l.b.div(Wn())),Tn=Object(l.c)((function(e){var n=a.a.useState(!1),t=Object(p.a)(n,2),r=t[0],o=t[1],i=Object(f.c)({transform:r?"translateY(0)":"translateY(200%)",config:f.b.gentle}),c=function(e,n){var t=a.a.useRef(),r=a.a.useState(!1),o=Object(p.a)(r,2),i=o[0],c=o[1],l=a.a.useCallback((function(r){(n||void 0===n)&&(t.current&&!t.current.contains(r.target)&&t.current!==r.target?(c(!0),e()):c(!1))}),[e,n,c,t]);return a.a.useEffect((function(){return document.addEventListener("click",l),function(){document.removeEventListener("click",l)}}),[i,l]),t}((function(){return o(!1)})),l=Object(A.f)(),u=function(){window.setTimeout((function(){return o(!1)}),500)};return a.a.createElement(Xn,{ref:c},a.a.createElement(Kn,{style:i},a.a.createElement(Mn,{size:"medium",color:{main:e.theme.primary.main,highlight:e.theme.primary.light,color:e.theme.primary.color},icon:"home",onClick:function(){l.push("/","Startseite"),u()}}),a.a.createElement(Mn,{size:"medium",color:{main:"#2e7d32",highlight:"#60ad5e",color:"#ffffff"},icon:"fullscreen",onClick:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),u()}}),a.a.createElement(Mn,{size:"medium",color:{main:"#d84315",highlight:"#ff7543",color:"#000000"},icon:"local_library"}),a.a.createElement(Mn,{size:"medium",color:{main:"#6a1b9a",highlight:"#9c4dcc",color:"#ffffff"},icon:"note"})),a.a.createElement(Mn,{icon:"add",size:"large",animation:{from:"rotateZ(0deg)",to:"rotateZ(405deg)"},active:r,onClick:function(){o(!r)}}))}));function Hn(){var e=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 300px;\n    height: 100vh;\n    z-index: 1200;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n    display: flex;\n"]);return Hn=function(){return e},e}var _n=Object(f.a)(l.b.div(Hn()));function Zn(){var e=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: 1100;\n    background-color: rgba(0, 0, 0, 0.5);\n"]);return Zn=function(){return e},e}var Vn=Object(f.a)(l.b.div(Zn()));function Yn(){var e=Object(c.a)(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: stretch;\n    width: 100%;\n    \n    > li:first-child {\n        border: none;\n    }\n"]);return Yn=function(){return e},e}var Jn=l.b.ul(Yn());function $n(){var e=Object(c.a)(["\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-decoration: none;\n\n    transition: 0.3s ease background-color;\n    padding: 16px;\n    \n    :hover {\n        background-color: #ccc;\n    }\n    \n    border-top: 1px solid #ccc;\n"]);return $n=function(){return e},e}var Qn=l.b.li($n()),et=function(e){var n=e.children,t=e.style,r=e.onClick,o=g({duration:2e3,color:"rgba(0, 0, 0, 0.5)",size:50}),i=Object(p.a)(o,2),c=i[0],l=i[1];return a.a.createElement(Qn,{ref:c,style:t,onClick:r},l,n)};function nt(){var e=Object(c.a)(["\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      background-color: ",";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 12pt;\n      color: ",";\n"]);return nt=function(){return e},e}var tt=l.b.div(nt(),(function(e){return e.theme.secondary.main}),(function(e){return e.theme.secondary.color}));function rt(){var e=Object(c.a)(["\n    color: #bbb;\n    font-size: 8pt;\n"]);return rt=function(){return e},e}function at(){var e=Object(c.a)(["\n    font-size: 12pt;\n"]);return at=function(){return e},e}function ot(){var e=Object(c.a)(["\n    flex-grow: 1;\n    margin-left: 16px;\n    color: white;\n"]);return ot=function(){return e},e}var it=l.b.div(ot()),ct=l.b.div(at()),lt=l.b.div(rt()),ut=function(e){return a.a.createElement(it,null,a.a.createElement(ct,null,e.children),a.a.createElement(lt,null,e.subtitle))},st=Object(l.c)((function(e){var n=e.active,t=e.sideNavHandle,r=e.theme,o=Object(f.c)({opacity:n?1:0,transform:n?0:-310}),i=o.opacity,c=o.transform,l=(Object(A.g)().state,J()),s=Object(p.a)(l,1)[0],d=un(),m=Object(p.a)(d,2),b=(m[0],m[1]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(_n,{style:{transform:c.interpolate((function(e){return"translateX(".concat(e,"px)")})),visibility:i.interpolate((function(e){return e>0?"visible":"hidden"}))}},a.a.createElement(Jn,null,a.a.createElement(u.b,{to:{pathname:"/profile",state:"Profil"},style:{textDecoration:"none"}},a.a.createElement(et,{style:{backgroundColor:r.primary.main,paddingBottom:24,paddingTop:24}},a.a.createElement(tt,null,s.initials),a.a.createElement(ut,{subtitle:s.email},s.fullName))),a.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/settings",state:"Einstellungen"}},a.a.createElement(et,null,"Einstellungen")),a.a.createElement(et,{onClick:b},"Logout"))),a.a.createElement(Vn,{onClick:function(){return t(!1)},style:{opacity:i.interpolate((function(e){return e})),visibility:i.interpolate((function(e){return e>0?"visible":"hidden"}))}}))}));function dt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pt(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?dt(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dt(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ft=function(e){Object(W.a)({},e);var n=a.a.useState({sideNav:!1}),t=Object(p.a)(n,2),r=t[0],o=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!r;o(pt({},r,{sideNav:e}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(st,{active:r.sideNav,sideNavHandle:i}),a.a.createElement(Ln,{active:r.sideNav,sideNavHandle:i}),a.a.createElement(Tn,null))};var mt=function(){return a.a.createElement(u.a,null,a.a.createElement(En,null,a.a.createElement(On,null,a.a.createElement(ft,null),a.a.createElement(tn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.58d753da.chunk.js.map