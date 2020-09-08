import React from 'react'

export default function Home(props) {
    return (
        <div>
            Hello Word!---显式路由参数{props.match.params.id}
        </div>
    )
}

