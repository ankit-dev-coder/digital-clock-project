
show=()=>{
    let time=new Date();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let ampm=hour >=12 ? "PM" : "AM";
    if(hour >12){
        hour -= 12
    }
    hour=hour < 10 ? "0" + hour : hour;
    minute=minute <10 ? "0" + minute : minute;
    second=second < 10 ? "0" + second : second;
    let currentTime=`${hour} : ${minute} : ${second} ${ampm}`;
    document.querySelector("#container").textContent=currentTime;
}
setInterval(show,1000);