import Posting from './Posting'

export default function Gallery() {
    const craigPost = require('./postings.js')
    console.log(craigPost)

    let postList = craigPost.postings.map((element,i) => <Posting title= {element.title} data={element} key={i} />)

    return (
        <div>
            <h1>Gallery</h1>
            {/* <Posting/> */}
            {postList}
        </div>
        
    )
}

 