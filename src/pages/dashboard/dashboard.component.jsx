import React from 'react';
import './dashboard.styles.scss';
import Collabs from '../../components/collabs/collabs-component';
import Sales from '../../components/sales/sales-component';

const Dashboard = () => (
  <div className='dashboard'>
    <Sales />
    <Collabs />
  </div>
)

export default Dashboard;
