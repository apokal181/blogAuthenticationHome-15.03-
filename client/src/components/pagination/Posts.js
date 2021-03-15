import React from 'react'

const Posts = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }
    return(
    <ul className="list-group mb-4">
        {posts.map(post => (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                        <div>
                            {post.name}
                        </div>
                        <div className="card-action">
                            <a href="#">Read</a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </ul>
    )


}

export default Posts