(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={container:"ContactForm_container__3cp-p",label:"ContactForm_label___Na4F",input:"ContactForm_input__3FFz_"}},19:function(t,e,n){t.exports={container:"ContactList_container__2DWD9",list:"ContactList_list__18Z6_",button:"ContactList_button__19tYx"}},25:function(t,e,n){},36:function(t,e,n){t.exports={container:"App_container__3Hywx"}},66:function(t,e,n){"use strict";n.r(e);var c,a,r=n(1),s=n(0),o=n(9),i=n.n(o),u=(n(25),n(10)),l=n(11),b=n(14),j=n(13),d=n(34),h=n(7),m=n(16),f=n.n(m),O=n(8),p=n(2),v=Object(p.b)("contacts/addRequest"),x=Object(p.b)("contacts/addSuccess"),C=Object(p.b)("contacts/addError"),L=Object(p.b)("contacts/fetchRequest"),_=Object(p.b)("contacts/fetchSuccess"),g=Object(p.b)("contacts/fetchError"),y=Object(p.b)("contacts/removeRequest"),S=Object(p.b)("contacts/removeSuccess"),N={removeListError:Object(p.b)("contacts/removeError"),removeListSuccess:S,removeListRequest:y,filterContact:Object(p.b)("FILTER_CONTACTS"),addListRequest:v,addListSuccess:x,addListError:C,fetchListRequest:L,fetchListSuccess:_,fetchListError:g},F=n(18),E=n.n(F),R={removeContact:function(t){return function(e){e(N.removeListRequest()),E.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){e(N.removeListSuccess(t))})).catch((function(t){return e(N.removeListError(t))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){t(N.addListRequest()),E.a.post("http://localhost:2000/contacts",{name:e,number:n}).then((function(e){t(N.addListSuccess(e.data))})).catch((function(e){return t(N.addListError(e))}))}},fetchContact:function(){return function(t){t(N.fetchListRequest()),E.a.get("http://localhost:2000/contacts").then((function(e){var n=e.data;t(N.fetchListSuccess(n))})).catch((function(e){return t(N.fetchListError(e))}))}}},w=n(67),k=function(t){var e=t.isVisible;return Object(r.jsx)(w.a,{in:e,timeout:250,classNames:"answer",unmountOnExit:!0,children:Object(r.jsx)("div",{className:"answerContainer",children:Object(r.jsx)("p",{children:"Contact already declared"})})})},q=function(t){return t.contacts.loading},V=function(t){return t.contacts.filter},A=function(t){return t.contacts.items},D=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},T=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",isVisible:!1},t.handleChange=function(e){var n=e.target;t.setState(Object(h.a)({},n.name,n.value))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.list.some((function(e){return e.name===t.state.name})))return t.setState({isVisible:!0}),void setTimeout((function(){t.setState({isVisible:!1})}),1500);t.props.addContact(Object(d.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.isVisible;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(k,{isVisible:c})}),Object(r.jsxs)("form",{className:f.a.container,action:"",onSubmit:this.handleSubmit,children:[Object(r.jsx)("label",{className:f.a.label,htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:f.a.input,type:"text",name:"name",placeholder:"name",value:e,onChange:this.handleChange}),Object(r.jsx)("label",{className:f.a.label,htmlFor:"number",children:"Number"}),Object(r.jsx)("input",{className:f.a.input,type:"tel",name:"number",placeholder:"number",value:n,onChange:this.handleChange}),Object(r.jsx)("input",{type:"submit",value:"Add contact"})]})]})}}]),n}(s.Component),I={addContact:R.addContact},J=Object(O.b)((function(t){return{list:A(t)}}),I)(T),z=n(19),B=n.n(z),H=n(68),M=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(H.a,{component:"ul",className:B.a.container,children:this.props.list.map((function(e){return Object(r.jsx)(w.a,{classNames:"showbutton",timeout:250,children:Object(r.jsxs)("li",{className:B.a.list,children:[e.name," : ",e.number,Object(r.jsx)("button",{className:B.a.button,type:"button",onClick:function(){return t.props.delete(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)},e.id)}))})})}}]),n}(s.Component),P={delete:R.removeContact},W=Object(O.b)((function(t){return{list:D(t)}}),P)(M),Y={filterRender:N.filterContact},Z=Object(O.b)((function(t){return{filter:V(t)}}),Y)((function(t){var e=t.filterRender,n=t.filter;return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Find contacts by name"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})})),G=n(36),K=n.n(G),Q=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContact()}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isLodingContact&&Object(r.jsx)("h1",{children:"Loading...."}),Object(r.jsxs)("div",{className:K.a.container,children:[Object(r.jsx)(w.a,{in:!0,classNames:"logo",timeout:250,appear:!0,unmountOnExit:!0,children:Object(r.jsx)("h1",{children:"Phonebook"})}),Object(r.jsx)(J,{}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(Z,{}),Object(r.jsx)(W,{})]})]})}}]),n}(s.Component),U={onFetchContact:R.fetchContact},X=Object(O.b)((function(t){return{isLodingContact:q(t)}}),U)(Q),$=n(37),tt=n(6),et=[],nt="",ct=Object(p.c)(et,(c={},Object(h.a)(c,N.addListSuccess,(function(t,e){return[].concat(Object($.a)(t),[e.payload])})),Object(h.a)(c,N.fetchListSuccess,(function(t,e){return e.payload})),Object(h.a)(c,N.removeListSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),at=Object(p.c)(nt,Object(h.a)({},N.filterContact,(function(t,e){return e.payload}))),rt=Object(p.c)(!1,(a={},Object(h.a)(a,N.addListRequest,(function(){return!0})),Object(h.a)(a,N.addListSuccess,(function(){return!1})),a)),st=Object(tt.c)({items:ct,filter:at,loading:rt}),ot=Object(p.a)({reducer:{contacts:st}});i.a.render(Object(r.jsx)(O.a,{store:ot,children:Object(r.jsx)(X,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.029251fa.chunk.js.map