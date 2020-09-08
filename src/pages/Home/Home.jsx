import React from 'react'

function Home(props) {
    return (
        <div>
            Hello Word!---显式路由参数{props.match.params.id}
        </div>
    )
}

export default Home;