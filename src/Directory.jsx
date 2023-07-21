function Directory() {
    return (
        <div>
            <select name='view-options' >
                <option value = "gallery">Gallery</option>
                <option value="list">List</option>
            </select>
            <nav>
                <button>&lt;&lt; Back</button>
                <span></span>
                <button>Next &gt;&gt; </button>
            </nav>

        </div>
        // <h1>Directory</h1>
    )
}

export default Directory