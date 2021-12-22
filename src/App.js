import './App.css';
import styled from 'styled-components';

import { StateProvider } from './contexts/StateContext';

import History from './components/History';
import Calc from './components/Calc';



const App = () => {
    

    return (
        <StateProvider>
            <div className="container">
                
                    <Calc />
                    <History />
            </div>
        </StateProvider>
    );
}

export default App;