"use strict";(()=>{var m=function(i,o,e,a){function r(t){return t instanceof e?t:new e(function(s){s(t)})}return new(e||(e=Promise))(function(t,s){function u(c){try{n(a.next(c))}catch(l){s(l)}}function f(c){try{n(a.throw(c))}catch(l){s(l)}}function n(c){c.done?t(c.value):r(c.value).then(u,f)}n((a=a.apply(i,o||[])).next())})},k=function(i,o){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,r,t,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(n){return function(c){return f([n,c])}}function f(n){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,n[0]&&(e=0)),e;)try{if(a=1,r&&(t=n[0]&2?r.return:n[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,n[1])).done)return t;switch(r=0,t&&(n=[n[0]&2,t.value]),n[0]){case 0:case 1:t=n;break;case 4:return e.label++,{value:n[1],done:!1};case 5:e.label++,r=n[1],n=[0];continue;case 7:n=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!t||n[1]>t[0]&&n[1]<t[3])){e.label=n[1];break}if(n[0]===6&&e.label<t[1]){e.label=t[1],t=n;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(n);break}t[2]&&e.ops.pop(),e.trys.pop();continue}n=o.call(i,e)}catch(c){n=[6,c],r=0}finally{a=t=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},d=null,v=null,T=!1;function S(){return m(this,void 0,void 0,function(){var i,o;return k(this,function(e){switch(e.label){case 0:return typeof process<"u"&&process.versions!=null&&process.versions.node!=null?(i="http",[4,import(i)]):[3,3];case 1:return d=e.sent(),o="https",[4,import(o)];case 2:v=e.sent(),e.label=3;case 3:return T=!0,[2]}})})}function E(i,o){return m(this,void 0,void 0,function(){var e;return k(this,function(a){switch(a.label){case 0:return[4,fetch("".concat(o),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})];case 1:return e=a.sent(),[2,e.json()]}})})}function M(i,o,e){return m(this,void 0,void 0,function(){var a,r,t,s;return k(this,function(u){return a=JSON.stringify(i),r=new URL(o),t={hostname:r.hostname,path:r.search?r.pathname+r.search:r.pathname,port:r.port,method:"POST",headers:{"Content-Type":"application/json","Content-Length":a.length},agent:e},s=o.includes("https")?v:d,[2,new Promise(function(f,n){var c=s.request(t,function(l){var w="";l.on("data",function(p){w+=p}),l.on("end",function(){return m(this,void 0,void 0,function(){var p;return k(this,function(I){return p=JSON.parse(w),f(p),[2]})})})});c.on("error",function(l){n(l)}),c.write(a),c.end()})]})})}var x=function(){function i(o){if(this.url=void 0,this.agent=void 0,this.url=o,d!==null&&v!==null){var e=o.includes("https")?v:d;this.agent=new e.Agent({keepAlive:!0})}}return i.prototype.call=function(o){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];return m(this,void 0,void 0,function(){var r,t;return k(this,function(s){switch(s.label){case 0:return r={jsonrpc:"2.0",method:o,params:e,id:3},t=void 0,T?[3,2]:[4,S()];case 1:s.sent(),s.label=2;case 2:return d!==null&&v!==null?[4,M(r,this.url,this.agent)]:[3,4];case 3:return t=s.sent(),[3,6];case 4:return[4,E(r,this.url)];case 5:t=s.sent(),s.label=6;case 6:return t.error?[2,t.error.message]:[2,t.result]}})})},i}();var g=function(i,o,e,a){function r(t){return t instanceof e?t:new e(function(s){s(t)})}return new(e||(e=Promise))(function(t,s){function u(c){try{n(a.next(c))}catch(l){s(l)}}function f(c){try{n(a.throw(c))}catch(l){s(l)}}function n(c){c.done?t(c.value):r(c.value).then(u,f)}n((a=a.apply(i,o||[])).next())})},y=function(i,o){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,r,t,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(n){return function(c){return f([n,c])}}function f(n){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,n[0]&&(e=0)),e;)try{if(a=1,r&&(t=n[0]&2?r.return:n[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,n[1])).done)return t;switch(r=0,t&&(n=[n[0]&2,t.value]),n[0]){case 0:case 1:t=n;break;case 4:return e.label++,{value:n[1],done:!1};case 5:e.label++,r=n[1],n=[0];continue;case 7:n=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!t||n[1]>t[0]&&n[1]<t[3])){e.label=n[1];break}if(n[0]===6&&e.label<t[1]){e.label=t[1],t=n;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(n);break}t[2]&&e.ops.pop(),e.trys.pop();continue}n=o.call(i,e)}catch(c){n=[6,c],r=0}finally{a=t=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},b=function(){function i(){}return i.getAllTasksByUser=function(o){return g(this,void 0,void 0,function(){return y(this,function(e){switch(e.label){case 0:return[4,i.remote.call("TaskService.getAllTasksByUser",o)];case 1:return[2,e.sent()]}})})},i.createTask=function(o,e){return g(this,void 0,void 0,function(){return y(this,function(a){switch(a.label){case 0:return[4,i.remote.call("TaskService.createTask",o,e)];case 1:return[2,a.sent()]}})})},i.updateTask=function(o,e,a,r){return g(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,i.remote.call("TaskService.updateTask",o,e,a,r)];case 1:return[2,t.sent()]}})})},i.deleteTask=function(o,e){return g(this,void 0,void 0,function(){return y(this,function(a){switch(a.label){case 0:return[4,i.remote.call("TaskService.deleteTask",o,e)];case 1:return[2,a.sent()]}})})},i.remote=new x("https://tlophft3qdgxp432guofmxccy40vzpei.lambda-url.us-east-1.on.aws/TaskService"),i}();var B=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC3545" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>`,h=localStorage.getItem("apiToken");h||(h=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),localStorage.setItem("apiToken",h));async function L(){document.getElementById("modal-error-elem").innerHTML="";let i=document.getElementById("task-title-input").value;if(!i){document.getElementById("modal-error-elem").innerHTML="Title is mandatory";return}b.createTask(h,i).then(o=>{o.success&&location.reload()})}document.getElementById("add-task-btn").addEventListener("click",async i=>{i.preventDefault(),L()});b.getAllTasksByUser(h).then(i=>{if(i.success)for(let e of i.tasks){let a=document.getElementById("tasks"),r=`<span>${e.title}</span>`,t=e.url?`at <a href="${e.url}" target="_blank"> ${e.url}</a>`:"",s=e.solved?"checked":"",u=`<button class="btn" onclick="">${B}</button>`;a.innerHTML+=`
        <div class="mb-3">
            <div class="d-flex align-items-center">
                <input type="checkbox" ${e.solved?"checked":""} class="task_checkbox" id=${e.id}>
                <p class="mb-0" style="margin-right: auto; margin-left: 20px">
                  ${r}
                  ${t}
                </p>
                <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Check out genezio challenge">
                  ${u}
                </span>
            </div>
        </div>
        `}let o=document.getElementsByClassName("task_checkbox");for(let e of o)e.addEventListener("change",async a=>{let r=a.target.id,t=i.tasks.find(s=>s.id===r);await b.updateTask(h,r,t.title,a.target.checked)})});})();
//# sourceMappingURL=bundle.js.map
