import './BtnPanel.css'
import Button from "./Button";

const BtnPanel = ({clickHandler}) => {
    const handleClick = btnName => {clickHandler(btnName)}
    return(
        <div className='component-btn-panel'>
            <div>
                <Button name='AC' clickHandler={handleClick} gray/>
                <Button name='+/-' clickHandler={handleClick} gray/>
                <Button name='%' clickHandler={handleClick} gray/>
                <Button name='/' clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name='7' clickHandler={handleClick} light/>
                <Button name='8' clickHandler={handleClick} light/>
                <Button name='9' clickHandler={handleClick} light/>
                <Button name='x' clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name='4' clickHandler={handleClick} light/>
                <Button name='5' clickHandler={handleClick} light/>
                <Button name='6' clickHandler={handleClick} light/>
                <Button name='-' clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name='1' clickHandler={handleClick} light/>
                <Button name='2' clickHandler={handleClick} light/>
                <Button name='3' clickHandler={handleClick} light/>
                <Button name='+' clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name='0' clickHandler={handleClick} light wide/>
                <Button name='.' clickHandler={handleClick} light/>
                <Button name='=' clickHandler={handleClick} green/>
            </div>
        </div>
    )
}

export default BtnPanel;