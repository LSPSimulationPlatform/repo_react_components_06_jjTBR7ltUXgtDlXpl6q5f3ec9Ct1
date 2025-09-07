import { useState } from 'react'
import type{ ColumnsType } from 'antd/es/table';

export default function useCrudExample() {

  const [records, setRecords] = useState<any[]>([]);


  const categoryOptions: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  
  const columns: ColumnsType<any> = [
    {
      title: 'Name', 
      dataIndex: 'name', 
      key: 'name', 
      sorter: (a, b) => a.name.localeCompare(b.name), 
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })), 
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(), 
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    },
  ];
  return {
    categoryOptions,
    records,
    columns
  }
}