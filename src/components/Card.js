import react, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/Card.scss';

const Card = (props) => {

    const [type, setType] = useState(() => {
        if (props.hasPrint) {
            return 'print';
        } else {
            return 'print sold out';
        }
    });
    
    
    const fade = useSpring({opacity: 1, from: {opacity: 0}})

    const setColor = async () => {
        document.getElementsByClassName("card")[props.id].style.backgroundColor = props.color;
    }
    
    useEffect(() => {
    })

    return (
        <animated.div style={fade} className="test">
                <img className="image" src={props.image} />
                <div className="title-area">
                    <h1>{props.title}</h1>
                    <DropdownButton id="drop" variant="info" title={type}>
                        {props.hasPrint ? <Dropdown.Item as="button" onClick={() => setType('print')}>print</Dropdown.Item> : <Dropdown.ItemText>print sold out</Dropdown.ItemText>}
                        {props.hasSignedPrint ? <Dropdown.Item as="button" onClick={() => setType('signed print')}>signed print</Dropdown.Item> : <Dropdown.ItemText>signed print s/o</Dropdown.ItemText>}
                        <Dropdown.Item as="button" onClick={() => setType('original')}>original</Dropdown.Item>
                    </DropdownButton>
                </div>
            <h3 className="date">{props.date}</h3>

            {type === 'print' ? <h6 className="description">{props.soldPrint} / ∞ sold</h6> : <span></span>}
            {type === 'signed print' ? <h6 className="description">{props.soldSignedPrint} / 20 sold</h6> : <span></span>}
            {type === 'original' ? <h6 className="description">0 / 1 sold</h6> : <span></span>}

            {type === 'print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.printPrice}</Button> : <span></span>}
            {type === 'signed print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.signedPrintPrice}</Button> : <span></span>}
            {type === 'original' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.originalPrice}</Button> : <span></span>}
        </animated.div>
    )
}

export default Card;