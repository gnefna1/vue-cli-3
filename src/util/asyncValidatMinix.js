import axios from "axios";

let afeiCheck = {
// 必填项 不能为空
    methods:{

        required(tipMsg = "不能为空"){
            return { required: true, message: tipMsg, trigger: 'blur' }
        },

        repass(oldPsd){
            return {
                validator: (rule, value, callback)=>{
                    if (oldPsd === value){
                        callback()
                    }else{
                        callback(new Error("两次输入的密码不一致"))
                    }
                }, trigger: 'blur' 
            }
            
        },

        queryUsername(){
            return {
                validator: (rule, value, callback) => {
                    axios.post("/free/selectUsername",{val:value}).then(res=>{
                        debugger
                        if(res.data){
                            callback(new Error('用户名被占用'));
                        }else{
                            callback()
                        }
                    }).catch(err=>{
                        callback()
                    })
                }, trigger: 'blur' 
            }
        },
    }
}

export { afeiCheck }