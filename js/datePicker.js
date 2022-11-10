
// moment.min.js 2.29.4
// https://momentjs.com/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var H;function f(){return H.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function F(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(c(e,t))return;return 1}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function V(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function G(e,t){for(var n=[],s=e.length,i=0;i<s;++i)n.push(t(e[i],i));return n}function E(e,t){for(var n in t)c(t,n)&&(e[n]=t[n]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function l(e,t,n,s){return Pt(e,t,n,s,!0).utc()}function m(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function A(e){if(null==e._isValid){var t=m(e),n=j.call(t.parsedDateParts,function(e){return null!=e}),n=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function I(e){var t=l(NaN);return null!=e?E(m(t),e):m(t).userInvalidated=!0,t}var j=Array.prototype.some||function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1},Z=f.momentProperties=[],z=!1;function $(e,t){var n,s,i,r=Z.length;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=m(t)),o(t._locale)||(e._locale=t._locale),0<r)for(n=0;n<r;n++)o(i=t[s=Z[n]])||(e[s]=i);return e}function q(e){$(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===z&&(z=!0,f.updateOffset(this),z=!1)}function h(e){return e instanceof q||null!=e&&null!=e._isAMomentObject}function B(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,a){var o=!0;return E(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,r),o){for(var e,t,n=[],s=arguments.length,i=0;i<s;i++){if(e="","object"==typeof arguments[i]){for(t in e+="\n["+i+"] ",arguments[0])c(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[i];n.push(e)}B(r+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),o=!1}return a.apply(this,arguments)},a)}var J={};function Q(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),J[e]||(B(t),J[e]=!0)}function d(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function X(e,t){var n,s=E({},e);for(n in t)c(t,n)&&(F(e[n])&&F(t[n])?(s[n]={},E(s[n],e[n]),E(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)c(e,n)&&!c(t,n)&&F(e[n])&&(s[n]=E({},s[n]));return s}function K(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null;var ee=Object.keys||function(e){var t,n=[];for(t in e)c(e,t)&&n.push(t);return n};function r(e,t,n){var s=""+Math.abs(e);return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,t-s.length)).toString().substr(1)+s}var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ne=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,se={},ie={};function s(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(ie[e]=i),t&&(ie[t[0]]=function(){return r(i.apply(this,arguments),t[1],t[2])}),n&&(ie[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function re(e,t){return e.isValid()?(t=ae(t,e.localeData()),se[t]=se[t]||function(s){for(var e,i=s.match(te),t=0,r=i.length;t<r;t++)ie[i[t]]?i[t]=ie[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=d(i[n])?i[n].call(e,s):i[n];return t}}(t),se[t](e)):e.localeData().invalidDate()}function ae(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(ne.lastIndex=0;0<=n&&ne.test(e);)e=e.replace(ne,s),ne.lastIndex=0,--n;return e}var oe={};function t(e,t){var n=e.toLowerCase();oe[n]=oe[n+"s"]=oe[t]=e}function _(e){return"string"==typeof e?oe[e]||oe[e.toLowerCase()]:void 0}function ue(e){var t,n,s={};for(n in e)c(e,n)&&(t=_(n))&&(s[t]=e[n]);return s}var le={};function n(e,t){le[e]=t}function he(e){return e%4==0&&e%100!=0||e%400==0}function y(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function g(e){var e=+e,t=0;return t=0!=e&&isFinite(e)?y(e):t}function de(t,n){return function(e){return null!=e?(fe(this,t,e),f.updateOffset(this,n),this):ce(this,t)}}function ce(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&he(e.year())&&1===e.month()&&29===e.date()?(n=g(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),We(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var i=/\d/,w=/\d\d/,me=/\d{3}/,_e=/\d{4}/,ye=/[+-]?\d{6}/,p=/\d\d?/,ge=/\d\d\d\d?/,we=/\d\d\d\d\d\d?/,pe=/\d{1,3}/,ke=/\d{1,4}/,ve=/[+-]?\d{1,6}/,Me=/\d+/,De=/[+-]?\d+/,Se=/Z|[+-]\d\d:?\d\d/gi,Ye=/Z|[+-]\d\d(?::?\d\d)?/gi,k=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function v(e,n,s){be[e]=d(n)?n:function(e,t){return e&&s?s:n}}function Oe(e,t){return c(be,e)?be[e](t._strict,t._locale):new RegExp(M(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function M(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var be={},xe={};function D(e,n){var t,s,i=n;for("string"==typeof e&&(e=[e]),u(n)&&(i=function(e,t){t[n]=g(e)}),s=e.length,t=0;t<s;t++)xe[e[t]]=i}function Te(e,i){D(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var S,Y=0,O=1,b=2,x=3,T=4,N=5,Ne=6,Pe=7,Re=8;function We(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=(t%(n=12)+n)%n;return e+=(t-n)/12,1==n?he(e)?29:28:31-n%7%2}S=Array.prototype.indexOf||function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},s("M",["MM",2],"Mo",function(){return this.month()+1}),s("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),s("MMMM",0,0,function(e){return this.localeData().months(this,e)}),t("month","M"),n("month",8),v("M",p),v("MM",p,w),v("MMM",function(e,t){return t.monthsShortRegex(e)}),v("MMMM",function(e,t){return t.monthsRegex(e)}),D(["M","MM"],function(e,t){t[O]=g(e)-1}),D(["MMM","MMMM"],function(e,t,n,s){s=n._locale.monthsParse(e,s,n._strict);null!=s?t[O]=s:m(n).invalidMonth=e});var Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ue="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),He=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Fe=k,Le=k;function Ve(e,t){var n;if(e.isValid()){if("string"==typeof t)if(/^\d+$/.test(t))t=g(t);else if(!u(t=e.localeData().monthsParse(t)))return;n=Math.min(e.date(),We(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)}}function Ge(e){return null!=e?(Ve(this,e),f.updateOffset(this,!0),this):ce(this,"Month")}function Ee(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=l([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=M(n[r]),s[r]=M(s[r]);for(r=0;r<24;r++)i[r]=M(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Ae(e){return he(e)?366:365}s("Y",0,0,function(){var e=this.year();return e<=9999?r(e,4):"+"+e}),s(0,["YY",2],0,function(){return this.year()%100}),s(0,["YYYY",4],0,"year"),s(0,["YYYYY",5],0,"year"),s(0,["YYYYYY",6,!0],0,"year"),t("year","y"),n("year",1),v("Y",De),v("YY",p,w),v("YYYY",ke,_e),v("YYYYY",ve,ye),v("YYYYYY",ve,ye),D(["YYYYY","YYYYYY"],Y),D("YYYY",function(e,t){t[Y]=2===e.length?f.parseTwoDigitYear(e):g(e)}),D("YY",function(e,t){t[Y]=f.parseTwoDigitYear(e)}),D("Y",function(e,t){t[Y]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return g(e)+(68<g(e)?1900:2e3)};var Ie=de("FullYear",!0);function je(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}function Ze(e){var t;return e<100&&0<=e?((t=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,t)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ze(e,t,n){n=7+t-n;return n-(7+Ze(e,0,n).getUTCDay()-t)%7-1}function $e(e,t,n,s,i){var r,t=1+7*(t-1)+(7+n-s)%7+ze(e,s,i),n=t<=0?Ae(r=e-1)+t:t>Ae(e)?(r=e+1,t-Ae(e)):(r=e,t);return{year:r,dayOfYear:n}}function qe(e,t,n){var s,i,r=ze(e.year(),t,n),r=Math.floor((e.dayOfYear()-r-1)/7)+1;return r<1?s=r+P(i=e.year()-1,t,n):r>P(e.year(),t,n)?(s=r-P(e.year(),t,n),i=e.year()+1):(i=e.year(),s=r),{week:s,year:i}}function P(e,t,n){var s=ze(e,t,n),t=ze(e+1,t,n);return(Ae(e)-s+t)/7}s("w",["ww",2],"wo","week"),s("W",["WW",2],"Wo","isoWeek"),t("week","w"),t("isoWeek","W"),n("week",5),n("isoWeek",5),v("w",p),v("ww",p,w),v("W",p),v("WW",p,w),Te(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=g(e)});function Be(e,t){return e.slice(t,7).concat(e.slice(0,t))}s("d",0,"do","day"),s("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),s("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),s("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),s("e",0,0,"weekday"),s("E",0,0,"isoWeekday"),t("day","d"),t("weekday","e"),t("isoWeekday","E"),n("day",11),n("weekday",11),n("isoWeekday",11),v("d",p),v("e",p),v("E",p),v("dd",function(e,t){return t.weekdaysMinRegex(e)}),v("ddd",function(e,t){return t.weekdaysShortRegex(e)}),v("dddd",function(e,t){return t.weekdaysRegex(e)}),Te(["dd","ddd","dddd"],function(e,t,n,s){s=n._locale.weekdaysParse(e,s,n._strict);null!=s?t.d=s:m(n).invalidWeekday=e}),Te(["d","e","E"],function(e,t,n,s){t[s]=g(e)});var Je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Qe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ke=k,et=k,tt=k;function nt(){function e(e,t){return t.length-e.length}for(var t,n,s,i=[],r=[],a=[],o=[],u=0;u<7;u++)s=l([2e3,1]).day(u),t=M(this.weekdaysMin(s,"")),n=M(this.weekdaysShort(s,"")),s=M(this.weekdays(s,"")),i.push(t),r.push(n),a.push(s),o.push(t),o.push(n),o.push(s);i.sort(e),r.sort(e),a.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i.join("|")+")","i")}function st(){return this.hours()%12||12}function it(e,t){s(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function rt(e,t){return t._meridiemParse}s("H",["HH",2],0,"hour"),s("h",["hh",2],0,st),s("k",["kk",2],0,function(){return this.hours()||24}),s("hmm",0,0,function(){return""+st.apply(this)+r(this.minutes(),2)}),s("hmmss",0,0,function(){return""+st.apply(this)+r(this.minutes(),2)+r(this.seconds(),2)}),s("Hmm",0,0,function(){return""+this.hours()+r(this.minutes(),2)}),s("Hmmss",0,0,function(){return""+this.hours()+r(this.minutes(),2)+r(this.seconds(),2)}),it("a",!0),it("A",!1),t("hour","h"),n("hour",13),v("a",rt),v("A",rt),v("H",p),v("h",p),v("k",p),v("HH",p,w),v("hh",p,w),v("kk",p,w),v("hmm",ge),v("hmmss",we),v("Hmm",ge),v("Hmmss",we),D(["H","HH"],x),D(["k","kk"],function(e,t,n){e=g(e);t[x]=24===e?0:e}),D(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),D(["h","hh"],function(e,t,n){t[x]=g(e),m(n).bigHour=!0}),D("hmm",function(e,t,n){var s=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s)),m(n).bigHour=!0}),D("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s,2)),t[N]=g(e.substr(i)),m(n).bigHour=!0}),D("Hmm",function(e,t,n){var s=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s))}),D("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s,2)),t[N]=g(e.substr(i))});k=de("Hours",!0);var at,ot={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:Ue,week:{dow:0,doy:6},weekdays:Je,weekdaysMin:Xe,weekdaysShort:Qe,meridiemParse:/[ap]\.?m?\.?/i},R={},ut={};function lt(e){return e&&e.toLowerCase().replace("_","-")}function ht(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=lt(e[r]).split("-")).length,n=(n=lt(e[r+1]))?n.split("-"):null;0<t;){if(s=dt(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return at}function dt(t){var e;if(void 0===R[t]&&"undefined"!=typeof module&&module&&module.exports&&null!=t.match("^[^/\\\\]*$"))try{e=at._abbr,require("./locale/"+t),ct(e)}catch(e){R[t]=null}return R[t]}function ct(e,t){return e&&((t=o(t)?mt(e):ft(e,t))?at=t:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),at._abbr}function ft(e,t){if(null===t)return delete R[e],null;var n,s=ot;if(t.abbr=e,null!=R[e])Q("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=R[e]._config;else if(null!=t.parentLocale)if(null!=R[t.parentLocale])s=R[t.parentLocale]._config;else{if(null==(n=dt(t.parentLocale)))return ut[t.parentLocale]||(ut[t.parentLocale]=[]),ut[t.parentLocale].push({name:e,config:t}),null;s=n._config}return R[e]=new K(X(s,t)),ut[e]&&ut[e].forEach(function(e){ft(e.name,e.config)}),ct(e),R[e]}function mt(e){var t;if(!(e=e&&e._locale&&e._locale._abbr?e._locale._abbr:e))return at;if(!a(e)){if(t=dt(e))return t;e=[e]}return ht(e)}function _t(e){var t=e._a;return t&&-2===m(e).overflow&&(t=t[O]<0||11<t[O]?O:t[b]<1||t[b]>We(t[Y],t[O])?b:t[x]<0||24<t[x]||24===t[x]&&(0!==t[T]||0!==t[N]||0!==t[Ne])?x:t[T]<0||59<t[T]?T:t[N]<0||59<t[N]?N:t[Ne]<0||999<t[Ne]?Ne:-1,m(e)._overflowDayOfYear&&(t<Y||b<t)&&(t=b),m(e)._overflowWeeks&&-1===t&&(t=Pe),m(e)._overflowWeekday&&-1===t&&(t=Re),m(e).overflow=t),e}var yt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wt=/Z|[+-]\d\d(?::?\d\d)?/,pt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],kt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],vt=/^\/?Date\((-?\d+)/i,Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Dt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function St(e){var t,n,s,i,r,a,o=e._i,u=yt.exec(o)||gt.exec(o),o=pt.length,l=kt.length;if(u){for(m(e).iso=!0,t=0,n=o;t<n;t++)if(pt[t][1].exec(u[1])){i=pt[t][0],s=!1!==pt[t][2];break}if(null==i)e._isValid=!1;else{if(u[3]){for(t=0,n=l;t<n;t++)if(kt[t][1].exec(u[3])){r=(u[2]||" ")+kt[t][0];break}if(null==r)return void(e._isValid=!1)}if(s||null==r){if(u[4]){if(!wt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Tt(e)}else e._isValid=!1}}else e._isValid=!1}function Yt(e,t,n,s,i,r){e=[function(e){e=parseInt(e,10);{if(e<=49)return 2e3+e;if(e<=999)return 1900+e}return e}(e),Ue.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&e.push(parseInt(r,10)),e}function Ot(e){var t,n,s,i,r=Mt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));r?(t=Yt(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&Qe.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()?(m(i).weekdayMismatch=!0,i._isValid=!1):(e._a=t,e._tzm=(n=r[8],s=r[9],i=r[10],n?Dt[n]:s?0:60*(((n=parseInt(i,10))-(s=n%100))/100)+s),e._d=Ze.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0)):e._isValid=!1}function bt(e,t,n){return null!=e?e:null!=t?t:n}function xt(e){var t,n,s,i,r,a,o,u,l,h,d,c=[];if(!e._d){for(s=e,i=new Date(f.now()),n=s._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()],e._w&&null==e._a[b]&&null==e._a[O]&&(null!=(i=(s=e)._w).GG||null!=i.W||null!=i.E?(u=1,l=4,r=bt(i.GG,s._a[Y],qe(W(),1,4).year),a=bt(i.W,1),((o=bt(i.E,1))<1||7<o)&&(h=!0)):(u=s._locale._week.dow,l=s._locale._week.doy,d=qe(W(),u,l),r=bt(i.gg,s._a[Y],d.year),a=bt(i.w,d.week),null!=i.d?((o=i.d)<0||6<o)&&(h=!0):null!=i.e?(o=i.e+u,(i.e<0||6<i.e)&&(h=!0)):o=u),a<1||a>P(r,u,l)?m(s)._overflowWeeks=!0:null!=h?m(s)._overflowWeekday=!0:(d=$e(r,a,o,u,l),s._a[Y]=d.year,s._dayOfYear=d.dayOfYear)),null!=e._dayOfYear&&(i=bt(e._a[Y],n[Y]),(e._dayOfYear>Ae(i)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),h=Ze(i,0,e._dayOfYear),e._a[O]=h.getUTCMonth(),e._a[b]=h.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=c[t]=n[t];for(;t<7;t++)e._a[t]=c[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[x]&&0===e._a[T]&&0===e._a[N]&&0===e._a[Ne]&&(e._nextDay=!0,e._a[x]=0),e._d=(e._useUTC?Ze:je).apply(null,c),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[x]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(m(e).weekdayMismatch=!0)}}function Tt(e){if(e._f===f.ISO_8601)St(e);else if(e._f===f.RFC_2822)Ot(e);else{e._a=[],m(e).empty=!0;for(var t,n,s,i,r,a=""+e._i,o=a.length,u=0,l=ae(e._f,e._locale).match(te)||[],h=l.length,d=0;d<h;d++)n=l[d],(t=(a.match(Oe(n,e))||[])[0])&&(0<(s=a.substr(0,a.indexOf(t))).length&&m(e).unusedInput.push(s),a=a.slice(a.indexOf(t)+t.length),u+=t.length),ie[n]?(t?m(e).empty=!1:m(e).unusedTokens.push(n),s=n,r=e,null!=(i=t)&&c(xe,s)&&xe[s](i,r._a,r,s)):e._strict&&!t&&m(e).unusedTokens.push(n);m(e).charsLeftOver=o-u,0<a.length&&m(e).unusedInput.push(a),e._a[x]<=12&&!0===m(e).bigHour&&0<e._a[x]&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,e._a[x]=function(e,t,n){if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((e=e.isPM(n))&&t<12&&(t+=12),t=e||12!==t?t:0):t}(e._locale,e._a[x],e._meridiem),null!==(o=m(e).era)&&(e._a[Y]=e._locale.erasConvertYear(o,e._a[Y])),xt(e),_t(e)}}function Nt(e){var t,n,s,i=e._i,r=e._f;if(e._locale=e._locale||mt(e._l),null===i||void 0===r&&""===i)return I({nullInput:!0});if("string"==typeof i&&(e._i=i=e._locale.preparse(i)),h(i))return new q(_t(i));if(V(i))e._d=i;else if(a(r))!function(e){var t,n,s,i,r,a,o=!1,u=e._f.length;if(0===u)return m(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<u;i++)r=0,a=!1,t=$({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Tt(t),A(t)&&(a=!0),r=(r+=m(t).charsLeftOver)+10*m(t).unusedTokens.length,m(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));E(e,n||t)}(e);else if(r)Tt(e);else if(o(r=(i=e)._i))i._d=new Date(f.now());else V(r)?i._d=new Date(r.valueOf()):"string"==typeof r?(n=i,null!==(t=vt.exec(n._i))?n._d=new Date(+t[1]):(St(n),!1===n._isValid&&(delete n._isValid,Ot(n),!1===n._isValid&&(delete n._isValid,n._strict?n._isValid=!1:f.createFromInputFallback(n))))):a(r)?(i._a=G(r.slice(0),function(e){return parseInt(e,10)}),xt(i)):F(r)?(t=i)._d||(s=void 0===(n=ue(t._i)).day?n.date:n.day,t._a=G([n.year,n.month,s,n.hour,n.minute,n.second,n.millisecond],function(e){return e&&parseInt(e,10)}),xt(t)):u(r)?i._d=new Date(r):f.createFromInputFallback(i);return A(e)||(e._d=null),e}function Pt(e,t,n,s,i){var r={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(F(e)&&L(e)||a(e)&&0===e.length)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=i,r._l=n,r._i=e,r._f=t,r._strict=s,(i=new q(_t(Nt(i=r))))._nextDay&&(i.add(1,"d"),i._nextDay=void 0),i}function W(e,t,n,s){return Pt(e,t,n,s,!1)}f.createFromInputFallback=e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};ge=e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:I()}),we=e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:I()});function Rt(e,t){var n,s;if(!(t=1===t.length&&a(t[0])?t[0]:t).length)return W();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var e=ue(e),t=e.year||0,n=e.quarter||0,s=e.month||0,i=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,o=e.minute||0,u=e.second||0,l=e.millisecond||0;this._isValid=function(e){var t,n,s=!1,i=Wt.length;for(t in e)if(c(e,t)&&(-1===S.call(Wt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<i;++n)if(e[Wt[n]]){if(s)return!1;parseFloat(e[Wt[n]])!==g(e[Wt[n]])&&(s=!0)}return!0}(e),this._milliseconds=+l+1e3*u+6e4*o+1e3*a*60*60,this._days=+r+7*i,this._months=+s+3*n+12*t,this._data={},this._locale=mt(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){s(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+r(~~(e/60),2)+n+r(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),v("Z",Ye),v("ZZ",Ye),D(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(Ye,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var t=(t||"").match(e);return null===t?null:0===(t=60*(e=((t[t.length-1]||[])+"").match(Lt)||["-",0,0])[1]+g(e[2]))?0:"+"===e[0]?t:-t}function Gt(e,t){var n;return t._isUTC?(t=t.clone(),n=(h(e)||V(e)?e:W(e)).valueOf()-t.valueOf(),t._d.setTime(t._d.valueOf()+n),f.updateOffset(t,!1),t):W(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var It=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,jt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function C(e,t){var n,s=e,i=null;return Ut(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:u(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(i=It.exec(e))?(n="-"===i[1]?-1:1,s={y:0,d:g(i[b])*n,h:g(i[x])*n,m:g(i[T])*n,s:g(i[N])*n,ms:g(Ht(1e3*i[Ne]))*n}):(i=jt.exec(e))?(n="-"===i[1]?-1:1,s={y:Zt(i[2],n),M:Zt(i[3],n),w:Zt(i[4],n),d:Zt(i[5],n),h:Zt(i[6],n),m:Zt(i[7],n),s:Zt(i[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(t=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(W(s.from),W(s.to)),(s={}).ms=t.milliseconds,s.M=t.months),i=new Ct(s),Ut(e)&&c(e,"_locale")&&(i._locale=e._locale),Ut(e)&&c(e,"_isValid")&&(i._isValid=e._isValid),i}function Zt(e,t){e=e&&parseFloat(e.replace(",","."));return(isNaN(e)?0:e)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Q(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,C(e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),t=Ht(t._months);e.isValid()&&(s=null==s||s,t&&Ve(e,ce(e,"Month")+t*n),r&&fe(e,"Date",ce(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||t))}C.fn=Ct.prototype,C.invalid=function(){return C(NaN)};Ce=$t(1,"add"),Je=$t(-1,"subtract");function Bt(e){return"string"==typeof e||e instanceof String}function Jt(e){return h(e)||V(e)||Bt(e)||u(e)||function(t){var e=a(t),n=!1;e&&(n=0===t.filter(function(e){return!u(e)&&Bt(t)}).length);return e&&n}(e)||function(e){var t,n,s=F(e)&&!L(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a=r.length;for(t=0;t<a;t+=1)n=r[t],i=i||c(e,n);return s&&i}(e)||null==e}function Qt(e,t){if(e.date()<t.date())return-Qt(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),t=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+t)||0}function Xt(e){return void 0===e?this._locale._abbr:(null!=(e=mt(e))&&(this._locale=e),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";Xe=e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}var en=126227808e5;function tn(e,t){return(e%t+t)%t}function nn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-en:new Date(e,t,n).valueOf()}function sn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-en:Date.UTC(e,t,n)}function rn(e,t){return t.erasAbbrRegex(e)}function an(){for(var e=[],t=[],n=[],s=[],i=this.eras(),r=0,a=i.length;r<a;++r)t.push(M(i[r].name)),e.push(M(i[r].abbr)),n.push(M(i[r].narrow)),s.push(M(i[r].name)),s.push(M(i[r].abbr)),s.push(M(i[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}function on(e,t){s(0,[e,e.length],0,t)}function un(e,t,n,s,i){var r;return null==e?qe(this,s,i).year:(r=P(e,s,i),function(e,t,n,s,i){e=$e(e,t,n,s,i),t=Ze(e.year,0,e.dayOfYear);return this.year(t.getUTCFullYear()),this.month(t.getUTCMonth()),this.date(t.getUTCDate()),this}.call(this,e,t=r<t?r:t,n,s,i))}s("N",0,0,"eraAbbr"),s("NN",0,0,"eraAbbr"),s("NNN",0,0,"eraAbbr"),s("NNNN",0,0,"eraName"),s("NNNNN",0,0,"eraNarrow"),s("y",["y",1],"yo","eraYear"),s("y",["yy",2],0,"eraYear"),s("y",["yyy",3],0,"eraYear"),s("y",["yyyy",4],0,"eraYear"),v("N",rn),v("NN",rn),v("NNN",rn),v("NNNN",function(e,t){return t.erasNameRegex(e)}),v("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),D(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){s=n._locale.erasParse(e,s,n._strict);s?m(n).era=s:m(n).invalidEra=e}),v("y",Me),v("yy",Me),v("yyy",Me),v("yyyy",Me),v("yo",function(e,t){return t._eraYearOrdinalRegex||Me}),D(["y","yy","yyy","yyyy"],Y),D(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Y]=n._locale.eraYearOrdinalParse(e,i):t[Y]=parseInt(e,10)}),s(0,["gg",2],0,function(){return this.weekYear()%100}),s(0,["GG",2],0,function(){return this.isoWeekYear()%100}),on("gggg","weekYear"),on("ggggg","weekYear"),on("GGGG","isoWeekYear"),on("GGGGG","isoWeekYear"),t("weekYear","gg"),t("isoWeekYear","GG"),n("weekYear",1),n("isoWeekYear",1),v("G",De),v("g",De),v("GG",p,w),v("gg",p,w),v("GGGG",ke,_e),v("gggg",ke,_e),v("GGGGG",ve,ye),v("ggggg",ve,ye),Te(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=g(e)}),Te(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),s("Q",0,"Qo","quarter"),t("quarter","Q"),n("quarter",7),v("Q",i),D("Q",function(e,t){t[O]=3*(g(e)-1)}),s("D",["DD",2],"Do","date"),t("date","D"),n("date",9),v("D",p),v("DD",p,w),v("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),D(["D","DD"],b),D("Do",function(e,t){t[b]=g(e.match(p)[0])});ke=de("Date",!0);s("DDD",["DDDD",3],"DDDo","dayOfYear"),t("dayOfYear","DDD"),n("dayOfYear",4),v("DDD",pe),v("DDDD",me),D(["DDD","DDDD"],function(e,t,n){n._dayOfYear=g(e)}),s("m",["mm",2],0,"minute"),t("minute","m"),n("minute",14),v("m",p),v("mm",p,w),D(["m","mm"],T);var ln,_e=de("Minutes",!1),ve=(s("s",["ss",2],0,"second"),t("second","s"),n("second",15),v("s",p),v("ss",p,w),D(["s","ss"],N),de("Seconds",!1));for(s("S",0,0,function(){return~~(this.millisecond()/100)}),s(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),s(0,["SSS",3],0,"millisecond"),s(0,["SSSS",4],0,function(){return 10*this.millisecond()}),s(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),s(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),s(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),s(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),s(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),t("millisecond","ms"),n("millisecond",16),v("S",pe,i),v("SS",pe,w),v("SSS",pe,me),ln="SSSS";ln.length<=9;ln+="S")v(ln,Me);function hn(e,t){t[Ne]=g(1e3*("0."+e))}for(ln="S";ln.length<=9;ln+="S")D(ln,hn);ye=de("Milliseconds",!1),s("z",0,0,"zoneAbbr"),s("zz",0,0,"zoneName");i=q.prototype;function dn(e){return e}i.add=Ce,i.calendar=function(e,t){1===arguments.length&&(arguments[0]?Jt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=F(e)&&!L(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||c(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var e=e||W(),n=Gt(e,this).startOf("day"),n=f.calendarFormat(this,n)||"sameElse",t=t&&(d(t[n])?t[n].call(this,e):t[n]);return this.format(t||this.localeData().calendar(n,this,W(e)))},i.clone=function(){return new q(this)},i.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=_(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:y(r)},i.endOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-tn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-tn(t,1e3)-1;break}return this._d.setTime(t),f.updateOffset(this,!0),this},i.format=function(e){return e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat),e=re(this,e),this.localeData().postformat(e)},i.from=function(e,t){return this.isValid()&&(h(e)&&e.isValid()||W(e).isValid())?C({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},i.fromNow=function(e){return this.from(W(),e)},i.to=function(e,t){return this.isValid()&&(h(e)&&e.isValid()||W(e).isValid())?C({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},i.toNow=function(e){return this.to(W(),e)},i.get=function(e){return d(this[e=_(e)])?this[e]():this},i.invalidAt=function(){return m(this).overflow},i.isAfter=function(e,t){return e=h(e)?e:W(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(t).valueOf())},i.isBefore=function(e,t){return e=h(e)?e:W(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()<e.valueOf():this.clone().endOf(t).valueOf()<e.valueOf())},i.isBetween=function(e,t,n,s){return e=h(e)?e:W(e),t=h(t)?t:W(t),!!(this.isValid()&&e.isValid()&&t.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n)))},i.isSame=function(e,t){var e=h(e)?e:W(e);return!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()===e.valueOf():(e=e.valueOf(),this.clone().startOf(t).valueOf()<=e&&e<=this.clone().endOf(t).valueOf()))},i.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},i.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},i.isValid=function(){return A(this)},i.lang=Xe,i.locale=Xt,i.localeData=Kt,i.max=we,i.min=ge,i.parsingFlags=function(){return E({},m(this))},i.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)c(e,t)&&n.push({unit:t,priority:le[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=ue(e)),s=n.length,i=0;i<s;i++)this[n[i].unit](e[n[i].unit]);else if(d(this[e=_(e)]))return this[e](t);return this},i.startOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=tn(t,6e4);break;case"second":t=this._d.valueOf(),t-=tn(t,1e3);break}return this._d.setTime(t),f.updateOffset(this,!0),this},i.subtract=Je,i.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},i.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},i.toDate=function(){return new Date(this.valueOf())},i.toISOString=function(e){if(!this.isValid())return null;var t=(e=!0!==e)?this.clone().utc():this;return t.year()<0||9999<t.year()?re(t,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):d(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",re(t,"Z")):re(t,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},i.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t="moment",n="";return this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",n="Z"),t="["+t+'("]',e=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",this.format(t+e+"-MM-DD[T]HH:mm:ss.SSS"+(n+'[")]'))},"undefined"!=typeof Symbol&&null!=Symbol.for&&(i[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},i.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},i.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},i.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},i.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},i.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},i.year=Ie,i.isLeapYear=function(){return he(this.year())},i.weekYear=function(e){return un.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},i.isoWeekYear=function(e){return un.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},i.quarter=i.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},i.month=Ge,i.daysInMonth=function(){return We(this.year(),this.month())},i.week=i.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},i.isoWeek=i.isoWeeks=function(e){var t=qe(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},i.weeksInYear=function(){var e=this.localeData()._week;return P(this.year(),e.dow,e.doy)},i.weeksInWeekYear=function(){var e=this.localeData()._week;return P(this.weekYear(),e.dow,e.doy)},i.isoWeeksInYear=function(){return P(this.year(),1,4)},i.isoWeeksInISOWeekYear=function(){return P(this.isoWeekYear(),1,4)},i.date=ke,i.day=i.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},i.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},i.isoWeekday=function(e){return this.isValid()?null!=e?(t=e,n=this.localeData(),n="string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t,this.day(this.day()%7?n:n-7)):this.day()||7:null!=e?this:NaN;var t,n},i.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},i.hour=i.hours=k,i.minute=i.minutes=_e,i.second=i.seconds=ve,i.millisecond=i.milliseconds=ye,i.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(Ye,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,C(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},i.utc=function(e){return this.utcOffset(0,e)},i.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},i.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(Se,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},i.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60==0)},i.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},i.isLocal=function(){return!!this.isValid()&&!this._isUTC},i.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},i.isUtc=At,i.isUTC=At,i.zoneAbbr=function(){return this._isUTC?"UTC":""},i.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},i.dates=e("dates accessor is deprecated. Use date instead.",ke),i.months=e("months accessor is deprecated. Use month instead",Ge),i.years=e("years accessor is deprecated. Use year instead",Ie),i.zone=e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?(this.utcOffset(e="string"!=typeof e?-e:e,t),this):-this.utcOffset()}),i.isDSTShifted=e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e,t={};return $(t,this),(t=Nt(t))._a?(e=(t._isUTC?l:W)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&g(e[a])!==g(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});w=K.prototype;function cn(e,t,n,s){var i=mt(),s=l().set(s,t);return i[n](s,e)}function fn(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=cn(e,i,n,"month");return s}function mn(e,t,n,s){t=("boolean"==typeof e?u(t)&&(n=t,t=void 0):(t=e,e=!1,u(n=t)&&(n=t,t=void 0)),t||"");var i,r=mt(),a=e?r._week.dow:0,o=[];if(null!=n)return cn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}w.calendar=function(e,t,n){return d(e=this._calendar[e]||this._calendar.sameElse)?e.call(t,n):e},w.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(te).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},w.invalidDate=function(){return this._invalidDate},w.ordinal=function(e){return this._ordinal.replace("%d",e)},w.preparse=dn,w.postformat=dn,w.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return d(i)?i(e,t,n,s):i.replace(/%d/i,e)},w.pastFuture=function(e,t){return d(e=this._relativeTime[0<e?"future":"past"])?e(t):e.replace(/%s/i,t)},w.set=function(e){var t,n;for(n in e)c(e,n)&&(d(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},w.eras=function(e,t){for(var n,s=this._eras||mt("en")._eras,i=0,r=s.length;i<r;++i){switch(typeof s[i].since){case"string":n=f(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s},w.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s];break}else if(0<=[r,a,o].indexOf(e))return u[s]},w.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},w.erasAbbrRegex=function(e){return c(this,"_erasAbbrRegex")||an.call(this),e?this._erasAbbrRegex:this._erasRegex},w.erasNameRegex=function(e){return c(this,"_erasNameRegex")||an.call(this),e?this._erasNameRegex:this._erasRegex},w.erasNarrowRegex=function(e){return c(this,"_erasNarrowRegex")||an.call(this),e?this._erasNarrowRegex:this._erasRegex},w.months=function(e,t){return e?(a(this._months)?this._months:this._months[(this._months.isFormat||He).test(t)?"format":"standalone"])[e.month()]:a(this._months)?this._months:this._months.standalone},w.monthsShort=function(e,t){return e?(a(this._monthsShort)?this._monthsShort:this._monthsShort[He.test(t)?"format":"standalone"])[e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},w.monthsParse=function(e,t,n){var s,i;if(this._monthsParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=l([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=S.call(this._shortMonthsParse,e))?i:null:-1!==(i=S.call(this._longMonthsParse,e))?i:null:"MMM"===t?-1!==(i=S.call(this._shortMonthsParse,e))||-1!==(i=S.call(this._longMonthsParse,e))?i:null:-1!==(i=S.call(this._longMonthsParse,e))||-1!==(i=S.call(this._shortMonthsParse,e))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=l([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},w.monthsRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ee.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},w.monthsShortRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ee.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},w.week=function(e){return qe(e,this._week.dow,this._week.doy).week},w.firstDayOfYear=function(){return this._week.doy},w.firstDayOfWeek=function(){return this._week.dow},w.weekdays=function(e,t){return t=a(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"],!0===e?Be(t,this._week.dow):e?t[e.day()]:t},w.weekdaysMin=function(e){return!0===e?Be(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},w.weekdaysShort=function(e){return!0===e?Be(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},w.weekdaysParse=function(e,t,n){var s,i;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=l([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=S.call(this._weekdaysParse,e))?i:null:"ddd"===t?-1!==(i=S.call(this._shortWeekdaysParse,e))?i:null:-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:"dddd"===t?-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._shortWeekdaysParse,e))||-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:"ddd"===t?-1!==(i=S.call(this._shortWeekdaysParse,e))||-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:-1!==(i=S.call(this._minWeekdaysParse,e))||-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._shortWeekdaysParse,e))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=l([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},w.weekdaysRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Ke),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},w.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=et),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},w.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=tt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},w.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},w.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ct("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===g(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=e("moment.lang is deprecated. Use moment.locale instead.",ct),f.langData=e("moment.langData is deprecated. Use moment.localeData instead.",mt);var _n=Math.abs;function yn(e,t,n,s){t=C(t,n);return e._milliseconds+=s*t._milliseconds,e._days+=s*t._days,e._months+=s*t._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function wn(e){return 4800*e/146097}function pn(e){return 146097*e/4800}function kn(e){return function(){return this.as(e)}}pe=kn("ms"),me=kn("s"),Ce=kn("m"),we=kn("h"),ge=kn("d"),Je=kn("w"),k=kn("M"),_e=kn("Q"),ve=kn("y");function vn(e){return function(){return this.isValid()?this._data[e]:NaN}}var ye=vn("milliseconds"),ke=vn("seconds"),Ie=vn("minutes"),w=vn("hours"),Mn=vn("days"),Dn=vn("months"),Sn=vn("years");var Yn=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function bn(e,t,n,s){var i=C(e).abs(),r=Yn(i.as("s")),a=Yn(i.as("m")),o=Yn(i.as("h")),u=Yn(i.as("d")),l=Yn(i.as("M")),h=Yn(i.as("w")),i=Yn(i.as("y")),r=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return(r=(r=null!=n.w?r||h<=1&&["w"]||h<n.w&&["ww",h]:r)||l<=1&&["M"]||l<n.M&&["MM",l]||i<=1&&["y"]||["yy",i])[2]=t,r[3]=0<+e,r[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,r)}var xn=Math.abs;function Tn(e){return(0<e)-(e<0)||+e}function Nn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o=xn(this._milliseconds)/1e3,u=xn(this._days),l=xn(this._months),h=this.asSeconds();return h?(e=y(o/60),t=y(e/60),o%=60,e%=60,n=y(l/12),l%=12,s=o?o.toFixed(3).replace(/\.?0+$/,""):"",i=Tn(this._months)!==Tn(h)?"-":"",r=Tn(this._days)!==Tn(h)?"-":"",a=Tn(this._milliseconds)!==Tn(h)?"-":"",(h<0?"-":"")+"P"+(n?i+n+"Y":"")+(l?i+l+"M":"")+(u?r+u+"D":"")+(t||e||o?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(o?a+s+"S":"")):"P0D"}var U=Ct.prototype;return U.isValid=function(){return this._isValid},U.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},U.add=function(e,t){return yn(this,e,t,1)},U.subtract=function(e,t){return yn(this,e,t,-1)},U.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=_(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+wn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(pn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},U.asMilliseconds=pe,U.asSeconds=me,U.asMinutes=Ce,U.asHours=we,U.asDays=ge,U.asWeeks=Je,U.asMonths=k,U.asQuarters=_e,U.asYears=ve,U.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12):NaN},U._bubble=function(){var e=this._milliseconds,t=this._days,n=this._months,s=this._data;return 0<=e&&0<=t&&0<=n||e<=0&&t<=0&&n<=0||(e+=864e5*gn(pn(n)+t),n=t=0),s.milliseconds=e%1e3,e=y(e/1e3),s.seconds=e%60,e=y(e/60),s.minutes=e%60,e=y(e/60),s.hours=e%24,t+=y(e/24),n+=e=y(wn(t)),t-=gn(pn(e)),e=y(n/12),n%=12,s.days=t,s.months=n,s.years=e,this},U.clone=function(){return C(this)},U.get=function(e){return e=_(e),this.isValid()?this[e+"s"]():NaN},U.milliseconds=ye,U.seconds=ke,U.minutes=Ie,U.hours=w,U.days=Mn,U.weeks=function(){return y(this.days()/7)},U.months=Dn,U.years=Sn,U.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=On;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(n=e),"object"==typeof t&&(s=Object.assign({},On,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),e=this.localeData(),t=bn(this,!n,s,e),n&&(t=e.pastFuture(+this,t)),e.postformat(t)},U.toISOString=Nn,U.toString=Nn,U.toJSON=Nn,U.locale=Xt,U.localeData=Kt,U.toIsoString=e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Nn),U.lang=Xe,s("X",0,0,"unix"),s("x",0,0,"valueOf"),v("x",De),v("X",/[+-]?\d+(\.\d{1,3})?/),D("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),D("x",function(e,t,n){n._d=new Date(g(e))}),f.version="2.29.4",H=W,f.fn=i,f.min=function(){return Rt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Rt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=l,f.unix=function(e){return W(1e3*e)},f.months=function(e,t){return fn(e,t,"months")},f.isDate=V,f.locale=ct,f.invalid=I,f.duration=C,f.isMoment=h,f.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},f.parseZone=function(){return W.apply(null,arguments).parseZone()},f.localeData=mt,f.isDuration=Ut,f.monthsShort=function(e,t){return fn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},f.defineLocale=ft,f.updateLocale=function(e,t){var n,s;return null!=t?(s=ot,null!=R[e]&&null!=R[e].parentLocale?R[e].set(X(R[e]._config,t)):(t=X(s=null!=(n=dt(e))?n._config:s,t),null==n&&(t.abbr=e),(s=new K(t)).parentLocale=R[e],R[e]=s),ct(e)):null!=R[e]&&(null!=R[e].parentLocale?(R[e]=R[e].parentLocale,e===ct()&&ct(e)):null!=R[e]&&delete R[e]),R[e]},f.locales=function(){return ee(R)},f.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},f.normalizeUnits=_,f.relativeTimeRounding=function(e){return void 0===e?Yn:"function"==typeof e&&(Yn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==On[e]&&(void 0===t?On[e]:(On[e]=t,"s"===e&&(On.ss=t-1),!0))},f.calendarFormat=function(e,t){return(e=e.diff(t,"days",!0))<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"},f.prototype=i,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});

