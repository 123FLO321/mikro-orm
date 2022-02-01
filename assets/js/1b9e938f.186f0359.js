"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75850],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Installation & Usage"},l=void 0,p={unversionedId:"installation",id:"version-3.6/installation",title:"Installation & Usage",description:"First install the module via yarn or npm and do not forget to install the database driver as well:",source:"@site/versioned_docs/version-3.6/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/3.6/installation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/installation.md",tags:[],version:"3.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643743511,formattedLastUpdatedAt:"2/1/2022",frontMatter:{title:"Installation & Usage"},sidebar:"version-3.6/docs",next:{title:"Defining Entities",permalink:"/docs/3.6/defining-entities"}},d=[{value:"Possible issues with circular dependencies",id:"possible-issues-with-circular-dependencies",children:[],level:2},{value:"Entity Discovery in TypeScript",id:"entity-discovery-in-typescript",children:[],level:2},{value:"Setting up the Commandline Tool",id:"setting-up-the-commandline-tool",children:[],level:2},{value:"Request Context",id:"request-context",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First install the module via ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql/mariadb\n$ yarn add mikro-orm mariadb # for mysql/mariadb\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite3 # for sqlite\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql/mariadb\n$ npm i -s mikro-orm mariadb # for mysql/mariadb\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite3 # for sqlite\n")),(0,r.kt)("p",null,"Next you will need to enable support for ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"decorators"),"\nas well as ",(0,r.kt)("inlineCode",{parentName:"p"},"esModuleInterop")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"experimentalDecorators": true,\n"esModuleInterop": true\n')),(0,r.kt)("p",null,"Then call ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/configuration"},"Advanced Configuration")," section.")),(0,r.kt)("p",null,"You can also provide paths where you store your entities via ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby"},(0,r.kt)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby#globbing-patterns"},"globbing patterns"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),(0,r.kt)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," array and use ",(0,r.kt)("inlineCode",{parentName:"p"},"globby")," manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import globby from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: await (globby('./dist/app/**/entities/*.js')).map(require),\n  // ...\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2"),") via ",(0,r.kt)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),(0,r.kt)("h2",{id:"possible-issues-with-circular-dependencies"},"Possible issues with circular dependencies"),(0,r.kt)("p",null,"Your entities will most probably contain circular dependencies (e.g. if you use bi-directional\nrelationship). While this is fine, there might be issues caused by wrong order of entities\nduring discovery, especially when you are using the folder based way (via ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirs"),")."),(0,r.kt)("p",null,"The errors caused by circular dependencies are usually similar to this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TypeError: Cannot read property 'name' of undefined\n    at Function.className (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:253:28)\n    at TsMorphMetadataProvider.extractType (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:37:34)\n    at TsMorphMetadataProvider.initProperties (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:25:31)\n    at TsMorphMetadataProvider.loadEntityMetadata (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:16:9)\n    at MetadataDiscovery.discoverEntity (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:109:9)\n    at MetadataDiscovery.discoverDirectory (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:80:13)\n    at Function.runSerial (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:303:22)\n    at MetadataDiscovery.findEntities (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:56:13)\n    at MetadataDiscovery.discover (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:30:9)\n    at Function.init (/path/to/project/node_modules/mikro-orm/dist/MikroORM.js:45:24)\n    at Function.handleSchemaCommand (/path/to/project/node_modules/mikro-orm/dist/cli/SchemaCommandFactory.js:51:21)\n")),(0,r.kt)("p",null,"If you encounter this, you have basically two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," array to have control over the order of discovery. You might need to play with the actual\norder you provide here, or possibly with the order of import statements."),(0,r.kt)("li",{parentName:"ul"},"Use strings instead of references (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"@OneToMany('Book', 'author')"),"). The downside here is that you\nwill loose the typechecking capabilities of the decorators. ")),(0,r.kt)("h2",{id:"entity-discovery-in-typescript"},"Entity Discovery in TypeScript"),(0,r.kt)("p",null,"Internally, ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/metadata-providers"},(0,r.kt)("inlineCode",{parentName:"a"},"ts-morph")," to perform analysis")," of source files\nof entities to sniff types of all properties. This process can be slow if your project contains lots\nof files. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),(0,r.kt)("p",null,"You can also use different ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/metadata-providers"},"metadata provider")," or even write custom one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")," that uses ",(0,r.kt)("inlineCode",{parentName:"li"},"reflect-metadata")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-morph")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JavaScriptMetadataProvider")," that allows you to manually provide the entity schema (mainly for Vanilla JS)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),(0,r.kt)("h2",{id:"setting-up-the-commandline-tool"},"Setting up the Commandline Tool"),(0,r.kt)("p",null,"MikroORM ships with a number of command line tools that are very helpful during development,\nlike Schema Generator and Entity Generator. You can call this command from the NPM binary\ndirectory or use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ node node_modules/.bin/mikro-orm\n$ npx mikro-orm\n\n# or when installed globally\n$ mikro-orm\n")),(0,r.kt)("p",null,"For CLI to be able to access your database, you will need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm.config.js")," file that\nexports your ORM configuration. TypeScript is also supported, just enable ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," flag in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. There you can also set up array of possible paths to ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm.config")," file,\nas well as use different file name:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not forget to install ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," when enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," flag.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./package.json"',title:'"./package.json"'},'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/mikro-orm.config.ts"',title:'"./src/mikro-orm.config.ts"'},"export default {\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n};\n")),(0,r.kt)("p",null,"Once you have the CLI config properly set up, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()")," options\nparameter and the CLI config will be automatically used. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use different names for this file, simply rename it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"configPaths")," array\nyour in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_CLI")," environment variable with the path\nto override ",(0,r.kt)("inlineCode",{parentName:"p"},"configPaths")," value.")),(0,r.kt)("p",null,"Now you should be able to start using the CLI. All available commands are listed in the CLI help:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear        Clear metadata cache\n  mikro-orm generate-entities  Generate entities based on current database schema\n  mikro-orm schema:create      Create database schema based on current metadata\n  mikro-orm schema:drop        Drop database schema based on current metadata\n  mikro-orm schema:update      Update database schema based on current metadata\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),(0,r.kt)("p",null,"To verify your setup, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm debug")," command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you have CLI config properly set up, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter\nwhen calling ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),".")),(0,r.kt)("h2",{id:"request-context"},"Request Context"),(0,r.kt)("p",null,"Then you will need to fork Entity Manager for each request so their identity maps will not\ncollide. To do so, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,r.kt)("p",null,"More info about ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," is described ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/identity-map#request-context"},"here"),"."),(0,r.kt)("p",null,"Now you can start ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/defining-entities"},"defining your entities")," (in one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."))}c.isMDXComponent=!0}}]);