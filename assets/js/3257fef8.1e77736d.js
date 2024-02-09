"use strict";(self.webpackChunkpushpreview=self.webpackChunkpushpreview||[]).push([[473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||v[f]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},o="Private previews",s={unversionedId:"configuration/private-previews",id:"configuration/private-previews",title:"Private previews",description:"Previews generated through PushPreview are public by default, allowing anyone with the link to access them. However, for added security or to maintain confidentiality, PushPreview provides an option to set these previews to be private. This ensures that only authorized viewers can see them, making it a crucial feature for sensitive or confidential projects.",source:"@site/docs/configuration/private-previews.md",sourceDirName:"configuration",slug:"/configuration/private-previews",permalink:"/configuration/private-previews",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/configuration/authentication"},next:{title:"Support",permalink:"/support"}},l={},p=[{value:"Enable private previews by default",id:"enable-private-previews-by-default",level:2},{value:"Mark individual integrations as private",id:"mark-individual-integrations-as-private",level:2}],u={toc:p},c="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"private-previews"},"Private previews"),(0,n.kt)("p",null,"Previews generated through PushPreview are public by default, allowing anyone with the link to access them. However, for added security or to maintain confidentiality, PushPreview provides an option to set these previews to be private. This ensures that only authorized viewers can see them, making it a crucial feature for sensitive or confidential projects."),(0,n.kt)("p",null,"Private previews work by restricting access to users who have ",(0,n.kt)("inlineCode",{parentName:"p"},"READ")," permissions over the repository linked to the preview.\nThis means that only team members or collaborators with the necessary permissions can view the private previews."),(0,n.kt)("p",null,"There are two ways to enable private previews: setting them as private by default for your entire team or marking individual integrations as private."),(0,n.kt)("h2",{id:"enable-private-previews-by-default"},"Enable private previews by default"),(0,n.kt)("p",null,"To make all previews private by default for all your integrations, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your PushPreview account."),(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Team")," page."),(0,n.kt)("li",{parentName:"ol"},"Turn on the ",(0,n.kt)("strong",{parentName:"li"},"Private previews")," option."),(0,n.kt)("li",{parentName:"ol"},"Save the changes.")),(0,n.kt)("p",null,"This setting ensures that every new preview generated will be private, accessible only to users with the appropriate permissions."),(0,n.kt)("h2",{id:"mark-individual-integrations-as-private"},"Mark individual integrations as private"),(0,n.kt)("p",null,"For more granular control, you can set privacy settings on a per-integration basis:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your PushPreview account."),(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Integrations")," page."),(0,n.kt)("li",{parentName:"ol"},"Choose the integration you want to modify."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"Enable the ",(0,n.kt)("strong",{parentName:"li"},"Private previews")," option."),(0,n.kt)("li",{parentName:"ol"},"Save the changes.")),(0,n.kt)("p",null,"This option is ideal for teams that require different privacy levels for various integrations, allowing flexibility and control over who can access specific previews."))}v.isMDXComponent=!0}}]);