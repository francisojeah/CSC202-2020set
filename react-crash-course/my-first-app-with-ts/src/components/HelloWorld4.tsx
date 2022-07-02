import React, { useState } from 'react';

type Props = {
    name?: string;
    other?: string;
}
/*
const HelloWorld4: React.FC<Props> = (props) => {
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);
    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }
    return (
        <div>
            <p>Hello {name}. Greetings from React.</p> 
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/>
            </p>
            <p>You clicked {count} times</p>
            <p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </p>
        </div>
    )
}
HelloWorld4.defaultProps = {
    name: "John"
} 
export default HelloWorld4;
*/

const HelloWorld5: React.FC<Props> = (props) => {

return (
    <div>
        <form id="createUserForm" action="http://isms.com/students" method="POST">
        <label>Department:</label>
        <p><input id="department" name="department" type="text" placeholder="Department"></input></p>
        <label>Matriculation  Number:</label>
        <p><input id="matriculationNumber" name="matriculationNumber" type="text" placeholder="Matriculation Number"></input></p>
        <label>Mode of Entry:</label>
        <p><select id="modeOfEntry">
                <option selected value="UTME">UTME</option>
                <option value="DEntry">Direct Entry</option>
                <option value="transfer">Transfer</option>
            </select>
        </p>
        <label>Program Of Entry:</label>
        <p><input id="programOfStudy" name="programOfStudy" type="text" placeholder="Program of Study"></input></p>
        <label>Year of Entry:</label>
        <p><input id="yearOfEntry" name="yearOfEntry" type="number" placeholder="yyyy"></input></p>
        <label>First Name:</label>
        <p><input id="firstName" name="firstName" type="text" placeholder="First Name"></input></p>
        <label>Middle Name:</label>
        <p><input id="middleName" name="middleName" type="text" placeholder="Middle Name"></input></p>
        <label>Last Name:</label>
        <p><input id="lastName" name="lastName" type="text" placeholder="Last Name"></input></p>
        <label>Email:</label>
        <p><input id="email" name="email" type="email" placeholder="Email"></input></p>
        <label>Date of Birth:</label>
        <p><input id="dateOfBirth" name="dateOfBirth" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" placeholder="yyyy-mm-dd"></input></p>
        <label>Nationality:</label>
        <p><input id="nationality" name="nationality" type="text" placeholder="Nationality"></input></p>
        <label>Address:</label>
        <p><input id="address" name="address" type="text" placeholder="Address"></input></p>
        {/* <p><button type="submit" id="submitCreateUserForm"><a href="http://localhost:3000/">Submit</a></button></p> */}
        <p><button type="submit" id="submitCreateUserForm">Submit</button></p>
        <p><button type="reset">Clear</button></p>
        </form>
    </div>
)
}

export default HelloWorld5;
