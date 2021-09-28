var vm = new Vue({
    el: '#app',
    // 修改Vue变量的读取语法，避免和django模板语法冲突
    delimiters: ['[[', ']]'],
    data: {
        host,
        show_menu:false,
        mobile:'',
        mobile_error:false,
        mobile_error_message:'Email format error',
        password:'',
        password_error:false,
        password_error_message:'Password format error',
        remembered:'',
    },
    mounted(){
        //获取用户名信息
        this.username=getCookie('username');
        //获取是否登录信息
        this.is_login=getCookie('is_login');
    },
    methods: {
        //显示下拉菜单
        show_menu_click:function(){
            this.show_menu = !this.show_menu ;
        },
        //检查手机号
        check_mobile: function(){
            var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (re.test(this.mobile)) {
                this.mobile_error = false;
            } else {
                this.mobile_error = true;
            }
        },
        //检查密码
        check_password:function () {

        },
        //提交
        on_submit:function () {
            this.check_mobile();

            if (this.mobile_error == true) {
                // 不满足注册条件：禁用表单
                window.event.returnValue = false;
            }
        }
    }
});
