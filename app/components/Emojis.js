'use client';
import useCounterStore from '../store/counter';
import { useEffect, useState } from 'react';

const Emojis = () => {
  const [emoji, setEmoji] = useState('');
  const { count1, count2, count3 } = useCounterStore();

  useEffect(() => {
    setEmoji('💊');
  }, [count1]);

  useEffect(() => {
    setEmoji('🍀');
  }, [count2]);

  useEffect(() => {
    setEmoji('🐦');
  }, [count3]);

  return (
    <div className="component">
      <strong>Emojis</strong>
      <div className="text-center">{emoji}</div>
    </div>
  );
};

export default Emojis;
