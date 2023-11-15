'use client';
import useCounterStore from '../store/counter';

const ComponentResults = () => {
  const { count1, count2, count3 } = useCounterStore();

  return (
    <div>
      <strong>Component Results</strong>
      <div>
        <p>component 1: {count1}</p>
        <p>component 2: {count2}</p>
        <p>component 3: {count3}</p>
      </div>
    </div>
  );
};

export default ComponentResults;
