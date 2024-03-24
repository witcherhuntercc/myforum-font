import{R as $,S as G,_ as J}from"./RichTextEditor-LAujlH9F.js";import{_ as K,u as L,b as Q,i as y,r as m,e as U,f as W,j as n,o as b,c as w,a as l,k as t,w as o,F as X,n as g,l as f,s as Y,v as Z}from"./index-78te5h-u.js";import{A as tt,C as et}from"./Close-c0HtZweH.js";const ot=d=>(Y("data-v-a127a74f"),d=d(),Z(),d),at={class:"topbar"},st=ot(()=>l("text",{style:{position:"absolute",left:"200px","line-height":"50px",color:"#383838"}},"标题",-1)),nt={style:{position:"absolute",right:"50px",top:"8px"}},lt={class:"tabs"},it={style:{width:"400px",height:"450px",background:"white"}},rt={key:0,style:{width:"300px",height:"150px",margin:"0 auto"}},ct={style:{"margin-bottom":"12px"}},dt={key:1,style:{width:"230px",margin:"0 auto"}},ut={style:{width:"300px",margin:"0 auto"}},pt={style:{position:"absolute",right:"100px",bottom:"30px"}},_t={style:{position:"absolute",right:"30px",bottom:"30px"}},mt={__name:"Publish",setup(d){const C=L();Q(),y("serverUrl");const u=y("axios"),h=y("message"),B=m(!1),p=U({avatarUrl:"",id:0}),k=m([]),s=U({id:0,categoryName:"ordinary_article",title:"",content:"",headImage:""}),_=m(!1),v=m(!1);W(()=>{N(),F()});const N=async()=>{let a=await u.get("/user");console.log(a),a.code==200&&(p.avatarUrl=a.data.avatar,p.id=a.data.userid,B.value=!0)},F=async()=>{let a=await u.get("/article/category");console.log(a.data),k.value=a.data.map(e=>({label:e.name,value:e.name}))},S=()=>{_.value=!0},V=()=>{_.value=!1},M=async a=>{var e;return((e=a.file.file)==null?void 0:e.type)!=="image/png"?(h.error("只能上传png格式的图片"),!1):!0},R=async({file:a})=>{const e=new FormData;e.append("file",a.file),e.append("type","avatar");let i=await u.post("/upload",e);console.log(i),s.headImage=i.data,v.value=!0},z=()=>{s.headImage="",v.value=!1},A=async()=>{const a={title:s.title,content:s.content,authorid:p.id,avatar:s.headImage,category:s.categoryName};let e=await u.post("/publish/article",a);console.log(e),e.code==200?(h.success(e.message),I()):h.error(e.message)},I=()=>{C.go(-1)};return(a,e)=>{const i=n("n-icon"),c=n("n-button"),D=n("n-input"),q=n("n-avatar"),x=n("n-card"),E=n("n-text"),j=n("n-upload-dragger"),P=n("n-upload"),H=n("n-image"),O=n("n-select"),T=n("n-modal");return b(),w(X,null,[l("div",at,[t(c,{onClick:I,strong:"",quaternary:"",round:"",style:{position:"absolute",left:"50px",top:"7px","font-size":"24px"},color:"#7B3DE0"},{default:o(()=>[t(i,null,{default:o(()=>[t(g($))]),_:1})]),_:1}),st,t(D,{value:s.title,"onUpdate:value":e[0]||(e[0]=r=>s.title=r),round:"",placeholder:"请输入标题",style:{position:"absolute",left:"265px",top:"8px",width:"1000px","background-color":"#F3F0F9"}},null,8,["value"]),t(q,{round:"",size:"medium",src:p.avatarUrl,style:{position:"absolute",right:"190px",top:"8px"}},null,8,["src"]),l("div",nt,[t(c,{round:"",color:"#7B3DE0",onClick:S},{icon:o(()=>[t(i,null,{default:o(()=>[t(g(G))]),_:1})]),default:o(()=>[f(" 发布 ")]),_:1})])]),l("div",lt,[t(x,null,{default:o(()=>[t(J,{modelValue:s.content,"onUpdate:modelValue":e[1]||(e[1]=r=>s.content=r)},null,8,["modelValue"])]),_:1})]),t(T,{show:_.value,"onUpdate:show":e[3]||(e[3]=r=>_.value=r)},{default:o(()=>[l("div",it,[t(x,{title:"封面",bordered:!1},{default:o(()=>[v.value?(b(),w("div",dt,[t(H,{height:"150",width:"300",src:s.headImage},null,8,["src"]),t(c,{onClick:z,circle:"",style:{position:"absolute",left:"298px",top:"50px"},color:"#383838"},{icon:o(()=>[t(i,null,{default:o(()=>[t(g(et))]),_:1})]),_:1})])):(b(),w("div",rt,[t(P,{multiple:"","directory-dnd":"",max:1,onBeforeUpload:M,"custom-request":R},{default:o(()=>[t(j,null,{default:o(()=>[l("div",ct,[t(i,{size:"48",depth:3},{default:o(()=>[t(g(tt))]),_:1})]),t(E,{style:{"font-size":"16px"}},{default:o(()=>[f(" 点击或者拖动图片到此处 ")]),_:1})]),_:1})]),_:1})]))]),_:1}),t(x,{title:"分类",bordered:!1},{default:o(()=>[l("div",ut,[t(O,{value:s.categoryName,"onUpdate:value":e[2]||(e[2]=r=>s.categoryName=r),options:k.value,placeholder:"请选择分类"},null,8,["value","options"])])]),_:1}),l("div",pt,[t(c,{type:"default",onClick:V},{default:o(()=>[f(" 取消 ")]),_:1})]),l("div",_t,[t(c,{type:"primary",onClick:A},{default:o(()=>[f(" 确认 ")]),_:1})])])]),_:1},8,["show"])],64)}}},vt=K(mt,[["__scopeId","data-v-a127a74f"]]);export{vt as default};
