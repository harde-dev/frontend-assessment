import "./result.css";

const Result = ({ toggleModal, userBallot }) => {

    const renderResults = Object.keys(userBallot).map(category => {
        return (
            <div key={category} className='modal__result-ballots'>
                <h5 className="modal__result-cat">For {category.split('-').join(' ')}:</h5>
                {userBallot[category] ?
                    <p className="modal__result-selection">{userBallot[category].split('-').join(' ').toUpperCase()}</p> :
                    <p className="modal__result-selection">None</p>}
            </div>
        )
    })

    return (
        <div className="modal">
            <div className='modal__result'>
                <h4>Success! You submitted:</h4>
                <div className="modal__result-ballots-box">
                    {renderResults}
                </div>
                <button className="modal__close-btn" onClick={() => toggleModal()}>X</button>
            </div>
        </div>
    )
}

export default Result