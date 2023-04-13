"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3314:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},1291:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){var t,n,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),k=x.tabGroupChoices,w=x.setTabGroupChoices,O=(0,a.useState)(y),N=O[0],j=O[1],C=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=k[m];null!=T&&T!==N&&h.some((function(e){return e.value===T}))&&j(T)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==N&&(E(t),j(r),null!=m&&w(m,String(r)))},q=function(e){var t,n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;n=null!=(o=C[i])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:q,onClick:I},i,{className:(0,o.Z)("tabs__item",c.tabItem,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},5541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(1291),n(3314),["components"]),l={title:"v0.15.x to v0.16.x"},s=void 0,u={unversionedId:"migration-guides/v0.15.x-to-v0.16.x",id:"migration-guides/v0.15.x-to-v0.16.x",title:"v0.15.x to v0.16.x",description:"Filter on Relations",source:"@site/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.15.x-to-v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.15.x to v0.16.x"},sidebar:"docs",previous:{title:"v0.22.x to v0.23.x",permalink:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x"},next:{title:"v0.14.x to v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"}},c={},p=[{value:"Filter on Relations",id:"filter-on-relations",level:2},{value:"Filter Definitions",id:"filter-definitions",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"filter-on-relations"},"Filter on Relations"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.16.x")," we made a big step forward in the functionality of relations by allowing for filtering on their properties. While making this change it was aso decided to unify the way that relations are defined."),(0,o.kt)("p",null,"In previous versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," you could define relations using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Relation")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@Connection")," decorator as well as manually defining them when creating your resolvers, this leads to an in consistent experience while using ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query"),". In the latest version all relations ",(0,o.kt)("strong",{parentName:"p"},"MUST")," be defined using the decorators."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.16.x")," there are two new decorators (",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableRelation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@FilterableConnection"),") exposed to allow you to decide if end users should be able to filter on the relation."),(0,o.kt)("p",null,"To read more about the new decorators as well as defining relations you can read the ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/relations"},(0,o.kt)("inlineCode",{parentName:"a"},"relations docs"))),(0,o.kt)("h2",{id:"filter-definitions"},"Filter Definitions"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.16.x")," filters are defined based on the operation (read, update, delete). In previous versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," all filters for a type in graphql were the same. In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.16.x")," this behavior needed to change in order to support filtering on relations."),(0,o.kt)("p",null,"This should be a passive change for most, however the generated graphql schema will contain new types for each filter operation."))}m.isMDXComponent=!0}}]);