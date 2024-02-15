import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World</h1>
      {!changedText && <Output>It is good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
