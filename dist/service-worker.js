function a(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}self.addEventListener("install",i=>{i.waitUntil(self.skipWaiting())});self.addEventListener("activate",i=>{i.waitUntil(self.clients.claim())});self.addEventListener("message",i=>{var t;((t=i==null?void 0:i.data)==null?void 0:t.type)==="SKIP_WAITING"&&self.skipWaiting()});export{a as __vite_legacy_guard};
