/*
 * @Date: 2023-03-24 21:01:08
 */
import React, {useState, useEffect, createRef} from 'react'
import ReactDOM from 'react-dom/client'
export default function Demo3() {
  // 赋初始值并且得到setCount便于更改count的值
  const [count, setCount] = useState(0)
  const [name, setName] = useState("tom")
  const input1 = createRef()
  function add() {
    // setCount(count+1)
    setCount(oldCount => oldCount+1)
  }
  function xiezai() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }
  function change() {
    setName('jack')
  }
  function show() {
    console.log(input1.current.value);
  }
  useEffect(() => {
    // 这个函数体在页面挂载后和更新后执行
    console.log('@@@');
    // const timer = setTimeout(() => {
    //   setCount(oldCount => oldCount+1)
    // }, 1000)
    // 返回一个函数里面的函数体再卸载组件前执行
    return () => {
      // clearTimeout(timer)
    }
  }, [count])
  return (
    <div>
      <h2>count的值是：{count}，名字：{name}</h2>
      <button onClick={add}>+1</button>
      <button onClick={change}>点我改名</button>
      <button onClick={xiezai}>卸载组件</button>
      <input type="text" ref={input1}/>
      <button onClick={show}>打印input里的值</button>
    </div>
  )
}
