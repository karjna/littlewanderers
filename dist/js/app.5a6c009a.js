(function(t){function a(a){for(var s,o,r=a[0],l=a[1],c=a[2],u=0,v=[];u<r.length;u++)o=r[u],n[o]&&v.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(v.length)v.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},i=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034a":function(t,a,e){t.exports=e.p+"img/manhattan.8e44460c.png"},"034f":function(t,a,e){"use strict";var s=e("c21b"),n=e.n(s);n.a},"0673":function(t,a,e){"use strict";var s=e("bfaa"),n=e.n(s);n.a},1657:function(t,a,e){},1914:function(t,a,e){},"21bb":function(t,a,e){"use strict";var s=e("1914"),n=e.n(s);n.a},2656:function(t,a,e){"use strict";var s=e("1657"),n=e.n(s);n.a},2672:function(t,a,e){"use strict";var s=e("f8fa"),n=e.n(s);n.a},"2f33":function(t,a,e){t.exports=e.p+"img/interior.5d88646b.png"},"374c":function(t,a,e){"use strict";var s=e("b8b3"),n=e.n(s);n.a},"397b":function(t,a,e){t.exports=e.p+"img/heart.093336ce.png"},"3ecf":function(t,a,e){"use strict";var s=e("7286"),n=e.n(s);n.a},"464a":function(t,a,e){"use strict";var s=e("bcb5"),n=e.n(s);n.a},"4ffd":function(t,a,e){t.exports=e.p+"img/logo.a051eb0a.png"},"50d0":function(t,a,e){"use strict";var s=e("ea9c"),n=e.n(s);n.a},5452:function(t,a,e){"use strict";var s=e("f193"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("a026"),n=e("0701"),i=function(t){return t.isBroken?"/not-found":"home"===t.type?"/":"page"===t.type?"/page/"+t.uid:"/not-found"},o=e("36eb"),r=e.n(o),l=r.a.RichText.Elements,c=function(t,a,e,s){if(t===l.hyperlink){var n="",o=r.a.Link.url(a.data,i);if("Document"===a.data.link_type)n='<router-link to="'.concat(o,'">').concat(e,"</router-link>");else{var c=a.data.target?"target=\"'".concat(a.data.target,'\'" rel="noopener"'):"";n='<a href="'.concat(o,'" ').concat(c,">").concat(e,"</a>")}return n}if(t===l.image){var d='<img src="'.concat(a.url,'" alt="').concat(a.alt||"",'" copyright="').concat(a.copyright||"",'">');if(a.linkTo){var u=r.a.Link.url(a.linkTo,i);if("Document"===a.linkTo.link_type)d='<router-link to="'.concat(u,'">').concat(d,"</router-link>");else{var v=a.linkTo.target?'target="'.concat(a.linkTo.target,'" rel="noopener"'):"";d='<a href="'.concat(u,'" ').concat(v,">").concat(d,"</a>")}}var _=[a.label||"","block-img"];return d='<p class="'.concat(_.join(" "),'">').concat(d,"</p>"),d}return null},d=(e("4989"),e("ab8b"),e("2ead"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer")],1)}),u=[],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__links"},[e("router-link",{staticClass:"footer__link",attrs:{to:{name:"about"}}},[t._v("About")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"cats"}}},[t._v("Adopt")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"foster"}}},[t._v("Foster")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"tails"}}},[t._v("Happy Tails")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"volunteer"}}},[t._v("Volunteer")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"resources"}}},[t._v("Rescue Resources")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"donate"}}},[t._v("Donate")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"events"}}},[t._v("Adoption Events")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"shop"}}},[t._v("Shop")]),e("router-link",{staticClass:"footer__link",attrs:{to:{name:"contact"}}},[t._v("Contact")])],1),t._m(0)]),t._m(1),e("div",{staticClass:"modal fade",attrs:{id:"navModal",tabindex:"-1",role:"dialog","aria-labelledby":"navModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("router-link",{staticClass:"nav__link",attrs:{to:"about"}},[t._v("About")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"cats"}}},[t._v("Adopt")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"foster"}}},[t._v("Foster")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"tails"}}},[t._v("Happy Tails")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"volunteer"}}},[t._v("Volunteer")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"resources"}}},[t._v("Rescue Resources")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"donate"}}},[t._v("Donate")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"events"}}},[t._v("Adoption Events")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"shop"}}},[t._v("Shop")]),e("router-link",{staticClass:"nav__link",attrs:{to:{name:"contact"}}},[t._v("Contact")])],1)])])])])},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"float-right social-footer"},[e("span",{staticClass:"social-link__text"},[t._v("Follow us on social media: ")]),e("a",{staticClass:"social-link",attrs:{href:"",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})]),e("a",{staticClass:"social-link",attrs:{href:"https://www.instagram.com/littlewanderersnyc/?hl=en",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"subfooter text-right"},[e("div",{staticClass:"container"},[t._v("\n      © Little Wanderers NYC   • \n\n        Made with love by "),e("a",{attrs:{href:"http://karjna.co",target:"_blank"}},[t._v("karjna")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],f=e("1157"),m=e.n(f),p=m.a,h={name:"Footer",watch:{$route:function(){p("#navModal").modal("hide")}}},C=h,b=(e("3ecf"),e("2877")),g=Object(b["a"])(C,v,_,!1,null,null,null);g.options.__file="Footer.vue";var k=g.exports,w=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header",class:[t.isHome?"home":"interior"]},[s("NavModal"),t.isHome?t._e():s("router-link",{staticClass:"header__logo",attrs:{to:"/"}},[s("img",{attrs:{src:e("2f33"),alt:"Little Wanderers logo"}})]),s("div",{staticClass:"float-right"},[s("router-link",{staticClass:"header__link",attrs:{to:"donate"}},[t._v("Donate")]),s("router-link",{staticClass:"header__btn btn",attrs:{to:{name:"cats"}}},[t._v("Adopt")])],1)],1)},A=[],x=(e("7f7f"),function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)}),y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-inline-block"},[e("a",{staticClass:"hamburger",attrs:{"data-toggle":"modal","data-target":"#navModal"}},[e("i",{staticClass:"fas fa-bars"})])])}],E={name:"NavModal"},N=E,O=(e("50d0"),Object(b["a"])(N,x,y,!1,null,"e15753d8",null));O.options.__file="NavModal.vue";var T=O.exports,F={name:"Header",computed:{isHome:function(){return"home"==this.$route.name}},components:{NavModal:T}},P=F,R=(e("5452"),Object(b["a"])(P,w,A,!1,null,null,null));R.options.__file="Header.vue";var S=R.exports,D={name:"App",components:{Footer:k,Header:S}},B=D,H=(e("034f"),Object(b["a"])(B,d,u,!1,null,null,null));H.options.__file="App.vue";var j=H.exports,L=e("8c4f"),G=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("Not Found")])])}],Y={name:"NotFound"},I=Y,V=Object(b["a"])(I,G,M,!1,null,null,null);V.options.__file="NotFound.vue";var W=V.exports,J=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("Loading the Prismic's Preview...")])])}],U=(e("a481"),e("00e7")),z=e.n(U);s["a"].use(z.a);var Z={name:"Preview",beforeCreate:function(){var t=this,a=this.$route.query.token;this.$prismic.client.previewSession(a,this.$prismic.linkResolver,"/").then(function(e){t.$cookie.set(t.$prismic.previewCookie,a,{expires:"30m"}),window.location.replace(e)})}},q=Z,Q=Object(b["a"])(q,J,K,!1,null,null,null);Q.options.__file="Preview.vue";Q.exports;var X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container"},[t._m(1),e("div",{staticClass:"row "},[e("router-link",{staticClass:"btn mx-auto",attrs:{to:{name:"cats"}}},[t._v("Learn More")])],1)]),e("div",{staticClass:"adopt-section"},[t._m(2),e("div",{staticClass:"crosswalk"},[e("span",{staticClass:"crosswalk__link crosswalk__link--blank"}),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats"}}},[e("span",[t._v("All Cats")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"kitten"}}}},[e("span",[t._v("Kittens")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"adult"}}}},[e("span",[t._v("Adult Cats")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"senior"}}}},[e("span",[t._v("Senior Cats")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"bonded"}}}},[e("span",[t._v("Bonded Pairs")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"perfect"}}}},[e("span",[t._v("Perfectly Imperfect")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"felv"}}}},[e("span",[t._v("FELV+ / FIV+")])]),e("router-link",{staticClass:"crosswalk__link",attrs:{to:{name:"cats",query:{q:"special"}}}},[e("span",[t._v("Special Needs")])]),e("span",{staticClass:"crosswalk__link crosswalk__link--blank"})],1),e("div",{staticClass:"adopt-section__subtitle"},[t._v("\n      Please "),e("router-link",{attrs:{to:{name:"contact"}}},[t._v("contact us")]),t._v(" if you need help\n      finding the right cat for you. If you are interested\n      in "),e("b",[t._v("fostering")]),t._v(", please fill out an application "),e("router-link",{attrs:{to:{name:"foster"}}},[t._v("here")]),t._v(".\n    ")],1)]),t._m(3)])},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hero"},[s("img",{staticClass:"hero__logo",attrs:{src:e("4ffd"),alt:"Little Wanderers logo"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon",attrs:{src:e("c18e"),alt:"Grass icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("501c3 GRASSROOTS ORGANIZATION")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We are a non profit solely run with the help of volunteers")])])]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon",attrs:{src:e("034a"),alt:"New York icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("TOUGHEST NEW YORK NEIGHBORHOODS")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We rescue the neediest kittens and cats in New York City")])])]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon about-section__icon--heart ",attrs:{src:e("397b"),alt:"Heart icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("CARE FROM FOSTER FAMILIES")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We do not have a physical shelter & rely on fosters to care for our cats!")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",{staticClass:"adopt-section__header"},[t._v("Find Your "),e("span",[t._v("Wanderer")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"donate-section"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"courier donate-section__header"},[t._v("Donate")]),s("p",{staticClass:"donate-section__subtitle"},[t._v("Please consider donating to Little Wanderers NYC. We rely on donations for\nthe vetenary costs of our wonderful rescues. We also feed hundreds of feral cats across New York City.\nWe appreciate all of the support!")]),s("div",{staticClass:"donate-section__buttons"},[s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("e393"),alt:"Venmo"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("fd2e"),alt:"patreon"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("d3cf"),alt:"PayPal"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("e4d7"),alt:"GoFundme"}})])])])])}],tt={name:"Home"},at=tt,et=(e("21bb"),Object(b["a"])(at,X,$,!1,null,null,null));et.options.__file="Home.vue";var st=et.exports,nt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("prismic-edit-button",{attrs:{documentId:t.documentId}}),s("div",{staticClass:"cat__header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},t._l(t.fields.images,function(a,e){return s("div",{key:"reference-item-"+e,staticClass:"d-inline-block cat__profile-pic-container"},[0==e?s("div",{staticClass:"cat__profile-pic",style:{backgroundImage:"url('"+a.image.url+"')"}}):t._e(),0!==e?s("prismic-image",{staticClass:"d-none",attrs:{field:a.image}}):t._e()],1)})),s("div",{staticClass:"col-sm-8 position-relative"},[s("div",{staticClass:"cat__header-right"},[s("div",{staticClass:"cat__status"},[t._v("\n              "+t._s(t.fields.status)+"\n            ")]),s("h1",{staticClass:"cat__name"},[t._v("\n              "+t._s(t.$prismic.richTextAsPlain(t.fields.name))+"\n            ")])])])])])]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"stat__section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.gender,expression:"fields.gender"}],staticClass:"stat--large stat__gender"},[s("img",{staticClass:"stat__icon",attrs:{src:e("5b76"),alt:"Paw icon"}}),t._v(t._s(t.fields.gender)+"\n              ")])]),s("div",{staticClass:"col-sm-6"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.birthDate,expression:"fields.birthDate"}],staticClass:"stat--large stat__age"},[s("img",{staticClass:"stat__icon",attrs:{src:e("5f42"),alt:"Metrics icon"}}),s("isolateMoment",[t._v(t._s(t._f("moment")(t.fields.birthDate,"from",!0)))])],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.colorBreed.length>0,expression:"fields.colorBreed.length > 0"}],staticClass:"stat--large stat__breed"},[s("img",{staticClass:"stat__icon",attrs:{src:e("633d"),alt:"Award icon"}}),t._v(t._s(t.$prismic.richTextAsPlain(t.fields.colorBreed))+"\n              ")])])])]),s("div",{staticClass:"stat__section"},[s("h3",{staticClass:"stat__header"},[t._v("Health")]),s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.felv,expression:"fields.felv"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__felv"},[t._v("\n                "+t._s(t.fields.felv)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("FELV+")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.fiv,expression:"fields.fiv"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__fiv"},[t._v("\n                "+t._s(t.fields.fiv)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("FIV+")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.specialNeeds,expression:"fields.specialNeeds"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__special"},[t._v("\n                "+t._s(t.fields.specialNeeds)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("FELV+")])])])]),s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.vaccinated,expression:"fields.vaccinated"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__vaccinated"},[t._v("\n                "+t._s(t.fields.vaccinated)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("Vaccinations")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.vetted,expression:"fields.vetted"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__vetted"},[t._v("\n                "+t._s(t.fields.vetted)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("Vetted")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.neutered,expression:"fields.neutered"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__neutered"},[t._v("\n                "+t._s(t.fields.neutered)+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("Spay/Neuter")])])])])]),t.fields.goodCats||t.fields.goodDogs||t.fields.goodKids?s("div",{staticClass:"stat__section"},[s("h3",{staticClass:"stat__header"},[t._v("Behavior")]),s("div",{staticClass:"stat__label stat__label--top"},[t._v("This cat is good with:")]),s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.goodCats,expression:"fields.goodCats"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__goodCats"},[s("i",{class:t._f("behaviorFavicon")(t.fields.goodCats)}),s("span",{staticClass:"stat__label stat__label--inline"},[t._v("Cats")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.goodDogs,expression:"fields.goodDogs"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__goodDogs"},[s("i",{class:t._f("behaviorFavicon")(t.fields.goodDogs)}),s("span",{staticClass:"stat__label stat__label--inline"},[t._v("Dogs")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.goodKids,expression:"fields.goodKids"}],staticClass:"col-sm-4"},[s("div",{staticClass:"stat stat__goodKids"},[s("i",{class:t._f("behaviorFavicon")(t.fields.goodKids)}),s("span",{staticClass:"stat__label stat__label--inline"},[t._v("Kids")])])])])]):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.dateFound,expression:"fields.dateFound"}],staticClass:"stat__section"},[s("h3",{staticClass:"stat__header"},[t._v("Intake")]),s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fields.dateFound,expression:"fields.dateFound"}],staticClass:"col-sm-12"},[s("div",{staticClass:"stat stat__dateFound"},[t._v("\n                "+t._s(t._f("moment")(t.fields.dateFound,"MMMM DD, YYYY"))+"\n\n                "),s("div",{staticClass:"stat__label"},[t._v("Intake Date")])])])])])]),s("div",{staticClass:"col-sm-8"},[t.fields.bio?s("div",{staticClass:"bio"},[s("prismic-rich-text",{staticClass:"bio__text",attrs:{field:t.fields.bio}})],1):t._e(),t.fields.behavior.length>0?s("div",{staticClass:"behavior"},[s("div",{staticClass:"courier-header--dark-yellow text-center mt-5"},[t._v("Behavior Notes")]),s("prismic-rich-text",{staticClass:"behavior__text",attrs:{field:t.fields.behavior}})],1):t._e()])])])],1)},it=[];e("28a5");function ot(t){var a=t.split(" ");return"<span>"+a[0]+"</span> "+a[1]+" old"}s["a"].component("isolateMoment",{render:function(t){var a=ot(this.$slots.default[0].text);return t("div",{domProps:{innerHTML:a}})}});var rt={name:"Cat",data:function(){return{documentId:"",fields:{bio:null,birthDate:null,colorBreed:null,dateFound:null,felv:null,fiv:null,gender:null,images:null,instagrams:null,locationFound:null,name:null,uid:null,specialNeeds:null,status:null,goodCats:null,goodDogs:null,goodKids:null,vaccinated:null,vetted:null,neutered:null,behavior:null}}},methods:{getContent:function(t){var a=this;this.$prismic.client.getByUID("cats",t).then(function(t){console.log(t),t?(a.documentId=t.id,a.fields.bio=t.data.bio,a.fields.birthDate=t.data.birth_date,a.fields.colorBreed=t.data.color_breed,a.fields.dateFound=t.data.date_found,a.fields.felv=t.data.felv,a.fields.fiv=t.data.fiv,a.fields.gender=t.data.gender,a.fields.instagrams=t.data.instagrams,a.fields.locationFound=t.data.location_found,a.fields.name=t.data.name,a.fields.specialNeeds=t.data.special_needs,a.fields.status=t.data.status,a.fields.images=t.data.images,a.fields.goodCats=t.data.good_with_cats_,a.fields.goodDogs=t.data.good_with_dogs_,a.fields.goodKids=t.data.good_with_kids,a.fields.vaccinated=t.data.vaccinated,a.fields.vetted=t.data.vetted,a.fields.neutered=t.data.neutered,a.fields.behavior=t.data.behavior):a.$router.push({name:"not-found"})})}},filters:{behaviorFavicon:function(t){switch(t){case"Yes":return"far fa-check-circle";case"No":return"far fa-times-circle";default:return"far fa-question-circle"}}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,a,e){this.getContent(t.params.uid),e()}},lt=rt,ct=(e("c7bf"),Object(b["a"])(lt,nt,it,!1,null,null,null));ct.options.__file="Cat.vue";var dt=ct.exports,ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Adopt")]),e("div",{staticClass:"row"},t._l(t.cats,function(a,s){return e("div",{key:"cat-"+s,staticClass:"col-sm-4"},[e("div",{staticClass:"cats__profile"},[e("router-link",{staticClass:"cats__profile-pic",style:{backgroundImage:"url('"+a.data.images[0].image.url+"')"},attrs:{to:"/adopt/"+a.slugs[0]}}),e("router-link",{staticClass:"cats__name",attrs:{to:"/adopt/"+a.slugs[0]}},[t._v("\n         "+t._s(a.data.name[0].text)+"\n       ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.data.gender,expression:"item.data.gender"}],staticClass:"cats__details"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.data.gender,expression:"item.data.gender"}]},[t._v(t._s(a.data.gender))]),e("span",{directives:[{name:"show",rawName:"v-show",value:a.data.birth_date,expression:"item.data.birth_date"}]},[t._v(" • "+t._s(t._f("moment")(a.data.birth_date,"from",!0))+" old")])])],1)])}))])},vt=[],_t={name:"Cats",data:function(){return{cats:null}},methods:{getContent:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","cats")).then(function(a){console.log(a),a?t.cats=a.results:t.$router.push({name:"not-found"})})}},created:function(){this.getContent()},beforeRouteUpdate:function(t,a,e){this.getContent(),e()}},ft=_t,mt=(e("464a"),Object(b["a"])(ft,ut,vt,!1,null,null,null));mt.options.__file="Cats.vue";var pt=mt.exports,ht=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("h1",[t._v("About")]),s("p",{staticClass:"intro"},[t._v("Little Wanderers NYC is a 501c3 non-profit organization rescuing sick and injured cats from the five New York City boroughs. We run solely with the help of volunteers. We do not have a physical shelter location and rely on foster families to care for our cats.")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon",attrs:{src:e("c18e"),alt:"Grass icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("501c3 GRASSROOTS ORGANIZATION")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We are a non profit solely run with the help of volunteers")])])]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon",attrs:{src:e("034a"),alt:"New York icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("TOUGHEST NEW YORK NEIGHBORHOODS")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We rescue the neediest kittens and cats in New York City")])])]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"about-section text-center"},[s("img",{staticClass:"about-section__icon about-section__icon--heart ",attrs:{src:e("397b"),alt:"Heart icon"}}),s("h4",{staticClass:"about-section__header"},[t._v("CARE FROM FOSTER FAMILIES")]),s("p",{staticClass:"about-section__subtitle"},[t._v("We do not have a physical shelter & rely on fosters to care for our cats!")])])])]),s("p",{staticClass:"text-center display-4 my-4"},[t._v("In 2018, we rescued more than 650 cats!")]),s("p",{staticClass:"text-center intro mt-1 mb-5"},[t._v("We are excited to rescue more cats and up our adoption numbers for 2019!")]),s("div",{staticClass:"donate-section"},[s("div",{staticClass:"container"},[s("p",{staticClass:"donate-section__subtitle"},[t._v("Please consider donating to Little Wanderers NYC. We rely on donations for\nthe vetenary costs of our wonderful rescues. We also feed hundreds of feral cats across New York City.\nWe appreciate all of the support!")]),s("div",{staticClass:"donate-section__buttons"},[s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("e393"),alt:"Venmo"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("fd2e"),alt:"patreon"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("d3cf"),alt:"PayPal"}})]),s("a",{staticClass:"donate-btn",attrs:{href:"",target:"_blank"}},[s("img",{staticClass:"donate-btn--image",attrs:{src:e("e4d7"),alt:"GoFundme"}})])])])])])}],bt={name:"About",data:function(){return{cats:null}}},gt=bt,kt=(e("f26d"),Object(b["a"])(gt,ht,Ct,!1,null,null,null));kt.options.__file="About.vue";var wt=kt.exports,At=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Donate")])])}],yt={name:"Donate",data:function(){return{cats:null}}},Et=yt,Nt=(e("374c"),Object(b["a"])(Et,At,xt,!1,null,null,null));Nt.options.__file="Donate.vue";var Ot=Nt.exports,Tt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Contact")])])}],Pt={name:"Contact",data:function(){return{cats:null}}},Rt=Pt,St=(e("0673"),Object(b["a"])(Rt,Tt,Ft,!1,null,null,null));St.options.__file="Contact.vue";var Dt=St.exports,Bt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ht=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Adoption Events")])])}],jt={name:"Events",data:function(){return{cats:null}}},Lt=jt,Gt=(e("f6c3"),Object(b["a"])(Lt,Bt,Ht,!1,null,null,null));Gt.options.__file="Events.vue";var Mt=Gt.exports,Yt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Foster")])])}],Vt={name:"Foster",data:function(){return{cats:null}}},Wt=Vt,Jt=(e("2672"),Object(b["a"])(Wt,Yt,It,!1,null,null,null));Jt.options.__file="Foster.vue";var Kt=Jt.exports,Ut=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Rescue Resources")])])}],Zt={name:"Resources",data:function(){return{cats:null}}},qt=Zt,Qt=(e("f750"),Object(b["a"])(qt,Ut,zt,!1,null,null,null));Qt.options.__file="Resources.vue";var Xt=Qt.exports,$t=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},ta=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Happy Tails")])])}],aa={name:"Tails",data:function(){return{cats:null}}},ea=aa,sa=(e("2656"),Object(b["a"])(ea,$t,ta,!1,null,null,null));sa.options.__file="Tails.vue";var na=sa.exports,ia=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},oa=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h1",[t._v("Volunteer")])])}],ra={name:"Volunteer",data:function(){return{cats:null}}},la=ra,ca=(e("b0f9"),Object(b["a"])(la,ia,oa,!1,null,null,null));ca.options.__file="Volunteer.vue";var da=ca.exports;s["a"].use(L["a"]);var ua=new L["a"]({mode:"history",routes:[{path:"/",name:"home",component:st},{path:"/adopt",name:"cats",component:pt},{path:"/adopt/:uid",name:"cat",component:dt},{path:"/not-found",name:"not-found",component:W},{path:"/about",name:"about",component:wt},{path:"/donate",name:"donate",component:Ot},{path:"/contact",name:"contact",component:Dt},{path:"/adoption-events",name:"events",component:Mt},{path:"/foster",name:"foster",component:Kt},{path:"/rescue-resources",name:"resources",component:Xt},{path:"/happy-tails",name:"tails",component:na},{path:"/volunteer",name:"volunteer",component:da},{path:"*",redirect:{name:"not-found"}}]});s["a"].config.productionTip=!1,s["a"].use(n["a"],{endpoint:window.prismic.endpoint,linkResolver:i,htmlSerializer:c}),s["a"].use(e("2ead")),new s["a"]({router:ua,render:function(t){return t(j)}}).$mount("#app")},"5b76":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABGdBTUEAALGPC/xhBQAABT9JREFUSA2dlm1Mm1UUx22BQkFWeROiTpYMm6lxJjojTrdI4tAQv7gMnLZjAUkBdfPD5gf8MP22mLhsXxzvsACNBl3M1DUsEzudGGOMw5fNVnSZCdkE5KW8FIQW/J3C0zy7fejAm9yee/73nPM/995zbx/TbWto9fX1r5tMJufS0tIQsq6mpuaK6sacuampqRqZw9wP2HhUG71u0itG44aGhuPgxfSD9E0EboH8GQL3avZerzfR5/N9Dz4G1ofNEeSHtbW1L2k2qoxLDOk2gnyclpb2YHl5+Yw4s6rt4XC4LykpaVNVVdVfgmHnRfxDMqWiNzY2puJ3meFBsM8EU5tZBfQ6K3gMvVcjlTmXy/Ut4lgoFKoSnWN4GpFXXV1dJro0xkHECXqJ6EYtLjFZ3w95v+qYmJjYyty+FfwFpBu7JcVOtlwSN2xxifEYJmCu6llQUDAAfo/gyIcSEhJkF25q4Jl0OXPDFpfYbDb/QdZbVc+ioqIQ+KTb7c5gLhuCYdUGTBKLwTW7KHFLS0s+RbKTwsjWJlNTUz0QbO/o6LhTw0RSYHbEpMPhGEde47y3CK5vi4uLVSTu1mP6cYQYwocXFhauQXKU7of8NTFyOp2TZH5iZmZmCCxJc8TmAOMLK/ol5HMr44ggXjmDPCrf29bWtpECPE+fAh+RBYpR5DoB+jinw1Ts57K6YDDoJ9tD6G1ihMNXkNnB3kXuoT+ZkpKSUVFRMdHe3p4yNzf3Jwl+SowWVrqLfpQCzLNarbPT09PXCVGXnJzczOKe4iqey8rKspiam5tzUfzctzuERBpZFWA0ANFdXI0bgkHuRGyjhzMzM+vKysrmBZfGbtgg64VcFjIMaY3ccXzkLvcQ+5DYSQP7mbhvmtiKnPn5+StM5ixPLf9i8BEjD3i7Hu/u7k4YHx+/j1U/AH43Qa7DN2Cz2S6TTFizJZl7sfmJxKW6o1eN3e1hZ46bKysrRzC+AdETmpNInL5AFOoxiur50dHRflbXA76PgHbGDorr9NjY2G/E2I1f5PjAn8XmEz2pPK3ohfT+RAmMsaxK7mLESTBWYtWCiC6ZciSbwTl61wV9QJlnhY9jj2gsY1cc7IoJfVHmtOb3+/cz9nEMw1EiAsud+zo9Pb3SYrEssIJB9L1stVTkO4zfzs/PTykpKfmXsWGDyAyx7FSI7XyDnegj0Vy2e0F749EjdRO9xwTdKKuYmpq6CmkA55NCSvHtAHfxR5Ebj1QywW6R6i0hgV10KcTTyBGO4Cxbfwa9SCvW6IrFUVpXV9cG7q0Jg0Bra2s6hfcLAV8libj/r8vey78ku5XVfsnqHgHZAvnt7OLFlXrSmxqP2ba3yPamqja2jEXxO4J/Q+zMMhLdatWAArGwPQe4k8fUubXobHkTK30RcpuR/arEnLP87V2iAn81crwVxqv2NzZnIX/FyHZVYhxe5ozeN3JaK0ZttGK728jekJhttuJUaLfbzxk5rRXD/yK2j8qxqT6GxIFAYAOGAfnfVR3Wo6/4B7klqaqfITHv7iSGGR6PJ1l1WI/OP10aR2blSs6ofobEpaWlczgMDQ4OyvfU/26zs7PlHNmP8nKpQQyJMV7iySvmbf6A6yCPwLqbPCJcx5NcR/loiGkxL5feAtJinLvAzvDyvMfL87skpbdRx/hsZrcOg++FdMdq1zEusQSVTxWev/0Eq4TUhvwGeJTxBOMJwdDlIyIDfSdymn6KB+QUiV5lbNhuSax5EdTc2dmZzWeR/P1lcceFTL485LtMEhhnV77jz2RE/0Gg+avyPwG4lN8OjcbCAAAAAElFTkSuQmCC"},"5f42":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAHxJREFUSA3tlFEOABEQQ9m47JxojrsbPiVTNLO+6o+iMy+lls3h7i/aamYV6ccaMkTabPTMC3/PZZhO+DrSlt3CKrHphr2B6E32Yq4jlWF2pkpbpSoKAFvJSGl06aoYxlShYajBM0IK8TCikDLU4BkhhXgYcXzeu590xr4PKNYg2D0kgSMAAAAASUVORK5CYII="},"633d":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAABGdBTUEAALGPC/xhBQAABVZJREFUSA2VVmtI5FUUvzPjOM74dlXEbXw/SGED+xJpiGhobpAl+WGzTM1X0Gtr3S9B0YYsfWg3CHw/kRKTkkVUUEEMHx8KXHZLNN+mju9JbXSccf79zj//1/9/dhT2wsy959xzzu/cc3/3zKjYU4z6+vpnBUFIcDgcU+Xl5X8+hStTX2ZcW1urra6uvko2DQ0NyXa7/XFQUFADwP6oq6t7kfSNjY2h7e3tPrS+bKgu2kT21xD4oVartdhsNgPZ5eTksJCQEGYymVhPT88R9vU6ne5fq9XqqVarr5WVlT26KJ5LIJzEF+UxZ2RksJiYGLa3t8cAyLy8vHico6Mjdnx8zPz9/dns7CwbHBxk4eHhHtnZ2VZuJFu4LB1KE4xMLQRCg4LJQUin1+tFPa0lu7W1NSPJroabXNnZ2ak5ODioPzk5KUQp7PI9gDOUkG1vb7PAwEDxhCrVeUE0Go0D+3/h7h74+fm9kZeXdyr3VwCZzeYhOL+Un59PJ+B7h4eHrK+vj+3v74sgBObj48PS09NZQECAGK+kpERNdkj2VYvFUgXlbTkQXyNjFRgmwAjL84GLF0g/PT19rsQK9yLqAarQkz+IZIZScS1cwEkE3MvDra0tDg5WsaGhITHzuLg4rqdFdHQ0y8zMZF1dXYzspHHm/w/iOSQdzRyIBNS4cnR09Bh3RCLb3Nxknp6eLDY2VpSdvyIjI0W6kx0N8iN/MLbE2ZYDgdLRyOKX1NRUD3d3d9FuY2NDDOTsJJeld0U68ktLS/MAkTrxwMPldhwINX0rMTFRFRoayveJ0kSAywZYyry9vbkJASckJOhQziKuxIIDkRLvgDONZNCUra+vM5SCxCcG6alsZCcfIJDmwjvCy78HBmlHRkb+vyB4oq+x4OBgkdrOYCQT5dENRDsJaGBgwAZwLR75N5KO5vMXB6G5udkPbcWUlZWli4iIoH2GkorMoxJGRUWJwHSKyclJsVvk5uYyZC/aLi4usv7+fqvBYLhaUFCwIyov+mppafl1aWlJ8TZImJubE8bGxoTu7m5xJtl5kB9I8NhVbMWdwFHV1NR0uLu7K4SFhSlOS6ehz2VjdXVVwBNJdGWjAEIJBND8k4mJianl5WUb2GRPTk4muitA5YHwdoTh4WEr9cb5+XlP7LlsPQrWUQA4hAJwGWz7eGZm5k5HR8exPDBakVxkra2tpwsLC1+hJd1BRV6D7y0kG6gwgqDIFAZasOkROnFlaWnpAzKuqak5QOPUp6SkaEAAB4iwie4dkJSU5D4+Pm6H6FZRUcHjIMa3iOELXbEcTHEiZHQTGc1KIGQYHx/vD8b9BDYtrqysLIHORry32t7eXjt+EHtRASoXH25ubl8gxitorC9wJRYcCBvPAOg2TvOB3AAtxV5cXHwDP9dW7JeQjEQ+xMu/i48JP98WuT1sDyB/enp6Wk2/b9IeB4LTfWT3HX5XFqRNaUY5cpGlGf98hiQdfmHvA/hN6c+LpKcZdj9iMu/s7FRIehEI9/AyAj1vNBrvShtO8+dI4mu57uxBNsHvllwvrVGZ97H+sq2tLZh0KhzPHe+G/qNVwkmDLJPxCULgd1EWG05zHZdbhct9jhzkA50kBBWdAv3jioqKtqizQO6Bfx9i/Q7bTKyvwPcdNY53HUI0lPcw34DBDkB2sW6ioAB54jSkp1FYWGjC9AOC3wQ5dJh/g1yDGL6YPyMTfN7Gf794kZZ4C1fkvQmnMACIHsxHmKtQ8wQ4u2zhsA1DMpOw/R42ibDNxZoPOjUlxPnPd84WuOTXsfwZzu/BudF5Xy7DdhhyKqhtBJn+lu9J6/8ANrHupRUh09kAAAAASUVORK5CYII="},7286:function(t,a,e){},"9e18":function(t,a,e){},a628:function(t,a,e){},b0f9:function(t,a,e){"use strict";var s=e("e1f1"),n=e.n(s);n.a},b8b3:function(t,a,e){},bcb5:function(t,a,e){},bfaa:function(t,a,e){},c18e:function(t,a,e){t.exports=e.p+"img/grass.d4f939ad.png"},c21b:function(t,a,e){},c7bf:function(t,a,e){"use strict";var s=e("a628"),n=e.n(s);n.a},d3cf:function(t,a,e){t.exports=e.p+"img/paypal.65dccddd.png"},dcfd:function(t,a,e){},e1f1:function(t,a,e){},e393:function(t,a,e){t.exports=e.p+"img/venmo.34733e8e.png"},e4d7:function(t,a,e){t.exports=e.p+"img/gofundme.bca90cf3.png"},ea9c:function(t,a,e){},f193:function(t,a,e){},f26d:function(t,a,e){"use strict";var s=e("dcfd"),n=e.n(s);n.a},f6c3:function(t,a,e){"use strict";var s=e("9e18"),n=e.n(s);n.a},f750:function(t,a,e){"use strict";var s=e("f7ab"),n=e.n(s);n.a},f7ab:function(t,a,e){},f8fa:function(t,a,e){},fd2e:function(t,a,e){t.exports=e.p+"img/patreon.033b330d.png"}});
//# sourceMappingURL=app.5a6c009a.js.map