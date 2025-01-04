(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ya(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Te={},mr=[],Ct=()=>{},og=()=>!1,eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xa=n=>n.startsWith("onUpdate:"),it=Object.assign,Za=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ag=Object.prototype.hasOwnProperty,ye=(n,e)=>ag.call(n,e),te=Array.isArray,_r=n=>ks(n)==="[object Map]",to=n=>ks(n)==="[object Set]",Ul=n=>ks(n)==="[object Date]",oe=n=>typeof n=="function",De=n=>typeof n=="string",Vt=n=>typeof n=="symbol",Ae=n=>n!==null&&typeof n=="object",Nh=n=>(Ae(n)||oe(n))&&oe(n.then)&&oe(n.catch),Vh=Object.prototype.toString,ks=n=>Vh.call(n),cg=n=>ks(n).slice(8,-1),xh=n=>ks(n)==="[object Object]",ec=n=>De(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,as=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},lg=/-(\w)/g,wn=no(n=>n.replace(lg,(e,t)=>t?t.toUpperCase():"")),ug=/\B([A-Z])/g,tr=no(n=>n.replace(ug,"-$1").toLowerCase()),Mh=no(n=>n.charAt(0).toUpperCase()+n.slice(1)),zo=no(n=>n?`on${Mh(n)}`:""),vn=(n,e)=>!Object.is(n,e),mi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Lh=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Fh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bl;const ro=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tc(n){if(te(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=De(r)?pg(r):tc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(De(n)||Ae(n))return n}const hg=/;(?![^(]*\))/g,dg=/:([^]+)/,fg=/\/\*[^]*?\*\//g;function pg(n){const e={};return n.replace(fg,"").split(hg).forEach(t=>{if(t){const r=t.split(dg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nc(n){let e="";if(De(n))e=n;else if(te(n))for(let t=0;t<n.length;t++){const r=nc(n[t]);r&&(e+=r+" ")}else if(Ae(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mg=Ya(gg);function Uh(n){return!!n||n===""}function _g(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=so(n[r],e[r]);return t}function so(n,e){if(n===e)return!0;let t=Ul(n),r=Ul(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Vt(n),r=Vt(e),t||r)return n===e;if(t=te(n),r=te(e),t||r)return t&&r?_g(n,e):!1;if(t=Ae(n),r=Ae(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!so(n[a],e[a]))return!1}}return String(n)===String(e)}function yg(n,e){return n.findIndex(t=>so(t,e))}const Bh=n=>!!(n&&n.__v_isRef===!0),pr=n=>De(n)?n:n==null?"":te(n)||Ae(n)&&(n.toString===Vh||!oe(n.toString))?Bh(n)?pr(n.value):JSON.stringify(n,jh,2):String(n),jh=(n,e)=>Bh(e)?jh(n,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ko(r,i)+" =>"]=s,t),{})}:to(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ko(t))}:Vt(e)?Ko(e):Ae(e)&&!te(e)&&!xh(e)?String(e):e,Ko=(n,e="")=>{var t;return Vt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class vg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ht;try{return ht=this,e()}finally{ht=t}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Eg(){return ht}let Ie;const Go=new WeakSet;class $h{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&ht.active&&ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jl(this),zh(this);const e=Ie,t=It;Ie=this,It=!0;try{return this.fn()}finally{Kh(this),Ie=e,It=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ic(e);this.deps=this.depsTail=void 0,jl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ma(this)&&this.run()}get dirty(){return ma(this)}}let qh=0,cs,ls;function Hh(n,e=!1){if(n.flags|=8,e){n.next=ls,ls=n;return}n.next=cs,cs=n}function rc(){qh++}function sc(){if(--qh>0)return;if(ls){let e=ls;for(ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;cs;){let e=cs;for(cs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function zh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kh(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ic(r),Tg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ma(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Gh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ys))return;n.globalVersion=ys;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ma(n)){n.flags&=-3;return}const t=Ie,r=It;Ie=n,It=!0;try{zh(n);const s=n.fn(n._value);(e.version===0||vn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ie=t,It=r,Kh(n),n.flags&=-3}}function ic(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ic(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Tg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let It=!0;const Wh=[];function kn(){Wh.push(It),It=!1}function Dn(){const n=Wh.pop();It=n===void 0?!0:n}function jl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ie;Ie=void 0;try{e()}finally{Ie=t}}}let ys=0;class Ig{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ie||!It||Ie===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ie)t=this.activeLink=new Ig(Ie,this),Ie.deps?(t.prevDep=Ie.depsTail,Ie.depsTail.nextDep=t,Ie.depsTail=t):Ie.deps=Ie.depsTail=t,Qh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ie.depsTail,t.nextDep=void 0,Ie.depsTail.nextDep=t,Ie.depsTail=t,Ie.deps===t&&(Ie.deps=r)}return t}trigger(e){this.version++,ys++,this.notify(e)}notify(e){rc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sc()}}}function Qh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qh(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _a=new WeakMap,zn=Symbol(""),ya=Symbol(""),vs=Symbol("");function Qe(n,e,t){if(It&&Ie){let r=_a.get(n);r||_a.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new oc),s.map=r,s.key=t),s.track()}}function Gt(n,e,t,r,s,i){const a=_a.get(n);if(!a){ys++;return}const c=l=>{l&&l.trigger()};if(rc(),e==="clear")a.forEach(c);else{const l=te(n),d=l&&ec(t);if(l&&t==="length"){const f=Number(r);a.forEach((g,w)=>{(w==="length"||w===vs||!Vt(w)&&w>=f)&&c(g)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),d&&c(a.get(vs)),e){case"add":l?d&&c(a.get("length")):(c(a.get(zn)),_r(n)&&c(a.get(ya)));break;case"delete":l||(c(a.get(zn)),_r(n)&&c(a.get(ya)));break;case"set":_r(n)&&c(a.get(zn));break}}sc()}function cr(n){const e=_e(n);return e===n?e:(Qe(e,"iterate",vs),_t(n)?e:e.map(Je))}function io(n){return Qe(n=_e(n),"iterate",vs),n}const wg={__proto__:null,[Symbol.iterator](){return Wo(this,Symbol.iterator,Je)},concat(...n){return cr(this).concat(...n.map(e=>te(e)?cr(e):e))},entries(){return Wo(this,"entries",n=>(n[1]=Je(n[1]),n))},every(n,e){return zt(this,"every",n,e,void 0,arguments)},filter(n,e){return zt(this,"filter",n,e,t=>t.map(Je),arguments)},find(n,e){return zt(this,"find",n,e,Je,arguments)},findIndex(n,e){return zt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return zt(this,"findLast",n,e,Je,arguments)},findLastIndex(n,e){return zt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return zt(this,"forEach",n,e,void 0,arguments)},includes(...n){return Qo(this,"includes",n)},indexOf(...n){return Qo(this,"indexOf",n)},join(n){return cr(this).join(n)},lastIndexOf(...n){return Qo(this,"lastIndexOf",n)},map(n,e){return zt(this,"map",n,e,void 0,arguments)},pop(){return ts(this,"pop")},push(...n){return ts(this,"push",n)},reduce(n,...e){return $l(this,"reduce",n,e)},reduceRight(n,...e){return $l(this,"reduceRight",n,e)},shift(){return ts(this,"shift")},some(n,e){return zt(this,"some",n,e,void 0,arguments)},splice(...n){return ts(this,"splice",n)},toReversed(){return cr(this).toReversed()},toSorted(n){return cr(this).toSorted(n)},toSpliced(...n){return cr(this).toSpliced(...n)},unshift(...n){return ts(this,"unshift",n)},values(){return Wo(this,"values",Je)}};function Wo(n,e,t){const r=io(n),s=r[e]();return r!==n&&!_t(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const Ag=Array.prototype;function zt(n,e,t,r,s,i){const a=io(n),c=a!==n&&!_t(n),l=a[e];if(l!==Ag[e]){const g=l.apply(n,i);return c?Je(g):g}let d=t;a!==n&&(c?d=function(g,w){return t.call(this,Je(g),w,n)}:t.length>2&&(d=function(g,w){return t.call(this,g,w,n)}));const f=l.call(a,d,r);return c&&s?s(f):f}function $l(n,e,t,r){const s=io(n);let i=t;return s!==n&&(_t(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Je(c),l,n)}),s[e](i,...r)}function Qo(n,e,t){const r=_e(n);Qe(r,"iterate",vs);const s=r[e](...t);return(s===-1||s===!1)&&uc(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function ts(n,e,t=[]){kn(),rc();const r=_e(n)[e].apply(n,t);return sc(),Dn(),r}const bg=Ya("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vt));function Rg(n){Vt(n)||(n=String(n));const e=_e(this);return Qe(e,"has",n),e.hasOwnProperty(n)}class Yh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Mg:td:i?ed:Zh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=te(e);if(!s){let l;if(a&&(l=wg[t]))return l;if(t==="hasOwnProperty")return Rg}const c=Reflect.get(e,t,Xe(e)?e:r);return(Vt(t)?Jh.has(t):bg(t))||(s||Qe(e,"get",t),i)?c:Xe(c)?a&&ec(t)?c:c.value:Ae(c)?s?nd(c):cc(c):c}}class Xh extends Yh{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Yn(i);if(!_t(r)&&!Yn(r)&&(i=_e(i),r=_e(r)),!te(e)&&Xe(i)&&!Xe(r))return l?!1:(i.value=r,!0)}const a=te(e)&&ec(t)?Number(t)<e.length:ye(e,t),c=Reflect.set(e,t,r,Xe(e)?e:s);return e===_e(s)&&(a?vn(r,i)&&Gt(e,"set",t,r):Gt(e,"add",t,r)),c}deleteProperty(e,t){const r=ye(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Gt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Vt(t)||!Jh.has(t))&&Qe(e,"has",t),r}ownKeys(e){return Qe(e,"iterate",te(e)?"length":zn),Reflect.ownKeys(e)}}class Sg extends Yh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Cg=new Xh,Pg=new Sg,kg=new Xh(!0);const va=n=>n,ii=n=>Reflect.getPrototypeOf(n);function Dg(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=_r(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,d=s[n](...r),f=t?va:e?Ea:Je;return!e&&Qe(i,"iterate",l?ya:zn),{next(){const{value:g,done:w}=d.next();return w?{value:g,done:w}:{value:c?[f(g[0]),f(g[1])]:f(g),done:w}},[Symbol.iterator](){return this}}}}function oi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Og(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(vn(s,c)&&Qe(a,"get",s),Qe(a,"get",c));const{has:l}=ii(a),d=e?va:n?Ea:Je;if(l.call(a,s))return d(i.get(s));if(l.call(a,c))return d(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Qe(_e(s),"iterate",zn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(vn(s,c)&&Qe(a,"has",s),Qe(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),d=e?va:n?Ea:Je;return!n&&Qe(l,"iterate",zn),c.forEach((f,g)=>s.call(i,d(f),d(g),a))}};return it(t,n?{add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear")}:{add(s){!e&&!_t(s)&&!Yn(s)&&(s=_e(s));const i=_e(this);return ii(i).has.call(i,s)||(i.add(s),Gt(i,"add",s,s)),this},set(s,i){!e&&!_t(i)&&!Yn(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=ii(a);let d=c.call(a,s);d||(s=_e(s),d=c.call(a,s));const f=l.call(a,s);return a.set(s,i),d?vn(i,f)&&Gt(a,"set",s,i):Gt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=ii(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const d=i.delete(s);return l&&Gt(i,"delete",s,void 0),d},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Gt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Dg(s,n,e)}),t}function ac(n,e){const t=Og(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ye(t,s)&&s in r?t:r,s,i)}const Ng={get:ac(!1,!1)},Vg={get:ac(!1,!0)},xg={get:ac(!0,!1)};const Zh=new WeakMap,ed=new WeakMap,td=new WeakMap,Mg=new WeakMap;function Lg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fg(n){return n.__v_skip||!Object.isExtensible(n)?0:Lg(cg(n))}function cc(n){return Yn(n)?n:lc(n,!1,Cg,Ng,Zh)}function Ug(n){return lc(n,!1,kg,Vg,ed)}function nd(n){return lc(n,!0,Pg,xg,td)}function lc(n,e,t,r,s){if(!Ae(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=Fg(n);if(a===0)return n;const c=new Proxy(n,a===2?r:t);return s.set(n,c),c}function yr(n){return Yn(n)?yr(n.__v_raw):!!(n&&n.__v_isReactive)}function Yn(n){return!!(n&&n.__v_isReadonly)}function _t(n){return!!(n&&n.__v_isShallow)}function uc(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function Bg(n){return!ye(n,"__v_skip")&&Object.isExtensible(n)&&Lh(n,"__v_skip",!0),n}const Je=n=>Ae(n)?cc(n):n,Ea=n=>Ae(n)?nd(n):n;function Xe(n){return n?n.__v_isRef===!0:!1}function Pi(n){return jg(n,!1)}function jg(n,e){return Xe(n)?n:new $g(n,e)}class $g{constructor(e,t){this.dep=new oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:Je(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||_t(e)||Yn(e);e=r?e:_e(e),vn(e,t)&&(this._rawValue=e,this._value=r?e:Je(e),this.dep.trigger())}}function qg(n){return Xe(n)?n.value:n}const Hg={get:(n,e,t)=>e==="__v_raw"?n:qg(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Xe(s)&&!Xe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function rd(n){return yr(n)?n:new Proxy(n,Hg)}class zg{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return Hh(this,!0),!0}get value(){const e=this.dep.track();return Gh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kg(n,e,t=!1){let r,s;return oe(n)?r=n:(r=n.get,s=n.set),new zg(r,s,t)}const ai={},ki=new WeakMap;let $n;function Gg(n,e=!1,t=$n){if(t){let r=ki.get(t);r||ki.set(t,r=[]),r.push(n)}}function Wg(n,e,t=Te){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,d=j=>s?j:_t(j)||s===!1||s===0?Wt(j,1):Wt(j);let f,g,w,S,O=!1,L=!1;if(Xe(n)?(g=()=>n.value,O=_t(n)):yr(n)?(g=()=>d(n),O=!0):te(n)?(L=!0,O=n.some(j=>yr(j)||_t(j)),g=()=>n.map(j=>{if(Xe(j))return j.value;if(yr(j))return d(j);if(oe(j))return l?l(j,2):j()})):oe(n)?e?g=l?()=>l(n,2):n:g=()=>{if(w){kn();try{w()}finally{Dn()}}const j=$n;$n=f;try{return l?l(n,3,[S]):n(S)}finally{$n=j}}:g=Ct,e&&s){const j=g,ae=s===!0?1/0:s;g=()=>Wt(j(),ae)}const M=Eg(),K=()=>{f.stop(),M&&M.active&&Za(M.effects,f)};if(i&&e){const j=e;e=(...ae)=>{j(...ae),K()}}let Y=L?new Array(n.length).fill(ai):ai;const G=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const ae=f.run();if(s||O||(L?ae.some((le,I)=>vn(le,Y[I])):vn(ae,Y))){w&&w();const le=$n;$n=f;try{const I=[ae,Y===ai?void 0:L&&Y[0]===ai?[]:Y,S];l?l(e,3,I):e(...I),Y=ae}finally{$n=le}}}else f.run()};return c&&c(G),f=new $h(g),f.scheduler=a?()=>a(G,!1):G,S=j=>Gg(j,!1,f),w=f.onStop=()=>{const j=ki.get(f);if(j){if(l)l(j,4);else for(const ae of j)ae();ki.delete(f)}},e?r?G(!0):Y=f.run():a?a(G.bind(null,!0),!0):f.run(),K.pause=f.pause.bind(f),K.resume=f.resume.bind(f),K.stop=K,K}function Wt(n,e=1/0,t){if(e<=0||!Ae(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Xe(n))Wt(n.value,e,t);else if(te(n))for(let r=0;r<n.length;r++)Wt(n[r],e,t);else if(to(n)||_r(n))n.forEach(r=>{Wt(r,e,t)});else if(xh(n)){for(const r in n)Wt(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Wt(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ds(n,e,t,r){try{return r?n(...r):n()}catch(s){oo(s,e,t)}}function xt(n,e,t,r){if(oe(n)){const s=Ds(n,e,t,r);return s&&Nh(s)&&s.catch(i=>{oo(i,e,t)}),s}if(te(n)){const s=[];for(let i=0;i<n.length;i++)s.push(xt(n[i],e,t,r));return s}}function oo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Te;if(e){let c=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,l,d)===!1)return}c=c.parent}if(i){kn(),Ds(i,null,10,[n,l,d]),Dn();return}}Qg(n,t,s,r,a)}function Qg(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const nt=[];let bt=-1;const vr=[];let un=null,lr=0;const sd=Promise.resolve();let Di=null;function id(n){const e=Di||sd;return n?e.then(this?n.bind(this):n):e}function Jg(n){let e=bt+1,t=nt.length;for(;e<t;){const r=e+t>>>1,s=nt[r],i=Es(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function hc(n){if(!(n.flags&1)){const e=Es(n),t=nt[nt.length-1];!t||!(n.flags&2)&&e>=Es(t)?nt.push(n):nt.splice(Jg(e),0,n),n.flags|=1,od()}}function od(){Di||(Di=sd.then(cd))}function Yg(n){te(n)?vr.push(...n):un&&n.id===-1?un.splice(lr+1,0,n):n.flags&1||(vr.push(n),n.flags|=1),od()}function ql(n,e,t=bt+1){for(;t<nt.length;t++){const r=nt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;nt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ad(n){if(vr.length){const e=[...new Set(vr)].sort((t,r)=>Es(t)-Es(r));if(vr.length=0,un){un.push(...e);return}for(un=e,lr=0;lr<un.length;lr++){const t=un[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}un=null,lr=0}}const Es=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cd(n){try{for(bt=0;bt<nt.length;bt++){const e=nt[bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bt<nt.length;bt++){const e=nt[bt];e&&(e.flags&=-2)}bt=-1,nt.length=0,ad(),Di=null,(nt.length||vr.length)&&cd()}}let mt=null,ld=null;function Oi(n){const e=mt;return mt=n,ld=n&&n.type.__scopeId||null,e}function Xg(n,e=mt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Xl(-1);const i=Oi(e);let a;try{a=n(...s)}finally{Oi(i),r._d&&Xl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Zg(n,e){if(mt===null)return n;const t=uo(mt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Te]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&Wt(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function Bn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(kn(),xt(l,t,8,[n.el,c,n,e]),Dn())}}const em=Symbol("_vte"),tm=n=>n.__isTeleport;function dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ni(n,e,t,r,s=!1){if(te(n)){n.forEach((O,L)=>Ni(O,e&&(te(e)?e[L]:e),t,r,s));return}if(us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ni(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?uo(r.component):r.el,a=s?null:i,{i:c,r:l}=n,d=e&&e.r,f=c.refs===Te?c.refs={}:c.refs,g=c.setupState,w=_e(g),S=g===Te?()=>!1:O=>ye(w,O);if(d!=null&&d!==l&&(De(d)?(f[d]=null,S(d)&&(g[d]=null)):Xe(d)&&(d.value=null)),oe(l))Ds(l,c,12,[a,f]);else{const O=De(l),L=Xe(l);if(O||L){const M=()=>{if(n.f){const K=O?S(l)?g[l]:f[l]:l.value;s?te(K)&&Za(K,i):te(K)?K.includes(i)||K.push(i):O?(f[l]=[i],S(l)&&(g[l]=f[l])):(l.value=[i],n.k&&(f[n.k]=l.value))}else O?(f[l]=a,S(l)&&(g[l]=a)):L&&(l.value=a,n.k&&(f[n.k]=a))};a?(M.id=-1,ut(M,t)):M()}}}ro().requestIdleCallback;ro().cancelIdleCallback;const us=n=>!!n.type.__asyncLoader,hd=n=>n.type.__isKeepAlive;function nm(n,e){dd(n,"a",e)}function rm(n,e){dd(n,"da",e)}function dd(n,e,t=rt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ao(e,r,t),t){let s=t.parent;for(;s&&s.parent;)hd(s.parent.vnode)&&sm(r,e,t,s),s=s.parent}}function sm(n,e,t,r){const s=ao(e,n,r,!0);pd(()=>{Za(r[e],s)},t)}function ao(n,e,t=rt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{kn();const c=Os(t),l=xt(e,t,n,a);return c(),Dn(),l});return r?s.unshift(i):s.push(i),i}}const nn=n=>(e,t=rt)=>{(!ws||n==="sp")&&ao(n,(...r)=>e(...r),t)},im=nn("bm"),fd=nn("m"),om=nn("bu"),am=nn("u"),cm=nn("bum"),pd=nn("um"),lm=nn("sp"),um=nn("rtg"),hm=nn("rtc");function dm(n,e=rt){ao("ec",n,e)}const fm=Symbol.for("v-ndc");function gd(n,e,t,r){let s;const i=t,a=te(n);if(a||De(n)){const c=a&&yr(n);let l=!1;c&&(l=!_t(n),n=io(n)),s=new Array(n.length);for(let d=0,f=n.length;d<f;d++)s[d]=e(l?Je(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ae(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,d=c.length;l<d;l++){const f=c[l];s[l]=e(n[f],f,l,i)}}else s=[];return s}const Ta=n=>n?Ld(n)?uo(n):Ta(n.parent):null,hs=it(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ta(n.parent),$root:n=>Ta(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_d(n),$forceUpdate:n=>n.f||(n.f=()=>{hc(n.update)}),$nextTick:n=>n.n||(n.n=id.bind(n.proxy)),$watch:n=>xm.bind(n)}),Jo=(n,e)=>n!==Te&&!n.__isScriptSetup&&ye(n,e),pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Jo(r,e))return a[e]=1,r[e];if(s!==Te&&ye(s,e))return a[e]=2,s[e];if((d=n.propsOptions[0])&&ye(d,e))return a[e]=3,i[e];if(t!==Te&&ye(t,e))return a[e]=4,t[e];Ia&&(a[e]=0)}}const f=hs[e];let g,w;if(f)return e==="$attrs"&&Qe(n.attrs,"get",""),f(n);if((g=c.__cssModules)&&(g=g[e]))return g;if(t!==Te&&ye(t,e))return a[e]=4,t[e];if(w=l.config.globalProperties,ye(w,e))return w[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Jo(s,e)?(s[e]=t,!0):r!==Te&&ye(r,e)?(r[e]=t,!0):ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!t[a]||n!==Te&&ye(n,a)||Jo(e,a)||(c=i[0])&&ye(c,a)||ye(r,a)||ye(hs,a)||ye(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hl(n){return te(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ia=!0;function gm(n){const e=_d(n),t=n.proxy,r=n.ctx;Ia=!1,e.beforeCreate&&zl(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:d,created:f,beforeMount:g,mounted:w,beforeUpdate:S,updated:O,activated:L,deactivated:M,beforeDestroy:K,beforeUnmount:Y,destroyed:G,unmounted:j,render:ae,renderTracked:le,renderTriggered:I,errorCaptured:m,serverPrefetch:v,expose:T,inheritAttrs:A,components:R,directives:y,filters:ct}=e;if(d&&mm(d,r,null),a)for(const ve in a){const ge=a[ve];oe(ge)&&(r[ve]=ge.bind(t))}if(s){const ve=s.call(t,t);Ae(ve)&&(n.data=cc(ve))}if(Ia=!0,i)for(const ve in i){const ge=i[ve],yt=oe(ge)?ge.bind(t,t):oe(ge.get)?ge.get.bind(t,t):Ct,Nn=!oe(ge)&&oe(ge.set)?ge.set.bind(t):Ct,jt=Ud({get:yt,set:Nn});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Oe=>jt.value=Oe})}if(c)for(const ve in c)md(c[ve],r,t,ve);if(l){const ve=oe(l)?l.call(t):l;Reflect.ownKeys(ve).forEach(ge=>{Im(ge,ve[ge])})}f&&zl(f,n,"c");function Le(ve,ge){te(ge)?ge.forEach(yt=>ve(yt.bind(t))):ge&&ve(ge.bind(t))}if(Le(im,g),Le(fd,w),Le(om,S),Le(am,O),Le(nm,L),Le(rm,M),Le(dm,m),Le(hm,le),Le(um,I),Le(cm,Y),Le(pd,j),Le(lm,v),te(T))if(T.length){const ve=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>t[ge],set:yt=>t[ge]=yt})})}else n.exposed||(n.exposed={});ae&&n.render===Ct&&(n.render=ae),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),y&&(n.directives=y),v&&ud(n)}function mm(n,e,t=Ct){te(n)&&(n=wa(n));for(const r in n){const s=n[r];let i;Ae(s)?"default"in s?i=_i(s.from||r,s.default,!0):i=_i(s.from||r):i=_i(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function zl(n,e,t){xt(te(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function md(n,e,t,r){let s=r.includes(".")?Dd(t,r):()=>t[r];if(De(n)){const i=e[n];oe(i)&&Xo(s,i)}else if(oe(n))Xo(s,n.bind(t));else if(Ae(n))if(te(n))n.forEach(i=>md(i,e,t,r));else{const i=oe(n.handler)?n.handler.bind(t):e[n.handler];oe(i)&&Xo(s,i,n)}}function _d(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(d=>Vi(l,d,a,!0)),Vi(l,e,a)),Ae(e)&&i.set(e,l),l}function Vi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Vi(n,i,t,!0),s&&s.forEach(a=>Vi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=_m[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const _m={data:Kl,props:Gl,emits:Gl,methods:rs,computed:rs,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:rs,directives:rs,watch:vm,provide:Kl,inject:ym};function Kl(n,e){return e?n?function(){return it(oe(n)?n.call(this,this):n,oe(e)?e.call(this,this):e)}:e:n}function ym(n,e){return rs(wa(n),wa(e))}function wa(n){if(te(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tt(n,e){return n?[...new Set([].concat(n,e))]:e}function rs(n,e){return n?it(Object.create(null),n,e):e}function Gl(n,e){return n?te(n)&&te(e)?[...new Set([...n,...e])]:it(Object.create(null),Hl(n),Hl(e??{})):e}function vm(n,e){if(!n)return e;if(!e)return n;const t=it(Object.create(null),n);for(const r in e)t[r]=tt(n[r],e[r]);return t}function yd(){return{app:null,config:{isNativeTag:og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Em=0;function Tm(n,e){return function(r,s=null){oe(r)||(r=it({},r)),s!=null&&!Ae(s)&&(s=null);const i=yd(),a=new WeakSet,c=[];let l=!1;const d=i.app={_uid:Em++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:r_,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&oe(f.install)?(a.add(f),f.install(d,...g)):oe(f)&&(a.add(f),f(d,...g))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,g){return g?(i.components[f]=g,d):i.components[f]},directive(f,g){return g?(i.directives[f]=g,d):i.directives[f]},mount(f,g,w){if(!l){const S=d._ceVNode||Pt(r,s);return S.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),n(S,f,w),l=!0,d._container=f,f.__vue_app__=d,uo(S.component)}},onUnmount(f){c.push(f)},unmount(){l&&(xt(c,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(f,g){return i.provides[f]=g,d},runWithContext(f){const g=Er;Er=d;try{return f()}finally{Er=g}}};return d}}let Er=null;function Im(n,e){if(rt){let t=rt.provides;const r=rt.parent&&rt.parent.provides;r===t&&(t=rt.provides=Object.create(r)),t[n]=e}}function _i(n,e,t=!1){const r=rt||mt;if(r||Er){const s=Er?Er._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&oe(e)?e.call(r&&r.proxy):e}}const vd={},Ed=()=>Object.create(vd),Td=n=>Object.getPrototypeOf(n)===vd;function wm(n,e,t,r=!1){const s={},i=Ed();n.propsDefaults=Object.create(null),Id(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Ug(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Am(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let w=f[g];if(co(n.emitsOptions,w))continue;const S=e[w];if(l)if(ye(i,w))S!==i[w]&&(i[w]=S,d=!0);else{const O=wn(w);s[O]=Aa(l,c,O,S,n,!1)}else S!==i[w]&&(i[w]=S,d=!0)}}}else{Id(n,e,s,i)&&(d=!0);let f;for(const g in c)(!e||!ye(e,g)&&((f=tr(g))===g||!ye(e,f)))&&(l?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=Aa(l,c,g,void 0,n,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ye(e,g))&&(delete i[g],d=!0)}d&&Gt(n.attrs,"set","")}function Id(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(as(l))continue;const d=e[l];let f;s&&ye(s,f=wn(l))?!i||!i.includes(f)?t[f]=d:(c||(c={}))[f]=d:co(n.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,a=!0)}if(i){const l=_e(t),d=c||Te;for(let f=0;f<i.length;f++){const g=i[f];t[g]=Aa(s,l,g,d[g],n,!ye(d,g))}}return a}function Aa(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ye(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&oe(l)){const{propsDefaults:d}=s;if(t in d)r=d[t];else{const f=Os(s);r=d[t]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===tr(t))&&(r=!0))}return r}const bm=new WeakMap;function wd(n,e,t=!1){const r=t?bm:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!oe(n)){const f=g=>{l=!0;const[w,S]=wd(g,e,!0);it(a,w),S&&c.push(...S)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!l)return Ae(n)&&r.set(n,mr),mr;if(te(i))for(let f=0;f<i.length;f++){const g=wn(i[f]);Wl(g)&&(a[g]=Te)}else if(i)for(const f in i){const g=wn(f);if(Wl(g)){const w=i[f],S=a[g]=te(w)||oe(w)?{type:w}:it({},w),O=S.type;let L=!1,M=!0;if(te(O))for(let K=0;K<O.length;++K){const Y=O[K],G=oe(Y)&&Y.name;if(G==="Boolean"){L=!0;break}else G==="String"&&(M=!1)}else L=oe(O)&&O.name==="Boolean";S[0]=L,S[1]=M,(L||ye(S,"default"))&&c.push(g)}}const d=[a,c];return Ae(n)&&r.set(n,d),d}function Wl(n){return n[0]!=="$"&&!as(n)}const Ad=n=>n[0]==="_"||n==="$stable",fc=n=>te(n)?n.map(Rt):[Rt(n)],Rm=(n,e,t)=>{if(e._n)return e;const r=Xg((...s)=>fc(e(...s)),t);return r._c=!1,r},bd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Ad(s))continue;const i=n[s];if(oe(i))e[s]=Rm(s,i,r);else if(i!=null){const a=fc(i);e[s]=()=>a}}},Rd=(n,e)=>{const t=fc(e);n.slots.default=()=>t},Sd=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},Sm=(n,e,t)=>{const r=n.slots=Ed();if(n.vnode.shapeFlag&32){const s=e._;s?(Sd(r,e,t),t&&Lh(r,"_",s,!0)):bd(e,r)}else e&&Rd(n,e)},Cm=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Te;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Sd(s,e,t):(i=!e.$stable,bd(e,s)),a=e}else e&&(Rd(n,e),a={default:1});if(i)for(const c in s)!Ad(c)&&a[c]==null&&delete s[c]},ut=$m;function Pm(n){return km(n)}function km(n,e){const t=ro();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:d,setElementText:f,parentNode:g,nextSibling:w,setScopeId:S=Ct,insertStaticContent:O}=n,L=(_,E,P,N=null,D=null,V=null,q=void 0,U=null,F=!!E.dynamicChildren)=>{if(_===E)return;_&&!ns(_,E)&&(N=$t(_),Oe(_,D,V,!0),_=null),E.patchFlag===-2&&(F=!1,E.dynamicChildren=null);const{type:x,ref:Q,shapeFlag:H}=E;switch(x){case lo:M(_,E,P,N);break;case Ts:K(_,E,P,N);break;case Zo:_==null&&Y(E,P,N,q);break;case Et:R(_,E,P,N,D,V,q,U,F);break;default:H&1?ae(_,E,P,N,D,V,q,U,F):H&6?y(_,E,P,N,D,V,q,U,F):(H&64||H&128)&&x.process(_,E,P,N,D,V,q,U,F,wt)}Q!=null&&D&&Ni(Q,_&&_.ref,V,E||_,!E)},M=(_,E,P,N)=>{if(_==null)r(E.el=c(E.children),P,N);else{const D=E.el=_.el;E.children!==_.children&&d(D,E.children)}},K=(_,E,P,N)=>{_==null?r(E.el=l(E.children||""),P,N):E.el=_.el},Y=(_,E,P,N)=>{[_.el,_.anchor]=O(_.children,E,P,N,_.el,_.anchor)},G=({el:_,anchor:E},P,N)=>{let D;for(;_&&_!==E;)D=w(_),r(_,P,N),_=D;r(E,P,N)},j=({el:_,anchor:E})=>{let P;for(;_&&_!==E;)P=w(_),s(_),_=P;s(E)},ae=(_,E,P,N,D,V,q,U,F)=>{E.type==="svg"?q="svg":E.type==="math"&&(q="mathml"),_==null?le(E,P,N,D,V,q,U,F):v(_,E,D,V,q,U,F)},le=(_,E,P,N,D,V,q,U)=>{let F,x;const{props:Q,shapeFlag:H,transition:W,dirs:Z}=_;if(F=_.el=a(_.type,V,Q&&Q.is,Q),H&8?f(F,_.children):H&16&&m(_.children,F,null,N,D,Yo(_,V),q,U),Z&&Bn(_,null,N,"created"),I(F,_,_.scopeId,q,N),Q){for(const se in Q)se!=="value"&&!as(se)&&i(F,se,null,Q[se],V,N);"value"in Q&&i(F,"value",null,Q.value,V),(x=Q.onVnodeBeforeMount)&&At(x,N,_)}Z&&Bn(_,null,N,"beforeMount");const J=Dm(D,W);J&&W.beforeEnter(F),r(F,E,P),((x=Q&&Q.onVnodeMounted)||J||Z)&&ut(()=>{x&&At(x,N,_),J&&W.enter(F),Z&&Bn(_,null,N,"mounted")},D)},I=(_,E,P,N,D)=>{if(P&&S(_,P),N)for(let V=0;V<N.length;V++)S(_,N[V]);if(D){let V=D.subTree;if(E===V||Nd(V.type)&&(V.ssContent===E||V.ssFallback===E)){const q=D.vnode;I(_,q,q.scopeId,q.slotScopeIds,D.parent)}}},m=(_,E,P,N,D,V,q,U,F=0)=>{for(let x=F;x<_.length;x++){const Q=_[x]=U?hn(_[x]):Rt(_[x]);L(null,Q,E,P,N,D,V,q,U)}},v=(_,E,P,N,D,V,q)=>{const U=E.el=_.el;let{patchFlag:F,dynamicChildren:x,dirs:Q}=E;F|=_.patchFlag&16;const H=_.props||Te,W=E.props||Te;let Z;if(P&&jn(P,!1),(Z=W.onVnodeBeforeUpdate)&&At(Z,P,E,_),Q&&Bn(E,_,P,"beforeUpdate"),P&&jn(P,!0),(H.innerHTML&&W.innerHTML==null||H.textContent&&W.textContent==null)&&f(U,""),x?T(_.dynamicChildren,x,U,P,N,Yo(E,D),V):q||ge(_,E,U,null,P,N,Yo(E,D),V,!1),F>0){if(F&16)A(U,H,W,P,D);else if(F&2&&H.class!==W.class&&i(U,"class",null,W.class,D),F&4&&i(U,"style",H.style,W.style,D),F&8){const J=E.dynamicProps;for(let se=0;se<J.length;se++){const ue=J[se],qe=H[ue],Fe=W[ue];(Fe!==qe||ue==="value")&&i(U,ue,qe,Fe,D,P)}}F&1&&_.children!==E.children&&f(U,E.children)}else!q&&x==null&&A(U,H,W,P,D);((Z=W.onVnodeUpdated)||Q)&&ut(()=>{Z&&At(Z,P,E,_),Q&&Bn(E,_,P,"updated")},N)},T=(_,E,P,N,D,V,q)=>{for(let U=0;U<E.length;U++){const F=_[U],x=E[U],Q=F.el&&(F.type===Et||!ns(F,x)||F.shapeFlag&70)?g(F.el):P;L(F,x,Q,null,N,D,V,q,!0)}},A=(_,E,P,N,D)=>{if(E!==P){if(E!==Te)for(const V in E)!as(V)&&!(V in P)&&i(_,V,E[V],null,D,N);for(const V in P){if(as(V))continue;const q=P[V],U=E[V];q!==U&&V!=="value"&&i(_,V,U,q,D,N)}"value"in P&&i(_,"value",E.value,P.value,D)}},R=(_,E,P,N,D,V,q,U,F)=>{const x=E.el=_?_.el:c(""),Q=E.anchor=_?_.anchor:c("");let{patchFlag:H,dynamicChildren:W,slotScopeIds:Z}=E;Z&&(U=U?U.concat(Z):Z),_==null?(r(x,P,N),r(Q,P,N),m(E.children||[],P,Q,D,V,q,U,F)):H>0&&H&64&&W&&_.dynamicChildren?(T(_.dynamicChildren,W,P,D,V,q,U),(E.key!=null||D&&E===D.subTree)&&Cd(_,E,!0)):ge(_,E,P,Q,D,V,q,U,F)},y=(_,E,P,N,D,V,q,U,F)=>{E.slotScopeIds=U,_==null?E.shapeFlag&512?D.ctx.activate(E,P,N,q,F):ct(E,P,N,D,V,q,F):rn(_,E,F)},ct=(_,E,P,N,D,V,q)=>{const U=_.component=Ym(_,N,D);if(hd(_)&&(U.ctx.renderer=wt),Xm(U,!1,q),U.asyncDep){if(D&&D.registerDep(U,Le,q),!_.el){const F=U.subTree=Pt(Ts);K(null,F,E,P)}}else Le(U,_,E,P,D,V,q)},rn=(_,E,P)=>{const N=E.component=_.component;if(Bm(_,E,P))if(N.asyncDep&&!N.asyncResolved){ve(N,E,P);return}else N.next=E,N.update();else E.el=_.el,N.vnode=E},Le=(_,E,P,N,D,V,q)=>{const U=()=>{if(_.isMounted){let{next:H,bu:W,u:Z,parent:J,vnode:se}=_;{const He=Pd(_);if(He){H&&(H.el=se.el,ve(_,H,q)),He.asyncDep.then(()=>{_.isUnmounted||U()});return}}let ue=H,qe;jn(_,!1),H?(H.el=se.el,ve(_,H,q)):H=se,W&&mi(W),(qe=H.props&&H.props.onVnodeBeforeUpdate)&&At(qe,J,H,se),jn(_,!0);const Fe=Jl(_),pt=_.subTree;_.subTree=Fe,L(pt,Fe,g(pt.el),$t(pt),_,D,V),H.el=Fe.el,ue===null&&jm(_,Fe.el),Z&&ut(Z,D),(qe=H.props&&H.props.onVnodeUpdated)&&ut(()=>At(qe,J,H,se),D)}else{let H;const{el:W,props:Z}=E,{bm:J,m:se,parent:ue,root:qe,type:Fe}=_,pt=us(E);jn(_,!1),J&&mi(J),!pt&&(H=Z&&Z.onVnodeBeforeMount)&&At(H,ue,E),jn(_,!0);{qe.ce&&qe.ce._injectChildStyle(Fe);const He=_.subTree=Jl(_);L(null,He,P,N,_,D,V),E.el=He.el}if(se&&ut(se,D),!pt&&(H=Z&&Z.onVnodeMounted)){const He=E;ut(()=>At(H,ue,He),D)}(E.shapeFlag&256||ue&&us(ue.vnode)&&ue.vnode.shapeFlag&256)&&_.a&&ut(_.a,D),_.isMounted=!0,E=P=N=null}};_.scope.on();const F=_.effect=new $h(U);_.scope.off();const x=_.update=F.run.bind(F),Q=_.job=F.runIfDirty.bind(F);Q.i=_,Q.id=_.uid,F.scheduler=()=>hc(Q),jn(_,!0),x()},ve=(_,E,P)=>{E.component=_;const N=_.vnode.props;_.vnode=E,_.next=null,Am(_,E.props,N,P),Cm(_,E.children,P),kn(),ql(_),Dn()},ge=(_,E,P,N,D,V,q,U,F=!1)=>{const x=_&&_.children,Q=_?_.shapeFlag:0,H=E.children,{patchFlag:W,shapeFlag:Z}=E;if(W>0){if(W&128){Nn(x,H,P,N,D,V,q,U,F);return}else if(W&256){yt(x,H,P,N,D,V,q,U,F);return}}Z&8?(Q&16&&xn(x,D,V),H!==x&&f(P,H)):Q&16?Z&16?Nn(x,H,P,N,D,V,q,U,F):xn(x,D,V,!0):(Q&8&&f(P,""),Z&16&&m(H,P,N,D,V,q,U,F))},yt=(_,E,P,N,D,V,q,U,F)=>{_=_||mr,E=E||mr;const x=_.length,Q=E.length,H=Math.min(x,Q);let W;for(W=0;W<H;W++){const Z=E[W]=F?hn(E[W]):Rt(E[W]);L(_[W],Z,P,null,D,V,q,U,F)}x>Q?xn(_,D,V,!0,!1,H):m(E,P,N,D,V,q,U,F,H)},Nn=(_,E,P,N,D,V,q,U,F)=>{let x=0;const Q=E.length;let H=_.length-1,W=Q-1;for(;x<=H&&x<=W;){const Z=_[x],J=E[x]=F?hn(E[x]):Rt(E[x]);if(ns(Z,J))L(Z,J,P,null,D,V,q,U,F);else break;x++}for(;x<=H&&x<=W;){const Z=_[H],J=E[W]=F?hn(E[W]):Rt(E[W]);if(ns(Z,J))L(Z,J,P,null,D,V,q,U,F);else break;H--,W--}if(x>H){if(x<=W){const Z=W+1,J=Z<Q?E[Z].el:N;for(;x<=W;)L(null,E[x]=F?hn(E[x]):Rt(E[x]),P,J,D,V,q,U,F),x++}}else if(x>W)for(;x<=H;)Oe(_[x],D,V,!0),x++;else{const Z=x,J=x,se=new Map;for(x=J;x<=W;x++){const Ue=E[x]=F?hn(E[x]):Rt(E[x]);Ue.key!=null&&se.set(Ue.key,x)}let ue,qe=0;const Fe=W-J+1;let pt=!1,He=0;const sn=new Array(Fe);for(x=0;x<Fe;x++)sn[x]=0;for(x=Z;x<=H;x++){const Ue=_[x];if(qe>=Fe){Oe(Ue,D,V,!0);continue}let gt;if(Ue.key!=null)gt=se.get(Ue.key);else for(ue=J;ue<=W;ue++)if(sn[ue-J]===0&&ns(Ue,E[ue])){gt=ue;break}gt===void 0?Oe(Ue,D,V,!0):(sn[gt-J]=x+1,gt>=He?He=gt:pt=!0,L(Ue,E[gt],P,null,D,V,q,U,F),qe++)}const $r=pt?Om(sn):mr;for(ue=$r.length-1,x=Fe-1;x>=0;x--){const Ue=J+x,gt=E[Ue],qs=Ue+1<Q?E[Ue+1].el:N;sn[x]===0?L(null,gt,P,qs,D,V,q,U,F):pt&&(ue<0||x!==$r[ue]?jt(gt,P,qs,2):ue--)}}},jt=(_,E,P,N,D=null)=>{const{el:V,type:q,transition:U,children:F,shapeFlag:x}=_;if(x&6){jt(_.component.subTree,E,P,N);return}if(x&128){_.suspense.move(E,P,N);return}if(x&64){q.move(_,E,P,wt);return}if(q===Et){r(V,E,P);for(let H=0;H<F.length;H++)jt(F[H],E,P,N);r(_.anchor,E,P);return}if(q===Zo){G(_,E,P);return}if(N!==2&&x&1&&U)if(N===0)U.beforeEnter(V),r(V,E,P),ut(()=>U.enter(V),D);else{const{leave:H,delayLeave:W,afterLeave:Z}=U,J=()=>r(V,E,P),se=()=>{H(V,()=>{J(),Z&&Z()})};W?W(V,J,se):se()}else r(V,E,P)},Oe=(_,E,P,N=!1,D=!1)=>{const{type:V,props:q,ref:U,children:F,dynamicChildren:x,shapeFlag:Q,patchFlag:H,dirs:W,cacheIndex:Z}=_;if(H===-2&&(D=!1),U!=null&&Ni(U,null,P,_,!0),Z!=null&&(E.renderCache[Z]=void 0),Q&256){E.ctx.deactivate(_);return}const J=Q&1&&W,se=!us(_);let ue;if(se&&(ue=q&&q.onVnodeBeforeUnmount)&&At(ue,E,_),Q&6)Vn(_.component,P,N);else{if(Q&128){_.suspense.unmount(P,N);return}J&&Bn(_,null,E,"beforeUnmount"),Q&64?_.type.remove(_,E,P,wt,N):x&&!x.hasOnce&&(V!==Et||H>0&&H&64)?xn(x,E,P,!1,!0):(V===Et&&H&384||!D&&Q&16)&&xn(F,E,P),N&&Ne(_)}(se&&(ue=q&&q.onVnodeUnmounted)||J)&&ut(()=>{ue&&At(ue,E,_),J&&Bn(_,null,E,"unmounted")},P)},Ne=_=>{const{type:E,el:P,anchor:N,transition:D}=_;if(E===Et){Po(P,N);return}if(E===Zo){j(_);return}const V=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:U}=D,F=()=>q(P,V);U?U(_.el,V,F):F()}else V()},Po=(_,E)=>{let P;for(;_!==E;)P=w(_),s(_),_=P;s(E)},Vn=(_,E,P)=>{const{bum:N,scope:D,job:V,subTree:q,um:U,m:F,a:x}=_;Ql(F),Ql(x),N&&mi(N),D.stop(),V&&(V.flags|=8,Oe(q,_,E,P)),U&&ut(U,E),ut(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},xn=(_,E,P,N=!1,D=!1,V=0)=>{for(let q=V;q<_.length;q++)Oe(_[q],E,P,N,D)},$t=_=>{if(_.shapeFlag&6)return $t(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=w(_.anchor||_.el),P=E&&E[em];return P?w(P):E};let Br=!1;const $s=(_,E,P)=>{_==null?E._vnode&&Oe(E._vnode,null,null,!0):L(E._vnode||null,_,E,null,null,null,P),E._vnode=_,Br||(Br=!0,ql(),ad(),Br=!1)},wt={p:L,um:Oe,m:jt,r:Ne,mt:ct,mc:m,pc:ge,pbc:T,n:$t,o:n};return{render:$s,hydrate:void 0,createApp:Tm($s)}}function Yo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function jn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cd(n,e,t=!1){const r=n.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=hn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Cd(a,c)),c.type===lo&&(c.el=a.el)}}function Om(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const d=n[r];if(d!==0){if(s=t[t.length-1],n[s]<d){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<d?i=c+1:a=c;d<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Pd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pd(e)}function Ql(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Nm=Symbol.for("v-scx"),Vm=()=>_i(Nm);function Xo(n,e,t){return kd(n,e,t)}function kd(n,e,t=Te){const{immediate:r,deep:s,flush:i,once:a}=t,c=it({},t),l=e&&r||!e&&i!=="post";let d;if(ws){if(i==="sync"){const S=Vm();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!l){const S=()=>{};return S.stop=Ct,S.resume=Ct,S.pause=Ct,S}}const f=rt;c.call=(S,O,L)=>xt(S,f,O,L);let g=!1;i==="post"?c.scheduler=S=>{ut(S,f&&f.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(S,O)=>{O?S():hc(S)}),c.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const w=Wg(n,e,c);return ws&&(d?d.push(w):l&&w()),w}function xm(n,e,t){const r=this.proxy,s=De(n)?n.includes(".")?Dd(r,n):()=>r[n]:n.bind(r,r);let i;oe(e)?i=e:(i=e.handler,t=e);const a=Os(this),c=kd(s,i.bind(r),t);return a(),c}function Dd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Mm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wn(e)}Modifiers`]||n[`${tr(e)}Modifiers`];function Lm(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Te;let s=t;const i=e.startsWith("update:"),a=i&&Mm(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>De(f)?f.trim():f)),a.number&&(s=t.map(Fh)));let c,l=r[c=zo(e)]||r[c=zo(wn(e))];!l&&i&&(l=r[c=zo(tr(e))]),l&&xt(l,n,6,s);const d=r[c+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,xt(d,n,6,s)}}function Od(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!oe(n)){const l=d=>{const f=Od(d,e,!0);f&&(c=!0,it(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ae(n)&&r.set(n,null),null):(te(i)?i.forEach(l=>a[l]=null):it(a,i),Ae(n)&&r.set(n,a),a)}function co(n,e){return!n||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(n,e[0].toLowerCase()+e.slice(1))||ye(n,tr(e))||ye(n,e))}function Jl(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:d,renderCache:f,props:g,data:w,setupState:S,ctx:O,inheritAttrs:L}=n,M=Oi(n);let K,Y;try{if(t.shapeFlag&4){const j=s||r,ae=j;K=Rt(d.call(ae,j,f,g,S,w,O)),Y=c}else{const j=e;K=Rt(j.length>1?j(g,{attrs:c,slots:a,emit:l}):j(g,null)),Y=e.props?c:Fm(c)}}catch(j){ds.length=0,oo(j,n,1),K=Pt(Ts)}let G=K;if(Y&&L!==!1){const j=Object.keys(Y),{shapeFlag:ae}=G;j.length&&ae&7&&(i&&j.some(Xa)&&(Y=Um(Y,i)),G=Sr(G,Y,!1,!0))}return t.dirs&&(G=Sr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&dc(G,t.transition),K=G,Oi(M),K}const Fm=n=>{let e;for(const t in n)(t==="class"||t==="style"||eo(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const r in n)(!Xa(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Bm(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Yl(r,a,d):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const w=f[g];if(a[w]!==r[w]&&!co(d,w))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Yl(r,a,d):!0:!!a;return!1}function Yl(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!co(t,i))return!0}return!1}function jm({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Nd=n=>n.__isSuspense;function $m(n,e){e&&e.pendingBranch?te(n)?e.effects.push(...n):e.effects.push(n):Yg(n)}const Et=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Ts=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),ds=[];let ft=null;function En(n=!1){ds.push(ft=n?null:[])}function qm(){ds.pop(),ft=ds[ds.length-1]||null}let Is=1;function Xl(n,e=!1){Is+=n,n<0&&ft&&e&&(ft.hasOnce=!0)}function Vd(n){return n.dynamicChildren=Is>0?ft||mr:null,qm(),Is>0&&ft&&ft.push(n),n}function Kn(n,e,t,r,s,i){return Vd(dt(n,e,t,r,s,i,!0))}function Hm(n,e,t,r,s){return Vd(Pt(n,e,t,r,s,!0))}function xd(n){return n?n.__v_isVNode===!0:!1}function ns(n,e){return n.type===e.type&&n.key===e.key}const Md=({key:n})=>n??null,yi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?De(n)||Xe(n)||oe(n)?{i:mt,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,r=0,s=null,i=n===Et?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Md(e),ref:e&&yi(e),scopeId:ld,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return c?(pc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=De(t)?8:16),Is>0&&!a&&ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ft.push(l),l}const Pt=zm;function zm(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===fm)&&(n=Ts),xd(n)){const c=Sr(n,e,!0);return t&&pc(c,t),Is>0&&!i&&ft&&(c.shapeFlag&6?ft[ft.indexOf(n)]=c:ft.push(c)),c.patchFlag=-2,c}if(n_(n)&&(n=n.__vccOpts),e){e=Km(e);let{class:c,style:l}=e;c&&!De(c)&&(e.class=nc(c)),Ae(l)&&(uc(l)&&!te(l)&&(l=it({},l)),e.style=tc(l))}const a=De(n)?1:Nd(n)?128:tm(n)?64:Ae(n)?4:oe(n)?2:0;return dt(n,e,t,r,s,a,i,!0)}function Km(n){return n?uc(n)||Td(n)?it({},n):n:null}function Sr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,d=e?Wm(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&Md(d),ref:e&&e.ref?t&&i?te(i)?i.concat(yi(e)):[i,yi(e)]:yi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Et?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Sr(n.ssContent),ssFallback:n.ssFallback&&Sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&dc(f,l.clone(f)),f}function Gm(n=" ",e=0){return Pt(lo,null,n,e)}function Rt(n){return n==null||typeof n=="boolean"?Pt(Ts):te(n)?Pt(Et,null,n.slice()):xd(n)?hn(n):Pt(lo,null,String(n))}function hn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Sr(n)}function pc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(te(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Td(e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:mt},t=32):(e=String(e),r&64?(t=16,e=[Gm(e)]):t=8);n.children=e,n.shapeFlag|=t}function Wm(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=nc([e.class,r.class]));else if(s==="style")e.style=tc([e.style,r.style]);else if(eo(s)){const i=e[s],a=r[s];a&&i!==a&&!(te(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function At(n,e,t,r=null){xt(n,e,7,[t,r])}const Qm=yd();let Jm=0;function Ym(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Qm,i={uid:Jm++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(r,s),emitsOptions:Od(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lm.bind(null,i),n.ce&&n.ce(i),i}let rt=null,xi,ba;{const n=ro(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};xi=e("__VUE_INSTANCE_SETTERS__",t=>rt=t),ba=e("__VUE_SSR_SETTERS__",t=>ws=t)}const Os=n=>{const e=rt;return xi(n),n.scope.on(),()=>{n.scope.off(),xi(e)}},Zl=()=>{rt&&rt.scope.off(),xi(null)};function Ld(n){return n.vnode.shapeFlag&4}let ws=!1;function Xm(n,e=!1,t=!1){e&&ba(e);const{props:r,children:s}=n.vnode,i=Ld(n);wm(n,r,i,e),Sm(n,s,t);const a=i?Zm(n,e):void 0;return e&&ba(!1),a}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pm);const{setup:r}=t;if(r){kn();const s=n.setupContext=r.length>1?t_(n):null,i=Os(n),a=Ds(r,n,0,[n.props,s]),c=Nh(a);if(Dn(),i(),(c||n.sp)&&!us(n)&&ud(n),c){if(a.then(Zl,Zl),e)return a.then(l=>{eu(n,l)}).catch(l=>{oo(l,n,0)});n.asyncDep=a}else eu(n,a)}else Fd(n)}function eu(n,e,t){oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ae(e)&&(n.setupState=rd(e)),Fd(n)}function Fd(n,e,t){const r=n.type;n.render||(n.render=r.render||Ct);{const s=Os(n);kn();try{gm(n)}finally{Dn(),s()}}}const e_={get(n,e){return Qe(n,"get",""),n[e]}};function t_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,e_),slots:n.slots,emit:n.emit,expose:e}}function uo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rd(Bg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hs)return hs[t](n)},has(e,t){return t in e||t in hs}})):n.proxy}function n_(n){return oe(n)&&"__vccOpts"in n}const Ud=(n,e)=>Kg(n,e,ws),r_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const tu=typeof window<"u"&&window.trustedTypes;if(tu)try{Ra=tu.createPolicy("vue",{createHTML:n=>n})}catch{}const Bd=Ra?n=>Ra.createHTML(n):n=>n,s_="http://www.w3.org/2000/svg",i_="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,nu=Kt&&Kt.createElement("template"),o_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Kt.createElementNS(s_,n):e==="mathml"?Kt.createElementNS(i_,n):t?Kt.createElement(n,{is:t}):Kt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Kt.createTextNode(n),createComment:n=>Kt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{nu.innerHTML=Bd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=nu.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},a_=Symbol("_vtc");function c_(n,e,t){const r=n[a_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ru=Symbol("_vod"),l_=Symbol("_vsh"),u_=Symbol(""),h_=/(^|;)\s*display\s*:/;function d_(n,e,t){const r=n.style,s=De(t);let i=!1;if(t&&!s){if(e)if(De(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&vi(r,c,"")}else for(const a in e)t[a]==null&&vi(r,a,"");for(const a in t)a==="display"&&(i=!0),vi(r,a,t[a])}else if(s){if(e!==t){const a=r[u_];a&&(t+=";"+a),r.cssText=t,i=h_.test(t)}}else e&&n.removeAttribute("style");ru in n&&(n[ru]=i?r.display:"",n[l_]&&(r.display="none"))}const su=/\s*!important$/;function vi(n,e,t){if(te(t))t.forEach(r=>vi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=f_(n,e);su.test(t)?n.setProperty(tr(r),t.replace(su,""),"important"):n[r]=t}}const iu=["Webkit","Moz","ms"],ea={};function f_(n,e){const t=ea[e];if(t)return t;let r=wn(e);if(r!=="filter"&&r in n)return ea[e]=r;r=Mh(r);for(let s=0;s<iu.length;s++){const i=iu[s]+r;if(i in n)return ea[e]=i}return e}const ou="http://www.w3.org/1999/xlink";function au(n,e,t,r,s,i=mg(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ou,e.slice(6,e.length)):n.setAttributeNS(ou,e,t):t==null||i&&!Uh(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Vt(t)?String(t):t)}function cu(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Bd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Uh(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function jd(n,e,t,r){n.addEventListener(e,t,r)}function p_(n,e,t,r){n.removeEventListener(e,t,r)}const lu=Symbol("_vei");function g_(n,e,t,r,s=null){const i=n[lu]||(n[lu]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=m_(e);if(r){const d=i[e]=v_(r,s);jd(n,c,d,l)}else a&&(p_(n,c,a,l),i[e]=void 0)}}const uu=/(?:Once|Passive|Capture)$/;function m_(n){let e;if(uu.test(n)){e={};let r;for(;r=n.match(uu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let ta=0;const __=Promise.resolve(),y_=()=>ta||(__.then(()=>ta=0),ta=Date.now());function v_(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;xt(E_(r,t.value),e,5,[r])};return t.value=n,t.attached=y_(),t}function E_(n,e){if(te(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,T_=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?c_(n,r,a):e==="style"?d_(n,t,r):eo(e)?Xa(e)||g_(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I_(n,e,r,a))?(cu(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&au(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!De(r))?cu(n,wn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),au(n,e,r,a))};function I_(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&hu(e)&&oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hu(e)&&De(t)?!1:e in n}const du=n=>{const e=n.props["onUpdate:modelValue"]||!1;return te(e)?t=>mi(e,t):e},na=Symbol("_assign"),w_={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=to(e);jd(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Fh(Mi(a)):Mi(a));n[na](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,id(()=>{n._assigning=!1})}),n[na]=du(r)},mounted(n,{value:e}){fu(n,e)},beforeUpdate(n,e,t){n[na]=du(t)},updated(n,{value:e}){n._assigning||fu(n,e)}};function fu(n,e){const t=n.multiple,r=te(e);if(!(t&&!r&&!to(e))){for(let s=0,i=n.options.length;s<i;s++){const a=n.options[s],c=Mi(a);if(t)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(d=>String(d)===String(c)):a.selected=yg(e,c)>-1}else a.selected=e.has(c);else if(so(Mi(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Mi(n){return"_value"in n?n._value:n.value}const A_=it({patchProp:T_},o_);let pu;function b_(){return pu||(pu=Pm(A_))}const R_=(...n)=>{const e=b_().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=C_(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,S_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function S_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function C_(n){return De(n)?document.querySelector(n):n}const ho=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},P_={class:"product-card border rounded-lg p-4 flex flex-col justify-between"},k_=["src"],D_={class:"text-xl font-bold mb-2"},O_={class:"text-gray-700 mb-2"},N_={class:"text-gray-900 font-semibold mb-2"},V_={class:"text-gray-900 font-semibold mb-4"},x_={__name:"ProductCard",props:{product:{type:Object,required:!0}},setup(n){const e=n,t=()=>{const r=`Hola, me interesa el producto: ${e.product.name}`,s=`https://wa.me/51906580578?text=${encodeURIComponent(r)}`;window.open(s,"_blank")};return(r,s)=>(En(),Kn("div",P_,[dt("img",{src:e.product.photo,alt:"Product Image",class:"w-full h-48 object-cover mb-4 rounded"},null,8,k_),dt("h2",D_,pr(e.product.name),1),dt("p",O_,pr(e.product.description),1),dt("p",N_,"Talla: "+pr(e.product.size),1),dt("p",V_,"Price: S/ "+pr(e.product.price),1),dt("button",{class:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 mt-auto",onClick:t}," Contactar por WhatsApp ")]))}},M_=ho(x_,[["__scopeId","data-v-30d0751a"]]),L_={class:"product-filter"},F_=["value"],U_={__name:"ProductFilter",emits:["filter"],setup(n,{emit:e}){const t=Pi(["Charm","Brazalete","Collar","Anillo"]),r=Pi(""),s=e,i=()=>{s("filter",r.value)};return(a,c)=>(En(),Kn("div",L_,[c[2]||(c[2]=dt("h2",null,"Filter Products",-1)),Zg(dt("select",{"onUpdate:modelValue":c[0]||(c[0]=l=>r.value=l),onChange:i},[c[1]||(c[1]=dt("option",{value:""},"All Categories",-1)),(En(!0),Kn(Et,null,gd(t.value,l=>(En(),Kn("option",{key:l,value:l},pr(l),9,F_))),128))],544),[[w_,r.value]])]))}},B_=ho(U_,[["__scopeId","data-v-6a670d73"]]);var gu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},j_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let w=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(w=64)),r.push(t[f],t[g],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($d(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):j_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new $_;const w=i<<2|c>>4;if(r.push(w),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const O=d<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q_=function(n){const e=$d(n);return qd.encodeByteArray(e,!0)},Li=function(n){return q_(n).replace(/\./g,"")},Hd=function(n){try{return qd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=()=>H_().__FIREBASE_DEFAULTS__,K_=()=>{if(typeof process>"u"||typeof gu>"u")return;const n=gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},G_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hd(n[1]);return e&&JSON.parse(e)},fo=()=>{try{return z_()||K_()||G_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zd=n=>{var e,t;return(t=(e=fo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kd=n=>{const e=zd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gd=()=>{var n;return(n=fo())===null||n===void 0?void 0:n.config},Wd=n=>{var e;return(e=fo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Li(JSON.stringify(t)),Li(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function J_(){var n;const e=(n=fo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Y_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ey(){const n=Ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ty(){return!J_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ny(){try{return typeof indexedDB=="object"}catch{return!1}}function ry(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=sy,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?iy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ut(s,c,r)}}function iy(n,e){return n.replace(oy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oy=/\{\$([^}]+)}/g;function ay(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(mu(i)&&mu(a)){if(!Fi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function mu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cy(n,e){const t=new ly(n,e);return t.subscribe.bind(t)}class ly{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");uy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ra),s.error===void 0&&(s.error=ra),s.complete===void 0&&(s.complete=ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ra(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return n&&n._delegate?n._delegate:n}class An{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new W_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fy(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dy(n){return n===qn?void 0:n}function fy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const gy={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},my=ce.INFO,_y={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},yy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=_y[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=my,this._logHandler=yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const vy=(n,e)=>e.some(t=>n instanceof t);let _u,yu;function Ey(){return _u||(_u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ty(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jd=new WeakMap,Sa=new WeakMap,Yd=new WeakMap,sa=new WeakMap,mc=new WeakMap;function Iy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Tn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Jd.set(t,n)}).catch(()=>{}),mc.set(e,n),e}function wy(n){if(Sa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Sa.set(n,e)}let Ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ay(n){Ca=n(Ca)}function by(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ia(this),e,...t);return Yd.set(r,e.sort?e.sort():[e]),Tn(r)}:Ty().includes(n)?function(...e){return n.apply(ia(this),e),Tn(Jd.get(this))}:function(...e){return Tn(n.apply(ia(this),e))}}function Ry(n){return typeof n=="function"?by(n):(n instanceof IDBTransaction&&wy(n),vy(n,Ey())?new Proxy(n,Ca):n)}function Tn(n){if(n instanceof IDBRequest)return Iy(n);if(sa.has(n))return sa.get(n);const e=Ry(n);return e!==n&&(sa.set(n,e),mc.set(e,n)),e}const ia=n=>mc.get(n);function Sy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Tn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Tn(a.result),l.oldVersion,l.newVersion,Tn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Cy=["get","getKey","getAll","getAllKeys","count"],Py=["put","add","delete","clear"],oa=new Map;function vu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Py.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cy.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return oa.set(e,i),i}Ay(n=>({...n,get:(e,t,r)=>vu(e,t)||n.get(e,t,r),has:(e,t)=>!!vu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pa="@firebase/app",Eu="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new gc("@firebase/app"),Oy="@firebase/app-compat",Ny="@firebase/analytics-compat",Vy="@firebase/analytics",xy="@firebase/app-check-compat",My="@firebase/app-check",Ly="@firebase/auth",Fy="@firebase/auth-compat",Uy="@firebase/database",By="@firebase/data-connect",jy="@firebase/database-compat",$y="@firebase/functions",qy="@firebase/functions-compat",Hy="@firebase/installations",zy="@firebase/installations-compat",Ky="@firebase/messaging",Gy="@firebase/messaging-compat",Wy="@firebase/performance",Qy="@firebase/performance-compat",Jy="@firebase/remote-config",Yy="@firebase/remote-config-compat",Xy="@firebase/storage",Zy="@firebase/storage-compat",ev="@firebase/firestore",tv="@firebase/vertexai",nv="@firebase/firestore-compat",rv="firebase",sv="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",iv={[Pa]:"fire-core",[Oy]:"fire-core-compat",[Vy]:"fire-analytics",[Ny]:"fire-analytics-compat",[My]:"fire-app-check",[xy]:"fire-app-check-compat",[Ly]:"fire-auth",[Fy]:"fire-auth-compat",[Uy]:"fire-rtdb",[By]:"fire-data-connect",[jy]:"fire-rtdb-compat",[$y]:"fire-fn",[qy]:"fire-fn-compat",[Hy]:"fire-iid",[zy]:"fire-iid-compat",[Ky]:"fire-fcm",[Gy]:"fire-fcm-compat",[Wy]:"fire-perf",[Qy]:"fire-perf-compat",[Jy]:"fire-rc",[Yy]:"fire-rc-compat",[Xy]:"fire-gcs",[Zy]:"fire-gcs-compat",[ev]:"fire-fst",[nv]:"fire-fst-compat",[tv]:"fire-vertex","fire-js":"fire-js",[rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,ov=new Map,Da=new Map;function Tu(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xn(n){const e=n.name;if(Da.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,n);for(const t of Ui.values())Tu(t,n);for(const t of ov.values())Tu(t,n);return!0}function po(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Ns("app","Firebase",av);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=sv;function Xd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw In.create("bad-app-name",{appName:String(s)});if(t||(t=Gd()),!t)throw In.create("no-options");const i=Ui.get(s);if(i){if(Fi(t,i.options)&&Fi(r,i.config))return i;throw In.create("duplicate-app",{appName:s})}const a=new py(s);for(const l of Da.values())a.addComponent(l);const c=new cv(t,r,a);return Ui.set(s,c),c}function _c(n=ka){const e=Ui.get(n);if(!e&&n===ka&&Gd())return Xd();if(!e)throw In.create("no-app",{appName:n});return e}function kt(n,e,t){var r;let s=(r=iv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(c.join(" "));return}Xn(new An(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="firebase-heartbeat-database",uv=1,As="firebase-heartbeat-store";let aa=null;function Zd(){return aa||(aa=Sy(lv,uv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(As)}catch(t){console.warn(t)}}}}).catch(n=>{throw In.create("idb-open",{originalErrorMessage:n.message})})),aa}async function hv(n){try{const t=(await Zd()).transaction(As),r=await t.objectStore(As).get(ef(n));return await t.done,r}catch(e){if(e instanceof Ut)Xt.warn(e.message);else{const t=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Iu(n,e){try{const r=(await Zd()).transaction(As,"readwrite");await r.objectStore(As).put(e,ef(n)),await r.done}catch(t){if(t instanceof Ut)Xt.warn(t.message);else{const r=In.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(r.message)}}}function ef(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=1024,fv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wu(),{heartbeatsToSend:r,unsentEntries:s}=gv(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function wu(){return new Date().toISOString().substring(0,10)}function gv(n,e=dv){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Au(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Au(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ny()?ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Au(n){return Li(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n){Xn(new An("platform-logger",e=>new ky(e),"PRIVATE")),Xn(new An("heartbeat",e=>new pv(e),"PRIVATE")),kt(Pa,Eu,n),kt(Pa,Eu,"esm2017"),kt("fire-js","")}_v("");var yv="firebase",vv="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(yv,vv,"app");function yc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function tf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ev=tf,nf=new Ns("auth","Firebase",tf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new gc("@firebase/auth");function Tv(n,...e){Bi.logLevel<=ce.WARN&&Bi.warn(`Auth (${nr}): ${n}`,...e)}function Ei(n,...e){Bi.logLevel<=ce.ERROR&&Bi.error(`Auth (${nr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,...e){throw vc(n,...e)}function Dt(n,...e){return vc(n,...e)}function rf(n,e,t){const r=Object.assign(Object.assign({},Ev()),{[e]:t});return new Ns("auth","Firebase",r).create(e,{appName:n.name})}function Gn(n){return rf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nf.create(n,...e)}function ne(n,e,...t){if(!n)throw vc(e,...t)}function Qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ei(e),new Error(e)}function en(n,e){n||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Iv(){return bu()==="http:"||bu()==="https:"}function bu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iv()||X_()||"connection"in navigator)?navigator.onLine:!0}function Av(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.shortDelay=e,this.longDelay=t,en(t>e,"Short delay should be less than long delay!"),this.isMobile=Q_()||Z_()}get(){return wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n,e){en(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new xs(3e4,6e4);function Tc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xr(n,e,t,r,s={}){return of(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Vs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Y_()||(d.referrerPolicy="no-referrer"),sf.fetch()(af(n,n.config.apiHost,t,c),d)})}async function of(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bv),e);try{const s=new Cv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ci(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ci(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ci(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ci(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw rf(n,f,d);Zt(n,f)}}catch(s){if(s instanceof Ut)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function Sv(n,e,t,r,s={}){const i=await xr(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function af(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ec(n.config,s):`${n.config.apiScheme}://${s}`}class Cv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),Rv.get())})}}function ci(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Dt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e){return xr(n,"POST","/v1/accounts:delete",e)}async function cf(n,e){return xr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kv(n,e=!1){const t=On(n),r=await t.getIdToken(e),s=Ic(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fs(ca(s.auth_time)),issuedAtTime:fs(ca(s.iat)),expirationTime:fs(ca(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ca(n){return Number(n)*1e3}function Ic(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hd(t);return s?JSON.parse(s):(Ei("Failed to decode base64 JWT payload"),null)}catch(s){return Ei("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ru(n){const e=Ic(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ut&&Dv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Dv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n){var e;const t=n.auth,r=await n.getIdToken(),s=await bs(n,cf(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lf(i.providerUserInfo):[],c=Vv(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Na(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Nv(n){const e=On(n);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lf(n){return n.map(e=>{var{providerId:t}=e,r=yc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n,e){const t=await of(n,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=af(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",sf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mv(n,e){return xr(n,"POST","/v2/accounts:revokeToken",Tc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ru(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Ru(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Tr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Na(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await bs(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kv(this,e)}reload(){return Nv(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await bs(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(c=t.tenantId)!==null&&c!==void 0?c:void 0,M=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,K=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Y=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:j,isAnonymous:ae,providerData:le,stsTokenManager:I}=t;ne(G&&I,e,"internal-error");const m=Tr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),ln(g,e.name),ln(w,e.name),ne(typeof j=="boolean",e,"internal-error"),ne(typeof ae=="boolean",e,"internal-error"),ln(S,e.name),ln(O,e.name),ln(L,e.name),ln(M,e.name),ln(K,e.name),ln(Y,e.name);const v=new Jt({uid:G,auth:e,email:w,emailVerified:j,displayName:g,isAnonymous:ae,photoURL:O,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:K,lastLoginAt:Y});return le&&Array.isArray(le)&&(v.providerData=le.map(T=>Object.assign({},T))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Tr;s.updateFromServerResponse(t);const i=new Jt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ji(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Tr;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Yt(n){en(n instanceof Function,"Expected a class definition");let e=Su.get(n);return e?(en(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Su.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uf.type="NONE";const Cu=uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e,t){return`firebase:${n}:${e}:${t}`}class Ir{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ti(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ti("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ir(Yt(Cu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Yt(Cu);const a=Ti(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const g=Jt._fromJSON(e,f);d!==i&&(c=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ir(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ir(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mf(e))return"Blackberry";if(_f(e))return"Webos";if(df(e))return"Safari";if((e.includes("chrome/")||ff(e))&&!e.includes("edge/"))return"Chrome";if(gf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hf(n=Ze()){return/firefox\//i.test(n)}function df(n=Ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ff(n=Ze()){return/crios\//i.test(n)}function pf(n=Ze()){return/iemobile/i.test(n)}function gf(n=Ze()){return/android/i.test(n)}function mf(n=Ze()){return/blackberry/i.test(n)}function _f(n=Ze()){return/webos/i.test(n)}function wc(n=Ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lv(n=Ze()){var e;return wc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fv(){return ey()&&document.documentMode===10}function yf(n=Ze()){return wc(n)||gf(n)||_f(n)||mf(n)||/windows phone/i.test(n)||pf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n,e=[]){let t;switch(n){case"Browser":t=Pu(Ze());break;case"Worker":t=`${Pu(Ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n,e={}){return xr(n,"GET","/v2/passwordPolicy",Tc(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=6;class $v{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ku(this),this.idTokenSubscription=new ku(this),this.beforeStateQueue=new Uv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cf(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Gn(this));const t=e?On(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bv(this),t=new $v(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yt(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Tv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ac(n){return On(n)}class ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=cy(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hv(n){bc=n}function zv(n){return bc.loadJS(n)}function Kv(){return bc.gapiScript}function Gv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n,e){const t=po(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Fi(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function Qv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jv(n,e,t){const r=Ac(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ef(e),{host:a,port:c}=Yv(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Xv()}function Ef(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yv(n){const e=Ef(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Du(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Du(a)}}}function Du(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,t){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e){return Sv(n,"POST","/v1/accounts:signInWithIdp",Tc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="http://localhost";class Zn extends Tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=yc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Zn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:Zv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends If{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ms{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return fn.credential(t,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ms{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ms{constructor(){super("twitter.com")}static credential(e,t){return Zn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),a=Ou(r);return new Cr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ou(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ou(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Ut{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new $i(e,t,r,s)}}function wf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(n,i,e,r):i})}async function eE(n,e,t=!1){const r=await bs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(n,e,t=!1){const{auth:r}=n;if(mn(r.app))return Promise.reject(Gn(r));const s="reauthenticate";try{const i=await bs(n,wf(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Ic(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),Cr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(n,e,t=!1){if(mn(n.app))return Promise.reject(Gn(n));const r="signIn",s=await wf(n,r,e),i=await Cr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function rE(n,e,t,r){return On(n).onIdTokenChanged(e,t,r)}function sE(n,e,t){return On(n).beforeAuthStateChanged(e,t)}const qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1e3,oE=10;class bf extends Af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Fv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const aE=bf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rf.type="SESSION";const Sf=Rf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await cE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Rc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function uE(n){Ot().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function hE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fE(){return Cf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebaseLocalStorageDb",pE=1,Hi="firebaseLocalStorage",kf="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mo(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function gE(){const n=indexedDB.deleteDatabase(Pf);return new Ls(n).toPromise()}function Va(){const n=indexedDB.open(Pf,pE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:kf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?e(r):(r.close(),await gE(),e(await Va()))})})}async function Nu(n,e,t){const r=mo(n,!0).put({[kf]:e,value:t});return new Ls(r).toPromise()}async function mE(n,e){const t=mo(n,!1).get(e),r=await new Ls(t).toPromise();return r===void 0?null:r.value}function Vu(n,e){const t=mo(n,!0).delete(e);return new Ls(t).toPromise()}const _E=800,yE=3;class Df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>yE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(fE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hE(),!this.activeServiceWorker)return;this.sender=new lE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Nu(e,qi,"1"),await Vu(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>mE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mo(s,!1).getAll();return new Ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Df.type="LOCAL";const vE=Df;new xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n,e){return e?Yt(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TE(n){return nE(n.auth,new Sc(n),n.bypassAuthState)}function IE(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),tE(t,new Sc(n),n.bypassAuthState)}async function wE(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),eE(t,new Sc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TE;case"linkViaPopup":case"linkViaRedirect":return wE;case"reauthViaPopup":case"reauthViaRedirect":return IE;default:Zt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new xs(2e3,1e4);class gr extends Of{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AE.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="pendingRedirect",Ii=new Map;class RE extends Of{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ii.get(this.auth._key());if(!e){try{const r=await SE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ii.set(this.auth._key(),e)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SE(n,e){const t=kE(e),r=PE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function CE(n,e){Ii.set(n._key(),e)}function PE(n){return Yt(n._redirectPersistence)}function kE(n){return Ti(bE,n.config.apiKey,n.name)}async function DE(n,e,t=!1){if(mn(n.app))return Promise.reject(Gn(n));const r=Ac(n),s=EE(r,e),a=await new RE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=10*60*1e3;class NE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OE&&this.cachedEventUids.clear(),this.cachedEventUids.has(xu(e))}saveEventToCache(e){this.cachedEventUids.add(xu(e)),this.lastProcessedEventTime=Date.now()}}function xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(n,e={}){return xr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LE=/^https?/;async function FE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xE(n);for(const t of e)try{if(UE(t))return}catch{}Zt(n,"unauthorized-domain")}function UE(n){const e=Oa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!LE.test(t))return!1;if(ME.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new xs(3e4,6e4);function Mu(){const n=Ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jE(n){return new Promise((e,t)=>{var r,s,i;function a(){Mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mu(),t(Dt(n,"network-request-failed"))},timeout:BE.get()})}if(!((s=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)a();else{const c=Gv("iframefcb");return Ot()[c]=()=>{gapi.load?a():t(Dt(n,"network-request-failed"))},zv(`${Kv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw wi=null,e})}let wi=null;function $E(n){return wi=wi||jE(n),wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new xs(5e3,15e3),HE="__/auth/iframe",zE="emulator/auth/iframe",KE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WE(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ec(e,zE):`https://${n.config.authDomain}/${HE}`,r={apiKey:e.apiKey,appName:n.name,v:nr},s=GE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Vs(r).slice(1)}`}async function QE(n){const e=await $E(n),t=Ot().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:WE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Dt(n,"network-request-failed"),c=Ot().setTimeout(()=>{i(a)},qE.get());function l(){Ot().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,XE=600,ZE="_blank",eT="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tT(n,e,t,r=YE,s=XE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},JE),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ze().toLowerCase();t&&(c=ff(d)?ZE:t),hf(d)&&(e=e||eT,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[S,O])=>`${w}${S}=${O},`,"");if(Lv(d)&&c!=="_self")return nT(e||"",c),new Lu(null);const g=window.open(e||"",c,f);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new Lu(g)}function nT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="__/auth/handler",sT="emulator/auth/handler",iT=encodeURIComponent("fac");async function Fu(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:nr,eventId:s};if(e instanceof If){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ay(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Ms){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${iT}=${encodeURIComponent(l)}`:"";return`${oT(n)}?${Vs(c).slice(1)}${d}`}function oT({config:n}){return n.emulator?Ec(n,sT):`https://${n.authDomain}/${rT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=DE,this._overrideRedirectResult=CE}async _openPopup(e,t,r,s){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Fu(e,t,r,Oa(),s);return tT(e,a,Rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Fu(e,t,r,Oa(),s);return uE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(en(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await QE(e),r=new NE(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(la,{type:la},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[la];a!==void 0&&t(!!a),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yf()||df()||wc()}}const cT=aT;var Uu="@firebase/auth",Bu="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hT(n){Xn(new An("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vf(n)},d=new qv(r,s,i,l);return Qv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new An("auth-internal",e=>{const t=Ac(e.getProvider("auth").getImmediate());return(r=>new lT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Uu,Bu,uT(n)),kt(Uu,Bu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=5*60,fT=Wd("authIdTokenMaxAge")||dT;let ju=null;const pT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fT)return;const s=t==null?void 0:t.token;ju!==s&&(ju=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gT(n=_c()){const e=po(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wv(n,{popupRedirectResolver:cT,persistence:[vE,aE,Sf]}),r=Wd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=pT(i.toString());sE(t,a,()=>a(t.currentUser)),rE(t,c=>a(c))}}const s=zd("auth");return s&&Jv(t,`http://${s}`),t}function mT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Hv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",mT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hT("Browser");var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Vf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function v(){}v.prototype=m.prototype,I.D=m.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(T,A,R){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return m.prototype[A].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=I.g[0],v=I.g[1],A=I.g[2];var R=I.g[3],y=m+(R^v&(A^R))+T[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(v^A))+T[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^R)+T[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~R))+T[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var v=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<m;)if(T[A++]=I.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=I[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var v=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=v&255,v/=256;for(this.u(I),I=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)I[v++]=this.g[m]>>>T&255;return I};function i(I,m){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=m(I)}function a(I,m){this.h=m;for(var v=[],T=!0,A=I.length-1;0<=A;A--){var R=I[A]|0;T&&R==m||(v[A]=R,T=!1)}this.g=v}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return M(d(-I));for(var m=[],v=1,T=0;I>=v;T++)m[T]=I/v|0,v*=4294967296;return new a(m,0)}function f(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return M(f(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),T=g,A=0;A<I.length;A+=8){var R=Math.min(8,I.length-A),y=parseInt(I.substring(A,A+R),m);8>R?(R=d(Math.pow(m,R)),T=T.j(R).add(d(y))):(T=T.j(v),T=T.add(d(y)))}return T}var g=l(0),w=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(L(this))return-M(this).m();for(var I=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(L(this))return"-"+M(this).toString(I);for(var m=d(Math.pow(I,6)),v=this,T="";;){var A=j(v,m).g;v=K(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=A,O(v))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=K(this,I),L(I)?-1:O(I)?0:1};function M(I){for(var m=I.g.length,v=[],T=0;T<m;T++)v[T]=~I.g[T];return new a(v,~I.h).add(w)}n.abs=function(){return L(this)?M(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(I.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=y>>>16,R&=65535,y&=65535,v[A]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function K(I,m){return I.add(M(m))}n.j=function(I){if(O(this)||O(I))return g;if(L(this))return L(I)?M(this).j(M(I)):M(M(this).j(I));if(L(I))return M(this.j(M(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var R=this.i(T)>>>16,y=this.i(T)&65535,ct=I.i(A)>>>16,rn=I.i(A)&65535;v[2*T+2*A]+=y*rn,Y(v,2*T+2*A),v[2*T+2*A+1]+=R*rn,Y(v,2*T+2*A+1),v[2*T+2*A+1]+=y*ct,Y(v,2*T+2*A+1),v[2*T+2*A+2]+=R*ct,Y(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function Y(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function j(I,m){if(O(m))throw Error("division by zero");if(O(I))return new G(g,g);if(L(I))return m=j(M(I),m),new G(M(m.g),M(m.h));if(L(m))return m=j(I,M(m)),new G(M(m.g),m.h);if(30<I.g.length){if(L(I)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=m;0>=T.l(I);)v=ae(v),T=ae(T);var A=le(v,1),R=le(T,1);for(T=le(T,2),v=le(v,2);!O(T);){var y=R.add(T);0>=y.l(I)&&(A=A.add(v),R=y),T=le(T,1),v=le(v,1)}return m=K(I,A.j(m)),new G(A,m)}for(A=g;0<=I.l(m);){for(v=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(v),y=R.j(m);L(y)||0<y.l(I);)v-=T,R=d(v),y=R.j(m);O(R)&&(R=w),A=A.add(R),I=K(I,y)}return new G(A,I)}n.A=function(I){return j(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&I.i(T);return new a(v,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|I.i(T);return new a(v,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^I.i(T);return new a(v,this.h^I.h)};function ae(I){for(var m=I.g.length+1,v=[],T=0;T<m;T++)v[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(v,I.h)}function le(I,m){var v=m>>5;m%=32;for(var T=I.g.length-v,A=[],R=0;R<T;R++)A[R]=0<m?I.i(R+v)>>>m|I.i(R+v+1)<<32-m:I.i(R+v);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Wn=a}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xf,ss,Mf,Ai,xa,Lf,Ff,Uf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof li=="object"&&li];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function w(o,u,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,w.apply(null,arguments)}function S(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var B=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)B[Ee-2]=arguments[Ee];return u.prototype[b].apply(p,B)}}function L(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function M(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let B=0;B<C;B++)o[b+B]=p[B]}else o.push(p)}}class K{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Y(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var ae=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function le(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function I(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function R(o){c.setTimeout(()=>{throw o},0)}function y(){var o=yt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,h){const p=rn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var rn=new K(()=>new Le,o=>o.reset());class Le{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,yt=new ct,Nn=()=>{const o=c.Promise.resolve(void 0);ve=()=>{o.then(jt)}};var jt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var u=rn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Po=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Vn(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ae){e:{try{j(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:xn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Vn.aa.h.call(this)}}O(Vn,Ne);var xn={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),Br=0;function $s(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++Br,this.da=this.fa=!1}function wt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jr(o){this.src=o,this.g={},this.h=0}jr.prototype.add=function(o,u,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=E(o,u,p,b);return-1<B?(u=o[B],h||(u.fa=!1)):(u=new $s(u,this.src,C,!!p,b),u.fa=h,o.push(u)),u};function _(o,u){var h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(wt(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function E(o,u,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==p)return b}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function D(o,u,h,p,b){if(Array.isArray(u)){for(var C=0;C<u.length;C++)D(o,u[C],h,p,b);return null}return h=Z(h),o&&o[$t]?o.K(u,h,d(p)?!!p.capture:!!p,b):V(o,u,h,!1,p,b)}function V(o,u,h,p,b,C){if(!u)throw Error("Invalid event type");var B=d(b)?!!b.capture:!!b,Ee=H(o);if(Ee||(o[P]=Ee=new jr(o)),h=Ee.add(u,h,p,B,C),h.proxy)return h;if(p=q(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Po||(b=B),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(x(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function o(h){return u.call(o.src,o.listener,h)}const u=Q;return o}function U(o,u,h,p,b){if(Array.isArray(u))for(var C=0;C<u.length;C++)U(o,u[C],h,p,b);else p=d(p)?!!p.capture:!!p,h=Z(h),o&&o[$t]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=E(C,h,p,b),-1<h&&(wt(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,h,p,b)),(h=-1<o?u[o]:null)&&F(h))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[$t])_(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(x(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=H(u))?(_(h,o),h.h==0&&(h.src=null,u[P]=null)):wt(o)}}}function x(o){return o in N?N[o]:N[o]="on"+o}function Q(o,u){if(o.da)o=!0;else{u=new Vn(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&F(o),o=h.call(p,u)}return o}function H(o){return o=o[P],o instanceof jr?o:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[W]||(o[W]=function(u){return o.handleEvent(u)}),o[W])}function J(){Oe.call(this),this.i=new jr(this),this.M=this,this.F=null}O(J,Oe),J.prototype[$t]=!0,J.prototype.removeEventListener=function(o,u,h,p){U(this,o,u,h,p)};function se(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var b=u;u=new Ne(p,o),T(u,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var B=u.g=h[C];b=ue(B,p,!0,u)&&b}if(B=u.g=o,b=ue(B,p,!0,u)&&b,b=ue(B,p,!1,u)&&b,h)for(C=0;C<h.length;C++)B=u.g=h[C],b=ue(B,p,!1,u)&&b}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)wt(h[p]);delete o.g[u],o.h--}}this.F=null},J.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},J.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ue(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==h){var Ee=B.listener,Be=B.ha||B.src;B.fa&&_(o.i,B),b=Ee.call(Be,p)!==!1&&b}}return b&&!p.defaultPrevented}function qe(o,u,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Fe(o){o.g=qe(()=>{o.g=null,o.i&&(o.i=!1,Fe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class pt extends Oe{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(o){Oe.call(this),this.h=o,this.g={}}O(He,Oe);var sn=[];function $r(o){le(o.g,function(u,h){this.g.hasOwnProperty(h)&&F(u)},o),o.g={}}He.prototype.N=function(){He.aa.N.call(this),$r(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ue=c.JSON.stringify,gt=c.JSON.parse,qs=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ko(){}ko.prototype.h=null;function Wc(o){return o.h||(o.h=o.i())}function Qc(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Do(){Ne.call(this,"d")}O(Do,Ne);function Oo(){Ne.call(this,"c")}O(Oo,Ne);var Mn={},Jc=null;function Hs(){return Jc=Jc||new J}Mn.La="serverreachability";function Yc(o){Ne.call(this,Mn.La,o)}O(Yc,Ne);function Hr(o){const u=Hs();se(u,new Yc(u))}Mn.STAT_EVENT="statevent";function Xc(o,u){Ne.call(this,Mn.STAT_EVENT,o),this.stat=u}O(Xc,Ne);function et(o){const u=Hs();se(u,new Xc(u,o))}Mn.Ma="timingevent";function Zc(o,u){Ne.call(this,Mn.Ma,o),this.size=u}O(Zc,Ne);function zr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Kr(){this.g=!0}Kr.prototype.xa=function(){this.g=!1};function Lp(o,u,h,p,b,C){o.info(function(){if(o.g)if(C)for(var B="",Ee=C.split("&"),Be=0;Be<Ee.length;Be++){var me=Ee[Be].split("=");if(1<me.length){var ze=me[0];me=me[1];var Ke=ze.split("_");B=2<=Ke.length&&Ke[1]=="type"?B+(ze+"="+me+"&"):B+(ze+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+B})}function Fp(o,u,h,p,b,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+C+" "+B})}function sr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Bp(o,h)+(p?" "+p:"")})}function Up(o,u){o.info(function(){return"TIMEOUT: "+u})}Kr.prototype.info=function(){};function Bp(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return Ue(h)}catch{return u}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},el={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},No;function Ks(){}O(Ks,ko),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},No=new Ks;function on(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tl}function tl(){this.i=null,this.g="",this.h=!1}var nl={},Vo={};function xo(o,u,h){o.L=1,o.v=Js(qt(u)),o.m=h,o.P=!0,rl(o,null)}function rl(o,u){o.F=Date.now(),Gs(o),o.A=qt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),_l(h.i,"t",p),o.C=0,h=o.j.J,o.h=new tl,o.g=xl(o.j,h?u:null,!o.m),0<o.O&&(o.M=new pt(w(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(sn[0]=b.toString()),b=sn);for(var C=0;C<b.length;C++){var B=D(h,b[C],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Hr(),Lp(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ht(o)==3?u.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)e:{const Ke=Ht(this.g);var u=this.g.Ba();const ar=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Al(this.g)))){this.J||Ke!=4||u==7||(u==8||0>=ar?Hr(3):Hr(2)),Mo(this);var h=this.g.Z();this.X=h;t:if(sl(this)){var p=Al(this.g);o="";var b=p.length,C=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Gr(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,Fp(this.i,this.u,this.A,this.l,this.R,Ke,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,Be=this.g;if((Ee=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(Ee)){var me=Ee;break t}}me=null}if(h=me)sr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,h);else{this.o=!1,this.s=3,et(12),Ln(this),Gr(this);break e}}if(this.P){h=!0;let vt;for(;!this.J&&this.C<B.length;)if(vt=jp(this,B),vt==Vo){Ke==4&&(this.s=4,et(14),h=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==nl){this.s=4,et(15),sr(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else sr(this.i,this.l,vt,null),Lo(this,vt);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||B.length!=0||this.h.h||(this.s=1,et(16),h=!1),this.o=this.o&&h,!h)sr(this.i,this.l,B,"[Invalid Chunked Response]"),Ln(this),Gr(this);else if(0<B.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),qo(ze),ze.M=!0,et(11))}}else sr(this.i,this.l,B,null),Lo(this,B);Ke==4&&Ln(this),this.o&&!this.J&&(Ke==4?Dl(this.j,this):(this.o=!1,Gs(this)))}else sg(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Ln(this),Gr(this)}}}catch{}finally{}};function sl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function jp(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Vo:(h=Number(u.substring(h,p)),isNaN(h)?nl:(p+=1,p+h>u.length?Vo:(u=u.slice(p,p+h),o.C=p+h,u)))}on.prototype.cancel=function(){this.J=!0,Ln(this)};function Gs(o){o.S=Date.now()+o.I,il(o,o.I)}function il(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zr(w(o.ba,o),u)}function Mo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Up(this.i,this.A),this.L!=2&&(Hr(),et(17)),Ln(this),this.s=2,Gr(this)):il(this,this.S-o)};function Gr(o){o.j.G==0||o.J||Dl(o.j,o)}function Ln(o){Mo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,$r(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Lo(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Fo(h.h,o))){if(!o.K&&Fo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ni(h),ei(h);else break e;$o(h),et(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=zr(w(h.Za,h),6e3));if(1>=cl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Un(h,11)}else if((o.K||h.g==o)&&ni(h),!Y(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let me=b[u];if(h.T=me[0],me=me[1],h.G==2)if(me[0]=="c"){h.K=me[1],h.ia=me[2];const ze=me[3];ze!=null&&(h.la=ze,h.j.info("VER="+h.la));const Ke=me[4];Ke!=null&&(h.Aa=Ke,h.j.info("SVER="+h.Aa));const ar=me[5];ar!=null&&typeof ar=="number"&&0<ar&&(p=1.5*ar,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const vt=o.g;if(vt){const si=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var C=p.h;C.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Uo(C,C.h),C.h=null))}if(p.D){const Ho=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(p.ya=Ho,we(p.I,p.D,Ho))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var B=o;if(p.qa=Vl(p,p.J?p.ia:null,p.W),B.K){ll(p.h,B);var Ee=B,Be=p.L;Be&&(Ee.I=Be),Ee.B&&(Mo(Ee),Gs(Ee)),p.g=B}else Pl(p);0<h.i.length&&ti(h)}else me[0]!="stop"&&me[0]!="close"||Un(h,7);else h.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Un(h,7):jo(h):me[0]!="noop"&&h.l&&h.l.ta(me),h.v=0)}}Hr(4)}catch{}}var $p=class{constructor(o,u){this.g=o,this.map=u}};function ol(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function al(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cl(o){return o.h?1:o.g?o.g.size:0}function Fo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Uo(o,u){o.g?o.g.add(u):o.h=u}function ll(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ol.prototype.cancel=function(){if(this.i=ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ul(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function qp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function Hp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function hl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Hp(o),p=qp(o),b=p.length,C=0;C<b;C++)u.call(void 0,p[C],h&&h[C],o)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zp(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];u(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,Ws(this,o.j),this.o=o.o,this.g=o.g,Qs(this,o.s),this.l=o.l;var u=o.i,h=new Jr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),fl(this,h),this.m=o.m}else o&&(u=String(o).match(dl))?(this.h=!1,Ws(this,u[1]||"",!0),this.o=Wr(u[2]||""),this.g=Wr(u[3]||"",!0),Qs(this,u[4]),this.l=Wr(u[5]||"",!0),fl(this,u[6]||"",!0),this.m=Wr(u[7]||"")):(this.h=!1,this.i=new Jr(null,this.h))}Fn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Qr(u,pl,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Qr(u,pl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Qr(h,h.charAt(0)=="/"?Wp:Gp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Qr(h,Jp)),o.join("")};function qt(o){return new Fn(o)}function Ws(o,u,h){o.j=h?Wr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Qs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function fl(o,u,h){u instanceof Jr?(o.i=u,Yp(o.i,o.h)):(h||(u=Qr(u,Qp)),o.i=new Jr(u,o.h))}function we(o,u,h){o.i.set(u,h)}function Js(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Kp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pl=/[#\/\?@]/g,Gp=/[#\?:]/g,Wp=/[#\?]/g,Qp=/[#\?@]/g,Jp=/#/g;function Jr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&zp(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Jr.prototype,n.add=function(o,u){an(this),this.i=null,o=ir(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function gl(o,u){an(o),u=ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ml(o,u){return an(o),u=ir(o,u),o.g.has(u)}n.forEach=function(o,u){an(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)},n.na=function(){an(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(u[p])}return h},n.V=function(o){an(this);let u=[];if(typeof o=="string")ml(this,o)&&(u=u.concat(this.g.get(ir(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return an(this),this.i=null,o=ir(this,o),ml(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function _l(o,u,h){gl(o,u),0<h.length&&(o.i=null,o.g.set(ir(o,u),L(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var b=C;B[p]!==""&&(b+="="+encodeURIComponent(String(B[p]))),o.push(b)}}return this.i=o.join("&")};function ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Yp(o,u){u&&!o.j&&(an(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(gl(this,p),_l(this,b,h))},o)),o.j=u}function Xp(o,u){const h=new Kr;if(c.Image){const p=new Image;p.onload=S(cn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=S(cn,h,"TestLoadImage: error",!1,u,p),p.onabort=S(cn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(cn,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Zp(o,u){const h=new Kr,p=new AbortController,b=setTimeout(()=>{p.abort(),cn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?cn(h,"TestPingServer: ok",!0,u):cn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),cn(h,"TestPingServer: error",!1,u)})}function cn(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function eg(){this.g=new qs}function tg(o,u,h){const p=h||"";try{hl(o,function(b,C){let B=b;d(b)&&(B=Ue(b)),u.push(p+C+"="+encodeURIComponent(B))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function Ys(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Ys,ko),Ys.prototype.g=function(){return new Xs(this.l,this.j)},Ys.prototype.i=function(o){return function(){return o}}({});function Xs(o,u){J.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Xs,J),n=Xs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function yl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Yr(this):Xr(this),this.readyState==3&&yl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Qa=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vl(o){let u="";return le(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Bo(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=vl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):we(o,u,h))}function Re(o){J.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Re,J);var ng=/^https?$/i,rg=["POST","PUT"];n=Re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():No.g(),this.v=this.o?Wc(this.o):Wc(No),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){El(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rg,u,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of h)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){El(this,C)}};function El(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Tl(o),Zs(o)}function Tl(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),Zs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zs(this,!0)),Re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Il(this):this.bb())},n.bb=function(){Il(this)};function Il(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ht(o)!=4||o.Z()!=2)){if(o.u&&Ht(o)==4)qe(o.Ea,0,o);else if(se(o,"readystatechange"),Ht(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=B===0){var b=String(o.D).match(dl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!ng.test(b?b.toLowerCase():"")}h=p}if(h)se(o,"complete"),se(o,"success");else{o.m=6;try{var C=2<Ht(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Tl(o)}}finally{Zs(o)}}}}function Zs(o,u){if(o.g){wl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{h.onreadystatechange=p}catch{}}}function wl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),gt(u)}};function Al(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function sg(o){const u={};o=(o.g&&2<=Ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Y(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[b]||[];u[b]=C,C.push(h)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function bl(o){this.Aa=0,this.i=[],this.j=new Kr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,o),this.cb=Zr("retryDelaySeedMs",1e4,o),this.Wa=Zr("forwardChannelMaxRetries",2,o),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ol(o&&o.concurrentRequestLimit),this.Da=new eg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bl.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){et(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Vl(this,null,this.W),ti(this)};function jo(o){if(Rl(o),o.G==3){var u=o.U++,h=qt(o.I);if(we(h,"SID",o.K),we(h,"RID",u),we(h,"TYPE","terminate"),es(o,h),u=new on(o,o.j,u),u.L=2,u.v=Js(qt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=xl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Gs(u)}Nl(o)}function ei(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function Rl(o){ei(o),o.u&&(c.clearTimeout(o.u),o.u=null),ni(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ti(o){if(!al(o.h)&&!o.s){o.s=!0;var u=o.Ga;ve||Nn(),ge||(ve(),ge=!0),yt.add(u,o),o.B=0}}function ig(o,u){return cl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zr(w(o.Ga,o,u),Ol(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new on(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Cl(this,b,u),h=qt(this.I),we(h,"RID",o),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),es(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(vl(C)))+"&"+u:this.m&&Bo(h,this.m,C)),Uo(this.h,b),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",u),we(h,"SID","null"),b.T=!0,xo(b,h,null)):xo(b,h,u),this.G=2}}else this.G==3&&(o?Sl(this,o):this.i.length==0||al(this.h)||Sl(this))};function Sl(o,u){var h;u?h=u.l:h=o.U++;const p=qt(o.I);we(p,"SID",o.K),we(p,"RID",h),we(p,"AID",o.T),es(o,p),o.m&&o.o&&Bo(p,o.m,o.o),h=new on(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Cl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Uo(o.h,h),xo(h,p,u)}function es(o,u){o.H&&le(o.H,function(h,p){we(u,p,h)}),o.l&&hl({},function(h,p){we(u,p,h)})}function Cl(o,u,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;e:{var b=o.i;let C=-1;for(;;){const B=["count="+h];C==-1?0<h?(C=b[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Ee=!0;for(let Be=0;Be<h;Be++){let me=b[Be].g;const ze=b[Be].map;if(me-=C,0>me)C=Math.max(0,b[Be].g-100),Ee=!1;else try{tg(ze,B,"req"+me+"_")}catch{p&&p(ze)}}if(Ee){p=B.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function Pl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ve||Nn(),ge||(ve(),ge=!0),yt.add(u,o),o.v=0}}function $o(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zr(w(o.Fa,o),Ol(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zr(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),ei(this),kl(this))};function qo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function kl(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=qt(o.qa);we(u,"RID","rpc"),we(u,"SID",o.K),we(u,"AID",o.T),we(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(u,"TO",o.ja),we(u,"TYPE","xmlhttp"),es(o,u),o.m&&o.o&&Bo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Js(qt(u)),h.m=null,h.P=!0,rl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ei(this),$o(this),et(19))};function ni(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Dl(o,u){var h=null;if(o.g==u){ni(o),qo(o),o.g=null;var p=2}else if(Fo(o.h,u))h=u.D,ll(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=Hs(),se(p,new Zc(p,h)),ti(o)}else Pl(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&ig(o,u)||p==2&&$o(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function Ol(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Un(o,u){if(o.j.info("Error code "+u),u==2){var h=w(o.fb,o),p=o.Xa;const b=!p;p=new Fn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ws(p,"https"),Js(p),b?Xp(p.toString(),h):Zp(p.toString(),h)}else et(2);o.G=0,o.l&&o.l.sa(u),Nl(o),Rl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Nl(o){if(o.G=0,o.ka=[],o.l){const u=ul(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Vl(o,u,h){var p=h instanceof Fn?qt(h):new Fn(h);if(p.g!="")u&&(p.g=u+"."+p.g),Qs(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var C=new Fn(null);p&&Ws(C,p),u&&(C.g=u),b&&Qs(C,b),h&&(C.l=h),p=C}return h=o.D,u=o.ya,h&&u&&we(p,h,u),we(p,"VER",o.la),es(o,p),p}function xl(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Re(new Ys({eb:h})):new Re(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ml(){}n=Ml.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ri(){}ri.prototype.g=function(o,u){return new lt(o,u)};function lt(o,u){J.call(this),this.g=new bl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new or(this)}O(lt,J),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){jo(this.g)},lt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ue(o),o=h);u.i.push(new $p(u.Ya++,o)),u.G==3&&ti(u)},lt.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,lt.aa.N.call(this)};function Ll(o){Do.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Ll,Do);function Fl(){Oo.call(this),this.status=1}O(Fl,Oo);function or(o){this.g=o}O(or,Ml),or.prototype.ua=function(){se(this.g,"a")},or.prototype.ta=function(o){se(this.g,new Ll(o))},or.prototype.sa=function(o){se(this.g,new Fl)},or.prototype.ra=function(){se(this.g,"b")},ri.prototype.createWebChannel=ri.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Uf=function(){return new ri},Ff=function(){return Hs()},Lf=Mn,xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,Ai=zs,el.COMPLETE="complete",Mf=el,Qc.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",J.prototype.listen=J.prototype.K,ss=Qc,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,xf=Re}).apply(typeof li<"u"?li:typeof self<"u"?self:typeof window<"u"?window:{});const qu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new gc("@firebase/firestore");function ur(){return er.logLevel}function z(n,...e){if(er.logLevel<=ce.DEBUG){const t=e.map(Cc);er.debug(`Firestore (${Mr}): ${n}`,...t)}}function tn(n,...e){if(er.logLevel<=ce.ERROR){const t=e.map(Cc);er.error(`Firestore (${Mr}): ${n}`,...t)}}function Pr(n,...e){if(er.logLevel<=ce.WARN){const t=e.map(Cc);er.warn(`Firestore (${Mr}): ${n}`,...t)}}function Cc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+n;throw tn(e),new Error(e)}function be(n,e){n||ie()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class yT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vT{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new Bf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new We(e)}}class ET{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class TT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ET(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new IT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=AT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function kr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new at(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new at(0,0))}static max(){return new re(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,r){t===void 0?t=0:t>e.length&&ie(),r===void 0?r=e.length-t:r>e.length-t&&ie(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Se extends Rs{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const RT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Rs{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return RT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Se.fromString(e))}static fromName(e){return new ee(Se.fromString(e).popFirst(5))}static empty(){return new ee(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Se(e.slice()))}}function ST(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new at(t+1,0):new at(t,r));return new bn(s,ee.empty(),e)}function CT(n){return new bn(n.readTime,n.key,-1)}class bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bn(re.min(),ee.empty(),-1)}static max(){return new bn(re.max(),ee.empty(),-1)}}function PT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==kT)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function OT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}yo.oe=-1;function vo(n){return n==null}function Ma(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hu(e)),e=VT(n.get(t),e);return Hu(e)}function VT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Hu(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ui(this.root,e,this.comparator,!0)}}class ui{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(e){return new Ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class Ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new _n([])}unionWith(e){let t=new xe(st.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jf("Invalid base64 string: "+i):i}}(e);return new $e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const MT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(be(!!n),typeof n=="string"){let e=0;const t=MT.exec(n);if(be(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Eo(n){const e=n.mapValue.fields.__previous_value__;return Pc(e)?Eo(e):e}function Ss(n){const e=Rn(n.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Cs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pc(n)?4:UT(n)?9007199254740991:FT(n)?10:11:ie()}function Mt(n,e){if(n===e)return!0;const t=Cn(n);if(t!==Cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Rn(s.timestampValue),c=Rn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Sn(s.bytesValue).isEqual(Sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ce(s.doubleValue),c=Ce(i.doubleValue);return a===c?Ma(a)===Ma(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return kr(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(zu(a)!==zu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Mt(a[l],c[l])))return!1;return!0}(n,e);default:return ie()}}function Ps(n,e){return(n.values||[]).find(t=>Mt(t,e))!==void 0}function Dr(n,e){if(n===e)return 0;const t=Cn(n),r=Cn(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ce(i.integerValue||i.doubleValue),l=Ce(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Gu(n.timestampValue,e.timestampValue);case 4:return Gu(Ss(n),Ss(e));case 5:return de(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Sn(i),l=Sn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=de(c[d],l[d]);if(f!==0)return f}return de(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=de(Ce(i.latitude),Ce(a.latitude));return c!==0?c:de(Ce(i.longitude),Ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,f;const g=i.fields||{},w=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,O=(l=w.value)===null||l===void 0?void 0:l.arrayValue,L=de(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((f=O==null?void 0:O.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Wu(S,O)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===hi.mapValue&&a===hi.mapValue)return 0;if(i===hi.mapValue)return 1;if(a===hi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const w=de(l[g],f[g]);if(w!==0)return w;const S=Dr(c[l[g]],d[f[g]]);if(S!==0)return S}return de(l.length,f.length)}(n.mapValue,e.mapValue);default:throw ie()}}function Gu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=Rn(n),r=Rn(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function Wu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Dr(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function Or(n){return La(n)}function La(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=La(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${La(t.fields[a])}`;return s+"}"}(n.mapValue):ie()}function bi(n){switch(Cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eo(n);return e?16+bi(e):16;case 5:return 2*n.stringValue.length;case 6:return Sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Fs(r.fields,(i,a)=>{s+=i.length+bi(a)}),s}(n.mapValue);default:throw ie()}}function Fa(n){return!!n&&"integerValue"in n}function kc(n){return!!n&&"arrayValue"in n}function Qu(n){return!!n&&"nullValue"in n}function Ju(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ua(n){return!!n&&"mapValue"in n}function FT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function UT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ua(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=st.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ps(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ua(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ua(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Fs(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(ps(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ye(e,0,re.min(),re.min(),re.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new Ye(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new Ye(e,2,t,re.min(),re.min(),St.empty(),0)}static newUnknownDocument(e,t){return new Ye(e,3,t,re.min(),re.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.position=e,this.inclusive=t}}function Yu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=Dr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function BT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{}class Ve extends $f{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $T(e,t,r):t==="array-contains"?new zT(e,r):t==="in"?new KT(e,r):t==="not-in"?new GT(e,r):t==="array-contains-any"?new WT(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qT(e,r):new HT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Dr(t,this.value)):t!==null&&Cn(this.value)===Cn(t)&&this.matchesComparison(Dr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends $f{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Lt(e,t)}matches(e){return qf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qf(n){return n.op==="and"}function Hf(n){return jT(n)&&qf(n)}function jT(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Ua(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+Or(n.value);if(Hf(n))return n.filters.map(e=>Ua(e)).join(",");{const e=n.filters.map(t=>Ua(t)).join(",");return`${n.op}(${e})`}}function zf(n,e){return n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,e):n instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&zf(a,s.filters[c]),!0):!1}(n,e):void ie()}function Kf(n){return n instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Or(t.value)}`}(n):n instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"}(n):"Filter"}class $T extends Ve{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class qT extends Ve{constructor(e,t){super(e,"in",t),this.keys=Gf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class HT extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=Gf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class zT extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kc(t)&&Ps(t.arrayValue,this.value)}}class KT extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ps(this.value.arrayValue,t)}}class GT extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ps(this.value.arrayValue,t)}}class WT extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Zu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new QT(n,e,t,r,s,i,a)}function Dc(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ua(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Or(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Or(r)).join(",")),e.ue=t}return e.ue}function Oc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!BT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xu(n.startAt,e.startAt)&&Xu(n.endAt,e.endAt)}function Ba(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JT(n,e,t,r,s,i,a,c){return new To(n,e,t,r,s,i,a,c)}function Wf(n){return new To(n)}function eh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function YT(n){return n.collectionGroup!==null}function gs(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(st.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ki(i,r))}),t.has(st.keyField().canonicalString())||e.ce.push(new Ki(st.keyField(),r))}return e.ce}function Nt(n){const e=fe(n);return e.le||(e.le=XT(e,gs(n))),e.le}function XT(n,e){if(n.limitType==="F")return Zu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ki(s.field,i)});const t=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return Zu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ja(n,e,t){return new To(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Io(n,e){return Oc(Nt(n),Nt(e))&&n.limitType===e.limitType}function Qf(n){return`${Dc(Nt(n))}|lt:${n.limitType}`}function hr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Kf(s)).join(", ")}]`),vo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Or(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Or(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function wo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Yu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,gs(r),s)||r.endAt&&!function(a,c,l){const d=Yu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,gs(r),s))}(n,e)}function ZT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jf(n){return(e,t)=>{let r=!1;for(const s of gs(n)){const i=eI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eI(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Dr(l,d):ie()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new Pe(ee.comparator);function Pn(){return tI}const Yf=new Pe(ee.comparator);function is(...n){let e=Yf;for(const t of n)e=e.insert(t.key,t);return e}function nI(n){let e=Yf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Hn(){return ms()}function Xf(){return ms()}function ms(){return new rr(n=>n.toString(),(n,e)=>n.isEqual(e))}const rI=new xe(ee.comparator);function pe(...n){let e=rI;for(const t of n)e=e.add(t);return e}const sI=new xe(de);function iI(){return sI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(e)?"-0":e}}function aI(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._=void 0}}function cI(n,e,t){return n instanceof $a?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pc(i)&&(i=Eo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Gi?Zf(n,e):n instanceof Wi?ep(n,e):function(s,i){const a=uI(s,i),c=th(a)+th(s.Pe);return Fa(a)&&Fa(s.Pe)?aI(c):oI(s.serializer,c)}(n,e)}function lI(n,e,t){return n instanceof Gi?Zf(n,e):n instanceof Wi?ep(n,e):t}function uI(n,e){return n instanceof qa?function(r){return Fa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $a extends Ao{}class Gi extends Ao{constructor(e){super(),this.elements=e}}function Zf(n,e){const t=tp(e);for(const r of n.elements)t.some(s=>Mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Wi extends Ao{constructor(e){super(),this.elements=e}}function ep(n,e){let t=tp(e);for(const r of n.elements)t=t.filter(s=>!Mt(s,r));return{arrayValue:{values:t}}}class qa extends Ao{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function th(n){return Ce(n.integerValue||n.doubleValue)}function tp(n){return kc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Gi&&s instanceof Gi||r instanceof Wi&&s instanceof Wi?kr(r.elements,s.elements,Mt):r instanceof qa&&s instanceof qa?Mt(r.Pe,s.Pe):r instanceof $a&&s instanceof $a}(n.transform,e.transform)}class Jn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Nc{}function np(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fI(n.key,Jn.none()):new Vc(n.key,n.data,Jn.none());{const t=n.data,r=St.empty();let s=new xe(st.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new bo(n.key,r,new _n(s.toArray()),Jn.none())}}function dI(n,e,t){n instanceof Vc?function(s,i,a){const c=s.value.clone(),l=rh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof bo?function(s,i,a){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=rh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(rp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _s(n,e,t,r){return n instanceof Vc?function(i,a,c,l){if(!Ri(i.precondition,a))return c;const d=i.value.clone(),f=sh(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof bo?function(i,a,c,l){if(!Ri(i.precondition,a))return c;const d=sh(i.fieldTransforms,l,a),f=a.data;return f.setAll(rp(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return Ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function nh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kr(r,s,(i,a)=>hI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vc extends Nc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bo extends Nc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rh(n,e,t){const r=new Map;be(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,lI(a,c,t[s]))}return r}function sh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,cI(i,a,e))}return r}class fI extends Nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=np(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(t,r)=>nh(t,r))&&kr(this.baseMutations,e.baseMutations,(t,r)=>nh(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,he;function sp(n){if(n===void 0)return tn("GRPC error has no .code"),$.UNKNOWN;switch(n){case ke.OK:return $.OK;case ke.CANCELLED:return $.CANCELLED;case ke.UNKNOWN:return $.UNKNOWN;case ke.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ke.INTERNAL:return $.INTERNAL;case ke.UNAVAILABLE:return $.UNAVAILABLE;case ke.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ke.NOT_FOUND:return $.NOT_FOUND;case ke.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ke.ABORTED:return $.ABORTED;case ke.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ke.DATA_LOSS:return $.DATA_LOSS;default:return ie()}}(he=ke||(ke={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Wn([4294967295,4294967295],0);function ih(n){const e=_I().encode(n),t=new Vf;return t.update(e),new Uint8Array(t.digest())}function oh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([t,r],0),new Wn([s,i],0)]}class xc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new os(`Invalid padding: ${t}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new os(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Wn.fromNumber(this.Te)}Ee(e,t,r){let s=e.add(t.multiply(Wn.fromNumber(r)));return s.compare(yI)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ih(e),[r,s]=oh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new xc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=ih(e),[r,s]=oh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Us.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ro(re.min(),s,new Pe(de),Pn(),pe())}}class Us{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Us(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ip{constructor(e,t){this.targetId=e,this.me=t}}class op{constructor(e,t,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ah{constructor(){this.fe=0,this.ge=ch(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),t=pe(),r=pe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Us(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=ch()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=di(),this.Qe=di(),this.Ke=new Pe(de)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(Ba(i))if(r===0){const a=new ee(i.path);this.We(t,a,Ye.newNoDocument(a,re.min()))}else be(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Sn(r).toUint8Array()}catch(l){if(l instanceof jf)return Pr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new xc(a,s,i)}catch(l){return Pr(l instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Ye(a);if(c){if(i.current&&Ba(c.target)){const l=new ee(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ye.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=pe();this.Qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ro(e,t,this.Ke,this.ke,r);return this.ke=Pn(),this.qe=di(),this.Qe=di(),this.Ke=new Pe(de),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new ah,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new xe(de),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xe(de),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ah),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function di(){return new Pe(ee.comparator)}function ch(){return new Pe(ee.comparator)}const EI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},II={and:"AND",or:"OR"};class wI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ha(n,e){return n.useProto3Json||vo(e)?e:{value:e}}function AI(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ar(n){return be(!!n),re.fromTimestamp(function(t){const r=Rn(t);return new at(r.seconds,r.nanos)}(n))}function RI(n,e){return za(n,e).canonicalString()}function za(n,e){const t=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ap(n){const e=Se.fromString(n);return be(dp(e)),e}function ha(n,e){const t=ap(e);if(t.get(1)!==n.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(lp(t))}function cp(n,e){return RI(n.databaseId,e)}function SI(n){const e=ap(n);return e.length===4?Se.emptyPath():lp(e)}function lh(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lp(n){return be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function CI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(be(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?$.UNKNOWN:sp(d.code);return new X(f,d.message||"")}(a);t=new op(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ha(n,r.document.name),i=Ar(r.document.updateTime),a=r.document.createTime?Ar(r.document.createTime):re.min(),c=new St({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Si(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ha(n,r.document),i=r.readTime?Ar(r.readTime):re.min(),a=Ye.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Si([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ha(n,r.document),i=r.removedTargetIds||[];t=new Si([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new mI(s,i),c=r.targetId;t=new ip(c,a)}}return t}function PI(n,e){return{documents:[cp(n,e.path)]}}function kI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cp(n,s);const i=function(d){if(d.length!==0)return hp(Lt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:dr(w.field),direction:NI(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ha(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function DI(n){let e=SI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){be(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const w=up(g);return w instanceof Lt&&Hf(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(w=>function(O){return new Ki(fr(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(g){let w;return w=typeof g=="object"?g.value:g,vo(w)?null:w}(t.limit));let l=null;t.startAt&&(l=function(g){const w=!!g.before,S=g.values||[];return new zi(S,w)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const w=!g.before,S=g.values||[];return new zi(S,w)}(t.endAt)),JT(e,s,a,i,c,"F",l,d)}function OI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function up(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fr(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fr(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fr(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fr(t.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(n):n.fieldFilter!==void 0?function(t){return Ve.create(fr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(r=>up(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(t.compositeFilter.op))}(n):ie()}function NI(n){return EI[n]}function VI(n){return TI[n]}function xI(n){return II[n]}function dr(n){return{fieldPath:n.canonicalString()}}function fr(n){return st.fromServerFormat(n.fieldPath)}function hp(n){return n instanceof Ve?function(t){if(t.op==="=="){if(Ju(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NAN"}};if(Qu(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ju(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NAN"}};if(Qu(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(t.field),op:VI(t.op),value:t.value}}}(n):n instanceof Lt?function(t){const r=t.getFilters().map(s=>hp(s));return r.length===1?r[0]:{compositeFilter:{op:xI(t.op),filters:r}}}(n):ie()}function dp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,r,s,i=re.min(),a=re.min(),c=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.ht=e}}function LI(n){const e=DI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ja(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.ln=new UI}addToCollectionParentIndex(e,t){return this.ln.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(bn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class UI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Nr(0)}static Qn(){return new Nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class BI{constructor(e){this.Gn=e,this.buffer=new xe(hh),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lr(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _o(t)}await this.Yn(3e5)})}}class $I{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(yo.oe);const r=new BI(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(uh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uh):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,i,a,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),ur()<=ce.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function qI(n,e){return new $I(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.changes=new rr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_s(r.mutation,s,_n.empty(),at.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=Hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=is();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Pn();const a=ms(),c=function(){return ms()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof bo)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),_s(f.mutation,d,f.mutation.getFieldMask(),at.now())):a.set(d.key,_n.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return c.set(d,new zI(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ms();let s=new Pe((a,c)=>a-c),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||_n.empty();f=c.applyToLocalView(d,f),r.set(l,f);const g=(s.get(c.batchId)||pe()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,g=Xf();f.forEach(w=>{if(!i.has(w)){const S=np(t.get(w),r.get(w));S!==null&&g.set(w,S),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ee.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):YT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Hn());let c=-1,l=i;return a.next(d=>k.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{l=l.insert(f,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,pe())).next(f=>({batchId:c,changes:nI(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=is();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const d=function(g,w){return new To(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,w)=>{a=a.insert(g,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ye.newInvalidDocument(f)))});let c=is();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&_s(f.mutation,d,_n.empty(),at.now()),wo(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return k.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ar(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:LI(s.bundledQuery),readTime:Ar(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.overlays=new Pe(ee.comparator),this.Er=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Hn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Tt(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Hn(),i=t.length+1,a=new ee(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Hn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Hn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return k.resolve(c)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new gI(t,r));let i=this.Er.get(t);i===void 0&&(i=pe(),this.Er.set(t,i)),this.Er.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.dr=new xe(Me.Ar),this.Rr=new xe(Me.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new Me(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Me(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new ee(new Se([])),r=new Me(t,e),s=new Me(t,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ee(new Se([])),r=new Me(t,e),s=new Me(t,e+1);let i=pe();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Me(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ee.comparator(e.key,t.key)||de(e.br,t.br)}static Vr(e,t){return de(e.br,t.br)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new xe(Me.Ar)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new Me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Me(t,0),s=new Me(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const c=this.Cr(a.br);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(de);return t.forEach(s=>{const i=new Me(s,0),a=new Me(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],c=>{r=r.add(c.br)})}),k.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const a=new Me(new ee(i),0);let c=new xe(de);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.br)),!0)},a),k.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return k.forEach(t.mutations,s=>{const i=new Me(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new Me(t,0),s=this.vr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.Nr=e,this.docs=function(){return new Pe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=Pn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Pn();const a=t.path,c=new ee(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||PT(CT(f),r)<=0||(s.has(f.key)||wo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ie()}Lr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new XI(this)}getSize(e){return k.resolve(this.size)}}class XI extends HI{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.persistence=e,this.Br=new rr(t=>Dc(t),Oc),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.kr=0,this.qr=new Mc,this.targetCount=0,this.Qr=Nr.qn()}forEachTarget(e,t){return this.Br.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),k.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Nr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Un(t),k.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t){this.Kr={},this.overlays={},this.$r=new yo(0),this.Ur=!1,this.Ur=!0,this.Wr=new QI,this.referenceDelegate=e(this),this.Gr=new ZI(this),this.indexManager=new FI,this.remoteDocumentCache=function(s){return new YI(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new MI(t),this.jr=new GI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new WI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new JI(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new ew(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return k.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class ew extends DT{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Zr=new Mc,this.Xr=null}static ei(e){return new Lc(e)}get ti(){if(this.Xr)return this.Xr;throw ie()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),k.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ti,r=>{const s=ee.fromPath(r);return this.ni(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return k.or([()=>k.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Qi{constructor(e,t){this.persistence=e,this.ri=new rr(r=>NT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qI(this,t)}static ei(e,t){return new Qi(e,t)}Hr(){}Jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return k.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,i.removeEntry(a,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bi(e.data.value)),t}ir(e,t,r){return k.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ty()?8:OT(Ze())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new tw;return this.ts(e,t,a).next(c=>{if(i.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>i.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(ur()<=ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),k.resolve()):(ur()<=ce.DEBUG&&z("QueryEngine","Query:",hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ur()<=ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):k.resolve())}Xi(e,t){if(eh(t))return k.resolve(null);let r=Nt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ja(t,null,"F"),r=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,ja(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,s){return eh(t)||s.isEqual(re.min())?k.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(t,i);return this.ss(t,a,r,s)?k.resolve(null):(ur()<=ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hr(t)),this.os(e,a,t,ST(s,-1)).next(c=>c))})}rs(e,t){let r=new xe(Jf(e));return t.forEach((s,i)=>{wo(e,i)&&(r=r.add(i))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,r){return ur()<=ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",hr(t)),this.Zi.getDocumentsMatchingQuery(e,t,bn.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Pe(de),this.cs=new rr(i=>Dc(i),Oc),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function sw(n,e,t,r){return new rw(n,e,t,r)}async function pp(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=pe();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function gp(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function iw(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const c=[];e.targetChanges.forEach((f,g)=>{const w=s.get(g);if(!w)return;c.push(t.Gr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(i,f.addedDocuments,g)));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken($e.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(L,M,K){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(w,S,f)&&c.push(t.Gr.updateTargetData(i,S))});let l=Pn(),d=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ow(i,a,e.documentUpdates).next(f=>{l=f.Is,d=f.Es})),!r.isEqual(re.min())){const f=t.Gr.getLastRemoteSnapshotVersion(i).next(g=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.us=s,i))}function ow(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Pn();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:s}})}function aw(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new yn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Ka(n,e,t){const r=fe(n),s=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Lr(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function dh(n,e,t){const r=fe(n);let s=re.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const g=fe(l),w=g.cs.get(f);return w!==void 0?k.resolve(g.us.get(w)):g.Gr.getTargetData(d,f)}(r,a,Nt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:pe())).next(c=>(cw(r,ZT(e),c),{documents:c,ds:i})))}function cw(n,e,t){let r=n.ls.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class fh{constructor(){this.activeTargetIds=iI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lw{constructor(){this._o=new fh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new fh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function da(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class fw extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,r,s,i,a){const c=da(),l=this.No(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,i,a),this.Bo(t,l,d,s).then(f=>(z("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Pr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}ko(t,r,s,i,a,c){return this.Oo(t,r,s,i,a)}Lo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,r){const s=hw[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,s){const i=da();return new Promise((a,c)=>{const l=new xf;l.setWithCredentials(!0),l.listenOnce(Mf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ai.NO_ERROR:const f=l.getResponseJson();z(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ai.TIMEOUT:z(Ge,`RPC '${e}' ${i} timed out`),c(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const g=l.getStatus();if(z(Ge,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const O=function(M){const K=M.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(K)>=0?K:$.UNKNOWN}(S.status);c(new X(O,S.message))}else c(new X($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X($.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{z(Ge,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);z(Ge,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}qo(e,t,r){const s=da(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Uf(),c=Ff(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");z(Ge,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let w=!1,S=!1;const O=new dw({Eo:M=>{S?z(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(w||(z(Ge,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),z(Ge,`RPC '${e}' stream ${s} sending:`,M),g.send(M))},Ao:()=>g.close()}),L=(M,K,Y)=>{M.listen(K,G=>{try{Y(G)}catch(j){setTimeout(()=>{throw j},0)}})};return L(g,ss.EventType.OPEN,()=>{S||(z(Ge,`RPC '${e}' stream ${s} transport opened.`),O.So())}),L(g,ss.EventType.CLOSE,()=>{S||(S=!0,z(Ge,`RPC '${e}' stream ${s} transport closed`),O.Do())}),L(g,ss.EventType.ERROR,M=>{S||(S=!0,Pr(Ge,`RPC '${e}' stream ${s} transport errored:`,M),O.Do(new X($.UNAVAILABLE,"The operation could not be completed")))}),L(g,ss.EventType.MESSAGE,M=>{var K;if(!S){const Y=M.data[0];be(!!Y);const G=Y,j=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(j){z(Ge,`RPC '${e}' stream ${s} received error:`,j);const ae=j.status;let le=function(v){const T=ke[v];if(T!==void 0)return sp(T)}(ae),I=j.message;le===void 0&&(le=$.INTERNAL,I="Unknown error status: "+ae+" with message "+j.message),S=!0,O.Do(new X(le,I)),g.close()}else z(Ge,`RPC '${e}' stream ${s} received:`,Y),O.vo(Y)}}),L(c,Lf.STAT_EVENT,M=>{M.stat===xa.PROXY?z(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===xa.NOPROXY&&z(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}}function fa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){return new wI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,r,s,i,a,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _p(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(tn(t.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new X($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gw extends pw{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=CI(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Ar(a.readTime):re.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=lh(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Ba(l)?{documents:PI(i,l)}:{query:kI(i,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=bI(i,a.resumeToken);const d=Ha(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=AI(i,a.snapshotVersion.toTimestamp());const d=Ha(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=OI(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=lh(this.serializer),t.removeTarget=e,this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,za(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X($.UNKNOWN,i.toString())})}ko(e,t,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,za(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X($.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tn(t),this.C_=!1):z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{js(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=fe(l);d.k_.add(4),await Bs(d),d.K_.set("Unknown"),d.k_.delete(4),await So(d)}(this))})}),this.K_=new _w(r,s)}}async function So(n){if(js(n))for(const e of n.q_)await e(!0)}async function Bs(n){for(const e of n.q_)await e(!1)}function yp(n,e){const t=fe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),$c(t)?jc(t):Fr(t).s_()&&Bc(t,e))}function Uc(n,e){const t=fe(n),r=Fr(t);t.B_.delete(e),r.s_()&&vp(t,e),t.B_.size===0&&(r.s_()?r.a_():js(t)&&t.K_.set("Unknown"))}function Bc(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fr(n).V_(e)}function vp(n,e){n.U_.xe(e),Fr(n).m_(e)}function jc(n){n.U_=new vI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.K_.F_()}function $c(n){return js(n)&&!Fr(n).i_()&&n.B_.size>0}function js(n){return fe(n).k_.size===0}function Ep(n){n.U_=void 0}async function vw(n){n.K_.set("Online")}async function Ew(n){n.B_.forEach((e,t)=>{Bc(n,e)})}async function Tw(n,e){Ep(n),$c(n)?(n.K_.O_(e),jc(n)):n.K_.set("Unknown")}async function Iw(n,e,t){if(n.K_.set("Online"),e instanceof op&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.B_.delete(c),s.U_.removeTarget(c))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gh(n,r)}else if(e instanceof Si?n.U_.$e(e):e instanceof ip?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(re.min()))try{const r=await gp(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.B_.get(d);f&&i.B_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.B_.get(l);if(!f)return;i.B_.set(l,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),vp(i,l);const g=new yn(f.target,l,d,f.sequenceNumber);Bc(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await gh(n,r)}}async function gh(n,e,t){if(!Lr(e))throw e;n.k_.add(1),await Bs(n),n.K_.set("Offline"),t||(t=()=>gp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await So(n)})}async function mh(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=js(t);t.k_.add(3),await Bs(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await So(t)}async function ww(n,e){const t=fe(n);e?(t.k_.delete(2),await So(t)):e||(t.k_.add(2),await Bs(t),t.K_.set("Unknown"))}function Fr(n){return n.W_||(n.W_=function(t,r,s){const i=fe(t);return i.b_(),new gw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:vw.bind(null,n),mo:Ew.bind(null,n),po:Tw.bind(null,n),R_:Iw.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),$c(n)?jc(n):n.K_.set("Unknown")):(await n.W_.stop(),Ep(n))})),n.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new qc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(n,e){if(tn("AsyncQueue",`${e}: ${n}`),Lr(n))return new X($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{static emptySet(e){return new br(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=is(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.z_=new Pe(ee.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ie():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vr{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Vr(e,t,br.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class bw{constructor(){this.queries=yh(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=yh(),i.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new X($.ABORTED,"Firestore shutting down"))}}function yh(){return new rr(n=>Qf(n),Io)}async function Rw(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new Aw,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Tp(a,`Initialization of query '${hr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Hc(t)}async function Sw(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cw(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.J_)c.ta(s)&&(r=!0);a.H_=s}}r&&Hc(t)}function Pw(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(t);r.queries.delete(e)}function Hc(n){n.X_.forEach(e=>{e.next()})}var Ga,vh;(vh=Ga||(Ga={})).na="default",vh.Cache="cache";class kw{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ga.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.key=e}}class wp{constructor(e){this.key=e}}class Dw{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=pe(),this.mutatedKeys=pe(),this.Va=Jf(e),this.ma=new br(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new _h,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const w=s.get(f),S=wo(this.query,g)?g:null,O=!!w&&this.mutatedKeys.has(w.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;w&&S?w.data.isEqual(S.data)?O!==L&&(r.track({type:3,doc:S}),M=!0):this.ya(w,S)||(r.track({type:2,doc:S}),M=!0,(l&&this.Va(S,l)>0||d&&this.Va(S,d)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),M=!0):w&&!S&&(r.track({type:1,doc:w}),M=!0,(l||d)&&(c=!0)),M&&(S?(a=a.add(S),i=L?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:c,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,g)=>function(S,O){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return L(S)-L(O)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(r),s=s!=null&&s;const c=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new Vr(this.query,e.ma,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new _h,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=pe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new wp(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Ip(r))}),t}va(e){this.da=e.ds,this.Ra=pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Vr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Ow{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Nw{constructor(e){this.key=e,this.Fa=!1}}class Vw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new rr(c=>Qf(c),Io),this.Oa=new Map,this.Na=new Set,this.La=new Pe(ee.comparator),this.Ba=new Map,this.ka=new Mc,this.qa={},this.Qa=new Map,this.Ka=Nr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xw(n,e,t=!0){const r=Cp(n);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Ap(r,e,t,!0),s}async function Mw(n,e){const t=Cp(n);await Ap(t,e,!0,!1)}async function Ap(n,e,t,r){const s=await aw(n.localStore,Nt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Lw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&yp(n.remoteStore,s),c}async function Lw(n,e,t,r,s){n.Ua=(g,w,S)=>async function(L,M,K,Y){let G=M.view.ga(K);G.ss&&(G=await dh(L.localStore,M.query,!1).then(({documents:I})=>M.view.ga(I,G)));const j=Y&&Y.targetChanges.get(M.targetId),ae=Y&&Y.targetMismatches.get(M.targetId)!=null,le=M.view.applyChanges(G,L.isPrimaryClient,j,ae);return Th(L,M.targetId,le.ba),le.snapshot}(n,g,w,S);const i=await dh(n.localStore,e,!0),a=new Dw(e,i.ds),c=a.ga(i.documents),l=Us.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Th(n,t,d.ba);const f=new Ow(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function Fw(n,e,t){const r=fe(n),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Io(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ka(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Uc(r.remoteStore,s.targetId),Wa(r,s.targetId)}).catch(_o)):(Wa(r,s.targetId),await Ka(r.localStore,s.targetId,!0))}async function Uw(n,e){const t=fe(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Uc(t.remoteStore,r.targetId))}async function bp(n,e){const t=fe(n);try{const r=await iw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ba.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?be(a.Fa):s.removedDocuments.size>0&&(be(a.Fa),a.Fa=!1))}),await Sp(t,r,e)}catch(r){await _o(r)}}function Eh(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((i,a)=>{const c=a.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=fe(a);l.onlineState=c;let d=!1;l.queries.forEach((f,g)=>{for(const w of g.J_)w.ea(c)&&(d=!0)}),d&&Hc(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bw(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Pe(ee.comparator);a=a.insert(i,Ye.newNoDocument(i,re.min()));const c=pe().add(i),l=new Ro(re.min(),new Map,new Pe(de),a,c);await bp(r,l),r.La=r.La.remove(i),r.Ba.delete(e),zc(r)}else await Ka(r.localStore,e,!1).then(()=>Wa(r,e,t)).catch(_o)}function Wa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Rp(n,r)})}function Rp(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Uc(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),zc(n))}function Th(n,e,t){for(const r of t)r instanceof Ip?(n.ka.addReference(r.key,e),jw(n,r)):r instanceof wp?(z("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Rp(n,r.key)):ie()}function jw(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(z("SyncEngine","New document in limbo: "+t),n.Na.add(r),zc(n))}function zc(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ee(Se.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Nw(t)),n.La=n.La.insert(t,r),yp(n.remoteStore,new yn(Nt(Wf(t.path)),r,"TargetPurposeLimboResolution",yo.oe))}}async function Sp(n,e,t){const r=fe(n),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Fc.zi(l.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(l,d){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,w=>k.forEach(w.Wi,S=>f.persistence.referenceDelegate.addReference(g,w.targetId,S)).next(()=>k.forEach(w.Gi,S=>f.persistence.referenceDelegate.removeReference(g,w.targetId,S)))))}catch(g){if(!Lr(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const S=f.us.get(w),O=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(O);f.us=f.us.insert(w,L)}}}(r.localStore,i))}async function $w(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await pp(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new X($.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sp(t,r.Ts)}}function qw(n,e){const t=fe(n),r=t.Ba.get(e);if(r&&r.Fa)return pe().add(r.key);{let s=pe();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const c=t.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function Cp(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bw.bind(null,e),e.Ma.R_=Cw.bind(null,e.eventManager),e.Ma.Wa=Pw.bind(null,e.eventManager),e}class Ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mp(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return sw(this.persistence,new nw,e.initialUser,this.serializer)}ja(e){return new fp(Lc.ei,this.serializer)}za(e){return new lw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ji.provider={build:()=>new Ji};class Hw extends Ji{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Qi);const r=this.persistence.referenceDelegate.garbageCollector;return new jI(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new fp(r=>Qi.ei(r,t),this.serializer)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$w.bind(null,this.syncEngine),await ww(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bw}()}createDatastore(e){const t=mp(e.databaseInfo.databaseId),r=function(i){return new fw(i)}(e.databaseInfo);return function(i,a,c,l){return new mw(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yw(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Eh(this.syncEngine,t,0),function(){return ph.p()?new ph:new uw}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,f){const g=new Vw(s,i,a,c,l,d);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=fe(s);z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Bs(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qa.provider={build:()=>new Qa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=bT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Tp(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pa(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ih(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gw(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>mh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>mh(e.remoteStore,s)),n._onlineComponents=e}async function Gw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await pa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pr("Error using user provided cache. Falling back to memory cache: "+t),await pa(n,new Ji)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await pa(n,new Hw(void 0));return n._offlineComponents}async function Ww(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Ih(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Ih(n,new Qa))),n._onlineComponents}async function Qw(n){const e=await Ww(n),t=e.eventManager;return t.onListen=xw.bind(null,e.syncEngine),t.onUnlisten=Fw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Mw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uw.bind(null,e.syncEngine),t}function Jw(n,e,t={}){const r=new Qn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new zw({next:w=>{f.eu(),a.enqueueAndForget(()=>Sw(i,g)),w.fromCache&&l.source==="server"?d.reject(new X($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new kw(c,f,{includeMetadataChanges:!0,ua:!0});return Rw(i,g)}(await Qw(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;function Yw(n,e,t,r){if(e===!0&&r===!0)throw new X($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ah(n){if(ee.isDocumentKey(n))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie()}function Ja(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xw(n);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _T;switch(r.type){case"firstParty":return new TT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wh.get(t);r&&(z("ComponentProvider","Removing Datastore"),wh.delete(t),r.terminate())}(this),Promise.resolve()}}function Zw(n,e,t,r={}){var s;const i=(n=Ja(n,Kc))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=We.MOCK_USER;else{c=Qd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new We(d)}n._authCredentials=new yT(new Bf(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Co(this.firestore,e,this._query)}}class Ur{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ur(this.firestore,e,this._key)}}class Rr extends Co{constructor(e,t,r){super(e,t,Wf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ur(this.firestore,null,new ee(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function e0(n,e,...t){if(n=On(n),n instanceof Kc){const r=Se.fromString(e,...t);return Ah(r),new Rr(n,null,r)}{if(!(n instanceof Ur||n instanceof Rr))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Ah(r),new Rr(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _p(this,"async_queue_retry"),this.fu=()=>{const r=fa();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=fa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=fa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Qn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Lr(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=qc.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class kp extends Kc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Rh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rh(e),this._firestoreClient=void 0,await e}}}function t0(n,e){const t=typeof n=="object"?n:_c(),r=typeof n=="string"?n:"(default)",s=po(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kd("firestore");i&&Zw(s,...i)}return s}function n0(n){if(n._terminated)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||r0(n),n._firestoreClient}function r0(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new LT(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Pp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Kw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi($e.fromBase64String(e))}catch(t){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const o0=new RegExp("[~\\*/\\[\\]]");function a0(n,e,t){if(e.search(o0)>=0)throw Sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Dp(...e.split("."))._internalPath}catch{throw Sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Sh(n,e,t,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new X($.INVALID_ARGUMENT,i+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ur(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c0 extends Op{data(){return super.data()}}function Np(n,e){return typeof e=="string"?a0(n,e):e instanceof Dp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u0{convertValue(e,t="none"){switch(Cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fs(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ce(a.doubleValue));return new i0(i)}convertGeoPoint(e){return new s0(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Eo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);be(dp(r));const s=new Cs(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(t)||tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h0 extends Op{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ci extends h0{data(e={}){return super.data(e)}}class d0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ci(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Ci(s._firestore,s._userDataWriter,c.doc.key,c.doc,new pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ci(s._firestore,s._userDataWriter,c.doc.key,c.doc,new pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:f0(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}class p0 extends u0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ur(this.firestore,null,t)}}function g0(n){n=Ja(n,Co);const e=Ja(n.firestore,kp),t=n0(e),r=new p0(e);return l0(n._query),Jw(t,n._query).then(s=>new d0(e,r,n,s))}(function(e,t=!0){(function(s){Mr=s})(nr),Xn(new An("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new kp(new vT(r.getProvider("auth-internal")),new wT(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),kt(qu,"4.7.5",e),kt(qu,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="firebasestorage.googleapis.com",m0="storageBucket",_0=2*60*1e3,y0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ut{constructor(e,t,r=0){super(ga(e),`Firebase Storage: ${t} (${ga(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ga(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ft||(Ft={}));function ga(n){return"storage/"+n}function v0(){const n="An unknown error occurred, please check the error payload for server response.";return new Bt(Ft.UNKNOWN,n)}function E0(){return new Bt(Ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T0(){return new Bt(Ft.CANCELED,"User canceled the upload/download.")}function I0(n){return new Bt(Ft.INVALID_URL,"Invalid URL '"+n+"'.")}function w0(n){return new Bt(Ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ch(n){return new Bt(Ft.INVALID_ARGUMENT,n)}function xp(){return new Bt(Ft.APP_DELETED,"The Firebase app was deleted.")}function A0(n){return new Bt(Ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Tt.makeFromUrl(e,t)}catch{return new Tt(e,"")}if(r.path==="")return r;throw w0(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),O={bucket:1,path:3},L=t===Vp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",K=new RegExp(`^https?://${L}/${s}/${M}`,"i"),G=[{regex:c,indices:l,postModify:i},{regex:S,indices:O,postModify:d},{regex:K,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<G.length;j++){const ae=G[j],le=ae.regex.exec(e);if(le){const I=le[ae.indices.bucket];let m=le[ae.indices.path];m||(m=""),r=new Tt(I,m),ae.postModify(r);break}}if(r==null)throw I0(e);return r}}class b0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let d=!1;function f(...M){d||(d=!0,e.apply(null,M))}function g(M){s=setTimeout(()=>{s=null,n(S,l())},M)}function w(){i&&clearTimeout(i)}function S(M,...K){if(d){w();return}if(M){w(),f.call(null,M,...K);return}if(l()||a){w(),f.call(null,M,...K);return}r<64&&(r*=2);let G;c===1?(c=2,G=0):G=(r+Math.random())*1e3,g(G)}let O=!1;function L(M){O||(O=!0,w(),!d&&(s!==null?(M||(c=2),clearTimeout(s),g(0)):M||(c=1)))}return g(0),i=setTimeout(()=>{a=!0,L(!0)},t),L}function S0(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){return n!==void 0}function Ph(n,e,t,r){if(r<e)throw Ch(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ch(`Invalid value for '${n}'. Expected ${t} or less.`)}function P0(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Xi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Xi||(Xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,r,s,i,a,c,l,d,f,g,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,O)=>{this.resolve_=S,this.reject_=O,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new gi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Xi.NO_ERROR,l=i.getStatus();if(!c||k0(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Xi.ABORT;r(!1,new gi(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new gi(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());C0(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=v0();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?xp():T0();a(l)}else{const l=E0();a(l)}};this.canceled_?t(!1,new gi(!1,null,!0)):this.backoffId_=R0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function O0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function N0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function x0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function M0(n,e,t,r,s,i,a=!0){const c=P0(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return V0(d,e),O0(d,t),N0(d,i),x0(d,r),new D0(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function F0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this._service=e,t instanceof Tt?this._location=t:this._location=Tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Zi(e,t)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F0(this._location.path)}get storage(){return this._service}get parent(){const e=L0(this._location.path);if(e===null)return null;const t=new Tt(this._location.bucket,e);return new Zi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw A0(e)}}function kh(n,e){const t=e==null?void 0:e[m0];return t==null?null:Tt.makeFromBucketSpec(t,n)}function U0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Qd(s,n.app.options.projectId))}class B0{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Vp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_0,this._maxUploadRetryTime=y0,this._requests=new Set,s!=null?this._bucket=Tt.makeFromBucketSpec(s,this._host):this._bucket=kh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=kh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zi(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new b0(xp());{const a=M0(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Dh="@firebase/storage",Oh="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="storage";function j0(n=_c(),e){n=On(n);const r=po(n,Mp).getImmediate({identifier:e}),s=Kd("storage");return s&&$0(r,...s),r}function $0(n,e,t,r={}){U0(n,e,t,r)}function q0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new B0(t,r,s,e,nr)}function H0(){Xn(new An(Mp,q0,"PUBLIC").setMultipleInstances(!0)),kt(Dh,Oh,""),kt(Dh,Oh,"esm2017")}H0();const z0={apiKey:"AIzaSyDT1suUr0ODH_YVU6k3Uy7YpIC6GHhTBWY",authDomain:"chocoluxe-60d9f.firebaseapp.com",projectId:"chocoluxe-60d9f",storageBucket:"chocoluxe-60d9f.firebasestorage.app",messagingSenderId:"337792477499",appId:"1:337792477499:web:4955826a9b38bb9ac12f1e",measurementId:"G-BGKP6RQ7L3"},Gc=Xd(z0);gT(Gc);const K0=t0(Gc);j0(Gc);const G0=async()=>{try{return(await g0(e0(K0,"chocoluxe_products"))).docs.map(t=>t.data())}catch(n){console.error("Error al obtener productos:",n.message)}},W0={class:"container mx-auto p-4"},Q0={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},J0={__name:"ProductList",setup(n){const e=Pi([]),t=Pi(null),r=async()=>{try{const a=await G0();e.value=a}catch(a){console.error("Error fetching products:",a)}};fd(()=>{r()});const s=Ud(()=>t.value?e.value.filter(a=>a.category===t.value):e.value),i=a=>{t.value=a};return(a,c)=>(En(),Kn("div",W0,[Pt(B_,{onFilter:i}),dt("div",Q0,[(En(!0),Kn(Et,null,gd(s.value,l=>(En(),Hm(M_,{key:l.id,product:l,onClick:d=>a.redirectToWhatsApp(l)},null,8,["product","onClick"]))),128))])]))}},Y0=ho(J0,[["__scopeId","data-v-0e534101"]]),X0={id:"app"},Z0={__name:"App",setup(n){return(e,t)=>(En(),Kn("main",null,[dt("div",X0,[Pt(Y0)])]))}},eA=ho(Z0,[["__scopeId","data-v-18b8d26e"]]);R_(eA).mount("#app");
