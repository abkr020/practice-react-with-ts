import React, { useState } from 'react';
import Input from '../../components/inputGlich/input';
// import Input from '../../components/inputGlich/Input';

const InputGlich = () => {
  const [first, setFirst] = useState<string>(''); // initialize with empty string

  return (
    <div>
      <Input first={first} setFirst={setFirst} />
    </div>
  );
};

export default InputGlich;
