import { StrictMode, useEffect, useRef, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import style from './_index.module.scss';
import { useMount } from "ahooks";

const gridSize = 50; // 每个格子50x50像素  
const numRows = 8;
const numCols = 8;

const canvasWH = 400;
const minScale = 1;
const maxScale = 4;
const divWH = 400;
export default function Canvas () {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  // 获取canvas元素和绘图上下文  
  const { current } = ref;
  const { current: divCur } = divRef;
  const { offsetLeft, clientTop } = (() => {
    if (divCur) {
      return {
        offsetLeft: divCur.offsetLeft,
        clientTop: divCur.clientTop,
      };
    } else {
      return {
        offsetLeft: 0,
        clientTop: 0,
      };
    }
  })();
  useEffect(() => {
    setValue(' ');
    setTimeout(() => {
      if (!current) {
        return;
      }
      const canvas = document.createElement('canvas');
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
    });
  }, []);
  // 示例坐标点数组  
  const exampleCoordinates = [
    [1, 1],
    [2, 2],
    [3, 3],
    // ... 更多坐标点  
  ];
  let scale = 1;
  // const [scale, setScale] = useState(1);
  //<div className={style["div"]} ref={divRef}>
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

    <canvas ref={ref}
      width={canvasWH} height={canvasWH}
    // onWheel={event => unstable_batchedUpdates(() => {
    //   // event.preventDefault();
    //   event.stopPropagation();
    //   const { deltaY, currentTarget, clientX, clientY } = event;
    //   // event.persist();
    //   // setScale(Math.min(Math.max(0.125, event.deltaY * -0.01), 4));
    //   // Apply scale transform
    //   if (scale <= minScale && deltaY > 0 || !current) {
    //     return false;
    //   }
    //   const tik = deltaY * -0.001;
    //   scale += tik;
    //   // Restrict scale
    //   scale = Math.min(Math.max(minScale, scale), maxScale);
    //   // console.log(deltaY);
    //   //0<clientX<400
    //   const translate = (() => {
    //     const { transform } = current?.style;
    //     const matches = transform.match(/(-?\d+(\.\d+)?)/g)?.map(Number);
    //     if (matches && deltaY > 0) {
    //       const [oldScale, oldX, oldY] = matches;
    //       if (oldScale && oldX && oldY) {
    //         const tiktok = (minScale - oldScale) / tik;
    //         const mul = (tiktok - 1) / tiktok;
    //         // console.log(tiktok, mul, oldScale);
    //         return {
    //           x: oldX * mul,
    //           y: oldY * mul,
    //         };
    //       }
    //     }
    //     const res = 100 * (1 - 0.5 ** Math.sqrt(scale)) / 0.5;
    //     console.log(clientX, offsetLeft, clientX - offsetLeft, (200 - (clientX - offsetLeft)) / 200 * res, res);

    //     return {
    //       x: (200 - (clientX - offsetLeft)) / 200 * res,
    //       y: (200 - (clientY - clientTop)) / 200 * res,
    //     };
    //   })();

    //   currentTarget.style.transform = `scale(${scale}) translate(${translate.x}px,${translate.y}px)`;
    //   // event.currentTarget.style.transformOrigin = `${0}px ${0}px`;
    //   return false;
    // })}
    // onScroll={() => false}
    />
    <div ref={divRef} className={style['map']}></div>
  </StrictMode>;
}
//</div>