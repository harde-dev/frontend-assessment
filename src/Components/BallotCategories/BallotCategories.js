import React, { useState } from 'react';
import Nominee from '../Nominee/Nominee';

import "./ballotCategories.css";

const BallotCategories = ({ ballot, moveSelections }) => {
    const [selection, setSelection] = useState('');

    const showNominees = (nominees) => {
        return nominees.map(nominee => {
            const highlight = nominee.id === selection ? "highlight" : ""
            return <Nominee
                key={nominee.id}
                id={nominee.id}
                title={nominee.title}
                photo={nominee.photoUrl}
                highlight={highlight}
            />
        })
    }

    const toggleHighlight = (e) => {
        if (e.target.id) {
            setSelection(e.target.id)
            moveSelections(e.target.id, ballot.id)
        }
    }

    return (
        <>
            <div className='categories'>
                <h2 className='categories__header'>{ballot.title}</h2>
            </div>
            <div className='categories__main' onClick={e => toggleHighlight(e)}>
                {showNominees(ballot.items)}
            </div>
        </>
    )
}

export default BallotCategories;