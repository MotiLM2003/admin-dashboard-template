import React from 'react';
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { userdata } from '../../data';
import WidgetLg from '../../WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import './home.css';
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        title='User Analytics'
        data={userdata}
        grid
        dataKey='Active User'
      />

      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