// moment-timezone-with-data-10-year-range.min.js 
// https://momentjs.com/timezone/
!function(a,i){"use strict";"object"==typeof module&&module.exports?module.exports=i(require("moment")):"function"==typeof define&&define.amd?define(["moment"],i):i(a.moment)}(this,function(c){"use strict";void 0===c.version&&c.default&&(c=c.default);var i,A={},n={},t={},s={},u={};c&&"string"==typeof c.version||y("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var a=c.version.split("."),r=+a[0],e=+a[1];function m(a){return 96<a?a-87:64<a?a-29:a-48}function o(a){var i=0,r=a.split("."),e=r[0],o=r[1]||"",c=1,A=0,n=1;for(45===a.charCodeAt(0)&&(n=-(i=1));i<e.length;i++)A=60*A+m(e.charCodeAt(i));for(i=0;i<o.length;i++)c/=60,A+=m(o.charCodeAt(i))*c;return A*n}function l(a){for(var i=0;i<a.length;i++)a[i]=o(a[i])}function f(a,i){var r,e=[];for(r=0;r<i.length;r++)e[r]=a[i[r]];return e}function p(a){var i=a.split("|"),r=i[2].split(" "),e=i[3].split(""),o=i[4].split(" ");return l(r),l(e),l(o),function(a,i){for(var r=0;r<i;r++)a[r]=Math.round((a[r-1]||0)+6e4*a[r]);a[i-1]=1/0}(o,e.length),{name:i[0],abbrs:f(i[1].split(" "),e),offsets:f(r,e),untils:o,population:0|i[5]}}function M(a){a&&this._set(p(a))}function b(a,i){this.name=a,this.zones=i}function h(a){var i=a.toTimeString(),r=i.match(/\([a-z ]+\)/i);"GMT"===(r=r&&r[0]?(r=r[0].match(/[A-Z]/g))?r.join(""):void 0:(r=i.match(/[A-Z]{3,5}/g))?r[0]:void 0)&&(r=void 0),this.at=+a,this.abbr=r,this.offset=a.getTimezoneOffset()}function d(a){this.zone=a,this.offsetScore=0,this.abbrScore=0}function E(a,i){for(var r,e;e=6e4*((i.at-a.at)/12e4|0);)(r=new h(new Date(a.at+e))).offset===a.offset?a=r:i=r;return a}function g(a,i){return a.offsetScore!==i.offsetScore?a.offsetScore-i.offsetScore:a.abbrScore!==i.abbrScore?a.abbrScore-i.abbrScore:a.zone.population!==i.zone.population?i.zone.population-a.zone.population:i.zone.name.localeCompare(a.zone.name)}function T(a,i){var r,e;for(l(i),r=0;r<i.length;r++)e=i[r],u[e]=u[e]||{},u[e][a]=!0}function S(){try{var a=Intl.DateTimeFormat().resolvedOptions().timeZone;if(a&&3<a.length){var i=s[P(a)];if(i)return i;y("Moment Timezone found "+a+" from the Intl api, but did not have that data loaded.")}}catch(a){}var r,e,o,c=function(){var a,i,r,e=(new Date).getFullYear()-2,o=new h(new Date(e,0,1)),c=[o];for(r=1;r<48;r++)(i=new h(new Date(e,r,1))).offset!==o.offset&&(a=E(o,i),c.push(a),c.push(new h(new Date(a.at+6e4)))),o=i;for(r=0;r<4;r++)c.push(new h(new Date(e+r,0,1))),c.push(new h(new Date(e+r,6,1)));return c}(),A=c.length,n=function(a){var i,r,e,o=a.length,c={},A=[];for(i=0;i<o;i++)for(r in e=u[a[i].offset]||{})e.hasOwnProperty(r)&&(c[r]=!0);for(i in c)c.hasOwnProperty(i)&&A.push(s[i]);return A}(c),t=[];for(e=0;e<n.length;e++){for(r=new d(z(n[e]),A),o=0;o<A;o++)r.scoreOffsetAt(c[o]);t.push(r)}return t.sort(g),0<t.length?t[0].zone.name:void 0}function P(a){return(a||"").toLowerCase().replace(/\//g,"_")}function k(a){var i,r,e,o;for("string"==typeof a&&(a=[a]),i=0;i<a.length;i++)o=P(r=(e=a[i].split("|"))[0]),A[o]=a[i],s[o]=r,T(o,e[2].split(" "))}function z(a,i){a=P(a);var r,e=A[a];return e instanceof M?e:"string"==typeof e?(e=new M(e),A[a]=e):n[a]&&i!==z&&(r=z(n[a],z))?((e=A[a]=new M)._set(r),e.name=s[a],e):null}function _(a){var i,r,e,o;for("string"==typeof a&&(a=[a]),i=0;i<a.length;i++)e=P((r=a[i].split("|"))[0]),o=P(r[1]),n[e]=o,s[e]=r[0],n[o]=e,s[o]=r[1]}function C(a){k(a.zones),_(a.links),function(a){var i,r,e,o;if(a&&a.length)for(i=0;i<a.length;i++)r=(o=a[i].split("|"))[0].toUpperCase(),e=o[1].split(" "),t[r]=new b(r,e)}(a.countries),L.dataVersion=a.version}function B(a){var i="X"===a._f||"x"===a._f;return!(!a._a||void 0!==a._tzm||i)}function y(a){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(a)}function L(a){var i=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],e=z(r),o=c.utc.apply(null,i);return e&&!c.isMoment(a)&&B(o)&&o.add(e.parse(o),"minutes"),o.tz(r),o}(r<2||2==r&&e<6)&&y("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+c.version+". See momentjs.com"),M.prototype={_set:function(a){this.name=a.name,this.abbrs=a.abbrs,this.untils=a.untils,this.offsets=a.offsets,this.population=a.population},_index:function(a){var i,r=+a,e=this.untils;for(i=0;i<e.length;i++)if(r<e[i])return i},countries:function(){var i=this.name;return Object.keys(t).filter(function(a){return-1!==t[a].zones.indexOf(i)})},parse:function(a){var i,r,e,o,c=+a,A=this.offsets,n=this.untils,t=n.length-1;for(o=0;o<t;o++)if(i=A[o],r=A[o+1],e=A[o?o-1:o],i<r&&L.moveAmbiguousForward?i=r:e<i&&L.moveInvalidForward&&(i=e),c<n[o]-6e4*i)return A[o];return A[t]},abbr:function(a){return this.abbrs[this._index(a)]},offset:function(a){return y("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(a)]},utcOffset:function(a){return this.offsets[this._index(a)]}},d.prototype.scoreOffsetAt=function(a){this.offsetScore+=Math.abs(this.zone.utcOffset(a.at)-a.offset),this.zone.abbr(a.at).replace(/[^A-Z]/g,"")!==a.abbr&&this.abbrScore++},L.version="0.5.36",L.dataVersion="",L._zones=A,L._links=n,L._names=s,L._countries=t,L.add=k,L.link=_,L.load=C,L.zone=z,L.zoneExists=function a(i){return a.didShowError||(a.didShowError=!0,y("moment.tz.zoneExists('"+i+"') has been deprecated in favor of !moment.tz.zone('"+i+"')")),!!z(i)},L.guess=function(a){return i&&!a||(i=S()),i},L.names=function(){var a,i=[];for(a in s)s.hasOwnProperty(a)&&(A[a]||A[n[a]])&&s[a]&&i.push(s[a]);return i.sort()},L.Zone=M,L.unpack=p,L.unpackBase60=o,L.needsOffset=B,L.moveInvalidForward=!0,L.moveAmbiguousForward=!1,L.countries=function(){return Object.keys(t)},L.zonesForCountry=function(a,i){if(!(a=function(a){return a=a.toUpperCase(),t[a]||null}(a)))return null;var r=a.zones.sort();return i?r.map(function(a){return{name:a,offset:z(a).utcOffset(new Date)}}):r};var D,N=c.fn;function O(a){return function(){return this._z?this._z.abbr(this):a.call(this)}}function v(a){return function(){return this._z=null,a.apply(this,arguments)}}c.tz=L,c.defaultZone=null,c.updateOffset=function(a,i){var r,e=c.defaultZone;if(void 0===a._z&&(e&&B(a)&&!a._isUTC&&(a._d=c.utc(a._a)._d,a.utc().add(e.parse(a),"minutes")),a._z=e),a._z)if(r=a._z.utcOffset(a),Math.abs(r)<16&&(r/=60),void 0!==a.utcOffset){var o=a._z;a.utcOffset(-r,i),a._z=o}else a.zone(r,i)},N.tz=function(a,i){if(a){if("string"!=typeof a)throw new Error("Time zone name must be a string, got "+a+" ["+typeof a+"]");return this._z=z(a),this._z?c.updateOffset(this,i):y("Moment Timezone has no data for "+a+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},N.zoneName=O(N.zoneName),N.zoneAbbr=O(N.zoneAbbr),N.utc=v(N.utc),N.local=v(N.local),N.utcOffset=(D=N.utcOffset,function(){return 0<arguments.length&&(this._z=null),D.apply(this,arguments)}),c.tz.setDefault=function(a){return(r<2||2==r&&e<9)&&y("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+c.version+"."),c.defaultZone=a?z(a):null,c};var G=c.momentProperties;return"[object Array]"===Object.prototype.toString.call(G)?(G.push("_z"),G.push("_a")):G&&(G._z=null),C({version:"2022c",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Nairobi|EAT|-30|0||47e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET|-20|0||15e6","Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101|1T0q0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Juba|EAT CAT|-30 -20|01|24nx0|","Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5","Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00|","Africa/Windhoek|CAT WAT|-20 -10|010|1T3c0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1ST00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1SSX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Fortaleza|-03|30|0||34e5","America/Asuncion|-03 -04|30 40|01010101010101010101010|1T0r0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0|28e5","America/Panama|EST|50|0||15e5","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1T3k0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0|20e6","America/Managua|CST|60|0||22e5","America/Caracas|-04|40|0||29e5","America/Lima|-05|50|0||11e6","America/Denver|MST MDT|70 60|01010101010101010101010|1SSV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|26e5","America/Campo_Grande|-03 -04|30 40|010101|1SKr0 1zd0 On0 1HB0 FX0|77e4","America/Chicago|CST CDT|60 50|01010101010101010101010|1SSU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1T3l0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0|81e4","America/Phoenix|MST|70|0||42e5","America/Whitehorse|PST PDT MST|80 70 70|010101012|1SSW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1z90|23e3","America/New_York|EST EDT|50 40|01010101010101010101010|1SST0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|21e6","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1SSW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|15e6","America/Halifax|AST ADT|40 30|01010101010101010101010|1SSS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|39e4","America/Godthab|-03 -02|30 20|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|17e3","America/Grand_Turk|AST EDT EST|40 40 50|012121212121212121212|1Vkv0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|37e2","America/Havana|CST CDT|50 40|01010101010101010101010|1SSR0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0|21e5","America/Metlakatla|AKST AKDT PST|90 80 80|010120101010101010101010|1SSX0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|14e2","America/Miquelon|-03 -02|30 20|01010101010101010101010|1SSR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|61e2","America/Noronha|-02|20|0||30e2","America/Santiago|-03 -04|30 40|01010101010101010101010|1Tk30 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|62e5","America/Sao_Paulo|-02 -03|20 30|010101|1SKq0 1zd0 On0 1HB0 FX0|20e6","Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|25e4","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1SSRu 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0|11e4","Antarctica/Casey|+11 +08|-b0 -80|0101010|1Vkh0 1o30 14k0 1kr0 12l0 1o01|10","Asia/Bangkok|+07|-70|0||15e6","Asia/Vladivostok|+10|-a0|0||60e4","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1T340 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1T320 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5","Europe/Istanbul|+03|-30|0||13e6","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|40","Asia/Dhaka|+06|-60|0||16e6","Asia/Amman|EET EEST|-20 -30|01010101010101010101010|1T2m0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 LA0 1C00 LA0 1C00 Oo0 1zc0 Oo0 1C00 LA0 1C00 LA0 1C00|25e5","Asia/Kamchatka|+12|-c0|0||18e4","Asia/Dubai|+04|-40|0||39e5","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1T0m0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0|22e5","Asia/Kuala_Lumpur|+08|-80|0||71e5","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+09|-90|0||33e4","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1T2m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5","Asia/Famagusta|+03 EET EEST|-30 -20 -30|0121212121212121212121|1Urd0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1SXX0 1qL0 WN0 1qL0 11c0 1on0 11B0 1o00 11A0 1qo0 XA0 1q00 XA0 1q00 12o0 1nc0 12o0 1nc0 12o0 1nc0 12o0 1q00|18e5","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1SXA0 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Kathmandu|+0545|-5J|0||12e5","Asia/Sakhalin|+11|-b0|0||58e4","Asia/Makassar|WITA|-80|0||15e5","Asia/Manila|PST|-80|0||24e6","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|35e5","Asia/Pyongyang|KST KST|-8u -90|01|1VGf0|29e5","Asia/Qyzylorda|+06 +05|-60 -50|01|1Xei0|73e4","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Seoul|KST|-90|0||23e6","Asia/Tehran|+0330 +0430|-3u -4u|0101010101010|1SWIu 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6","Asia/Tokyo|JST|-90|0||38e6","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|27e5","Atlantic/Cape_Verde|-01|10|0||50e4","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1T34u 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845|-8J|0||368","Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1T330 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|-05 -06|50 60|01010101010101010101010|1Tk30 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|12e5","Etc/GMT-1|+01|-10|0||","Pacific/Fakaofo|+13|-d0|0||483","Pacific/Kiritimati|+14|-e0|0||51e2","Etc/GMT-2|+02|-20|0||","Pacific/Tahiti|-10|a0|0||18e4","Pacific/Niue|-11|b0|0||12e2","Etc/GMT+12|-12|c0|0||","Pacific/Galapagos|-06|60|0||25e3","Etc/GMT+7|-07|70|0||","Pacific/Pitcairn|-08|80|0||56","Pacific/Gambier|-09|90|0||125","Etc/UTC|UTC|0|0||","Europe/London|GMT BST|0 -10|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1T0o0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|67e4","Europe/Moscow|MSK|-30|0||16e6","Europe/Volgograd|+03 +04|-30 -40|010|1WQL0 5gn0|10e5","Pacific/Honolulu|HST|a0|0||37e4","MET|MET MEST|-10 -20|01010101010101010101010|1T0p0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|","Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1T320 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|+14 +13|-e0 -d0|0101010101|1T320 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0|37e3","Pacific/Fiji|+13 +12|-d0 -c0|010101010101010101010|1Swe0 1VA0 s00 1VA0 s00 20o0 pc0 2hc0 bc0 4q00 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0|88e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Norfolk|+11 +12|-b0 -c0|010101010101010101|219P0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|25e4","Pacific/Tongatapu|+14 +13|-e0 -d0|01|1Swd0|75e3"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Africa/Tripoli","Africa/Cairo|Egypt","Africa/Cairo|Europe/Kaliningrad","Africa/Cairo|Libya","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Campo_Grande|America/Cuiaba","America/Caracas|America/Boa_Vista","America/Caracas|America/Guyana","America/Caracas|America/La_Paz","America/Caracas|America/Manaus","America/Caracas|America/Porto_Velho","America/Caracas|Brazil/West","America/Caracas|Etc/GMT+4","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Beulah","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Araguaina","America/Fortaleza|America/Argentina/Buenos_Aires","America/Fortaleza|America/Argentina/Catamarca","America/Fortaleza|America/Argentina/ComodRivadavia","America/Fortaleza|America/Argentina/Cordoba","America/Fortaleza|America/Argentina/Jujuy","America/Fortaleza|America/Argentina/La_Rioja","America/Fortaleza|America/Argentina/Mendoza","America/Fortaleza|America/Argentina/Rio_Gallegos","America/Fortaleza|America/Argentina/Salta","America/Fortaleza|America/Argentina/San_Juan","America/Fortaleza|America/Argentina/San_Luis","America/Fortaleza|America/Argentina/Tucuman","America/Fortaleza|America/Argentina/Ushuaia","America/Fortaleza|America/Bahia","America/Fortaleza|America/Belem","America/Fortaleza|America/Buenos_Aires","America/Fortaleza|America/Catamarca","America/Fortaleza|America/Cayenne","America/Fortaleza|America/Cordoba","America/Fortaleza|America/Jujuy","America/Fortaleza|America/Maceio","America/Fortaleza|America/Mendoza","America/Fortaleza|America/Montevideo","America/Fortaleza|America/Paramaribo","America/Fortaleza|America/Punta_Arenas","America/Fortaleza|America/Recife","America/Fortaleza|America/Rosario","America/Fortaleza|America/Santarem","America/Fortaleza|Antarctica/Palmer","America/Fortaleza|Antarctica/Rothera","America/Fortaleza|Atlantic/Stanley","America/Fortaleza|Etc/GMT+3","America/Godthab|America/Nuuk","America/Halifax|America/Glace_Bay","America/Halifax|America/Goose_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Lima|America/Bogota","America/Lima|America/Eirunepe","America/Lima|America/Guayaquil","America/Lima|America/Porto_Acre","America/Lima|America/Rio_Branco","America/Lima|Brazil/Acre","America/Lima|Etc/GMT+5","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/Saskatchewan","America/Mexico_City|America/Bahia_Banderas","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Port-au-Prince","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Atlantic/South_Georgia","America/Noronha|Brazil/DeNoronha","America/Noronha|Etc/GMT+2","America/Panama|America/Atikokan","America/Panama|America/Cancun","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Fort_Nelson","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Whitehorse|America/Dawson","America/Whitehorse|Canada/Yukon","Asia/Bangkok|Antarctica/Davis","Asia/Bangkok|Asia/Barnaul","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Hovd","Asia/Bangkok|Asia/Krasnoyarsk","Asia/Bangkok|Asia/Novokuznetsk","Asia/Bangkok|Asia/Novosibirsk","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Tomsk","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Chita|Asia/Dili","Asia/Chita|Asia/Khandyga","Asia/Chita|Asia/Yakutsk","Asia/Chita|Etc/GMT-9","Asia/Chita|Pacific/Palau","Asia/Dhaka|Antarctica/Vostok","Asia/Dhaka|Asia/Almaty","Asia/Dhaka|Asia/Bishkek","Asia/Dhaka|Asia/Dacca","Asia/Dhaka|Asia/Kashgar","Asia/Dhaka|Asia/Omsk","Asia/Dhaka|Asia/Qostanay","Asia/Dhaka|Asia/Thimbu","Asia/Dhaka|Asia/Thimphu","Asia/Dhaka|Asia/Urumqi","Asia/Dhaka|Etc/GMT-6","Asia/Dhaka|Indian/Chagos","Asia/Dubai|Asia/Baku","Asia/Dubai|Asia/Muscat","Asia/Dubai|Asia/Tbilisi","Asia/Dubai|Asia/Yerevan","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Europe/Astrakhan","Asia/Dubai|Europe/Samara","Asia/Dubai|Europe/Saratov","Asia/Dubai|Europe/Ulyanovsk","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Mauritius","Asia/Dubai|Indian/Reunion","Asia/Gaza|Asia/Hebron","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kamchatka|Etc/GMT-12","Asia/Kamchatka|Kwajalein","Asia/Kamchatka|Pacific/Funafuti","Asia/Kamchatka|Pacific/Kwajalein","Asia/Kamchatka|Pacific/Majuro","Asia/Kamchatka|Pacific/Nauru","Asia/Kamchatka|Pacific/Tarawa","Asia/Kamchatka|Pacific/Wake","Asia/Kamchatka|Pacific/Wallis","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Brunei","Asia/Kuala_Lumpur|Asia/Choibalsan","Asia/Kuala_Lumpur|Asia/Irkutsk","Asia/Kuala_Lumpur|Asia/Kuching","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Asia/Ulaanbaatar","Asia/Kuala_Lumpur|Asia/Ulan_Bator","Asia/Kuala_Lumpur|Etc/GMT-8","Asia/Kuala_Lumpur|Singapore","Asia/Makassar|Asia/Ujung_Pandang","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Sakhalin|Asia/Magadan","Asia/Sakhalin|Asia/Srednekolymsk","Asia/Sakhalin|Etc/GMT-11","Asia/Sakhalin|Pacific/Bougainville","Asia/Sakhalin|Pacific/Efate","Asia/Sakhalin|Pacific/Guadalcanal","Asia/Sakhalin|Pacific/Kosrae","Asia/Sakhalin|Pacific/Noumea","Asia/Sakhalin|Pacific/Pohnpei","Asia/Sakhalin|Pacific/Ponape","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Atyrau","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Asia/Yekaterinburg","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tashkent|Indian/Maldives","Asia/Tehran|Iran","Asia/Tokyo|Japan","Asia/Vladivostok|Antarctica/DumontDUrville","Asia/Vladivostok|Asia/Ust-Nera","Asia/Vladivostok|Etc/GMT-10","Asia/Vladivostok|Pacific/Chuuk","Asia/Vladivostok|Pacific/Port_Moresby","Asia/Vladivostok|Pacific/Truk","Asia/Vladivostok|Pacific/Yap","Atlantic/Azores|America/Scoresbysund","Atlantic/Cape_Verde|Etc/GMT+1","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Antarctica/Macquarie","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Kyiv","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Antarctica/Syowa","Europe/Istanbul|Asia/Aden","Europe/Istanbul|Asia/Baghdad","Europe/Istanbul|Asia/Bahrain","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Asia/Kuwait","Europe/Istanbul|Asia/Qatar","Europe/Istanbul|Asia/Riyadh","Europe/Istanbul|Etc/GMT-3","Europe/Istanbul|Europe/Kirov","Europe/Istanbul|Europe/Minsk","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|Europe/Simferopol","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Fakaofo|Etc/GMT-13","Pacific/Fakaofo|Pacific/Enderbury","Pacific/Fakaofo|Pacific/Kanton","Pacific/Galapagos|Etc/GMT+6","Pacific/Gambier|Etc/GMT+9","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kiritimati|Etc/GMT-14","Pacific/Niue|Etc/GMT+11","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pitcairn|Etc/GMT+8","Pacific/Tahiti|Etc/GMT+10","Pacific/Tahiti|Pacific/Rarotonga"],countries:["AD|Europe/Andorra","AE|Asia/Dubai","AF|Asia/Kabul","AG|America/Puerto_Rico America/Antigua","AI|America/Puerto_Rico America/Anguilla","AL|Europe/Tirane","AM|Asia/Yerevan","AO|Africa/Lagos Africa/Luanda","AQ|Antarctica/Casey Antarctica/Davis Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Troll Asia/Urumqi Pacific/Auckland Pacific/Port_Moresby Asia/Riyadh Antarctica/McMurdo Antarctica/DumontDUrville Antarctica/Syowa Antarctica/Vostok","AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia","AS|Pacific/Pago_Pago","AT|Europe/Vienna","AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla","AW|America/Puerto_Rico America/Aruba","AX|Europe/Helsinki Europe/Mariehamn","AZ|Asia/Baku","BA|Europe/Belgrade Europe/Sarajevo","BB|America/Barbados","BD|Asia/Dhaka","BE|Europe/Brussels","BF|Africa/Abidjan Africa/Ouagadougou","BG|Europe/Sofia","BH|Asia/Qatar Asia/Bahrain","BI|Africa/Maputo Africa/Bujumbura","BJ|Africa/Lagos Africa/Porto-Novo","BL|America/Puerto_Rico America/St_Barthelemy","BM|Atlantic/Bermuda","BN|Asia/Kuching Asia/Brunei","BO|America/La_Paz","BQ|America/Puerto_Rico America/Kralendijk","BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco","BS|America/Toronto America/Nassau","BT|Asia/Thimphu","BW|Africa/Maputo Africa/Gaborone","BY|Europe/Minsk","BZ|America/Belize","CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Dawson_Creek America/Fort_Nelson America/Whitehorse America/Dawson America/Vancouver America/Panama America/Puerto_Rico America/Phoenix America/Blanc-Sablon America/Atikokan America/Creston","CC|Asia/Yangon Indian/Cocos","CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi","CF|Africa/Lagos Africa/Bangui","CG|Africa/Lagos Africa/Brazzaville","CH|Europe/Zurich","CI|Africa/Abidjan","CK|Pacific/Rarotonga","CL|America/Santiago America/Punta_Arenas Pacific/Easter","CM|Africa/Lagos Africa/Douala","CN|Asia/Shanghai Asia/Urumqi","CO|America/Bogota","CR|America/Costa_Rica","CU|America/Havana","CV|Atlantic/Cape_Verde","CW|America/Puerto_Rico America/Curacao","CX|Asia/Bangkok Indian/Christmas","CY|Asia/Nicosia Asia/Famagusta","CZ|Europe/Prague","DE|Europe/Zurich Europe/Berlin Europe/Busingen","DJ|Africa/Nairobi Africa/Djibouti","DK|Europe/Berlin Europe/Copenhagen","DM|America/Puerto_Rico America/Dominica","DO|America/Santo_Domingo","DZ|Africa/Algiers","EC|America/Guayaquil Pacific/Galapagos","EE|Europe/Tallinn","EG|Africa/Cairo","EH|Africa/El_Aaiun","ER|Africa/Nairobi Africa/Asmara","ES|Europe/Madrid Africa/Ceuta Atlantic/Canary","ET|Africa/Nairobi Africa/Addis_Ababa","FI|Europe/Helsinki","FJ|Pacific/Fiji","FK|Atlantic/Stanley","FM|Pacific/Kosrae Pacific/Port_Moresby Pacific/Guadalcanal Pacific/Chuuk Pacific/Pohnpei","FO|Atlantic/Faroe","FR|Europe/Paris","GA|Africa/Lagos Africa/Libreville","GB|Europe/London","GD|America/Puerto_Rico America/Grenada","GE|Asia/Tbilisi","GF|America/Cayenne","GG|Europe/London Europe/Guernsey","GH|Africa/Abidjan Africa/Accra","GI|Europe/Gibraltar","GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule","GM|Africa/Abidjan Africa/Banjul","GN|Africa/Abidjan Africa/Conakry","GP|America/Puerto_Rico America/Guadeloupe","GQ|Africa/Lagos Africa/Malabo","GR|Europe/Athens","GS|Atlantic/South_Georgia","GT|America/Guatemala","GU|Pacific/Guam","GW|Africa/Bissau","GY|America/Guyana","HK|Asia/Hong_Kong","HN|America/Tegucigalpa","HR|Europe/Belgrade Europe/Zagreb","HT|America/Port-au-Prince","HU|Europe/Budapest","ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura","IE|Europe/Dublin","IL|Asia/Jerusalem","IM|Europe/London Europe/Isle_of_Man","IN|Asia/Kolkata","IO|Indian/Chagos","IQ|Asia/Baghdad","IR|Asia/Tehran","IS|Africa/Abidjan Atlantic/Reykjavik","IT|Europe/Rome","JE|Europe/London Europe/Jersey","JM|America/Jamaica","JO|Asia/Amman","JP|Asia/Tokyo","KE|Africa/Nairobi","KG|Asia/Bishkek","KH|Asia/Bangkok Asia/Phnom_Penh","KI|Pacific/Tarawa Pacific/Kanton Pacific/Kiritimati","KM|Africa/Nairobi Indian/Comoro","KN|America/Puerto_Rico America/St_Kitts","KP|Asia/Pyongyang","KR|Asia/Seoul","KW|Asia/Riyadh Asia/Kuwait","KY|America/Panama America/Cayman","KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral","LA|Asia/Bangkok Asia/Vientiane","LB|Asia/Beirut","LC|America/Puerto_Rico America/St_Lucia","LI|Europe/Zurich Europe/Vaduz","LK|Asia/Colombo","LR|Africa/Monrovia","LS|Africa/Johannesburg Africa/Maseru","LT|Europe/Vilnius","LU|Europe/Brussels Europe/Luxembourg","LV|Europe/Riga","LY|Africa/Tripoli","MA|Africa/Casablanca","MC|Europe/Paris Europe/Monaco","MD|Europe/Chisinau","ME|Europe/Belgrade Europe/Podgorica","MF|America/Puerto_Rico America/Marigot","MG|Africa/Nairobi Indian/Antananarivo","MH|Pacific/Tarawa Pacific/Kwajalein Pacific/Majuro","MK|Europe/Belgrade Europe/Skopje","ML|Africa/Abidjan Africa/Bamako","MM|Asia/Yangon","MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan","MO|Asia/Macau","MP|Pacific/Guam Pacific/Saipan","MQ|America/Martinique","MR|Africa/Abidjan Africa/Nouakchott","MS|America/Puerto_Rico America/Montserrat","MT|Europe/Malta","MU|Indian/Mauritius","MV|Indian/Maldives","MW|Africa/Maputo Africa/Blantyre","MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas","MY|Asia/Kuching Asia/Singapore Asia/Kuala_Lumpur","MZ|Africa/Maputo","NA|Africa/Windhoek","NC|Pacific/Noumea","NE|Africa/Lagos Africa/Niamey","NF|Pacific/Norfolk","NG|Africa/Lagos","NI|America/Managua","NL|Europe/Brussels Europe/Amsterdam","NO|Europe/Berlin Europe/Oslo","NP|Asia/Kathmandu","NR|Pacific/Nauru","NU|Pacific/Niue","NZ|Pacific/Auckland Pacific/Chatham","OM|Asia/Dubai Asia/Muscat","PA|America/Panama","PE|America/Lima","PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier","PG|Pacific/Port_Moresby Pacific/Bougainville","PH|Asia/Manila","PK|Asia/Karachi","PL|Europe/Warsaw","PM|America/Miquelon","PN|Pacific/Pitcairn","PR|America/Puerto_Rico","PS|Asia/Gaza Asia/Hebron","PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores","PW|Pacific/Palau","PY|America/Asuncion","QA|Asia/Qatar","RE|Asia/Dubai Indian/Reunion","RO|Europe/Bucharest","RS|Europe/Belgrade","RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Volgograd Europe/Astrakhan Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr","RW|Africa/Maputo Africa/Kigali","SA|Asia/Riyadh","SB|Pacific/Guadalcanal","SC|Asia/Dubai Indian/Mahe","SD|Africa/Khartoum","SE|Europe/Berlin Europe/Stockholm","SG|Asia/Singapore","SH|Africa/Abidjan Atlantic/St_Helena","SI|Europe/Belgrade Europe/Ljubljana","SJ|Europe/Berlin Arctic/Longyearbyen","SK|Europe/Prague Europe/Bratislava","SL|Africa/Abidjan Africa/Freetown","SM|Europe/Rome Europe/San_Marino","SN|Africa/Abidjan Africa/Dakar","SO|Africa/Nairobi Africa/Mogadishu","SR|America/Paramaribo","SS|Africa/Juba","ST|Africa/Sao_Tome","SV|America/El_Salvador","SX|America/Puerto_Rico America/Lower_Princes","SY|Asia/Damascus","SZ|Africa/Johannesburg Africa/Mbabane","TC|America/Grand_Turk","TD|Africa/Ndjamena","TF|Asia/Dubai Indian/Maldives Indian/Kerguelen","TG|Africa/Abidjan Africa/Lome","TH|Asia/Bangkok","TJ|Asia/Dushanbe","TK|Pacific/Fakaofo","TL|Asia/Dili","TM|Asia/Ashgabat","TN|Africa/Tunis","TO|Pacific/Tongatapu","TR|Europe/Istanbul","TT|America/Puerto_Rico America/Port_of_Spain","TV|Pacific/Tarawa Pacific/Funafuti","TW|Asia/Taipei","TZ|Africa/Nairobi Africa/Dar_es_Salaam","UA|Europe/Simferopol Europe/Kyiv Europe/Uzhgorod Europe/Zaporozhye","UG|Africa/Nairobi Africa/Kampala","UM|Pacific/Pago_Pago Pacific/Tarawa Pacific/Honolulu Pacific/Midway Pacific/Wake","US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu","UY|America/Montevideo","UZ|Asia/Samarkand Asia/Tashkent","VA|Europe/Rome Europe/Vatican","VC|America/Puerto_Rico America/St_Vincent","VE|America/Caracas","VG|America/Puerto_Rico America/Tortola","VI|America/Puerto_Rico America/St_Thomas","VN|Asia/Bangkok Asia/Ho_Chi_Minh","VU|Pacific/Efate","WF|Pacific/Tarawa Pacific/Wallis","WS|Pacific/Apia","YE|Asia/Riyadh Asia/Aden","YT|Africa/Nairobi Indian/Mayotte","ZA|Africa/Johannesburg","ZM|Africa/Maputo Africa/Lusaka","ZW|Africa/Maputo Africa/Harare"]}),c});

