(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{58:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(27),s=n.n(r),i=n(22),o=n(73),j=n(74),l=n(49),b=n(13),u=(n(58),n(0)),d=n.n(u),h=n(3),p=n(72),O=n(12),x=n(23),m=n(44),g=Object(m.a)({apiKey:"AIzaSyBNs0AXEEGtMu9Goj1TjDAoMmJfX3YDqPU",authDomain:"ticketbookingauth.firebaseapp.com",projectId:"ticketbookingauth",storageBucket:"ticketbookingauth.appspot.com",messagingSenderId:"350095879981",appId:"1:350095879981:web:b2f589b666ec1707c7ada4",measurementId:"G-M0ZF29VC38"}),v=Object(x.d)(g),f=n(4),y=Object(c.createContext)();function k(e){var t=e.children,n=Object(c.useState)({}),a=Object(O.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=Object(x.e)(v,(function(e){console.log("Auth",e),s(e)}));return function(){e()}}),[]),Object(f.jsx)(y.Provider,{value:{user:r,logIn:function(e,t){return Object(x.f)(v,e,t)},signUp:function(e,t){return Object(x.c)(v,e,t)},logOut:function(){return Object(x.i)(v)},googleSignIn:function(){var e=new x.a;return Object(x.h)(v,e)},setUpRecaptha:function(e){var t=new x.b("recaptcha-container",{},v);return t.render(),Object(x.g)(v,e,t)}},children:t})}function N(){return Object(c.useContext)(y)}var S=function(){var e=N(),t=e.logOut,n=e.user,c=Object(b.g)(),a=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:c("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"p-4 box mt-3 text-center",children:["Hello Welcome ",Object(f.jsx)("br",{}),n&&n.email]}),Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)(p.a,{variant:"primary",onClick:a,children:"Log out"})})]})},w=n(75),C=n(76),I=n(45),P=n.n(I),B=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(O.a)(r,2),o=s[0],j=s[1],l=Object(c.useState)(""),u=Object(O.a)(l,2),x=u[0],m=u[1],g=N(),v=g.logIn,y=g.googleSignIn,k=Object(b.g)(),S=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(""),e.prev=2,e.next=5,v(n,o);case 5:k("/home"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),m(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y();case 4:k("/home"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"p-4 box",children:[Object(f.jsx)("h2",{className:"mb-3",children:"Firebase Auth Login"}),x&&Object(f.jsx)(w.a,{variant:"danger",children:x}),Object(f.jsxs)(C.a,{onSubmit:S,children:[Object(f.jsx)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(f.jsx)(C.a.Control,{type:"email",placeholder:"Email address",onChange:function(e){return a(e.target.value)}})}),Object(f.jsx)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(f.jsx)(C.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)}})}),Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)(p.a,{variant:"primary",type:"Submit",children:"Log In"})})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{children:Object(f.jsx)(P.a,{className:"g-btn",type:"dark",onClick:I})}),Object(f.jsx)(i.b,{to:"/phonesignup",children:Object(f.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(f.jsx)(p.a,{variant:"success",type:"Submit",children:"Sign in with Phone"})})})]}),Object(f.jsxs)("div",{className:"p-4 box mt-3 text-center",children:["Don't have an account? ",Object(f.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})},E=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(O.a)(r,2),o=s[0],j=s[1],l=Object(c.useState)(""),u=Object(O.a)(l,2),x=u[0],m=u[1],g=N().signUp,v=Object(b.g)(),y=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,g(n,x);case 5:v("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"p-4 box",children:[Object(f.jsx)("h2",{className:"mb-3",children:"Firebase Auth Signup"}),o&&Object(f.jsx)(w.a,{variant:"danger",children:o}),Object(f.jsxs)(C.a,{onSubmit:y,children:[Object(f.jsx)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(f.jsx)(C.a.Control,{type:"email",placeholder:"Email address",onChange:function(e){return a(e.target.value)}})}),Object(f.jsx)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(f.jsx)(C.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})}),Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)(p.a,{variant:"primary",type:"Submit",children:"Sign up"})})]})]}),Object(f.jsxs)("div",{className:"p-4 box mt-3 text-center",children:["Already have an account? ",Object(f.jsx)(i.b,{to:"/login",children:"Log In"})]})]})},D=(n(65),n(51)),G=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(O.a)(r,2),o=s[0],j=s[1],l=Object(c.useState)(!1),u=Object(O.a)(l,2),x=u[0],m=u[1],g=Object(c.useState)(""),v=Object(O.a)(g,2),y=v[0],k=v[1],S=Object(c.useState)(""),I=Object(O.a)(S,2),P=I[0],B=I[1],E=N().setUpRecaptha,G=Object(b.g)(),A=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(o),a(""),""!==o&&void 0!==o){e.next=5;break}return e.abrupt("return",a("Please enter a valid phone number!"));case 5:return e.prev=5,e.next=8,E(o);case 8:n=e.sent,B(n),m(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),a(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a(""),""!==y&&null!==y){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,P.confirm(y);case 7:G("/home"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),a(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"p-4 box",children:[Object(f.jsx)("h2",{className:"mb-3",children:"Firebase Phone Auth"}),n&&Object(f.jsx)(w.a,{variant:"danger",children:n}),Object(f.jsxs)(C.a,{onSubmit:A,style:{display:x?"none":"block"},children:[Object(f.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(D.a,{defaultCountry:"IN",value:o,onChange:j,placeholder:"Enter Phone Number"}),Object(f.jsx)("div",{id:"recaptcha-container"})]}),Object(f.jsxs)("div",{className:"button-right",children:[Object(f.jsx)(i.b,{to:"/collegeProject",children:Object(f.jsx)(p.a,{variant:"secondary",children:"Cancel"})}),"\xa0",Object(f.jsx)(p.a,{type:"submit",variant:"primary",children:"Send Otp"})]})]}),Object(f.jsxs)(C.a,{onSubmit:F,style:{display:x?"block":"none"},children:[Object(f.jsx)(C.a.Group,{className:"mb-3",controlId:"formBasicOtp",children:Object(f.jsx)(C.a.Control,{type:"otp",placeholder:"Enter OTP",onChange:function(e){return k(e.target.value)}})}),Object(f.jsxs)("div",{className:"button-right",children:[Object(f.jsx)(i.b,{to:"/collegeProject",children:Object(f.jsx)(p.a,{variant:"secondary",children:"Cancel"})}),"\xa0",Object(f.jsx)(p.a,{type:"submit",variant:"primary",children:"Verify"})]})]})]})})},A=function(e){var t=e.children;return N().user?t:Object(f.jsx)(b.a,{to:"/login"})};n(66);var F=function(){var e=Object(b.g)();return Object(f.jsxs)("div",{className:"landingPage",children:[Object(f.jsxs)("div",{className:"landingContainer",children:[Object(f.jsx)("h1",{children:"Movie Ticket Booking"}),Object(f.jsx)("h3",{children:"Book or reserve Movie Tickets online without going to the theatres"}),Object(f.jsx)("div",{className:"movieImg",children:Object(f.jsx)("img",{src:"https://iili.io/Q60NBp.png",alt:"movieImg",border:"0"})})]}),Object(f.jsx)("div",{className:"proceedToLogin",children:Object(f.jsx)("button",{className:"proceedToLogin",onClick:function(){e("/login")},children:"Proceed to Log-in"})})]})};var L=function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)(j.a,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(k,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{path:"/home",element:Object(f.jsx)(A,{children:Object(f.jsx)(S,{})})}),Object(f.jsx)(b.b,{path:"/collegeProject",element:Object(f.jsx)(F,{})}),Object(f.jsx)(b.b,{path:"/login",element:Object(f.jsx)(B,{})}),Object(f.jsx)(b.b,{path:"/signup",element:Object(f.jsx)(E,{})}),Object(f.jsx)(b.b,{path:"/phonesignup",element:Object(f.jsx)(G,{})})]})})})})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a34e6cde.chunk.js.map