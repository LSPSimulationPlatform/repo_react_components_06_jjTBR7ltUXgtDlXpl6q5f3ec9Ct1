import React from 'react';
import { Table as AntTable, Button, Space } from 'antd';
import type{ ColumnsType } from 'antd/es/table';
import  type { TableProps as AntTableProps } from 'antd';

interface TableAction<T> {
  key: string;
  label: string; 
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'; 
  danger?: boolean;
  onClick: (record: T) => void; 
}


interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[]; 
  loading?: boolean; 
  pagination?: boolean | AntTableProps<T>['pagination']; 
  size?: 'small' | 'middle' | 'large'; 
  actions?: TableAction<T>[]; 
  onEdit?: (record: T) => void; 
  onDelete?: (record: T) => void;
  className?: string; 
  style?: React.CSSProperties;
  rowKey?: keyof T | ((record: T) => React.Key); 
}

function Table<T extends object = any>({
  columns,     
  data,  
  loading = false,
  pagination = true, 
  size = 'middle',
  actions,      
  onEdit,         
  onDelete,       
  className,    
  style,    
  rowKey,        
}: TableProps<T>) {
  
  const actionColumn: ColumnsType<T>[number] | null = 
    (onEdit || onDelete || actions) ? {
      title: 'Actions',
      key: 'actions',
      width: 150, 
      fixed: 'right' as const, 
      render: (_, record: T) => (
    
        <Space size="small">
        </Space>
      ),
    } : null;

  
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns;

  
  const getRowKey = (record: T): React.Key => {
    if (rowKey) {
      if (typeof rowKey === 'function') {
        
        return rowKey(record);
      }
     
      return record[rowKey] as React.Key;
    }
    
    return Math.random().toString();
  };

  return (
    <AntTable
      columns={finalColumns} 
      dataSource={data}    
      loading={loading}    
      pagination={pagination === true ? { 
        pageSize: 10, 
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
      } : pagination}  
      size={size}      
      className={className}  
      style={style}     
      rowKey={getRowKey}   
      scroll={{ x: true }}/>
  );
}

// Export the Table component as default
export default Table;