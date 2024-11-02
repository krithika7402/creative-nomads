import chart from "../../assets/bar.svg"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./WeeklyOverview.css";
import arrow from "../../assets/arrow.svg";
import book from "../../assets/book.svg";

const WeeklyOverview = () => {
  const data = [
    { name: "Mon", line1: 30, line2: 20 },
    { name: "Tues", line1: 25, line2: 15 },
    { name: "Wed", line1: 35, line2: 25 },
    { name: "Thurs", line1: 20, line2: 15 },
    { name: "Fri", line1: 30, line2: 20 },
    { name: "Sat", line1: 35, line2: 25 },
  ];

  return (
    <>
      <div className="weekly-overview-container">
        <div className="header-section">
          <h3>Weekly Overview</h3>
          <button className="chart-button">
            <img src={chart} alt="chart"/>
          </button>
        </div>

        <div className="content-wrapper">
          <div className="stats-section">
            <div className="number-stats">
              <h2>20</h2>
              <span className="percentage-increase">
                <img src={arrow} alt="triangle" />
                +2.45%
              </span>
            </div>
            <span className="stats-label">Tasks Completed</span>

            <div className="status">
              <div className="status-icon">✓</div>
              <span className="status-text">On track</span>
            </div>

            <button className="open-tasks-button">
              <img src={book} alt="book"/>
              <span>OPEN TASKS</span>
            </button>
          </div>

          <div className="chart-section">
            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                data={data}
                margin={{
                  left: 5,
                  right: 5,
                  top: 5,
                  bottom: 15,
                }} /* Reduced margins */
              >
                <CartesianGrid vertical={false} stroke="#F5F5F5" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  stroke="#787486"
                  fontSize={10}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis hide={true} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="custom-tooltip">
                          {payload.map((entry, index) => (
                            <div key={index}>{entry.value}</div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="line1"
                  stroke="#FF69B4"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: "#FF69B4" }}
                  isAnimationActive={false} // Add this
                />
                <Line
                  type="monotone"
                  dataKey="line2"
                  stroke="#87CEEB"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: "#87CEEB" }}
                  isAnimationActive={false} // Add this
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyOverview;
