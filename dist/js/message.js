"use strict";

!function () {
  var view = View('.message');
  var model = Model({
    'resourceName': 'Message'
  });
  var controller = window.Controller({
    init: function init(view) {
      this.messageList = document.querySelector('#messageList');
      this.form = view.querySelector('#postMessageForm');
      this.loadMessage();
    },
    loadMessage: function loadMessage() {
      var _this = this;

      // 从数据库中取数据，展示在页面
      this.model.fetch().then(function (messages) {
        messages.map(function (item) {
          var content = item.attributes.content;
          var name = item.attributes.name;
          var li = document.createElement('li');
          li.innerText = "".concat(name, ":").concat(content);

          _this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      // 向数据库中添加留言，添加成功后刷新当前页面
      var myForm = this.form;
      myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var content = myForm.querySelector('input[name=content]').value;
        var name = myForm.querySelector('input[name=name]').value;

        _this2.model.save({
          'name': name,
          'content': content
        }).then(function (message) {
          var li = document.createElement('li');
          li.innerText = "".concat(name, ":").concat(content);

          _this2.messageList.appendChild(li);

          myForm.querySelector('input[name=content]').value = '';
          myForm.querySelector('input[name=name]').value = '';
        });
      });
    }
  });
  controller.init(view, model);
}.call();