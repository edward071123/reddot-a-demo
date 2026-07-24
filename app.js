const credentials = {
  username: "admin",
  passwords: ["123123", "12123"],
};

const alarmData = [
  ["玻璃感應器", "4F 第三展廳", "玻璃破碎偵測異常，前往查看", "2026.01.29 13:00", "待處理"],
  ["磁簧開啟", "4F 第一展廳", "門禁開啟未關閉", "2026.01.15 08:30", "處理"],
  ["震動感應", "2F 第一展廳", "展物遭震動，建議前往查看", "2026.01.03 22:00", "已處理"],
  ["遺失物發生", "1F 櫃檯", "偵測到現場遺失物發生", "2026.01.02 11:23", "已處理"],
  ["展櫃溫控異常", "2F 特展廳", "溫度異常", "2026.01.02 08:23", "已處理"],
  ["淹水感測", "2F 第二展廳", "偵測到淹水", "2025.12.28 16:22", "已處理"],
  ["煙霧偵測器", "4F 第一展廳　003文物櫃", "煙霧警報異常", "2025.11.29 03:30", "已處理"],
  ["玻璃感應器", "2F 第二展廳", "玻璃破碎偵測異常，前往查看", "2025.11.20 22:01", "已處理"],
  ["展櫃濕度異常", "3F 文物櫃", "濕度過高", "2025.10.27 09:30", "已處理"],
  ["震動感應", "2F 第二展廳", "展物遭震動，建議前往查看", "2025.10.27 09:27", "已處理"],
  ["遺留物發生", "1F 櫃檯", "發生遺留物，待處理", "2025.09.23 20:14", "已處理"],
  ["跨區警戒", "2F 第一展廳", "跨區安防觸發", "2025.09.07 08:07", "已處理"],
];

const roomReadings = {
  1: { temp: "26.8", humidity: "58.4" },
  2: { temp: "27.1", humidity: "59.2" },
  3: { temp: "26.4", humidity: "57.8" },
  4: { temp: "27.5", humidity: "60.1" },
  5: { temp: "25.9", humidity: "56.6" },
  6: { temp: "26.2", humidity: "57.1" },
  7: { temp: "28.0", humidity: "61.3" },
  8: { temp: "27.3", humidity: "59.7" },
};

const viewMeta = {
  dashboard: {
    id: "dashboardView",
    crumb: "IOT 物聯網數據平台",
  },
  alarm: {
    id: "alarmView",
    crumb: "Alarm 警報歷程",
  },
  security: {
    id: "securityView",
    crumb: "監控儀表板 / 安防圖控",
  },
  loginAdmin: {
    id: "loginAdminView",
    crumb: "Login 權限密碼管理",
  },
  access: {
    id: "accessView",
    crumb: "門禁管理 / 門禁授權",
  },
  sensor: {
    id: "sensorView",
    crumb: "Sensor 感測器管理",
  },
};

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const alarmRows = document.querySelector("#alarmRows");
const alarmType = document.querySelector("#alarmType");
const breadcrumbs = document.querySelector("#breadcrumbs");
const tempValue = document.querySelector("#tempValue");
const humidityValue = document.querySelector("#humidityValue");
const selectedAccessRows = document.querySelector("#selectedAccessRows");
let accessStep = 1;

function setLoggedIn() {
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  showView("dashboard");
}

function showView(name) {
  const meta = viewMeta[name] || viewMeta.dashboard;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-current"));
  document.querySelector(`#${meta.id}`).classList.add("is-current");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.view === name);
  });
  breadcrumbs.innerHTML = `<button type="button" data-home>首頁</button><span> / ${meta.crumb}</span>`;
}

function renderAlarms(filter = "") {
  if (!alarmRows) return;
  const rows = alarmData.filter((row) => !filter || row[0] === filter);
  alarmRows.innerHTML = rows.map((row) => {
    const cells = row.map((cell) => `<td>${cell}</td>`).join("");
    return `<tr>${cells}<td><span class="mail-cell" aria-label="已發送"></span></td></tr>`;
  }).join("");
}

