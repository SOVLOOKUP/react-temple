import React from "react"
import CompileRouter from "qf-router-config"

export default function Page1(props) {
    console.log(props)
    return (
        <div>
            <h1>page1</h1>
            <CompileRouter {...props}/>
        </div>
    )
}
