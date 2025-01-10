import { ArrowFall, ArrowRise } from "../../assets/svg";

const StatCard = () => {
  const cardDetails = [
    {
      name: "Requests",
      figure: 7625,
      percentage: "+11.02%",
      color: "#E3F5FF",
      up: true,
    },

    {
      name: "KYC",
      figure: 3671,
      percentage: "-0.03%",
      color: "#E5ECF6",
      up: false,
    },

    {
      name: "Tasks",
      figure: 156,
      percentage: "+15.03%",
      color: "#E3F5FF",
      up: true,
    },
    {
      name: "Customers",
      figure: 2318,
      percentage: "+6.08%",
      color: "#E5ECF6",
      up: true,
    },
  ];
  return (
    <div className="stat-card-wrapper">
      {cardDetails.map((card, key) => {
        return (
          <div
            style={{ backgroundColor: card.color }}
            key={key}
            className="stat-card"
          >
            <div className="title">{card.name}</div>

            <div className="numbers-wrapper">
              <div className="figure">{card.figure}</div>
              <div className="percentage">
                {card.percentage}{" "}
                <span>{card.up ? <ArrowRise /> : <ArrowFall />}</span>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCard;
