import React from 'react';

import logoImg from '../../assets/logo.svg';
import GlobalStyles from '../styles/global';
import { Form } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <Form>
                <img src={logoImg} alt="" />
                <div>
                    <input type="text" placeholder="Search characters"/>
                    <button type="submit">Search</button>
                </div>
            </Form>
            <GlobalStyles />
        </>
    );
};

export default Dashboard;