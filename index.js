// import React from 'react'
// import ReactDOM from 'react-dom'

// 함수형 컴포넌트
function helloWorldButton() {
    return React.createElement(
        'button', 
        {onclick: () => {

        }},
        'Hello World!'
    )
}

const rootContainer = document.getElementById('react-root')
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)