(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,g=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&g.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043c":function(t,e,a){t.exports=a.p+"img/3.3cd29435.png"},"14b3":function(t,e,a){t.exports=a.p+"img/5.c8e428c9.png"},"167f":function(t,e,a){t.exports=a.p+"img/10.102eca6f.png"},"17e5":function(t,e,a){"use strict";a("aa22")},1893:function(t,e,a){},"292e":function(t,e,a){var n={"./1.png":"9e66","./10.png":"167f","./2.png":"6055","./3.png":"043c","./4.png":"aa6c","./5.png":"14b3","./6.png":"f084","./7.png":"f980","./8.png":"be38","./9.png":"e429"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="292e"},"2aa9":function(t,e,a){},3931:function(t,e,a){"use strict";a("d055")},"4eb3":function(t,e,a){"use strict";a("1893")},"4efb":function(t,e,a){t.exports=a.p+"img/scorpion.f9ae6a92.svg"},"528e":function(t,e,a){t.exports=a.p+"img/taur.8100f8a3.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-wrapper"},[e("div",{staticClass:"container"},["start"===t.currentPage?e("StartPage",{on:{"next-page":t.onNextPage}}):t._e(),"test"===t.currentPage?e("TestPage",{on:{"next-page":t.onNextPage}}):t._e(),"calculate"===t.currentPage?e("CalculatePage",{on:{"next-page":t.onNextPage}}):t._e(),"result"===t.currentPage?e("ResultPage",{attrs:{city:t.city},on:{"next-page":t.onNextPage}}):t._e()],1),!t.footerObj||"start"!==t.currentPage&&"result"!==t.currentPage?t._e():e("Footer",{attrs:{currentPage:t.currentPage,footer:t.footerObj,footerGeo:t.footerGeo}})],1)},r=[],i=function(){var t=this,e=t._self._c;return e("div",{ref:"start-wrapper",staticClass:"start-page__wrapper"},[e("div",{staticClass:"content-start"},[e("LogoBlock"),e("h1",{staticClass:"start-page__title"},[t._v("Ta reda på hur 2024 kommer att förändra våra liv!")]),e("p",{staticClass:"start-page__intro"},[t._v(" För de flesta människor blir det ett bra år, men för vissa kommer det att vara utmanande i alla avseenden. Det är mycket viktigt att använda det nya årets potential på rätt sätt ! ")]),e("p",{staticClass:"start-page__start-block"},[t._v(" Ange ditt kön: "),e("span",{staticClass:"start-page__start-btns"},[e("button",{staticClass:"btn start-btn start-btn--female",on:{click:function(e){return t.onNextPage(!1)}}},[t._v(" Kvinna ")]),e("button",{staticClass:"btn start-btn",on:{click:function(e){return t.onNextPage(!0)}}},[t._v(" Man ")])])])],1),e("div",{staticClass:"online"},[t._v(" Användare online: "),e("span",[t._v(t._s(t.usersOnline))])])])},o=[];a("14d9");function l({timing:t,draw:e,duration:a}){let n=performance.now();return new Promise(s=>{requestAnimationFrame((function r(i){let o=(i-n)/a;o>1&&(o=1);let l=t(o);e(l),o<1?requestAnimationFrame(r):s()}))})}function c(t,e=1.7){return Math.pow(t,2)*((e+1)*t-e)}function u(t){return Math.pow(t,3)}function d(t){return function(e){return 1-t(1-e)}}function g(t){return function(e){return t(1-e)}}var p=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-block"},[e("img",{staticClass:"logo",attrs:{src:a("856f"),width:"65",alt:"logo"}}),e("p",{staticClass:"logo-entice"},[t._v("Ta reda på vad som väntar dig 2024")])])}],h={name:"LogoBlock"},f=h,v=(a("babb"),a("2877")),b=Object(v["a"])(f,p,m,!1,null,null,null),_=b.exports,k={components:{LogoBlock:_},methods:{animationNextPage(){let t=this.$refs["start-wrapper"];return l({duration:300,timing:c,draw:e=>{t.style.transform=`translateX(${-300*e}%)`}})},onNextPage(t){this.animationNextPage().then(()=>{t?window.dataLayer.push({event:"click_Man"}):window.dataLayer.push({event:"click_Woman"}),this.$emit("next-page","test")})}},computed:{usersOnline(){return 103+Math.floor(173*Math.random())}}},C=k,x=(a("be24"),Object(v["a"])(C,i,o,!1,null,"1a29c944",null)),w=x.exports,y=function(){var t=this,e=t._self._c;return e("div",{ref:"test-wrapper",staticClass:"test-page__wrapper"},[e("div",{staticClass:"test-page__navigation"},[e("button",{staticClass:"btn test-page__back-btn",attrs:{"data-nav":"back"},on:{click:t.changeQuestOrChangePage}}),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",style:{width:t.barWidth+"%"}})])]),e("div",{staticClass:"test-page__inner"},[e("h3",{staticClass:"test-page__quest"},[t._v(" "+t._s(t.quest.question)+" ")]),t.quest.isDateOfBirth?t._e():e("ul",{staticClass:"test-page__answers-list list"},t._l(t.quest.answers,(function(a,n){return e("li",{key:a,staticClass:"test-page__answers-item"},[e("button",{staticClass:"test-page__answers-btn btn",class:{active:t.selectedAnswer===n},on:{click:function(e){return t.pickAnswer(n)}}},[t._v(" "+t._s(a)+" ")])])})),0),t.quest.isDateOfBirth?e("ul",{staticClass:"test-page__date-of-birth-list list"},[e("li",{staticClass:"test-page__date-of-birth-item"},[e("select",{staticClass:"select",attrs:{"data-date":"dayOfBirth"},on:{change:t.onSelectChange}},[e("option",{key:"0",attrs:{disabled:"",selected:"",hidden:""}},[t._v("Dag")]),t._l(t.generateArr(1,31),(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])}))],2)]),e("li",{staticClass:"test-page__date-of-birth-item"},[e("select",{staticClass:"select",attrs:{"data-date":"monthOfBirth"},on:{change:t.onSelectChange}},[e("option",{key:"0",attrs:{disabled:"",selected:"",hidden:""}},[t._v("Månad")]),t._l(t.generateArr(1,12),(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])}))],2)]),e("li",{staticClass:"test-page__date-of-birth-item"},[e("select",{staticClass:"select",attrs:{"data-date":"yearOfBirth"},on:{change:t.onSelectChange}},[e("option",{key:"0",attrs:{disabled:"",selected:"",hidden:""}},[t._v("År")]),t._l(t.generateArr(1940,(new Date).getFullYear()),(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])}))],2)])]):t._e(),t.zodiak&&t.quest.isDateOfBirth?e("div",{staticClass:"test-page__zodiak-block"},[e("img",{staticClass:"test-page__zodiak-image",attrs:{src:a("6214")("./"+t.zodiak.img)}}),e("h3",{staticClass:"test-page__zodiak-title"},[t._v(" "+t._s(t.zodiak.name)+" ")])]):t._e(),e("button",{ref:"submit-btn",staticClass:"btn test-page__submit-btn",attrs:{"data-nav":"next"},on:{click:t.changeQuestOrChangePage}},[t._v(" Nästa ")])])])},O=[],P=[{id:1,question:"Vilken är din favoritårstid?",answers:["Vinter","Vår","Sommar","Höst"]},{id:2,question:"Har du ett eget lyckonummer?",answers:["Ja","Nej"]},{id:3,question:"Vad irriterar dig mest? ",answers:["Människor som alltid är sena","Oförskämda personer","Obeslutsamma personer"]},{id:4,question:"Vilket liv skulle du vilja ha om 5 år?",answers:["Gift och med barn","Resa runt i världen","Ha en framgångsrik karriär"]},{id:5,question:"Skicka in ditt födelsedatum:",isDateOfBirth:!0}],N=[{name:"Väduren",img:"berbec.svg",id:1},{name:"Oxe",img:"taur.svg",id:2},{name:"Tvilling",img:"gemeni.svg",id:3},{name:"Kräftan",img:"rac.svg",id:4},{name:"Lejonet",img:"leo.svg",id:5},{name:"Jungfrun",img:"fecioara.svg",id:6},{name:"Vågen",img:"balanta.svg",id:7},{name:"Skorpion",img:"scorpion.svg",id:8},{name:"Skytten",img:"sagetator.svg",id:9},{name:"Stenbocken",img:"capricorn.svg",id:10},{name:"Vattumannen",img:"varsator.svg",id:11},{name:"Fiskar",img:"pesti.svg",id:12}];const j=g(u);var B={data(){return{currentQuestIndex:0,delayOfChangeQuest:300,checkedAnswers:{},dayOfBirth:null,monthOfBirth:null,yearOfBirth:null,zodiak:null}},methods:{generateArr(t,e){let a=new Array(e-t+1).fill(0);return a.map((e,a)=>t+a)},pickAnswer(t){this.checkedAnswers={...this.checkedAnswers,[this.quest.id]:t}},changeQuestOrChangePage(t){let e=t.target.closest(".btn"),a="back"===e.dataset.nav,n=a?"+":"-";if(e.classList.add("blocked"),"undefined"===typeof this.selectedAnswer&&!a)return e.classList.add("error"),void setTimeout(()=>{e.classList.remove("error"),e.classList.remove("blocked")},1500);let s=this.$refs["test-wrapper"];const r=(t,e)=>l({duration:300,timing:e,draw:e=>{s.style.transform=`translateX(${t}${300*e}%)`}});setTimeout(()=>{r(n,u).then(()=>{if(this.currentQuestIndex!==P.length-1||a){if(a){if(0===this.currentQuestIndex)return void this.$emit("next-page","start");this.currentQuestIndex=this.currentQuestIndex-1}else this.currentQuestIndex=this.currentQuestIndex+1;r(n,j).then(()=>{s.style.transform="",e.classList.remove("blocked")})}else setTimeout(()=>{this.$emit("next-page","calculate")},this.delayOfChangeQuest)})},this.delayOfChangeQuest)},onSelectChange(t){let e=t.target.closest("select"),a=e.dataset.date;a&&(this[a]=+e.value,this.zodiak=this.getZodiak(),this.pickAnswer(this.zodiak))},getZodiak(){let t;if(this.dayOfBirth&&this.monthOfBirth&&this.yearOfBirth){switch(this.monthOfBirth){case 1:t=this.dayOfBirth<20?10:11;break;case 2:t=this.dayOfBirth<19?11:12;break;case 3:t=this.dayOfBirth<21?12:1;break;case 4:t=this.dayOfBirth<20?1:2;break;case 5:t=this.dayOfBirth<21?2:3;break;case 6:t=this.dayOfBirth<21?3:4;break;case 7:t=this.dayOfBirth<23?4:5;break;case 8:t=this.dayOfBirth<23?5:6;break;case 9:t=this.dayOfBirth<23?6:7;break;case 10:t=this.dayOfBirth<23?7:8;break;case 11:t=this.dayOfBirth<22?8:9;break;case 12:t=this.dayOfBirth<22?9:10;break}return N[t-1]}}},computed:{selectedAnswer(){return this.checkedAnswers[this.quest.id]},questionsLength(){return P.length},quest(){return P[this.currentQuestIndex].isDateOfBirth&&window.dataLayer.push({event:"click_date_page"}),P[this.currentQuestIndex]},barWidth(){let t=Math.ceil(100/this.questionsLength)*(this.currentQuestIndex+1);return t>100&&(t=100),t}}},D=B,M=(a("17e5"),Object(v["a"])(D,y,O,!1,null,"e0ab6bd6",null)),L=M.exports,S=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",domProps:{innerHTML:t._s("start"===t.currentPage?t.footer.main_footer[t.footerGeo]:t.footer.second_footer[t.footerGeo])}})},A=[],T={props:["currentPage","footer","footerGeo"]},q=T,I=Object(v["a"])(q,S,A,!1,null,null,null),Q=I.exports,$=function(){var t=this,e=t._self._c;return e("div",{ref:"calculate-wrapper",staticClass:"calculate-page__wrapper"},[e("h3",{staticClass:"calculate-page__title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"bar"},[e("div",{ref:"progress",staticClass:"progress"})]),e("ul",{staticClass:"calculate-page__list list"},t._l(t.calculates,(function(a,n){return e("li",{key:n,staticClass:"calculate-page__item"},[n===t.currentCalculateIndex||a.done?e("p",{staticClass:"calculate-page__item-text"},[t._v(" "+t._s(a.text)+" ")]):t._e(),a.done?e("p",{staticClass:"calculate-page__beat"},[t._v(" "+t._s(t.beat)+" ")]):t._e()])})),0),t.showDoneMessage?e("p",{staticClass:"calculate-page__done-message"},[t._v(" "+t._s(t.doneMessage)+" ")]):t._e()])},E=[],G={title:"Dina uppgifter håller på att behandlas:",beat:" Resultatet är klart!",calculates:[{text:"Analys av ett personligt horoskop. . . . . . . ",done:!1},{text:"Rättelse av ett stjärntecken. . . . . . .",done:!1},{text:"Beräkning av svarsvariation. . . . . . .",done:!1},{text:"Generering av förutsägelser. . . . . . . ",done:!1},{text:"Spara resultatet. . . . . . . ",done:!1}],doneMessage:"Slutfört!"};const F=d(u);var z={data(){return{title:G.title,doneMessage:G.doneMessage,calculates:G.calculates,beat:G.beat,currentCalculateIndex:0,showDoneMessage:!1}},methods:{animationChangePage(){let t=this.$refs["calculate-wrapper"];return l({duration:700,timing:u,draw:e=>{t.style.transform=`translateX(${-300*e}%)`}})},animationProgressOrChangePage(){let t=this.$refs.progress,e=100/this.calculates.length;setTimeout(()=>{l({duration:1e4,timing:F,draw:a=>{let n=100*a;n>=e*(this.currentCalculateIndex+1)&&(this.calculates[this.currentCalculateIndex].done=!0,this.currentCalculateIndex=this.currentCalculateIndex+1),t.style.width=n+"%"}}).then(()=>{this.showDoneMessage=!0,setTimeout(()=>{this.animationChangePage().then(()=>{this.$emit("next-page","result")})},800)})},100)}},mounted(){this.animationProgressOrChangePage()}},J=z,V=(a("3931"),Object(v["a"])(J,$,E,!1,null,"301d344a",null)),R=V.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-page__wrapper"},[e("LogoBlock"),e("p",{staticClass:"result-page__welcome-text"},[t._v("Tack för dina svar!")]),e("h3",{staticClass:"result-page__title"},[t._v(" Grattis! Du kan lyssna på ditt personliga horoskop just nu! ")]),e("p",{staticClass:"result-page__attention-block"},[e("span",{staticClass:"result-page__attention-text"},[t._v("Uppmärksamhet!")]),t._v(" Du måste lyssna på inspelningen för att undvika problem och otur i det nya året. Tillgången är tillgänglig i endast 10 minuter för "),e("span",{staticClass:"result-page__attention-text"},[t._v(" "+t._s(t.city)+" ")]),t._v(". Ta reda på hur du kan skydda dig själv och dina nära och kära. Hur du förbättrar din ekonomiska situation och hälsa ")]),e("p",{staticClass:"timer"},[t._v(" På grund av ett högt besöksflöde kommer inspelningen att raderas om "),e("span",[t._v(" "+t._s(t.time))])]),[e("CallButton",{attrs:{phoneNumber:t.phoneNumber,eventName:"click_Call_1"},on:{sendClick:t.sendClick,getPhoneNumber:t.getPhoneNumber}}),t._l(t.comments,(function(a,n){return e("div",{key:n+"comment"},[e("Comment",{attrs:{name:a.name,avatar:a.avatar,text:a.text,date:a.date}}),4===n?e("CallButton",{attrs:{phoneNumber:t.phoneNumber,eventName:"click_Call_2"},on:{sendClick:t.sendClick,getPhoneNumber:t.getPhoneNumber}}):t._e()],1)}))],e("CallButton",{attrs:{phoneNumber:t.phoneNumber,eventName:"click_Call_3"},on:{sendClick:t.sendClick,getPhoneNumber:t.getPhoneNumber}})],2)},U=[],W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment"},[e("div",{staticClass:"comment__avatar"},[e("img",{attrs:{src:a("292e")("./"+t.avatar),alt:"Avatar"}})]),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__body-person"},[t._v(t._s(t.name))]),e("div",{staticClass:"comment__body-date"},[t._v(t._s(t.date))]),t._v(" "+t._s(t.text)+" ")])])},Y=[],X={name:"Comments",props:["avatar","name","text","date"]},K=X,Z=(a("4eb3"),Object(v["a"])(K,W,Y,!1,null,"3b8f69e4",null)),tt=Z.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-btn"},[t.phoneNumber?t._e():e("button",{directives:[{name:"metrics",rawName:"v-metrics"}],staticClass:"result-page__callBtn callBtn btn",on:{click:t.emitGetPhoneNumber}},[t._v(" Ring och lyssna! ")]),t.phoneNumber?e("a",{staticClass:"result-page__callBtn btn",attrs:{href:"tel:"+t.phoneNumber},on:{click:t.emitSendClick}},[t._v(" Ring och lyssna! ")]):t._e(),e("div",{staticClass:"circle"},[t._v("24/7")])])},at=[],nt={name:"CallButton",props:["phoneNumber","eventName"],methods:{analytics(){window.dataLayer.push({event:""+this.eventName})},emitGetPhoneNumber(){this.analytics(),this.$emit("getPhoneNumber")},emitSendClick(){this.analytics(),this.$emit("sendClick")}}},st=nt,rt=(a("5bf4"),Object(v["a"])(st,et,at,!1,null,null,null)),it=rt.exports,ot=a("5a0c"),lt=a.n(ot),ct=(a("8ef1"),{data(){return{comments:[{avatar:"1.png",name:"Emma",text:"Tack så mycket för informationen om min framtid! Allt var så exakt!!",date:this.setCommentDate(0)},{avatar:"2.png",name:"Elsa",text:"Du har bokstavligen räddat mitt äktenskap) Nu har du fått en ny stamkund!",date:this.setCommentDate(1)},{avatar:"3.png",name:"Maja",text:"Jag får vänta och se om framtidsprognoserna besannas eller inte, men när det gäller det förflutna var allting verkligen korrekt!",date:this.setCommentDate(2)},{avatar:"4.png",name:"Alice",text:"Det visar sig att det inte är så illa för mig. Jag var bara tvungen att vara uppmärksam på vissa datum)",date:this.setCommentDate(3)},{avatar:"5.png",name:"Ella",text:"Tack, jag kommer att följa alla rekommendationer!",date:this.setCommentDate(4)},{avatar:"6.png",name:"Wilma",text:"Jag vill inte skryta, men pengasituationen har förbättrats inom en vecka, allt tack vare dig) Jag är så tacksam!",date:this.setCommentDate(5)},{avatar:"7.png",name:"Ebba",text:"Det här är otroligt! Alla händelserna kom samman som pusselbitar, och en av förutsägelserna har redan gått i uppfyllelse!",date:this.setCommentDate(6)},{avatar:"8.png",name:"William",text:"Tja, de sa att jag skulle klara mig, även om jag redan visste det själv, oavsett förutsägelserna.",date:this.setCommentDate(7)},{avatar:"9.png",name:"Olivia",text:"Sådana människor är en välsignelse. Tack vare dig kunde jag hålla mitt barn i säkerhet.",date:this.setCommentDate(8)},{avatar:"10.png",name:"Julia",text:"Astrologen förutspådde min befordran! Intervjun gick smidigt och nu är jag den nya chefen för personalavdelningen.",date:this.setCommentDate(9)}]}},methods:{setCommentDate(t){return lt.a.locale("se"),lt()().add(-t,"day").format("YYYY.MM.DD.")}}}),ut={components:{LogoBlock:_,Comment:tt,CallButton:it},mixins:[ct],props:["city"],data(){return{phoneNumber:null,defaultPhoneNumber:"09391976",time:""}},methods:{fmtMSS(t){return(t-(t%=60))/60+(9<t?":":":0")+t},timeExpire(){let t=600;this.time=this.fmtMSS(t);let e=setInterval(()=>{0==t?clearInterval(e):(this.time=this.fmtMSS(t),t--)},1e3)},sendClick(){window.mbp&&window.mbp.pixel.send("cta")},createLink(t){let e=document.createElement("a");e.href="tel:"+t,e.style.display="none",document.body.appendChild(e),e.click()},getPhoneNumber(){this.sendClick(),window.mbp?window.mbp.pixel.send("phone").then(t=>{this.phoneNumber=t.replace(/46/g,"0"),this.createLink(this.phoneNumber)}).catch(()=>{this.phoneNumber=this.defaultPhoneNumber,this.createLink(this.phoneNumber)}):(this.phoneNumber=this.defaultPhoneNumber,this.createLink(this.phoneNumber))}},mounted(){window.dataLayer.push({event:"click_last_page"}),this.timeExpire()}},dt=ut,gt=(a("6c26"),Object(v["a"])(dt,H,U,!1,null,"13aaeb06",null)),pt=gt.exports,mt={name:"App",components:{StartPage:w,TestPage:L,CalculatePage:R,ResultPage:pt,Footer:Q},data(){return{currentPage:"start",footerObj:null,footerGeo:null,city:null}},methods:{onNextPage(t){this.currentPage=t},getFooter(){window.mbp&&window.mbp.pixel.send("footer").then(t=>{t.data&&(this.footerObj=t.data,this.footerGeo=Object.keys(this.footerObj.main_footer)[0])})}},mounted(){window.addEventListener("load",()=>{window.mbp&&window.mbp.pixel.send("click").then(()=>{this.getFooter(),window.mbp.pixel.send("geo","sv").then(t=>{this.city=t.city})})})}},ht=mt,ft=(a("aff3"),Object(v["a"])(ht,s,r,!1,null,null,null)),vt=ft.exports;const bt=n["a"].directive("metrics",{bind:function(t){t.onclick=function(){}}});var _t=bt;n["a"].use(_t),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(vt)}).$mount("#app")},"5b99":function(t,e,a){t.exports=a.p+"img/capricorn.33a4bd90.svg"},"5bf4":function(t,e,a){"use strict";a("9862")},6055:function(t,e,a){t.exports=a.p+"img/2.1f1e5f2d.png"},6214:function(t,e,a){var n={"./balanta.svg":"a90e","./berbec.svg":"7650","./capricorn.svg":"5b99","./fecioara.svg":"6df9","./gemeni.svg":"cc4e","./leo.svg":"7283","./pesti.svg":"65e3","./rac.svg":"ba02","./sagetator.svg":"70e8","./scorpion.svg":"4efb","./taur.svg":"528e","./varsator.svg":"9930"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="6214"},"65e3":function(t,e,a){t.exports=a.p+"img/pesti.e0ddb211.svg"},"6c26":function(t,e,a){"use strict";a("db06")},"6df9":function(t,e,a){t.exports=a.p+"img/fecioara.890298fd.svg"},"70e8":function(t,e,a){t.exports=a.p+"img/sagetator.1cdb5613.svg"},7283:function(t,e,a){t.exports=a.p+"img/leo.fa016a63.svg"},7650:function(t,e,a){t.exports=a.p+"img/berbec.f23042b8.svg"},"856f":function(t,e,a){t.exports=a.p+"img/logo.74442309.png"},9862:function(t,e,a){},9930:function(t,e,a){t.exports=a.p+"img/varsator.328e2ded.svg"},"9e66":function(t,e,a){t.exports=a.p+"img/1.43a581ba.png"},a90e:function(t,e,a){t.exports=a.p+"img/balanta.800001bf.svg"},aa22:function(t,e,a){},aa6c:function(t,e,a){t.exports=a.p+"img/4.9112fd21.png"},aff3:function(t,e,a){"use strict";a("2aa9")},ba02:function(t,e,a){t.exports=a.p+"img/rac.7cf12f4d.svg"},babb:function(t,e,a){"use strict";a("fe78")},be24:function(t,e,a){"use strict";a("e30c")},be38:function(t,e,a){t.exports=a.p+"img/8.29dfa087.png"},cc4e:function(t,e,a){t.exports=a.p+"img/gemeni.87086b19.svg"},d055:function(t,e,a){},db06:function(t,e,a){},e30c:function(t,e,a){},e429:function(t,e,a){t.exports=a.p+"img/9.18edc443.png"},f084:function(t,e,a){t.exports=a.p+"img/6.a778ea2f.png"},f980:function(t,e,a){t.exports=a.p+"img/7.a5f08c84.png"},fe78:function(t,e,a){}});