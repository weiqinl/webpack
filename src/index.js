import _ from 'lodash';
import './style.css';
import Icon from './logo.png';
import Data from './data.xml';

function component() {
	var element = document.createElement('div');

	// Lodash 是由当前 script 脚本 import 导入进来的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	// 给元素添加 hello 样式类
	element.classList.add('hello');

	//将图像添加到我们现有的 div
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data);

	return element;
}

document.body.appendChild(component());