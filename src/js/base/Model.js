window.Model = function (options) {
    let resourceName = options.resourceName // 表名

    return {
        init: function () {
            let APP_ID = "dTpCvioD0aV2Y3vBgu94KrDo-MdYXbMMI"
            let appKey = "WRIa8eNee1F5hql96ayTSs2b"
            AV.init({
                appId: APP_ID,
                appKey: appKey,
            })
        },
        fetch: function () {
            const query = new AV.Query(resourceName);
            return query.find() // promise对象
        },
        save: function (object) {
            const Message = AV.Object.extend(resourceName);
            const message = new Message();
            return message.save(object) // promise对象
        }
    }
}