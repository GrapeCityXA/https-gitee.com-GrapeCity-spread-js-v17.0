![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/b20359c9-ed81-44d6-809a-f6da4b8946a7)此次预览版主要包含了：
（点击链接可跳转详细信息）

新插件
报表插件 / ReportSheet
甘特图插件（正式版本）/ GanttSheet

图表增强
新增的瀑布图表
折线图中的平滑曲线
多区域创建图表
新增的棒棒糖迷你图

工作表增强
增强的粘贴选项
扩展自定义表格列样式
TopRowChanged/LeftColumnChanged 事件增强
水平分布对齐
保留 Excel 排序状态

透视表增强
样式中字体设置
区域偏移支持

集算表增强
引用计算字段
针对列的触发公式

设计器增强
集成快捷键
也可以通过产品公开课了解新版本特性：SpreadJS V17.0版本新特性与功能预览

全新的报表插件
基于 SpreadJS 本身强大的表格能力，在 DataManager 数据关系引擎的助力下，全新的报表插件让报表和数据录入用户有了全新的能力和体验，快速完成报表和数据录入功能的搭建，相对之前，能节省大量的开发成本。
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/f7a853c4-45fb-4d79-b9fb-ddbbadfd8a3d)

各类报表示例
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/7a3b5cc7-a3eb-4d8c-a141-ab8817beed22)


# 报表设计器
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/1919913d-f35c-4d04-9645-d62341182027)


# 报表性能
在浏览器端，2.4 秒完成 10 万行 x 6 列的分组交叉统计报表加载（不包含数据传输）
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/6560c241-3cb5-4be4-8a92-5807b9b6f867)


# 支持使用 Excel 作为报表模板
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/33e24427-112b-43b7-9084-c52362724622)

正式版本的甘特图插件 / GanttSheet
甘特图插件允许您创建工作分解、生产计划及计划进度等甘特图类型。
是一个快速、数据绑定的 DataTable 视图，具有甘特图行为和电子表格用户界面。使用甘特图有以下的价值：

可视化规划：提供项目任务、时间表和依赖关系的清晰可视化表示，有效地规划和管理项目变得更加容易。
任务依赖性：允许定义和可视化任务依赖性，了解不同任务的链接方式以及延迟对整个项目时间表的影响。
进度跟踪：通过标记已完成的任务并将其与计划时间表进行比较来跟踪每个任务和整个项目的进度。
截止日期管理：能够设置和管理项目里程碑和截止日期，确保项目保持正轨并在指定的时间范围内完成。
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/8f61f918-cc50-4679-b9aa-4477cceba347)

![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/00a3c565-318d-48ca-821d-16b2a8f27a1c)

图表部分增强

新增的瀑布图表
将运行总计显示为添加或减去的值，这些值排列为具有正值和负值的列，并通过颜色编码来区分两者。
初始列和最终列通常与水平轴对齐，而中间值通常是浮动列。
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/979377ef-6821-4d32-9ab0-4cbdb8fc70a8)

折线图的平滑线格式
SpreadJS 中的折线图现在支持平滑线条的格式。
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/077bc0f4-706b-4090-a3d1-c165fe6379f4)

图表的数据来自多个区域
与 Excel 类似，SpreadJS 现在支持使用多选插入图表。
除了选择连续的数据区域之外，还可以按 Ctrl 键选择多个不连续的区域来创建图表。
也可以通过在每个范围之间放置逗号来在代码中指定多个范围：


工作表增强
增强的粘贴选项
SpreadJS 现在支持更多粘贴特殊选项，包括：
Comments -仅粘贴备注
Validation - 仅粘贴数据验证
All using Source theme - 全部使用源主题
All except borders - 粘贴除边框外的所有单元格内容和格式
Column Widths - 粘贴复制的一个列或一系列列的宽度
Formulas and Number Formats - 仅粘贴公式和所有数字格式选项
Values and Number Formats - 仅粘贴值和所有数字格式选项
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/13e7e560-2e16-438e-af1d-77fad0aa602e)


扩展自定义表格列样式
当表自动扩展时，自定义表列样式现在可以正确复制
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/812105d0-6be4-471e-a1bc-11e1462e19ac)


水平分布对齐
SpreadJS 现在支持文本的分布式水平对齐。
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/add49592-2f7c-4a89-99a8-e3453b7fd0dd)


透视表增强
样式中字体设置
将字体选项拆分为不同的属性，以更好地支持 Excel 中的数据透视表和表格字体选项。
通常，单元格上的字体属性可用于设置所有字体选项，新版本还提供了 API 来设置单独的字体选项，如 fontFamily、fontSize、fontWeight 和 fontStyle：


集算表增强
引用计算字段
DataManager 支持从数据源添加字段，新版本还支持具有公式数据类型的虚拟列。
之后可以在集算表的视图中使用这些公式列来显示运行总和或股票价值比率等内容：
![image](https://github.com/GrapeCityXA/https-gitee.com-GrapeCity-spread-js-v17.0/assets/18186858/d6f96f55-0014-4627-b13a-6ac75fddc7b4)


