// import React from 'react'
// import ReactDOM from 'react-dom'

// 함수형 컴포넌트
function helloWorldButton() {

    // 비 구조화 할당
    const [isClick, setClickState] = React.useState(false) // 컴포넌트의 상태를 설정하는 메소드, 파라미터는 초기값
    console.log(isClick) // false
    setClickState(true) // setter 함수 
    console.log(isClick) // true
    
    return React.createElement(
        'button', 
        {onclick: () => {

        }},
        'Hello World!'
    )
}

const rootContainer = document.getElementById('react-root')
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)


// 비 구조화 할당 예제
// function returnOneThreeArray() {
//     return [1,3]
// }

// const [a, b] = returnOneThreeArray() // a == 1, b == 3