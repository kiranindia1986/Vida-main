import { format } from 'date-fns';

const today = new Date();

export const currentDate = format(today, 'MMMM do, yyyy');

export const getCurrentDateDirection = () => {
  const curHr = today.getHours();
  let direction;
  if (curHr < 12) {
    direction = 'Good Morning';
  } else if (curHr < 18) {
    direction = 'Good Afternoon';
  } else {
    direction = 'Good Evening';
  }
  return direction;
};
