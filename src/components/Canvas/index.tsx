import { StrictMode, useEffect, useRef, useState } from "react";


const gridSize = 50; // 每个格子50x50像素  
const numRows = 8;
const numCols = 8;


export default function Canvas () {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);
  // 获取canvas元素和绘图上下文  
  const { current } = ref;
  useEffect(() => {
    setValue(' ');
    setTimeout(() => {
      if (!current) {
        return;
      }
      const ctx = current.getContext('2d');
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
    });
  }, [current, ref, value]);

  // 示例坐标点数组  
  const exampleCoordinates = [
    [1, 1],
    [2, 2],
    [3, 3],
    // ... 更多坐标点  
  ];
  return <StrictMode>
    {/* <input
      // value={value}
      onChange={(e) => {
        const { value } = e.target;
        //#region 
        if (!current) {
          return;
        }
        const ctx = current.getContext('2d');
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
        for (let j = 0; j <= current.height; j += gridSize) {
          ctx.moveTo(0, j);
          ctx.lineTo(current.width, j);
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

        // // 5秒后清空canvas  
        // setTimeout(() => {
        //   ctx.clearRect(0, 0, current.width, current.height);
        // }, 5000);
      }}
    /> */}
    <canvas ref={ref} width="400" height="400" />
  </StrictMode>;
}