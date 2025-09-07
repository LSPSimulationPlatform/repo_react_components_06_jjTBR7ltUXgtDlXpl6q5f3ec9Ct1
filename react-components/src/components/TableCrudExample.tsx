import Card from './Card.tsx'

import Table from './Table.tsx'

export default function TableCrudExample({columns, records}:any) {
  return (

    <Card title="Records" style={{ height: 'fit-content' }}>
    
      <Table
        columns={columns} 
        data={records} 
        pagination={records.length > 10}   
        size="middle" />
    
      {records.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No records found. Create your first record using the form.
        </div>
      )}
    </Card>
  )
}