"use strict";(self.webpackChunkHks_technical=self.webpackChunkHks_technical||[]).push([[322],{6322:($n,ce,l)=>{l.r(ce),l.d(ce,{LoginModule:()=>qn});var V=l(9808),o=l(4893),Mt=l(2076),bt=l(8306),Dt=l(4742),Et=l(8421),Ot=l(3269),he=l(5403),Ft=l(3268),wt=l(1810),St=l(4004);let fe=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends fe{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),xt={provide:h,useExisting:(0,o.Gpc)(()=>E),multi:!0},Pt=new o.OlP("CompositionEventMode");let E=(()=>{class n extends fe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Bt(){const n=(0,V.q)()?(0,V.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Pt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([xt]),o.qOj]}),n})();function f(n){return null==n||0===n.length}function ge(n){return null!=n&&"number"==typeof n.length}const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators"),Tt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class O{static min(t){return function me(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function _e(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function ye(n){return f(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function ve(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ce(n){return f(n.value)||Tt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ve(n){return t=>f(t.value)||!ge(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Ae(n){return t=>ge(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Me(n){if(!n)return F;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(f(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return we(t)}static composeAsync(t){return Ne(t)}}function F(n){return null}function be(n){return null!=n}function De(n){const t=(0,o.QGY)(n)?(0,Mt.D)(n):n;return(0,o.CqO)(t),t}function Ee(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Oe(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function kt(n){return!n.validate}(t)?t:e=>t.validate(e))}function we(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return Ee(Oe(e,t))}}function H(n){return null!=n?we(Fe(n)):null}function Ne(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return function Nt(...n){const t=(0,Ot.jO)(n),{args:e,keys:r}=(0,Dt.D)(n),i=new bt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let y=a,C=a;for(let U=0;U<a;U++){let de=!1;(0,Et.Xf)(e[U]).subscribe((0,he.x)(s,Yn=>{de||(de=!0,C--),c[U]=Yn},()=>y--,void 0,()=>{(!y||!de)&&(C||s.next(r?(0,wt.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Ft.Z)(t)):i}(Oe(e,t).map(De)).pipe((0,St.U)(Ee))}}function j(n){return null!=n?Ne(Fe(n)):null}function Se(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ge(n){return n._rawValidators}function xe(n){return n._rawAsyncValidators}function L(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function Be(n,t){const e=L(t);return L(n).forEach(i=>{w(e,i)||e.push(i)}),e}function Pe(n,t){return L(t).filter(e=>!w(n,e))}class Te{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class g extends Te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class d extends Te{get formDirective(){return null}get path(){return null}}class ke{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let Ie=(()=>{class n extends ke{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Re=(()=>{class n extends ke{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function A(n,t){$(n,t),t.valueAccessor.writeValue(n.value),function Yt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&He(n,t)})}(n,t),function zt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function $t(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&He(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function qt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function G(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),B(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function x(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function $(n,t){const e=Ge(n);null!==t.validator?n.setValidators(Se(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=xe(n);null!==t.asyncValidator?n.setAsyncValidators(Se(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();x(t._rawValidators,i),x(t._rawAsyncValidators,i)}function B(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ge(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=xe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return x(t._rawValidators,r),x(t._rawAsyncValidators,r),e}function He(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Z(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const M="VALID",P="INVALID",v="PENDING",b="DISABLED";function Q(n){return(T(n)?n.validators:n)||null}function Ye(n){return Array.isArray(n)?H(n):n||null}function X(n,t){return(T(t)?t.asyncValidators:n)||null}function $e(n){return Array.isArray(n)?j(n):n||null}function T(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const K=n=>n instanceof te,k=n=>n instanceof I,ze=n=>n instanceof Qe;function We(n){return K(n)?n.value:n.getRawValue()}function Ze(n,t){const e=k(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function Je(n,t){k(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class ee{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Ye(this._rawValidators),this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===P}get pending(){return this.status==v}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Ye(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=$e(t)}addValidators(t){this.setValidators(Be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Pe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Pe(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=De(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Qt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=k(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:ze(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(P)?P:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){T(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class te extends ee{constructor(t=null,e,r){super(Q(e),X(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Z(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Z(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class I extends ee{constructor(t,e,r){super(Q(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Je(this,t),Object.keys(t).forEach(r=>{Ze(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=We(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Qe extends ee{constructor(t,e,r){super(Q(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Je(this,t),t.forEach((r,i)=>{Ze(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>We(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const re=new o.OlP("NgModelWithFormControlWarning"),an={provide:d,useExisting:(0,o.Gpc)(()=>R)};let R=(()=>{class n extends d{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(B(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return A(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){G(e.control||null,e,!1),Z(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function qe(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(G(r||null,e),K(i)&&(A(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function je(n,t){$(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Wt(n,t){return B(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$(this.form,this),this._oldForm&&B(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([an]),o.qOj,o.TTD]}),n})();const dn={provide:g,useExisting:(0,o.Gpc)(()=>se)};let se=(()=>{class n extends g{constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function W(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===E?e=s:function Jt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function z(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function S(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(d,13),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(re,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([dn]),o.qOj,o.TTD]}),n})(),En=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[ot]]}),n})(),Ct=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:re,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[En]}),n})(),Fn=(()=>{class n{group(e,r=null){const i=this._reduceControls(e);let c,s=null,a=null;return null!=r&&(function On(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(r)?(s=null!=r.validators?r.validators:null,a=null!=r.asyncValidators?r.asyncValidators:null,c=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,a=null!=r.asyncValidator?r.asyncValidator:null)),new I(i,{asyncValidators:a,updateOn:c,validators:s})}control(e,r,i){return new te(e,r,i)}array(e,r,i){const s=e.map(a=>this._createControl(a));return new Qe(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return K(e)||k(e)||ze(e)?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:Ct}),n})();const Vt_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\xc0-\xff\-0-9]+\.)+[a-zA-Z\xc0-\xff]{2,}))$/,Vt_password=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[!@#$%^&*]){1,})(?!.*\s).{8,}$/;var wn=l(1135),Nn=l(4482),Gn=l(2340),Bn=l(520);let Pn=(()=>{class n{constructor(e){this.http=e,this.url=Gn.N.api_base_url}login(e){return this.http.post(this.url+"login.php",e)}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(Bn.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var At=l(8753),Tn=l(7556),kn=l(2198);function In(n,t){1&n&&(o.ynx(0),o._uU(1,"Email is required!"),o.BQk())}function Rn(n,t){1&n&&(o.ynx(0),o._uU(1,"Enter valid Email!"),o.BQk())}function Un(n,t){1&n&&(o.ynx(0),o._uU(1,"Password is required!"),o.BQk())}function Hn(n,t){1&n&&(o.ynx(0),o._uU(1,"Enter a strong password!"),o.BQk())}function jn(n,t){1&n&&o._UZ(0,"div",11)}const Ln=[{path:"",component:(()=>{class n{constructor(e,r,i,s,a){this.api=e,this.fb=r,this.router=i,this.authService=s,this.toaster=a,this.alive=!0,this.isFormSubmitted=!1,this.loading$=new wn.X(!1),this.form=this.fb.group({email:["",[O.required,O.pattern(Vt_email)]],password:["",[O.required,O.pattern(Vt_password)]]}),console.log(this.form)}ngOnInit(){}login(){this.isFormSubmitted=!0,this.form.valid&&(this.loading$.next(!0),this.api.login(this.form.value).pipe(function Sn(n,t=!1){return(0,Nn.e)((e,r)=>{let i=0;e.subscribe((0,he.x)(r,s=>{const a=n(s,i++);(a||t)&&r.next(s),!a&&r.complete()}))})}(e=>this.alive)).subscribe(e=>{console.log(e),this.loading$.next(!1),(null==e?void 0:e.status)?(this.authService.setLoginData(),this.toaster.success(e.message),this.router.navigate(["dashboard"])):this.toaster.error(e.message)},e=>{console.log(e),this.loading$.next(!1),this.toaster.error("Something went wrong!")}))}ngOnDestroy(){this.alive=!1}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(Pn),o.Y36(Fn),o.Y36(At.F0),o.Y36(Tn.e),o.Y36(kn.kl))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:34,vars:8,consts:[[1,"login__form"],["src","assets/images/logo.png"],[3,"formGroup"],[1,"form__group"],[1,"text-danger"],["type","text","formControlName","email","name","email","autocomplete",""],[1,"text-danger","text-start"],[4,"ngIf"],["type","password","formControlName","password","name","password","autocomplete",""],["type","button",1,"btn__primary","btn__login",3,"click"],["class","spinner-border spinner-border-sm","role","status",4,"ngIf"],["role","status",1,"spinner-border","spinner-border-sm"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0),o._UZ(1,"img",1),o.TgZ(2,"h2"),o._uU(3,"Welcome back"),o.qZA(),o.TgZ(4,"p"),o._uU(5,"Sign in to continue"),o.qZA(),o.TgZ(6,"form",2)(7,"div",3)(8,"label")(9,"span"),o._uU(10,"Email"),o.qZA(),o.TgZ(11,"i",4),o._uU(12,"*"),o.qZA()(),o.TgZ(13,"div"),o._UZ(14,"input",5),o.TgZ(15,"div",6),o.YNc(16,In,2,0,"ng-container",7),o.YNc(17,Rn,2,0,"ng-container",7),o.qZA()()(),o.TgZ(18,"div",3)(19,"label")(20,"span"),o._uU(21,"Password"),o.qZA(),o.TgZ(22,"i",4),o._uU(23,"*"),o.qZA()(),o.TgZ(24,"div"),o._UZ(25,"input",8),o.TgZ(26,"div",6),o.YNc(27,Un,2,0,"ng-container",7),o.YNc(28,Hn,2,0,"ng-container",7),o.qZA()()(),o.TgZ(29,"button",9),o.NdJ("click",function(){return r.login()}),o.TgZ(30,"span"),o._uU(31,"Login"),o.qZA(),o.YNc(32,jn,1,0,"div",10),o.ALo(33,"async"),o.qZA()()()),2&e&&(o.xp6(6),o.Q6J("formGroup",r.form),o.xp6(10),o.Q6J("ngIf",r.isFormSubmitted&&(null==r.form.controls.email||null==r.form.controls.email.errors?null:r.form.controls.email.errors.required)),o.xp6(1),o.Q6J("ngIf",r.isFormSubmitted&&(null==r.form.controls.email||null==r.form.controls.email.errors?null:r.form.controls.email.errors.pattern)),o.xp6(10),o.Q6J("ngIf",r.isFormSubmitted&&(null==r.form.controls.password||null==r.form.controls.password.errors?null:r.form.controls.password.errors.required)),o.xp6(1),o.Q6J("ngIf",r.isFormSubmitted&&(null==r.form.controls.password||null==r.form.controls.password.errors?null:r.form.controls.password.errors.pattern)),o.xp6(4),o.Q6J("ngIf",o.lcZ(33,6,r.loading$)))},directives:[nt,Re,R,E,Ie,se,V.O5],pipes:[V.Ov],styles:["button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:8px;font-size:15px;font-weight:600;line-height:18px;letter-spacing:-.5px;cursor:pointer;gap:0 .6rem;padding:16px 24px;border:none}.btn__primary[_ngcontent-%COMP%]{background-color:#30aaf4;color:#fff}input[_ngcontent-%COMP%]{padding:.5rem;background:#fff;border:1px solid #d9dbe9;border-radius:.5rem}label[_ngcontent-%COMP%]{font-size:13px;line-height:24px}[_nghost-%COMP%]{width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.login__form[_ngcontent-%COMP%]{background-color:#fff;padding:2.5rem;border-radius:12px;text-align:center;box-shadow:#0000001a 0 4px 12px}.login__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-top:2rem}.login__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;align-items:flex-start;margin-bottom:1rem}.login__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-width:300px}.login__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn__login[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let qn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[V.ez,Ct,At.Bz.forChild(Ln)]]}),n})()}}]);