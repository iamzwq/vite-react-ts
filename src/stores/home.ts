import { makeAutoObservable } from "mobx";

class HomeStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}

export default HomeStore;
