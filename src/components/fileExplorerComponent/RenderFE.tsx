import { useState } from "react";

type structureType = {
    name: string;
    items?: (string | structureType)[];
}
type RenderFEProps = {
    obj: structureType;
    currentPath: string[];
    setStructure: React.Dispatch<React.SetStateAction<structureType>>;
    handleFileAdd: (currentPath: string[]) => void;
}
const RenderFE: React.FC<RenderFEProps> = ({ obj, currentPath, setStructure, handleFileAdd }) => {
    // const [structure, setStructure] = useState<structureType>(obj)
    //     const handleFileAdd = (currentPath: string[]) => {
    //         setStructure(pre => {
    // pre
    //         })

    //     }
    return (
        <>
            {/* <h1>RenderFE</h1> */}

            <div>
                {(Object.entries(obj) as [keyof structureType, any][]).map(([key, value]) => {
                    // console.log(key);
                    // console.log("aa",value);
                    // console.log(typeof (key));
                    // console.log(typeof (structure[key]));
                    if (typeof (obj[key]) === 'string') {
                        // console.log("a", key);
                        let keyPath =`${currentPath}/${key}-folder`;
                        return <div
                            style={{ display: 'flex', gap: '20px', border: '1px dashed tomato' }}
                            // onClick={(e) => console.log("current path", currentPath)}
                            key={keyPath}>folder {obj[key]}
                            <div
                                onClick={() => {
                                    // console.log(currentPath);
                                    // currentPath?.map((path)=>{
                                    //     // setStructure((prev)=>{

                                    //     // })
                                    // })

                                }}
                            >
                                +folder
                            </div>
                            <div
                                onClick={() => {
                                    // const tempObj = {};
                                    // console.log(currentPath);
                                    // console.log("pre obj", obj);
                                    // obj={...obj,items:[...obj?.items,'z']}
                                    // console.log("updated obj ", obj);
                                    // currentPath?.map((path)=>{
                                    handleFileAdd(currentPath);

                                    // })

                                }}
                            >
                                +file
                            </div>
                        </div>
                    }
                    if (Array.isArray(obj[key])) {
                        // console.log("b", key);
                        // console.log(key);
                        const keyPath = `${currentPath}/${key}`
                        return (
                            <div key={keyPath}
                                style={{ marginLeft: '35px' }}
                            >

                                {(obj[key] as (string | structureType)[]).map((it, i) => {
                                    if (typeof (it) == 'string') {
                                        // console.log("c", key);
                                        return <div key={`${currentPath}/${i}-file`}>file {it}</div>
                                    }
                                    if (typeof (it) == 'object') {
                                        // console.log("d", key);
                                        // return <div key={i}>folder {it.name}</div>
                                        return (
                                            <RenderFE 
                                            key={`${currentPath}/${it.name}`}
                                            obj={it} currentPath={[...currentPath, it?.name]} setStructure={setStructure} handleFileAdd={handleFileAdd} />
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