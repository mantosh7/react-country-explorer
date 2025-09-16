export const SearchFilter = (props) => {
    const { search, setSearch } = props;

    function handleSearch(e)
    {
        e.preventDefault() ;
        setSearch(e.target.value) ;
    }

    return (
        <div className="search-section-container">
            <input
                type="text"
                placeholder="serach"
                onChange={handleSearch}
                value={search}
            />
        </div>
    )
}