// import { InputRef, Table } from "antd";
import { Result, Table } from "antd";
// import { FilterConfirmProps } from "antd/es/table/interface";
import moment from "moment";
import React from "react";
export interface DynamicTablesProps {
  dataSource: any[];
  loading: boolean;
  withExport?: boolean;
  exportFileName?: string;
  withSort?: boolean;
  withFilter?: boolean;
  style: React.CSSProperties;
  className: string;
  emptyElement?: React.ReactNode;
  size?: "small" | "middle" | "large";
  bordered?: boolean;
  showHeader?: boolean;
  sticky?: boolean;
}

const DynamicTables = ({
  dataSource = [],
  loading,
  exportFileName = "export",
  withExport = true,
  withSort = true,
  withFilter = true,
  className,
  style,
  emptyElement,
  size = "middle",
  bordered = false,
  showHeader = true,
  sticky = false,
}: DynamicTablesProps) => {
  if (dataSource.length === 0) {
    if (emptyElement) {
      return emptyElement;
    }
    return (
      <div style={style} className={className}>
        <Result status="404" title="No Data Found" />
      </div>
    );
  }

  const dataWithLongestKey = dataSource.reduce((acc, curr) => {
    return Object.keys(acc).length > Object.keys(curr).length ? acc : curr;
  });
  const data = dataWithLongestKey ? dataWithLongestKey : {};

  return (
    <div style={style} className={className}>
      <Table
        size={size}
        bordered={bordered}
        showHeader={showHeader}
        sticky={sticky}
        dataSource={dataSource}
        loading={loading}
        scroll={{
          x: 800,
        }}
        pagination={
          dataSource.length > 10
            ? {
                pageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
              }
            : false
        }
        rowKey={(record) => record.id}
      >
        {Object.keys(data ? data : []).map((val) => {
          return (
            <Table.Column
              title={val}
              dataIndex={val}
              key={val}
              sorter={
                withSort
                  ? (a, b) => {
                      if (typeof a[val] === "string") {
                        return a[val].localeCompare(b[val]);
                      } else if (typeof a[val] === "number") {
                        return a[val] - b[val];
                      } else if (typeof a[val] === "boolean") {
                        return a[val] === b[val] ? 0 : a[val] ? 1 : -1;
                      } else if (typeof a[val] === "object") {
                        return moment(a[val]).unix() - moment(b[val]).unix();
                      }
                      return 0;
                    }
                  : false
              }
              render={(text) => (
                <span
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              )}
            />
          );
        })}
      </Table>
    </div>
  );
};

export default DynamicTables;
