//http://www.xnote.cn/themes/main/images/xnote.logo.png
tileLayer(canvas?.toDataURL("image/png") ?? '', {
  maxZoom: 8,
}).addTo(map(divRef.current ?? document.createElement('div'),
  {
    center: [0, 0], //中心经纬度
    zoom: 2, //初始缩放大小

  }
).setView([0, 0], 1));

import { map, tileLayer } from 'leaflet';
import "leaflet/dist/leaflet.css";