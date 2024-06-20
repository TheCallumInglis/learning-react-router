import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
    const navigate = useNavigate();

    const initialNewBox = {
        boxHolder: '',
        boxSize: 'Small'
    };
    const [newBox, setNewBox] = useState(initialNewBox);

    const newBoxHandler = (e) => {
        e.preventDefault();

        const {
            target: { name, value }
        } = e;

        setNewBox({ 
            ...newBox, 
            [name]: value 
        });
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let newBoxId = addBox(newBox);
        setNewBox(initialNewBox);

        //navigate(`/mailboxes/${newBoxId}`);
        navigate(`/mailboxes`); // User story specifically asked to go to mailboxes page
    }

    return (
        <>
            <main>
                <h1>New Mailbox</h1>
                
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="boxHolder">Enter a BoxHolder: 
                        <input type="text" name="boxHolder" value={newBox.boxHolder} placeholder="Boxholder name" onChange={newBoxHandler}/>
                    </label>

                    <label htmlFor="boxSize">Select a Box Size:
                        <select name="boxSize" value={newBox.boxSize} onChange={newBoxHandler}>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </label>

                    <input type="submit" value="Create Mailbox"/>
                </form>
            </main>
        </>
    )
};

export default MailboxForm;