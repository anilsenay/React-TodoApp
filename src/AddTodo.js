import React, {useState} from 'react'

const AddTodo = ({addTodo}) => {

    const [state, setState] = useState(
        {content: ''}
        );

    const handleChange = (e) => {
        setState({content: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        addTodo(state);
        setState({content: ''});
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={handleChange} value = {state.content}/>
            </form>
        </div>
    )
}

export default AddTodo;