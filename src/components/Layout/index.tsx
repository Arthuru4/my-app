import React from "react";
import "./index.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CoursesRoute, PeoplesRoute, TodosRoute } from "../../routes";

interface IProps
  extends React.HTMLAttributes<HTMLElement>,
    RouteComponentProps {}

const LayoutComponent = (props: IProps) => {
  const { children, history, location } = props;

  const item = location.pathname;
  return (
    <div className="app">
      <nav className={"sider"}>
        <i
          onClick={() => history.push(CoursesRoute.path)}
          className={`ri-message-fill ${
            item === CoursesRoute.path ? "active" : ""
          }`}
        />
        <i
          onClick={() => history.push(TodosRoute.path)}
          className={`ri-todo-fill ${item === TodosRoute.path ? "active" : ""}`}
        />
        <i
          onClick={() => history.push(PeoplesRoute.path)}
          className={`ri-team-fill ${
            item === PeoplesRoute.path ? "active" : ""
          }`}
        />
      </nav>
      {children}
    </div>
  );
};

export default withRouter(LayoutComponent);
