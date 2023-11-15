'use client';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import ComponentResults from './components/ComponentResults';
import Emojis from './components/Emojis';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ComponentResults />
      <Emojis />
      <div>
        <Component1 />
      </div>
      <div>
        <Component2 />
      </div>
      <div>
        <Component3 />
      </div>
    </div>
  );
};

export default Home;
