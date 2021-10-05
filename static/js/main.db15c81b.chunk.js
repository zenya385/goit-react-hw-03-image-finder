(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),c=(a(26),a(11)),i=a(4),l=a(5),u=a(7),m=a(6),d=a(20),h=a.n(d),g=(a(46),a(21)),p=a.n(g),b=a(1),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(t){return e.props.onSubmit(t)},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),f=j,O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{onClick:function(t){e.props.modalFn(t.target.attributes[2].value),console.log(t)},src:this.props.imageLink,alt:this.props.imageAlt,"data-large":this.props.largeImageURL,className:"ImageGalleryItem-image"})})}}]),a}(n.Component);O.defaultProps={imageLink:" ",imageAlt:" "};var v=O,y=a(2),w=a.n(y),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.loader(!0)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("ul",{className:"ImageGallery",children:this.props.imagesArray.map((function(t,a){return Object(b.jsx)(v,{imageLink:t.webformatURL,imagAlt:t.tags,largeImageURL:t.largeImageURL,modalFn:e.props.modalFn},t.id)}))})}}]),a}(n.Component);k.defaultProps={imagesArray:w.a.array};var x=k,I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(b.jsx)("button",{className:"Button",type:"button",onClick:function(t){return e.props.fn()},children:"Load more"})}}]),a}(n.Component),S=I,F=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeFn()},e.handleBackdrope=function(t){t.currentTarget===t.target&&e.props.closeFn()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentdidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log(" Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdrope,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),F)}}]),a}(n.Component),L=M,N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchWords:"",images:[],showModal:!1,modalImage:"",showLoader:!1,currentPage:1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.pushImagesToState=function(t){var a,n=t.data.hits;a=[].concat(Object(c.a)(e.state.images),Object(c.a)(n)),e.setState((function(e){e.images;return{images:a}}))},e.setModalImage=function(t){return e.setState((function(e){e.modalImage;return{modalImage:t}}))},e.openLargeImage=function(t){e.setModalImage(t),e.toggleModal()},e.loaderToggle=function(t){return e.setState((function(e){e.showLoader;return{showLoader:t}}))},e.searchFormSubmit=function(t){t.preventDefault(),e.setState({searchWords:"",images:[],showModal:!1,modalImage:"",currentPage:1});var a=t.target[1].value;e.setState({searchWords:a});e.getImages(a,1),t.target.reset()},e.loadMoreFn=function(){e.loaderToggle(!0),e.getImages(e.state.searchWords,e.state.currentPage)},e}return Object(l.a)(a,[{key:"getImages",value:function(e,t){var a=this;this.loaderToggle(!0),h.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("20461350-36527ad634bc0878b1b72e118","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){a.pushImagesToState(e),a.loaderToggle(!1),a.setState((function(e){return{currentPage:e.currentPage+1}}))}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[this.state.showModal&&Object(b.jsx)(L,{closeFn:this.toggleModal,loader:this.loaderToggle,children:Object(b.jsx)("img",{src:this.state.modalImage,alt:"modal"})}),Object(b.jsx)(f,{onSubmit:this.searchFormSubmit}),""!==this.state.searchWords&&Object(b.jsx)(x,{loader:this.loaderToggle,imagesArray:this.state.images,modalFn:this.openLargeImage}),this.state.showLoader&&Object(b.jsx)(p.a,{className:"spin",type:"Bars",color:"#00BFFF",height:80,width:80}),""!==this.state.searchWords&&Object(b.jsx)(S,{fn:this.loadMoreFn})]})}}]),a}(n.Component),C=N;s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.db15c81b.chunk.js.map