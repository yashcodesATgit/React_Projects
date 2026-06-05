import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="pb-20 pt-6 px-20 flex gap-15 items-center h-[90vh]">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