// calendar.js
// https://github.com/PitPik/tinyDatePicker
(function (root, factory) { // 8.65 KB, 4.09 KB, 1.85 KB
	if (typeof exports === 'object') {
		module.exports = factory(root);
	} else if (typeof define === 'function' && define.amd) {
		define('calendar', [], function () {
			return factory(root);
		});
	} else {
		root.Calendar = factory(root);
	}
}(this, function(window, undefined) {
	'use strict';

	var _noop = function() {return ''},
		Calendar = function(options) {
			this.options = {
				sundayBased: true,
				renderWeekNo: false,
				renderDaysOfWeek: true,
				equalHight: false,
				useCache: true,

				months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				workingDays: [1, 2, 3, 4, 5], // Date() based; 0 = Sun
				events: [], // [{start: '2016-12-28 00:00', end: '', at: '', className: '', ...}, ...],

				template: {
					start: function() {return '<table class="cal-month">{{days}}<tbody><tr>'},
					daysOfWeekStart: '<thead><tr>',
					daysOfWeek: '<th class="">{{day}}</th>',
					daysOfWeekEnd: '</tr></thead>',
					daysOfWeekHead: '',
					colGlue: '</tr><tr>',
					weekNo: '<td class="">{{day}}</td>',
					row: '<td class="">{{day}}</td>',
					end: function() {return '</tr></tbody></table>'},
					today: _noop, // replaces {{today}}
					day: _noop, // replaces {{day-event}}
					event: _noop, // replaces {{event}}
				},

				todayClass: 'today',
				weekEndClass: 'week-end',
				weekDayClass: 'week-day',
				prevMonthClass: 'previous-month',
				nextMonthClass: 'next-month',
				currentMonthClass: 'current-month',
				weekNoClass: 'week-no'
			};

			initCalendar(this, options || {});
		},
		offset = '',
		initCalendar = function(_this, options) {
			for (var option in options) {
				var opt = options[option],
					start = '';

				if (option === 'events') {
					for (var n = opt.length; n--; ) {
						convertEvent(opt[n], opt[n]._id || n);
					}
				}
				if (option === 'template') {
					for (var item in opt) {
						_this.options[option][item] = opt[item];
					}
				} else {
					_this.options[option] = opt;
				}
			}
			offset = (-(new Date().getTimezoneOffset() / 60) + '')
				.replace(/([-]*)(\d)(\d*)/, function($1, $2, $3, $4) {
					return ($2 || '+') + ($4 ? $3 + $4 : '0' + $3);
				}) + ':00';
			_this.html = {};
		};

	Calendar.prototype.addEvent = function(event, id) {
		this.options.events.push(convertEvent(event, id));
	}

	Calendar.prototype.removeEvent = function(id) {
		var events = this.options.events;

		for (var n = events.length; n--; ) {
			if (events[n]._id === id) {
				events.splice(n, 1);
			}
		}
	}

	Calendar.prototype.getMonth = function(year, month, week) {
		var date = new Date(+year, +month - 1, 1),
			key = year + '-' + month + (week ? '-' + week : ''),
			html = this.html[key] || _assembleMonth(date, week, this);

		if (this.options.useCache) {
			this.html[key] = html;
		}

		return {
			html: html,
			date: key
		}
	};

	Calendar.prototype.getWeekNumber = _getWeekNumber;
	Calendar.prototype.convertDateString = _convertDateString;

	/* ---------------------- */

	function convertEvent(event, id) {
		var start = event.at || event.start;

		event._start = start ? _convertDateString(start).valueOf() : -1e15;
		event._end = event.at ? _convertDateString(start, true).valueOf() :
			event.end ? _convertDateString(event.end,
				event.end.split(' ')[1] ? false : true).valueOf() : 1e15;
		event._id = id;
		return event;
	}

	function _removeWhitespace(string) { // maybe without...
		return string.replace(/(:?^\s+|\s+$)/g, '').replace(/(?:\s\s+)/g, ' ');
	}

	function _convertDateString(string, end) {
		var parts = string.split(' '),
			time = parts[1] || (end ? '23:59:59.999' : '00:00:00');

		return new Date(Date.parse(parts[0] + 'T' + time + offset));
	}

	function _getWeekNumber(date) { // ISO 8601
		var day = new Date(date.getDate && date.valueOf() || date),
			weekDay = (date.getDay() + 6) % 7,
			firstThursday;

		day.setDate(day.getDate() - weekDay + 3);
		firstThursday = day.valueOf();
		day.setMonth(0, 1);
		if (day.getDay() !== 4) {
			day.setMonth(0, 1 + ((4 - day.getDay()) + 7) % 7);
		}

		return 1 + Math.ceil((firstThursday - day) / 604800000);
	}

	function _renderDaysOfWeek(options) {
		var template = options.template,
			dayOfWeek = 0,
			col = [];

		for (var n = options.renderWeekNo ? -1 : 0; n < 7; n++) { // week days
			dayOfWeek = n + (options.sundayBased ? 0 : (n === 6 ? -6 : 1));
			col.push(template.daysOfWeek.replace(/class="(.*?)"/, function($1, $2) {
				return 'class="' + _removeWhitespace($2 + ' ' +
					(n < 0 ? '' : options.weekDayClass || '') + ' ' +
					(n < 0 ? '' : (options.workingDays.indexOf(dayOfWeek) === -1 ?
					options.weekEndClass : ''))) + '"';
			}).replace(/{{day}}/g, n < 0 ? template.daysOfWeekHead :
				options.weekDays[dayOfWeek]));
		}
		return template.daysOfWeekStart + col.join('') + template.daysOfWeekEnd;
	}

	function _assembleMonth(date, weekNo, _this) { // use day for week display
		var delta = (delta = date.getDay() - // data.date = 1st of month
				!_this.options.sundayBased) < 0 ? 7 + delta : delta,
			options = _this.options,
			rows = options.equalHight ? 6 : Math.ceil((delta +
				new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()) / 7),
			template = options.template,
			renderWeekNo = options.renderWeekNo,
			today = new Date().toDateString(),
			row = [],
			col = [],
			isWeekNo = false,
			isPreviousMonth = false,
			displayedDay = 0,
			currentDate = date,
			currentMonth = currentDate.getMonth(),
			currentYear = currentDate.getFullYear(),
			currentDateValue = 0,
			currentDateValuePlusDay = 0,
			isToday = false,
			eventCollection = [],
			events = options.events,
			displayedMonth = null,
			className = [],
			_count = 0;

		currentDate.setDate(-delta); // days in prev. month
		for (var n = 0; n < rows; n++) { // weeks
			if (weekNo && weekNo !== n + 1) { // skip weeks
				currentDate.setDate(currentDate.getDate() + 7);
				continue;
			}
			row = [];
			for (var m = 0, cols = renderWeekNo ? 8 : 7; m < cols; m++) { // days
				currentDate.setDate(currentDate.getDate() + 1);
				isWeekNo = renderWeekNo && m === 0;
				if (!isWeekNo) { // only to speed it up
					displayedDay = currentDate.getDate();
					displayedMonth = currentDate.getMonth();
					isToday = (currentDate.toDateString() === today);
					isPreviousMonth = displayedMonth < currentMonth &&
						!(displayedMonth === 0 && currentMonth === 11) || // dec
						(displayedMonth === 11 && currentMonth === 0) // jan
					if (events) { // collecting events
						eventCollection = []; // reset
						currentDateValue = currentDate.valueOf(); // 00:00:00
						currentDateValuePlusDay = currentDateValue + 86399000;
						className = [];
						for (var x = 0, y = events.length; x < y; x++) { // can this be optimized?
							if ((events[x]._start <= currentDateValue &&
									events[x]._end >= currentDateValuePlusDay) ||
									(events[x]._start >= currentDateValue &&
									events[x]._end <= currentDateValuePlusDay)) {
								eventCollection.push(events[x]);
								className.push(events[x].className || '');
							}
						}
					}
				}

				row.push(template[isWeekNo ? 'weekNo' : 'row'].
					replace(/class="(.*?)"/, function($1, $2) { // revisit
						return 'class="' + _removeWhitespace($2 + ' ' +
						(isWeekNo ? options.weekNoClass : // week no
						(displayedMonth === currentMonth ? options.currentMonthClass : // day type
							isPreviousMonth ? options.prevMonthClass :
							options.nextMonthClass) + ' ' +
							(className.join(' ').replace(/(\b\w+\s+)*\1/g, "$1") || '') + ' ' + // events
						(isToday ? options.todayClass : '') + ' ' + // today
						(options.workingDays.indexOf(currentDate.getDay()) === -1 ? // working day
							options.weekEndClass : ''))) + '"'}).
					replace(/{{day}}/g, isWeekNo ? _getWeekNumber(currentDate) : displayedDay).
					replace(/{{day-event}}/g, displayedDay && template.day.call(
						_this, displayedDay, currentDate, eventCollection) || displayedDay).
					replace(/{{month}}/g, displayedMonth + 1).
					replace(/{{year}}/g, currentDate.getFullYear()).
					replace(/{{today}}/g, isToday && template.today.call(
						_this, displayedDay, currentDate) || '').
					replace(/{{event}}/g, eventCollection.length && template.event.call(
						_this, displayedDay, currentDate, eventCollection) || ''));

				if (isWeekNo) { // set back
					currentDate.setDate(currentDate.getDate() - 1);
				}
			}
			col.push(row.join(''));
		}

		return template.start.call(_this, currentMonth + 1, currentYear, weekNo).
				replace('{{days}}', options.renderDaysOfWeek ? _renderDaysOfWeek(options) : '') +
			col.join(template.colGlue) +
			template.end.call(_this, currentMonth + 1, currentYear, weekNo);
	}

	return Calendar;
}));

