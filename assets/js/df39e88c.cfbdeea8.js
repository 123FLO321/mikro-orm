"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={title:"Lifecycle Hooks and EventSubscriber",sidebar_label:"Hooks and Events"},l=void 0,c={unversionedId:"lifecycle-hooks",id:"version-4.4/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle Hooks and EventSubscriber",description:"There are two ways to hook to the lifecycle of an entity:",source:"@site/versioned_docs/version-4.4/lifecycle-hooks.md",sourceDirName:".",slug:"/lifecycle-hooks",permalink:"/docs/4.4/lifecycle-hooks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/lifecycle-hooks.md",tags:[],version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637635236,formattedLastUpdatedAt:"11/23/2021",frontMatter:{title:"Lifecycle Hooks and EventSubscriber",sidebar_label:"Hooks and Events"},sidebar:"version-4.4/docs",previous:{title:"Updating Entity Values",permalink:"/docs/4.4/entity-helper"},next:{title:"Composite Primary Keys",permalink:"/docs/4.4/composite-keys"}},p=[{value:"Hooks",id:"hooks",children:[],level:2},{value:"Limitations of lifecycle hooks",id:"limitations-of-lifecycle-hooks",children:[],level:2},{value:"EventSubscriber",id:"eventsubscriber",children:[],level:2},{value:"EventArgs",id:"eventargs",children:[],level:2},{value:"Flush events",id:"flush-events",children:[{value:"Getting the changes from UnitOfWork",id:"getting-the-changes-from-unitofwork",children:[],level:3},{value:"Using onFlush event",id:"using-onflush-event",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two ways to hook to the lifecycle of an entity: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lifecycle hooks")," are methods defined on the entity prototype."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"EventSubscriber"),"s are classes that can be used to hook to multiple entities\nor when you do not want to have the method present on the entity prototype.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hooks are internally executed the same way as subscribers.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hooks are executed before subscribers.")),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of\nentity methods with them, you can also mark multiple methods with same hook."),(0,a.kt)("p",null,"All hooks support async methods with one exception - ",(0,a.kt)("inlineCode",{parentName:"p"},"@OnInit"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@OnInit")," is fired when new instance of entity is created, either manually ",(0,a.kt)("inlineCode",{parentName:"p"},"em.create()"),", or\nautomatically when new entities are loaded from database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@BeforeCreate()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@BeforeUpdate()")," is fired right before we persist the entity in database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@AfterCreate()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@AfterUpdate()")," is fired right after the entity is updated in database and\nmerged to identity map. Since this event entity will have reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," and will be\nenabled to call ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity).init()")," method (including all entity references and collections).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@BeforeDelete()")," is fired right before we delete the record from database. It is fired only when\nremoving entity or entity reference, not when deleting records by query. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@AfterDelete()")," is fired right after the record gets deleted from database and it is unset from\nthe identity map."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@OnInit")," is not fired when you create the entity manually via its constructor (",(0,a.kt)("inlineCode",{parentName:"p"},"new MyEntity()"),")")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@OnInit")," can be sometimes fired twice, once when the entity reference is\ncreated, and once after its populated. To distinguish between those we can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(this).isInitialized()"),".")),(0,a.kt)("h2",{id:"limitations-of-lifecycle-hooks"},"Limitations of lifecycle hooks"),(0,a.kt)("p",null,"Hooks are executed inside the commit action of unit of work, after all change\nsets are computed. This means that it is not possible to create new entities as\nusual from inside the hook. Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"em.flush()")," from hooks will result in\nvalidation error. Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist()")," can result in undefined behaviour like\nlocking errors. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("strong",{parentName:"p"},"internal")," instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," accessible under ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(this, true).__em")," is\nnot meant for public usage. ")),(0,a.kt)("h2",{id:"eventsubscriber"},"EventSubscriber"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"EventSubscriber")," to hook to multiple entities or if you do not want to pollute\nthe entity prototype. All methods are optional, if you omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"getSubscribedEntities()"),"\nmethod, it means you are subscribing to all entities."),(0,a.kt)("p",null,"You can either register the subscribers manually in the ORM configuration (via\n",(0,a.kt)("inlineCode",{parentName:"p"},"subscribers")," array where you put the instance):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  subscribers: [new AuthorSubscriber()],\n});\n")),(0,a.kt)("p",null,"Or use ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscriber()")," decorator - keep in mind that you need to make sure the file gets\nloaded in order to make this decorator registration work (e.g. you import that file\nexplicitly somewhere)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EntityName, EventArgs, EventSubscriber, Subscriber } from '@mikro-orm/core';\n\n@Subscriber()\nexport class AuthorSubscriber implements EventSubscriber<Author> {\n\n  getSubscribedEntities(): EntityName<Author>[] {\n    return [Author];\n  }\n\n  async afterCreate(args: EventArgs<Author>): Promise<void> {\n    // ...\n  }\n\n  async afterUpdate(args: EventArgs<Author>): Promise<void> {\n    // ... \n  }\n\n}\n")),(0,a.kt)("p",null,"Another example, where we register to all the events and all entities: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventArgs, EventSubscriber, Subscriber } from '@mikro-orm/core';\n\n@Subscriber()\nexport class EverythingSubscriber implements EventSubscriber {\n\n  async beforeCreate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterCreate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeUpdate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterUpdate<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeDelete<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterDelete<T>(args: EventArgs<T>): Promise<void> { ... }\n  async beforeFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  async onFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  async afterFlush<T>(args: EventArgs<T>): Promise<void> { ... }\n  onInit<T>(args: EventArgs<T>): void { ... }\n\n}\n")),(0,a.kt)("h2",{id:"eventargs"},"EventArgs"),(0,a.kt)("p",null,"As a parameter to the hook method we get ",(0,a.kt)("inlineCode",{parentName:"p"},"EventArgs")," instance. It will always contain\nreference to the current ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," and the particular entity. Events fired\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," during flush operation also contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeSet")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EventArgs<T> {\n  entity: T;\n  em: EntityManager;\n  changeSet?: ChangeSet<T>;\n}\n\ninterface ChangeSet<T> {\n  name: string;                   // entity name\n  collection: string;             // db table name\n  type: ChangeSetType;            // type of operation\n  entity: T;                      // up to date entity instance\n  payload: EntityData<T>;         // changes that will be used to build the update query\n  persisted: boolean;             // whether the changeset was already persisted/executed\n  originalEntity?: EntityData<T>; // snapshot of the entity when it was loaded from db\n}\n\nenum ChangeSetType {\n  CREATE = 'create',\n  UPDATE = 'update',\n  DELETE = 'delete',\n}\n")),(0,a.kt)("h2",{id:"flush-events"},"Flush events"),(0,a.kt)("p",null,"There is a special kind of events executed during the commit phase (flush operation).\nThey are executed before, during and after the flush, and they are not bound to any\nentity in particular. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"beforeFlush")," is executed before change sets are computed, this is the only\nevent where it is safe to persist new entities. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFlush")," is executed after the change sets are computed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"afterFlush")," is executed as the last step just before the ",(0,a.kt)("inlineCode",{parentName:"li"},"flush")," call resolves.\nit will be executed even if there are no changes to be flushed. ")),(0,a.kt)("p",null,"Flush event args will not contain any entity instance, as they are entity agnostic.\nThey do contain additional reference to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FlushEventArgs extends Omit<EventArgs<unknown>, 'entity'> {\n  uow?: UnitOfWork;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Flush events are entity agnostic, specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"getSubscribedEntities()")," method\nwill not have any effect for those. They are fired only once per the ",(0,a.kt)("inlineCode",{parentName:"p"},"flush"),"\noperation.")),(0,a.kt)("h3",{id:"getting-the-changes-from-unitofwork"},"Getting the changes from UnitOfWork"),(0,a.kt)("p",null,"You can observe all the changes that are part of given UnitOfWork via those methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"UnitOfWork.getChangeSets(): ChangeSet<AnyEntity>[];\nUnitOfWork.getOriginalEntityData(): Map<string, EntityData<AnyEntity>>;\nUnitOfWork.getPersistStack(): Set<AnyEntity>;\nUnitOfWork.getRemoveStack(): Set<AnyEntity>;\nUnitOfWork.getCollectionUpdates(): Collection<AnyEntity>[];\nUnitOfWork.getExtraUpdates(): Set<[AnyEntity, string, (AnyEntity | Reference<AnyEntity>)]>;\n")),(0,a.kt)("h3",{id:"using-onflush-event"},"Using onFlush event"),(0,a.kt)("p",null,"In following example we have 2 entities: ",(0,a.kt)("inlineCode",{parentName:"p"},"FooBar")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FooBaz"),", connected via\nM:1 relation. Our subscriber will automatically create new ",(0,a.kt)("inlineCode",{parentName:"p"},"FooBaz")," entity and\nconnect it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FooBar")," when we detect it in the change sets."),(0,a.kt)("p",null,"We first use ",(0,a.kt)("inlineCode",{parentName:"p"},"uow.getChangeSets()")," method to look up the change set of entity\nwe are interested in. After we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"FooBaz")," instance and link it with\n",(0,a.kt)("inlineCode",{parentName:"p"},"FooBar"),", we need to do two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"uow.computeChangeSet(baz)")," to compute the change set of newly created\n",(0,a.kt)("inlineCode",{parentName:"li"},"FooBaz")," entity"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"uow.recomputeSingleChangeSet(cs.entity)")," to recalculate the existing\nchange set of the ",(0,a.kt)("inlineCode",{parentName:"li"},"FooBar")," entity.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Subscriber()\nexport class FooBarSubscriber implements EventSubscriber {\n\n  async onFlush(args: FlushEventArgs): Promise<void> {\n    const changeSets = args.uow.getChangeSets();\n    const cs = changeSets.find(cs => cs.type === ChangeSetType.CREATE && cs.entity instanceof FooBar);\n\n    if (cs) {\n      const baz = new FooBaz();\n      baz.name = 'dynamic';\n      cs.entity.baz = baz;\n      args.uow.computeChangeSet(baz);\n      args.uow.recomputeSingleChangeSet(cs.entity);\n    }\n  }\n\n}\n\nconst bar = new FooBar();\nbar.name = 'bar';\nawait em.persistAndFlush(bar);\n")))}d.isMDXComponent=!0}}]);