import Courses from "./../pages/coursesPage";
import NoMatchPage from "../pages/noMatchPage";

export const CoursesRoute = {
  component: Courses,
  exact: true,
  path: "/",
};

export const NoMatchRoute = {
  component: NoMatchPage,
};
