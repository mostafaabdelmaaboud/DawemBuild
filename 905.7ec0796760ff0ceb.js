"use strict";(self.webpackChunkDawem=self.webpackChunkDawem||[]).push([[905],{6547:(M,h,a)=>{a.d(h,{F:()=>f});var t=a(529),p=a(4004),l=a(2340),m=a(4650);let f=(()=>{class s{constructor(n){this.http=n}listAssignment(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}RequestAssignment/Get`,{params:e})}getInformation(){return this.http.get(`${l.N.baseUrl}RequestAssignment/GetAssignmentsInformations`).pipe((0,p.U)(n=>n.data))}assignmentGetInfo(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}RequestAssignment/GetInfo`,{params:e}).pipe((0,p.U)(o=>o.data))}rejectAssignment(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.put(`${l.N.baseUrl}RequestAssignment/Reject`,{},{params:e})}createAssignment(n){return this.http.post(`${l.N.baseUrl}RequestAssignment/Create`,n)}updateAssignment(n){return this.http.put(`${l.N.baseUrl}RequestAssignment/Update`,n)}accept(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.put(`${l.N.baseUrl}RequestAssignment/Accept`,{},{params:e})}assignmentGetById(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}RequestAssignment/GetById`,{params:e}).pipe((0,p.U)(o=>o.data))}assignmentTypeDropdown(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}AssignmentType/GetForDropDown`,{params:e})}static#t=this.\u0275fac=function(e){return new(e||s)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},7037:(M,h,a)=>{a.d(h,{M:()=>f});var t=a(529),p=a(4004),l=a(2340),m=a(4650);let f=(()=>{class s{constructor(n){this.http=n}listEmployees(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Employee/Get`,{params:e})}createEmployee(n){return this.http.post(`${l.N.baseUrl}Employee/Create`,n)}updateEmployee(n){return this.http.put(`${l.N.baseUrl}Employee/Update`,n)}deleteEmployee(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.delete(`${l.N.baseUrl}Employee/Delete`,{params:e})}disabledEmployee(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.put(`${l.N.baseUrl}Employee/Disable`,{},{params:e})}getInformation(){return this.http.get(`${l.N.baseUrl}Employee/GetEmployeesInformations`).pipe((0,p.U)(n=>n.data))}GetForDropDownEmployee(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{"ids"===o?i.forEach(O=>{e=e.append(o,O)}):e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Employee/GetForDropDown`,{params:e})}enabledEmployee(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.put(`${l.N.baseUrl}Employee/Enable`,{},{params:e})}getJobTitles(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}JobTitle/GetForDropDown`,{params:e})}getDepartmentForDropDown(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Department/GetForDropDown`,{params:e})}getScheduleForDropDown(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Schedule/GetForDropDown`,{params:e})}employeeGetById(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Employee/GetById`,{params:e}).pipe((0,p.U)(o=>o.data))}employeeGetInfo(n){let e=new t.LE;return n&&Object.entries(n).forEach(([o,i])=>{e=e.set(o,i)}),this.http.get(`${l.N.baseUrl}Employee/GetInfo`,{params:e}).pipe((0,p.U)(o=>o.data))}downloadImage(n){return this.http.get(n,{responseType:"arraybuffer"})}static#t=this.\u0275fac=function(e){return new(e||s)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},9005:(M,h,a)=>{a.d(h,{k:()=>U});var t=a(4650),p=a(6895),l=a(4006),m=a(5412),f=a(666),s=a(1740),b=a(6188),n=a(3327),e=a(7913),o=a(9318),i=a(1948),O=a(1572),E=a(7037),_=a(5439),P=a(6547),v=a(6176);function y(g,D){if(1&g&&(t.TgZ(0,"li",13)(1,"div",14),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"div",16)(4,"span",17),t._uU(5,"name:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"span",17),t._uU(9,"size:"),t.qZA(),t._uU(10),t.qZA()()),2&g){const d=D.$implicit;t.xp6(2),t.Q6J("src",d.imageSrc,t.LSH),t.xp6(4),t.hij(" ",d.fileUpload.name," "),t.xp6(4),t.hij(" ",d.fileUpload.size," ")}}function A(g,D){if(1&g&&(t.TgZ(0,"ul",11),t.YNc(1,y,11,3,"li",12),t.qZA()),2&g){const d=t.oxw();t.xp6(1),t.Q6J("ngForOf",d.AttachmentsFiles)}}function x(g,D){1&g&&(t.TgZ(0,"div",18),t._UZ(1,"mat-spinner"),t.qZA())}let U=(()=>{class g{constructor(d,c,r,C){this.dialogRef=d,this.data=c,this.authService=r,this.fb=C,this.loading=!1,this.assignmentsService=(0,t.f3M)(P.F),this.AttachmentsFiles=[],this.employeesService=(0,t.f3M)(E.M),this.dialogRef.disableClose=!0}ngOnInit(){this.loading=!0,this.id&&this.assignmentsService.assignmentGetInfo({requestId:this.id}).subscribe({next:d=>{this.info=d,this.info?.attachments.length&&this.info?.attachments.forEach(c=>{this.employeesService.downloadImage(c.filePath).subscribe(r=>{const C=new Blob([r]),w=new File([C],c.fileName);this.AttachmentsFiles.push({imageSrc:c.filePath,fileUpload:w,detailsImage:!0})})}),this.info.dateFrom=_(new Date(this.info.dateFrom)).format("MM/DD/YYYY"),this.info.dateFrom=_(new Date(this.info.dateTo)).format("MM/DD/YYYY"),this.loading=!1},error:d=>{this.loading=!1}})}getMoment(d){return _(new Date(d)).format("MM/DD/YYYY")}close(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(c){return new(c||g)(t.Y36(m.so),t.Y36(m.WI),t.Y36(v.e),t.Y36(l.qu))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-dialog-assignement-file"]],inputs:{submitted:"submitted",id:"id"},standalone:!0,features:[t.jDz],decls:43,vars:11,consts:[[1,"container-Dialog"],[1,"header-dialog","d-flex","justify-content-center","align-items-center","p-15","position-relative"],[1,"title-Dialog","m-0"],["type","button",1,"icon-close","iconCloseDialog",3,"click"],[1,"pi","pi-times-circle"],[1,"body-dialog","p-15","f-s-16"],[1,"sectionTwo","mb-3","line-bellow"],[1,"title"],[1,"content-password"],["class","list-unstyled p-0",4,"ngIf"],["class","spinner-dialog d-flex justify-content-center align-items-center loading",4,"ngIf"],[1,"list-unstyled","p-0"],["class","p-fileupload-row",4,"ngFor","ngForOf"],[1,"p-fileupload-row"],[1,"content-image"],["width","50","alt","",3,"src"],[1,"p-fileupload-filename"],[1,"d-block"],[1,"spinner-dialog","d-flex","justify-content-center","align-items-center","loading"]],template:function(c,r){1&c&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h3",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return r.close()}),t._UZ(6,"i",4),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0638\u0641"),t.qZA(),t.TgZ(11,"div",8),t._uU(12),t.qZA()(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15," \u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641"),t.qZA(),t.TgZ(16,"div",8),t._uU(17),t.qZA()(),t.TgZ(18,"div",6)(19,"label",7),t._uU(20,"\u0646\u0648\u0639 \u0627\u0644\u0623\u0633\u062a\u0626\u0630\u0627\u0646"),t.qZA(),t.TgZ(21,"div",8),t._uU(22),t.qZA()(),t.TgZ(23,"div",6)(24,"label",7),t._uU(25,"\u0627\u0644\u0645\u0644\u0641\u0627\u062a"),t.qZA(),t.YNc(26,A,2,1,"ul",9),t.qZA(),t.TgZ(27,"div",6)(28,"label",7),t._uU(29,"\u0627\u0644\u0628\u062f\u0627\u064a\u0629"),t.qZA(),t.TgZ(30,"div",8),t._uU(31),t.qZA()(),t.TgZ(32,"div",6)(33,"label",7),t._uU(34,"\u0627\u0644\u0646\u0647\u0627\u064a\u0629"),t.qZA(),t.TgZ(35,"div",8),t._uU(36),t.qZA()(),t.TgZ(37,"div",6)(38,"label",7),t._uU(39,"\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA(),t.TgZ(40,"div",8),t._uU(41),t.qZA()()(),t.YNc(42,x,2,0,"div",10),t.qZA()),2&c&&(t.xp6(3),t.hij(" ",t.lcZ(4,9,r.data.title)," "),t.xp6(9),t.hij(" ",null!=r.info&&null!=r.info.employee&&r.info.employee.code?null==r.info||null==r.info.employee?null:r.info.employee.code:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(5),t.hij(" ",null!=r.info&&null!=r.info.employee&&r.info.employee.name?null==r.info||null==r.info.employee?null:r.info.employee.name:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(5),t.hij(" ",null!=r.info&&r.info.assignmentTypeName?null==r.info?null:r.info.assignmentTypeName:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(4),t.Q6J("ngIf",r.AttachmentsFiles.length),t.xp6(5),t.hij(" ",null!=r.info&&r.info.dateFrom?null==r.info?null:r.info.dateFrom:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(5),t.hij(" ",null!=r.info&&r.info.dateTo?null==r.info?null:r.info.dateTo:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(5),t.hij(" ",null!=r.info&&r.info.notes?null==r.info?null:r.info.notes:"\u0644\u0627 \u064a\u0648\u062c\u062f"," "),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[p.ez,p.sg,p.O5,l.u5,i.Fk,O.Cq,O.Ou,l.UX,f.kW,o._8,e.Iu,s.j,b.aw,b.X$,n.O],styles:[".footer-dialog[_ngcontent-%COMP%]{padding-right:10px;padding-left:10px}.title-Dialog[_ngcontent-%COMP%]{color:#0d3671;font-size:20px}[_nghost-%COMP%]     .p-inputswitch{width:2.8rem;height:1.46rem}[_nghost-%COMP%]     .p-dropdown{width:100%!important}.content-image[_ngcontent-%COMP%]{width:40%}[_nghost-%COMP%]     .p-calendar{width:100%}.title[_ngcontent-%COMP%]{display:block;font-size:16px;margin-bottom:10px}.body-dialog[_ngcontent-%COMP%]{height:70vh;overflow-y:auto}[_nghost-%COMP%]     .content-pCalendar-default .p-inputtext{border-width:1px 0px 1px 1px;padding-right:0}[_nghost-%COMP%]     .content-pCalendar-default .p-button{background-color:transparent;color:#3085fe!important;border-color:#ced4da!important;border-width:1px 1px 1px 0px!important;padding-left:0!important}.button-action[_ngcontent-%COMP%]{padding:10px 15px;border:0;font-size:16px}.icon-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:gray}.iconCloseDialog[_ngcontent-%COMP%]{background-color:transparent;border:0;align-items:center;display:flex}.p-fileupload-row[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]     .p-fileupload-files{display:none!important}[_nghost-%COMP%]     .p-fileupload-row{justify-content:space-between}[_nghost-%COMP%]     .p-fileupload-buttonbar, [_nghost-%COMP%]     .p-fileupload-content{border:0;padding:0;background-color:#fff}[_nghost-%COMP%]     .p-fileupload-row .p-button{background:#3085FE!important;border:1px solid #3085FE!important}.maximum-size[_ngcontent-%COMP%]{font-size:14px;color:#6c757d;margin-top:7px!important;display:block}[_nghost-%COMP%]     .p-button .p-button-label{flex:initial;font-weight:600}[_nghost-%COMP%]     .p-button .p-button-icon-left{color:#3085fe}[_nghost-%COMP%]     .p-fileupload-choose, [_nghost-%COMP%]     .p-fileupload-choose:hover{background:white!important;font-size:16px;box-shadow:none!important;width:100%;color:#7d8b9e;text-align:center;border:1px solid #CBD5E1;margin:0!important;padding:25px 15px!important;height:initial;border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px;display:flex!important;justify-content:center}[_nghost-%COMP%]     .p-fileupload-row .p-fileupload-filename{width:36%!important;padding:0 10px!important}[_nghost-%COMP%]     .p-fileupload-row>div:last-of-type{width:10%!important;max-width:36%!important}[_nghost-%COMP%]     .p-fileupload-row>div:last-of-type button{width:100%!important}[_nghost-%COMP%]     .p-fileupload-row>div{text-align:center}[_nghost-%COMP%]     .p-fileupload-content .p-progressbar{display:none!important}[_nghost-%COMP%]     .p-fileupload-row{margin-bottom:10px;margin-top:10px}[_nghost-%COMP%]     .p-fileupload-row img{width:100%}[_nghost-%COMP%]     .p-fileupload .p-fileupload-row>div{padding:0}.title[_ngcontent-%COMP%]{color:#7d8b9e;font-size:14px}.line-bellow[_ngcontent-%COMP%]{margin-bottom:10px;border:1px solid rgb(241,245,249);padding:10px;box-shadow:0 3px 13px -3px #0003;border-radius:10px}[_nghost-%COMP%]     p-calendar.ng-dirty.ng-invalid .p-button{border-color:#e24c4c!important}[_nghost-%COMP%]     p-calendar.ng-dirty.ng-invalid>.p-calendar>.p-inputtext{border-color:#e24c4c!important}"]})}return g})()},2727:(M,h,a)=>{a.d(h,{x:()=>o});var t=a(4650),p=a(6895),l=a(4006),m=a(5412),f=a(6188),s=a(1740),b=a(1572),n=a(6176);function e(i,O){1&i&&(t.TgZ(0,"div",15),t._UZ(1,"mat-spinner"),t.qZA())}let o=(()=>{class i{constructor(E,_,u,P){this.dialogRef=E,this.data=_,this.authService=u,this.fb=P,this.submitClicked=new t.vpe,this.list=[],this.dialogCloseForm=this.fb.group({notes:[""]})}request(){this.submitted&&this.submitClicked.emit(this.dialogCloseForm?.value)}close(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(_){return new(_||i)(t.Y36(m.so),t.Y36(m.WI),t.Y36(n.e),t.Y36(l.qu))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-dialog-close"]],inputs:{submitted:"submitted",list:"list"},outputs:{submitClicked:"submitClicked"},standalone:!0,features:[t.jDz],decls:26,vars:22,consts:[[1,"container-Dialog"],[1,"body-dialog","p-15","f-s-16"],[1,"big-icon"],["src","assets/img/2.png","alt",""],[1,"container-desc"],[1,"title"],[1,"pt-2","m-0"],[1,"sectionFive",3,"formGroup"],["for","",1,"label-input","mb-2",3,"innerHTML"],[1,"content-password"],["type","text","pInputText","","formControlName","notes",1,"w-100",3,"placeholder"],[1,"footer-dialog","p-15","d-flex","justify-content-end"],[1,"background-red","w-100","color-white","mr-2","b-r-4","button-action","ml-2","mr-2","f-s-16",3,"click"],[1,"btn-outline-primary","w-100","ml-2","b-r-4","button-action-two","ml-2","mr-2","f-s-16",3,"click"],["class","spinner-dialog d-flex justify-content-center align-items-center loading",4,"ngIf"],[1,"spinner-dialog","d-flex","justify-content-center","align-items-center","loading"]],template:function(_,u){1&_&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"label",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",6),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"div",7),t._UZ(12,"label",8),t.ALo(13,"translate"),t.TgZ(14,"div",9),t._UZ(15,"input",10),t.ALo(16,"translate"),t.qZA()()(),t.TgZ(17,"footer",11)(18,"button",12),t.NdJ("click",function(){return u.request()}),t._uU(19),t.ALo(20,"translate"),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"button",13),t.NdJ("click",function(){return u.close()}),t._uU(23),t.ALo(24,"translate"),t.qZA()()(),t.YNc(25,e,2,0,"div",14)),2&_&&(t.xp6(6),t.hij(" ",t.lcZ(7,8,u.data.title)," "),t.xp6(3),t.hij(" ",t.lcZ(10,10,u.data.message)," "),t.xp6(2),t.Q6J("formGroup",u.dialogCloseForm),t.xp6(1),t.Q6J("innerHTML",t.lcZ(13,12,u.data.titleReasonOfRefuse),t.oJD),t.xp6(3),t.Q6J("placeholder",t.lcZ(16,14,u.data.placeholdeReasonOfRefuse)),t.xp6(4),t.Oqu(u.submitted?t.lcZ(20,16,u.data.buttonSend):t.lcZ(21,18,"dialogs.loading")),t.xp6(4),t.Oqu(t.lcZ(24,20,u.data.titleClose)),t.xp6(2),t.Q6J("ngIf",!u.submitted))},dependencies:[p.ez,p.O5,f.aw,f.X$,s.j,s.o,b.Cq,b.Ou,l.UX,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".footer-dialog[_ngcontent-%COMP%]{padding-right:45px;padding-left:45px;margin:auto}.title[_ngcontent-%COMP%]{display:block;font-size:18px;margin-bottom:0;font-weight:700}.body-dialog[_ngcontent-%COMP%]{max-height:70vh;overflow-y:auto;padding-top:35px}.big-icon[_ngcontent-%COMP%]{text-align:center}.container-desc[_ngcontent-%COMP%]{text-align:center;margin-top:31px;font-family:Cairo}.container-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#7d8b9e}[_nghost-%COMP%]     .content-pCalendar-default .p-inputtext{border-width:1px 0px 1px 1px;padding-right:0}[_nghost-%COMP%]     .content-pCalendar-default .p-button{background-color:transparent;color:#3085fe!important;border-color:#ced4da!important;border-width:1px 1px 1px 0px!important;padding-left:0!important}.button-action[_ngcontent-%COMP%]{padding:10px 15px;border:0;font-size:16px;margin-left:7px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.icon-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:gray}.iconCloseDialog[_ngcontent-%COMP%]{background-color:transparent;border:0;align-items:center;display:flex}.p-fileupload-row[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]     .p-fileupload-files{display:none!important}[_nghost-%COMP%]     .p-fileupload-row{justify-content:space-between}[_nghost-%COMP%]     .p-fileupload-buttonbar, [_nghost-%COMP%]     .p-fileupload-content{border:0;padding:0;background-color:#fff}[_nghost-%COMP%]     .p-fileupload-row .p-button{background:var(--background-orange)!important;border:1px solid var(--background-orange)!important}.maximum-size[_ngcontent-%COMP%]{font-size:14px;color:#6c757d;margin-top:7px!important;display:block}[_nghost-%COMP%]     .p-button .p-button-label{flex:initial;font-weight:600}[_nghost-%COMP%]     .p-button .p-button-icon-left{color:#3085fe}[_nghost-%COMP%]     .p-fileupload-row .p-fileupload-filename{width:36%!important;padding:0 10px!important}[_nghost-%COMP%]     .p-fileupload-row>div:last-of-type{width:10%!important;max-width:36%!important}[_nghost-%COMP%]     .p-fileupload-row>div:last-of-type button{width:100%!important}[_nghost-%COMP%]     .p-fileupload-row>div{text-align:center}[_nghost-%COMP%]     .p-fileupload-content .p-progressbar{display:none!important}[_nghost-%COMP%]     .p-fileupload-row{margin-bottom:10px;margin-top:10px}.sectionFive[_ngcontent-%COMP%]{margin:10px auto auto;padding:0 30px}[_nghost-%COMP%]     .p-fileupload-row img{width:100%}.button-action-two[_ngcontent-%COMP%]{margin-right:7px;background-color:transparent;border:1px solid rgb(48,133,254);color:#3085fe;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}[_nghost-%COMP%]     .p-fileupload .p-fileupload-row>div{padding:0}"]})}return i})()}}]);