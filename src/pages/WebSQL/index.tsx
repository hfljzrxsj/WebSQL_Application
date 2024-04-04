import { Alert, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Skeleton, Slider, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, TextField, type AlertColor } from "@mui/material";
import type { WindowDatabase, SQLResultSet, DOMString } from "./type";
import { useRequest, useSafeState, useSetState, useUpdateEffect } from "ahooks";
import { useMemo } from "react";
import style from './_index.module.scss';
import * as classNames from "classnames";
import { unstable_batchedUpdates } from "react-dom";
const { log } = console;
interface Student {
  readonly Sid: number; // 假设INT和INT2在TypeScript中都可以映射为number类型  
  readonly Sname: string; // TEXT在TypeScript中映射为string类型  
  readonly Sage: [number, number]; // 同上，INT2映射为number  
  readonly Ssex: string; // TEXT映射为string  
  readonly Sclass: number; // INT映射为number  
  readonly Sdept: number; // INT2映射为number  
  readonly Saddr: string; // TEXT映射为string，并且由于Saddr在SQL中是可选的，所以在TypeScript中使用可选属性（?）表示  
}
const callbackEventLoop = (callback: () => void) => {
  const cb = (resolve: () => void) =>
    requestIdleCallback?.(() =>
      setTimeout?.(() =>
        requestAnimationFrame?.(() =>
          queueMicrotask?.(() =>
            Promise?.resolve?.()?.then?.(() => {
              const { port1, port2 } = new MessageChannel();
              port2.onmessage = () => resolve?.();
              port1?.postMessage?.(null);
            }
            ).catch(console?.error)
          )
        )
      )
    );
  // addEventListener?.('load', () =>
  return new Promise<void>(resolve =>
    new Promise<void>(resolve =>
      cb?.(resolve)
    )?.then?.(() =>
      cb?.(() => {
        callback?.();
        resolve?.();
      })
    ).catch(console?.error)).catch(console?.error);
  // );
};
//@ts-expect-error
const that: WindowDatabase = window ?? global ?? globalThis ?? self ?? this;
const name = 'table';
const version = '1.0';
const displayName = name;
const estimatedSize = 2 * 1024 * 1024;
const db = that.openDatabase(name, version, displayName, estimatedSize, (e) => {
  log('sucess', e, 'version', e.version);
});
// const [makeSQL, setMakeSQL] = useSetState<Student>({
//   Sid: 0,
// });
fetch('assets/sql.sql').then(e => e.text()).then((e: string) => {
  db.transaction(tx => {
    e.split(';').forEach(i => {
      const sql = i.trim();
      if (sql)
        tx.executeSql(sql);
    });
  }, console.error, () => {
    log('Yes, hjx!');
  });
});
type keyOfStudent = keyof Student;
type RecordIdBool = Record<keyOfStudent, boolean>;
const minDistance = 0;
const allString = '未选择';
export default function WebSQL () {
  const { data, loading } = useRequest<{
    readonly tableName: string;
    readonly config: ReadonlyArray<{
      readonly id: keyOfStudent;
      readonly name: string;
      // readonly between?: boolean;
      readonly type?: 'enum' | 'number' | 'between';
      readonly enum?: ReadonlyArray<string>;
    }>;
  }, []>(() => fetch('assets/config.json').then(e => e.json()), {
    loadingDelay: 300,
    throttleWait: 300,
  });
  const idToName = data?.config ?? [];
  const [sql, setSql] = useSafeState('');
  const [makeSQL, setMakeSQL] = useSetState<Partial<Student>>({
  });
  const makeSQLArr = Object.entries(makeSQL).filter(([, v]) => v !== '');
  const makeSQLInit = (bool: boolean) => idToName.reduce((pre, cur) => {
    pre[cur.id] = cur.type ? false : bool;
    return pre;
  }, {} as RecordIdBool);
  const [makeSQLRequire, setMakeSQLRequire] = useSetState<RecordIdBool>(makeSQLInit(false));
  const makeSQLRequireArr = Object.values(makeSQLRequire);
  const [makeSQLFuzzy, setMakeSQLFuzzy] = useSetState<RecordIdBool>(makeSQLInit(false));
  const buttonOnClick = (s = sql) => {
    const arr = s.trim().split(';');
    db.transaction(tx => {
      for (let i of arr) {
        if (i)
          tx.executeSql(i, [], function (_tx, results) {
            const { rows } = results;
            log(results);
            // if (results.insertId === undefined)
            setSQLResultSetRowList({
              rows
            });
            // else
            //   setSQLResultSetRowList({
            //     insertId: results.insertId,
            //     rowsAffected: results.rowsAffected,
            //   });
          });
      }
    }, (e) => {
      console.log(e);
      setSeverity({
        severity: 'error',
        text: `执行失败, 原因：${e.message}`
      });
    }, () => {
      console.log('success');
    });
  };
  useUpdateEffect(() => unstable_batchedUpdates(() => {
    const initSQL = `SELECT * FROM ${data?.tableName};`;
    setSql(initSQL);
    setMakeSQLRequire(makeSQLInit(false));
    setMakeSQLFuzzy(makeSQLInit(false));
    callbackEventLoop(() => buttonOnClick(initSQL));
    // buttonOnClick();
  }), [data?.tableName]);
  const [SQLResultSetRowList, setSQLResultSetRowList] = useSetState<
    SQLResultSet>({
      insertId: 0,
      rowsAffected: 0,
      rows: {
        length: 0,
        item: () => { },
      }
    });
  useUpdateEffect(() => {
    setSql(`SELECT ${makeSQLRequireArr.every(i => !Boolean(i)) ?
      '*' :
      Object.entries(makeSQLRequire).reduce((pre, cur) => {
        if (cur[1])
          return [...pre, cur[0]];
        else
          return pre;
      }, [] as ReadonlyArray<string>).join(', ')
      } FROM ${data?.tableName}${makeSQLArr.length === 0 ? '' : ' WHERE ' +
        makeSQLArr.reduce((pre, cur) => {
          const [k, v] = cur;
          if (v === '') {
            return pre;
          }
          if (Array.isArray(v)) {
            return [...pre, `(${k}>=${v[0]}) and (${k}<=${v[1]})`];
          } else {
            return [...pre, `${k} ${makeSQLFuzzy[k as keyOfStudent] ? `like "%${v.toString()}%"` : `= "${v.toString()}"`} `];
          }
        }, [] as ReadonlyArray<string>).join(' and ')
      };`);
  }, [makeSQL, makeSQLFuzzy, makeSQLRequire]);
  const rows = SQLResultSetRowList?.rows;
  const columns = useMemo(() => {
    if (rows.length)
      return Object.keys(rows.item(0) ?? {});
    return [];
  }, [rows]);
  const [severity, setSeverity] = useSetState<{
    readonly severity: AlertColor,
    readonly text: string | DOMString;
  }>({
    severity: 'info',
    text: '待操作'
  });
  const [open, setOpen] = useSafeState(false);
  useUpdateEffect(() => {
    setSeverity({
      severity: 'success',
      text: `执行成功, 查到 ${rows?.length} 条记录`
    });
    setOpen(true);
  }, [rows]);
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  if (loading || idToName.length === 0) {
    return <Skeleton
      className={style['Skeleton'] ?? ''}
      variant="rounded"
      animation="wave" />;
  }
  return <>
    <Paper elevation={24} className={style['Paper'] ?? ''}>
      <Paper elevation={24} className={style['Input'] ?? ''}  >
        {/* <Paper elevation={24}> */}
        {idToName.map((i, index) => {
          return <Paper elevation={24} key={index}
            className={classNames({ [style['last'] ?? '']: i.type === 'between' }) ?? ''}
          >
            <Checkbox
              onChange={(_e, c) => {
                setMakeSQLRequire({
                  [i.id]: c
                } as RecordIdBool);
              }}
            />{(() => {
              switch (i.type) {
                case 'enum':
                  return <FormControl fullWidth>
                    <InputLabel>{i.name}</InputLabel>
                    <Select
                      fullWidth
                      value={makeSQL[i.id]?.toString()}
                      // defaultValue={allString}
                      label={i.name}
                      onChange={(e) => {
                        setMakeSQL({
                          [i.id]: e.target.value
                        });
                      }}>
                      <MenuItem value="">{allString}</MenuItem>
                      {i.enum?.map(i => <MenuItem value={i}>{i}</MenuItem>)}
                    </Select></FormControl>;
                case 'between': {
                  const arr = makeSQL[i.id];
                  return <>
                    <span>{i.name}</span>
                    <Slider
                      // getAriaLabel={() => 'Minimum distance shift'}
                      value={Array.isArray(arr) ? arr : [0, 100]}
                      onChange={(_event,
                        newValue,
                        activeThumb,) => {
                        if (!Array.isArray(newValue)) {
                          return;
                        }
                        const [v1, v2] = newValue;
                        if (v1 !== undefined && v2 !== undefined)
                          if (v2 - v1 < minDistance) {
                            if (activeThumb === 0) {
                              const clamped = Math.min(v1, 100 - minDistance);
                              setMakeSQL({ [i.id]: [clamped, clamped + minDistance] });
                            } else {
                              const clamped = Math.max(v2, minDistance);
                              setMakeSQL({ [i.id]: [clamped - minDistance, clamped] });
                            }
                          } else {
                            setMakeSQL({ [i.id]: newValue });
                          }

                      }}
                      valueLabelDisplay="on"
                      // getAriaValueText={valuetext}
                      disableSwap
                    /></>;
                }
                default:
                  return <>
                    <TextField
                      autoFocus
                      // autoComplete=""
                      aria-autocomplete="both"
                      label={i.name}
                      type={i.type === 'number' ? 'number' : "search"}
                      value={makeSQL[i.id]}
                      onChange={(e) => {
                        setMakeSQL({
                          [i.id]: e.target.value
                        });
                      }}
                    // disabled={!makeSQLRequire[i.id]}
                    // onChange={e => setMakeSQL({ Sid: Number(e.target.value) })}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="模糊搜索"
                      onChange={(_e, c) => setMakeSQLFuzzy({
                        [i.id]: c
                      } as RecordIdBool)}
                    /></>;
              }
            })()}
          </Paper>;
        })}
        {/* </Paper> */}
        {/* <p>{`select ${makeSQLRequireArr.every(i => !Boolean(i)) ?
          '*' :
          Object.entries(makeSQLRequire).reduce((pre, cur) => {
            if (cur[1])
              return [...pre, cur[0]];
            else
              return pre;
          }, [] as ReadonlyArray<string>).join(', ')
          }`}</p>
        <Button size='large' variant='contained'
          onClick={() => {
            if (sql)
              db.transaction(tx => {
                // for (let i of arr) {
                // if (i)
                tx.executeSql(sql, [], function (_tx, results) {
                  const { rows } = results;
                  if (rows.length > 0)
                    setSQLResultSetRowList({
                      rows
                    });
                  else
                    setSQLResultSetRowList({
                      insertId: results.insertId,
                      rowsAffected: results.rowsAffected,
                    });
                });
                // }
              }, (e) => {
                console.log(e);
              }, () => {
                console.log('success');
              });
          }}
        >查询</Button> */}
      </Paper>
      <Paper elevation={24} className={style['sqlInput'] ?? ''}>
        {/* <Paper elevation={24}> */}
        <TextField
          multiline
          autoFocus
          fullWidth
          aria-autocomplete="both"
          label='SQL'
          onChange={e => setSql(e.target.value)}
          value={sql}
        />
        {/* </Paper> */}
        <Button size='large' variant='contained'
          onClick={_e => buttonOnClick(sql)}
        >Transaction</Button>
      </Paper>
      <Paper elevation={24} className={style['fullWidth'] ?? ''}><Alert severity={severity.severity} variant="filled">{severity.text}</Alert></Paper>
      {/* <Paper elevation={24}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>最后插入行</TableCell>
              <TableCell>{SQLResultSetRowList?.insertId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>影响行数</TableCell>
              <TableCell>{SQLResultSetRowList?.rowsAffected}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>结果长度</TableCell>
              <TableCell>{rows?.length}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper> */}
      <Paper elevation={24}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align='center'
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              new Array(rows.length).fill(' ').map((_i, index) =>
                <TableRow hover key={index}>
                  {
                    (columns.map((column, ind) => {
                      return (
                        <TableCell
                          key={ind}
                          align='center'
                        >
                          {rows?.item(index)[column]}
                        </TableCell>
                      );
                    }))}
                </TableRow>)
            }
            {/* {columns.map((row, index) =>
          <TableRow hover key={index}>
            {
              (columns.map((column, ind) => {
                return (
                  <TableCell
                    key={ind}
                    align='center'
                  >
                    {rows?.item(ind)}
                  </TableCell>
                );
              }))}
          </TableRow>
        )} */}
          </TableBody>
          {/* <TableFooter>查询长度：{rows?.length}</TableFooter> */}
        </Table>
      </Paper>
    </Paper>
    <Snackbar open={Boolean(open && severity.text)}
      autoHideDuration={3e3}
      onClose={handleClose}
      message={severity.text}
      className={style['Snackbar'] ?? ""}
    >
      <Alert
        onClose={handleClose}
        severity={severity.severity}
        variant="filled"
      >{severity.text}</Alert >
    </Snackbar>
  </>;
}