import React from 'react';
import ReactTable from 'react-table';
export declare type StyledTableProps = {
  withRowBorder?: boolean;
  isSelectTable?: boolean;
  withOutsideBorder?: boolean;
  cellAlignment?: 'top' | 'center' | 'bottom';
};
export declare const StyledTable: import('@emotion/styled-base').StyledComponent<
  Partial<import('react-table').TableProps<unknown, unknown>> &
    React.ClassAttributes<ReactTable<unknown>>,
  Pick<
    Partial<import('react-table').TableProps<unknown, unknown>> &
      React.ClassAttributes<ReactTable<unknown>> &
      StyledTableProps,
    | 'expanded'
    | 'children'
    | 'data'
    | 'style'
    | 'className'
    | 'onChange'
    | 'columns'
    | 'page'
    | 'loading'
    | 'manual'
    | 'column'
    | 'resolveData'
    | 'showPagination'
    | 'showPaginationTop'
    | 'showPaginationBottom'
    | 'multiSort'
    | 'showPageSizeOptions'
    | 'pageSizeOptions'
    | 'defaultPageSize'
    | 'minRows'
    | 'showPageJump'
    | 'sortable'
    | 'collapseOnSortingChange'
    | 'collapseOnPageChange'
    | 'collapseOnDataChange'
    | 'freezeWhenExpanded'
    | 'defaultSorting'
    | 'showFilters'
    | 'defaultFiltering'
    | 'defaultFilterMethod'
    | 'defaultSortMethod'
    | 'resizable'
    | 'filterable'
    | 'defaultResizing'
    | 'defaultSortDesc'
    | 'defaultSorted'
    | 'defaultFiltered'
    | 'defaultResized'
    | 'defaultExpanded'
    | 'expanderDefaults'
    | 'pivotDefaults'
    | 'PadRowComponent'
    | 'onFetchData'
    | 'previousText'
    | 'nextText'
    | 'loadingText'
    | 'noDataText'
    | 'pageText'
    | 'ofText'
    | 'rowsText'
    | 'getProps'
    | 'getTableProps'
    | 'getTheadGroupProps'
    | 'getTheadGroupTrProps'
    | 'getTheadGroupThProps'
    | 'getTheadProps'
    | 'getTheadTrProps'
    | 'getTheadThProps'
    | 'getTheadFilterProps'
    | 'getTheadFilterTrProps'
    | 'getTheadFilterThProps'
    | 'getTbodyProps'
    | 'getTrGroupProps'
    | 'getTrProps'
    | 'getTdProps'
    | 'getTfootProps'
    | 'getTfootTrProps'
    | 'getTfootTdProps'
    | 'getPaginationProps'
    | 'getLoadingProps'
    | 'getNoDataProps'
    | 'getResizerProps'
    | 'onPageChange'
    | 'onPageSizeChange'
    | 'onSortedChange'
    | 'onFilteredChange'
    | 'onExpandedChange'
    | 'onResizedChange'
    | 'pivotBy'
    | 'pivotColumnWidth'
    | 'pivotValKey'
    | 'pivotIDKey'
    | 'subRowsKey'
    | 'aggregatedKey'
    | 'nestingLevelKey'
    | 'originalKey'
    | 'indexKey'
    | 'groupedByPivotKey'
    | 'expandedRows'
    | 'onExpandRow'
    | 'pageSize'
    | 'pages'
    | 'sorting'
    | 'sorted'
    | 'filtered'
    | 'resized'
    | 'SubComponent'
    | 'TableComponent'
    | 'TheadComponent'
    | 'TbodyComponent'
    | 'TrGroupComponent'
    | 'TrComponent'
    | 'ThComponent'
    | 'TdComponent'
    | 'TfootComponent'
    | 'ExpanderComponent'
    | 'AggregatedComponent'
    | 'PivotValueComponent'
    | 'PivotComponent'
    | 'FilterComponent'
    | 'PaginationComponent'
    | 'PreviousComponent'
    | 'NextComponent'
    | 'LoadingComponent'
    | 'NoDataComponent'
    | 'ResizerComponent'
    | 'withRowBorder'
    | 'isSelectTable'
    | 'withOutsideBorder'
    | 'cellAlignment'
  >,
  any
>;
