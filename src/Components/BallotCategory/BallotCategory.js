import React, { useState } from 'react'
import Nominee from '../Nominee/Nominee'

const BallotCategory = ({ ballot, moveSelections }) => {
    const [selection, setSelection] = useState('');

    const showNominees = (nominees) => {
        return nominees.map(nominee => {
            const highlight = nominee.id === selection ? "highlight" : ""
            return <Nominee
                key={nominee.id}
                id={nominee.id}
                title={nominee.title}
                image={nominee.imageUrl}
                highlight={highlight}
            />
        })
    }

    return (
        <div>BallotCategory
            <Nominee />
        </div>
    )
}

export default BallotCategory