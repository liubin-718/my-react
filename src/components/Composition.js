/* 组件符合 */
import React from 'react'

// 定义组件外观和行为
function Dialog(props){
    // props.children代表了Dialog标签内部内容 (children里面是一个合法的js表达式)
    console.log('props.children', props.children)
    const messages = {
        foo: {title: "水果", content: "苹果"},
        bar: {title: "动漫", content: "海贼王"}
    }
    
    // 执行函数获得要显示的内容
    const {def, footer} = props.children(messages[props.msg])
    return (
        <div style={{border: "1px solid orange"}}>
            {def}
            <div>{footer}</div>
        </div>
    )
}

function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, radio => {// props.children这里指的是下面三个Radio组件
                // 要修改虚拟dom，只能克隆它
                // 参数1 是克隆对象
                // 参数2 是设置的属性
                return React.cloneElement(radio, {name: props.name})
            })}
        </div>
    )
}
// 实现radio组件  <input type="radio" value="react">React
// children  是radio 右边要选显示的值(eg:React) 
// {...rest} 是input的属性，不知道有多少个，所以用rest属性展开
function Radio({children, ...rest}) { //{children, ...rest}解构
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    )
}
export default function Composition() {
    return (
        <div>
            <Dialog msg="bar">
            {({ title, content }) => ({
                def: (
                    <>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </>
                ),
                footer: <button onClick={() => window.confirm('确定要提交吗？')}>确定</button>
            })}
            </Dialog>
            <RadioGroup name="mvvm">
                <Radio value="vue" onClick={() => alert('vue真好')}>Vue</Radio>
                <Radio value="react" onClick={() => alert('react真好')}>React</Radio>
                <Radio value="angular" onClick={() => alert('angular真好')}>Angular</Radio>
            </RadioGroup>
        </div>
    )
}