"use strict";

window.Model = function (options) {
  var resourceName = options.resourceName; // 表名

  return {
    init: function init() {
      var APP_ID = "dTpCvioD0aV2Y3vBgu94KrDo-MdYXbMMI";
      var appKey = "WRIa8eNee1F5hql96ayTSs2b";
      AV.init({
        appId: APP_ID,
        appKey: appKey
      });
    },
    fetch: function fetch() {
      var query = new AV.Query(resourceName);
      return query.find(); // promise对象
    },
    save: function save(object) {
      var Message = AV.Object.extend(resourceName);
      var message = new Message();
      return message.save(object); // promise对象
    }
  };
};