import React from "react";

function Option (props) {
    return (
        <div className="option-item" onClick={props.click}>
            <div className="opt-icon">{props.icon}</div>
            <div className="opt-body"><div className="opt-name">{props.mainText}</div><div className="opt-desc">{props.subText}</div></div>
            <div className="opt-badge">{props.tag ? props.tag : ""}</div>
        </div>
    )

}
function HomeOption (props) {
    return (
        <div className={`choice-card ${props.addClass ? props.addClass : ""}`}  onClick={props.click}>
            <span className="card-icon" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
                <img src={props.image} width="100px" height="64px" />
            </span>
            <div className="card-label">{props.mainText}</div>
            <div className="card-sub">{props.subText}</div>
        </div>
    )
}

export default Option
export {HomeOption}