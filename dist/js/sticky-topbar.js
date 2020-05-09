"use strict";

!function () {
  var view = document.querySelector("#topNavBar");
  var controller = {
    view: null,
    init: function init() {
      this.view = view;
      this.bindEvents(); // this.bindEvents.call(this)
    },
    bindEvents: function bindEvents() {
      var _this = this;

      window.addEventListener('scroll', function () {
        // 箭头函数没有this
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
    },
    active: function active() {
      this.view.classList.add("sticky");
    },
    deactive: function deactive() {
      this.view.classList.remove("sticky");
    }
  };
  controller.init(); // controller.init.call(controller, view)
}.call();