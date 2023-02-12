import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="ابحث هنا في المقالات ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="post">إضافة مقال </Link></li>
                <li><Link to="/">مقالات أكاديمية</Link></li>
                <li><Link to="/">مقالات عامة</Link></li>

            </ul>
        </nav>
    )
}

export default Nav