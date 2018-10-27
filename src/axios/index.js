import axios from 'axios';
export default {
    //调用高德地图
    getApiResult(option){
        let baseApi = 'https://restapi.amap.com/v3/';
        return new Promise(function(resolve, reject){
            axios({
                method:'get',
                url:option.url,
                baseURL:baseApi,
                timeout:5000,
                params:option.data
            }).then((response,err)=>{
                if(response.status == 200){
                    return resolve(response.data)
                }else{
                    return reject(err)
                }
            })
        })
    },
    //调用mock
    getMockResult(option){
        let baseApi ='https://www.easy-mock.com/mock/5bb4c5b8e8e4196a97f07857/bicyapi';
        return new Promise(function(resolve, reject){
            axios({
                method:'get',
                url:option.url,
                baseURL:baseApi,
                timeout:15000,
                params:option.data
            }).then((response,err)=>{
                if(response.status == 200){
                    let data = response.data;
                    if(data.code == 0){
                        return resolve(data)
                    }
                }else{
                    return reject(err)
                }
            })
        })
    }
}