import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import useCrudExample from '../hooks/useCrudExample.tsx';
import TableCrudExample from '../components/TableCrudExample.tsx';

const CrudExample: React.FC = () => {
 
  const {categoryOptions,records,columns } = useCrudExample();

  return (
    
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
   
      <Row gutter={[24, 24]}>
   
        <Col xs={24} lg={8}>
          
        </Col>

    
        <Col xs={24} lg={16}>
         
          <TableCrudExample 
            columns={columns}
            records={records}
          />
        </Col>
      </Row>
    </div>
  );
};


export default CrudExample;