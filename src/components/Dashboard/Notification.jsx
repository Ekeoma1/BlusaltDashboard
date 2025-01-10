import Pic1 from "../../assets/frame.png"
import Pic2 from "../../assets/frame1.png"
import Pic3 from "../../assets/frame2.png"
import Pic4 from "../../assets/frame3.png"
import Pic5 from "../../assets/frame4.png"
import Pic6 from "../../assets/frame5.png"

const notificationList = [
  {
    info: "You fixed a bug.",
    time: "Just Now",
  },

  {
    info: "New user registered.",
    time: "59 minutes ago",
  },
  {
    info: "You fixed a bug.",
    time: "12 hours ago",
  },
  {
    info: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
  },
];

const activitiesList = [
  {
    info: "Changed the style.",
    time: "Just Now",
  },

  {
    info: "Released a new version.",
    time: "59 minutes ago",
  },
  {
    info: "Submitted a bug.",
    time: "12 hours ago",
  },
  {
    info: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
  },
  {
    info: "Deleted a page in Project X.",
    time: "Feb 2, 2024",
  },
];

const peopleList = [
  {
    name: "Natali Craig",
    image: Pic1,
  },

  {
    name: "Drew Cano",
    image: Pic2,
  },
  {
    name: "Andi Lane",
    image: Pic3,
  },
  {
    name: "Koray Okumus",
    image: Pic4,
  },
  {
    name: "Kate Morrison",
    image: Pic5,
  },
  {
    name: "Melody Macy",
    image: Pic6,
  },
];


const Notification = () => {
  return (
    <div className="notification-section">
      <div>
        <p className="notification-title">Notifications</p>
        <div className="notification">
          {notificationList.map((list, id) => {
            return (
              <div key={id} className="not-list">
                <div className="icon"></div>
                <div className="info-and-time">
                  <div className="info">{list.info}</div>
                  <div className="time">{list.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="notification-title">Activities</p>
        <div className="notification">
          {activitiesList.map((list, id) => {
            return (
              <div key={id} className="not-list">
                <div className="icon"></div>
                <div className="info-and-time">
                  <div className="info">{list.info}</div>
                  <div className="time">{list.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="notification-title">Contact</p>
        <div className="notification">
          {peopleList.map((list, id) => {
            return (
              <div key={id} className="not-list">
                <div style={{backgroundImage: `url(${list.image})`}} className="icon"></div>
                <div className="info-and-time">
                  <div className="info">{list.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
