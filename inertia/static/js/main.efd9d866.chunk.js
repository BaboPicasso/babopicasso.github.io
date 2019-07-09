(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(133)},105:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(105),a(172)),c=a(174),s=a(50),u=a(194),m=a(176),d=a(32),p=a(34),E=a(175),g=a(14),b=Object(p.g)(function(e){var t=Object(g.c)(function(e){return e}),a=function(e){switch(e){case"calibration":return!(t.availableSensors.gyroscope||t.availableSensors.gyroscope);case"evaluation":return null===t.calibration.measurement1||null===t.calibration.measurement2||""===t.calibration.inertia;default:return!1}};return r.a.createElement(i.a,{position:"sticky"},r.a.createElement(c.a,null,r.a.createElement(E.a,{style:{paddingRight:12}},"3d_rotation"),r.a.createElement(s.a,{variant:"h6"},"Tr\xe4gheitsmoment App")),r.a.createElement(u.a,{variant:"scrollable",value:e.location.pathname,scrollButtons:"on"},r.a.createElement(m.a,{component:d.a,label:"Start",to:"/",value:"/"}),r.a.createElement(m.a,{component:d.a,label:"Einstellung",to:"/settings",value:"/settings"}),r.a.createElement(m.a,{component:d.a,label:"Kalibrierung",to:"/calibration",value:"/calibration",disabled:a("calibration")}),r.a.createElement(m.a,{component:d.a,label:"Bestimmung",to:"/evaluation",value:"/evaluation",disabled:a("evaluation")})))}),y=a(177),f=a(178),h=a(197),v=a(195),T=a(179),S=a(180),O=a(198),j=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.availableSensors}),n=Object(g.c)(function(e){return e.settings});return r.a.createElement("div",null,r.a.createElement(s.a,{variant:"body1",component:"p",align:"justify"},"W\xe4hlen Sie hier bitte ihren gew\xfcnschten Sensor aus, sollte einer ausgegraut sein so kann nur der andere Sensor benutzt werden."),r.a.createElement("br",null),r.a.createElement(y.a,null,r.a.createElement(f.a,null,"Sensor"),r.a.createElement(h.a,{onChange:function(e,a){return function(e,a){t({type:"SENSOR_TYPE",payload:{sensorType:a}})}(0,a)},value:n.sensorType},r.a.createElement(T.a,{value:"gyroscope",disabled:!a.gyroscope,control:r.a.createElement(v.a,null),label:"Gyroskop"}),r.a.createElement(T.a,{value:"accelerometer",disabled:!a.accelerometer,control:r.a.createElement(v.a,null),label:"Beschleunigungssensor"}))),r.a.createElement(S.a,{style:{margin:"18px 0 18px 0"}}),r.a.createElement(s.a,{variant:"body1",component:"p",align:"justify"},"Hier k\xf6nnen Sie die Messdauer und Messverz\xf6gerung einstellen."),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"body1",component:"p",color:"textSecondary",align:"justify",gutterBottom:!0},"Messdauer in Sekunden"),r.a.createElement(O.a,{defaultValue:30,step:5,max:120,min:10,valueLabelDisplay:"auto",onChange:function(e){return function(e){t({type:"DURATION",payload:{duration:1e3*parseInt(e.target.textContent)}})}(e)}}),r.a.createElement(s.a,{variant:"body1",component:"p",color:"textSecondary",align:"justify",gutterBottom:!0},"Messverz\xf6gerung in Sekunden"),r.a.createElement(O.a,{defaultValue:2,step:1,max:10,min:0,valueLabelDisplay:"auto",onChange:function(e){return function(e){console.log(e.target.textContent),t({type:"DELAY",payload:{delay:1e3*parseInt(e.target.textContent)}})}(e)}}))},w=a(184),x=a(183),A=a(186),I=a(187),N=a(181),R=a(182),k=a(193),z=function(e,t,a,n){var r=function(){o(),n(l),window.removeEventListener("devicemotion",i,!1)},l={x:[],y:[],z:[],timeStamp:[],T:null},o=function(){var e=l.z,t=l.timeStamp;if("accelerometer"===a){for(var n=[],r=0;r<l.x.length;r++)n.push(l.x[r]+l.y[r]);e=n}for(var o=[],i=Math.sign(e[0]),c=1;c<e.length;c++)i!==Math.sign(e[c])&&(o.push(t[c]/1e3),i*=-1);for(var s=0,u=0;u<o.length-1;u++)s+=o[u+1]-o[u];s=s/(o.length-1)*2,l.T=s},i=function(e){"accelerometer"===a&&(l.x.push(e.acceleration.x),l.y.push(e.acceleration.y),l.z.push(e.acceleration.z)),"gyroscope"===a&&(l.x.push(e.rotationRate.alpha),l.y.push(e.rotationRate.beta),l.z.push(e.rotationRate.gamma)),l.timeStamp.push(e.timeStamp)};window.setTimeout(function t(){window.addEventListener("devicemotion",i),window.setTimeout(r,e),window.clearTimeout(t)},t)},M=function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},C=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.settings}),n=Object(g.c)(function(e){return e.calibration}),l=function(e){1===e&&z(a.duration,a.delay,a.sensorType,o),2===e&&z(a.duration,a.delay,a.sensorType,i),t({type:"MEASURING"})},o=function(e){t({type:"CALIBRATION1",payload:{measurement:e}}),t({type:"MEASURING"})},i=function(e){t({type:"CALIBRATION2",payload:{measurement:e}}),t({type:"MEASURING"})};return r.a.createElement("div",null,r.a.createElement(s.a,{variant:"body1",component:"div",align:"justify",gutterBottom:!0},"F\xfchren Sie nacheinander die 2 Kalibrierungsmessungen durch, beachten Sie dabei die erw\xe4hnten Richtlinien. Geben Sie bitte auch das bekannte Tr\xe4gheitsmoment in das Textfeld ein."),r.a.createElement("br",null),r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement(x.a,{color:"primary",variant:"contained"},r.a.createElement(w.a,{onClick:function(){return l(1)}},"Messung 1"),r.a.createElement(w.a,{onClick:function(){return l(2)},disabled:null===n.measurement1},"Messung 2"))),r.a.createElement("br",null),r.a.createElement(k.a,{label:"Bekanntes Tr\xe4gheitsmoment",component:"div",multiline:!0,fullWidth:!0,rows:1,onChange:function(e){return function(e){t({type:"INERTIA",payload:{inertia:e.target.value}})}(e)},value:a.inertia}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement(R.a,null,"Messung"),r.a.createElement(R.a,null,"T in s"),r.a.createElement(R.a,null,"f in Hz")),[n.measurement1,n.measurement2].map(function(e,t){return null===e?r.a.createElement(N.a,{key:t}):r.a.createElement(N.a,{key:t},r.a.createElement(R.a,null,t),r.a.createElement(R.a,null,M(e.T,4)),r.a.createElement(R.a,null,M(1/e.T,4)))}))))},B=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.evaluation.measurements}),n=Object(g.c)(function(e){return e.settings}),l=Object(g.c)(function(e){return e.calibration});console.log(a);var o=function(e){t({type:"EVALUATION",payload:{measurement:e}}),t({type:"MEASURING"})};return r.a.createElement("div",null,r.a.createElement(s.a,{variant:"body1",gutterBottom:!0,align:"justify"},"Hier k\xf6nnen Sie das Tr\xe4gheitsmoment nach erfolgter Messung berechnen. Daf\xfcr m\xfcssen Sie nur noch das Bekannte Tr\xe4gheitsmoment eintragen."),r.a.createElement("br",null),r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement(w.a,{color:"primary",variant:"contained",onClick:function(){return z(n.duration,n.delay,n.sensorType,o),void t({type:"MEASURING"})}},"Tr\xe4gheitsmoment messen")),r.a.createElement("br",null),r.a.createElement(A.a,{size:"small"},r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement(R.a,null,"Messung"),r.a.createElement(R.a,null,"T in s"),r.a.createElement(R.a,null,"f in Hz"),r.a.createElement(R.a,null,"J in Nm")),a.map(function(e,t){return r.a.createElement(N.a,{key:t},r.a.createElement(R.a,null,t),r.a.createElement(R.a,null,M(e.T,4)),r.a.createElement(R.a,null,M(1/e.T,4)),r.a.createElement(R.a,null,(a=parseFloat(l.inertia),n=l.measurement1.T,o=l.measurement2.T,i=e.T,(a=parseFloat(a))*(i*i-n*n)/(o*o-n*n)).toExponential(4)));var a,n,o,i}))))},L=a(41),_=a.n(L),U=a(185),G=a(188),D=a(189),Y=function(e){return r.a.createElement(_.a.Provider,null,r.a.createElement(s.a,{variant:"body1",component:"div",align:"justify"},"Bitte lesen Sie sich alle Reiter durch und arbeiten diese ab. Um die Bestimmung des Tr\xe4gheitsmomentes durchf\xfchren zu k\xf6nnen m\xfcssen Sie zuerst die Kalibrierung durchf\xfchren."),r.a.createElement("br",null),r.a.createElement(S.a,null),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"body1",component:"div",align:"justify"},"Die dieser App zugrundliegende Formel f\xfcr die Bestimmung des Tr\xe4gheitsmomentes lautet:",r.a.createElement(_.a.Node,{formula:"J_x = J_1 \\cdot \\frac{T_x^2-T_0^2}{T_1^2-T_0^2}"})),r.a.createElement(s.a,{variant:"body1",component:"div",align:"justify"},"Um das Tr\xe4gheitsmoment ",r.a.createElement(_.a.Node,{inline:!0,formula:"J_x"})," zu bestimmen m\xfcssen 3 Messungen durchgef\xfchrt werden:",r.a.createElement(U.a,null,r.a.createElement(G.a,null,r.a.createElement(D.a,null,r.a.createElement(_.a.Node,{inline:!0,formula:"T_0"}),": wird nur mit dem Smartphone auf dem Drehteller durchgef\xfchrt.")),r.a.createElement(G.a,null,r.a.createElement(D.a,null,r.a.createElement(_.a.Node,{inline:!0,formula:"T_1"}),": wiederum mit einem Objekt dessen Tr\xe4gheitsmoment um die gew\xfcnschte Achse bekannt ist.")),r.a.createElement(G.a,null,r.a.createElement(D.a,null,r.a.createElement(_.a.Node,{inline:!0,formula:"T_x"}),": wird mit einem beliebigen K\xf6rper dessen Tr\xe4gheitsmoment bestimmt werden soll durchgef\xfchrt.")))))},J=a(192),V=a(54),F=a(62),H=a(16),P={measuring:!1,availableSensors:{gyroscope:!0,accelerometer:!0},settings:{sensorType:null,duration:3e4,delay:2e3},calibration:{inertia:"",measurement1:null,measurement2:null},evaluation:{measurements:[]}};var K=a(190),W=a(191),X=Object(K.a)(function(e){return{root:{position:"fixed",height:"100%",width:"100%",top:"50%",left:"50%",backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",transform:"translateX(-50%) translateY(-50%) scaleX(0) scaleY(0)",transition:"all 0.2s ease",opacity:0},active:{transform:"translateX(-50%) translateY(-50%) scaleX(1) scaleY(1)",opacity:1}}}),$=function(e){var t=X(),a=Object(g.c)(function(e){return e.measuring}),l=Object(g.c)(function(e){return e.settings.duration+e.settings.delay}),o=Object(g.b)();return Object(n.useEffect)(function(){return window.setTimeout(function(){a&&o({type:"MEASURING"})},1e3*l),window.clearTimeout(function(){a&&o({type:"MEASURING"})})}),r.a.createElement("div",{className:t.root+" "+(a?t.active:"")},r.a.createElement(W.a,{color:"secondary",size:100,thickness:2}))},q=a(69),Q=a(196),Z=function(e){Object(g.c)(function(e){return e.availableSensors.gyroscope||e.availableSensors.accelerometer});var t,a=Object(g.b)();return t=function(e){a({type:"AVAILABLE_SENSORS",payload:e}),e.gyroscope?a({type:"SENSOR_TYPE",payload:{sensorType:"gyroscope"}}):e.accelerometer&&a({type:"SENSOR_TYPE",payload:{sensorType:"accelerometer"}})},window.addEventListener("devicemotion",function e(a){t({gyroscope:null!==a.rotationRate.alpha,accelerometer:null!==a.acceleration.x}),window.removeEventListener("devicemotion",e)}),r.a.createElement(Q.a,{open:!1,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{backgroundColor:"white",padding:30,margin:20,borderRadius:5,display:"flex",alignItems:"center"}},r.a.createElement(E.a,{style:{paddingRight:20,color:"red"}},"error"),r.a.createElement(s.a,null,"Ihr Ger\xe4t / Browser wird leider nicht unterst\xfctzt!")))},ee=Object(K.a)(function(e){return{footer:{bottom:0,backgroundColor:e.palette.grey[300],color:e.palette.text.secondary,position:"fixed"},disclaimer:{backgroundColor:e.palette.grey[200]},copyright:{padding:6,fontSize:10}}}),te=function(){var e=ee();return r.a.createElement("footer",{className:e.footer},r.a.createElement("div",{className:e.disclaimer},r.a.createElement(J.a,null,r.a.createElement(s.a,{variant:"body2",style:{padding:"12px 0 12px 0"}},"Sollten Sie Fragen haben wenden Sie sich bitte an ",r.a.createElement("a",{href:"mailto:tganzhorn@gmail.com"},"tganzhorn@gmail.com"),"."))),r.a.createElement(s.a,{variant:"body2",className:e.copyright},r.a.createElement(E.a,{style:{fontSize:8}},"copyright"),"Tobias Ganzhorn, 2019"))},ae=Object(V.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AVAILABLE_SENSORS":return Object(H.a)({},e,{availableSensors:{gyroscope:t.payload.gyroscope,accelerometer:t.payload.accelerometer}});case"DURATION":return Object(H.a)({},e,{settings:Object(H.a)({},e.settings,{duration:parseInt(t.payload.duration)})});case"DELAY":return Object(H.a)({},e,{settings:Object(H.a)({},e.settings,{delay:parseInt(t.payload.delay)})});case"SENSOR_TYPE":return Object(H.a)({},e,{settings:Object(H.a)({},e.settings,{sensorType:t.payload.sensorType})});case"CALIBRATION1":return Object(H.a)({},e,{calibration:Object(H.a)({},e.calibration,{measurement1:t.payload.measurement})});case"CALIBRATION2":return Object(H.a)({},e,{calibration:Object(H.a)({},e.calibration,{measurement2:t.payload.measurement})});case"INERTIA":return Object(H.a)({},e,{calibration:Object(H.a)({},e.calibration,{inertia:t.payload.inertia})});case"EVALUATION":return Object(H.a)({},e,{evaluation:{measurements:[].concat(Object(F.a)(e.evaluation.measurements),[t.payload.measurement])}});case"MEASURING":return Object(H.a)({},e,{measuring:!e.measuring});default:return e}});function ne(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function re(e){return Object(q.b)(e,{stiffness:500,damping:20})}var le={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:re(0),scale:re(.8)},atActive:{opacity:re(1),scale:re(1)}},oe=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},r.a.createElement(g.a,{store:ae},r.a.createElement(b,null),r.a.createElement($,null),r.a.createElement(Z,null),r.a.createElement(J.a,{style:{paddingTop:"18px"}},r.a.createElement(q.a,{atEnter:le.atEnter,atLeave:le.atLeave,atActive:le.atActive,mapStyles:ne,className:"switch-wrapper"},r.a.createElement(p.b,{path:"/",exact:!0,component:Y}),r.a.createElement(p.b,{path:"/settings",exact:!0,component:j}),r.a.createElement(p.b,{path:"/calibration",exact:!0,component:C}),r.a.createElement(p.b,{path:"/evaluation",exact:!0,component:B})))),r.a.createElement(te,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.efd9d866.chunk.js.map