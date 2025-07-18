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
            }
        ]
    })
    return (
        <>
            <h1>file explorer</h1>
        </>
    )
}
export default FileExplorerPage;