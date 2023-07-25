import React from 'react'
import './home.css'
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/chart/chart'
import { userData } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/widgetLg';
import WidgetSm from '../../components/widgetSm/widgetSm';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title={"User Analytics"} grid dataKey={"Active User"}/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
