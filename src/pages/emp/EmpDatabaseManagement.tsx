import { useState } from 'react';
import './EmpDatabaseManagement.css'
import AddEmpForm from './AddEmpForm';
type Emp = {
    id: number;
    name: string;
    email: string;
};
const EmpDatabaseManagement = () => {
    const [selectedEmp, setSelectedEmp] = useState<number>(0);
    const [isopen, setIsopen] = useState<boolean>(false)
    const [emps, setEmps] = useState<Emp[]>(
        () => {
            const stored = localStorage.getItem("emps");
            return stored ? JSON.parse(stored) : [];
        })
    console.log("selected ", selectedEmp);

    return (
        <>
            {isopen && <AddEmpForm setIsopen={setIsopen} setEmps={setEmps} />}
            <h1>emp database management</h1>
            <button onClick={() => setIsopen(!isopen)}>add emp</button>
            <div className="emp-container">
                <div className="emp-list">
                    <h2>emp list</h2>
                    <div className="emp-name-list">

                        {emps.map((emp, i) => {
                            return (
                                <div className={`single-emp-name ${selectedEmp == i ? 'selected-emp' : ''}`} key={i}>

                                    <div onClick={() => setSelectedEmp(i)}>{emp.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="emp-detail">
                    <h2>emp details</h2>
                    {emps.map((emp, i) => {
                        return (
                            <div key={i}>
                                {i == selectedEmp && (
                                    // {emp.id == selectedEmp && (
                                    <>
                                        <div>id: {emp.id}</div>
                                        <div>name: {emp.name}</div>
                                        <div>email: {emp.email}</div>
                                    </>
                                )}
                                {/* if(emp.id==selectedEmp){
                                return(
                                    <div>{emp.email}</div>
                                    
                                )
                            } */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default EmpDatabaseManagement;