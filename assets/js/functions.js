// send ls data


  function sendLsData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    
    // get ls data
    function getLsData(key) {
            if (localStorage.getItem(key)) {
              return JSON.parse(localStorage.getItem(key));
            }
            return [];
          }

      
// time ago function

function timeAgo(postTime) {
    const currentTime = Date.now();
    const timeDifference = currentTime - postTime;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return years === 1 ? "a year ago" : `${years} years ago`;
    } else if (months > 0) {
      return months === 1 ? "a month ago" : `${months} months ago`;
    } else if (days > 0) {
      return days === 1 ? "a day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "an hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
    } else {
      return seconds <= 5 ? "just now" : `${seconds} seconds ago`;
    }
  }
  