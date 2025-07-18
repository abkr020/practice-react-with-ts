import { useState } from "react";

type structureType = {
    name: string;
    items?: (string | structureType)[];
}
type RenderFEProps ={
    obj:structureType;
}
const RenderFE:React.FC<RenderFEProps> = ({ obj }) => {
    const [structure, setStructure] = useState<structureType>(obj)
    return (
        <>
            {/* <h1>RenderFE</h1> */}
            <div style={{marginLeft:'35px'}}>

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

                    return (structure[key] as (string | structureType)[]).map((it, i) => {
                        if (typeof (it) == 'string') {
                            console.log("c", key);
                            return <div key={i}>file {it}</div>
                        }
                        if (typeof (it) == 'object') {
                            console.log("d", key);
                            // return <div key={i}>folder {it.name}</div>
                            return(
                                <RenderFE obj={it}/>
                            )
                        }
                        return <div key={i}>c</div>
                    })

                }
                return <div>g</div>


            })}
            </div>
        </>
    )
}
export default RenderFE