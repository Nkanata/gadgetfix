import React, {useState} from "react";

const LocationBtn = (props) => {
    const [clicked, setClicked] = useState(false)
    const [destination, setDestination] = useState({})
    const normStyle = {
        backgroundColor: "",
        color: ""
    }
    const activeStyle = {
        backgroundColor: "#0071e3",
        color: "white"
    }
    let style = props.getStyle(props.id) ? activeStyle : normStyle

    function click(props) {
        if (clicked)
            setClicked(false);
        else
            setClicked(true);
        props.handleShippingClick(props.id)
    }

    return (
        <>
            <button type="button"
                    id={props.index}
                    style={style}
                //onClickCapture={props.handleShippingClick}
                    onClick={() => click(props)}
                    className="locationBtn list list-group-item list-group-item-action "
                    >
                <span className="destination">{props.destination.destination}</span>
                <span
                    className="via">{props.destination.courier}</span>
                <span
                    className="shipping_price">KShs. {props.destination.price}</span>
            </button>
        </>
    )
}
export default LocationBtn