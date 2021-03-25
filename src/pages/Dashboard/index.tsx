import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import GlobalStyles from '../styles/global';
import { Form, Listagem } from './styles';

interface Items {
    name: string;
    species: string;
    image: string;
}
interface Found {
    name: string;
    species: string;
    image: string;
}
const Dashboard: React.FC = () => {
    const [foundChar, setFoundChar] = useState("");
    const [characters, setCharacters] = useState<Items[]>([]);

    function handeFound(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(foundChar);

        api.get(`character/`).then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results)
        })
    }

    return (
        <>
            <Form onSubmit={handeFound}>
                <img src={logoImg} alt="" />
                <div>
                    <input type="text" placeholder="Search characters" value={foundChar} onChange={(e): void => setFoundChar(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
            </Form>
            <Listagem>
                {characters.map(caracter => (
                    <article className={caracter.name == foundChar ? "found" : "found-d"}>
                        <img src={caracter.image} alt="" />
                        <div>
                            <p>{caracter.name}</p>
                            <span>{caracter.species}</span>
                        </div>
                    </article>
                ))}
                {characters.map(caracter => (
                    <article className={caracter.name == foundChar ? "found-d" : ""}>
                        <img src={caracter.image} alt="" />
                        <div>
                            <p>{caracter.name}</p>
                            <span>{caracter.species}</span>
                        </div>
                    </article>
                ))}
            </Listagem>
            <div>

            </div>
            <GlobalStyles />
        </>
    );
};

export default Dashboard;