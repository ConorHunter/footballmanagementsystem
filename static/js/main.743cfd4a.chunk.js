(this["webpackJsonpfootball-management-system"]=this["webpackJsonpfootball-management-system"]||[]).push([[0],{27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=a(15),u=(a(32),a(33),a(34),a(2)),m=a(12),o=a(4),s=a(5),d=a(1),p=a(7),E=a(6),b=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).formSubmit=e.formSubmit.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"formSubmit",value:function(e){e.preventDefault();var t=e.target,a=t.elements.name.value,n=t.elements.position.value,l=t.elements.number.value,r=t.elements.age.value;this.props.addSquad(a,n,l,r),t.reset()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.formSubmit},l.a.createElement("input",{id:"name",type:"text",defaultValue:"",placeholder:"Name..."}),l.a.createElement("input",{id:"position",type:"text",defaultValue:"",placeholder:"Position..."}),l.a.createElement("input",{id:"number",type:"number",defaultValue:"",placeholder:"Number..."}),l.a.createElement("input",{id:"age",type:"text",placeholder:"Age..."}),l.a.createElement("input",{type:"submit",value:"submit"}))}}]),a}(n.Component),h=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={squad:[]},n.addSquad=n.addSquad.bind(Object(d.a)(n)),n.deleteSquad=n.deleteSquad.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"addSquad",value:function(e,t,a,n){this.setState((function(l){return{squad:[].concat(Object(m.a)(l.squad),[{name:e,position:t,number:a,age:n}])}}))}},{key:"deleteSquad",value:function(e){var t=this;return function(){t.setState((function(t){return{squad:t.squad.filter((function(t){return t.name!==e}))}}))}}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Squad"),l.a.createElement(b,{addSquad:this.addSquad}),l.a.createElement("table",{id:"football"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Player Name"),l.a.createElement("th",null,"Player Position"),l.a.createElement("th",null,"Squad Number"),l.a.createElement("th",null,"Age"))),l.a.createElement("tbody",null,this.state.squad.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",{contentEditable:"true"},t.name),l.a.createElement("td",{contentEditable:"true"},t.position),l.a.createElement("td",{contentEditable:"true"},t.number),l.a.createElement("td",{contentEditable:"true"},t.age," "),l.a.createElement("td",null,l.a.createElement("button",{onClick:e.deleteSquad(t.name)},"Delete")))})))))}}]),a}(n.Component),f=a(11),v=a.n(f),y=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){n.setState({tactics:e.target.value})},n.state={tactics:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{id:"tacticstitle"},this.state.tactics," Team Tactics"),l.a.createElement("div",{class:"form-dropdown"},l.a.createElement("label",{id:"kitcolourlabel"},"Kit Colour"),l.a.createElement("select",{id:"kitcolour",onChange:"setPicture();"},l.a.createElement("option",{value:"/images/footballkit.PNG"},"Red"),l.a.createElement("option",{value:"/images/footballkit2.PNG"},"Blue"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"yellow"},"Yellow"),l.a.createElement("option",{value:"white"},"White"))),l.a.createElement("div",{class:"boxwhite"}," "),l.a.createElement("div",{class:"form-team"},l.a.createElement("label",{id:"teamnamelabel"},"Team Name"),l.a.createElement("input",{type:"text",class:"form-team",placeholder:"Enter Team Name",onChange:this.myChangeHandler})),l.a.createElement("img",{id:"footballpitch",src:"/images/footballpitch.PNG"}),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player1"},l.a.createElement("img",{src:"/images/footballkit2.PNG"}),l.a.createElement("input",{id:"player1text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player2"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player2text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player3"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player3text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player4"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player4text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player5"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player5text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player6"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player6text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player7"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player7text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player8"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player8text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player9"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player9text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player10"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player10text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"player11"},l.a.createElement("img",{src:"/images/footballkit.PNG"}),l.a.createElement("input",{id:"player11text",type:"text",placeholder:"Click to edit",class:"playerInput",maxlength:"50"}))),l.a.createElement("div",null,l.a.createElement("label",{id:"teaminstructionslabel"},"Team Instructions"),l.a.createElement("textarea",{id:"teaminstructions",rows:"10",cols:"50",placeholder:"Enter Team Instructions here"})))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).formSubmit=e.formSubmit.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"formSubmit",value:function(e){e.preventDefault();var t=e.target,a=t.elements.date.value,n=t.elements.venue.value,l=t.elements.type.value,r=t.elements.notes.value;this.props.addSchedule(a,n,l,r),t.reset()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.formSubmit},l.a.createElement("input",{id:"date",type:"date",defaultValue:"",placeholder:"Date..."}),l.a.createElement("input",{id:"venue",type:"text",defaultValue:"",placeholder:"Venue..."}),l.a.createElement("input",{id:"type",type:"text",defaultValue:"",placeholder:"Type..."}),l.a.createElement("input",{id:"notes",type:"text",defaultValue:"",placeholder:"Notes..."}),l.a.createElement("input",{type:"submit",value:"submit"}))}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={schedule:[]},n.addSchedule=n.addSchedule.bind(Object(d.a)(n)),n.deleteSchedule=n.deleteSchedule.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"addSchedule",value:function(e,t,a,n){this.setState((function(l){return{schedule:[].concat(Object(m.a)(l.schedule),[{date:e,venue:t,type:a,notes:n}])}}))}},{key:"deleteSchedule",value:function(e){var t=this;return function(){t.setState((function(t){return{schedule:t.schedule.filter((function(t){return t.date!==e}))}}))}}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Schedule"),l.a.createElement(g,{addSchedule:this.addSchedule}),l.a.createElement("table",{id:"football"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{filterkey:"date"},"Date"),l.a.createElement("th",{filterkey:"task"},"Venue"),l.a.createElement("th",{filterkey:"venue"},"Task Type"),l.a.createElement("th",{filterkey:"notes"},"Additional Notes"))),l.a.createElement("tbody",null,this.state.schedule.map((function(t){return l.a.createElement("tr",{key:t.date},l.a.createElement("td",{contentEditable:"true"},t.date),l.a.createElement("td",{contentEditable:"true"},t.venue),l.a.createElement("td",{contentEditable:"true"},t.type),l.a.createElement("td",{contentEditable:"true"},t.notes),l.a.createElement("td",null,l.a.createElement("button",{onClick:e.deleteSchedule(t.date)},"Delete")))})))))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).formSubmit=e.formSubmit.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"formSubmit",value:function(e){e.preventDefault();var t=e.target,a=t.elements.date.value,n=t.elements.name.value,l=t.elements.type.value,r=t.elements.place.value;this.props.addTraining(a,n,l,r),t.reset()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.formSubmit},l.a.createElement("input",{id:"date",type:"date",defaultValue:"",placeholder:"Date..."}),l.a.createElement("input",{id:"name",type:"text",defaultValue:"",placeholder:"Name..."}),l.a.createElement("input",{id:"type",type:"text",defaultValue:"",placeholder:"Type..."}),l.a.createElement("input",{id:"place",type:"text",defaultValue:"",placeholder:"Place..."}),l.a.createElement("input",{type:"submit",value:"submit"}))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={training:[]},n.addTraining=n.addTraining.bind(Object(d.a)(n)),n.deleteTraining=n.deleteTraining.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"addTraining",value:function(e,t,a,n){this.setState((function(l){return{training:[].concat(Object(m.a)(l.training),[{date:e,name:t,type:a,place:n}])}}))}},{key:"editTraining",value:function(e,t,a,n){this.setState((function(l){return{training:[].concat(Object(m.a)(l.training),[{date:e,name:t,type:a,place:n}])}}))}},{key:"deleteTraining",value:function(e){var t=this;return function(){t.setState((function(t){return{training:t.training.filter((function(t){return t.date!==e}))}}))}}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{className:"App"},l.a.createElement("nav",{class:"navbar navbar-expand navbar-light fixed-top"},l.a.createElement("div",{class:"container"},l.a.createElement("img",{className:"logo",src:"/images/footballMS.PNG"}),l.a.createElement("div",{class:"collapse navbar-collapse"},l.a.createElement("ul",{class:"navbar-nav ml-auto"})))),l.a.createElement("h3",null,"Training"),l.a.createElement(k,{addTraining:this.addTraining}),l.a.createElement("table",{id:"football"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Training Name"),l.a.createElement("th",null,"Training Type"),l.a.createElement("th",null,"Training Place"))),l.a.createElement("tbody",null,this.state.training.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",{contentEditable:"true"},t.date),l.a.createElement("td",{contentEditable:"true"},t.name),l.a.createElement("td",{contentEditable:"true"},t.type),l.a.createElement("td",{contentEditable:"true"},t.place),l.a.createElement("td",null,l.a.createElement("button",{onClick:e.deleteTraining(t.date)},"Delete")))})))))}}]),a}(n.Component),O=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).formSubmit=e.formSubmit.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"formSubmit",value:function(e){e.preventDefault();var t=e.target,a=t.elements.date.value,n=t.elements.opposition.value,l=t.elements.type.value,r=t.elements.scoreline.value;this.props.addFixture(a,n,l,r),t.reset()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.formSubmit},l.a.createElement("input",{id:"date",type:"date",defaultValue:"",placeholder:"Date..."}),l.a.createElement("input",{id:"opposition",type:"text",defaultValue:"",placeholder:"Opposition..."}),l.a.createElement("input",{id:"type",type:"text",defaultValue:"",placeholder:"Type..."}),l.a.createElement("input",{id:"scoreline",type:"text",defaultValue:"",placeholder:"Scoreline..."}),l.a.createElement("input",{type:"submit",value:"submit"}))}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fixture:[]},n.addFixture=n.addFixture.bind(Object(d.a)(n)),n.deleteFixture=n.deleteFixture.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"addFixture",value:function(e,t,a,n){this.setState((function(l){return{fixture:[].concat(Object(m.a)(l.fixture),[{date:e,opposition:t,type:a,scoreline:n}])}}))}},{key:"deleteFixture",value:function(e){var t=this;return function(){t.setState((function(t){return{fixture:t.fixture.filter((function(t){return t.date!==e}))}}))}}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{className:"App"},l.a.createElement("nav",{class:"navbar navbar-expand navbar-light fixed-top"},l.a.createElement("div",{class:"container"},l.a.createElement("img",{className:"logo",src:"/images/footballMS.PNG"}),l.a.createElement("div",{class:"collapse navbar-collapse"},l.a.createElement("ul",{class:"navbar-nav ml-auto"})))),l.a.createElement("h3",null,"Fixtures"),l.a.createElement(O,{addFixture:this.addFixture}),l.a.createElement("table",{id:"football"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{onClick:function(t){return e.onSort(t,"date")}},"Date"),l.a.createElement("th",{onClick:function(t){return e.onSort(t,"opposition")}},"Opposition"),l.a.createElement("th",null,"Match Type"),l.a.createElement("th",null,"Scoreline"))),l.a.createElement("tbody",null,this.state.fixture.map((function(t){return l.a.createElement("tr",{key:t.opposition},l.a.createElement("td",{contentEditable:"true"},t.date),l.a.createElement("td",{contentEditable:"true"},t.opposition),l.a.createElement("td",{contentEditable:"true"},t.type),l.a.createElement("td",{contentEditable:"true"},t.scoreline),l.a.createElement("td",null,l.a.createElement("button",{onClick:e.deleteFixture(t.date)},"Delete")))})))))}}]),a}(n.Component);var N=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{class:"App"},l.a.createElement("nav",{class:"navbar navbar-expand navbar-light fixed-top"},l.a.createElement("div",{class:"container"},l.a.createElement(i.b,{class:"navbar-brand",to:"/squad"},l.a.createElement("img",{className:"logo",src:"/images/footballMS.PNG"})),l.a.createElement("div",{class:"collapse navbar-collapse"},l.a.createElement("ul",{class:"navbar-nav ml-auto"})))),l.a.createElement("nav",{class:"nav"},l.a.createElement("a",{href:"/squad",class:"nav__link"},l.a.createElement("i",{class:"material-icons nav__icon"},"people"),l.a.createElement("span",{class:"nav__text"},"Squad")),l.a.createElement("a",{href:"/tactics",class:"nav__link nav__link"},l.a.createElement("i",{class:"material-icons nav__icon"},"sports_soccer"),l.a.createElement("span",{class:"nav__text"},"Tactics")),l.a.createElement("a",{href:"/training",class:"nav__link nav__link"},l.a.createElement("i",{class:"material-icons nav__icon"},"fitness_center"),l.a.createElement("span",{class:"nav__text"},"Training")),l.a.createElement("a",{href:"fixtures",class:"nav__link"},l.a.createElement("i",{class:"material-icons nav__icon"},"calendar_today"),l.a.createElement("span",{class:"nav__text"},"Fixtures")),l.a.createElement("a",{href:"schedule",class:"nav__link"},l.a.createElement("i",{class:"material-icons nav__icon"},"event_note"),l.a.createElement("span",{class:"nav__text"},"Schedule"))),l.a.createElement("div",{class:"wrapper"},l.a.createElement("div",{class:"inner"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:h}),l.a.createElement(u.a,{path:"/squad",component:h}),l.a.createElement(u.a,{path:"/tactics",component:y}),l.a.createElement(u.a,{path:"/training",component:S}),l.a.createElement(u.a,{path:"/fixtures",component:j}),l.a.createElement(u.a,{path:"/schedule",component:x}),l.a.createElement(u.a,{path:"*",component:function(){return"404 NOT FOUND"}}))))))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.743cfd4a.chunk.js.map