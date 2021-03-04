(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var i=t(0),o=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),b=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(t),s=i,u=d["".concat(a,".").concat(s)]||d[s]||m[s]||r;return t?o.a.createElement(u,c(c({ref:n},p),{},{components:t})):o.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<r;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(3),o=t(7),r=(t(0),t(103)),a={id:"region-endpoint",title:"RegionEndpoint",slug:"../api-reference/region-endpoint"},c={unversionedId:"api_reference/region-endpoint",id:"api_reference/region-endpoint",isDocsHomePage:!1,title:"RegionEndpoint",description:"You need to specify a region that contains your DB.",source:"@site/docs/api_reference/region-endpoint.md",slug:"/api-reference/region-endpoint",permalink:"/EfficientDynamoDb/docs/api-reference/region-endpoint",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/api_reference/region-endpoint.md",version:"current"},l=[],p={toc:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You need to specify a region that contains your DB.\nThere are static properties for every supported region in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/AllocZero/EfficientDynamoDb/blob/master/src/EfficientDynamoDb/Context/Config/RegionEndpoint.cs"},"RegionEndpoint")," class."),Object(r.b)("p",null,"List of supported regions:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USEast1")," - US East (N. Virginia)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USEast2")," - US East (Ohio)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USWest1")," - US West (N. California)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USWest2")," - US West (Oregon)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.AFSouth1")," - Africa (Cape Town)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APEast1")," - Asia Pacific (Hong Kong)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APSouth1")," - Asia Pacific (Mumbai)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APNorthEast1")," - Asia Pacific (Tokyo)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APNorthEast2")," - Asia Pacific (Seoul)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APNorthEast3")," - Asia Pacific (Osaka-Local)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APSouthEast1")," - Asia Pacific (Singapore)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.APSouthEast2")," - Asia Pacific (Sydney)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.CACentral1")," - Canada (Central)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.CNNorth1")," - China (Beijing)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.CNNorthWest1")," - China (Ningxia)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUCenteral1")," - Europe (Frankfurt)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUWest1")," - Europe (Ireland)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUWest2")," - Europe (London)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUWest3")," - Europe (Paris)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUSouth1")," - Europe (Milan)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.EUNorth1")," - Europe (Stockholm)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.MESouth1")," - Middle East (Bahrain)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.SAEast1")," - South America (S\xe3o Paulo)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USGovEast1")," - AWS GovCloud (US-East)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"RegionEndpoint.USGovWest1")," -AWS GovCloud (US)")))}b.isMDXComponent=!0}}]);