'use client';
import useCounterStore from '../store/counter';

const Component1 = () => {
  const { count2, incrementCount2 } = useCounterStore();

  return (
    <div className="component">
      <strong>Component 2</strong>
      <p>Count: {count2}</p>
      <button
        className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={incrementCount2}
      >
        Increment
      </button>
    </div>
  );
};

export default Component1;
