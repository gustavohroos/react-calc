import { useStateValue } from '../../contexts/StateContext';
import './style.css'

export default () => {
    const [state, dispatch] = useStateValue();

    return (
        

        <div className={`box theme-${state.theme}`}>
            <div className='history' >
                Historico de contas:
                {state.calc.history.map((item, index)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};