// saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  saturdayFun("hike"); // "This Saturday, I want to hike!"
  saturdayFun("go to the beach"); // "This Saturday, I want to go to the beach!"
  saturdayFun(); // "This Saturday, I want to roller-skate!"
  
//mondayWork function
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  mondayWork("work from home"); // "This Monday, I will work from home."
  mondayWork("have a meeting"); // "This Monday, I will have a meeting."
  mondayWork(); // "This Monday, I will go to the office."

  function wrapAdjective(highlight = '*') {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
