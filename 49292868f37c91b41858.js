"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_pages_home_index_mjs"],{

/***/ "../vue/pages/home/open-image/render.pug":
/*!***********************************************!*\
  !*** ../vue/pages/home/open-image/render.pug ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.id
    ? _c(
        "div",
        { staticClass: "d-inline-block" },
        [
          _c("b-form-file", {
            staticStyle: { display: "none" },
            attrs: {
              id: _vm.id,
              placeholder: "請選擇檔案...",
              accept: ".jpg, .png",
              plain: ""
            },
            on: { change: _vm.parseFile }
          }),
          _c(
            "label",
            {
              staticClass: "btn btn-secondary btn-sm mb-0",
              attrs: { for: _vm.id }
            },
            [_c("b-icon-card-image")],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../vue/pages/home/render.pug":
/*!************************************!*\
  !*** ../vue/pages/home/render.pug ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container-fluid px-0",
      on: {
        paste: function($event) {
          $event.preventDefault()
          return _vm.onPaste.apply(null, arguments)
        },
        drop: function($event) {
          $event.preventDefault()
          return _vm.onDrop.apply(null, arguments)
        },
        dragover: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _c("nav", { staticClass: "navbar navbar-dark bg-dark" }, [
        _c(
          "div",
          { staticClass: "navbar-brand d-flex" },
          [
            _vm._v("翻翻樂"),
            _c(
              "open-image",
              { staticClass: "mb-0", on: { load: _vm.insert } },
              [_vm._v("上傳")]
            ),
            _vm.items.length
              ? _c(
                  "div",
                  {
                    staticClass: "btn btn-primary btn-sm",
                    on: { click: _vm.reset }
                  },
                  [_vm._v("重置")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _c(
        "div",
        {
          staticClass:
            "container-fluid px-0 d-flex flex-wrap justify-content-around align-items-center",
          staticStyle: { "min-height": "calc(100vh - 60px)" }
        },
        _vm._l(_vm.items, function(item, index) {
          return _c(
            "div",
            { key: item.no, staticClass: "game-card mt-2" },
            [
              _c(
                "transition",
                { staticClass: "d-relative", attrs: { name: "flip" } },
                [
                  item.flipped
                    ? _c(
                        "div",
                        {
                          key: "front",
                          staticClass:
                            "card pb-0 d-absolute game-card justify-content-around align-items-center",
                          on: {
                            click: function($event) {
                              return _vm.choice(item)
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "mw-100 mh-100",
                            attrs: { src: item.src }
                          })
                        ]
                      )
                    : _c(
                        "div",
                        {
                          key: "back",
                          staticClass: "card p-0 d-absolute btn",
                          attrs: { src: item.src },
                          on: {
                            click: function($event) {
                              return _vm.choice(item)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "w-100 game-card jumbotron text-center mb-0 d-flex justify-content-around align-items-center h1"
                            },
                            [_vm._v(_vm._s(item.no))]
                          )
                        ]
                      )
                ]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../vue/pages/home/index.mjs":
/*!***********************************!*\
  !*** ../vue/pages/home/index.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/render.pug");
/* harmony import */ var _open_image_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-image/index.mjs */ "../vue/pages/home/open-image/index.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  components: {
    OpenImage: _open_image_index_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: () => {
    return {
      first: null,
      second: null,
      items: []
    }
  },
  mounted () {
    __webpack_require__.e(/*! import() */ "vue_pages_home_style_css").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ "../vue/pages/home/style.css"))
  },
  methods: {
    onPaste (e) {
      // console.log('on paste', e.clipboardData)
      const files = [...e.clipboardData.files]
      files.forEach((file) => {
        this.parseImg(file)
      })
    },
    onDrop (e) {
      // console.log('on drop', e.dataTransfer)
      const files = [...e.dataTransfer.files]
      files.forEach((file) => {
        this.parseImg(file)
      })
    },
    parseImg: function (file) {
      const self = this
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        const url = reader.result
        const img = new window.Image()
        img.onload = function () {
          self.insert(img)
        }
        img.src = url
      }, false)

      if (!file) {
        return
      }
      reader.readAsDataURL(file)
    },
    insert (img) {
      if (!img) {
        return
      }
      const id = this.items.length / 2
      for (let i = 0; i < 2; i++) {
        this.items.push({
          id: id,
          flipped: false,
          src: img.src
        })
      }
      this.reset()
    },
    choice (item) {
      if (this.second) {
        this.first.flipped = false
        this.second.flipped = false
        Object.assign(this, {
          first: null,
          second: null
        })
        return
      }

      if (item.flipped) {
        return
      }
      const { first } = this
      item.flipped = true
      if (!first) {
        this.first = item
        return
      }
      if (item.id !== first.id) {
        this.second = item
        return
      }
      this.first = null
    },
    reset () {
      const items = this.items
      const len = items.length
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const r = parseInt(Math.random() * len)
          const a = items[r]
          items[r] = items[i]
          items[i] = a
        }
      }

      Object.assign(this, {
        first: null,
        second: null
      })

      for (let i = 0; i < len; i++) {
        items[i].no = i + 1
        items[i].flipped = false
      }
    }
  }
});


/***/ }),

/***/ "../vue/pages/home/open-image/index.mjs":
/*!**********************************************!*\
  !*** ../vue/pages/home/open-image/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/open-image/render.pug");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  props: [],
  data: function () {
    return {
      id: ''
    }
  },
  mounted: function () {
    this.id = `img-${this._uid}`
  },
  methods: {
    parseFile: function (e) {
      const self = this
      const input = e.srcElement
      const file = input.files[0]
      input.value = ''
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        const url = reader.result
        const img = new window.Image()
        img.onload = function () {
          const { width, height } = this
          Object.assign(self, {
            width: width,
            height: height,
            url: url
          })
          self.$emit('load', img, self)
        }
        img.src = url
      }, false)

      if (!file) {
        return
      }
      reader.readAsDataURL(file)
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=49292868f37c91b41858.js.map