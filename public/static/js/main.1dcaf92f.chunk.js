(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{40:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(33),o=n.n(i),r=n(10),l=n(3),u=n(4),h=n(6),j=n(5),d=(n(40),n(7)),b=n(17),p=n(9),m=n.n(p),g=new(function(){function e(){Object(l.a)(this,e),this.auth=m.a.create({baseURL:"https://barcelona-bigmouths.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e,t){return this.auth.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),O=c.a.createContext(),x=O.Consumer,v=O.Provider,f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n){g.signup(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){g.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,s=e.user,c=this.signup,i=this.login,o=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(v,{value:{isLoggedIn:t,isLoading:n,user:s,signup:c,login:i,logout:o},children:this.props.children})}}]),n}(c.a.Component),y=function(e){return function(t){Object(h.a)(s,t);var n=Object(j.a)(s);function s(){return Object(l.a)(this,s),n.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsx)(x,{children:function(n){var s=n.isLoggedIn,c=n.isLoading,i=n.user,o=n.signup,r=n.login,l=n.logout;return Object(a.jsx)(e,Object(b.a)(Object(b.a)({},t.props),{},{isLoggedIn:s,isLoading:c,user:i,signup:o,login:r,logout:l}))}})}}]),s}(c.a.Component)},S=y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(r.b,{to:"/",id:"home-btn",children:Object(a.jsx)("h4",{children:"Home"})}),this.props.isLoggedIn?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:this.props.logout,children:"Logout"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(r.b,{to:"/login",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)(r.b,{to:"/signup",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})]})}}]),n}(s.Component)),N=(n(63),n(8)),C=n.p+"static/media/big-mouth-logo.df4f8776.png";var E=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("img",{className:"logo",src:C,alt:"Barcelona Bigmouths"}),Object(a.jsx)("h1",{children:"Language Exchange made easy"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(N.a,{className:"login-button",href:"/login",variant:"primary",size:"lg",block:!0,children:"LOG IN \u2192"}),Object(a.jsx)(N.a,{className:"signup-button",href:"/signup",size:"lg",block:!0,children:"SIGN UP \u2192"})]})]})},I=n(14),k=(n(64),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.signup(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(I.a)({},a,s))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{className:"sign-up-page",children:[Object(a.jsx)("h1",{className:"title",children:"SIGN UP"}),Object(a.jsxs)("form",{className:"sign-up",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{className:"labels",children:"USERNAME"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"inpoot",type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"labels",children:"PASSWORD"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"inpoot",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{className:"signup-button",type:"submit",value:"Signup",children:"SIGN UP \u2192"})]}),Object(a.jsxs)("div",{className:"call",children:[Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(r.b,{className:"login",to:"/login",children:" Log in"})]})]})}}]),n}(s.Component))),L=(n(65),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.login(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(I.a)({},a,s))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{className:"login-page",children:[Object(a.jsx)("h1",{className:"title",children:"LOG IN"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{className:"labels",children:"USERNAME"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"inpoot",type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"labels",children:"PASSWORD"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"inpoot",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{className:"login-buttonZ",type:"submit",value:"Login",children:"LOG IN \u2192"})]})]})}}]),n}(s.Component))),A=(n(66),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.sex,s=t.topics,c=t.level,i=t.language;m.a.post("".concat("https://barcelona-bigmouths.herokuapp.com","/api/homepage"),{sex:n,topics:s,level:c,language:i},{withCredentials:!0}).then((function(){return a.props.history.push("/mybuddies")})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){console.log(e.target.value);var t=e.target,n=t.name,s=t.value;a.setState(Object(I.a)({},n,s))},a.state={sex:"",topics:"",level:"",language:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"aboutme",children:[Object(a.jsxs)("h1",{children:["WELCOME ",Object(a.jsx)("u",{children:this.props.user&&this.props.user.username})]}),Object(a.jsx)("h2",{className:"tell-us",children:"Tell us more about yourself."}),Object(a.jsx)("div",{className:"table",children:Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{for:"sex",children:"SEX: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"sex",name:"sex",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"I'm a male man ",children:" I'm a male man"}),Object(a.jsx)("option",{value:"I'm a female lady",children:"I'm a female lady"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"topics",children:"TOPICS THAT INTEREST ME: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"topics",name:"topics",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"Sports",children:"Sports"}),Object(a.jsx)("option",{value:"The Arts",children:"The Arts"}),Object(a.jsx)("option",{value:"Politics",children:"Politics"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"level",children:"MY LEVEL: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"level",name:"level",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"Elementary",children:"Elementary"}),Object(a.jsx)("option",{value:"Intermediate",children:"Intermediate"}),Object(a.jsx)("option",{value:"Advanced",children:"Advanced"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"language",children:"LANGUAGE: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"language",name:"language",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"I'm Spanish looking for English",children:"Spanish seeking English"}),Object(a.jsx)("option",{value:"I'm English looking for Spanish",children:"English seeking Spanish"})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{className:"button",variant:"primary",type:"submit",children:"SUBMIT \u2192"})]})})]})}}]),n}(s.Component))),w=(n(67),n.p+"static/media/blankavatar.158eb650.png"),M=y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getMyBuddies=function(){m.a.get("".concat("https://barcelona-bigmouths.herokuapp.com","/api/matchpage"),{withCredentials:!0}).then((function(e){console.log(e),a.setState({listOfBuddies:e.data})}))},a.getOneBuddy=function(){m.a.get("".concat("https://barcelona-bigmouths.herokuapp.com","/api/matchpage/").concat(a.props.user._id),{withCredentials:!0}).then((function(e){console.log("hahahahahaahah",e),a.setState({userInfo:e.data})}))},a.state={listOfBuddies:[],userInfo:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMyBuddies(),this.getOneBuddy()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"mybuddies",children:[Object(a.jsx)("h1",{children:"YOUR MATCHES"}),this.state.listOfBuddies.map((function(t){return Object(a.jsx)("div",{children:e.state.userInfo.level===t.level&&e.state.userInfo.sex===t.sex?Object(a.jsx)("div",{className:"grid",children:Object(a.jsx)(r.b,{to:"/buddydetail/".concat(t._id),children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("img",{className:"avatar",src:w}),Object(a.jsxs)("li",{className:"username",children:[" ",t.username]})]})})}):null})})),Object(a.jsx)(N.a,{href:"/EditProfile",className:"mybuddiesbutton",children:"EDIT PROFILE \u2192"})]})}}]),n}(s.Component)),D=(n(68),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={oneBud:{},isSaved:!1,mate:{}},e.handleSave=function(){var t=e.props.user._id,n=e.props.match.params.id;console.log("Checking ids",t,n),m.a.put("".concat("https://barcelona-bigmouths.herokuapp.com","/api/buddy/").concat(n,"/").concat(t),{withCredentials:!0}).then((function(t){console.log(t),e.setState({isSaved:!0})}))},e.handleConversation=function(){var t=e.props.user._id,n=e.state.oneBud._id;m.a.post("".concat("https://barcelona-bigmouths.herokuapp.com","/api/createconvo/").concat(t,"/").concat(n),{withCredentials:!0}).then((function(t){console.log(t,"hdhdhdhdhdhdhdhdhdhd"),e.props.history.push("/messageboard/".concat(t.data._id))}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;m.a.get("".concat("https://barcelona-bigmouths.herokuapp.com","/api/matchpage/").concat(t),{withCredentials:!0}).then((function(t){e.setState({oneBud:t.data})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"buddy-detail",children:[Object(a.jsx)("h1",{children:"YOUR MATCH"}),Object(a.jsx)("img",{className:"avatar",src:w}),Object(a.jsx)("h5",{className:"subs",children:"NAME:"}),Object(a.jsx)("div",{className:"info",children:this.state.oneBud.username})," ",Object(a.jsx)("br",{}),Object(a.jsx)("h5",{className:"subs",children:"INTERESTED IN:"}),Object(a.jsx)("div",{className:"info",children:this.state.oneBud.topics}),"  ",Object(a.jsx)("br",{}),Object(a.jsx)("h5",{className:"subs",children:"LANGUAGE:"}),Object(a.jsx)("div",{className:"info",children:this.state.oneBud.language}),"  ",Object(a.jsx)("br",{}),this.state.isSaved?Object(a.jsx)(N.a,{className:"buttons",children:"SAVED"}):Object(a.jsx)(N.a,{onClick:this.handleSave,children:"SAVE TO MY BUDDIES"})," ",Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{onClick:this.handleConversation,children:"SEND A MESSAGE"}),Object(a.jsx)("br",{}),Object(a.jsx)(r.b,{to:"/mybuddieslist/".concat(this.props.user._id),children:"VIEW MY BUDDIES"})]})}}]),n}(s.Component))),B=(n(69),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getMyBuddiesList=function(){m.a.get("".concat("https://barcelona-bigmouths.herokuapp.com","/api/mybuddypage/").concat(a.props.match.params.id),{withCredentials:!0}).then((function(e){console.log(e.data),a.setState({listOfBuddies:e.data})}))},a.handleDelete=function(e){m.a.delete("".concat("https://barcelona-bigmouths.herokuapp.com","/api/buddy/").concat(e,"/user/").concat(a.props.user._id),{withCredentials:!0}).then((function(e){console.log(e),a.getMyBuddiesList()}))},a.state={listOfBuddies:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMyBuddiesList()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"my-buddies-list",children:[Object(a.jsx)("h1",{className:"heading",children:"YOUR BUDDIES"}),this.state.listOfBuddies.buddyId&&this.state.listOfBuddies.buddyId.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(r.b,{to:"/buddydetail/".concat(t._id),children:Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("img",{className:"avatar",src:w}),Object(a.jsxs)("li",{children:[" ",t.username]})]})}),Object(a.jsx)(N.a,{className:"delete",onClick:function(){e.handleDelete(t._id)},children:"DELETE"})]})}))]})}}]),n}(s.Component))),T=(n(70),y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormEdit=function(e){e.preventDefault();var t=a.state,n=t.sex,s=t.topics,c=t.level,i=t.language;m.a.put("".concat("https://barcelona-bigmouths.herokuapp.com","/api/user/edit"),{sex:n,topics:s,level:c,language:i},{withCredentials:!0}).then((function(){return a.props.history.push("/mybuddies")})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){console.log(e.target.value);var t=e.target,n=t.name,s=t.value;a.setState(Object(I.a)({},n,s))},a.handleDelete=function(e){e.preventDefault();var t=a.state,n=t.sex,s=t.topics,c=t.level,i=t.language,o=a.props.user._id;m.a.delete("".concat("https://barcelona-bigmouths.herokuapp.com","/api/user/delete/").concat(o),{sex:n,topics:s,level:c,language:i},{withCredentials:!0}).then((function(){return a.props.history.push("/")})).catch((function(e){return console.log(e)}))},a.state={sex:"",topics:"",level:"",language:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"aboutme",children:[Object(a.jsxs)("h1",{children:["YOUR PROFILE ",Object(a.jsx)("u",{children:this.props.user&&this.props.user.username})]}),Object(a.jsxs)("div",{className:"table",children:[Object(a.jsxs)("form",{onSubmit:this.handleFormEdit,children:[Object(a.jsx)("label",{for:"sex",children:"SEX: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"sex",name:"sex",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"I'm a male man ",children:"I'm a male man"}),Object(a.jsx)("option",{value:"I'm a female lady",children:"I'm a female lady"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"topics",children:"TOPICS THAT INTEREST ME: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"topics",name:"topics",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"Sports",children:"Sports"}),Object(a.jsx)("option",{value:"The Arts",children:"The Arts"}),Object(a.jsx)("option",{value:"Politics",children:"Politics"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"level",children:"MY LEVEL: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"level",name:"level",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"Elementary",children:"Elementary"}),Object(a.jsx)("option",{value:"Intermediate",children:"Intermediate"}),Object(a.jsx)("option",{value:"Advanced",children:"Advanced"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"language",children:"LANGUAGE: "}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:"input-field",id:"language",name:"language",onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"I'm Spanish looking for English",children:"Spanish seeking English"}),Object(a.jsx)("option",{value:"I'm English looking for Spanish",children:"English seeking Spanish"})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{className:"button",variant:"primary",type:"submit",children:"EDIT \u2192"})]}),Object(a.jsx)(N.a,{className:"button",onClick:this.handleDelete,variant:"primary",type:"submit",children:"DELETE \u2192"})]})]})}}]),n}(s.Component))),U=y(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleMessageSubmit=function(e){var t=a.props.match.params.id;e.preventDefault();var n=a.state.convo,s=" ";s=n.userOne==a.props.user._id?n.userTwo:n.userOne,m.a.post("".concat("https://barcelona-bigmouths.herokuapp.com","/api/messages/").concat(s,"/").concat(t,"/").concat(a.props.user._id),{message:a.state.message},{withCredentials:!0}).then((function(e){console.log(a.state,"ello there marta"),a.getMyMessages(),a.setState({message:""})})).catch((function(e){return console.log(e)}))},a.getMyMessages=function(){var e=a.props.match.params.id;m.a.get("".concat("https://barcelona-bigmouths.herokuapp.com","/api/messages/").concat(e),{withCredentials:!0}).then((function(e){console.log("messages.data",e.data),a.setState({convo:e.data}),console.log(a.state.convo.messages)}))},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(I.a)({},n,s))},a.state={convo:[],message:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMyMessages()}},{key:"render",value:function(){return console.log(this.state," state voy a cortarme als venas"),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"MESSAGE BOARD"}),Object(a.jsxs)("section",{class:"message-board",children:[Object(a.jsx)("div",{class:"title",children:Object(a.jsx)("h2",{children:"Leave a message"})}),Object(a.jsxs)("form",{onSubmit:this.handleMessageSubmit,children:[Object(a.jsx)("textarea",{name:"message",value:this.state.message,onChange:this.handleChange,class:"message",type:"text"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{value:"submit",type:"submit",class:"submit-btn"})]}),Object(a.jsxs)("div",{class:"display-area",children:["Existing comment:",this.state.convo.messages?this.state.convo.messages.map((function(e){return Object(a.jsx)("p",{children:e.message})})):null]})]})]})}}]),n}(s.Component));var P=y((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,c=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(d.b,{exact:c,path:i,render:function(e){return t?Object(a.jsx)(d.a,{to:"/aboutme"}):t?void 0:Object(a.jsx)(s,Object(b.a)({},e))}})}));var R=y((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,c=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(d.b,{exact:c,path:i,render:function(e){return t?t?Object(a.jsx)(s,Object(b.a)({},e)):void 0:Object(a.jsx)(d.a,{to:"/login"})}})})),G=(n(71),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(S,{}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:E}),Object(a.jsx)(P,{exact:!0,path:"/signup",component:k}),Object(a.jsx)(P,{exact:!0,path:"/login",component:L}),Object(a.jsx)(R,{exact:!0,path:"/aboutme",component:A}),Object(a.jsx)(R,{exact:!0,path:"/mybuddies",component:M}),Object(a.jsx)(R,{exact:!0,path:"/buddydetail/:id",component:D}),Object(a.jsx)(R,{exact:!0,path:"/mybuddieslist/:id",component:B}),Object(a.jsx)(R,{exact:!0,path:"/editprofile",component:T}),Object(a.jsx)(R,{exact:!0,path:"/messageboard/:id",component:U})]})]})}}]),n}(s.Component));o.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(f,{children:Object(a.jsx)(G,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.1dcaf92f.chunk.js.map