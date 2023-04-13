"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[3078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"Hooks"},l=void 0,s={unversionedId:"graphql/hooks",id:"graphql/hooks",title:"Hooks",description:"nestjs-query provides the following hooks that allow you to modify incoming requests.",source:"@site/docs/graphql/hooks.mdx",sourceDirName:"graphql",slug:"/graphql/hooks",permalink:"/nestjs-query/docs/graphql/hooks",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/hooks.mdx",tags:[],version:"current",frontMatter:{title:"Hooks"},sidebar:"docs",previous:{title:"Paging",permalink:"/nestjs-query/docs/graphql/paging"},next:{title:"Authorization",permalink:"/nestjs-query/docs/graphql/authorization"}},d={},m=[{value:"@BeforeCreateOne",id:"beforecreateone",level:2},{value:"Hook Function",id:"hook-function",level:3},{value:"Hook Class",id:"hook-class",level:3},{value:"@BeforeCreateMany",id:"beforecreatemany",level:2},{value:"Hook Function",id:"hook-function-1",level:3},{value:"Hook Class",id:"hook-class-1",level:3},{value:"@BeforeUpdateOne",id:"beforeupdateone",level:2},{value:"Hook Fnction",id:"hook-fnction",level:3},{value:"Hook Class",id:"hook-class-2",level:3},{value:"@BeforeUpdateMany",id:"beforeupdatemany",level:2},{value:"Hook Function",id:"hook-function-2",level:3},{value:"Hook Class",id:"hook-class-3",level:3},{value:"Using Hooks In Custom Endpoints",id:"using-hooks-in-custom-endpoints",level:2},{value:"Example",id:"example",level:3}],u={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," provides the following hooks that allow you to modify incoming requests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeFindOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"findOne")," query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeQueryMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"queryMany")," query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeCreateOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"createOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeCreateMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"createMany")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"updateOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"updateMany")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeDeleteOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeDeleteMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteMany")," mutation.")),(0,r.kt)("p",null,"In order to use a hook you only need to decorate your DTO with the corresponding decorator."),(0,r.kt)("p",null,"Each hook decorator can be provided one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A hook function"),(0,r.kt)("li",{parentName:"ul"},"A class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"Hook"),", when using a class you can use DI to access other services just like ",(0,r.kt)("inlineCode",{parentName:"li"},"guards"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"interceptors")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"pipes"),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The graphql context by default only contains the incoming request!")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," DTO you can also decorate those classes with corresponding decorators.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All of the examples reference a GqlContext. This was defined for the sake of the example. It is recommended that you\ndefine a custom type that represents the information in the context based on the guards and interceptors used in your\napplication."),(0,r.kt)("p",{parentName:"admonition"},"We have defined our ",(0,r.kt)("inlineCode",{parentName:"p"},"GqlContext")," as"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type GqlContext = { req: { headers: Record<string, string> } };\n"))),(0,r.kt)("h2",{id:"beforecreateone"},"@BeforeCreateOne"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeCreateOne")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"createOne")," mutations with information from the graphql\ncontext."),(0,r.kt)("h3",{id:"hook-function"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the createdBy field based on the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeCreateOne, CreateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeCreateOne((input: CreateOneInputType<TodoItemDTO>, context: GqlContext) => {\n  input.input.createdBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BeforeCreateOneHook, CreateOneInputType,} from '@ptc-org/nestjs-query-graphql';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy> implements BeforeCreateOneHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>> {\n    const createdBy = await this.authService.getUserEmail(context.userId);\n    instance.input.createdBy = createdBy;\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeCreateOne")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeCreateOne } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeCreateOne(CreatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforecreatemany"},"@BeforeCreateMany"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeCreateMany")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," mutations with information from the\ngraphql context."),(0,r.kt)("h3",{id:"hook-function-1"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the createdBy field on each record based on the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-11}","{7-11}":!0},"import { FilterableField, BeforeCreateMany, CreateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeCreateMany((input: CreateManyInputType<TodoItemDTO>, context: GqlContext) => {\n  const createdBy = getUserName(context);\n  input.input = input.input.map((c) => ({ ...c, createdBy }));\n  return input;\n})\nexport class TodoItemDTO {\n\n   /**\n   Other fields\n   **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-1"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BeforeCreateManyHook, CreateManyInputType,} from '@ptc-org/nestjs-query-graphql';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy> implements BeforeCreateManyHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: CreateManyInputType<T>, context: GqlContext): Promise<CreateManyInputType<T>> {\n    const createdBy = await this.authService.getUserEmail(context.userId);\n    instance.input = instance.input.map((c) => ({ ...c, createdBy }));\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeCreateMany")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeCreateMany } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeCreateMany(CreatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforeupdateone"},"@BeforeUpdateOne"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeUpdateOne")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"updateOne")," mutations with information from the graphql\ncontext."),(0,r.kt)("h3",{id:"hook-fnction"},"Hook Fnction"),(0,r.kt)("p",null,"In this example we set the updatedBy field in the update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeUpdateOne, UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeUpdateOne((input: UpdateOneInputType<TodoItemDTO>, context: GqlContext) => {\n  input.update.updatedBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n  /**\n  Other fields\n  **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-2"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BeforeUpdateOneHook, UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';\nimport { Injectable } from '@nestjs/common';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface UpdatedBy {\n  updatedBy: string;\n}\n\n@Injectable()\nexport class UpdatedByHook<T extends UpdatedBy> implements BeforeUpdateOneHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: UpdateOneInputType<T>, context: GqlContext): Promise<UpdateOneInputType<T>> {\n    // eslint-disable-next-line no-param-reassign\n    instance.update.updatedBy = await this.authService.getUserEmail(context.userId);\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeUpdateOne")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeUpdateOne } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeUpdateOne(UpdatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforeupdatemany"},"@BeforeUpdateMany"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeUpdateMany")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations with information from the\ngraphql context."),(0,r.kt)("h3",{id:"hook-function-2"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the updatedBy field in the update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeUpdateMany, UpdateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeUpdateMany((input: UpdateManyInputType<TodoItemDTO, TodoItemDTO>, context: GqlContext) => {\n  input.update.updatedBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n  /**\n  Other fields\n  **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-3"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BeforeUpdateManyHook, UpdateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { Injectable } from '@nestjs/common';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface UpdatedBy {\n  updatedBy: string;\n}\n\n@Injectable()\nexport class UpdatedByHook<T extends UpdatedBy> implements BeforeUpdateManyHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: UpdateManyInputType<T, T>, context: GqlContext): Promise<UpdateManyInputType<T, T>> {\n    // eslint-disable-next-line no-param-reassign\n    instance.update.updatedBy = await this.authService.getUserEmail(context.userId);\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeUpdateMany")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeUpdateMany } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeUpdateMany(UpdatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"using-hooks-in-custom-endpoints"},"Using Hooks In Custom Endpoints"),(0,r.kt)("p",null,"You can also use hooks in custom endpoints by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"HookInterceptor")," along with"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HookArgs")," - Used to apply hooks to any query endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MutationHookArgs")," - Used to apply hooks to any ",(0,r.kt)("inlineCode",{parentName:"li"},"mutation")," that uses ",(0,r.kt)("inlineCode",{parentName:"li"},"MutationArgsType"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example we'll create an endpoint that marks all todo items that are currently not completed as completed."),(0,r.kt)("p",null,"To start we'll create our input types."),(0,r.kt)("p",null,"There are two types that are created"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyTodoItemsInput")," which extends the ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyInputType")," this exposes an ",(0,r.kt)("inlineCode",{parentName:"li"},"update")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," field just like the ",(0,r.kt)("inlineCode",{parentName:"li"},"updateMany")," endpoints that are auto generated."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyTodoItemsArgs")," which extends ",(0,r.kt)("inlineCode",{parentName:"li"},"MutationArgsType"),", this provides a uniform interface for all mutations\nensuring that the argument provided to the mutation is named ",(0,r.kt)("inlineCode",{parentName:"li"},"input"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/types.ts"',title:'"todo-item/types.ts"'},"import { MutationArgsType, UpdateManyInputType } from '@ptc-org/nestjs-query-graphql';\nimport { ArgsType, InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\n\n// create the base input type\n@InputType()\nexport class MarkTodoItemsAsCompletedInput extends UpdateManyInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n\n// Wrap the input in the MutationArgsType to provide a uniform format for all mutations\n// The `MutationArgsType` is a thin wrapper that names the args as input\n@ArgsType()\nexport class MarkTodoItemsAsCompletedArgs extends MutationArgsType(UpdateManyTodoItemsInput) {}\n")),(0,r.kt)("p",null,"Now we can use our new types in the resolver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.resolver.ts" {16,17}',title:'"todo-item/todo-item.resolver.ts"',"{16,17}":!0},"import { InjectQueryService, mergeFilter, QueryService, UpdateManyResponse } from '@ptc-org/nestjs-query-core';\nimport { HookTypes, HookInterceptor, MutationHookArgs, UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { Mutation, Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { MarkTodoItemsAsCompletedArgs } from './types';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>) {}\n\n  // Set the return type to the TodoItemConnection\n  @Mutation(() => UpdateManyResponseType())\n  @UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemUpdateDTO))\n  markTodoItemsAsCompleted(@MutationHookArgs() { input }: MarkTodoItemsAsCompletedArgs): Promise<UpdateManyResponse> {\n    return this.service.updateMany(\n      { ...input.update, completed: true },\n      mergeFilter(input.filter, { completed: { is: false } }),\n    );\n  }\n}\n\n")),(0,r.kt)("p",null,"The first thing to notice is the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemUpdateDTO))\n")),(0,r.kt)("p",null,"This interceptor adds the correct hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," to be used by the param decorator."),(0,r.kt)("p",null,"There are a few things to take note of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HookTypes.BEFORE_UPDATE_MANY")," lets the interceptor know we are wanting the BeforeUpdateMany hook to be used\nfor this mutation."),(0,r.kt)("li",{parentName:"ul"},"We use the ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemUpdateDTO"),", that is because the ",(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateMany")," decorator was put on the\n",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemUpdateDTO")," not the ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemDTO"),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When using the HookInterceptor you must use the DTO that you added the hook decorator to.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example we bind the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE_UPDATE_MANY")," hook, you can use any of the hooks available to bind to the correct\none when ",(0,r.kt)("inlineCode",{parentName:"p"},"creating"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"updating"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"deleting")," records.")),(0,r.kt)("p",null,"The next piece is the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@MutationHookArgs() { input }: UpdateManyTodoItemsArgs\n")),(0,r.kt)("p",null,"By using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationHookArgs")," decorator we ensure that the hook is applied to the arguments adding any additional\nfields to the update."),(0,r.kt)("p",null,"Finally we invoke the service ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," with a filter that ensures we only update ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItems")," that are completed,\nand add an setting ",(0,r.kt)("inlineCode",{parentName:"p"},"completed")," to true to the update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"return this.service.updateMany(\n  { ...input.update, completed: false },\n  mergeFilter(input.filter, { completed: { is: false } }),\n);\n")))}k.isMDXComponent=!0}}]);