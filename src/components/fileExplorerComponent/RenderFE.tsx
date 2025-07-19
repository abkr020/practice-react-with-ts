import { useState } from "react";

type structureType = {
    name: string;
    items?: (string | structureType)[];
}
type RenderFEProps = {
    obj: structureType;
    currentPath: number[];
}
const RenderFE: React.FC<RenderFEProps> = ({ obj, currentPath }) => {
    const [structure, setStructure] = useState<structureType>(obj)
    return (
        <>
            {/* <h1>RenderFE</h1> */}

            <div>
                {(Object.entries(structure) as [keyof structureType, any][]).map(([key, value]) => {
                    // console.log(key);
                    // console.log(typeof (key));
                    // console.log(typeof (structure[key]));
                    if (typeof (structure[key]) === 'string') {
                        console.log("a", key);
                        return <div
                            onClick={(e) => console.log("current path", currentPath)}
                            key={key}>folder {structure[key]}</div>
                    }
                    if (Array.isArray(structure[key])) {
                        console.log("b", key);
                        // console.log(key);

                        return (
                            <div key={key}
                                style={{ marginLeft: '35px' }}
                            >

                                {(structure[key] as (string | structureType)[]).map((it, i) => {
                                    if (typeof (it) == 'string') {
                                        console.log("c", key);
                                        return <div key={i}>file {it}</div>
                                    }
                                    if (typeof (it) == 'object') {
                                        console.log("d", key);
                                        // return <div key={i}>folder {it.name}</div>
                                        return (
                                            <RenderFE obj={it} currentPath={[...currentPath, currentPath.length]} />
                                        )
                                    }
                                })}

                            </div>

                        )

                    }


                })}
            </div>
        </>
    )
}
export default RenderFE