

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
#效果图
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
<td>Date类型<td>
<td>Date类型<td>
<td>Date类型<td>
<td>enum整型枚举类型(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)<td>
<td>enum字符串枚举类型'date','time','datetime'<td>
<td>函数function类型<td>
<td>number类型时间间隔<td>
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
#效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/datepicker.gif)
* * *



#ReactNative---->Map(地图)相关属性了解如表格所示

<table border="1" align="center"  cellspacing="0">
<caption  align="left">MapView</caption>
<tr>
<td>annotations<td>
<td>legalLabelInsets<td>
<td>mapType<td>
<td>maxDelta<td>
<td>minDelta<td>
<td>overlays<td>
<td>onAnnotationPress<td>
<td>onRegionChange<td>
<td>onRegionChangeComplete<td>
<td>pitchEnabled<td>
<td>region<td>
<td>rotateEnabled<td>
<td>scrollEnabled<td>
<td>showsUserLocation<td>
<td>style<td>
<td>zoomEnabled<td>
<td>showsCompass<td>
<td>showsPointsOfInterest<td>
</tr>
<tr>
<td>annotations:Array类型<td>
<td>legalLabelInsets:object类型<td>
<td>mapType:枚举类型<td>
<td>maxDelta:number<td>
<td>minDelta:number<td>
<td>overlays:Array类型<td>
<td>onAnnotationPress:function<td>
<td>onRegionChange:function<td>
<td>onRegionChangeComplete:function<td>
<td>pitchEnabled:bool<td>
<td>region:object类型<td>
<td>rotateEnabled:bool<td>
<td>scrollEnabled:bool<td>
<td>showsUserLocation:bool<td>
<td>style:style样式<td>
<td>zoomEnabled:bool<td>
<td>showsCompass:bool<td>
<td>showsPointsOfInterest:bool<td>
</tr>
</table>


#<h3>4--》MapView(地图)属性文字描述如下:</h3>
<ul type="circle">
<li>annotations:地图上的标注点，可以带有标题及副标题。</li>
<li>legalLabelInsets:地图上标签的合法范围。默认在地图底部左侧</li>
<li>mapType:要显示的地图类型('standard', 'satellite', 'hybrid')</li>
<li>maxDelta:可以被显示的最大区域尺寸</li>
<li>minDelta:可以被显示的最小区域尺寸</li>
<li>overlays:地图的覆盖层</li>
<li>onAnnotationPress:当用户点击地图上的标注之后会调用此回调函数一次</li>
<li>onRegionChange:在用户拖拽地图的时候持续调用此回调函数</li>
<li>onRegionChangeComplete:当用户停止拖拽地图之后，调用此回调函数一次</li>
<li>pitchEnabled:地图平面倾斜/俯视</li>
<li>region:地图显示的区域</li>
<li>rotateEnabled:朝向角度设置</li>
<li>scrollEnabled:如果此属性设为false，用户不能改变地图所显示的区域</li>
<li>showsUserLocation:提示用户是否允许定位</li>
<li>style:样式</li>
<li>zoomEnabled:如果此属性为false，用户则不能旋转/缩放地图</li>
<li>showsCompass:如果此属性为false，地图上不会显示指南针</li>
<li>showsPointsOfInterest:如果此属性为false，感兴趣的点不会在地图上显示</li>
</ul>
#效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/mapView.gif)
* * *

#ReactNative---->ListView常用属性了解如表格所示
<table border="1" align="center"  cellspacing="0">
<caption  align="left">ListView</caption>
<tr>
<td>dataSource<td>
<td>initialListSize<td>
<td>onChangeVisibleRows<td>
<td>renderRow</td>
</tr>
<tr>
<td>dataSource:Array<td>
<td>initialListSize:number<td>
<td>onChangeVisibleRows:function<td>
<td>renderRow:function</td>
</tr>
</table>


#<h3>5--》ListView常用属性文字描述如下:</h3>
<ul type="circle">
<li>dataSource:列表依赖的数据源</li>
<li>initialListSize:指定在组件刚挂载的时候渲染多少行数据</li>
<li>onChangeVisibleRows:当可见的行的集合变化的时候调用此回调函数</li>
<li>renderRow:每行用来渲染组件</li>
</ul>
#效果图
![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/listview.gif)


![Image](https://github.com/KBvsMJ/ReactNativeComponentDemo/blob/master/demogif/listview_space.gif)
* * *
