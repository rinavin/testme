/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Http} from '@angular/http';
import {MagicBridge, TaskDescription} from "@magic/engine";
import {UIBridge, GuiCommand} from "@magic/gui";


@Injectable()
export class MagicEngine {
  //magic = window['magic1'];
  magic = MagicBridge;
  isStub  = false;
  //TODO - unregister
  refreshDom: Subject<GuiCommand> = new Subject();
  UIBridge: UIBridge = UIBridge.getInstance();

  startMagic(httpService: Http) {
    this.magic.StartMagic(httpService, this.UIBridge);
    // if (!this.isStub) {
    //
    //   this.magic.start(data => {
    //     let list: GuiCommand[];
    //     let obj = JSON.parse(data);
    //     list = obj as GuiCommand[];
    //     for (let command in list) {
    //       this.refreshDom.next(list[command]);
    //     }
    //   });
    // }
  }

  getTaskId(parentId, subformName): TaskDescription {
    // if (this.isStub)
    //   return "1";
    // else
      return this.magic.getTaskId(parentId, subformName);
  }

  insertEvent(taskId, eventName, controlIdx, lineidx) {
    if (!this.isStub)
      this.magic.insertEvent(taskId, eventName, controlIdx, lineidx);

  }

  registerGetValueCallback(taskId, cb) {
    if (!this.isStub)
      this.magic.registerGetValueCallback(taskId, cb);
  }

  registerShowMessageBox(cb) {
    if (!this.isStub)
      this.magic.registerShowMessageBox(cb);
  }

  registerOpenFormCallback(cb) {
    if (!this.isStub) {
      try {
        this.magic.registerOpenFormCallback(cb);
      }
      catch (e) {
        console.log('magic engine not found');
        console.log('moving to stub mode');
        this.isStub = true;

      }
    }

  }
  saveData(data:string)  {
    //this.magic.saveData(data);
  }

}
