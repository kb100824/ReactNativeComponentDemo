# 初学ReactNative,参考官方Demo进行修改

# PS:所有例子的js文件放在文件夹"ComponentDemoJS"中

#ReactNative---->之活动指示器(菊花)自定义、颜色等相关属性文字描述了解如表格所示

<table border="1" align="center">
<caption  align="left">ActivityIndicator</caption>
<tr>
<td>animating<td>
<td>color<td>
<td>hidesWhenStopped<td>
<td>size<td>
</tr>
<tr>
<td>布尔值类型:true/false<td>
<td>指示器颜色自定义<td>
<td>布尔值类型:true/false<td>
<td>size="small"就是高度为20，size="large"高度为36<td>
</tr>
</table>

#<h3>1---->指示器属性文字描述如下:</h3>
<ul type="disc">
 <li>animating:是否要显示指示器，类型为bool 默认为true。</li>
 <li>hidesWhenStopped:在没有动画的时候，是否要隐藏指示器（默认为true） </li>
 <li>size:指示器的大小。small的高度为20，large为36</li>
 <li>通过自身拥有的style样式中的transform属性:{transform: [{scale: 1.5}]}</li>
</ul>
#指示器效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/indicator.gif)
* * *




#ReactNative---->之按钮位置布局自定义标题颜色等相关属性了解如表格所示

<table border="1" align="center">
<caption  align="left">Button</caption>
<tr>
<td>accessibilityLabel<td>
<td>disabled<td>
<td>color<td>
<td>onPress<td>
<td>title<td>
</tr>
<tr>
<td>string类型<td>
<td>是否可点击布尔类型:true/false<td>
<td>按钮标题颜色<td>
<td>用户点击此按钮时所调用的处理函数<td>
<td>按钮标题<td>
</tr>
</table>


#<h3>2--》按钮属性文字描述如下:</h3>
<ul type="square">
 <li>color:标题颜色</li>
 <li>disabled:按钮是否可点击 </li>
 <li>onPress:用户点击此按钮时所调用的处理函数</li>
 <li>title:按钮内显示的文本</li>
</ul>
#指示器效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/button.gif)
* * *
