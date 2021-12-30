(this["webpackJsonpstudent-grades-react-test"]=this["webpackJsonpstudent-grades-react-test"]||[]).push([[0],{27:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(20),r=a.n(c),s=(a(27),a(11)),i=a(5),l=a(10),d=a.n(l),u=a(21),o=a(3),j=a(22),f=a.n(j),b=(a(47),a(0));var g=function(e){for(var t=e.student,a=t.grades,n=0,c=0;c<a.length;c++)a[c]=parseInt(a[c]);return Object(b.jsx)("div",{className:"grades",id:t.id,children:a.map((function(e,t){return n++,Object(b.jsx)("div",{className:"grade",children:Object(b.jsxs)("p",{children:["Test ",n,": ",e,"%"]})},t)}))})};a(49);var m=function(e){var t=e.filteredData,a=e.addTag;return e.calcAverage,Object(b.jsx)("div",{className:"students",children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"container",id:t,children:[Object(b.jsxs)("div",{className:"student",children:[Object(b.jsx)("img",{src:e.pic}),Object(b.jsx)("p",{className:"name",children:e.firstName+" "+e.lastName}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("p",{children:["Email: ",e.email]}),Object(b.jsxs)("p",{children:["Company: ",e.company]}),Object(b.jsxs)("p",{children:["Skill: ",e.skill]}),Object(b.jsxs)("p",{children:["Average: ",e.average,"%"]})]})]}),Object(b.jsx)(g,{student:e}),Object(b.jsx)("div",{className:"tags",children:e.tags.map((function(e){}))}),Object(b.jsx)("input",{className:"tagInput",type:"text",id:"text_".concat(e.id),placeholder:"Add a tag..."}),Object(b.jsx)("button",{className:"addTag",onClick:function(t){return a(e,t)},children:"Add Tag"}),Object(b.jsx)("button",{className:"button expandable",onClick:function(e){!function(e){e++,document.getElementById(e).classList.toggle("active");var t=document.getElementById(e).style.display;document.getElementById(e).style.display=""===t||"none"===t?"block":"none"}(t),function(e){"none"===getComputedStyle(e.target).getPropertyValue("--minus")?e.target.style.setProperty("--minus","block"):e.target.style.setProperty("--minus","none")}(e)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]},e.id)}))})};a(50);var O=function(e){e.data;var t=e.filteredData,a=e.filterName,n=e.filterTag,c=e.addTag,r=e.calcAverage;return Object(b.jsxs)("div",{className:"boundingBox",children:[Object(b.jsxs)("div",{className:"searchBars",children:[Object(b.jsx)("div",{className:"inputBox",children:Object(b.jsx)("input",{id:"searchBar",type:"text",onChange:function(e){return a(e)},placeholder:"Search by Name"})}),Object(b.jsx)("div",{className:"inputBox",children:Object(b.jsx)("input",{id:"tagSearchBar",type:"text",onChange:function(e){return n(e)},placeholder:"Search by Tag"})})]}),Object(b.jsx)(m,{filteredData:t,addTag:c,calcAverage:r})]})};var p=function(){var e="https://api.hatchways.io/assessment/students",t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!1),j=Object(o.a)(l,2),g=j[0],m=j[1],p=Object(n.useState)([]),h=Object(o.a)(p,2),v=h[0],x=h[1],y=Object(n.useState)(null),N=Object(o.a)(y,2),C=N[0],E=N[1],S=Object(n.useState)({nameFilter:"",tagFilter:""}),w=Object(o.a)(S,2),B=w[0],F=w[1],T=function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(e).then((function(e){r(e.data.students),m(!0),E(e.data.students)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){T()}),[e]),Object(n.useEffect)((function(){g&&(E(c),L(),c.forEach((function(e){e.tags=[]})))}),[g]),Object(n.useEffect)((function(){if(g){var e=[];B.nameFilter.indexOf(" ")>0?e=c.filter((function(e){if((e.firstName.toLowerCase()+" "+e.lastName.toLowerCase()).includes("".concat(B.nameFilter)))return e})):-1===B.nameFilter.indexOf(" ")&&(e=c.filter((function(e){var t=e.firstName.toLowerCase(),a=e.lastName.toLowerCase();return t.includes("".concat(B.nameFilter))||a.includes("".concat(B.nameFilter))?e:void 0})),B.tagFilter.length>0&&(e=e.filter((function(e){if(e.tags.some((function(e){return e.includes("".concat(B.tagFilter))})))return e})))),E(e)}}),[B]);var L=function(){c.forEach((function(e,t){for(var a=e.grades,n=0;n<a.length;n++)a[n]=parseInt(a[n]);var i,l,d=0;a.forEach((function(e){d+=e})),i=a.length,l=d/i,r(Object(s.a)(c),c[t].average=l)}))};return Object(b.jsxs)(b.Fragment,{children:[!1===g&&null===C&&Object(b.jsx)("p",{children:"loading..."}),!0===g&&null!==C&&Object(b.jsx)(O,{filteredData:C,data:c,filterName:function(e){F(Object(i.a)(Object(i.a)({},B),{},{nameFilter:e.target.value.toLowerCase()}))},filterTag:function(e){F(Object(i.a)(Object(i.a)({},B),{},{tagFilter:e.target.value.toLowerCase()}))},addTag:function(e,t){var a=document.getElementById("text_"+e.id).value;a=a.toLowerCase(),e.tags.push(a),x([].concat(Object(s.a)(v),[a]));var n=t.target.previousSibling.value,c=document.createElement("div");c.innerHTML=n,c.classList.add("tag"),t.target.previousSibling.previousSibling.appendChild(c),document.getElementById("text_"+e.id).value=""},calcAverage:L})]})};r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.83eaddf2.chunk.js.map