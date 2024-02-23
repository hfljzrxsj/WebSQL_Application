import { getTerminalActivitySalesStructure } from "@/actions";
import { commonUseRequestParams } from "@/App";
import { FilterDialogWithBreadcrumbs, type FilterDialogIncludeButtonInstance } from "@/components/FilterDialogWithBreadcrumbs";
import echartsConstructor, { type data } from "@/echarts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Divider, CircularProgress } from "@mui/material";
import { useRequest } from "ahooks";
import classNames from "classnames";
import { StrictMode, useEffect, useRef, useState } from "react";
import style from './_index.module.scss';
const { freeze } = Object;
const chartsArr = freeze([
  {
    type: 'day',
    label: '日销量',
  }, {
    type: 'month',
    label: '月销量',
  }, {
    type: 'year',
    label: '年销量',
  },
]);
const EchartsElement = (props: { readonly data: void | data | undefined; }) => {
  const { data } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { current } = ref;
  useEffect(() => {
    setTimeout(() => {
      if ((current || ref.current) && data) {
        // for (const i of current.attributes) {
        //   const { name } = i;
        //   if (name !== 'class')
        //     current.removeAttribute(name);
        // }
        // for (const i of current.childNodes) {
        //   i.remove();
        // }
        try {
          echartsConstructor({
            dom: current ?? ref.current ?? document.createElement('div'), data
          });
        }
        catch (e) {
          console.error(e);
        }
      }
    });
  }, [current, data]);
  //@ts-expect-error
  return (<div
    ref={ref}
    className={classNames(style["echarts"])}
    {...(current && { style: { '--offsetTop': `${current?.offsetTop}px` } })} />
  );
};
export interface TerminalActivitySalesStructureActionProps {
  readonly type: string;
  readonly address: string;
}
export default function TerminalActivitySalesStructure () {
  const [value, setValue] = useState('0');
  const type = chartsArr[Number(value)]?.type ?? '';
  const { data, loading, run } = useRequest((e) => getTerminalActivitySalesStructure({ ...e, type }), {
    ...commonUseRequestParams, refreshDeps: [type]
  });
  const noDataOrLoading = loading || !data;
  const childRef = useRef<FilterDialogIncludeButtonInstance>(null);
  return (
    <StrictMode>
      <FilterDialogWithBreadcrumbs
        ref={childRef}
        noNeedTime
        run={(e) => run({ ...e, type })} />
      <TabContext value={value}>
        <TabList
          centered
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue.toString());
          }}>{
            chartsArr.map((item, index) => <Tab value={index.toString()} label={item.label} key={index} />)
          }
        </TabList>
        <Divider />
        {chartsArr.map((_item, index) => <TabPanel
          value={index.toString()}
          className={classNames(noDataOrLoading ? style['loading'] : style["noLoading"])}
          key={index}
        ><StrictMode>
            {loading ? <CircularProgress /> : <EchartsElement data={data} />}
          </StrictMode>
        </TabPanel>)}
      </TabContext>
    </StrictMode>
  );
}