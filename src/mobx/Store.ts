import { configure } from "mobx";
import {CoursesStore} from "./coursesStore";
import coursesStore from "./coursesStore";

configure({
  disableErrorBoundaries: true,
});

const StoreMobx = {
  coursesStore
};

export interface IStoreMobx {
  coursesStore: CoursesStore
}

export default StoreMobx;
