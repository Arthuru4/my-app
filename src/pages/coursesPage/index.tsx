import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import { observer } from "mobx-react";
import "./index.scss";
import coursesStore from "../../mobx/coursesStore";
import cycleImg from "./../../assets/cycle.jpg";
import bricksImg from "./../../assets/bricks.jpg";
import sofaImg from "./../../assets/sofa.jpg";
import weightsImg from "./../../assets/weights.jpg";

const CoursesPage = observer(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [tab, setTab] = useState<string>(
    coursesStore.coursesData.categories[0]
  );
  let coursesData = coursesStore.coursesData;
  const images = [cycleImg, bricksImg, sofaImg, weightsImg];

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [success, error] = await coursesStore?.initCourses();
      if (success) {
      } else if (error) {
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    setTab(coursesStore.coursesData.categories[0]);
  }, [coursesStore.coursesData]);

  const getBlock = (el: string, index: number) => {
    return (
      <div
        className={"tab-content__block"}
        style={{
          background: `url(${
            images[Math.floor(Math.random() * 4)]
          }) no-repeat center / cover`,
        }}
        key={"block" + index}
      >
        <div className={"flex-space-between  full-width"}>
          <div className={"title"}>{el}</div>
          <div className={"time"}>
            {coursesStore?.coursesData?.minutes
              ? coursesStore.coursesData.minutes[index].time + " min"
              : ""}
          </div>
        </div>
        <div className={"lessons"}>24 lessons</div>

        <div className={"play-button-wrapper"}>
          {" "}
          <div className={"play-button"} />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className={`content ${isLoading ? "opacity" : ""}`}>
        <div className={"flex-space-between full-width wrap"}>
          <div className={"top-title"}>Courses</div>
          <div className={"tabs"}>
            {coursesData.categories.map((el, i) => (
              <span
                onClick={() => setTab(el)}
                className={`courses-tab ${tab === el ? "active" : ""}`}
                key={"tab" + i}
              >
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className={"tab-content"}>
          {coursesData.blocks.map((el, i) => getBlock(el, i))}
        </div>
      </div>
    </Layout>
  );
});

export default CoursesPage;
