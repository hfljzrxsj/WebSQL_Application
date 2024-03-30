import { StrictMode, useEffect, useRef } from "react";
import style from './_index.module.scss';
import panzoom from 'panzoom';

const gridSize = 50; // 每个格子50x50像素  
const numRows = 8;
const numCols = 8;

const canvasWH = 400;
export default function Canvas () {
  const ref = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  // 获取canvas元素和绘图上下文  
  useEffect(() => {
    setTimeout(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      const canvas = ref.current ?? document.createElement('canvas');
      canvas.width = canvas.height = 400;
      const ctx = canvas.getContext('2d');
      // const ctx = current.getContext('2d');
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, current.width, current.height); // 清除整个canvas  
      ctx.beginPath();
      ctx.strokeStyle = '#000';
      for (let i = 0; i <= current.width; i += gridSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, current.height);
      }
      for (let i = 0; i <= current.height; i += gridSize) {
        ctx.moveTo(0, i);
        ctx.lineTo(current.width, i);
      }
      ctx.stroke();
      //#region 
      for (const [x, y] of exampleCoordinates) {
        // 确保坐标在合理范围内  
        if (x !== undefined && y !== undefined && x >= 0 && x < numCols && y >= 0 && y < numRows) {
          const cellX = x * gridSize;
          const cellY = y * gridSize;
          ctx.fillStyle = 'black';
          ctx.fillRect(cellX, cellY, gridSize, gridSize);
        }
      }
      panzoom(current, {
        bounds: true,
        boundsPadding: 0,
        minZoom: 1,
        autocenter: true,
        smoothScroll: true,
        enableTextSelection: true,
        disableKeyboardInteraction: false
      });
      // instance.on('zoomend', function (_e) {
      //   if (instance.getTransform().scale === 1) {
      //     current.removeAttribute('style');
      //   }
      // });
    });
  }, [ref]);
  // 示例坐标点数组  
  const exampleCoordinates = [
    [1, 1],
    [2, 2],
    [3, 3],
    // ... 更多坐标点  
  ];
  return <StrictMode>
    {/* <TransformWrapper>
      <TransformComponent> */}
    {/* <div
        // className={style['map']}
        ></div> */}
    {/* </TransformComponent>
    </TransformWrapper> */}
    <div className={style["div"]}>
      <canvas ref={ref}
        width={canvasWH} height={canvasWH}
      // className={style["canvas"]}
      />
    </div>
  </StrictMode>;
}