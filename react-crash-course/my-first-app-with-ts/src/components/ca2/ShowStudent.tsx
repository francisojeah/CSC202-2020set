import React from 'react';
import {Student} from './type-defs'
type Props = {
student: Student;
}
const ShowStudent: React.FC<Props> = (props) => {
    const showStudent = () => {
    const student = props.student;
    try{
    if(student.id !== undefined){
    return(
        <table>
        <th>Property</th>
        <th>Value</th>
        <tr>
        <td>id</td>
        <td>{student.id}</td>
        </tr>
        <tr>
        <td>department</td>
        <td>{student.department}</td>
        </tr>
        <tr>
        <td>matriculationNumber</td>
        <td>{student.matriculationNumber}</td>
        </tr>
        <tr>
        <td>modeOfEntry</td>
        <td>{student.modeOfEntry}</td>
        </tr>
        <tr>
        <td>programOfStudy</td>
        <td>{student.programOfStudy}</td>
        </tr>
        <tr>
        <td>yearOfEntry</td>
        <td>{student.yearOfEntry}</td>
        </tr>
        </table>
    )
    }else{
    return 'No Student info to display'; 
    }
    }catch(error:any){
    return `Problem fetching student info ${error.message}`;
    }
}
return (
<div>
{showStudent()}
</div>
)
}
export default ShowStudent;