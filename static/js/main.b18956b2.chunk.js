(this["webpackJsonptfjs-web-app"]=this["webpackJsonptfjs-web-app"]||[]).push([[0],{311:function(e,t,a){},324:function(e,t,a){},331:function(e,t){},332:function(e,t){},340:function(e,t){},343:function(e,t){},344:function(e,t){},345:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(10),l=a(13),o=a(14),r=a(9),i=a.n(r),c=a(204),d=a.n(c),u=a(125),m=(a(310),a(311),a(116)),p=a(359),h=a(362),f=a(302),b=a(363),g=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.show?i.a.createElement(b.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0},this.props.title&&i.a.createElement("h5",null,i.a.createElement("strong",null,this.props.title)),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}})):null}}]),a}(r.Component),w=(a(324),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"About container"},i.a.createElement("h1",null,"About"),i.a.createElement("p",null,i.a.createElement("b",null,"Our Product")),i.a.createElement("p",null,"EWH Portable Microscopy Software for Parasitic Infection Diagnosis This is a TensorFlow.js web application where users can classify images selected locally or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js format to provide the inference capabilities. This model is saved locally in the browser using IndexedDB. A service worker is also used to provide offline capabilities.",i.a.createElement("br",null),i.a.createElement("br",null),"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021 developed and trained a convolutional neural network to identify soil transmitted helminths in fecal samples. Soil transmitted helminth infections affect nearly 1 billion people globally, and are typically treated through mass drug administration without diagnosis. Through this webpage, you can upload images of fecal samples and our network will check for Soil Transmitted Helminths and output a diagnosis.",i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("p",null,i.a.createElement("b",null,"Our Team")),i.a.createElement("p",null,"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021"),i.a.createElement("h1",null,"Contact Us for Suggestions"),i.a.createElement("p",null,"If you\u2019d like to contact us for any clarifications, questions, or suggestions to this webpage and/or convolutional neural network, please contact us at",i.a.createElement("br",null),"* rkunowsk@ucsd.edu",i.a.createElement("br",null),"* s2pai@ucsd.edu",i.a.createElement("br",null),"Or fill out this google form:",i.a.createElement("a",null," https://forms.gle/5vp3nQWbFB64kzQR9 ")))}}]),a}(r.Component)),v=a(4),E=a.n(v),y=a(12),x=a(358),k=a(357),S=a(297),C=a(364),O=a(360),j=a(361),U=a(365),A=a(227),T=a(303),N=a(277),I=a.n(N),M=a(65),W=a(304),L=function(e){var t=e.isLoading,a=e.text,n=e.loadingText,s=e.className,l=void 0===s?"":s,o=e.disabled,r=void 0!==o&&o,c=Object(W.a)(e,["isLoading","text","loadingText","className","disabled"]);return i.a.createElement(k.a,Object.assign({className:"LoadButton ".concat(l),disabled:r||t},c),t&&i.a.createElement(x.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?n:a)},F={0:"Negative for STH",1:"Hookwork",2:"Ascaris",3:"Trichuris",4:"Positive for STH",5:"Inconclusive: Please run again"},P="http://localhost:5000/api",D=(a(345),a(346),"/model/model.json"),H=100,B=224,z="model_info_store",R="web-model",K=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).initWebcam=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.b.webcam(s.refs.webcam,{resizeWidth:B,resizeHeight:B,facingMode:"environment"});case 3:s.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),s.startWebcam=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.webcam&&s.webcam.start();case 1:case"end":return e.stop()}}),e)}))),s.stopWebcam=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.webcam&&s.webcam.stop();case 1:case"end":return e.stop()}}),e)}))),s.getModelInfo=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/model_info"),{method:"GET"}).then(function(){var e=Object(y.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then((function(e){s.modelLastUpdated=e.last_updated})).catch((function(e){console.log("Unable to get parse model info.")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Unable to get model info")}));case 2:case"end":return e.stop()}}),e)}))),s.updateModel=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: web-model"),s.setState({isDownloadingModel:!0}),e.next=4,M.d(D);case 4:return s.model=e.sent,e.next=7,s.model.save("indexeddb://web-model");case 7:s.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}}),e)}))),s.classifyLocalImage=Object(y.a)(E.a.mark((function e(){var t,a,n,l,o,r,i,c,d,u,m;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({isClassifying:!0}),t=s.refs.cropper.getCroppedCanvas(),a=M.e((function(){return M.a.fromPixels(t).toFloat()})),e.next=5,s.processImage(a);case 5:return n=e.sent,l=M.c.resizeBilinear(n,[H,H]),o=s.model.predict(l),e.next=10,o.data();case 10:return r=e.sent,e.next=13,s.getTopKClasses(r,1);case 13:i=e.sent,s.setState({predictions:i,isClassifying:!1,photoSettingsOpen:!s.state.photoSettingsOpen}),c=s.refs.canvas.getContext("2d"),d=B/t.width,u=B/t.height,m=Math.min(d,u),c.clearRect(0,0,B,B),c.drawImage(t,0,0,t.width*m,t.height*m),a.dispose(),n.dispose(),l.dispose(),o.dispose();case 25:case"end":return e.stop()}}),e)}))),s.classifyWebcamImage=Object(y.a)(E.a.mark((function e(){var t,a,n,l,o,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({isClassifying:!0}),e.next=3,s.webcam.capture();case 3:return t=e.sent,a=M.c.resizeBilinear(t,[H,H]),e.next=7,s.processImage(a);case 7:return n=e.sent,l=s.model.predict(n),e.next=11,l.data();case 11:return o=e.sent,e.next=14,s.getTopKClasses(o,1);case 14:return r=e.sent,s.setState({predictions:r,isClassifying:!1,photoSettingsOpen:!s.state.photoSettingsOpen}),i=M.e((function(){return t.toFloat().div(255)})),e.next=19,M.a.toPixels(i,s.refs.canvas);case 19:a.dispose(),t.dispose(),n.dispose(),l.dispose(),i.dispose();case 24:case"end":return e.stop()}}),e)}))),s.processImage=function(){var e=Object(y.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.e((function(){return t.expandDims(0).toFloat()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getTopKClasses=function(){var e=Object(y.a)(E.a.mark((function e(t,a){var n,s,l,o,r,i,c,d,u,m;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t.length>1){for(s=[],l=0;l<t.length;l++)s.push({value:t[l],index:l});for(s.sort((function(e,t){return t.value-e.value})),o=new Float32Array(a),r=new Int32Array(a),i=0;i<a;i++)o[i]=s[i].value,r[i]=s[i].index;for(c=[],d=0;d<r.length;d++)c.push({className:F[r[d]],probability:o[d].toFixed(5)})}else u=t[0],m=5,u<.5?(m=0,u=100*(1-u)):u>.5&&(m=4,u*=100),n.push({className:F[m],probability:u.toFixed(2)});return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s.handlePanelClick=function(e){s.setState({photoSettingsOpen:!s.state.photoSettingsOpen})},s.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&s.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},s.handleTabSelect=function(e){switch(e){case"camera":s.startWebcam();break;case"localfile":s.setState({filename:null,file:null}),s.stopWebcam()}},s.webcam=null,s.model=null,s.modelLastUpdated=null,s.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark((function e(){var t,a,n,s=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("indexedDB"in window)){e.next=36;break}return e.prev=1,e.next=4,M.d("indexeddb://web-model");case 4:return this.model=e.sent,e.prev=5,e.next=8,Object(T.a)("tensorflowjs",1);case 8:return t=e.sent,e.next=11,t.transaction(z).objectStore(z).get(R);case 11:return a=e.sent,n=new Date(a.modelArtifactsInfo.dateSaved),e.next=15,this.getModelInfo();case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||n>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.warn(e.t0),console.warn("Could not retrieve when model was saved.");case 23:e.next=34;break;case 25:return e.prev=25,e.t1=e.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(e.t1),e.next=31,M.d(D);case 31:return this.model=e.sent,e.next=34,this.model.save("indexeddb://web-model");case 34:e.next=40;break;case 36:return console.warn("IndexedDB not supported."),e.next=39,M.d(D);case 39:this.model=e.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),M.e((function(){return s.model.predict(M.f([1,H,H,3]))})).dispose();case 44:case"end":return e.stop()}}),e,this,[[1,25],[5,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Classify container"},!this.state.modelLoaded&&i.a.createElement(r.Fragment,null,i.a.createElement(x.a,{animation:"border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading..."))," ",i.a.createElement("span",{className:"loading-model-text"},"Loading Model")),this.state.modelLoaded&&i.a.createElement(r.Fragment,null,i.a.createElement(k.a,{onClick:this.handlePanelClick,className:"classify-panel-header","aria-controls":"photo-selection-pane","aria-expanded":this.state.photoSettingsOpen},"Take or Select a Photo to Classify",i.a.createElement("span",{className:"panel-arrow"},this.state.photoSettingsOpen?i.a.createElement(A.b,null):i.a.createElement(A.c,null))),i.a.createElement(S.a,{in:this.state.photoSettingsOpen},i.a.createElement("div",{id:"photo-selection-pane"},this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&i.a.createElement(p.a,null,i.a.createElement(b.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0},"An update for the ",i.a.createElement("strong",null,this.state.modelType)," model is available.",i.a.createElement("div",{className:"d-flex justify-content-center pt-1"},!this.state.isDownloadingModel&&i.a.createElement(k.a,{onClick:this.updateModel,variant:"outline-info"},"Update"),this.state.isDownloadingModel&&i.a.createElement("div",null,i.a.createElement(x.a,{animation:"border",role:"status",size:"sm"},i.a.createElement("span",{className:"sr-only"},"Downloading..."))," ",i.a.createElement("strong",null,"Downloading..."))))),this.state.showModelUpdateSuccess&&i.a.createElement(p.a,null,i.a.createElement(b.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0},"The ",i.a.createElement("strong",null,this.state.modelType)," model has been updated!")),i.a.createElement(C.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center"},i.a.createElement(O.a,{eventKey:"camera",title:"Take Photo"},i.a.createElement("div",{id:"no-webcam",ref:"noWebcam"},i.a.createElement("span",{className:"camera-icon"},i.a.createElement(A.a,null)),"No camera found. ",i.a.createElement("br",null),"Please use a device with a camera, or upload an image instead."),i.a.createElement("div",{className:"webcam-box-outer"},i.a.createElement("div",{className:"webcam-box-inner"},i.a.createElement("video",{ref:"webcam",autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"448",height:"448"}))),i.a.createElement("div",{className:"button-container"},i.a.createElement(L,{variant:"primary",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))),i.a.createElement(O.a,{eventKey:"localfile",title:"Select Local File"},i.a.createElement(j.a.Group,{controlId:"file"},i.a.createElement(j.a.Label,null,"Select Image File"),i.a.createElement("br",null),i.a.createElement(j.a.Label,{className:"imagelabel"},this.state.filename?this.state.filename:"Browse..."),i.a.createElement(j.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})),this.state.file&&i.a.createElement(r.Fragment,null,i.a.createElement("div",{id:"local-image"},i.a.createElement(I.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})),i.a.createElement("div",{className:"button-container"},i.a.createElement(L,{variant:"primary",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."}))))))),this.state.predictions.length>0&&i.a.createElement("div",{className:"classification-results"},i.a.createElement("h3",null,"Predictions"),i.a.createElement("canvas",{ref:"canvas",width:B,height:B}),i.a.createElement("br",null),i.a.createElement(U.a,null,this.state.predictions.map((function(e){return i.a.createElement(U.a.Item,{key:e.className},i.a.createElement("strong",null,e.className)," ",e.probability,"%")}))))))}}]),a}(r.Component),_=(a(350),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Instructions container"},i.a.createElement("h1",null,"Instructions"),i.a.createElement("p",null,"Steps to upload fecal sample image for STH diagnosis:",i.a.createElement("br",null),i.a.createElement("br",null),'1. Go to the "Classify" page',i.a.createElement("br",null),'2. Click on "Select Local File"',i.a.createElement("br",null),'3. Click on "Browse" under Select Image File.',i.a.createElement("br",null),"4. Select the image file you want to process.",i.a.createElement("br",null),'5. Click on "Classify"',i.a.createElement("br",null),i.a.createElement("br",null),"The webpage will now output an STH diagnosis."),i.a.createElement("h1",null," FAQS "),i.a.createElement("p",null,"* How does this work?",i.a.createElement("br",null),"* How to save this webpage in my browser?",i.a.createElement("br",null),"* How accurate is the diagnosis?",i.a.createElement("br",null),"* Why do we need diagnosis when mass drug administration exists?",i.a.createElement("br",null),"* What are the effects of Soil Transmitted Helminth infections?",i.a.createElement("br",null),"* Where can I learn more about Soil Transmitted Helminths?",i.a.createElement("br",null),"* https://www.neglecteddiseases.gov/usaid-targeted-diseases/ soil-transmitted-helminths/",i.a.createElement("br",null),"* https://www.who.int/news-room/fact-sheets/detail/soil- transmitted-helminth-infections"))}}]),a}(r.Component)),G=(a(351),function(){return i.a.createElement("div",{className:"NotFound"},i.a.createElement("h1",null,"404"),i.a.createElement("h3",null,"The page you were looking for is not here."),i.a.createElement("a",{href:"/"},"Go Home"))}),Q=function(e){var t=e.childProps;return i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/classify",exact:!0,component:K,props:t}),i.a.createElement(m.a,{path:"/",exact:!0,component:_,props:t}),i.a.createElement(m.a,{path:"/about",exact:!0,component:w,props:t}),i.a.createElement(m.a,{component:G}))},J=(a(354),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;Object(n.a)(this,a),(s=t.call(this,e)).dismissUpdateAlert=function(e){s.setState({showUpdateAlert:!1})};return s.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,null,i.a.createElement(h.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg"},i.a.createElement(h.a.Brand,{href:"/"},"WebClassify"),i.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:""},i.a.createElement(u.b,{className:"nav-link",to:"/classify"},"Classify"),i.a.createElement(u.b,{className:"nav-link",to:"/"},"Instructions"),i.a.createElement(u.b,{className:"nav-link",to:"/about"},"About")))),this.props.updateAvailable&&this.state.showUpdateAlert&&i.a.createElement("div",{style:{paddingTop:"10px"}},i.a.createElement(g,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert}))),i.a.createElement(p.a,null,i.a.createElement(Q,null)))}}]),a}(r.Component)),q=Object(m.f)(J),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){if("serviceWorker"in navigator){if(new URL("/ewh-portable-microscopy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ewh-portable-microscopy","/service-worker.js");$?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}function X(e,t){navigator.serviceWorker.register(e).then((function(e){function a(a){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA2-PWA."),t&&t.onUpdate&&t.onUpdate(e,a)}e.waiting&&e.active&&a(e.waiting),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?a(n):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={contentCached:!1,updateAvailable:!1},e.handleUpdate=function(t){var a=t.waiting;a&&a.postMessage({type:"SKIP_WAITING"}),e.setState({updateAvailable:!0})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){V({onUpdate:this.handleUpdate})}},{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(q,{updateAvailable:this.state.updateAvailable}))}}]),a}(r.Component);d.a.render(i.a.createElement(Y,null),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.b18956b2.chunk.js.map