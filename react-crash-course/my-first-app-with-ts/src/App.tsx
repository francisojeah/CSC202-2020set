import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 name="Pius" />
    </div>
  );
}
export default App;

