import React from "react";
// 定义APP组件，在HTML中可以用<App></App>使用
// react要求自定义组件必须是大写字母
// react要求自定义组件的类必须继承于React.Component
class App extends React.Component{
	me(name){
		return(
			<div>
				<ul>
					<li>我是{name}</li>
					<li>我是{name}</li>
				</ul>
			</div>
		);
	}
	// 组件中最重要的是render方法
	render(){
		// 返回一个jsx方法
		 /*注意事项：
		 * 1.必须被一个大的单独元素包裹div或section
		 * 2.标签必须封闭
		 * 3.class写成className
		 * 4.只能使用js注释
		 * 5.原生标签p，div等，如果使用自定义属性，必须用data-前缀。自定义标签属性不需要前缀
		 * 6.jsx表达式用{}单大括号包裹，在jsx中不能使用if-else语句，但可以使用三元运算表达式。
		 * 7.可以运行函数
		 * 8.样式使用双大括号
		 * 9.jsx语法，数组会被自动展开，不需要采用指令展开数组
		 */
		 // 定义数组，jsx语法要求必须有key属性
		 let arr=['hehe','haha'].map((item,index)=>{
		 	return <li key={index}>{item}</li>
		 });
		return (
			<div>
				<h1>我是react,说{5000+5000}次爱你，只求一个回眸</h1>
				<p>{3>8?8:3}</p>
				{this.me('react')}
				<div style={{"color":"red","fontWeight":"bold"}}>jsx可以设置样式,但是我们一般用外联</div>
				<ul>{arr}</ul>
			</div>
		);
	}
}
export default App;