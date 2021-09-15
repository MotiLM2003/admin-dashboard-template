import React from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> display
          </button>
        </li>

        <li className='widgetSmListItem'>
          <img
            src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
