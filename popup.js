document.addEventListener('DOMContentLoaded', () => {
    navigator.getBattery().then(battery => {
      document.getElementById('battery-level').textContent = `Current Battery Level: ${battery.level * 100}%`;
    });
  });
  