function exportCsv() {
  const visibleRows = [...alarmRows.querySelectorAll("tr")].map((tr) => {
    return [...tr.querySelectorAll("td")].slice(0, 5).map((td) => `"${td.textContent.trim()}"`).join(",");
  });
  const csv = ["警報點,位置,告警訊息,發生時間,處理狀態", ...visibleRows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "alarm-report.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function splitReading(value) {
  const [whole, fraction = "0"] = value.split(".");
  return { whole, fraction };
}

function setRoomReading(roomId) {
  const reading = roomReadings[roomId];
  if (!reading || !tempValue || !humidityValue) return;

  const temp = splitReading(reading.temp);
  const humidity = splitReading(reading.humidity);
  tempValue.innerHTML = `${temp.whole}<small>.${temp.fraction}</small>°C`;
  humidityValue.innerHTML = `${humidity.whole}<small>.${humidity.fraction}</small>%RH`;

  document.querySelectorAll("[data-room]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.room === String(roomId));
  });
}

function renderSelectedAccess(row) {
  if (!selectedAccessRows || !row) return;

  document.querySelectorAll("[data-access-row]").forEach((item) => {
    item.classList.toggle("is-picked", item === row);
  });

  selectedAccessRows.innerHTML = `
    <tr>
      <td>${row.dataset.card}</td>
      <td>${row.dataset.name}</td>
      <td>${row.dataset.phone}</td>
    </tr>
  `;
}

function setAccessStep(step) {
  accessStep = Math.max(1, Math.min(3, step));

  document.querySelectorAll("[data-access-step]").forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.accessStep) === accessStep);
  });

  document.querySelectorAll("[data-step-indicator]").forEach((indicator) => {
    const stepNumber = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("is-active", stepNumber === accessStep);
    indicator.classList.toggle("is-done", stepNumber < accessStep);
  });
}

function showAccessSuccess(message = "門禁授權成功") {
  let toast = document.querySelector("#accessToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "accessToast";
    toast.className = "access-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<strong>門禁授權</strong><span>${message}</span>`;
  toast.classList.add("is-visible");
  window.clearTimeout(showAccessSuccess.timer);
  showAccessSuccess.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(loginForm);
  const username = String(data.get("username")).trim();
  const password = String(data.get("password"));

  if (username === credentials.username && credentials.passwords.includes(password)) {
    loginError.textContent = "";
    setLoggedIn();
    return;
  }

  loginError.textContent = "帳號或密碼錯誤，請使用 admin / 123123";
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-home]")) {
    showView("dashboard");
  }

  const roomButton = event.target.closest("[data-room]");
  if (roomButton) {
    setRoomReading(roomButton.dataset.room);
  }

  const accessRow = event.target.closest("[data-access-row]");
  if (accessRow) {
    renderSelectedAccess(accessRow);
  }

  if (event.target.closest("[data-access-next]")) {
    setAccessStep(accessStep + 1);
  }

  if (event.target.closest("[data-access-prev]")) {
    setAccessStep(accessStep - 1);
  }

  const floorButton = event.target.closest("[data-floor]");
  if (floorButton) {
    document.querySelectorAll("[data-floor]").forEach((button) => {
      button.classList.toggle("is-selected", button === floorButton);
    });
    const floorLabel = document.querySelector("#selectedFloorLabel");
    if (floorLabel) floorLabel.textContent = floorButton.dataset.floor;
  }

  const timeButton = event.target.closest(".time-column button");
  if (timeButton) {
    document.querySelectorAll(".time-column button").forEach((button) => {
      button.classList.toggle("is-selected", button === timeButton);
    });
  }

  if (event.target.closest("[data-access-submit]")) {
    showAccessSuccess("設定成功");
  }
});

if (alarmType) {
  alarmType.addEventListener("change", () => renderAlarms(alarmType.value));
}

const exportBtn = document.querySelector("#exportBtn");
if (exportBtn) {
  exportBtn.addEventListener("click", exportCsv);
}

renderAlarms();
