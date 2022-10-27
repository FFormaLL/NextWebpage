import Wrapper from './Wrapper'
import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    setTimeout(() => setTime(new Date()), 200)
  }, [time])

  const day = time.getDay()
  const month = time.getMonth()
  const year = (time.getFullYear() - 2000)

  let hours = time.getHours()
  let minutes = time.getMinutes().toString()
  const ampm = hours < 12 ? "am": "pm"

  if (!hours){
    hours = 12
  }

  if (hours > 12){
    hours -= 12
  }

  if (minutes.length === 1){
    minutes = `0${minutes}` 
  }

  return (
    <Wrapper>
      <span>
        {month}/
        {day}/
        {year}&nbsp;
        {hours}:
        {minutes}
        {ampm}
      </span>
    </Wrapper>
  );
}

