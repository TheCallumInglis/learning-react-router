import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const initialMailboxes = [
    { _id: 1, boxSize: 'small', boxHolder: 'Alice' },
    { _id: 2, boxSize: 'medium', boxHolder: 'Bob' },
    { _id: 3, boxSize: 'large', boxHolder: 'Charlie' }
  ]
  const [mailboxes, setMailboxes] = useState(initialMailboxes);

  const addBox = ({ boxSize, boxHolder }) => {
    const newBoxId = mailboxes.length + 1;

    setMailboxes([...mailboxes, {
      boxSize,
      boxHolder,
      _id: newBoxId
    }]);

    return newBoxId;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
      </Routes>
    </Router>
  )
};

export default App;
