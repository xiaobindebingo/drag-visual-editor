(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{151:function(e,t,n){e.exports={group:"Group_group__KDQxi"}},154:function(e,t,n){e.exports={editor:"Editor_editor__vzXVZ"}},155:function(e,t,n){e.exports={circle:"Circle_circle__18Nbv"}},156:function(e,t,n){e.exports={attributePanel:"AttributePanel_attributePanel__3OHup"}},212:function(e,t,n){e.exports=n(363)},33:function(e,t,n){e.exports={markline:"MarkLine_markline__bJ0QZ",line:"MarkLine_line__3GMwM",hor:"MarkLine_hor__32M3f",ver:"MarkLine_ver__3WRU8",hide:"MarkLine_hide__1ShMr"}},331:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),c=n.n(r),i=n(140),l=n.n(i),s=n(54),u=n(10),d=n(4),p=n(141),f=n(142),h=new(function(){function e(t,n,a){Object(p.a)(this,e),this.list=void 0,this.maxLength=void 0,this.curIndex=void 0,this.list=t,this.curIndex=n,this.maxLength=a||20}return Object(f.a)(e,[{key:"addRecord",value:function(e){this.list.push(e),this.list.length>this.maxLength&&this.list.shift(),this.curIndex=this.list.length-1}},{key:"getPrevRecord",value:function(){return this.curIndex=this.curIndex>0?this.curIndex-1:this.curIndex,console.log(this.curIndex,this.list),this.list[this.curIndex]}},{key:"getNextRecord",value:function(){return this.curIndex+1>=this.list.length-1?this.curIndex=this.list.length-1:this.curIndex+=1,this.list[this.curIndex]}}]),e}())([{componentMap:{},previewVisible:!1,canvasWidth:1200,canvasHeight:750,scale:100,selectComponentId:"",containIds:[],areaPos:{startPos:{left:0,top:0},endPos:{left:0,top:0}}}],0,100);var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.list[0],t=arguments.length>1?arguments[1]:void 0;if("save"===t.type)return Object(d.a)(Object(d.a)({},e),t.payload);if("toggleLock"===t.type){var n=t.payload,a=n.id,o=n.locked;return console.log(a,o,"locke"),Object(d.a)(Object(d.a)({},e),{},{componentMap:Object(d.a)(Object(d.a)({},e.componentMap),{},Object(u.a)({},a,Object(d.a)(Object(d.a)({},e.componentMap[a]),{},{isLocked:o})))})}if("updateCurContainerStyle"===t.type){var r=t.payload,c=e.selectComponentId;return Object(d.a)(Object(d.a)({},e),{},{componentMap:Object(d.a)(Object(d.a)({},e.componentMap),{},Object(u.a)({},c,Object(d.a)(Object(d.a)({},e.componentMap[c]),{},{containerProps:Object(d.a)(Object(d.a)({},e.componentMap[c].containerProps),{},{style:Object(d.a)(Object(d.a)({},e.componentMap[c].containerProps.style),r)})})))})}return"saveRecords"===t.type?(h.addRecord(e),e):"cancleRecords"===t.type?h.getPrevRecord():"redo"===t.type?h.getNextRecord():e},v=Object(s.b)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=n(12),y=n(21),g=n(20),O=n.n(g),E=n(13),j=n(39),M=n(3),w=n.n(M),x=(n(331),function(e){var t=Object(a.useState)(!0),n=Object(y.a)(t,2),r=n[0],c=n[1],i=e.className,l=e.alertType,s=e.children,d=e.title,p=w()("alert",i,Object(u.a)({},"alert-".concat(l),l));return r?o.a.createElement("div",{className:p},o.a.createElement("div",{className:"alert-message"},d," ",e.closeble&&o.a.createElement("span",{className:"alert-close",onClick:function(){return c(!1)}},"\u5173\u95ed")),o.a.createElement("div",{className:"alert-content"},s)):null});x.defaultProps={alertType:"default"};var _=x,P=n(151),k=n.n(P);var C=function(e){return o.a.createElement("div",{className:k.a.group},e.children)},I=function(){var e={};return{register:function(t,n){e[t]=n},getHash:function(t){return t?e[t]:e}}}(),L="group";_.config={icon:"https://img.alicdn.com/tfs/TB1i4enT4v1gK0jSZFFXXb0sXXa-32-32.svg",text:"\u5f39\u7a97"},_.initialProps={width:200,height:100,type:"danger",title:"dangerTitle",children:"\u54c8\u54c8"},I.register("alert",_),I.register(L,C);var R=I.getHash();function N(e,t){return"[object Object]"===Object.prototype.toString.call(e)?{type:"save",payload:e}:Array.isArray(e)?{type:"save",payload:e.reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),t)}),{})}:{type:"save",payload:Object(u.a)({},e,t)}}function S(e){return{x:e.clientX,y:e.clientY}}function T(e){return{left:e.nativeEvent.offsetX,top:e.nativeEvent.offsetY}}function z(e){var t=R[e];return t||{}}var A=function(e){return"".concat(100*e,"%")},D=function(e,t){return e*(t.match(/\d+(\.\d+)?/g)[0]/100)},X=function(e,t){if(!e)return{top:0,left:0,width:0,height:0};var n=e.top,a=e.left,o=e.width,r=e.height,c=Object(j.a)(e,["top","left","width","height"]);return Object(d.a)({left:A((a-t.left)/t.width),top:A((n-t.top)/t.height),width:A(o/t.width),height:A(r/t.height)},c)},W=function(e,t){var n=e.top,a=e.left,o=e.width,r=e.height,c=Object(j.a)(e,["top","left","width","height"]);return Object(d.a)({left:Math.ceil(D(t.width,a)+t.left),top:Math.ceil(D(t.height,n)+t.top),width:Math.ceil(D(t.width,o)),height:Math.ceil(D(t.height,r))},c)},H=function(e){var t=Object.keys(e),n=O()(e);return t.forEach((function(e){var t=n[e].parentId;t&&(n[t].children?n[t].children[e]=n[e]:n[t].children=Object(u.a)({},e,n[e]),delete n[e])})),n},F=n(364),G=n(57),U=n.n(G),V=function(e){return{type:"cancleRecords",payload:e}},B=function(e){return{type:"updateCurContainerStyle",payload:e}};var Y=Object(b.b)((function(e){return{model:e}}),(function(e){return{changeWidth:function(t){return e(N("canvasWidth",t))},changeHeight:function(t){return e(N("canvasHeight",t))},changeScale:function(t){return e(N("scale",t))},updateState:function(t){return e(N(t))},cancelRecords:function(t){return e(V(t))},redoRecords:function(){return e({type:"redo"})},addRecords:function(){return e({type:"saveRecords"})},toggleLock:function(t){return e({type:"toggleLock",payload:t})}}}))((function(e){var t=e.model,n=e.changeWidth,r=e.changeHeight,c=e.changeScale,i=e.updateState,l=e.addRecords,s=e.cancelRecords,p=e.redoRecords,f=e.toggleLock,m=t.containIds,v=t.canvasWidth,b=t.canvasHeight,g=t.scale,j=t.areaPos,M=t.componentMap,w=t.selectComponentId,x=j.startPos,_=j.endPos,P={left:Math.min(x.left,_.left),top:Math.min(x.top,_.top),width:Math.abs(_.left-x.left),height:Math.abs(_.top-x.top)},k=(M[w]||{}).isLocked,C=Object(a.useState)(1e3),I=Object(y.a)(C,2),R=I[0],N=I[1];return o.a.createElement("div",{className:U.a.header},o.a.createElement("div",{style:{display:"flex",marginRight:50}},o.a.createElement(E.e,{style:{width:40},min:1,max:10,hasTip:!0,value:R,onChange:function(e){return N(Number(e))}}),o.a.createElement(E.a,{onClick:function(){!function e(t,n){var a=t.shift();setTimeout((function(){i(a),t.length>0&&e(t,1e3/n)}),1e3/n)}(O()(h.list),R)}},"\u56de\u653e")),"\u5bbd\uff1a",o.a.createElement(E.d,{onChange:function(e){return n(e)},className:U.a.numberPicker,value:v}),"\u9ad8\uff1a",o.a.createElement(E.d,{onChange:function(e){return r(e)},className:U.a.numberPicker,value:b}),"\u7f29\u653e\uff1a",o.a.createElement(E.d,{max:500,min:0,onChange:function(e){return c(e)},value:g}),"%",o.a.createElement("div",{style:{marginLeft:16}},o.a.createElement(E.a,{type:"secondary",disabled:!w,onClick:function(){f({id:w,locked:!k})}},k?"\u89e3\u9501":"\u9501\u5b9a"),o.a.createElement(E.a,{type:"primary",disabled:m.length<=1,onClick:function(){l();var e=Object(F.a)(),t=function(e){return Object.keys(M).reduce((function(t,n){var a;return m.includes(n)?Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},n,Object(d.a)(Object(d.a)({},M[n]),{},{containerProps:Object(d.a)(Object(d.a)({},M[n].containerProps),{},{style:X(null===(a=M[n].containerProps)||void 0===a?void 0:a.style,P)}),parentId:e}))):Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},n,M[n]))}),{})}(e),n={componentMap:Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},e,{type:L,containerProps:{style:Object(d.a)({},P)}})),selectComponentId:e,containIds:[],areaPos:{startPos:{left:0,top:0},endPos:{left:0,top:0}}};i(n),l()}},"\u7ec4\u5408"),o.a.createElement(E.a,{type:"secondary",disabled:!M[w]||"group"!==M[w].type,onClick:function(){var e;if(l(),M[w].type===L){var t=(e=w,Object.keys(M).reduce((function(t,n){var a,o=M[n];return o.parentId===e?Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},n,Object(d.a)(Object(d.a)({},o),{},{parentId:null,containerProps:Object(d.a)(Object(d.a)({},M[n].containerProps),{},{style:W(null===(a=M[n].containerProps)||void 0===a?void 0:a.style,M[e].containerProps.style)})}))):e!==n?Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},n,o)):Object(d.a)({},t)}),{})),n={componentMap:Object(d.a)({},t),selectComponentId:"",containIds:[],areaPos:j};i(n)}}},"\u62c6\u5206"),o.a.createElement(E.a,{onClick:s},"\u64a4\u9500"),o.a.createElement(E.a,{onClick:p},"\u91cd\u505a"),o.a.createElement(E.a,{onClick:function(){return i(Object(d.a)(Object(d.a)({},t),{},{previewVisible:!0}))}},"\u9884\u89c8"),o.a.createElement(E.a,{onClick:function(){JSON.stringify(M)}},"\u53d1\u5e03")))})),J=n(58),K=n.n(J);var Z=Object(b.b)((function(e){return e}),(function(){return{}}))((function(e){return o.a.createElement("div",{className:K.a.componentList},Object.keys(R).map((function(e){var t,n,a=R[e];return e===L?null:o.a.createElement("div",{className:K.a.cell,key:e,draggable:!0,onDragStart:function(t){return t.dataTransfer.setData("type",e)}},o.a.createElement("img",{src:null===a||void 0===a||null===(t=a.config)||void 0===t?void 0:t.icon}),o.a.createElement("br",null),o.a.createElement("div",{className:K.a.text},null===a||void 0===a||null===(n=a.config)||void 0===n?void 0:n.text))})))})),q=n(152),Q=n.n(q),$=n(153),ee=n.n($);function te(e){return e.show?o.a.createElement("svg",{className:"grid",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("defs",null,o.a.createElement("pattern",{id:"smallGrid",width:"7.236328125",height:"7.236328125",patternUnits:"userSpaceOnUse"},o.a.createElement("path",{d:"M 7.236328125 0 L 0 0 0 7.236328125",fill:"none",stroke:"rgba(207, 207, 207, 1)",strokeWidth:"1"})),o.a.createElement("pattern",{id:"grid",width:"36.181640625",height:"36.181640625",patternUnits:"userSpaceOnUse"},o.a.createElement("rect",{width:"36.181640625",height:"36.181640625",fill:"url(#smallGrid)"}),o.a.createElement("path",{d:"M 36.181640625 0 L 0 0 0 36.181640625",fill:"none",stroke:"rgba(186, 186, 186, 0.5)",strokeWidth:"1"}))),o.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#grid)"})):null}var ne=n(154),ae=n.n(ne),oe=n(155),re=n.n(oe);var ce=function(e){var t=e.position,n=e.style,a=e.addRecord;return o.a.createElement("div",{role:"button",tabIndex:0,onMouseDown:function(n){n.preventDefault(),n.stopPropagation();var o=S(n),r=o.x,c=o.y,i=function(n){var a=S(n),o=a.x,i=a.y,l=o-r,s=i-c;e.updateComponentItemByPos(t,{distanceX:l,distanceY:s})};document.addEventListener("mousemove",i),document.addEventListener("mouseup",(function e(){a(),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)}))},style:n,className:re.a.circle})},ie=function(e){return o.a.createElement("div",e,o.a.createElement("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z",fill:"#eb5648",fillRule:"nonzero"})))},le=[{position:"lt",style:{cursor:"nwse-resize",left:-4,top:-4}},{position:"t",style:{cursor:"ns-resize",left:"50%",marginLeft:-4,top:-4}},{position:"rt",style:{right:-4,top:-4,cursor:"nesw-resize"}},{position:"l",style:{cursor:"w-resize",left:-4,top:"50%",marginTop:-4}},{position:"r",style:{right:-4,top:"50%",marginTop:-4,cursor:"e-resize"}},{position:"lb",style:{cursor:"nesw-resize",bottom:-4,left:-4}},{position:"b",style:{cursor:"ns-resize",left:"50%",marginLeft:-4,bottom:-4}},{position:"br",style:{cursor:"nwse-resize",bottom:-4,right:-4}}],se=n(59),ue=n.n(se),de=Object(b.b)((function(e){return{model:e}}),(function(e){return{updateCurContainerStyle:function(t){return e(B(t))},updateSelectComponentAndOrderMap:function(t,n){return e(N({selectComponentId:t,componentMap:n}))},addRecord:function(){return e({type:"saveRecords"})}}}))((function(e){var t,n=e.containerProps,r=e.model,c=e.index,i=e.style,l=e.className,s=e.id,p=e.updateCurContainerStyle,f=e.updateSelectComponentAndOrderMap,h=e.addRecord,m=r.componentMap,v=r.selectComponentId,b=Object(a.useRef)({}),y=b.current,g=y.offsetWidth,j=y.offsetHeight,M=y.offsetLeft,x=y.offsetTop,_=s&&s===v,P=m[s].isLocked,k=function(e,t){var n=t.distanceX,a=void 0===n?0:n,o=t.distanceY,r=void 0===o?0:o,c={lt:{width:Math.round(g-a),height:Math.round(j-r),left:Math.round(M+a),top:Math.round(x+r)},rt:{width:Math.round(g+a),height:Math.round(j-r),top:Math.round(x+r)},lb:{width:Math.round(g-a),height:Math.round(j+r),left:Math.round(M+a)},br:{width:Math.round(g+a),height:Math.round(j+r)},t:{height:Math.round(j-r),top:Math.round(x+r)},l:{width:Math.round(g-a),left:Math.round(M+a)},r:{width:Math.round(g+a)},b:{height:Math.round(j+r)}};p(Object(d.a)({},c[e]))},C=n.style,I=C.top,L=C.left,R=C.width,N=C.height,T=C.rotate,z=void 0===T?0:T,A=L+R/2+200,D=I+N/2+56;return o.a.createElement("div",{tabIndex:0,role:"button",ref:b,key:s,className:w()((t={},Object(u.a)(t,l,l),Object(u.a)(t,ue.a.selected,_),t)),style:Object(d.a)(Object(d.a)(Object(d.a)({position:"absolute",cursor:"move"},i),{},{zIndex:c},n.style),{},{transform:"rotate(".concat(n.style.rotate,"deg)")}),onMouseDown:function(e){e.preventDefault(),e.stopPropagation();var t=function(e,t){var n=O()(t);return delete n[e],n[e]=t[e],n}(s,m),n=S(e),a=n.x,o=n.y,r=e.currentTarget.offsetLeft,c=e.currentTarget.offsetTop;f(s,t);var i=function(e){if(!P){var t=S(e),n=t.x,i=t.y;p({left:n-a+r,top:i-o+c})}};document.addEventListener("mousemove",i),document.addEventListener("mouseup",(function e(){h(),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)}))},onDragOver:function(e){return e.preventDefault()}},_&&!P&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,{onMouseDown:function(e){e.preventDefault(),e.stopPropagation();var t=180/Math.PI*Math.atan2(e.clientY-D,e.clientX-A),n=function(e){var n=180/Math.PI*Math.atan2(e.clientY-D,e.clientX-A);p({rotate:Math.round(n-t+z)})};document.addEventListener("mousemove",n),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)}))},className:ue.a.rotate}),le.map((function(e){return o.a.createElement(ce,Object.assign({addRecord:h,updateComponentItemByPos:k,key:e.position},e))}))),P&&o.a.createElement("div",{className:ue.a.locked},o.a.createElement(E.c,{size:"xs",type:"lock-fill"})),e.children)}));var pe=Object(b.b)((function(e){return e}))((function(e){var t=e.id,n=e.index,a=e.style,r=e.item,c=r.type,i=r.componentProps,l=r.containerProps,s=r.parentId,u=e.children,p=z(c);return l?s||u?s||c!==L?s&&c===L&&u&&u.length>0?o.a.createElement("div",{style:Object(d.a)(Object(d.a)({position:"absolute",cursor:"move"},l.style),{},{transform:"rotate(".concat(l.style.rotate,"deg)")})},u):s&&!u?o.a.createElement("div",{style:Object(d.a)(Object(d.a)(Object(d.a)({position:"absolute",cursor:"move"},a),l.style),{},{transform:"rotate(".concat(l.style.rotate,"deg)")})},o.a.createElement(p,i)):void 0:o.a.createElement(de,{index:n,containerProps:l,id:t},o.a.createElement(p,i,u)):o.a.createElement(de,{index:n,containerProps:l,id:t},o.a.createElement(p,i)):null})),fe=n(157),he=n(33),me=n.n(he),ve=[{type:"xt",show:!1,left:0,top:0},{type:"xc",show:!1,left:0,top:0},{type:"xb",show:!1,left:0,top:0},{type:"yl",show:!1,left:0,top:0},{type:"yc",show:!1,left:0,top:0},{type:"yr",show:!1,left:0,top:0}];var be=Object(b.b)((function(e){return e}),(function(e){return{updateCurContainerStyle:function(t){return e(B(t))}}}))((function(e){var t=Object(a.useState)(ve),n=Object(y.a)(t,2),r=n[0],c=n[1],i=e.componentMap,l=e.selectComponentId,s=e.updateCurContainerStyle,p=function(e,t){return Math.abs(e-t)<=4},f=function(e){var t=e.type,n=e.left,a=e.top,o=e.show,r=void 0===o||o;c((function(e){return e.map((function(e){return e.type===t?Object(d.a)(Object(d.a)({},e),{},{show:r,top:a,left:n}):e}))}))},h=function(){var e=((i[l]||{}||{}).containerProps||{}).style||{},t=e.top,n=e.left,a=e.width,o=e.height;return{curTop:t,curLeft:n,curBottom:t+o,curRight:n+a,curWidth:a,curHeight:o}}(),m=h.curTop,v=h.curLeft,b=h.curBottom,g=h.curRight,O=h.curWidth,E=h.curHeight,j=function(){c(ve)};return Object(fe.a)((function(){Object.keys(i).forEach((function(e){var t=i[e].containerProps;if(e!==l&&!i[e].parentId){var n=t.style,a=n.top,o=n.left,r=n.width,c=n.height,u=o+r,d=a+c,h={left:o+r/2,top:a+c/2},y={left:v+O/2,top:m+m/2};p(y.top,h.top)&&(f({type:"xc",top:h.top,left:0}),s({top:a-(E-c)/2,left:v})),p(y.left,h.left)&&(f({type:"yc",top:0,left:h.left}),s({top:m,left:o-(O-r)/2})),p(y.left,h.left)&&f({type:"yc",left:y.left,top:0}),(p(m,a)||p(b,a))&&(f({type:"xt",top:a,left:0}),p(m,a)&&s({top:a,left:v}),p(b,a)&&s({top:a-E,left:v})),(p(v,o)||p(g,o))&&(f({type:"yl",left:o,top:0}),p(v,o)&&s({left:o,top:m}),p(g,o)&&s({left:o-O,top:m})),(p(g,u)||p(v,u))&&(f({type:"yr",left:u,top:0}),p(g,u)&&s({left:u-O,top:m}),p(v,u)&&s({left:u,top:m})),(p(b,d)||p(m,d))&&(f({type:"xb",left:0,top:d}),p(b,d)&&s({left:v,top:a+c-E}),p(m,d)&&s({left:v,top:c+a}))}}))}),[b,m,v,g,i]),Object(a.useEffect)((function(){return document.addEventListener("mouseup",j),function(){document.removeEventListener("mouseup",j)}}),[]),o.a.createElement("div",{className:me.a.markline},r.map((function(e){var t,n=e.left,a=e.top,r=e.show,c=e.type;return o.a.createElement("div",{style:{left:n,top:a},key:c,className:w()((t={},Object(u.a)(t,me.a.hide,!r),Object(u.a)(t,me.a.hor,c.includes("x")),Object(u.a)(t,me.a.ver,c.includes("y")),Object(u.a)(t,me.a.line,!0),t))})})))}));var ye=Object(b.b)((function(e){return e}))((function(e){var t=e.areaPos,n=t.startPos,a=t.endPos,r=Math.abs(a.left-n.left),c=Math.abs(a.top-n.top),i=a.left>n.left?n.left:a.left,l=a.top>n.top?n.top:a.top;return r&&c?o.a.createElement("div",{style:{zIndex:999999,position:"absolute",width:r,height:c,left:i,top:l,border:"1px solid #409eff"}}):null}));var ge=Object(b.b)((function(e){return{model:e}}),(function(e){return{updateComponentMap:function(t){return e(N("componentMap",t))},updateSelectComponent:function(t){return e(N("selectComponentId",t))},updateAreaPos:function(t,n){return e(N({areaPos:t,containIds:n}))},updateComponentMapAndSelectId:function(t,n){e(N({componentMap:t,selectComponentId:n}))},addRecords:function(){return e({type:"saveRecords"})},cancelRecords:function(t){return e(V(t))},redoRecords:function(){return e({type:"redo"})}}}))((function(e){var t=Object(a.useState)(!0),n=Object(y.a)(t,2),r=n[0],c=n[1],i=e.model,l=e.updateComponentMap,s=e.updateComponentMapAndSelectId,p=e.updateSelectComponent,f=e.updateAreaPos,h=e.addRecords,m=e.cancelRecords,v=e.redoRecords,b=i.canvasWidth,g=i.canvasHeight,E=i.scale,M=i.componentMap,w=i.selectComponentId,x={startPos:{left:0,top:0},endPos:{left:0,top:0}},_=function e(t,n){var a;n[t].type===L&&(a=t,Object.keys(M).filter((function(e){return M[e].parentId===a}))).forEach((function(t){e(t,n)}));delete n[t]},P=function(e){return e*Math.PI/180};function k(e,t,n){return{x:(n.x-e.x)*Math.cos(P(t))-(n.y-e.y)*Math.sin(P(t))+e.x,y:(n.x-e.x)*Math.sin(P(t))+(n.y-e.y)*Math.cos(P(t))+e.y}}var C=H(M);return o.a.createElement("div",{id:"editorWrapper",className:ae.a.editor,style:{width:b,height:g,transformOrigin:"0 0",transform:"scale(".concat(E/100,")")}},o.a.createElement(ee.a,{handleKeys:["backspace","cmd+h","cmd+z","cmd+shift+z"],onKeyEvent:function(e){({backspace:function(){var e=O()(M);_(w,e),s(e,null)},"cmd+h":function(){c(!r)},"cmd+z":function(){m()},"cmd+shift+z":function(){v()}})[e]()}}),o.a.createElement("div",{onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),p(null);var t=document.querySelector("#editorWrapper").getBoundingClientRect(),n=t.left,a=t.top,o=T(e),r=x,c=function(e){r={startPos:o,endPos:{left:e.clientX-n,top:e.clientY-a}},f(r,[])};document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(){var t=[];if(Object.keys(M).forEach((function(e){var n=r.endPos,a=Math.min(o.left,n.left),c=Math.min(o.top,n.top),i=Math.abs(n.left-o.left),l=Math.abs(n.top-o.top),s=M[e],u=s.containerProps.style,d=u.left,p=u.top,f=u.width,h=u.height;u.rotate;a<d&&c<p&&i+a>d+f&&l+c>h+p&&!s.isLocked&&t.push(e)})),t.length>1){var n=function(e){var t=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,o=-Number.MAX_SAFE_INTEGER;return e.forEach((function(e){var r=M[e].containerProps.style,c=r.width,i=r.height,l=r.rotate,s=void 0===l?0:l,u=M[e].containerProps.style,d=u.left,p=u.top,f=d+c/2,h=p+i/2,m=Q()(k)({x:f,y:h})(s),v=m({x:d,y:p}),b=v.x,y=v.y,g=m({x:d+c,y:p}),O=g.x,E=g.y,j=m({x:d,y:p+i}),w=j.x,x=j.y,_=m({x:d+c,y:p+i}),P=_.x,C=_.y,I=Math.max.call(null,b,O,w,P),L=Math.min.call(null,b,O,w,P),R=Math.max.call(null,y,E,x,C),N=Math.min.call(null,y,E,x,C);L<t&&(t=d),n<I&&(n=I),N<a&&(a=N),o<R&&(o=R)})),{startPos:{left:t,top:a},endPos:{left:n,top:o}}}(t);f(n,t)}else f(x,[]);document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e)}))},style:{position:"absolute",width:"100%",height:"100%"},onDragOver:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault(),e.stopPropagation();var t=T(e),n=t.left,a=t.top,o=e.dataTransfer.getData("type");if(o){var r=z(o).initialProps||{},c=(r.top,r.left,r.right,r.bottom,r.width),i=r.height,s=Object(j.a)(r,["top","left","right","bottom","width","height"]),p={style:{top:a,left:n,width:c,height:i}},f=Object(d.a)(Object(d.a)({},M),{},Object(u.a)({},Object(F.a)(),{type:o,containerProps:p,componentProps:s}));l(f),h()}}},o.a.createElement(te,{show:r}),function e(t){return t?Object.keys(t).map((function(n,a){var r=t[n];return o.a.createElement(pe,{id:n,key:n,item:r,index:a},e(r.children))})):null}(C)),r&&o.a.createElement(be,null),o.a.createElement(ye,null))})),Oe=n(156),Ee=n.n(Oe);var je=Object(b.b)((function(e){return e}),(function(e){return{}}))((function(e){var t=e.selectComponentId,n=e.componentMap[t]||{},a=n.containerProps;return n.componentProps,t&&o.a.createElement("div",{className:Ee.a.attributePanel},"x: ",a.style.left,"y: ",a.style.top,"width: ",a.style.width,"height: ",a.style.height,"rotate: ",a.style.rotate)}));var Me=Object(b.b)((function(e){return{model:e}}),(function(e){return{updateState:function(t){return e(N(t))}}}))((function(e){var t=e.model,n=e.updateState,a=t.previewVisible,r=t.canvasWidth,c=t.canvasHeight,i=t.componentMap;if(!a)return null;var l=H(i),s=function(){return n(Object(d.a)(Object(d.a)({},t),{},{previewVisible:!1}))};return o.a.createElement(E.b,{visible:a,title:"\u9884\u89c8",onClose:s,onCancel:s,onOk:s},o.a.createElement("div",{style:{position:"relative",width:r,height:c}},function e(t){return t?Object.keys(t).map((function(n){var a=t[n],r=a.type,c=a.containerProps,i=a.componentProps,l=a.children,s=z(r);return o.a.createElement("div",{key:n,style:Object(d.a)(Object(d.a)({position:"absolute"},c.style),{},{transform:"rotate(".concat(c.style.rotate,"deg)")})},r===L?e(l):r!==L?o.a.createElement(s,i):null)})):null}(l)))})),we=n(60),xe=n.n(we),_e=(n(362),function(){return o.a.createElement("div",{className:xe.a.container},o.a.createElement(Y,null),o.a.createElement("div",{className:xe.a.content},o.a.createElement(Z,null),o.a.createElement("div",{className:xe.a.editor},o.a.createElement(ge,null)),o.a.createElement(je,null),o.a.createElement(Me,null)))});c.a.render(o.a.createElement(b.a,{store:v},o.a.createElement(_e,null)),document.getElementById("root"));var Pe=new l.a;Pe.showPanel(0),document.body.appendChild(Pe.dom),requestAnimationFrame((function e(){Pe.begin(),Pe.end(),requestAnimationFrame(e)}))},57:function(e,t,n){e.exports={header:"Header_header__nGceP",numberPicker:"Header_numberPicker__1Eeju"}},58:function(e,t,n){e.exports={componentList:"ComponentPanel_componentList__1-9lm",cell:"ComponentPanel_cell__3jcko",text:"ComponentPanel_text__3d8cg"}},59:function(e,t,n){e.exports={selected:"ResizeWrapper_selected__3URnW",locked:"ResizeWrapper_locked__1V3Aj",rotate:"ResizeWrapper_rotate__R6YHL"}},60:function(e,t,n){e.exports={container:"src_container__12MZc",content:"src_content__110zU",editor:"src_editor__1vpBc"}}},[[212,1,2]]]);
//# sourceMappingURL=main.4b2aa485.chunk.js.map