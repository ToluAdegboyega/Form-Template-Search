import React from 'react';
import '../../css/List.css';

const List = (props) => {
  const { templates } = props;
  if (!templates || templates.length === 0) return <p>No template, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>All Templates</h2>
      {templates.map((template) => {
        return (
          <div className='list'>
            <div className='sub-list'>
              <div className='template-text'>{template.name} </div>
              <div className='template-description'>{template.description}</div>
              <div className='template-description'>{template.link}</div>
            </div>
          </div> 
        );
      })}
    </ul>
  );
};
export default List;

