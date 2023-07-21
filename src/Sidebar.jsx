import Help from "./Help"


export default function Sidebar() {
    return (
        <div>
            <h1>funiture</h1>
            <div>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div>
                <div>
                    <input type="checkbox" name="titles" id=""/>
                    <span>search titles only</span>
                </div>
                <div>
                    <input type="checkbox" name="image" id=""/>
                    <span>has image</span>
                </div>
                <div>
                    <input type="checkbox" name="posted" id=""/>
                    <span>posted today</span>
                </div>
                <div>
                    <input type="checkbox" name="duplicates" id=""/>
                    <span>bundle duplicates</span>
                </div>
                <div>
                    <input type="checkbox" name="areas" id=""/>
                    <span>include nearby areas</span>
                </div>
                <div>
                    <input type="checkbox" name="duplicates" id=""/>
                    <span>bundle duplicates</span>
                </div>
            </div>
            <Help/>
        </div>
       
    )
}

