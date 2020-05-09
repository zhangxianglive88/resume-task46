"use strict";

!function () {
  // 添加offset类
  var specialTags = document.querySelectorAll('[data-x]');

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("offset");
  }

  findClosestAndRemoveOffset();
  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset();
  }); // 找出距离窗口顶部最近的元素，并移除它的offset类

  function findClosestAndRemoveOffset() {
    var specialTags = document.querySelectorAll('[data-x]');
    var y = window.scrollY; //minDistanceIndex:离窗口顶部最近的元素

    var minDistanceIndex = 0;

    for (var _i = 1; _i < specialTags.length; _i++) {
      if (Math.abs(y - specialTags[_i].offsetTop) < Math.abs(y - specialTags[minDistanceIndex].offsetTop)) {
        minDistanceIndex = _i;
      }
    }

    specialTags[minDistanceIndex].classList.remove("offset");

    for (var _i2 = 0; _i2 < specialTags.length; _i2++) {
      specialTags[_i2].classList.remove("active");
    }

    specialTags[minDistanceIndex].classList.add("active");
    var id = specialTags[minDistanceIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentNode;
    var brotherAndMe = li.parentNode.children;

    for (var _i3 = 0; _i3 < brotherAndMe.length; _i3++) {
      brotherAndMe[_i3].classList.remove("highlight");
    }

    li.classList.add("highlight");
  }
}.call();