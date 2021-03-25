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
    const [foundChar, setFoundChar] = useState<Found[]>([]);
    const [characters, setCharacters] = useState<Items[]>([]);

    useEffect(() => {
        api.get(`character/`).then(response => {
            setCharacters(response.data.results)
        })
    }, []);

    useEffect(() => {
        setFoundChar(characters.filter(character => character.name == "Morty Smith"));
    }, []);

    return (
        <>
            <Form>
                <img src={logoImg} alt="" />
                <div>
                    <input type="text" placeholder="Search characters" />
                    <button type="submit">Search</button>
                </div>
            </Form>
            <Listagem>
                {characters.map(caracter => (
                    <article className={caracter.name == "Morty Smith" ? "found" : ""}>
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