import React, { useEffect, useState } from 'react';

interface Props {
    first: string;
    setFirst: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ first, setFirst }) => {
    const [val, setVal] = useState<string>('')
    useEffect(() => {
        setFirst(val)
    }, [val])
    return (
        <div>
            <input
                style={{ color: 'white' }}
                value={first}
                onChange={(e) => setVal(e.target.value)}
                type="text"
            />
        </div>
    );
};

export default Input;
