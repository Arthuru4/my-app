import React from "react";
import './index.scss'
interface IProps extends React.HTMLAttributes<HTMLElement> {}

const LayoutComponent = (props: IProps) => {
  return (
    <div className="App">
      <div className={"sider"}/>
      {props.children}
    </div>
  );
};

export default LayoutComponent;
