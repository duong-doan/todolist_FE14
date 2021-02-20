import React from 'react'

export const Pagination = () => {
    return (
        <div className="pagination">
            <i className="fas fa-chevron-left"></i>
            <ul className="pagination__list">
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
            </ul>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
}
