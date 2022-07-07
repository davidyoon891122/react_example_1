// import React from 'react'
// import ReactDOM from 'react-dom'

// 함수형 컴포넌트
function helloWorldButton() {

    // 비 구조화 할당
    const [isClick, setClickState] = React.useState(false) // 컴포넌트의 상태를 설정하는 메소드, 파라미터는 초기값
    const text = isClick ? "Bye World!" : "Hello World!"

    return React.createElement(
        'button', 
        {onclick: () => {

        }},
        text
    )
}

const rootContainer = document.getElementById('react-root')
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)
