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
                        'x',
                        'y',
                        {
                            name: 'folder 2',
                            items: [
                                'p',
                                'q',
                                // {
                                //     name: 'folder 3'
                                // }
                            ]
                        }
                    ]
                },
                // {
                //     name: 'folder 0.5'
                // }
            ]
        }
    )
    const handleFileAddAction = (currentPath: string[], index: number, structureObj: structureType) => {
        // console.log("11",structureObj);

        // let changeItems=[];
        if (currentPath.length - 1 > index) {
            // let tempObj: structureType;
            let a = structureObj?.items?.map((item) => {
                // console.log("item 5",item);

                if (typeof item === 'object') {
                    let changeObj = handleFileAddAction(currentPath, index + 1, item);
                    console.log("change items ", changeObj);
                    return changeObj

                }
                return item;
            })
            console.log("a", a);
            structureObj.items = a;
            return structureObj;

            // for (const key in structureObj) {
            //     if (typeof structureObj[key] === 'object') {


            //         handleFileAddAction(currentPath, index + 1, tempObj)
            //     }
            // }
        }
        const tempObj = structureObj;
        const tempItems = tempObj?.items;
        tempObj.items = [...(tempItems ?? []), 'mvfffffbn']
        // console.log("ite 1",structureObj.items);
        // let ite:structureType=structureObj?.items? structureObj.items :[];
        // console.log("ite",ite);

        return tempObj;
        // const items = [...tempObj.items,'z'];
        // console.log("1 items",items);



        //  setStructure( pre=>{
        //         console.log("2 1",pre);
        //         console.log("2",pre.items);
        //         const itemsChange = pre.items;
        //         return ({...pre,items:[...itemsChange,'z']})
        //     })

    }
    const handleFileAdd = (currentPath: string[]) => {
        // console.log("path 1", currentPath);
        const ob = handleFileAddAction(currentPath, 0, structure);
        console.log("==", ob);
        // setStructure(ob);
        setStructure({...ob});

    }
    return (
        <>
            <RenderFE obj={structure} currentPath={[structure?.name]} setStructure={setStructure} handleFileAdd={handleFileAdd} />
            {/* <h1>file explorer</h1>
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
                                // console.log("c", key);
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


            })} */}


        </>
    )
}
export default FileExplorerPage;