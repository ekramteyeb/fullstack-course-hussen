import React from 'react'

const PersonForm = (props) => {

    return (
        <form>
            <div> Name : <input value={props.newName} onChange={props.handleNewName}/> </div>
            <div> Number: <input value={props.number} onChange={props.handleNumber} /> </div>
            <div> <button onClick={props.addPerson} type="submit"> add </button></div>
        </form>
    )
}
export default PersonForm