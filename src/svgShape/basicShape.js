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
                <svg width="100px" height="100px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 H 90 V 90 H 10 L 10 10" fill="none" stroke="blue" />

                    <span className="content_text">矩形</span>
                    {/* 通过Z来闭合 */}
                    <path d="M20 20 H 100 V 100 H 20 Z" fill="transparent" stroke="black" />

                </svg>
            </Card>

            <Card title="Path曲线命令绘制" className="wrap_svg">
                <span className="content_text">三次贝塞尔曲线<br />红色的是控制点</span>
                <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
                    <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent" />
                    <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent" />
                    <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent" />
                    <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent" />
                    <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent" />
                    <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent" />
                    <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent" />
                    <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent" />


                    <circle cx="20" cy="20" r="2" fill="red" />
                    <circle cx="40" cy="20" r="2" fill="red" />
                    <circle cx="50" cy="10" r="2" fill="red" />

                    <circle cx="70" cy="20" r="2" fill="red" />
                    <circle cx="120" cy="20" r="2" fill="red" />
                    <circle cx="120" cy="10" r="2" fill="red" />
                </svg>
            </Card>
            <Card title="Path曲线 S命令绘制" className="wrap_svg">
                <span>S命令可以用来创建与前面一样的贝塞尔曲线，但是，如果S命令跟在一个C或S命令后面，则它的第一个控制点会被假设成前一个命令曲线的第二个控制点的中心对称点。如果S命令单独使用，前面没有C或S命令，那当前点将作为第一个控制点。下面是S命令的语法示例，图中左侧红色标记的点对应的控制点即为蓝色标记点。</span>
                <svg width="220px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="green" fill="transparent" />
                    <text x="10" y="80" fontSize="8">起点</text>
                    <text x="40" y="10" fontSize="8">第一个控制点</text>
                    <text x="65" y="30" fontSize="8">第二个控制点</text>
                    <text x="95" y="80" fontSize="8">C的终点</text>
                    <text x="150" y="150" fontSize="8">S的第一个控制点</text>
                    <text x="180" y="80" fontSize="8">S的终点</text>

                    <circle cx="10" cy="80" r="2" fill="red" />
                    <circle cx="40" cy="10" r="2" fill="red" />
                    <circle cx="65" cy="10" r="2" fill="red" />
                    <circle cx="95" cy="80" r="2" fill="red" />
                    <circle cx="150" cy="150" r="2" fill="red" />
                    <circle cx="180" cy="80" r="2" fill="red" />


                </svg>

            </Card>
            <Card title="Path曲线命令绘制" className="wrap_svg" style={{ width: 500 }}>
                <span>二次贝塞尔曲线,Q，它比三次贝塞尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。</span>
                <svg width="390px" height="360px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
                    <path d="M100 180 Q 152.5 110, 195 180 T 280 180" stroke="black" fill="transparent" />
                </svg>
                <span>就像三次贝塞尔曲线有一个S命令，二次贝塞尔曲线有一个差不多的T命令，可以通过更简短的参数，延长二次贝塞尔曲线。</span>

            </Card>

            
        </div>
    );
}

export default basicShape;
