import React from 'react'

function TransactionList() {
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    <span>-$400</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList
