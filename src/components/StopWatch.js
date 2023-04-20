import React,{useRef, useState} from 'react'

const StopWatch = () => {
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [hours,setHours]=useState(0);
    const refValue=useRef(null);

    function stopTimer(){
        clearInterval(refValue.current);
    }
    function startTimer(){
        clearInterval(refValue.current);
        refValue.current= setInterval(()=>{
            setSeconds(time=>{
                time+=.01;
                if(time>=60){
                    setMinutes(min=>{
                        min+=1;
                        if(min>=60){
                            setHours(hrs=>hrs+1);
                            return 0;
                        }
                        return min;
                    })
                    return 0;
                }
                return time;
            })
        },10);
    }
    function resetTime(){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }
  return (
    <div> 
        <p>Timer : {(""+hours).padStart(2,"0")}:{(""+minutes).padStart(2,"0")}:{(""+seconds.toFixed(2)).padStart(5,"0")}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTime}>Reset</button>
    </div>
  )
}

export default StopWatch