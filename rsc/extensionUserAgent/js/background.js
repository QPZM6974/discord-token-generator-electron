(()=>{"use strict";var e,t={5813:(e,t,r)=>{var n=r(6682);class s{constructor(...e){this.handlers={},e.forEach((e=>{Object.defineProperty(this.handlers,e.name(),{value:e,writable:!1})}))}handle(e){if(!this.handlers.hasOwnProperty(e.method))throw new Error(`Unregistered method requested: ${e.method}`);return this.handlers[e.method].handle(e)}}const i="version";class o{name(){return i}handle(e){return{payload:{version:chrome.runtime.getManifest().version}}}}var a,c=r(3958);function l(e,t){const r={path:{}};switch(e){case a.Inactive:r.path={48:"icons/logo/48-gray.png",128:"icons/logo/128-gray.png"};break;case a.Active:r.path={48:"icons/logo/48.png",128:"icons/logo/128.png"}}"number"==typeof t&&(r.tabId=t),chrome.browserAction.setIcon(r)}!function(e){e[e.Active=0]="Active",e[e.Inactive=1]="Inactive"}(a||(a={}));class h{constructor(e,t){this.intervalMillis=e,this.handler=t}start(){this.timer=window.setInterval(this.handler,this.intervalMillis)}isStarted(){return void 0!==this.timer}stop(){void 0!==this.timer&&window.clearInterval(this.timer),this.timer=void 0}restart(){this.stop(),this.start()}setIntervalMillis(e){this.intervalMillis=e,this.isStarted()&&this.restart()}getIntervalMillis(){return this.intervalMillis}}const u="refresh-useragent";class m{constructor(e){this.useragentService=e}name(){return u}handle(e){const t=this.useragentService.renew();return{payload:{previous:t.previous,new:t.new}}}}const g="enabled-for-domain";class d{constructor(e){this.filterService=e}name(){return g}handle(e){return{payload:{enabled:this.filterService.enabledForDomain(e.payload.domain)}}}}const p="change-for-domain";class f{constructor(e){this.filterService=e}name(){return p}handle(e){return this.filterService.changeForDomain(e.payload.domain,e.payload.enable),{payload:{}}}}const v="applicable-to-uri";class w{constructor(e){this.filterService=e}name(){return v}handle(e){return{payload:{applicable:this.filterService.applicableToURI(e.payload.uri)}}}}class _{constructor(e,t,r,n){this.settings=e,this.useragent=t,this.generator=r,this.remoteList=n}renew(){const e=this.useragent.get().info,t=this.settings.get(),r=t.customUseragent.enabled,n=t.remoteUseragentList.enabled;let s,i;switch(!0){case r&&n:Math.random()<.5?(s=this.custom(),i="custom_agents_list"):(s=this.remote(),i="remote_list");break;case r:s=this.custom(),i="custom_agents_list";break;case n:s=this.remote(),i="remote_list"}if(void 0!==s&&void 0!==i)return this.useragent.update({info:s}),{source:i,previous:e,new:s};const o=this.generator.generate(t.generator.types);return this.useragent.update({info:o}),{source:"generator",previous:e,new:o}}custom(){const e=this.settings.get().customUseragent.list;if(e.length>0){const t=e[Math.floor(Math.random()*e.length)];if(t.trim().length>0)return{useragent:t,engine:"unknown",osType:"unknown"}}}remote(){const e=this.remoteList.getRandom();if(e.trim().length>0)return{useragent:e,engine:"unknown",osType:"unknown"}}}var M=r(5315);function b(e,t){const r=t.replace(/[[\]{}()+.\\^$|]/g,"\\$&").replace(/[*?]/g,".$&");return new RegExp(`^${r}$`,"i").test(e)}class S{constructor(e){this.settings=e}enabledForDomain(e){const t=this.settings.get().blacklist.domains;switch(this.settings.get().blacklist.mode){case c.OM.BlackList:return!t.includes(e);case c.OM.WhiteList:return t.includes(e)}return!1}changeForDomain(e,t){if(0!==e.trim().length)if(t)switch(this.settings.get().blacklist.mode){case c.OM.BlackList:this.removeFromDomainsList(e);break;case c.OM.WhiteList:this.appendIntoDomainsList(e)}else switch(this.settings.get().blacklist.mode){case c.OM.BlackList:this.appendIntoDomainsList(e);break;case c.OM.WhiteList:this.removeFromDomainsList(e)}}removeFromDomainsList(e){const t=this.settings.get().blacklist.domains;t.includes(e)&&this.settings.update({blacklist:{domains:t.filter((t=>t!==e))}})}appendIntoDomainsList(e){const t=this.settings.get().blacklist.domains;t.includes(e)||(t.push(e),this.settings.update({blacklist:{domains:t}}))}applicableToURI(e){if(this.settings.get().enabled){const t=S.extractDomainFromUri(e),r=this.settings.get().blacklist.domains,n=this.settings.get().blacklist.custom.rules;switch(this.settings.get().blacklist.mode){case c.OM.BlackList:if(t.length>0&&r.includes(t))return!1;for(let t=0;t<n.length;t++)if(b(e,n[t]))return!1;return!0;case c.OM.WhiteList:if(t.length>0&&r.includes(t))return!0;for(let t=0;t<n.length;t++)if(b(e,n[t]))return!0;return!1}}return!1}static extractDomainFromUri(e){try{return new URL(e).hostname}catch(e){}return""}}class y{constructor(e,t,r){this.settings=e,this.useragent=t,this.filterService=r}listen(){chrome.webRequest.onBeforeSendHeaders.addListener((e=>{if(this.settings.get().enabled&&this.filterService.applicableToURI(e.url)){const t=this.useragent.get().info;if(e.requestHeaders&&void 0!==t){for(let r=0;r<e.requestHeaders.length;r++)if("User-Agent"===e.requestHeaders[r].name&&e.requestHeaders[r].value){e.requestHeaders[r].value=t.useragent;break}return{requestHeaders:e.requestHeaders}}}}),{urls:["<all_urls>"]},["blocking","requestHeaders"])}}var k,R=r(6574),T=r(5670);!function(e){e.onLoad="on:load",e.onSave="on:save",e.onChange="on:change"}(k||(k={}));const x="get-useragent";class E{constructor(e){this.useragent=e}name(){return x}handle(e){return{payload:this.useragent.get()}}}const L="update-useragent";class O{constructor(e){this.useragent=e}name(){return L}handle(e){return this.useragent.update(e.payload),{payload:this.useragent.get()}}}function P(e){return window.btoa(unescape(encodeURIComponent(JSON.stringify(e)))).replace(/=/g,"-")}class A{constructor(e,t,r){this.settings=e,this.useragent=t,this.filterService=r}listen(){const e=["blocking","responseHeaders"];this.extraHeadersAreAllowed()&&e.push("extraHeaders"),chrome.webRequest.onHeadersReceived.addListener((e=>{if("main_frame"===e.type||"sub_frame"===e.type){const t=this.settings.get();if(t.enabled&&t.jsProtection.enabled&&this.filterService.applicableToURI(e.url)){const t=this.useragent.get().info;if(e.responseHeaders&&void 0!==t){const r=new Date;r.setTime(r.getTime()+6e4);const n={uaInfo:t};return e.responseHeaders.push({name:"Set-Cookie",value:`lzQSPaqnhkGVecb=${P(n)}; expires=${r.toUTCString()}; path=/`}),{responseHeaders:e.responseHeaders}}}}}),{urls:["<all_urls>"]},e)}extraHeadersAreAllowed(){const e=()=>{};let t=!1;try{chrome.webRequest.onHeadersReceived.addListener(e,{urls:["https://example.com/"]},["extraHeaders"]),t=!0}catch(e){t=!1}finally{chrome.webRequest.onHeadersReceived.removeListener(e)}return t}}class I{constructor(){this.key="remote-list-cache"}async put(e){localStorage.setItem(this.key,JSON.stringify(e))}async get(){const e=localStorage.getItem(this.key);return"string"==typeof e?JSON.parse(e):[]}async exists(){return"string"==typeof localStorage.getItem(this.key)}async remove(){localStorage.removeItem(this.key)}}class U{constructor(e){this.uri="",this.inmemory=[],this.cache=e}init(){return new Promise(((e,t)=>{this.cache.get().then((e=>this.inmemory=e)).then((()=>e())).catch(t)}))}setUri(e){this.uri=e}getUri(){return this.uri}update(){return new Promise(((e,t)=>{if(0===this.uri.length)return t(new Error("Remote list URI was not set"));this.fetchList(this.uri).then((r=>{this.inmemory=r,this.cache.put(r).then(e).catch(t)})).catch(t)}))}get(){return this.inmemory.splice(0)}getRandom(){return 0===this.inmemory.length?"":this.inmemory[Math.floor(Math.random()*this.inmemory.length)]}fetchList(e){return new Promise(((t,r)=>{fetch(e,{method:"GET",redirect:"follow",referrerPolicy:"no-referrer"}).then((n=>{if(!n.ok)return r(new Error(`Wrong response code (${n.status}) for ${e}: ${n.statusText}`));n.text().then((e=>e.length>0?t(e.split("\n").filter((e=>{const t=e.trim();return!t.startsWith("#")&&!t.startsWith("//")&&0!==t.length}))):t([]))).catch(r)})).catch(r)}))}}const W="update-remote-ua-list";class V{constructor(e,t){this.remoteListService=e,this.errorsHandler=t}name(){return W}handle(e){return this.remoteListService.update().catch(this.errorsHandler),{payload:{}}}}const H=console.error,X=new class{init(){return new Promise((e=>{chrome.storage.sync.get(null,(t=>{this.storage=chrome.runtime.lastError?chrome.storage.local:chrome.storage.sync,e()}))}))}clear(){return new Promise(((e,t)=>{if(!this.storage)return t(new Error("Storage was not initialized"));this.storage.clear((()=>{if(chrome.runtime.lastError)return t(new Error(chrome.runtime.lastError.message));e()}))}))}get(e){return new Promise(((t,r)=>{if(!this.storage)return r(new Error("Storage was not initialized"));this.storage.get(e,(n=>chrome.runtime.lastError?r(new Error(chrome.runtime.lastError.message)):n.hasOwnProperty(e)?void t(n[e]):t({})))}))}set(e,t){return new Promise(((r,n)=>{if(!this.storage)return n(new Error("Storage was not initialized"));this.storage.set({[e]:t},(()=>{if(chrome.runtime.lastError)return n(new Error(chrome.runtime.lastError.message));r()}))}))}},B=new class{constructor(){this.storageKey="useragent-state",this.state={info:void 0},this.events={},this.storage=chrome.storage.local}on(e,t){this.events.hasOwnProperty(e)?this.events[e].push(t):this.events[e]=[t]}emit(e,...t){if(this.events.hasOwnProperty(e))for(const r of this.events[e])r(...t)}get(){return JSON.parse(JSON.stringify(this.state))}update(e){let t=!1;void 0!==e.info&&(this.state.info=e.info,t=!0),t&&this.emit(k.onChange)}save(){return new Promise(((e,t)=>{this.storage.set({[this.storageKey]:this.state},(()=>{if(chrome.runtime.lastError)return t(new Error(chrome.runtime.lastError.message));this.emit(k.onSave),e()}))}))}load(){return new Promise(((e,t)=>{this.storage.get(this.storageKey,(r=>{if(chrome.runtime.lastError)return t(new Error(chrome.runtime.lastError.message));r.hasOwnProperty(this.storageKey)&&(r[this.storageKey].hasOwnProperty("useragent")&&delete r[this.storageKey].useragent,this.state=r[this.storageKey]),this.emit(k.onLoad),e()}))}))}};B.load().then((()=>{B.on(k.onChange,(()=>{B.save().catch(H)})),X.init().then((()=>{const e=new c.ZP(X);e.load().then((()=>{const t=e.get();l(t.enabled?a.Active:a.Inactive);const r=new U(new I),i=new _(e,B,new M.ZP,r),u=new S(e);t.remoteUseragentList.enabled&&t.remoteUseragentList.uri.length>0&&r.setUri(t.remoteUseragentList.uri),r.init().then((()=>{const g=new h(t.renew.intervalMillis,(()=>{i.renew()})),p=new h(t.remoteUseragentList.updateIntervalMillis,(()=>{r.update().catch(H)}));t.remoteUseragentList.enabled&&0===r.get().length&&r.update().catch(H),t.renew.onStartup&&i.renew(),t.enabled&&t.renew.enabled&&g.start(),t.enabled&&t.remoteUseragentList.enabled&&(r.update().catch(H),p.getIntervalMillis()>0&&p.start()),e.on(c.oO.onChange,(()=>{const t=e.get();l(t.enabled?a.Active:a.Inactive),t.enabled?(t.renew.enabled?(g.getIntervalMillis()!==t.renew.intervalMillis&&g.setIntervalMillis(t.renew.intervalMillis),g.isStarted()||g.start()):g.stop(),t.remoteUseragentList.enabled?(p.getIntervalMillis()!==t.remoteUseragentList.updateIntervalMillis&&(t.remoteUseragentList.updateIntervalMillis>0?p.setIntervalMillis(t.remoteUseragentList.updateIntervalMillis):p.stop()),r.getUri()!==t.remoteUseragentList.uri&&(r.setUri(t.remoteUseragentList.uri),r.update().catch(H),t.remoteUseragentList.updateIntervalMillis>0&&p.restart()),!p.isStarted()&&t.remoteUseragentList.updateIntervalMillis>0&&p.start()):p.stop()):(g.stop(),p.stop()),e.save().catch(H)})),new n.v(new s(new o,new T.Z(e),new R.Z(e),new m(i),new d(u),new f(u),new w(u),new E(B),new O(B),new V(r,H)),H).listen(),new y(e,B,u).listen(),new A(e,B,u).listen()})).catch(H)})).catch(H)})).catch(H)})).catch(H)},5315:(e,t,r)=>{r.d(t,{TF:()=>n,ZP:()=>a});var n,s=r(4419),i=r.n(s),o=r(7392);!function(e){e.edgeWin="edge_win",e.edgeMac="edge_mac",e.chromeWin="chrome_win",e.chromeMac="chrome_mac",e.chromeLinux="chrome_linux",e.chromeAndroid="chrome_android",e.firefoxWin="firefox_win",e.firefoxMac="firefox_mac",e.firefoxLinux="firefox_linux",e.firefoxAndroid="firefox_android",e.operaWin="opera_win",e.operaMac="opera_mac",e.safariIphone="safari_iphone",e.safariMac="safari_mac"}(n||(n={}));class a{constructor(){this.commonPatterns={chrome:{linux:[/Mozilla\/5\.0 \(X11;( U; | )Linux (x86_64|x86_64|x86_64|i686)\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) (Ubuntu Chromium\/__VER__ |||)Chrome\/__VER__ Safari\/537\.36/],mac:[/Mozilla\/5\.0 \(Macintosh; Intel Mac OS X 1[01]_(1|)[0-5]\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/__VER__ Safari\/537\.36/],win:[/Mozilla\/5\.0 \(Windows NT 1(0|0|1)\.0; (WOW64|Win64)(; x64|; x64|)\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/__VER__ Safari\/537\.36/],android:[/Mozilla\/5\.0 \(Linux; Android (9|10|10|11); __MOBILE_VENDOR__\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/__VER__ Mobile Safari\/537\.36/]},firefox:{linux:[/Mozilla\/5\.0 \(X11;( U; | )Linux (x86_64|x86_64|i686)(; en-(US|US|GB)|)(; rv:__VER__|)\) Gecko\/20[01][6710][012][96124][01][149] Firefox\/__VER__/],mac:[/Mozilla\/5\.0 \(Macintosh; Intel Mac OS X 1[01]_(1|)[0-7](_[1-7]|); rv:__VER__\) Gecko\/20[01][01]0101 Firefox\/__VER__/],win:[/Mozilla\/5\.0 \(Windows NT 1(0|0|1)\.0; (WOW64|Win64|Win64)(; x64|; x64|); rv:__VER__\) Gecko\/20[01][01]0101 Firefox\/__VER__(\/[a-zA-Z0-9]{9,16}(-\d{2}|)|)/],android:[/Mozilla\/5\.0 \(Android( (9|10|10|11)(\.[0-4]||)|); (Tablet|Mobile); rv:__VER__\) Gecko\/__VER__ Firefox\/__VER__/]},safari:{iphone:[/Mozilla\/5\.0 \(iPhone; CPU iPhone OS 1[3-5]_[1-5] like Mac OS X\) AppleWebKit\/(__VER__|__VER__|600\.[1-8]\.[12][0-7]|537\.36) \(KHTML, like Gecko\) Version\/1[0-4]\.[0-7](\.[1-9][0-7]|) Mobile\/[A-Z0-9]{6} Safari\/__VER__/],mac:[/Mozilla\/5\.0 \(Macintosh; Intel Mac OS X 1[01]_(1|)[0-7](_[1-7]|)\) AppleWebKit\/(__VER__|__VER__|600\.[1-8]\.[12][0-7]|537\.36) \(KHTML, like Gecko\) Version\/1[0-4]\.[0-7](\.[1-9][0-7]|) Safari\/__VER__/]}},this.mobileVendors=["SM-T510","SM-T295","SM-T515","SM-T860","SM-T720","SM-T595","SM-T290","SM-T865","SM-T835","SM-T725","SM-P610","SM-T590","SM-P615","TV BOX","SM-T830","Lenovo TB-X505X","SM-T500","Lenovo TB-X505F","Lenovo TB-X606F","SM-P205","SM-T505","MRX-W09","Lenovo YT-X705F","Lenovo TB-X505L","MRX-AL09","SCM-W09","Lenovo TB-X606X","P20HD_EEA","SM-A105M","iPlay_20","Lenovo TB-X606V","H96 Max RK3318","TVBOX","SM-T387V","Lenovo YT-X705L","Lenovo TB-X306X","Lenovo TB-X306F","SM-T870","Redmi Note 8 Pro","Tab8","SM-T970","SM-A205G","Lenovo TB-X605FC","Lenovo TB-J606F","e-tab 20","ADT1061","SM-T307U","100003562","MBOX","Lenovo TB-X605LC","M40_EEA","M2003J15SC","100003561","X109","Redmi Note 8","Lenovo TB-8705F","A860","SM-A107M","Redmi Note 7","BAH3-W09","BAH3-L09","TX6s","SM-T507","P20HD_ROW","Magnet_G30","SM-T875","SM-T387W","MI PAD 4","Lenovo YT-X705X","Lenovo TB-X606FA","SM-P200","SM-A207M","M2004J19C","X104-EEA","SM-T837V","SM-A307GT","AGS3-W09","SM-T505N","SM-A105F","Magnet_G50","A850","8092","100015685-A","X88pro10.q2.0.6330.d4","SM-T975","SM-G973F","J5"]}randomMobileVendor(){return this.mobileVendors[Math.floor(Math.random()*this.mobileVendors.length)]}pickRandomRegExp(e){return e[Math.floor(Math.random()*e.length)]}generate(e){0===e.length&&(e=[n.chromeWin,n.chromeLinux,n.chromeMac]);const t=e[Math.floor(Math.random()*e.length)],r=new RegExp("__VER__","g"),s=new RegExp("__MOBILE_VENDOR__","g");switch(t){case n.chromeLinux:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.linux)).gen().replace(r,o.ej.version()),engine:"blink",osType:"linux"};case n.chromeMac:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.mac)).gen().replace(r,o.ej.version()),engine:"blink",osType:"macOS"};case n.chromeWin:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.win)).gen().replace(r,o.ej.version()),engine:"blink",osType:"windows"};case n.chromeAndroid:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.android)).gen().replace(r,o.ej.version()).replace(s,this.randomMobileVendor()),engine:"blink",osType:"android"};case n.firefoxLinux:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.firefox.linux)).gen().replace(r,o.R4.version()),engine:"gecko",osType:"linux"};case n.firefoxMac:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.firefox.mac)).gen().replace(r,o.R4.version()),engine:"gecko",osType:"macOS"};case n.firefoxWin:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.firefox.win)).gen().replace(r,o.R4.version()),engine:"gecko",osType:"windows"};case n.firefoxAndroid:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.firefox.android)).gen().replace(r,o.R4.version()),engine:"gecko",osType:"android"};case n.operaWin:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.win)).gen().replace(r,o.ej.version())+" OPR/"+o.E7.version(),engine:"blink",osType:"windows"};case n.operaMac:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.mac)).gen().replace(r,o.ej.version())+" OPR/"+o.E7.version(),engine:"blink",osType:"macOS"};case n.safariIphone:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.safari.iphone)).gen().replace(r,o.Ps.version()),engine:"webkit",osType:"iOS"};case n.safariMac:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.safari.mac)).gen().replace(r,o.Ps.version()),engine:"webkit",osType:"macOS"};case n.edgeWin:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.win)).gen().replace(r,o.ej.version())+" Edg/"+o.WO.version(),engine:"blink",osType:"windows"};case n.edgeMac:return{useragent:new(i())(this.pickRandomRegExp(this.commonPatterns.chrome.mac)).gen().replace(r,o.ej.version())+" Edg/"+o.WO.version(),engine:"blink",osType:"macOS"};default:throw new Error("Unsupported type requested")}}}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={id:e,exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,s,i)=>{if(!r){var o=1/0;for(h=0;h<e.length;h++){for(var[r,s,i]=e[h],a=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(a=!1,i<o&&(o=i));if(a){e.splice(h--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[r,s,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=352,(()=>{var e={352:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,i,[o,a,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(c)var h=c(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[o[l]]=0;return n.O(h)},r=self.webpackChunkrandom_user_agent=self.webpackChunkrandom_user_agent||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[736],(()=>n(5813)));s=n.O(s)})();