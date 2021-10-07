(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=(a(26),a(11)),i=a(4),l=a(5),u=a(7),d=a(6),m=(a(27),a(20)),h=a.n(m),g=a(21),p=a.n(g);function b(e,t){return p.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("20461350-36527ad634bc0878b1b72e118","&image_type=photo&orientation=horizontal&per_page=12"))}var j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(t){return e.props.onSubmit(t)},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=f,v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{onClick:function(t){e.props.modalFn(e.props.largeImageURL),console.log(t)},src:this.props.imageLink,alt:this.props.imageAlt,className:"ImageGalleryItem-image"})})}}]),a}(n.Component);v.defaultProps={imageLink:" ",imageAlt:" "};var y=v,w=a(2),S=a.n(w),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.loader(!0)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{className:"ImageGallery",children:this.props.imagesArray.map((function(t,a){return Object(j.jsx)(y,{imageLink:t.webformatURL,imagAlt:t.tags,largeImageURL:t.largeImageURL,modalFn:e.props.modalFn},t.id)}))})}}]),a}(n.Component);x.defaultProps={imagesArray:S.a.array};var k=x,I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(j.jsx)("button",{className:"Button",type:"button",onClick:function(t){return e.props.fn()},children:"Load more"})}}]),a}(n.Component),F=I,M=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeFn()},e.handleBackdrope=function(t){t.currentTarget===t.target&&e.props.closeFn()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentdidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log(" Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdrope,children:Object(j.jsx)("div",{className:"Modal",children:this.props.children})}),M)}}]),a}(n.Component),N=L,T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchWords:"",images:[],showModal:!1,modalImage:"",showLoader:!1,currentPage:1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.pushImagesToState=function(t){var a,n=t.data.hits;a=[].concat(Object(s.a)(e.state.images),Object(s.a)(n)),e.setState((function(e){e.images;return{images:a}}))},e.setModalImage=function(t){return e.setState((function(e){e.modalImage;return{modalImage:t}}))},e.openLargeImage=function(t){e.setModalImage(t),e.toggleModal()},e.loaderToggle=function(t){return e.setState((function(e){e.showLoader;return{showLoader:t}}))},e.searchFormSubmit=function(t){t.preventDefault(),e.setState({searchWords:"",images:[],showModal:!1,modalImage:"",currentPage:1});var a=t.target[1].value;e.setState({searchWords:a});e.loaderToggle(!0),b(a,1).then((function(t){e.pushImagesToState(t),e.loaderToggle(!1),e.setState((function(e){return{currentPage:e.currentPage+1}}))})),t.target.reset()},e.loadMoreFn=function(){e.loaderToggle(!0),b(e.state.searchWords,e.state.currentPage).then((function(t){e.pushImagesToState(t),e.loaderToggle(!1),e.setState((function(e){return{currentPage:e.currentPage+1}}))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[this.state.showModal&&Object(j.jsx)(N,{closeFn:this.toggleModal,loader:this.loaderToggle,children:Object(j.jsx)("img",{src:this.state.modalImage,alt:"modal"})}),Object(j.jsx)(O,{onSubmit:this.searchFormSubmit}),""!==this.state.searchWords&&Object(j.jsx)(k,{loader:this.loaderToggle,imagesArray:this.state.images,modalFn:this.openLargeImage}),this.state.showLoader&&Object(j.jsx)(h.a,{className:"spin",type:"Bars",color:"#00BFFF",height:80,width:80}),""!==this.state.searchWords&&Object(j.jsx)(F,{fn:this.loadMoreFn})]})}}]),a}(n.Component),C=T;c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.83045274.chunk.js.map