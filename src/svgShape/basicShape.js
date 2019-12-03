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
            <path d="M10 10 H 90 V 90 H 10 L 10 10" fill="none" stroke="blue"/>
            
            <span className="content_text">矩形</span>
            {/* 通过Z来闭合 */}
            <path d="M20 20 H 100 V 100 H 20 Z" fill="transparent" stroke="black"/>

            </svg>
            </Card>

            <Card title="Path曲线命令绘制" className="wrap_svg">
            <span className="content_text">三次贝塞尔曲线</span>
            <svg width="100px" height="100px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            


            </svg>
            </Card>

            <card>

            </card>
        </div>
    );
}

export default basicShape;
