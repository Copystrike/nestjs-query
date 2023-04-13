"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[7810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,y=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"v0.7.5",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},l=void 0,u={permalink:"/nestjs-query/blog/2020/04/03/v0.7.5",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-04-03-v0.7.5.md",source:"@site/blog/2020-04-03-v0.7.5.md",title:"v0.7.5",description:"* [FIXED] Tables with composite primary keys are not quoted properly.",date:"2020-04-03T00:00:00.000Z",formattedDate:"April 3, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:.115,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.7.5",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},prevItem:{title:"v0.8.0",permalink:"/nestjs-query/blog/2020/04/07/v0.8.0"},nextItem:{title:"v0.7.4",permalink:"/nestjs-query/blog/2020/04/02/v0.7.4"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c},h="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[FIXED]"," Tables with composite primary keys are not quoted properly."),(0,o.kt)("li",{parentName:"ul"},"[DOCS]"," Added docs for working with multiple connections ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/pull/73"},"#73")," - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/johannesschobel"},"@johannesschobel"))))}y.isMDXComponent=!0}}]);