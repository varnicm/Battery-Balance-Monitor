chrome.alarms.create({ periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
  navigator.getBattery().then(battery => {
    if (battery.level < 0.2 || battery.level > 0.8) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "images/icon48.png",
        title: "Battery Balance Monitor",
        message: `Your battery is at ${Math.round(battery.level * 100)}%.`,
        priority: 2
      });
    }
  });
});
