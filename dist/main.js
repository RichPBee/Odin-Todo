(()=>{"use strict";const t=e=>{const d=e[0];return e.forEach(((e,n)=>{0!==n&&("object"==typeof e&&Array.isArray(e)?(o(d,e[0]),t(e)):o(d,e))})),d},o=(t,...o)=>{o.forEach((o=>{Array.isArray(o)?o.forEach((o=>{t.appendChild(o)})):t.appendChild(o)}))},e=t=>{const o=document.getElementById(t);o.parentNode.removeChild(o)},d=(o,e)=>{if(document.getElementById(o)){const d=document.getElementById(o);d.innerHTML="",t([d].concat(e))}},n=(t,o,e)=>{if("justifyContent"===o)return t.style.justifyContent=e,t},i=(t,o,e="",d=[],i={})=>{let r=document.createElement(t);for(const[t,e]of Object.entries(o))r.setAttribute(`${t}`,e);if(e&&(r.innerText=e),0!==d.length&&d.forEach((t=>{r.appendChild(t)})),0!==Object.keys(i).length)for(const[t,o]of Object.entries(i)){const e=n(r,t,o);r=e}return r},r=(t,o,e)=>{const d=i("button",t,o);return d.addEventListener("click",e),d},c=[],s=(t,o="",e="",d="",n=0,i=[])=>{const r={name:t,desc:o,endDate:e,endDate:e,notes:d,id:n,todos:i};return c.push(r),r.id=c.length-1,r},a=o=>{const d=i("div",{id:`todo-${o.title}-${o.todoId}`,class:"todo-item"}),n=i("div",{class:o.isComplete?"todo-done-true":"todo-done-false"}),c=(t=>[i("div",{id:`todo-details-${t.todoId}`,class:"todo-details"}),i("h4",{id:`todo-title-${t.todoId}`,class:"todo-title"},t.title),[i("div",{id:`todo-info-${t.todoId}`,class:"todo-info"}),i("p",{id:`todo-dueDate-${t.todoId}`,class:"todo-detail-text"},t.dueDate),i("p",{id:`todo-project-${t.todoId}`,class:"todo-detail-text"},t.project)]])(o),s=(t=>{const o=i("div",{id:`todo-item-btn-section-${t.todoId}`,class:"todo-item-btn-section"}),d=`edit-todo-${t.todoId}`,n=r({id:d,class:"edit-todo-btn",class:"todo-item-btn"},"Edit",(()=>{console.log(d)})),c=`expand-todo-${t.todoId}`,s=r({id:c,class:"expand-todo-btn",class:"todo-item-btn"},"Expand",(()=>{console.log(c)})),a=`delete-todo-${t.todoId}`,p=r({id:a,class:"delete-todo-btn",class:"todo-item-btn"},"Delete",(()=>{e((t=>`todo-${t.title}-${t.todoId}`)(t))})),l=`mark-todo-${t.todoId}`;return[o,n,s,p,r({id:l,class:"mark-todo-btn",class:"todo-item-btn"},"Complete",(()=>{t.isComplete=!0}))]})(o);return t([d,n,c,s])},p=()=>{const o=[i("div",{id:"todo-section"})];return m.reverse().forEach((t=>{o.push(a(t))})),t(o)},l=t=>r({id:`${t.name}-tab-btn`,class:"tab-btn"},`${t.name}`,(()=>{const o=b(t.name),e=[];o.forEach((t=>{e.push(a(t))})),d("todo-section",e)})),u=()=>{const o=[i("div",{id:"projects-section"}),r({id:"all-tab-btn",class:"tab-btn"},"All",(()=>{const t=[];m.forEach((o=>{t.push(a(o))})),d("todo-section",t)}))];return console.log(c),c.reverse().forEach((t=>{o.push(l(t))})),t(o)},m=[],b=t=>{const o=[];return m.forEach((e=>{e.project===t&&o.push(e)})),o},f=()=>{x("todo-form")},h=()=>{(()=>{const t=[];return m.forEach((o=>{o.isComplete&&t.push(o)})),t})().forEach((t=>{const o=`todo-${t.title}-${t.todoId}`;e(o)}))},j=()=>{x("project-form")},v=()=>{},y=()=>{x("main-view","project-form")},E=()=>{if(document.getElementById("project-form")){const t=document.querySelectorAll(".project-form-input");s(t[0].value,t[1].value,t[2].value,t[3].value),x("main-view","project-form")}},I=()=>{x("main-view","todo-form")},$=()=>{if(document.getElementById("todo-form")){const t=document.querySelectorAll(".todo-form-input");((t,o,e,d="",n="",i=0,r=!1)=>{const a={title:t,desc:o,dueDate:e,notes:d,project:n,todoId:i,isComplete:r};var p;m.push(a),a.todoId=m.length-1,p=a.project,c.map((t=>t.name)).includes(p)||(s(p),l(c[c.length-1]))})(t[0].value,t[1].value,t[2].value,t[3].value,t[4].value),x("main-view","todo-form")}},g=e=>{const d=(()=>{const o=i("div",{id:"app"}),e=i("div",{id:"app-body"}),d=u(),n=p(),c=(()=>{const o=i("div",{id:"app-header"}),e=(()=>{const t=i("div",{id:"search-sort-section"}),o=i("input",{id:"search-bar"});return[t,[i("div",{id:"search-bar-container"}),o],[i("div",{id:"sort-button-section"}),r({id:"sort-todos-btn"},"Sort: "),r({id:"select-project-btn"},"Project: All")]]})(),d=(()=>{const t=i("div",{id:"header-btns-section"}),o=r({id:"add-todo-btn",class:"header-btn-rhs"},"Add Todo",f),e=r({id:"create-project-btn",class:"header-btn-rhs"},"New Project",j),d=r({id:"manage-projects-btn",class:"header-btn-rhs"},"Manage Projects",v);return[t,o,r({id:"delete-completed-btn",class:"header-btn-rhs"},"Delete Completed",h),e,d]})();return t([o,e,d])})();return t([o,c,[e,d,n]])})();o(e,d)},x=(o,e="")=>{const d=e?`app-body-${e}`:e="app-body",n=document.getElementById(d),c=[n];switch(n.innerHTML="",o){case"main-view":n.setAttribute("id","app-body"),c.push(u(),p());break;case"todo-form":n.setAttribute("id","app-body-todo-form"),c.push((()=>{const o=i("div",{id:"todo-form-container"}),e=[i("form",{id:"todo-form"}),[i("div",{id:"todo-input-container"}),i("input",{id:"todo-title-input",class:"todo-form-input",type:"text",placeholder:"Title*: "}),i("input",{id:"todo-desc-input",class:"todo-form-input",type:"text",placeholder:"Description*: "}),i("input",{id:"todo-date-input",class:"todo-form-input",type:"text",placeholder:"Due Date*: "}),i("input",{id:"todo-notes-input",class:"todo-form-input",type:"text",placeholder:"Notes: "}),i("input",{id:"todo-project-input",class:"todo-form-input",type:"text",placeholder:"Project: "})],[i("div",{id:"todo-form-btn-container"}),r({id:"todo-form-cancel-btn",class:"todo-form-btn",type:"button"},"cancel",I),r({id:"todo-form-submit-btn",class:"todo-form-btn",type:"button"},"submit",$)]];return t([o,e])})());break;case"project-form":n.setAttribute("id","app-body-project-form"),c.push((()=>{const o=i("div",{id:"project-form-container"}),e=[i("form",{id:"project-form"}),[i("div",{id:"project-input-container"}),i("input",{id:"project-title-input",class:"project-form-input",type:"text",placeholder:"Title*: "}),i("input",{id:"project-desc-input",class:"project-form-input",type:"text",placeholder:"Description: "}),i("input",{id:"project-date-input",class:"project-form-input",type:"text",placeholder:"End Date: "}),i("input",{id:"project-notes-input",class:"project-form-input",type:"text",placeholder:"Notes: "})],[i("div",{id:"project-form-btn-container"}),r({id:"project-form-cancel-btn",class:"project-form-btn",type:"button"},"cancel",y),r({id:"project-form-submit-btn",class:"project-form-btn",type:"button"},"submit",E)]];return t([o,e])})())}t(c)};window.onload=t=>{const o=document.getElementById("content");g(o)}})();