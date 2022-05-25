import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Sort,
  Search,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesGrid, employeesData } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        width="auto"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
