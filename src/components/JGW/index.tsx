import { useRequest } from "ahooks";
import axios from "axios";
import { StrictMode } from "react";
import style from './_index.module.scss';

export default function JGW () {
  const { data } = useRequest(() => axios.get<{
    readonly allFont: ReadonlyArray<{
      readonly font: string;
      readonly des: string;
      readonly mean: string;
    }>;
  }>('./assets/jgw.json').then(e => e.data.allFont));
  console.log(data);
  if (!data)
    return <StrictMode />;
  return <StrictMode>
    <div className={style['JGW']}>
      {data.map((i, index) =>
        <div key={index}>
          <span>{index + 1}：</span><span>{i.font}</span><span title={i.mean}>{i.des}</span>
        </div>)}
    </div>
  </StrictMode>;
}