!function () {
    let view = View('.message')

    let model = Model({'resourceName': 'Message'})

    let controller = window.Controller({
        init: function(view){
            this.messageList = document.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')
            this.loadMessage()
        },
        loadMessage: function () {
            // 从数据库中取数据，展示在页面
            this.model.fetch().then((messages) => {
                messages.map((item) => {
                    let content = item.attributes.content
                    let name = item.attributes.name
                    let li = document.createElement('li')
                    li.innerText = `${name}:${content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            // 向数据库中添加留言，添加成功后刷新当前页面
            let myForm = this.form
            myForm.addEventListener('submit', (e) => {
                e.preventDefault()
                let content = myForm.querySelector('input[name=content]').value
                let name = myForm.querySelector('input[name=name]').value
                this.model.save({'name': name, 'content': content}).then((message) => {
                    let li = document.createElement('li')
                    li.innerText = `${name}:${content}`
                    this.messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    myForm.querySelector('input[name=name]').value = ''
                })
            })
        }
    })
    controller.init(view, model)
}.call()
