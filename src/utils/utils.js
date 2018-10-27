export default{
    formateDate(time){
        if(!time) return "";
        return time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    },
    pagination(res,callback){
      return{
          total:res.total,
          pageSize:res.page_size,
          showQuickJumper:false,
          showTotal:()=>`共${res.total}条`,
          onChange:(page) => {
            callback(page)
          }
      }
    }
}