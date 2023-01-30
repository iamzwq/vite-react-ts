import { createContext, useContext } from "react";
import HomeStore from "./home";

class RootStore {
  homeStore: HomeStore;

  constructor() {
    this.homeStore = new HomeStore();
  }
}

const rootStore = new RootStore();

const StoreContext = createContext(rootStore);

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
