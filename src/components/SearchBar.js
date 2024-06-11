import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar(){
    const {term, handleSearch} = useContext(SearchContext);
    const simpleStyle = {
        'display': 'flex',
        'height': '20vh',
        'margin': '2px',
        'alignItems': 'center',
        'justifyContent': 'center'
    }

    return (
            <form style={simpleStyle}>
                <input ref={term} type="text" placeholder="Search Here" />
                <button onClick={ (e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
    )
}

export default SearchBar

