import React from 'react';

const TaskDetails = props => {
  const taskItem = props.tasks.map(item => <li key={item.toString()} className="list-group-item">{item}</li>)
  return (
    <div className="mt-2">
      <h5>Detalhes da etapa:</h5>
      <ul className="list-group">
        {taskItem}
      </ul>
    </div>
  )
}

export default TaskDetails;