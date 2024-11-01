// Calendar.jsx
import './Calendar.css'
import { ChevronRight, Plus, Pencil, Trash2, MoreHorizontal } from 'lucide-react';

const Calendar = () => {
  const dates = [
    { day: 19, weekday: 'Sun' },
    { day: 20, weekday: 'Mon' },
    { day: 21, weekday: 'Tue', isActive: true },
    { day: 22, weekday: 'Wed' },
    { day: 23, weekday: 'Thu' },
    { day: 24, weekday: 'Sat' },
    { day: 25, weekday: 'Sun' },
  ];

  const statusCards = [
    { title: 'To-Do', count: '20', color: '#E2F5FF', textColor: '#76BBFF' },
    { title: 'In-Progress', count: '15', color: '#E9E7FF', textColor: '#7978CB' },
    { title: 'Complete', count: '03', color: '#DFF9E3', textColor: '#4ADE80' }
  ];

  const tasks = [
    {
      id: 1,
      title: "Donate Rs. 500 to the charity",
      completed: true,
      subtasks: [
        { text: "Donate Rs. 500 to the charity", completed: true },
        { text: "Donate Rs. 500 to the charity", completed: true }
      ],
      tags: [
        { text: "Donations", color: "#FFE4B5" },
        { text: "Social", color: "#DFF9E3" }
      ],
      progress: "2/2 Completed"
    },
    {
      id: 2,
      title: "Do 500 pushups",
      completed: false,
      subtasks: [
        { text: "Start with 100", completed: true },
        { text: "Complete 250", completed: false },
        { text: "Reach 400", completed: false }
      ],
      tags: [
        { text: "Sport", color: "#E9E7FF" },
        { text: "Selfcare", color: "#FFE4EC" }
      ],
      progress: "1/3 Completed"
    },
    {
      id: 3,
      title: "Buy new headset",
      completed: true,
      tags: [
        { text: "Shopping", color: "#E9E7FF" },
        { text: "Set-up", color: "#DFF9E3" }
      ]
    },
    {
      id: 4,
      title: "clean the room",
      completed: false,
      tags: [
        { text: "Selfcare", color: "#E9E7FF" }
      ]
    }
  ];

  return (
    <div className="calendar-container">
      {/* Calendar Header */}
      <div className="calendar-header">
        <h2>Calendar</h2>
        <button className="more-button">
          <ChevronRight size={24} color="#7978CB" />
        </button>
      </div>

      {/* Date Slider */}
      <div className="dates-slider">
        {dates.map((date, index) => (
          <div 
            key={index} 
            className={`date-card ${date.isActive ? 'active' : ''}`}
          >
            <div className="date-indicator"></div>
            <span className="day">{date.day}</span>
            <span className="weekday">{date.weekday}</span>
          </div>
        ))}
      </div>

      {/* Status Cards */}
      <div className="status-cards">
        {statusCards.map((card, index) => (
          <div 
            key={index} 
            className="status-card"
            style={{ 
              backgroundColor: card.color,
              color: card.textColor
            }}
          >
            <span className="status-title">{card.title}</span>
            <span className="status-count">{card.count}</span>
          </div>
        ))}
      </div>

      {/* Tasks Section */}
      <div className="tasks-section">
        <div className="tasks-header">
          <h3>Tasks for the day</h3>
          <div className="header-buttons">
            <button className="add-button">
              <Plus size={24} color="#fff" />
            </button>
            <button className="more-button">
              <ChevronRight size={24} color="#7978CB" />
            </button>
          </div>
        </div>

        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-content">
                <div className="task-main">
                  <div className="task-checkbox">
                    <input 
                      type="checkbox" 
                      checked={task.completed}
                      onChange={() => {}}
                    />
                    <span className={task.completed ? 'completed' : ''}>
                      {task.title}
                    </span>
                  </div>
                  {task.progress && (
                    <span className="task-progress">{task.progress}</span>
                  )}
                </div>

                {task.subtasks && (
                  <div className="subtasks">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="subtask">
                        <input 
                          type="checkbox" 
                          checked={subtask.completed}
                          onChange={() => {}}
                        />
                        <span className={subtask.completed ? 'completed' : ''}>
                          {subtask.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="task-footer">
                  <div className="task-tags">
                    {task.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="tag"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                  <div className="task-actions">
                    <button><Pencil size={16} color="#76BBFF" /></button>
                    <button><Trash2 size={16} color="#FF6B6B" /></button>
                    <button><MoreHorizontal size={16} color="#7978CB" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;