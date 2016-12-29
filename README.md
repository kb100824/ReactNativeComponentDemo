# 初学ReactNative,参考官方Demo进行修改

# PS:所有例子的js文件放在文件夹"ComponentDemoJS"中

###ReactNative 之活动指示器(菊花)自定义、颜色等相关属性了解如表格所示
<table border="1">
<caption>ActivityIndicator</caption>
<tr>
<td>animating<td>
<td>color<td>
<td>hidesWhenStopped<td>
<td>size<td>
</tr>
<tr>
<td>true/false<td>
<td><td>
<td><td>
<td><td>
</tr>


</table>



<h3>ReactNative---------->活动指示器属性如下</h3>

<ul type="disc">
 <li>animating:是否要显示指示器，类型为bool 默认为true。</li>
 <li>hidesWhenStopped:在没有动画的时候，是否要隐藏指示器（默认为true） </li>
 <li>size:指示器的大小。small的高度为20，large为36</li>
 <li>通过自身拥有的style样式中的transform属性:{transform: [{scale: 1.5}]}</li>
</ul>
#指示器效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/indicator.gif)
<hr size='1' color="#000000">
