(this["webpackJsonpvirtual-smart-home-controller"]=this["webpackJsonpvirtual-smart-home-controller"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(7),s=n.n(a),i=(n(17),n(8)),l=n(9),r=n(12),m=n(11),g=(n(18),n(10)),d=n.n(g),h=n(23),u=n(24),b=n(25),j=n(26),p=n(1),y=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={subject:"VirtualSmartHome/v2/",host:"broker.emqx.io",port:"8084",rooms:[{Name:"Bedroom_1",displayStyle:"block"},{Name:"Bedroom_2",displayStyle:"block"},{Name:"Bedroom_3",displayStyle:"block"},{Name:"Hallway_1F",displayStyle:"block"},{Name:"Bathroom_1F",displayStyle:"block"},{Name:"Bathroom_GF",displayStyle:"block"},{Name:"Kitchen",displayStyle:"block"},{Name:"Stairs",displayStyle:"block"},{Name:"Living_Room",displayStyle:"block"},{Name:"Cloakroom",displayStyle:"block"}],topic:"",client:{},messages:[],connected:!1},e.toggleConnect=function(){e.state.connected?(console.log("Disconnect"),e.startDisconnect()):(console.log("Connect"),e.startConnect())},e.startConnect=function(){var t="clientID-"+parseInt(100*Math.random()),n=new d.a.Client(e.state.host,Number(e.state.port),t);console.log(n),n.onConnectionLost=e.onConnectionLost,n.onMessageArrived=e.onMessageArrived,n.connect({onSuccess:e.onConnect,useSSL:!0}),e.setState({client:n})},e.onConnect=function(){for(var t=0;t<e.state.rooms.length;t++){var n="".concat(e.state.subject).concat(e.state.rooms[t].Name,"/Light");e.state.client.subscribe(n)}e.setState({connected:!0})},e.onConnectionLost=function(t){console.log("onConnectionLost: Connection Lost"),0!==t.errorCode&&console.log("onConnectionLost: "+t.errorMessage),e.setState({connected:!1})},e.changeLight=function(t,n){var o=t.substring(e.state.subject.length,t.indexOf("/Light"));console.log("Payload",n),console.log("Room Name",o),console.log("State",e.state),console.log("destination",t);var c=e.state.rooms.map((function(e){return e.Name===o&&(e.LightOn="1"===n,console.log("Room",e)),e}));e.setState({rooms:c})},e.toggleLight=function(t){if(e.state.connected){var n=e.state.rooms.find((function(e){return e.Name===t})).LightOn;e.state.client.publish("".concat(e.state.subject).concat(t,"/Light"),n?"0":"1",0,!0)}},e.onMessageArrived=function(t){console.log("onMessageArrived: "+t.payloadString),e.changeLight(t.destinationName,t.payloadString)},e.startDisconnect=function(){e.state.client.disconnect()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(h.a,{fluid:!0,className:"text-center bg-dark text-light",children:[Object(p.jsx)(u.a,{className:"py-4",children:Object(p.jsx)(b.a,{children:Object(p.jsx)("h1",{children:"Connected Homes Controller"})})}),Object(p.jsx)(u.a,{className:"my-5",children:Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{variant:this.state.connected?"danger":"success",onClick:function(){return e.toggleConnect()},children:this.state.connected?"Disconnect":"Connect"})})}),this.state.rooms.map((function(t){return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b.a,{xs:"6",className:"text-right",children:t.Name}),Object(p.jsx)(b.a,{xs:"2",children:Object(p.jsxs)("div",{className:"toggleWrapper",children:[Object(p.jsx)("input",{type:"checkbox",name:"toggle_".concat(t.Name),className:"mobileToggle",id:"toggle_".concat(t.Name),checked:e.state.rooms.find((function(e){return e.Name===t.Name})).LightOn,onChange:function(){return e.toggleLight(t.Name)}}),Object(p.jsx)("label",{htmlFor:"toggle_".concat(t.Name)})]})})]},t.Name)}))]})}}]),n}(o.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.19f100e0.chunk.js.map