webpackJsonp([2],{"8AAi":function(t,e){},FJT2:function(t,e){},G3TW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("8Q2T"),i=s("FN8c"),o=s("oAV5"),r={name:"highlight",data:function(){return{styleObject:{"border-left":"2px solid green"}}},props:{language:{type:String},code:{required:!0,type:String},borderColor:{type:String,default:"green"}},watch:{borderColor:function(t,e){this.styleObject["border-left"]="2.5px solid "+t}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:this.code,expression:"code"}]},[e("code",{class:this.language,style:this.styleObject})])},staticRenderFns:[]};var u=[{title:"ID",align:"center",type:"index"},{title:"Status",align:"center",render:function(t,e){return t("Tag",{props:{color:i.e[e.row.result].color}},i.e[e.row.result].name)}},{title:"Memory",align:"center",render:function(t,e){return t("span",o.a.submissionMemoryFormat(e.row.memory))}},{title:"Time",align:"center",render:function(t,e){return t("span",o.a.submissionTimeFormat(e.row.cpu_time))}}],l=[{title:"Score",align:"center",key:"score"}],c=[{title:"Real Time",align:"center",render:function(t,e){return t("span",o.a.submissionTimeFormat(e.row.real_time))}},{title:"Singal",align:"center",key:"signal"}],m={name:"submissionDetails",components:{Highlight:s("VU/8")(r,a,!1,function(t){s("dJ2g")},"data-v-42d1f142",null).exports},data:function(){return{columns:[],submission:{result:"0",code:"",info:{data:[]},statistic_info:{time_cost:"",memory_cost:""}},isConcat:!1,loading:!1}},mounted:function(){this.getSubmission()},methods:{getSubmission:function(){var t=this;this.loading=!0,n.a.getSubmission(this.$route.params.id).then(function(e){t.loading=!1;var s=e.data.data,n=u;s.info&&s.info.data&&!t.isConcat&&(s.info.data[0].score&&(t.isConcat=!0,n=n.concat(l)),t.isAdminRole&&(t.isConcat=!0,n=n.concat(c)),t.columns=n),t.submission=s},function(){t.loading=!1})},shareSubmission:function(t){var e=this,s={id:this.submission.id,shared:t};n.a.updateSubmission(s).then(function(t){e.getSubmission(),e.$success("Succeeded")},function(){})}},computed:{status:function(){return{type:i.e[this.submission.result].type,statusName:i.e[this.submission.result].name,color:i.e[this.submission.result].color}},isCE:function(){return-2===this.submission.result},isAdminRole:function(){return this.$store.getters.isAdminRole}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{attrs:{type:"flex",justify:"space-around"}},[s("Col",{attrs:{span:20,id:"status"}},[s("Alert",{attrs:{type:t.status.type,showIcon:""}},[s("span",{staticClass:"title"},[t._v(t._s(t.status.statusName))]),t._v(" "),s("div",{staticClass:"content",attrs:{slot:"desc"},slot:"desc"},[t.isCE?[s("pre",[t._v(t._s(t.submission.statistic_info.err_info))])]:[s("span",[t._v("Time: "+t._s(t._f("submissionTime")(t.submission.statistic_info.time_cost)))]),t._v(" "),s("span",[t._v("Memory: "+t._s(t._f("submissionMemory")(t.submission.statistic_info.memory_cost)))]),t._v(" "),s("span",[t._v("Lang: "+t._s(t.submission.language))]),t._v(" "),s("span",[t._v("Author: "+t._s(t.submission.username))])]],2)])],1),t._v(" "),t.submission.info&&!t.isCE?s("Col",{attrs:{span:20}},[s("Table",{attrs:{stripe:"",loading:t.loading,"disabled-hover":!0,columns:t.columns,data:t.submission.info.data}})],1):t._e(),t._v(" "),s("Col",{attrs:{span:20}},[s("Highlight",{attrs:{code:t.submission.code,language:t.submission.language,"border-color":t.status.color}})],1),t._v(" "),t.submission.can_unshare?s("Col",{attrs:{span:20}},[s("div",{attrs:{id:"share-btn"}},[t.submission.shared?s("Button",{attrs:{type:"warning",size:"large"},on:{click:function(e){t.shareSubmission(!1)}}},[t._v("\n        UnShare\n      ")]):s("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.shareSubmission(!0)}}},[t._v("\n        Share\n      ")])],1)]):t._e()],1)},staticRenderFns:[]};var h=s("VU/8")(m,d,!1,function(t){s("FJT2")},"data-v-6b826c09",null);e.default=h.exports},dJ2g:function(t,e){},tEBz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),o=s("BO1k"),r=s.n(o),a=s("woOf"),u=s.n(a),l=s("NYxO"),c=s("8Q2T"),m=s("FN8c"),d=s("oAV5"),h=s("2hfY"),f={name:"submissionList",components:{Pagination:s("26Oo").a},data:function(){var t=this;return{formFilter:{myself:!1,result:"",username:""},columns:[{title:"When",align:"center",render:function(t,e){return t("span",h.a.utcToLocal(e.row.create_time))}},{title:"ID",align:"center",render:function(e,s){return s.row.show_link?e("span",{style:{color:"#57a3f3",cursor:"pointer"},on:{click:function(){t.$router.push("/status/"+s.row.id)}}},s.row.id.slice(0,12)):e("span",s.row.id.slice(0,12))}},{title:"Status",align:"center",render:function(t,e){return t("Tag",{props:{color:m.e[e.row.result].color}},m.e[e.row.result].name)}},{title:"Problem",align:"center",render:function(e,s){return e("span",{style:{color:"#57a3f3",cursor:"pointer"},on:{click:function(){t.contestID?t.$router.push({name:"contest-problem-details",params:{problemID:s.row.problem,contestID:t.contestID}}):t.$router.push({name:"problem-details",params:{problemID:s.row.problem}})}}},s.row.problem)}},{title:"Time",align:"center",render:function(t,e){return t("span",d.a.submissionTimeFormat(e.row.statistic_info.time_cost))}},{title:"Memory",align:"center",render:function(t,e){return t("span",d.a.submissionMemoryFormat(e.row.statistic_info.memory_cost))}},{title:"Language",align:"center",key:"language"},{title:"Author",align:"center",render:function(e,s){return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:s.row.username}})}}},s.row.username)}}],loadingTable:!1,submissions:[],total:30,limit:12,page:1,contestID:"",problemID:"",routeName:"",JUDGE_STATUS:"",rejudge_column:!1}},mounted:function(){this.init(),this.JUDGE_STATUS=u()({},m.e),delete this.JUDGE_STATUS[9],delete this.JUDGE_STATUS[2]},methods:{init:function(){this.contestID=this.$route.params.contestID;var t=this.$route.query;this.problemID=t.problemID,this.formFilter.myself="1"===t.myself,this.formFilter.result=t.result||"",this.formFilter.username=t.username||"",this.page=parseInt(t.page)||1,this.page<1&&(this.page=1),this.routeName=this.$route.name,this.getSubmissions()},buildQuery:function(){return{myself:!0===this.formFilter.myself?"1":"0",result:this.formFilter.result,username:this.formFilter.username,page:this.page}},getSubmissions:function(){var t=this,e=this.buildQuery();e.contest_id=this.contestID,e.problem_id=this.problemID;var s=(this.page-1)*this.limit,n=this.contestID?"getContestSubmissionList":"getSubmissionList";this.loadingTable=!0,c.a[n](s,this.limit,e).then(function(e){var s=e.data.data,n=!0,i=!1,o=void 0;try{for(var a,u=r()(s.results);!(n=(a=u.next()).done);n=!0){a.value.loading=!1}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}t.adjustRejudgeColumn(),t.loadingTable=!1,t.submissions=s.results,t.total=s.total}).catch(function(){t.loadingTable=!1})},changeRoute:function(){var t=d.a.filterEmptyValue(this.buildQuery());t.contestID=this.contestID,t.problemID=this.problemID;var e=t.contestID?"contest-submission-list":"submission-list";this.$router.push({name:e,query:d.a.filterEmptyValue(t)})},goRoute:function(t){this.$router.push(t)},adjustRejudgeColumn:function(){var t=this;if(this.rejudgeColumnVisible&&!this.rejudge_column){var e={title:"Option",fixed:"right",align:"center",width:90,render:function(e,s){return e("Button",{props:{type:"primary",size:"small",loading:s.row.loading},on:{click:function(){t.handleRejudge(s.row.id,s.index)}}},"Rejudge")}};this.columns.push(e),this.rejudge_column=!0}},handleResultChange:function(t){this.page=1,this.formFilter.result=t,this.changeRoute()},handleQueryChange:function(){this.page=1,this.changeRoute()},handleRejudge:function(t,e){var s=this;this.submissions[e].loading=!0,c.a.submissionRejudge(t).then(function(t){s.submissions[e].loading=!1,s.$success("Succeeded"),s.getSubmissions()},function(){s.submissions[e].loading=!1})}},computed:i()({},Object(l.mapGetters)(["isAuthenticated","user"]),{title:function(){return this.contestID?this.problemID?"Problem Submissions":"Submissions":"Status"},status:function(){return""===this.formFilter.result?"Status":m.e[this.formFilter.result].name},rejudgeColumnVisible:function(){return!this.contestID&&this.user.admin_type===m.i.SUPER_ADMIN}}),watch:{$route:function(t,e){t!==e&&this.init()},rejudgeColumnVisible:function(){this.adjustRejudgeColumn()},isAuthenticated:function(){this.init()}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-container"},[s("div",{attrs:{id:"main"}},[s("Panel",{attrs:{shadow:""}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{attrs:{slot:"extra"},slot:"extra"},[s("ul",{staticClass:"filter"},[s("li",[s("Dropdown",{on:{"on-click":t.handleResultChange}},[s("span",[t._v(t._s(t.status)+"\n                "),s("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),s("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[s("Dropdown-item",{attrs:{name:""}},[t._v("All")]),t._v(" "),t._l(Object.keys(t.JUDGE_STATUS),function(e){return s("Dropdown-item",{key:e,attrs:{name:e}},[t._v("\n                  "+t._s(t.JUDGE_STATUS[e].name)+"\n                ")])})],2)],1)],1),t._v(" "),s("li",[s("i-switch",{attrs:{size:"large"},on:{"on-change":t.handleQueryChange},model:{value:t.formFilter.myself,callback:function(e){t.$set(t.formFilter,"myself",e)},expression:"formFilter.myself"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("Mine")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("All")])])],1),t._v(" "),s("li",[s("Input",{attrs:{placeholder:"Search Author"},on:{"on-enter":t.handleQueryChange},model:{value:t.formFilter.username,callback:function(e){t.$set(t.formFilter,"username",e)},expression:"formFilter.username"}})],1),t._v(" "),s("li",[s("Button",{attrs:{type:"info",icon:"refresh"},on:{click:t.getSubmissions}},[t._v(t._s(t.$t("m.Refresh")))])],1)])]),t._v(" "),s("Table",{attrs:{stripe:"","disabled-hover":!0,columns:t.columns,data:t.submissions,loading:t.loadingTable}}),t._v(" "),s("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page},on:{"on-change":t.changeRoute,"update:current":function(e){t.page=e}}})],1)],1)])},staticRenderFns:[]};var p=s("VU/8")(f,g,!1,function(t){s("8AAi")},"data-v-564b260b",null);e.default=p.exports}});