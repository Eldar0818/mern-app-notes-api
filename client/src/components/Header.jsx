import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({ darkMode, setDarkMode, searchValue, setSearchValue }) => {
  return (
    <header className="header">
        <div className="header-top">
            <div className="logo">Notification App</div>
                <button 
                    className="them-btn"
                    onClick={()=> setDarkMode(!darkMode)}
                    >
                        light/dark
                    </button>
        </div>

        <div className="searchbar">
            <div className="search">
                <AiOutlineSearch className='search-icon' />
                <input 
                    type="search"
                    placeholder='Search Notes...'
                    value={searchValue}
                    onChange={event=> setSearchValue(event.target.value)}
                 />
            </div>
        </div>

    </header>
  )
}

export default Header