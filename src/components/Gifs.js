import React from 'react'
import './gif.css'

export default function Gif({ title, id, url }) {
    return (
        <a href={`#${id}`}
        className='Gif'>
            <small>{title}</small>
            <img alt={title} src={url} />
        </a>
    )
}