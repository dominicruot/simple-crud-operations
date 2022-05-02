import { useState, useEffect } from 'react';
import './App.css';
import React from 'react'
import AddMovie from './AddMovie';

function App() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        setMovies([{
            name: 'Billions',
            genre: 'Drama',
            starring: 'Damian Lewis, Paul Giamatt',
        },
        {
            name: 'Sarafina',
            genre: 'drama',
            starring: 'Leleti Khumalo',
        },

        ])
    }, [])
    return (<div>
        <AddMovie />
    </div>
    );
}

export default App