

#注意事项:
<ul type="disc">
 <li>1:如果运行项目报错提示找不到"RCTBundleURLProvider.h"这个头文件,
那么需要你打开终端cd 到你项目中"package.json"所在的目录下。</li>
 <li>2:输入 npm install指令 </li>
</ul>




#ReactNative---->之活动指示器(菊花)自定义、颜色等相关属性文字描述了解如表格所示

<table border="1" align="center" cellspacing="0">
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

<table border="1" align="center"  cellspacing="0">
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
<li>accessibilityLabel:用于给残障人士显示的文本</li>

 <li>color:标题颜色</li>
 <li>disabled:按钮是否可点击 </li>
 <li>onPress:用户点击此按钮时所调用的处理函数</li>
 <li>title:按钮内显示的文本</li>
</ul>
#按钮效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/button.gif)
* * *



#ReactNative---->日期选择器相关属性了解如表格所示

<table border="1" align="center"  cellspacing="0">
<caption  align="left">DatePickerIOS</caption>
<tr>
<td>date<td>
<td>maximumDate<td>
<td>minimumDate<td>
<td>minuteInterval<td>
<td>mode<td>
<td>onDateChange<td>
<td>timeZoneOffsetInMinutes<td>
</tr>
<tr>
<td>date:Date类型<td>
<td>maximumDate:Date类型<td>
<td>minimumDate:Date类型<td>
<td>minuteInterval:enum整型枚举类型<td>
<td>mode::enum字符串枚举类型<td>
<td>onDateChange:函数function类型<td>
<td>timeZoneOffsetInMinutes:number类型<td>
</tr>
</table>


#<h3>3--》日期选择器属性文字描述如下:</h3>
<ul type="circle">
<li>accessibilityLabel:用于给残障人士显示的文本</li>

 <li>date:当前被选中的日期</li>
 <li>maximumDate:可选的最大日期</li>
 <li>minimumDate:可选的最小日期</li>
 <li>minuteInterval:可选的最小的分钟单位(时间间隔)</li>
 <li>mode:选择器模式('date', 'time', 'datetime')</li>
 <li>onDateChange:当用户修改日期或时间时调用此回调函数</li>
 <li>timeZoneOffsetInMinutes:时区差，单位是分钟</li>
</ul>
#按钮效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/datepicker.gif)
* * *
