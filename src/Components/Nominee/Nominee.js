import "./nominee.css";

const Nominee = ({ title, image, id, highlight }) => {
    return (
        <div className={`nominee__card ${highlight}`} >
            <h3>{title}</h3>
            <div>
                <img className="nominee__img" src={image} alt={`poster for film titled ${title}`} />
            </div>
            {highlight ?
                <button className="nominee__button" id={id}>Selected!</button> :
                <button className="nominee__button" id={id}>Nominate!</button>}
        </div>
    )
}

export default Nominee