import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    const handleChange = (e) => {
        handleSearchNote(e.target.value);
    };

    return (
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em' />
            <input
                type='text'
                placeholder='Type to Search'
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
