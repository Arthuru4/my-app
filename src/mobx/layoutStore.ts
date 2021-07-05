import { createContext } from "react";
import { action, computed, observable } from "mobx";

export class LayoutStore  {
  @observable
  private layout: any[] = []

  @action
  public async getSomeAction() {

  }

  @action
  public async clearAll() {
    this.layout = [];
  }

  @computed
  public get layoutData() {
    return this.layout;
  }
}

const layoutStore = new LayoutStore();

export const layoutStoreContext = createContext(layoutStore);
export default layoutStore;
