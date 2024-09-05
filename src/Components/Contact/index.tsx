import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


import "./Contact.css"
import { useState } from 'react';
import { Button } from '../Button';
import { buttonTitleBudget, emailContact, locate, messageBudget, phoneNumber } from '../../Utils/Messages';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function formatPhoneNumber(phoneNumber: number): string {
        const phoneStr = phoneNumber.toString();
    
        const cleaned = phoneStr.replace(/\D/g, '');
    
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
    
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
    
        return phoneStr; 
    }
    
    


    return (
        <div id="contact" className="contact">
            <div className="contact-container">
                <div className="info">
                    <div className="phone">
                        <a href={`https://wa.me/${phoneNumber}?text=${messageBudget}`} target="_blank" rel="noopener noreferrer">
                            <FaPhoneAlt style={{ color: "#DAA520", width: "20px", height: '20px' }} />
                            <p>{formatPhoneNumber(phoneNumber)}</p>
                        </a>
                    </div>
                    <div className="email">
                        <a href="mailto:teste@teste.com">
                            <FaEnvelope style={{ color: "#DAA520", width: "20px", height: '20px' }} />
                            <p>{emailContact}</p>
                        </a>
                    </div>
                    <div className="locate">
                        <a>
                            <FaMapMarkerAlt style={{ color: "#DAA520", width: "20px", height: '20px' }} />
                            <p>{locate}</p>
                        </a>
                    </div>
                </div>
                <div className="form">
                    {/* <form onSubmit={handleSubmit}> */}
                    <form >
                        <div>
                            <input
                                type="text"
                                placeholder="Nome"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                placeholder="Mensagem..."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <Button type="submit" content={buttonTitleBudget} />
                    </form>
                </div>
            </div>
        </div>
    )
}