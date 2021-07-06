import { createContext } from "react";
import { action, computed, observable } from "mobx";
import { getBlocks, getCategories, getMinutes } from "../modules/axios";

interface IMinuteProp {
  id: number;
  time: number;
}
interface ICoursesInfo {
  categories: Array<string>;
  minutes: Array<IMinuteProp>;
  blocks: Array<string>;
}
export class CoursesStore {
  @observable
  private coursesInfo: ICoursesInfo = {
    categories: [],
    minutes: [],
    blocks: [],
  };

  @action
  public async initCourses(): Promise<[boolean, boolean]> {
    try {
      const _temp: ICoursesInfo = {
        categories: [],
        minutes: [],
        blocks: [],
      };

      const resData = await Promise.allSettled([
        getCategories(),
        getMinutes(),
        getBlocks(),
      ]);
      resData.forEach((res: PromiseSettledResult<any>, index) => {
        switch (index) {
          case 0:
            _temp.categories =
              res.status === "fulfilled"
                ? //incorrect order from server
                  res?.value?.data?.categories?.map((el: any, i: number) =>
                    i === 1
                      ? res?.value?.data?.categories[2]
                      : i === 2
                      ? res?.value?.data?.categories[1]
                      : el
                  )
                : null;
            break;
          case 1:
            _temp.minutes =
              res.status === "fulfilled" ? res?.value?.data?.minutes : null;

            break;
          case 2:
            _temp.blocks =
              res.status === "fulfilled" ? res?.value?.data?.blocks : null;

            break;
          default:
            break;
        }
      });
      this.coursesInfo = _temp;

      // Promise<[success, error]>
      return Promise.resolve([true, false]);
    } catch (e) {
      return Promise.resolve([false, true]);
    }
  }

  @action
  public async clearAll() {
    this.coursesInfo = {
      categories: [],
      minutes: [],
      blocks: [],
    };
  }

  @computed
  public get coursesData() {
    return this.coursesInfo;
  }
}

const coursesStore = new CoursesStore();

export const coursesStoreContext = createContext(coursesStore);
export default coursesStore;
