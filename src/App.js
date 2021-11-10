import React, {useState} from 'react';
import Modal from './components/Modal';

import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="App">
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} isClickOutside={true}>
                <div className="content">
                    Your content here!
                </div>
            </Modal>

            <button onClick={toggleModal}>Open Modal</button>
        </div>
    );
}

export default App;
