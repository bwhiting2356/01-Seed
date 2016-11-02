/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './error.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './error.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_style';
import * as import12 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import13 from '@angular/core/src/linker/element_ref';
var renderType_ErrorComponent_Host:import0.RenderComponentType = (null as any);
class _View_ErrorComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ErrorComponent_0_4:import3.ErrorComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ErrorComponent_Host0,renderType_ErrorComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-error',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ErrorComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ErrorComponent_0_4 = new import3.ErrorComponent(this.parentInjector.get(import8.ErrorService));
    this._appEl_0.initComponent(this._ErrorComponent_0_4,[],compView_0);
    compView_0.create(this._ErrorComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ErrorComponent) && (0 === requestNodeIndex))) { return this._ErrorComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ErrorComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ErrorComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ErrorComponent_Host === (null as any))) { (renderType_ErrorComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_ErrorComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ErrorComponentNgFactory:import10.ComponentFactory<import3.ErrorComponent> = new import10.ComponentFactory<import3.ErrorComponent>('app-error',viewFactory_ErrorComponent_Host0,import3.ErrorComponent);
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
var renderType_ErrorComponent:import0.RenderComponentType = (null as any);
class _View_ErrorComponent0 extends import1.AppView<import3.ErrorComponent> {
  _el_0:any;
  _NgStyle_0_3:import11.NgStyle;
  _text_1:any;
  _el_2:any;
  _NgStyle_2_3:import11.NgStyle;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _map_0:any;
  /*private*/ _expr_0:any;
  _map_1:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ErrorComponent0,renderType_ErrorComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','backdrop');
    this._NgStyle_0_3 = new import11.NgStyle(this.parentInjector.get(import12.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','modal');
    this.renderer.setElementAttribute(this._el_2,'role','dialog');
    this.renderer.setElementAttribute(this._el_2,'tabindex','-1');
    this._NgStyle_2_3 = new import11.NgStyle(this.parentInjector.get(import12.KeyValueDiffers),new import13.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','modal-dialog');
    this.renderer.setElementAttribute(this._el_4,'role','document');
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','modal-content');
    this._text_7 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','modal-header');
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'button',(null as any));
    this.renderer.setElementAttribute(this._el_10,'aria-label','Close');
    this.renderer.setElementAttribute(this._el_10,'class','close');
    this.renderer.setElementAttribute(this._el_10,'type','button');
    this._el_11 = this.renderer.createElement(this._el_10,'span',(null as any));
    this.renderer.setElementAttribute(this._el_11,'aria-hidden','true');
    this._text_12 = this.renderer.createText(this._el_11,'×',(null as any));
    this._text_13 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_8,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','modal-title');
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_17 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','modal-body');
    this._text_19 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'p',(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'',(null as any));
    this._text_22 = this.renderer.createText(this._el_18,'\n      ',(null as any));
    this._text_23 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','modal-footer');
    this._text_25 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'button',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','btn btn-default');
    this.renderer.setElementAttribute(this._el_26,'type','button');
    this._text_27 = this.renderer.createText(this._el_26,'Close',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_24,'button',(null as any));
    this.renderer.setElementAttribute(this._el_29,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_29,'type','button');
    this._text_30 = this.renderer.createText(this._el_29,'Save changes',(null as any));
    this._text_31 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._text_32 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_4,'\n  ',(null as any));
    this._text_34 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_35 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {display: p0};
    });
    this._expr_0 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {display: p0};
    });
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_26,'click',this.eventHandler(this._handle_click_26_0.bind(this)));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    if (((token === import11.NgStyle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._NgStyle_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0(this.context.display);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    const currVal_1:any = this._map_1(this.context.display);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgStyle_2_3.ngStyle = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgStyle_2_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = import4.interpolate(1,'',((this.context.error == (null as any))? (null as any): this.context.error.title),'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_15,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'',((this.context.error == (null as any))? (null as any): this.context.error.message),'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_21,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onErrorHandled()) !== false);
    return (true && pd_0);
  }
  private _handle_click_26_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onErrorHandled()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ErrorComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ErrorComponent> {
  if ((renderType_ErrorComponent === (null as any))) { (renderType_ErrorComponent = viewUtils.createRenderComponentType('/Users/brendan.whiting/Documents/01 Seed/assets/app/errors/error.component.html',0,import9.ViewEncapsulation.Emulated,styles_ErrorComponent,{})); }
  return new _View_ErrorComponent0(viewUtils,parentInjector,declarationEl);
}