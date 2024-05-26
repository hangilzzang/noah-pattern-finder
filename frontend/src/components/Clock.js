import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  // 1초마다 API에 요청 보내기
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://localhost/api/current-time/');
        const data = await response.json();
        setCurrentTime(data.current_time);
      } catch (error) {
        console.error('Failed to fetch time:', error);
      }
    };

    // 처음 로드 시 한 번 호출하고 이후 1초마다 호출
    fetchTime();
    const interval = setInterval(fetchTime, 1000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1>현재시각[{currentTime}]</h1>
    </div>
  );
}

export default Clock;
