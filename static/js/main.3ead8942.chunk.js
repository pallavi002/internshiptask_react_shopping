(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{53:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(27),s=n.n(i),o=(n(53),n(18)),r=n(21),p=n(20),l=n(28),d=n(39);n(66);d.a.initializeApp({apiKey:"AIzaSyBvDqE5H_IJyc6wGxPBh4JEoIn43y7sbwk",authDomain:"internship-shopping.firebaseapp.com",projectId:"internship-shopping",storageBucket:"internship-shopping.appspot.com",messagingSenderId:"13772036395",appId:"1:13772036395:web:e2798d996526637a328d6e",measurementId:"G-ZEN05YFMW7"});var m=d.a,h=n(68),j=n(72),u=n(69),b=n(70),f=n(71),x=n(35),g=n(34),O=(n(58),n(2)),v=function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var n=e.data(),c=n.name,a=n.price,i=n.specifications,s=n.image;t.push({key:e.id,name:c,price:a,specifications:i,image:s})})),c.setState({laptops:t}),console.log(t)},c.componentDidMount=function(){c.unsubscribe=c.ref.onSnapshot(c.onCollectionUpdate)},c.delete=function(e){m.firestore().collection("laptops").doc(e).delete().then((function(){return console.log("deleted a laptop")})).catch((function(e){return console.log("There is some error in updating!")}))},c.getLaptops=function(){return c.state.laptops.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(j.a,{style:{width:"18rem",margin:"25px"},className:"cardclass",children:[Object(O.jsx)(l.b,{to:"/update/".concat(e.key),children:Object(O.jsx)(u.a,{className:"edit",children:Object(O.jsx)(g.a,{icon:x.a})})}),Object(O.jsx)(j.a.Img,{variant:"top",src:e.image,class:"cardimg"}),Object(O.jsxs)(j.a.Body,{children:[Object(O.jsx)(l.b,{to:"/read/".concat(e.key),children:Object(O.jsx)(j.a.Title,{className:"title",children:e.name})}),Object(O.jsxs)("h6",{children:["Price: ",e.price," ",Object(O.jsx)(g.a,{icon:x.b})]}),Object(O.jsxs)(j.a.Text,{children:[e.specifications.substr(0,150),"..."]}),Object(O.jsx)(l.b,{to:"/read/".concat(e.key),children:Object(O.jsx)(u.a,{className:"btn1",children:"Show"})}),Object(O.jsx)(u.a,{className:"delete",onClick:function(){return c.delete(e.key)},children:Object(O.jsx)(g.a,{icon:x.c})})]})]})})})},e.key)}))},c.render=function(){return Object(O.jsxs)("div",{style:{backgroundImage:"url(".concat("https://images.unsplash.com/photo-1523878288860-7ad281611901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",")"),backgroundSize:"cover"},children:[Object(O.jsx)(b.a,{class:"navbar",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(b.a.Brand,{href:"#home",children:"Laptop Shopping"}),Object(O.jsx)(f.a,{className:"me-auto",children:Object(O.jsx)(f.a.Link,{href:"/create",children:"Add product"})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"row",children:c.getLaptops()})]})},c.ref=m.firestore().collection("laptops"),c.unsubscribe=null,c.state={laptops:[]},c}return n}(a.a.Component),y=n(26),N=function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onFormSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.price,i=n.specifications;e.ref.add({name:c,price:a,specifications:i}).then((function(t){e.setState({name:"",price:"",specifications:""}),e.props.history.push("/")})).catch((function(e){console.log("There is some error in adding a new post!")}))},e.onInputChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.componentDidMount=function(){e.setState({name:"",price:"",specifications:""})},e.ref=m.firestore().collection("laptops"),e.state={name:"",price:"",specifications:""},e}return Object(y.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Add Product"}),Object(O.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"name",children:"name"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"name",placeholder:"name",name:"name"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"price",children:"price"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"price",placeholder:"price",name:"price"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"specifications",children:"specifications"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"specifications",placeholder:"Specifications",name:"specifications"})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}}]),n}(a.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},C=n(9),k=function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onFormSubmit=function(e){e.preventDefault();var t=c.state,n=t.name,a=t.price,i=t.specifications,s=t.image;m.firestore().collection("laptops").doc(c.props.match.params.id).set({name:n,price:a,specifications:i,image:s}).then((function(e){c.setState({name:"",price:"",specifications:""}),c.props.history.push("/")})).catch((function(e){console.log("There is some error in updating post!")}))},c.onInputChange=function(e){var t=c.state;t[e.target.name]=e.target.value,c.setState(t)},c.componentDidMount=function(){m.firestore().collection("laptops").doc(c.props.match.params.id).get().then((function(e){e.exists?c.setState({name:e.data().name,price:e.data().price,specifications:e.data().specifications,key:e.id,isLoading:!1}):console.log("No such document found")})).catch((function(e){return console.log("there was some error finding the document")}))},c.state={name:"",price:"",specifications:"",image:"",key:""},c}return Object(y.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Update document"}),Object(O.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"name",children:"name"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"name",placeholder:"name",name:"name",value:this.state.name})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"price",children:"price"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"price",placeholder:"price",name:"price",value:this.state.price})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{forhtml:"specifications",children:"specifications"}),Object(O.jsx)("input",{onChange:this.onInputChange,type:"text",className:"form-control",id:"specifications",placeholder:"What's on your mind?",name:"specifications",value:this.state.specifications})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}}]),n}(a.a.Component),I=function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={name:"",price:"",specifications:"",image:"",key:""},e.componentDidMount=function(){m.firestore().collection("laptops").doc(e.props.match.params.id).get().then((function(t){t.exists?e.setState({name:t.data().name,price:t.data().price,specifications:t.data().specifications,image:t.data().image,key:t.id}):console.log("There was error in finding the document")})).catch((function(e){return console.log("There was some error in getting the document.")}))},e}return Object(y.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(j.a,{style:{width:"65rem",margin:"25px",padding:"50px"},children:[Object(O.jsx)(j.a.Img,{variant:"top",src:this.state.image,style:{width:"30rem"}}),Object(O.jsx)("h1",{className:"card-name",children:this.state.name}),Object(O.jsxs)("h4",{className:"card-subname mb-2 text-muted",children:["Price: ",this.state.price]}),Object(O.jsx)("b",{children:"Specifications:"}),Object(O.jsx)("p",{className:"card-text",children:this.state.specifications})]})})}}]),n}(a.a.Component);s.a.render(Object(O.jsx)(l.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(C.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(C.a,{exact:!0,path:"/update/:id",component:k}),Object(O.jsx)(C.a,{exact:!0,path:"/read/:id",component:I}),Object(O.jsx)(C.a,{exact:!0,path:"/create",component:N})]})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.3ead8942.chunk.js.map