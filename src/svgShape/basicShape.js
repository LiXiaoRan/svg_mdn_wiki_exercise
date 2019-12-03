import React from "react";
import { Card } from "antd";
import "./basicShape.css";
function basicShape() {
    return (
        <div className="container">
            <Card title="基本形状" className="wrap_svg">
                <svg
                    width="200"
                    height="250"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="10"
                        y="10"
                        width="30"
                        height="30"
                        stroke="black"
                        fill="transparent"
                        strokeWidth="5"
                    />

                    <rect
                        x="60"
                        y="10"
                        rx="10"
                        ry="10"
                        width="30"
                        height="30"
                        stroke="black"
                        fill="transparent"
                        strokeWidth="5"
                    />
                    <circle
                        cx="25"
                        cy="75"
                        r="20"
                        stroke="red"
                        fill="transparent"
                        strokeWidth="5"
                    />
                    <ellipse
                        cx="75"
                        cy="75"
                        rx="20"
                        ry="5"
                        stroke="red"
                        fill="transparent"
                        strokeWidth="5"
                    />

                    <line
                        x1="10"
                        x2="50"
                        y1="110"
                        y2="150"
                        stroke="orange"
                        fill="transparent"
                        strokeWidth="5"
                    />
                    <polyline
                        points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                        stroke="orange"
                        fill="transparent"
                        strokeWidth="5"
                    />
                    <polygon
                        points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                        stroke="green"
                        fill="transparent"
                        strokeWidth="5"
                    />
                    <path
                        d="M20,230 Q40,205 50,230 T90,230"
                        fill="none"
                        stroke="blue"
                        strokeWidth="5"
                    />
                </svg>
            </Card>

            <Card title="Path矩形绘制" className="wrap_svg">
                <span className="content_text">矩形</span>
                <svg
                    width="100px"
                    height="100px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 10 H 90 V 90 H 10 L 10 10"
                        fill="none"
                        stroke="blue"
                    />

                    <span className="content_text">矩形</span>
                    {/* 通过Z来闭合 */}
                    <path
                        d="M20 20 H 100 V 100 H 20 Z"
                        fill="transparent"
                        stroke="black"
                    />
                </svg>
            </Card>

            <Card title="Path曲线命令绘制" className="wrap_svg">
                <span className="content_text">
                    三次贝塞尔曲线
                    <br />
                    红色的是控制点
                </span>
                <svg
                    width="190px"
                    height="160px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 10 C 20 20, 40 20, 50 10"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M70 10 C 70 20, 120 20, 120 10"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M130 10 C 120 20, 180 20, 170 10"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M10 60 C 20 80, 40 80, 50 60"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M70 60 C 70 80, 110 80, 110 60"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M130 60 C 120 80, 180 80, 170 60"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M10 110 C 20 140, 40 140, 50 110"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M70 110 C 70 140, 110 140, 110 110"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M130 110 C 120 140, 180 140, 170 110"
                        stroke="black"
                        fill="transparent"
                    />

                    <circle cx="20" cy="20" r="2" fill="red" />
                    <circle cx="40" cy="20" r="2" fill="red" />
                    <circle cx="50" cy="10" r="2" fill="red" />

                    <circle cx="70" cy="20" r="2" fill="red" />
                    <circle cx="120" cy="20" r="2" fill="red" />
                    <circle cx="120" cy="10" r="2" fill="red" />
                </svg>
            </Card>
            <Card
                title="Path曲线 S命令绘制"
                className="wrap_svg"
                style={{ width: 500 }}
            >
                <span>
                    S命令可以用来创建与前面一样的贝塞尔曲线，但是，如果S命令跟在一个C或S命令后面，则它的第一个控制点会被假设成前一个命令曲线的第二个控制点的中心对称点。如果S命令单独使用，前面没有C或S命令，那当前点将作为第一个控制点。下面是S命令的语法示例，图中左侧红色标记的点对应的控制点即为蓝色标记点。
                </span>
                <svg
                    width="220px"
                    height="160px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                        stroke="green"
                        fill="transparent"
                    />
                    <text x="10" y="80" fontSize="8">
                        起点
                    </text>
                    <text x="40" y="10" fontSize="8">
                        第一个控制点
                    </text>
                    <text x="65" y="30" fontSize="8">
                        第二个控制点
                    </text>
                    <text x="95" y="80" fontSize="8">
                        C的终点
                    </text>
                    <text x="150" y="150" fontSize="8">
                        S的第一个控制点
                    </text>
                    <text x="180" y="80" fontSize="8">
                        S的终点
                    </text>

                    <circle cx="10" cy="80" r="2" fill="red" />
                    <circle cx="40" cy="10" r="2" fill="red" />
                    <circle cx="65" cy="10" r="2" fill="red" />
                    <circle cx="95" cy="80" r="2" fill="red" />
                    <circle cx="150" cy="150" r="2" fill="red" />
                    <circle cx="180" cy="80" r="2" fill="red" />
                </svg>
            </Card>
            <Card
                title="Path曲线命令绘制"
                className="wrap_svg"
                style={{ width: 500 }}
            >
                <span>
                    二次贝塞尔曲线,Q，它比三次贝塞尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。
                </span>
                <svg
                    width="390px"
                    height="360px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 80 Q 95 10 180 80"
                        stroke="black"
                        fill="transparent"
                    />
                    <path
                        d="M100 180 Q 152.5 110, 195 180 T 280 180"
                        stroke="black"
                        fill="transparent"
                    />
                </svg>
                <span>
                    就像三次贝塞尔曲线有一个S命令，二次贝塞尔曲线有一个差不多的T命令，可以通过更简短的参数，延长二次贝塞尔曲线。
                </span>
            </Card>

            <Card
                title="Path曲线命令绘制 弧形"
                className="wrap_svg"
                style={{ width: 500 }}
            >
                <span>
                    弧形命令A的前两个参数分别是x轴半径和y轴半径，它们的作用很明显，不用多做解释，如果你不是很清楚它们的作用，可以参考一下椭圆ellipse命令中的相同参数。弧形命令A的第三个参数表示弧形的旋转情况，下面的例子可以很好地解释它
                    如图例所示，画布上有一条对角线，中间有两个椭圆弧被对角线切开(x
                    radius = 30, y radius =
                    50)。第一个椭圆弧的x-axis-rotation（x轴旋转角度）是0，所以弧形所在的椭圆是正置的（没有倾斜）。在第二个椭圆弧中，x-axis-rotation设置为-45，所以这是一个旋转了45度的椭圆，并以短轴为分割线，形成了两个对称的弧形。参看图示中的第二个椭圆形
                    large-arc-flag（角度大小）
                    和sweep-flag（弧线方向），large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧。sweep-flag表示弧线的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。
                </span>
                <svg
                    width="320px"
                    height="320px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 315
                    L 110 215
                    A 30 50 0 0 1 162.55 162.45
                    L 172.55 152.45
                    A 30 50 -45 0 1 215.1 109.9
                    L 315 10"
                        stroke="black"
                        fill="green"
                        strokeWidth="2"
                        fillOpacity="0.5"
                    />
                </svg>
                <img
                    alt="alt"
                    src="https://raw.githubusercontent.com/LiXiaoRan/PicGoBed/master/img/20191203105726.png"
                ></img>

                <svg
                    width="325px"
                    height="325px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M80 80
                        A 45 45, 0, 0, 0, 125 125
                        L 125 80 Z"
                        fill="green"
                    />
                    <path
                        d="M230 80
                        A 45 45, 0, 1, 0, 275 125
                        L 275 80 Z"
                        fill="red"
                    />
                    <path
                        d="M80 230
                        A 45 45, 0, 0, 1, 125 275
                        L 125 230 Z"
                        fill="purple"
                    />
                    <path
                        d="M230 230
                        A 45 45, 0, 1, 1, 275 275
                        L 275 230 Z"
                        fill="blue"
                    />
                </svg>
            </Card>
            <Card
                title="stroke相关"
                className="wrap_svg"
                style={{ width: 500 }}
            >
                <span>
                    strokeLinecap属性的值有三种可能值：
                    butt用直边结束线段，它是常规做法，线段边界90度垂直于描边的方向、贯穿它的终点。
                    square的效果差不多，但是会稍微超出实际路径的范围，超出的大小由strokeWidth控制。
                    round表示边框的终点是圆角，圆角的半径也是由strokeWidth控制的。
                    还有一个strokeLinejoin属性，用来控制两条描边线段之间，用什么方式连接。
                </span>
                <svg
                    width="160"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <line
                        x1="40"
                        x2="120"
                        y1="20"
                        y2="20"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="butt"
                    />
                    <line
                        x1="40"
                        x2="120"
                        y1="60"
                        y2="60"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="square"
                    />
                    <line
                        x1="40"
                        x2="120"
                        y1="100"
                        y2="100"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="round"
                    />
                </svg>
                <span>
                    每条折线都是由两个线段连接起来的，连接处的样式由strokeLinejoin属性控制，它有三个可用的值，miter是默认值，表示用方形画笔在连接处形成尖角，round表示用圆角连接，实现平滑效果。最后还有一个值bevel，连接处会形成一个斜接。
                </span>
                <svg
                    width="160"
                    height="280"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <polyline
                        points="40 60 80 20 120 60"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="butt"
                        fill="none"
                        strokeLinejoin="miter"
                    />

                    <polyline
                        points="40 140 80 100 120 140"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="round"
                        fill="none"
                        strokeLinejoin="round"
                    />

                    <polyline
                        points="40 220 80 180 120 220"
                        stroke="black"
                        strokeWidth="20"
                        strokeLinecap="square"
                        fill="none"
                        strokeLinejoin="bevel"
                    />
                </svg>

                <svg
                    width="200"
                    height="150"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <path
                        d="M 10 75 Q 50 10 100 75 T 190 75"
                        stroke="black"
                        strokeLinecap="round"
                        strokeDasharray="5,10,5"
                        fill="none"
                    />
                    <path
                        d="M 10 75 L 190 75"
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        fill="none"
                    />
                </svg>
                <span>
                    strokeDasharray属性的参数，是一组用逗号分割的数字组成的数列。注意，和path不一样，这里的数字必须用逗号分割（空格会被忽略）。每一组数字，第一个用来表示填色区域的长度，第二个用来表示非填色区域的长度。所以在上面的例子里，第二个路径会先做5个像素单位的填色，紧接着是5个空白单位，然后又是5个单位的填色。如果你想要更复杂的虚线模式，你可以定义更多的数字。第一个例子指定了3个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式（奇数个循环两次变偶数个）。所以该路径首先渲染5个填色单位，10个空白单位，5个填色单位，然后回头以这3个数字做一次循环，但是这次是创建5个空白单位，10个填色单位，5个空白单位。通过这两次循环得到偶数模式，并将这个偶数模式不断重复。
                </span>
            </Card>
            <Card title="线性渐变" className="wrap_svg" style={{ width: 500 }}>
                <span>
                    线性渐变:要插入一个线性渐变，你需要在SVG文件的defs元素内部，创建一个linearGradient节点。
                    以上是一个应用了线性渐变的rect元素的示例。线性渐变内部有几个stop
                    结点，这些结点通过指定位置
                    的offset（偏移）属性和stop-color（颜色中值）属性来说明在渐变的特定位置上应该是什么颜色；可
                    以直接指定这两个属性值，也可以通过CSS来指定他们的值，该例子中混合使用了这两种方法。例如：该示
                    例中指明了渐变开始颜色为红色，到中间位置时变成半透明的黑色，最后变成蓝色。虽然你可以根据需求按
                    照自己的喜好插入很多中间颜色，但是偏移量应该始终从0%开始（或者0也可以，百分号可以扔掉），到100%
                    （或1）结束。如果stop设置的位置有重合，将使用XML树中较晚设置的值。而且，类似于填充和描边，你也可
                    以指定属性stop-opacity来设置某个位置的半透明度（同样，对于FF3你也可以设置rgba值）。
                </span>
                <svg
                    width="120"
                    height="240"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="Gradient2"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="red" />
                            <stop
                                offset="50%"
                                stopColor="black"
                                stopOpacity="0"
                            />
                            <stop offset="100%" stopColor="blue" />
                        </linearGradient>
                    </defs>

                    <rect
                        x="10"
                        y="120"
                        rx="15"
                        ry="15"
                        width="100"
                        height="100"
                        fill="url(#Gradient2)"
                    />
                </svg>
            </Card>

            <Card title="径向渐变" className="wrap_svg" style={{ width: 500 }}>
                <span>
                    径向渐变与线性渐变相似，只是它是从一个点开始发散绘制渐变。
                    中值（stops）的使用方法与之前一致，但是现在这个对象的颜色是中间是红色的，且向着边缘的方向渐渐的变成蓝色。跟线性渐变一样，radialGradient
                    节点可以有多个属性来描述其位置和方向，但是它更加复杂。径向渐变也是通过两个点来定义其边缘位置，两点中的第一个点定义了渐变结束所围绕的圆环，它需要一个中心点，由cx和cy属性及半径r来定义，通过设置这些点我们可以移动渐变范围并改变它的大小，如上例的第二个rect所展示的。
                    第二个点被称为焦点，由fx和fy属性定义。第一个点描述了渐变边缘位置，焦点则描述了渐变的中心，如下例。
                </span>
                <svg
                    width="120"
                    height="240"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="radialGradient1">
                            <stop offset="0%" stopColor="red"></stop>
                            <stop offset="100%" stopColor="green"></stop>
                        </radialGradient>
                        <radialGradient
                            id="RadialGradient2"
                            cx="0.25"
                            cy="0.25"
                            r="0.25"
                        >
                            <stop offset="0%" stop-color="red" />
                            <stop offset="100%" stop-color="blue" />
                        </radialGradient>
                    </defs>
                    <rect
                        x="10"
                        y="10"
                        rx="10"
                        ry="10"
                        width="100"
                        height="100"
                        fill="url(#radialGradient1)"
                    ></rect>
                    <rect
                        x="10"
                        y="120"
                        rx="15"
                        ry="15"
                        width="100"
                        height="100"
                        fill="url(#RadialGradient2)"
                    />
                </svg>
            </Card>

            <Card
                title="spreadMethod"
                className="wrap_svg"
                style={{ width: 500 }}
            >
                <span>线性渐变和径向渐变都需要一些额外的属性用于描述渐变过程，这里我希望额外提及一个spreadMethod属性，该属性控制了当渐变到达终点的行为，但是此时该对象尚未被填充颜色。这个属性可以有三个值：pad、reflect或repeat。Pad就是目前我们见到的效果，即当渐变到达终点时，最终的偏移颜色被用于填充对象剩下的空间。reflect会让渐变一直持续下去，不过它的效果是与渐变本身是相反的，以100%偏移位置的颜色开始，逐渐偏移到0%位置的颜色，然后再回到100%偏移位置的颜色。repeat也会让渐变继续，但是它不会像reflect那样反向渐变，而是跳回到最初的颜色然后继续渐变。</span>
                <svg
                    width="220"
                    height="220"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient
                            id="GradientPad"
                            cx="0.5"
                            cy="0.5"
                            r="0.4"
                            fx="0.75"
                            fy="0.75"
                            spreadMethod="pad"
                        >
                            <stop offset="0%" stop-color="red" />
                            <stop offset="100%" stop-color="blue" />
                        </radialGradient>
                        <radialGradient
                            id="GradientRepeat"
                            cx="0.5"
                            cy="0.5"
                            r="0.4"
                            fx="0.75"
                            fy="0.75"
                            spreadMethod="repeat"
                        >
                            <stop offset="0%" stop-color="red" />
                            <stop offset="100%" stop-color="blue" />
                        </radialGradient>
                        <radialGradient
                            id="GradientReflect"
                            cx="0.5"
                            cy="0.5"
                            r="0.4"
                            fx="0.75"
                            fy="0.75"
                            spreadMethod="reflect"
                        >
                            <stop offset="0%" stop-color="red" />
                            <stop offset="100%" stop-color="blue" />
                        </radialGradient>
                    </defs>

                    <rect
                        x="10"
                        y="10"
                        rx="15"
                        ry="15"
                        width="100"
                        height="100"
                        fill="url(#GradientPad)"
                    />
                    <rect
                        x="10"
                        y="120"
                        rx="15"
                        ry="15"
                        width="100"
                        height="100"
                        fill="url(#GradientRepeat)"
                    />
                    <rect
                        x="120"
                        y="120"
                        rx="15"
                        ry="15"
                        width="100"
                        height="100"
                        fill="url(#GradientReflect)"
                    />

                    <text
                        x="15"
                        y="30"
                        fill="white"
                        font-family="sans-serif"
                        font-size="12pt"
                    >
                        Pad
                    </text>
                    <text
                        x="15"
                        y="140"
                        fill="white"
                        font-family="sans-serif"
                        font-size="12pt"
                    >
                        Repeat
                    </text>
                    <text
                        x="125"
                        y="140"
                        fill="white"
                        font-family="sans-serif"
                        font-size="12pt"
                    >
                        Reflect
                    </text>
                </svg>
            </Card>
        </div>
    );
}

export default basicShape;
