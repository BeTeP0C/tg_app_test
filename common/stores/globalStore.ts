import { action, makeObservable, observable } from "mobx";
import RootStore from "./rootStore";

class GlobalStore {
  rootStore: RootStore

  userName = "";
  platform = "";

  constructor (rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this, {
      userName: observable,
      platform: observable,
      setUserName: action,
      setPlatform: action
    })
  }

  setUserName(value: string) {
    this.userName = value;
  }

  setPlatform(value: string) {
    this.platform = value;
  }
}

export default GlobalStore
