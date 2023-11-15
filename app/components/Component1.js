'use client';
import useCounterStore from '../store/counter';

const Component1 = () => {
  const { count1, incrementCount1 } = useCounterStore();

  return (
    <div className="component">
      <strong>Component 1</strong>
      <p>Count: {count1}</p>
      <button
        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={incrementCount1}
      >
        Increment
      </button>
    </div>
  );
};

export default Component1;
