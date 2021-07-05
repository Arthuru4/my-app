import { configure } from "mobx";
import layoutStore, {LayoutStore} from "./layoutStore";

configure({
  disableErrorBoundaries: true,
});

const StoreMobx = {
  layoutStore
};

export interface IStoreMobx {
  layoutStore: LayoutStore
}

export default StoreMobx;
