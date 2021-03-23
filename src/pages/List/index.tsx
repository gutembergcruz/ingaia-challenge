import React from 'react';

import logoImg from '../../assets/logo.svg';
import GlobalStyles from '../styles/global';
import { Form, Listagem } from './styles';

import placeholder from '../../assets/loading.jpg';

const List: React.FC = () => {
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
                <article>
                    <img src={placeholder} alt="" />
                    <div>
                        <p>Rick Sanchez</p>
                        <span>Human</span>
                    </div>
                </article>
                <article>
                    <img src={placeholder} alt="" />
                    <div>
                        <p>Rick Sanchez</p>
                        <span>Human</span>
                    </div>
                </article>
                <article>
                    <img src={placeholder} alt="" />
                    <div>
                        <p>Rick Sanchez</p>
                        <span>Human</span>
                    </div>
                </article>
                <article>
                    <img src={placeholder} alt="" />
                    <div>
                        <p>Rick Sanchez</p>
                        <span>Human</span>
                    </div>
                </article>
            </Listagem>
            <GlobalStyles />
        </>
    );
};

export default List;