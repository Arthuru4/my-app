import Courses from "./../pages/coursesPage";
import NoMatchPage from "../pages/noMatchPage";
import TodosPage from "../pages/todosPage";
import PeoplesPage from "../pages/peoplesPage";

export const CoursesRoute = {
  component: Courses,
  exact: true,
  path: "/",
};
export const TodosRoute = {
  component: TodosPage,
  exact: true,
  path: "/todos",
};
export const PeoplesRoute = {
  component: PeoplesPage,
  exact: true,
  path: "/peoples",
};

export const NoMatchRoute = {
  component: NoMatchPage,
};
