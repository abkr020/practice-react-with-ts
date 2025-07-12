import { useState } from "react";
import './EmpForm.css'
type Emp = {
    id: number,
    name: string,
    email: string
}
type AddEmpFormProps = {
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
    setEmps: React.Dispatch<React.SetStateAction<Emp[]>>;
}
const AddEmpForm: React.FC<AddEmpFormProps> = ({ setIsopen, setEmps }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEmp: Emp = {
            id: Date.now(),
            name: name,
            email: email,
        }
        setEmps(prev => {
            const updated = [...prev, newEmp];
            localStorage.setItem("emps", JSON.stringify(updated))
            return updated;
        })
        setIsopen(false);

    }
    return (
        <>
            <div
            onClick={()=>setIsopen(false)}
             className="form-wrapper">
                <div
                onClick={(e)=>e.stopPropagation()}
                 className="form-div">
                    <h2>add new emp form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* <input type="number" placeholder=""/> */}
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="enter name" />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email" />
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}
export default AddEmpForm;