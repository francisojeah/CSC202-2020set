/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, {useState, useEffect, useRef} from 'react';
import ShowStudent from './ShowStudent';
type Props = {
name?: string;
other?: string;
}
const Student: React.FC<Props> = (props) => {
const [student, setStudent] = useState(null);
let studentIdInput: any = useRef(); 
const refetchData = async () =>{
try {
let response = await fetch(`http://isms.com:3000/students/${studentIdInput.current.value}`);
let data = await response.json()
setStudent(data);
} catch (error) {
setStudent(null);
}
};
const fetchData = async () =>{
try {
let response = await fetch(`http://isms.com:3000/students/1`);
let data = await response.json()
setStudent(data);
} catch (error) {
setStudent(null);
}
};
useEffect(() => {
fetchData();
studentIdInput.current.focus();
}, []);
const showStudent = () => {
if (student!==null){
return <ShowStudent student={student} />
}
else {
return 'No student to display';
}
}
return (
<div>
<p>Hello. Welcome to my website.</p>
<p>
<input ref={studentIdInput} type="number"
placeholder="Enter StudentId here" />
</p>
<p>
<button onClick={refetchData}>
Fetch Student
</button>
</p>
<p>
{showStudent()}
</p>
</div>
)
}
export default Student;