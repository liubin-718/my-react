import React from 'react'

// function Lesson2(props) {
//     return (
//         <div>
//             {props.stage}: {props.title}
//         </div>
//     )
// }
const lessons = [
    {stage: "React", title: "核心API"},
    {stage: "React", title: "Redux"},
    {stage: "React", title: "Router"}
]
// 定义高阶组件withContent
// 包装后的组件传入参数，根据该参数获取显示数据
const withContent = Comp => props => {
    const content = lessons[props.idx]
    return <Comp {...content} />
}
// withLog高阶组件 在组件挂载时输出日志
const withLog = Comp => {
    return class extends React.Component {
        componentDidMount(){
            console.log('log: didMount', this.props)
        }
        render(){
            return <Comp {...this.props} />
        }
    }
}


@withLog
@withContent
class Lesson extends React.Component {
  render() {
    return (
      <div>
        {this.props.stage}: {this.props.title}
      </div>
    );
  }
}

export default function HocTest() {
    return (
        <div>
            {/* bug：不显示 */}
        {/* {[0,1,2].map( (item, idx) => {<Lesson key={idx} idx={idx} />})}   */}
        {[0,1,2].map( (item, idx) => (<Lesson key={idx} idx={idx}/>) )}
        </div>
    )
}
