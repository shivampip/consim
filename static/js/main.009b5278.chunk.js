(this.webpackJsonpcorvis=this.webpackJsonpcorvis||[]).push([[0],{68:function(e,t,a){e.exports=a(97)},74:function(e,t,a){},75:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(56),s=a.n(l),o=a(42),c=a.n(o),i=a(57),d=a(43),m=a(58),u=a(59),h=a(62),E=a(63),p=(a(74),a(75),a(24)),g=a(100),f=Object(g.a)().translate([-650,450]).scale(600),v=function(e){var t=0,a="purple";return"discharged"===e.event?(t=100,a="green"):"death"===e.event?(t=60,a="black"):(t=700,a="#302078"),r.a.createElement("div",null,r.a.createElement(p.ComposableMap,{className:"gmap",width:400,height:400,projection:f,"data-tip":""},r.a.createElement(p.Geographies,{geography:e.geoUrl},(function(n){return n.geographies.map((function(n){var l=n.properties.name,s=0,o=0,c=0,i=0;if(e.cdata){var d=e.cdata.filter((function(e){return e.loc===l}));d.length>0&&(s=d[0].confirmedCasesIndian+d[0].confirmedCasesForeign,o=d[0].deaths,c=d[0].discharged,i="discharged"===e.event?c/t:"death"===e.event?o/t:s/t)}return r.a.createElement(p.Geography,{key:n.rsmKey,geography:n,fill:a,fillOpacity:i,stroke:"#383838",strokeOpacity:"1",strokeWidth:".15",onMouseEnter:function(){e.setTooltipContent(r.a.createElement("div",{className:"tooltip"},r.a.createElement("p",{className:"country"},l),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"confirmed"},r.a.createElement("td",null,"Confirmed"),r.a.createElement("td",null,s)),r.a.createElement("tr",{className:"discharged"},r.a.createElement("td",null,"Discharged"),r.a.createElement("td",null,c)),r.a.createElement("tr",{className:"death"},r.a.createElement("td",null,"Death"),r.a.createElement("td",null,o))))))},onMouseLeave:function(){e.setTooltipContent("")},style:{default:{fill:{colFill:a},outline:"none"},hover:{fill:{colFill:a},stroke:"black",strokeWidth:"0.7",outline:"none"},pressed:{outline:"none"}}})}))}))))},w=a(60),y=a.n(w).a.create({baseURL:"https://api.rootnet.in/covid19-in/stats/history"}),b=a(61),N=a(30),C=function(e){console.log(e)},D=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[],count:0,day:"Click on buttons to start animation",row:null,tooktipData:"",event:"confirmed",isReady:!1,lastUpdated:""},e.animateNow=function(){setTimeout((function(){C("Next Animation");var t=e.state.data[e.state.count];if(void 0===t)return null;var a=t.day.split("-"),n=new Date(a[0],a[1]-1,a[2]),r=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).formatToParts(n),l=Object(d.a)(r,5),s=l[0].value,o=l[2].value,c=l[4].value,i="".concat(o,"-").concat(s,"-").concat(c);C(t),e.setState({count:e.state.count+1,row:t,day:i}),e.state.count<e.state.data.length?e.animateNow():e.state.count=0}),200)},e.showHope=function(){setTimeout((function(){C("Next Hope");var t=e.state.data[e.state.count],a=JSON.parse(JSON.stringify(t));if(0===e.state.count){C("Now Zero");for(var n=0;n<a.regional.length;n++)a.regional[n].confirmedCasesIndian=0,a.regional[n].confirmedCasesForeign=0,a.regional[n].deaths=e.state.data[e.state.data.length-1].summary.deaths,a.regional[n].discharged=e.state.data[e.state.data.length-1].summary.confirmedCasesIndian+e.state.data[e.state.data.length-1].summary.confirmedCasesForeign;a.summary.discharged=e.state.data[e.state.data.length-1].summary.confirmedCasesIndian+e.state.data[e.state.data.length-1].summary.confirmedCasesForeign,a.summary.deaths=e.state.data[e.state.data.length-1].summary.deaths,a.summary.confirmedCasesIndian=0,a.summary.confirmedCasesForeign=0}else{for(var r=0;r<a.regional.length;r++)a.regional[r].deaths=e.state.data[e.state.data.length-1].summary.deaths,a.regional[r].discharged=e.state.data[e.state.data.length-1].summary.confirmedCasesIndian+e.state.data[e.state.data.length-1].summary.confirmedCasesForeign-a.regional[r].discharged;a.summary.discharged=e.state.data[e.state.data.length-1].summary.confirmedCasesIndian+e.state.data[e.state.data.length-1].summary.confirmedCasesForeign-a.summary.confirmedCasesIndian-a.summary.confirmedCasesForeign,a.summary.deaths=e.state.data[e.state.data.length-1].summary.deaths}var l=new Date,s=e.state.data.length-e.state.count;l.setDate(l.getDate()+Math.floor(s/2));var o=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).formatToParts(l),c=Object(d.a)(o,5),i=c[0].value,m=c[2].value,u=c[4].value,h="We hope: ".concat(m,"-").concat(i,"-").concat(u);e.setState({count:e.state.count-1,row:a,day:h}),e.state.count>=0?e.showHope():e.state.count=e.state.data.length}),300)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get();case 2:(t=e.sent).data.success?(C("HISTORY FATCHED SUCCESS"),a=t.data.data,C(a),n=new Date(t.data.lastOriginUpdate),r=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear()+" "+n.getHours()+":"+n.getMinutes(),this.setState({data:a,isReady:!0,lastUpdated:r})):C(t.data),N.a.initialize("UA-161796753-1"),N.a.pageview("/corvis");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return C(this.state.row),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"titleD"},"COVID-19 SPREAD IN INDIA"),r.a.createElement("div",{className:"subtitleD"},"How this pandemic spread in our beautiful conuntry"),r.a.createElement("div",{className:"controlP"},r.a.createElement("button",{className:"confirmedB ".concat("confirmed"===this.state.event?"selected":null),onClick:function(t){e.state.event="confirmed",e.state.count=0,e.animateNow()}},"Confirmed"),r.a.createElement("button",{className:"dischargedB ".concat("discharged"===this.state.event?"selected":null),onClick:function(t){e.state.event="discharged",e.state.count=0,e.animateNow()}},"Recovered"),r.a.createElement("button",{className:"deathB ".concat("death"===this.state.event?"selected":null),onClick:function(t){e.state.event="death",e.state.count=0,e.animateNow()}},"Death")),r.a.createElement(v,{className:"gmap",geoUrl:"https://raw.githubusercontent.com/shivampip/faCorana/master/corvis/data/map/India_Official.json",cdata:this.state.row?this.state.row.regional:null,event:this.state.event,setTooltipContent:function(t){return e.setState({tooktipData:t})}}),r.a.createElement(b.a,{place:"top",backgroundColor:"white",effect:"float",border:!0,borderColor:"black"},this.state.tooktipData),r.a.createElement("div",{className:"instB"},r.a.createElement("i",null,"Last Updated: ",this.state.lastUpdated)),r.a.createElement("div",{className:"dayDiv"},this.state.day),r.a.createElement("table",{className:"dashboardT"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"confirmed"},"Confirmed"),r.a.createElement("th",{className:"discharged"},"Recovered"),r.a.createElement("th",{className:"death"},"Deaths")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.row?this.state.row.summary.confirmedCasesIndian+this.state.row.summary.confirmedCasesForeign:0),r.a.createElement("td",null,this.state.row?this.state.row.summary.discharged:0),r.a.createElement("td",null,this.state.row?this.state.row.summary.deaths:0)))),r.a.createElement("div",{className:"hopeWrapper"},r.a.createElement("button",{className:"hopeB",onClick:function(t){e.state.event="confirmed",e.state.count=e.state.data.length-1,N.a.event({category:"User",action:"Clicked Hope Button"}),e.showHope()}},r.a.createElement("span",{style:{color:"red"}},"\u2665\ufe0f")," Hope"),r.a.createElement("p",{className:"hopeT"},"The Hope button shows how the curve can be flatten by staying at home, maintain social distancing, hygiene and follow all quarantine guidelines."," ",r.a.createElement("i",null,"(This is not based on data or research. It is just an illustration)"))),r.a.createElement("div",{className:"tableHead"},"Useful Resources"),r.a.createElement("table",{className:"dashboardT resourceT"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"National Helpline No."),r.a.createElement("td",null,r.a.createElement("h4",null,"+91-11-23978046"))),r.a.createElement("tr",null,r.a.createElement("td",null,"National Helpline No."),r.a.createElement("td",null,r.a.createElement("h4",null,"1075"))),r.a.createElement("tr",null,r.a.createElement("td",null,"COVID-19 Tracker India"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.covid19india.org/"},"Link"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Statewise Helpline No."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf",target:"_blank"},"Download PDF"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Quarantine guidlines"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.mohfw.gov.in/pdf/SOPforqurantine.pdf"},"Download PDF"))),r.a.createElement("tr",null,r.a.createElement("td",null,"COVID-19 MyGov"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.mygov.in/covid-19/"},"Link"))),r.a.createElement("tr",null,r.a.createElement("td",null,"COVID-19 WHO"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"Link"))),r.a.createElement("tr",null,r.a.createElement("td",null,"WHO Whatsapp Helpline"),r.a.createElement("td",null,r.a.createElement("a",{href:"http://wa.me/41798931892?text=hi",target:"_blank"},"Chat"))),r.a.createElement("tr",null,r.a.createElement("td",null,"PM-CARES Fund Donation"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://pib.gov.in/PressReleseDetailm.aspx?PRID=1608851"},"Donate"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Myth Busters"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"},"Link"))),r.a.createElement("tr",null,r.a.createElement("td",null,"How to use Mask"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks",target:"_blank"},"Link"))))),r.a.createElement("div",{className:"banner"},"Stay Home, Stay Safe"),r.a.createElement("div",{className:"banner banner2"},"Prepare, But Don't Panic"),r.a.createElement("div",{className:"banner"},"Spread J\u2665\ufe0fy, Not COVID-19"),r.a.createElement("div",{className:"banner banner2"},"Thank You All The Doctors, Nurses & Emergency Workers"),r.a.createElement("div",{className:"creditD"},"Developed by"," ",r.a.createElement(N.a.OutboundLink,{eventLabel:"Show Shivam Profile",to:"https://github.com/shivampip",target:"_blank"},"Shivam Agrawal")),r.a.createElement("div",{className:this.state.isReady?null:"loadContainer"},r.a.createElement("div",{className:"loadT",style:{display:this.state.isReady?"none":"visible"}},"Loading...")))}}]),a}(r.a.Component);document.addEventListener("DOMContentLoaded",(function(){s.a.render(r.a.createElement(D,null),document.getElementById("root"))}))}},[[68,1,2]]]);
//# sourceMappingURL=main.009b5278.chunk.js.map