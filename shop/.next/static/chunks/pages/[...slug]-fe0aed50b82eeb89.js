(self.webpackChunkshop=self.webpackChunkshop||[]).push([[203],{6873:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=/\((.*?)\)/g,a=/(\(\?)?:\w+/g,s=/[\-{}\[\]+?.,\\\^$|#\s]/g,i=/\*/g,o=function(e){var t=[];return{regExp:RegExp("^"+(e=e.replace(s,"\\$&").replace(r,"(?:$1)?").replace(a,function(e,n){return t.push(e.slice(1)),n?e:"([^/?]+)"}).replace(i,function(){return t.push("path"),"([^?]*?)"}))+"(?:\\?([\\s\\S]*))?$"),namedParams:t}};function u(e){var t=Object.keys(e),n={};for(var r in e)n[r]={value:e[r]};return function(e){var r,a;return t.some(function(t){(a=n[t]).regExp||(s=o(t),a.regExp=s.regExp,a.namedParams=s.namedParams,a.pattern=t);var s,i=a.regExp.exec(e);if(i)return r=(i=i.slice(1,-1)).reduce(function(e,t,n){return t&&(e[a.namedParams[n]]=t),e},{}),!0})?{value:a.value,params:r,url:e,pattern:a.pattern}:null}}},1197:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...slug]",function(){return n(2378)}])},2378:function(e,t,n){"use strict";n.r(t);var r=n(131);t.default=(0,r.createFederatedCatchAll)()},131:function(e,t,n){let r=n(6572),a=n(6873),{loadRemote:s}=n(4901);async function i(e){let t=new Set(...__FEDERATION__.__INSTANCES__.map(e=>e.options.remotes.map(e=>e.alias))),n=await Promise.all(Array.from(t).map(async e=>s(e+"/pages-map").then(t=>({remote:e,config:t.default})).catch(()=>null))),r={};for(let e of n)if(e)for(let[t,n]of Object.entries(e.config))r[t]={remote:e.remote,module:n};return a.default(r)(e)}e.exports={matchFederatedPage:i,createFederatedCatchAll(){let e=t=>{let[n,a]=r.useState({}),{FederatedPage:s,render404:i,renderError:o,needsReload:u,...c}={...n,...t};return(r.useEffect(()=>{u&&(async()=>{a(await e.getInitialProps(c))})()},[]),i)?r.createElement("h1",{},"404 Not Found"):o?r.createElement("h1",{},"Oops, something went wrong."):s?r.createElement(s,c):null};return e.getInitialProps=async e=>{let{err:t,req:n,res:r,AppTree:a,...o}=e;if(t)return{renderError:!0,...o};console.log("in browser");let u=await i(e.asPath);try{console.log("matchedPage",u);let t=u?.value?.remote,n=u?.value?.module.replace("./","/");if(!t||!n)return{render404:!0,...o};console.log("loading exposed module",n,"from remote",t);let r=await s(t+n).then(e=>e.default);if(console.log("FederatedPage",r),!r)return{render404:!0,...o};let a={...e,query:u.params};return{...await r.getInitialProps?.(a)||{},FederatedPage:r}}catch(e){return console.log("err",e),{renderError:!0,...o}}},e}}},4901:function(e,t,n){"use strict";function r(){let e=n.federation.runtime;if(!e)throw Error("Federation runtime accessed before instantiation or installation");return e}n.r(t),n.d(t,{FederationHost:function(){return m},Module:function(){return I},getInstance:function(){return _},getRemoteEntry:function(){return s},getRemoteInfo:function(){return i},init:function(){return c},loadRemote:function(){return l},loadScript:function(){return o},loadScriptNode:function(){return u},loadShare:function(){return g},loadShareSync:function(){return h},preloadRemote:function(){return d},registerGlobalPlugins:function(){return a},registerPlugins:function(){return p},registerRemotes:function(){return f}});let a=(...e)=>r().registerGlobalPlugins(...e),s=(...e)=>r().getRemoteEntry(...e),i=(...e)=>r().getRemoteInfo(...e),o=(...e)=>r().loadScript(...e),u=(...e)=>r().loadScriptNode(...e),c=(...e)=>r().init(...e),l=(...e)=>r().loadRemote(...e),g=(...e)=>r().loadShare(...e),h=(...e)=>r().loadShareSync(...e),d=(...e)=>r().preloadRemote(...e),f=(...e)=>r().registerRemotes(...e),p=(...e)=>r().registerPlugins(...e),_=(...e)=>r().getInstance(...e);class m{_getInstance(){if(!this._instance){let e=r().FederationHost;this._instance=new e(...this._args)}return this._instance}get options(){return this._getInstance().options}set options(e){this._getInstance().options=e}get hooks(){return this._getInstance().hooks}get version(){return this._getInstance().version}get name(){return this._getInstance().name}get moduleCache(){return this._getInstance().moduleCache}get snapshotHandler(){return this._getInstance().snapshotHandler}get sharedHandler(){return this._getInstance().sharedHandler}get remoteHandler(){return this._getInstance().remoteHandler}get shareScopeMap(){return this._getInstance().shareScopeMap}get loaderHook(){return this._getInstance().loaderHook}initOptions(...e){return this._getInstance().initOptions(...e)}loadShare(...e){return this._getInstance().loadShare(...e)}loadShareSync(...e){return this._getInstance().loadShareSync(...e)}initializeSharing(...e){return this._getInstance().initializeSharing(...e)}initRawContainer(...e){return this._getInstance().initRawContainer(...e)}loadRemote(...e){return this._getInstance().loadRemote(...e)}preloadRemote(...e){return this._getInstance().preloadRemote(...e)}initShareScopeMap(...e){return this._getInstance().initShareScopeMap(...e)}registerPlugins(...e){return this._getInstance().registerPlugins(...e)}registerRemotes(...e){return this._getInstance().registerRemotes(...e)}formatOptions(...e){return this._getInstance().formatOptions(...e)}constructor(...e){this._instance=null,this._args=e;let t=r().FederationHost;this._instance=new t(...this._args)}}class I{_getInstance(){if(!this._instance){let e=r().Module;this._instance=new e(...this._args)}return this._instance}get remoteInfo(){return this._getInstance().remoteInfo}set remoteInfo(e){this._getInstance().remoteInfo=e}get inited(){return this._getInstance().inited}set inited(e){this._getInstance().inited=e}get lib(){return this._getInstance().lib}set lib(e){this._getInstance().lib=e}get host(){return this._getInstance().host}set host(e){this._getInstance().host=e}async getEntry(...e){return this._getInstance().getEntry(...e)}async get(...e){return this._getInstance().get(...e)}wraperFactory(...e){return this._getInstance().wraperFactory(...e)}constructor(...e){this._instance=null,this._args=e}}}},function(e){_N_E=Promise.all([e.f.consumes||function(e,t){},e.f.remotes||function(e,t){}].reduce(function(e,t){return t("203",e),e},[])).then(function(){return e.X(0,[636,792],function(){return e(e.s=1197)})})}]);