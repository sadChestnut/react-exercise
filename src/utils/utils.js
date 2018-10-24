export default{
    formateDate(time){
        if(!time) return "";
        return time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    }
}