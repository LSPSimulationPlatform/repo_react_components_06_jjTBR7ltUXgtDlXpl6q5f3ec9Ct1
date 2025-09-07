import React from 'react';
import { Card as AntCard } from 'antd';

const Card: React.FC<any> = ({title,children,footer,hoverable = false,loading = false,className,style}) => {
  return (
    
    <AntCard
      title={title}    
      hoverable={hoverable}  
      loading={loading}        
      className={className}
      style={style}            
      actions={footer ? [footer] : undefined}
    >
      {children}
    </AntCard>
  );
};

export default Card;