// datePicker.min.js
// https://github.com/PitPik/tinyDatePicker
/*! tinyDatePicker - v0.9.5 2017-07-01 */
(function (root, factory) { // 15.70 KB, 8.42 KB, 3.23 KB
	if (typeof exports === 'object') {
		module.exports = factory(root, require('calendar'));
	} else if (typeof define === 'function' && define.amd) {
		define('datePicker', ['calendar'], function (Calendar) {
			return factory(root, Calendar);
		});
	} else {
		root.DatePicker = factory(root, root.Calendar);
	}
}(this, function(window, Calendar, undefined) {
	'use strict';

	var DatePicker = function(elements, options) {
			this.options = {
				useCache: false,
				closeOnSelect: true,
				elements: [],
				body: document.body,

				pickerAttribute: 'data-picker',

				datePickerClass: 'date-picker',
				selectedDayClass: 'selected-day',
				disabledClass: 'disabled',
				initCallback: function(elements) {},
				renderCallback: function(container, element, toggled) {return true},
				renderValue: function(container, element, value) {return true},
				readValue: function(element) {
					return element.value;
				},

				header:
					'<div class="dp-title">' +
						'<button class="dp-prev" type="button"{{disable-prev}}>{{prev}}</button>' +
						'<button class="dp-next" type="button"{{disable-next}}>{{next}}</button>' +
						'<div class="dp-label dp-label-month">{{month}}' +
							'<select class="dp-select dp-select-month" tabindex="-1">' +
								'{{months}}' +
							'</select>' +
						'</div>' +
						'<div class="dp-label dp-label-year">{{year}}' +
							'<select class="dp-select dp-select-year" tabindex="-1">' +
								'{{years}}' +
							'</select>' +
						'</div>' +
					'</div>',
				nextLabel: 'Next month',
				prevLabel: 'Previous month',
				minDate: '1969-01-01',
				maxDate: '2050-12-31',
				minDateAttribute: 'data-mindate',
				maxDateAttribute: 'data-maxdate',
				// classes for event listeners
				nextButtonClass: 'dp-next',
				prevButtonClass: 'dp-prev',
				selectYearClass: 'dp-select-year',
				selectMonthClass: 'dp-select-month',
				footer:
					'<div class="dp-footer">' +
						'<div class="dp-label">{{hour}}' +
							'<select class="dp-select dp-select-hour" tabindex="-1">' +
								'{{hours}}' +
							'</select>' +
						'</div>' +
						'<div class="dp-label">{{minute}}' +
							'<select class="dp-select dp-select-minute" tabindex="-1">' +
								'{{minutes}}' +
							'</select>' +
						'</div>' +
						'<div class="dp-label">{{second}}' +
							'<select class="dp-select dp-select-second" tabindex="-1">' +
								'{{seconds}}' +
							'</select>' +
						'</div>' +
						'<div class="dp-label">{{am-pm}}' +
							'<select class="dp-select dp-select-am-pm" tabindex="-1">' +
								'{{am-pms}}' +
							'</select>' +
						'</div>' +
					'</div>',
				timeFormat: '',
				timeFormatAttribute:'data-timeformat',
				doAMPM: false,
				minuteSteps: 5,
				secondSteps: 10,
				AMPM: ['AM', 'PM'],
				// classes for event listeners
				selectHourClass: 'dp-select-hour',
				selectMinuteClass: 'dp-select-minute',
				selectSecondClass: 'dp-select-second',
				selectAMPMClass: 'dp-select-am-pm',

				rangeStartAttribute: 'data-from',
				rangeEndAttribute: 'data-to'
			}

			initDatePicker(this, elements || [], options || {});
		},
		initDatePicker = function(_this, elements, options) {
			var _toggle = function(e) { // toggle.bind(_this)
					toggle(_this, e);
				};

			options.elements = typeof elements === 'string' ?
				document.querySelectorAll(elements) : elements;

			for (var option in options) {
				_this.options[option] = options[option];
			}

			addEvent(window, 'resize', function(e) {
				_this.toggled = undefined;
				_this.isOpen && renderCallback(_this);
			}, false, _this);
			addEvent(_this.options.body, 'focus', _toggle, true, _this);
			addEvent(_this.options.body, 'click', _toggle, false, _this);

			_this.options.initCallback.call(_this, options.elements);
		};

	DatePicker.prototype.destroy = function() {
		removeEvents(this); // removes reliably 'all' event listeners in this instance
		this.datePicker && this.datePicker.parentNode.removeChild(this.datePicker);
		for (var item in this) {
			this[item] = null;
		}
	}

	DatePicker.prototype.toggle = function(on, element) {
		if (on && on.year !== undefined) {
			renderDatePicker(this, element || this.currentInput, on);
		} else {
			toggle(this, on ? {
				target: element || this.currentInput,
				type: 'focus'
			} : {});
		}
	}

	function toggle(_this, e) {
		var path = e.path || [{}],
			node = e.target,
			options = _this.options,
			id = 'datePicker';

		while(!e.path && node) { // in case e.path doesn't exist
			path.push(node); //  && node !== _this.datePicker
			node = node.parentNode;
		}

		if ([].indexOf.call(options.elements, e.target) !== -1) {
			if (_this.isOpen && e.type !== 'focus') return;
			if (!_this.datePicker) {
				_this.calendar = new Calendar(options);
				_this.calendar.picker = _this;
				_this.datePicker = installPicker(_this, options, _this.calendar);
			}
			_this.calendar.removeEvent(id);

			_this.date = getDateTime(_this, options, e.target);
			_this.isOpen = true;
			_this.toggled = _this.currentInput !== e.target;
			_this.currentInput = e.target;
			_this.currentPartner = getPartner(_this, e.target);
			_this.currentDate = getDateObject(assembleDate(_this.date)); // is new object

			addLimiters(_this, options, e.target, _this.currentPartner, id);
			renderDatePicker(_this, e.target, _this.date);
			_this.toggled = false;
		} else if (_this.isOpen && _this.datePicker && path.indexOf(_this.datePicker) === -1 &&
				path[path.length - 1].nodeType !== 1) { // FF
			_this.isOpen = false;
			_this.toggled = true;
			renderCallback(_this);
			_this.calendar.removeEvent(id);
			_this.currentInput = _this.currentPartner =
				_this.currentDate = _this.date = undefined;
		}
	}

	function getDateTime(_this, options, element) { // revisit
		var value = options.readValue.call(_this, element),
			date = getDateObject(value || getDateString(new Date(), true)),
			timeFormat = element.getAttribute(options.timeFormatAttribute),
			hasAMPM = false,
			isPM = false;

		timeFormat = timeFormat !== null ? timeFormat : options.timeFormat;
		if (!value && timeFormat) {
			hasAMPM = /\s+(?:A|P)M/.test(timeFormat);
			isPM = hasAMPM ? +date.hour >= 12 : undefined;
			date.second = /:SS/.test(timeFormat) ? date.second : undefined;
			date.AMPM = hasAMPM ? (isPM ? 'PM' : 'AM') : undefined;
			date.hour = hasAMPM && isPM ?
				lZ(+date.hour === 12 ? 12 : +date.hour - 12) : date.hour;
		} else if (!value && !timeFormat) {
			date.hour = undefined; // ignores time rendering
		}
		return date;
	}

	function addLimiters(_this, options, element, partner, id) {
		var values = [
				element.getAttribute(options.minDateAttribute) || options.minDate,
				element.getAttribute(options.maxDateAttribute) || options.maxDate,
				partner && partner.value.split(' ')[0]
			];

		values = values[2] ? sortDates(values[2],
				partner.hasAttribute(options.rangeStartAttribute) ?
				values[1] : values[0]) :
			values;

		_this.minDate = getDateObject(values[0]);
		_this.maxDate = getDateObject(values[1]);
		addDateLimiter(_this, undefined, values[0], id);
		addDateLimiter(_this, values[1], undefined, id);
	}

	function installPicker(_this, options, calendar) {
		var template = calendar.options.template,
			datePicker = options.body.appendChild(document.createElement('div'));

		template.row = template.row.replace(/<(.*?)>/, // extend template for picker
			'<$1 ' + options.pickerAttribute + '="{{year}}-{{month}}-{{day}}">');
		datePicker.className = options.datePickerClass;

		addEvent(datePicker, 'click', function(e) {
			onClick(_this, e);
		}, false, _this);
		addEvent(datePicker, 'change', function(e) {
			onChange(_this, e);
		}, false, _this);

		return datePicker;
	}

	function getMinMax(_this, date) {
		var minDate = _this.minDate,
			maxDate = _this.maxDate,
			dateValue = 0;

		date.minMonth = +date.year <= +minDate.year ? +minDate.month : 1;
		date.maxMonth = +date.year >= +maxDate.year ? +maxDate.month : 12;
		dateValue = +(date.year + date.month);
		date.isMinDate = dateValue <= +(minDate.year + minDate.month);
		date.isMaxDate = dateValue >= +(maxDate.year + maxDate.month);

		if (date.isMinDate) { // correct dates if exceeded
			date.year = minDate.year;
			date.month = minDate.month;
		} else if (date.isMaxDate) {
			date.year = maxDate.year;
			date.month = maxDate.month;
		}
		return date;
	}

	function renderDatePicker(_this, element, date) {
		var options = _this.options,
			calendar = _this.calendar,
			container = _this.datePicker,
			selectedDay = {};

		date = getMinMax(_this, date);

		container.innerHTML = (date.year ? options.header. // render top (month, year selection)
			replace('{{year}}', date.year).
			replace('{{years}}', getOptionsHTML(
				+_this.minDate.year, +_this.maxDate.year, date.year)).
			replace('{{month}}', calendar.options.months[(date.month) - 1]).
			replace('{{months}}',getOptionsHTML(
				date.minMonth, date.maxMonth, date.month, calendar.options.months, 1)).
			replace('{{day}}', date.day).
			replace('{{next}}', options.nextLabel).
			replace('{{prev}}', options.prevLabel).
			replace('{{disable-next}}', date.isMaxDate ? ' disabled=""' : '').
			replace('{{disable-prev}}', date.isMinDate ? ' disabled=""' : '') : '') +

		(!date.year || !date.day ? '' : // render month
			calendar.getMonth(date.year, date.month).html) +

		(date.hour && options.footer ? options.footer. // render bottom (time selection)
			replace('{{hour}}', date.hour).
			replace('{{hours}}', getOptionsHTML(
				0, options.doAMPM || date.AMPM ? 12 : 23, date.hour)).
			replace('{{minute}}', ' : ' + date.minute).
			replace('{{minutes}}', getOptionsHTML(
				0, 59, date.minute, null, null, options.minuteSteps)).
			replace('{{second}}', date.second ? ' : ' + date.second : '').
			replace('{{seconds}}', date.second ? getOptionsHTML(
				0, 59, date.second, null, null, options.secondSteps) : '').
			replace('{{am-pm}}', date.AMPM || '').
			replace('{{am-pms}}', date.AMPM ? getOptionsHTML(
				0, 1, options.AMPM.indexOf(date.AMPM), options.AMPM) : '') : '');
		// mark current date
		selectedDay = container.querySelector('[' + options.pickerAttribute + '="' +
			(assembleDate(_this.currentDate, true).replace(/-0/g, '-')) + '"]'); // fix lZ problem
		if (selectedDay) {
			selectedDay.className += ' ' + options.selectedDayClass;
		}
		renderCallback(_this);
	}

	function onClick(_this, e) {
		var options = _this.options,
			selectedDate = '',
			date = _this.date,
			day = e.target,
			prev = hasClass(e.target, options.prevButtonClass),
			next = prev ? false : hasClass(e.target, options.nextButtonClass);

		while(!prev && !next && day !== document.body) { // find data attribute
			if (selectedDate = day.getAttribute(options.pickerAttribute)) break;
			day = day.parentNode;
		}

		if (selectedDate && !hasClass(day, options.disabledClass)) { // days in calendar
			selectedDate = getDateObject(selectedDate);
			date.year = selectedDate.year;
			date.month = selectedDate.month;
			date.day = selectedDate.day;
			renderValue(_this);
			_this.toggle(!options.closeOnSelect);
		} else if (prev || next) { // UI buttons in header
			e.stopPropagation();

			date.month = +date.month + (prev ? -1 : next ? 1 : 0);
			date.year =
				date.month === 0 ? lZ(+date.year - 1) :
				date.month === 13 ? lZ(+date.year + 1) :
				date.year;
			date.month =
				date.month === 0 ? '12' :
				date.month === 13 ? '01' :
				lZ(date.month);
			if (!date.day) {
				renderValue(_this);
			}
			renderDatePicker(_this, _this.currentInput, date);
		}
	}

	function onChange(_this, e) {
		var date = _this.date,
			data = ['year', 'month', 'hour', 'minute', 'second', 'AMPM'],
			item = '';

		while ((item = data.shift()) && !hasClass(e.target, _this.options['select' +
			item.charAt(0).toUpperCase() + item.slice(1) + 'Class']));

		date[item] = item === 'AMPM' ? _this.options.AMPM[e.target.value] :
			lZ(e.target.value);

		if (/^(?:ho|mi|se|AM)/.test(item) || !date.day) {
			_this.currentDate[item] = date[item];
			renderValue(_this, assembleDate(!date.day ? _this.date : _this.currentDate));
		}
		renderDatePicker(_this, _this.currentInput, date);
	}

	function getPartner(_this, element) { // get element by same attr or name like attr
		var options = _this.options,
			fromTo = element.getAttribute(options.rangeStartAttribute) ||
				element.getAttribute(options.rangeEndAttribute),
			elements = document.querySelectorAll(
					'[' + options.rangeStartAttribute + '="' + fromTo + '"],' +
					'[' + options.rangeEndAttribute + '="' + fromTo + '"],' +
					'[name="' + fromTo + '"]');

		for (var n = elements.length; n--; ) {
			if (elements[n] && elements[n] !== element) {
				return elements[n];
			}
		}
	}

	/* ---------- some datePicker based helper functions ---------- */

	function renderValue(_this, value) {
		var _value = value || assembleDate(_this.date),
			element = _this.options.renderValue.call(_this, _this.datePicker,
				_this.currentInput, _value),
			_element = element && element.nodeType === 1 ? element : _this.currentInput;

		if (element) {
			_element.value = _value;
		}
	}

	function renderCallback(_this) {
		var element = _this.options.renderCallback.call(_this, _this.datePicker,
				_this.currentInput, _this.toggled),
			_element = element && element.nodeType === 1 ? element : _this.currentInput,
			bounds = {};

		if (element) {
			bounds = _element.getBoundingClientRect();

			_this.datePicker.style.cssText = !_this.isOpen ? 'display: none' :
				'left:' + (window.pageXOffset + bounds.left) + 'px;' +
				'top:' + (window.pageYOffset + _element.offsetHeight + bounds.top) + 'px;';
			};
	}

	function addDateLimiter(_this, start, end, element) {
		_this.calendar.addEvent({
			className: _this.options.disabledClass,
			type: _this.options.disabledClass,
			isLimiter: true,
			start: start ? addDays(_this, start, 1) : start,
			end : end ? addDays(_this, end, -1, true) : end
		}, element);
	}

	function addDays(_this, date, add, end) {
		date = _this.calendar.convertDateString(date, end);
		date.setDate(date.getDate() + add);
		return getDateString(date);
	}

	function sortDates(date1, date2) {
		return date1 < date2 ? [date1 || date2, date2] : [date2, date1];
	}

	function getDateObject(date) { // simple version
		date = ((date.indexOf('-') !== -1 ? '' : '--- ') + date).split(/(?:\s+|T)/);
		date[0] = date[0].split('-');
		date[1] = (date[1] || '').split(':');

		return {
			year: date[0][0],
			month: lZ(date[0][1]),
			day: lZ(date[0][2]),
			hour: lZ(date[1][0]), // add value if time is enabled
			minute: lZ(date[1][1]),
			second: lZ(date[1][2]),
			AMPM: date[2]
		}
	}

	function assembleDate(date, dateOnly) { // simple version
		return (
			(date.year ? (date.year + '-' + date.month +
				(date.day ?  '-' + date.day : '')) : '') +
			(date.hour && !dateOnly ? ((date.year ? ' ' : '') +
				date.hour + ':' + date.minute +
				(date.second ? ':' + date.second : '') +
				(date.AMPM ? ' ' + date.AMPM : '')) : ''));
	}

	function getDateString(date, time) {
		return date.getFullYear() + '-' + lZ(date.getMonth() + 1) + '-' +
			lZ(date.getDate()) + (time ? ' ' + date.toTimeString().split(' ')[0] : '');
	}

	function getOptionsHTML(n, m, compare, data, dataOffset, jump) {
		var option = [];

		for ( ; n <= m; n += jump || 1) {
			option.push('<option value="' + n + '"' +
				(+compare === n ? ' selected' : '') + '>' +
				(data ? data[n - (dataOffset || 0)] : n) +
				'</option>');
		}
		return option.join('');
	}

	/* ---------- some general helper functions ---------- */

	function addEvent(element, type, func, cap, _this) {
		addEvent.events = addEvent.events || [];
		addEvent.events.push({ // cache references for reliable removal
			e: element,
			t: type,
			f: func,
			c: cap,
			i: (_this || this)
		});

		element.addEventListener(type, func, cap);
	}

	function removeEvents(_this) { // remoces all events from instance or nameSpace
		for (var item = {}, n = (addEvent.events || []).length; n--; ) {
			item = addEvent.events[n];
			if (item.i === (_this || this)) {
				item.e.removeEventListener(item.t, item.f, item.c);
				addEvent.events.splice(n, 1);
			}
		}
	}

	function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
    }

	function lZ(dig) { // adds leading zero
		return dig ? (+dig + '').replace(/^(\d)$/, '0$1') : undefined;
	}

	return DatePicker;
}));
(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(root, require('jquery'), require('datePicker'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery', 'datePicker'], function (jQuery, DatePicker) {
            return factory(root, jQuery, DatePicker);
        });
    } else {
        factory(root, root.jQuery, root.DatePicker);
    }
}(this, function(window, $, DatePicker, undefined) {
    'use strict';

    // this is just a wrapper to use DatePicker as jQuery plugin
    $.fn.datePicker = function(options) {
        this.datePicker = new DatePicker(this, options); // .filter('*')

        return this;
    };
}));