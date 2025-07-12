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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEmp: Emp = {
            id: Date.now(),
            name: 'n',
            email: 'n'
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
            <form onSubmit={handleSubmit}>
                {/* <input type="number" placeholder=""/> */}
                <input type="text" placeholder="enter name" />
                <input type="email" placeholder="enter email" />
                <button type="submit">submit</button>
            </form>
        </>
    )

}
export default AddEmpForm;