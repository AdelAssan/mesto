(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_hasInvalidInput",(function(){return o._inputs.some((function(e){return!e.validity.valid}))})),t(this,"_toggleButtonError",(function(){o._hasInvalidInput()?o.disableButton():(o._submitButton.classList.remove(o._settings.inactiveButtonClass),o._submitButton.disabled=!1)})),t(this,"disableButton",(function(){o._submitButton.classList.add(o._settings.inactiveButtonClass),o._submitButton.disabled=!0})),t(this,"_validateInput",(function(e){var t=o._form.querySelector("#error-".concat(e.id)),n=e.validity.valid,r=e.validationMessage;n?o._hideError(e,t):o._showError(e,t,r)})),this._form=r,this._settings=e,this._inputs=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonError(),this._inputs.forEach((function(t){e._hideError(t)}))}},{key:"_showError",value:function(e,t,n){e.classList.add(this._settings.inputErrorClass),t.textContent=n}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#error-".concat(e.id));e.classList.remove(this._settings.inputErrorClass),t.textContent=""}},{key:"_setInputListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonError()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r,i,a){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_handlePicture",(function(){s._handleCardClick(s._data.name,s._data.link)})),o(this,"_addLike",(function(){s._like.classList.add("element__like_active")})),o(this,"_removeLike",(function(){s._like.classList.remove("element__like_active")})),o(this,"deleteCardElement",(function(){s._element.remove()})),this._data=t,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._cardSelector=n,this._handleCardClick=r,this._handleCardDelete=i,this._handleLikeClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardTitle=this._element.querySelector(".element__text"),this._cardImage=this._element.querySelector(".element__image"),this._likeCount=this._element.querySelector(".element__like-count"),this._like=this._element.querySelector(".element__like"),this._cardTitle.textContent=this._data.name,this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._getCard(),this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".element__trash").style.display="none"),this._element}},{key:"wasLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCount.textContent=this._likes.length,this.wasLiked()?this._addLike():this._removeLike()}},{key:"_getCard",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handlePicture()})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleCardDelete(e._id)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick(e._id)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._cards=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._cards.prepend(e)}},{key:"getItem",value:function(e){this._cards.append(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.userName,r=t.userDescription,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._userName.textContent,e.description=this._userDescription.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;e._id,this._userName.textContent=t,this._userDescription.textContent=n,this._userAvatar.src=r}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupCloseButton="popup__close",this._handleEscClosePopup=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClosePopup)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClosePopup)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){e._handleOverlayClose(t),t.target.classList.contains(e._popupCloseButton)&&e.closePopup()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._form=n._popup.querySelector(".popup__form"),n._saveButton=n._popup.querySelector(".popup__save"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValue={},this._inputList.forEach((function(t){e._inputValue[t.name]=t.value})),this._inputValue}},{key:"changeSubmit",value:function(e){this._submitForm=e}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Сохранение...":this._saveButton.value}},{key:"setEventListeners",value:function(){var e=this;h(m(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){h(m(a.prototype),"closePopup",this).call(this),this._form.reset()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"openPopup",value:function(e,t){w(L(a.prototype),"openPopup",this).call(this),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j,I=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"0ae9ad10-4d99-4e22-9605-8b12206f4940","Content-Type":"application/json"}}),q={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled"},R=document.querySelector(".profile__edit-button"),B=document.querySelector(".popup_edit"),T=document.querySelector(".popup_add"),U=document.querySelector(".popup_edit-avatar"),A=document.querySelector(".popup_delete-card"),x=document.querySelector(".profile__add-button"),D=".elements",V=B.querySelector(".popup__form"),N=T.querySelector(".popup__form"),F=U.querySelector(".popup__form"),J=V.querySelector("#name"),H=V.querySelector("#description");function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}F.querySelector("#avatar"),Promise.all([I.getProfile(),I.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];j=o._id,W.setUserInfo(o);var a=new s({items:i,renderer:function(e){a.getItem($({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:j,ownerId:e.owner._id}))}},D);console.log(a),console.log(i),a.renderItems()})).catch((function(e){console.log(e)}));var z=new n(q,N);function $(e){var t=new i(e,".template",Z,(function(e){ee.openPopup(),ee.changeSubmit((function(){ee.renderLoading(!0),I.deleteCard(e).then((function(e){t.deleteCardElement(),ee.closePopup()})).catch((function(e){console.log(e)})).finally((function(){ee.renderLoading(!1)}))}))}),(function(e){t.wasLiked()?I.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):I.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return t.createCard()}z.enableValidation();var G=new s({items:[],renderer:$},D),K=new b(T,(function(e){K.renderLoading(!0),I.addCard(e.name,e.description,e.likes).then((function(e){var t={name:e.name,link:e.link,likes:e.likes,id:e._id,userId:j,ownerId:e.owner._id};G.addItem($(t)),K.closePopup()})).catch((function(e){console.log(e)})).finally((function(){K.renderLoading(!1)}))}));K.setEventListeners(),x.addEventListener("click",(function(){z.resetValidation(),K.openPopup()}));var Q=new n(q,V);Q.enableValidation();var W=new c({userName:".profile__name",userDescription:".profile__description",userAvatar:".profile__photo"}),X=new b(B,(function(e){var t=e.name,n=e.description;X.renderLoading(!0),I.editProfile(t,n).then((function(e){W.setUserInfo(e),X.closePopup()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))}));X.setEventListeners(),R.addEventListener("click",(function(){var e=W.getUserInfo(),t=e.name,n=e.description;J.value=t,H.value=n,Q.resetValidation(),X.openPopup()}));var Y=new C(document.querySelector(".popup_photo"));function Z(e,t){Y.openPopup(e,t)}Y.setEventListeners();var ee=new b(A);ee.setEventListeners();var te=new n(q,F);te.enableValidation();var ne=new b(U,(function(e){ne.renderLoading(!0);var t=e.avatar;I.changeAvatar(t).then((function(e){W.setUserInfo(e),ne.closePopup()})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)}))}));document.querySelector(".profile__photo-button").addEventListener("click",(function(){te.resetValidation(),ne.openPopup()})),ne.setEventListeners()})();