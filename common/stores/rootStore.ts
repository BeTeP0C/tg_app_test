import GlobalStore from "./globalStore"

class RootStore {
  globalStore: GlobalStore
  constructor () {
    this.globalStore = new GlobalStore(this)
  }
}

export default RootStore
