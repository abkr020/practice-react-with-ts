import { useState } from "react";
import RenderFE from "../../components/fileExplorerComponent/RenderFE";
type structureType = {
    name: string;
    items?: (string | structureType)[];
}
const FileExplorerPage = () => {
    const [structure, setStructure] = useState<structureType>(
        {
            name: 'root',
            items: [
                'a',
                'b',
                'c',
                {
                    name: 'folder 1',
                    items: [
                        'a',
                        'b',
                        {
                            name: 'folder 2',
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
                    name: 'folder 0.5'
                }
            ]
        }
    )
    return (
        <>
        <RenderFE obj={structure} currentPath={[0]}/>
            <h1>file explorer</h1>
            {(Object.entries(structure) as [keyof structureType, any][]).map(([key, value]) => {
                // console.log(key);
                // console.log(typeof (key));
                // console.log(typeof (structure[key]));
                if (typeof (structure[key]) === 'string') {
                    console.log("a", key);
                    return <div key={key}>folder {structure[key]}</div>
                }
                if (Array.isArray(structure[key])) {
                    console.log("b", key);
                    // console.log(key);
                    
                      return  (structure[key] as (string | structureType)[]).map((it, i) => {
                            if (typeof (it) == 'string') {
                                console.log("c", key);
                                return <div key={i}>file {it}</div>
                            }
                            if (typeof (it) == 'object') {
                                console.log("d", key);
                                return <div key={i}>folder {it.name}</div>
                            }
                            return <div key={i}>c</div>
                        })
                    
                }
                return <div>g</div>


            })}


        </>
    )
}
export default FileExplorerPage;