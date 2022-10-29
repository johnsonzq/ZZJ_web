容器的属性:
flex-direction:属性决定主轴的方向（即项目的排列方向）row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow:是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;项目在交叉轴上如何对齐
align-content: flex-start | flex-end | center | space-between | space-around | stretch;多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

项目的属性：
order：order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex-grow：属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink：flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
flex-basis：flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
flex：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
