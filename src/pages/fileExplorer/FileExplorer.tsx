import { useState } from "react";

const FileExplorerPage = () => {
    const [structure, setStructure] = useState({
        name: 'folder 1',
        items: [
            'a',
            'b',
            'c',
            {
                name: 'folder 2',
                items: [
                    'a',
                    'b',
                    {
                        name: 'folder 3',
                        items: [
                            'w',
                            's',
                            {
                                name: 'folder 3'
                            }
                        ]
                    }
                ]
            },
            {
                name:'folder 0.5'
            }
        ]
    })
    return (
        <>
            <h1>file explorer</h1>
            {Object.entries(structure).map(([key, value]) => {
                console.log(key);
                console.log(typeof (key));
                console.log(typeof (structure[key]));
                
                // if (typeof (structure[key]) === 'string') {
                //     console.log(key);
                //    return <div>folder {structure[key]}</div>
                // }
                // if(typeof(structure[key]))
            })}
        </>
    )
}
export default FileExplorerPage;