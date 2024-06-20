import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();

    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <>
            <main>
                {selectedBox
                    ? (
                        <>
                            <h1>Mailbox {selectedBox._id}</h1>
                            <h2>Details</h2>
                            <p>Boxholder: {selectedBox.boxHolder}</p>
                            <p>Box Size: {selectedBox.boxSize}</p>
                        </>
                    )
                    : (
                        <h1>Mailbox not found</h1>
                    )
                }
                
            </main>
        </>
    )
};

export default MailboxDetails;