import React, { useState } from 'react';

// const Timer: React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);

//     return (
//         <div>
//             <h2>타이머 {seconds}초</h2>
//             <button onClick={() => { setInterval(() => { setSeconds((prev) => prev + 1) }, 1000) }}>
//                 Start
//             </button>
//         </div>
//     )
// };

// export default Timer;

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    return (
        <div>
            <p style={{ fontSize: '0.6rem', fontWeight: '600' }}>
                현재 시간 {time.toLocaleString()}
            </p>
        </div>
    )
};

export default Clock;