import { useState } from 'react';
import { useStateValue } from '../../contexts/StateContext';
import styled, { css } from 'styled-components';
import './style.css'


const Botao = styled.div`
    background-color: #999;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    cursor: pointer;

    ${props => props.zero && css`
        grid-column: 1 / 4;
    `}

    ${props => props.plus && css`
        grid-column: 4 / 5;
        grid-row: 2 / 4;
    `}

    ${props => props.res && css`
        grid-column: 4 / 5;
        grid-row: 4 / 6;
    `}

    &:hover {
    background-color: #777;
}
`;

const Screen = styled.div`
    font-size: 30px;
    text-align: right;
    border: 1px solid #000;
    padding: 10px;
    margin-bottom: 5px;
`;

const Keys = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
`;

export default () => {
    const [state, dispatch] = useStateValue();


    const [screen, setScreen] = useState('0');


    const add = (s) => {
        if(screen === '0') {
            setScreen(s);
        } else {
            setScreen(screen + s);
        }
    }

    const calcResult = () => {
        let r = eval(screen.toString());

        dispatch({
            type: 'addCalc',
            calc: `${screen} = ${r}`
        });

        setScreen(r);
    }


    return (
        
    <div className={`box calc`}>
        <Screen>{screen}</Screen>
            <Keys>
                <Botao onClick={()=>setScreen('0')}>C</Botao>
                <Botao onClick={()=>add('/')}>/</Botao>
                <Botao onClick={()=>add('*')}>*</Botao>
                <Botao onClick={()=>add('-')}>-</Botao>
                <Botao onClick={()=>add('7')}>7</Botao>
                <Botao onClick={()=>add('8')}>8</Botao>
                <Botao onClick={()=>add('9')}>9</Botao>
                <Botao plus onClick={()=>add('+')}>+</Botao>
                <Botao onClick={()=>add('4')}>4</Botao>
                <Botao onClick={()=>add('5')}>5</Botao>
                <Botao onClick={()=>add('6')}>6</Botao>
                <Botao res onClick={()=>calcResult()}>R</Botao>
                <Botao onClick={()=>add('1')}>1</Botao>
                <Botao onClick={()=>add('2')}>2</Botao>
                <Botao onClick={()=>add('3')}>3</Botao>
                <Botao zero onClick={()=>add('0')}>0</Botao>
            </Keys>
    </div>
    );
}