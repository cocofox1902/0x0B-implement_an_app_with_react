import './components.css';

const Activity = ({ activity }) => {
  const date = new Date(activity.updatedAt);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  console.log(date);

  return (
    <li className="activity">
      <p>
        <span>{activity.user.username}</span> added{' '}
        <span>{activity.title.title}</span> to watch later -{' '}
        {formattedDate}
      </p>
    </li>
  );
};

export default Activity;
