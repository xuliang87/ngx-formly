webpackJsonp([19],{"3PME":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},UOOD:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> OnDestroy <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Subject <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/Subject\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> takeUntil <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/operators/takeUntil\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> startWith <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/operators/startWith\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> tap <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/operators/tap\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token keyword" >implements</span> <span class="token class-name" >OnDestroy</span> <span class="token punctuation" >{</span>\n  onDestroy$ <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >Subject</span><span class="token operator" >&lt;</span><span class="token keyword" >void</span><span class="token operator" >></span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span> sport<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'sport\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Sport\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Soccer\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Basketball\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        valueProp<span class="token punctuation" >:</span> <span class="token string" >\'id\'</span><span class="token punctuation" >,</span>\n        labelProp<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'team\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Team\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        valueProp<span class="token punctuation" >:</span> <span class="token string" >\'id\'</span><span class="token punctuation" >,</span>\n        labelProp<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      lifecycle<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        onInit<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>form<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >const</span> teams <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Bayern Munich\'</span><span class="token punctuation" >,</span> sportId<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Real Madrid\'</span><span class="token punctuation" >,</span> sportId<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Cleveland\'</span><span class="token punctuation" >,</span> sportId<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Miami\'</span><span class="token punctuation" >,</span> sportId<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n          form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'sport\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span>valueChanges<span class="token punctuation" >.</span><span class="token function" >pipe</span><span class="token punctuation" >(</span>\n            <span class="token function" >takeUntil</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onDestroy$<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n            <span class="token function" >startWith</span><span class="token punctuation" >(</span>form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'sport\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n            <span class="token function" >tap</span><span class="token punctuation" >(</span>sportId <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n              field<span class="token punctuation" >.</span>formControl<span class="token punctuation" >.</span><span class="token function" >setValue</span><span class="token punctuation" >(</span><span class="token string" >\'\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n              field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>options <span class="token operator" >=</span> teams<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>team <span class="token operator" >=</span><span class="token operator" >></span> team<span class="token punctuation" >.</span>sportId <span class="token operator" >===</span> sportId<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >subscribe</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'player\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Player\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        valueProp<span class="token punctuation" >:</span> <span class="token string" >\'id\'</span><span class="token punctuation" >,</span>\n        labelProp<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      lifecycle<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        onInit<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>form<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >const</span> players <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Bayern Munich (Player 1)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Bayern Munich (Player 2)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Real Madrid (Player 1)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Real Madrid (Player 2)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'5\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Cleveland (Player 1)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'6\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Cleveland (Player 2)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'7\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Miami (Player 1)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'8\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Miami (Player 2)\'</span><span class="token punctuation" >,</span> teamId<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n          form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'team\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span>valueChanges<span class="token punctuation" >.</span><span class="token function" >pipe</span><span class="token punctuation" >(</span>\n            <span class="token function" >takeUntil</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onDestroy$<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n            <span class="token function" >startWith</span><span class="token punctuation" >(</span>form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'team\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n            <span class="token function" >tap</span><span class="token punctuation" >(</span>sportId <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n              field<span class="token punctuation" >.</span>formControl<span class="token punctuation" >.</span><span class="token function" >setValue</span><span class="token punctuation" >(</span><span class="token string" >\'\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n              field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>options <span class="token operator" >=</span> players<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>team <span class="token operator" >=</span><span class="token operator" >></span> team<span class="token punctuation" >.</span>teamId <span class="token operator" >===</span> sportId<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >subscribe</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >ngOnDestroy</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >:</span> <span class="token keyword" >void</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>onDestroy$<span class="token punctuation" >.</span><span class="token function" >next</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>onDestroy$<span class="token punctuation" >.</span><span class="token function" >complete</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},joJx:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("6Xbx"),p=a("/oeL"),o=a("BkNc"),c=a("Xa16"),e=a("qbdv"),u=a("bm2B"),l=a("JPbF"),i=a("sAA7"),k=a("TO51"),r=a("5O0w"),m=a("fNvg"),d=a("nihM"),f=function(){function n(){var n=this;this.onDestroy$=new k.a,this.form=new u.d({}),this.model={sport:"1"},this.options={},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},lifecycle:{onInit:function(s,a){var t=[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}];s.get("sport").valueChanges.pipe(Object(r.a)(n.onDestroy$),Object(m.a)(s.get("sport").value),Object(d.a)(function(n){a.formControl.setValue(""),a.templateOptions.options=t.filter(function(s){return s.sportId===n})})).subscribe()}}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},lifecycle:{onInit:function(s,a){var t=[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}];s.get("team").valueChanges.pipe(Object(r.a)(n.onDestroy$),Object(m.a)(s.get("team").value),Object(d.a)(function(n){a.formControl.setValue(""),a.templateOptions.options=t.filter(function(s){return s.teamId===n})})).subscribe()}}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n.prototype.ngOnDestroy=function(){this.onDestroy$.next(),this.onDestroy$.complete()},n=t.b([Object(p.o)({selector:"formly-app-example",template:a("3PME")})],n)}(),g=function(){function n(){}return n=t.b([Object(p.M)({imports:[e.b,u.h,i.a,l.e.forRoot()],declarations:[f]})],n)}();a.d(s,"ConfigModule",function(){return y});var y=function(){function n(){}return n=t.b([Object(p.M)({imports:[c.b,g,o.g.forChild([{path:"",component:c.a,data:{examples:[{title:"Cascaded Select",description:"",component:f,files:[{file:"app.component.html",content:a("oFhS")},{file:"app.component.ts",content:a("UOOD")},{file:"app.module.ts",content:a("uLDC")}]}]}}])]})],n)}()},oFhS:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},uLDC:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'}});