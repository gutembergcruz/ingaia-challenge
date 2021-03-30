import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import GlobalStyles from '../styles/global';
import { Form, Listagem, Modal } from './styles';

interface Items {
    name: string;
    species: string;
    image: string;
    id: number
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
                    <a href="teste" key={caracter.id} className={caracter.name === foundChar ? "found" : "found-d"}>
                        <img src={caracter.image} alt="" />
                        <div>
                            <p>{caracter.name}</p>
                            <span>{caracter.species}</span>
                        </div>
                    </a>
                ))}
                {characters.map(caracter => (
                    <a href="teste" key={caracter.id} className={caracter.name === foundChar ? "found-d" : ""}>
                        <img src={caracter.image} alt="" />
                        <div>
                            <p>{caracter.name}</p>
                            <span>{caracter.species}</span>
                        </div>
                    </a>
                ))}
            </Listagem>
            <Modal>
                <article>
                    <aside>
                        <div className="imgFundo">
                            <img src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcyNDI1Nl9zY3JlZW5fMF8xNTE1MjA4NTM5XzA4NA/screen-0.jpg?fakeurl=1&type=.jpg" alt="" />
                        </div>
                        <div className="imgCard">
                            <img src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcyNDI1Nl9zY3JlZW5fMF8xNTE1MjA4NTM5XzA4NA/screen-0.jpg?fakeurl=1&type=.jpg" alt="" />
                            <span>
                                <h4>Teste</h4>
                                <p>Testador</p>
                            </span>
                        </div>
                    </aside>
                    <main>
                        <div>
                            <h3>About</h3>
                            <p>Rick Sanchez is a male human. He is alive and well. Last seen in May 31, 2020.</p>
                        </div>
                        <div>
                            <h3>Origin</h3>
                            <span>Planet</span>
                            <h4>Earth (Replacement Dimension)</h4>
                            <p>Replacement Dimension</p>
                            <span>54 residents</span>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <span>Planet</span>
                            <h4>Earth (Replacement Dimension)</h4>
                            <p>Replacement Dimension</p>
                            <span>54 residents</span>
                        </div>
                    </main>
                </article>
            </Modal>
            <GlobalStyles />
        </>
    );
};
export default Dashboard;