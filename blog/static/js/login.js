var vm = new Vue({
    el: '#app',
    // 修改Vue变量的读取语法，避免和django模板语法冲突
    delimiters: ['[[', ']]'],
    data: {
        host,
        show_menu:false,
        mobile:'',
        password:'',
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
        check_mobile:function () {
            
        },
        //检查密码
        check_mobile:function () {
            
        },
        //提交
        on_submit:function () {
            
        }
    }
});
