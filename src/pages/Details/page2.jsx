import React from "react"
import CompileRouter from "qf-router-config"

export default function Page2(props) {
    console.log(props)
    return (
        <div>
            <h1>page2</h1>
            <CompileRouter {...props}/>
        </div>
    )
}