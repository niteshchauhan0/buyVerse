import React from 'react';  // <-- Add this line
import { useAppSelector } from "../../../ReduxToolkit/Store";
import HomeCategoryTable from "./HomeCategoryTable";

function ElectronicsTable() {
  const { homePage } = useAppSelector((store) => store);

  return (
    <>
      <HomeCategoryTable categories={homePage.homePageData?.electricCategories} />
    </>
  );
}

export default ElectronicsTable;
