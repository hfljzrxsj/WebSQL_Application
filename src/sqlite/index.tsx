import initSqlJs from "sql.js";
import { verbose } from "sqlite3";
(async (
) => {
  console.log('hjx');
  // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
  // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
  initSqlJs();
})();
// export default function SQLFile () {
//   return <input
//     type='file'
//     onChange={e => {
//       const f = e.target?.files?.[0];
//       const r = new FileReader();
//       r.onload = function () {
//         const Uints = new Uint8Array(r.result);
//         db = new SQL.Database(Uints);
//       };
//       r.readAsArrayBuffer(f);
//     }}
//   />;
// }