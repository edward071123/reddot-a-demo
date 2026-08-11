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

const sensorDataByType = {
  "煙霧偵測": [
    ["Zone 1 Lobby", "S-D 001", "2026.08.25", "03:00", "高", "展廳出入口"],
    ["Zone 1 Lobby", "S-D 002", "2026.06.01", "21:00", "低", "重點文物區"],
    ["Zone 2 @ 2F", "S-D 003", "2026.06.01", "21:00", "低", "重點文物區"],
    ["Zone 2 @ 2F", "S-D 004", "2026.09.01", "03:21", "中", "展館出口"],
    ["Zone 3 @ 2F", "S-D 005", "2026.09.30", "13:26", "高", "管理權限者自由備註"],
    ["Zone 3 @ 2F", "S-D 006", "2026.07.14", "21:25", "低", "管理權限者自由備註"],
    ["Zone 3 @ 2F", "S-D 007", "2026.06.01", "12:23", "低", "主要展演廳"],
    ["Zone 4 @ 4F", "S-D 008", "2026.06.04", "04:10", "高", "陳列櫃"],
  ],
  "水位感測器": [
    ["B1 Pump Room", "W-L 001", "2026.08.20", "02:15", "高", "地下室集水井"],
    ["B2 Storage", "W-L 002", "2026.07.18", "18:42", "中", "典藏庫房排水口"],
    ["Zone 1 Lobby", "W-L 003", "2026.06.22", "09:05", "低", "入口水位監測"],
    ["Zone 2 @ 2F", "W-L 004", "2026.05.30", "23:12", "低", "消防管線旁"],
  ],
  "玻璃破碎": [
    ["Zone 1 Lobby", "G-B 001", "2026.08.11", "10:32", "中", "售票櫃台玻璃"],
    ["Zone 2 @ 2F", "G-B 002", "2026.08.02", "14:18", "低", "展櫃側面玻璃"],
    ["Zone 3 @ 2F", "G-B 003", "2026.07.25", "03:44", "高", "主要展演廳展示櫃"],
    ["Zone 4 @ 4F", "G-B 004", "2026.07.01", "11:09", "低", "陳列櫃玻璃門"],
  ],
  "震波感測器": [
    ["Zone 1 Lobby", "V-S 001", "2026.08.08", "07:35", "低", "入口牆面震動"],
    ["Zone 2 @ 2F", "V-S 002", "2026.07.29", "22:40", "中", "重點文物展台"],
    ["Zone 3 @ 2F", "V-S 003", "2026.07.12", "16:21", "高", "大型展品底座"],
    ["Zone 4 @ 4F", "V-S 004", "2026.06.15", "05:12", "低", "外牆側震動點"],
  ],
  "刷卡機": [
    ["Zone 1 Lobby", "C-R 001", "2026.08.25", "09:18", "高", "員工入口刷卡機"],
    ["Zone 2 @ 2F", "C-R 002", "2026.08.20", "19:33", "中", "管制門刷卡機"],
    ["Zone 3 @ 2F", "C-R 003", "2026.07.07", "08:44", "低", "庫房入口"],
    ["Zone 4 @ 4F", "C-R 004", "2026.06.19", "21:10", "低", "維修通道"],
  ],
  "溫濕度感測": [
    ["Storage No. 1", "T-H 001", "2026.08.30", "13:20", "中", "典藏庫房溫濕度"],
    ["Storage No. 2", "T-H 002", "2026.08.22", "06:50", "低", "紙本文物區"],
    ["Zone 2 @ 2F", "T-H 003", "2026.07.16", "15:31", "低", "特展區環境監測"],
    ["Zone 3 @ 2F", "T-H 004", "2026.07.02", "04:05", "高", "恆溫櫃異常紀錄"],
  ],
  "磁簧防盜": [
    ["Zone 1 Lobby", "M-R 001", "2026.08.18", "01:27", "高", "出入口門磁"],
    ["Zone 2 @ 2F", "M-R 002", "2026.08.03", "20:15", "中", "展櫃門磁"],
    ["Zone 3 @ 2F", "M-R 003", "2026.07.12", "12:38", "低", "維修門磁簧"],
    ["Zone 4 @ 4F", "M-R 004", "2026.06.28", "03:19", "低", "陳列櫃門磁"],
  ],
  "IVS防盜": [
    ["Zone 1 Lobby", "I-V 001", "2026.08.21", "23:55", "高", "入口跨線偵測"],
    ["Zone 2 @ 2F", "I-V 002", "2026.08.10", "17:20", "中", "展區逗留偵測"],
    ["Zone 3 @ 2F", "I-V 003", "2026.07.19", "02:43", "高", "主要展演廳入侵偵測"],
    ["Zone 4 @ 4F", "I-V 004", "2026.06.12", "12:11", "低", "管制區影像分析"],
  ],
};

const ivsDetectionGroups = [
  {
    title: "遺留物偵測",
    rows: [
      ["off", "特展大廳1F 攝影機 No.182", "192.168.28.01", "攝影機No.180", "192.168.27.37", "遺留物偵測 30 秒"],
      ["on", "2F大廳 攝影機 No.12", "192.168.28.21", "攝影機No.85", "192.168.27.02", "遺留物偵測 120 秒"],
    ],
  },
  {
    title: "遺失物偵測",
    rows: [
      ["on", "2F 展廳1 攝影機 No.182", "192.168.28.01", "攝影機No.23", "192.168.27.32", "遺失物偵測 30 秒"],
      ["off", "2F 展廳1 攝影機 No.126", "192.168.28.61", "攝影機No.42", "192.168.27.17", "遺失物偵測 14 秒"],
    ],
  },
  {
    title: "徘徊偵測",
    rows: [
      ["off", "攝影機 No.122", "192.168.28.15", "攝影機No.57", "192.168.27.99", "徘徊偵測 120 秒"],
    ],
  },
  {
    title: "熱感應偵測",
    rows: [
      ["on", "3F機房攝影機 No.02", "192.168.28.28", "攝影機No.90", "192.168.27.36", "熱源偵測 50 度"],
    ],
  },
];

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
    crumb: "感應器管理",
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
const sensorEditModal = document.querySelector("#sensorEditModal");
const sensorEditZone = document.querySelector("#sensorEditZone");
const sensorEditCode = document.querySelector("#sensorEditCode");
const sensorEditNote = document.querySelector("#sensorEditNote");
const sensorThresholdFields = document.querySelector("#sensorThresholdFields");
const sensorTempHigh = document.querySelector("#sensorTempHigh");
const sensorTempLow = document.querySelector("#sensorTempLow");
const sensorHumidityHigh = document.querySelector("#sensorHumidityHigh");
const sensorHumidityLow = document.querySelector("#sensorHumidityLow");
const sensorTableBody = document.querySelector("#sensorView .sensor-table tbody");
const sensorTableTools = document.querySelector("#sensorView .sensor-table-tools");
const sensorTableWrap = document.querySelector("#sensorView .sensor-table-wrap");
const sensorIvsPanel = document.querySelector("#sensorIvsPanel");
const sensorHeaderCheckbox = document.querySelector("#sensorView .sensor-table thead input[type='checkbox']");
const sensorPaginationCount = document.querySelector(".sensor-pagination > span");
const sensorPagination = document.querySelector("#sensorView .sensor-pagination");
let accessStep = 1;
let editingSensorRow = null;
let currentSensorType = "煙霧偵測";

const defaultSensorThresholds = {
  tempHigh: "25",
  tempLow: "-01",
  humidityHigh: "63",
  humidityLow: "20",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

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

function renderSensors(type = currentSensorType) {
  if (!sensorTableBody) return;

  currentSensorType = sensorDataByType[type] ? type : "煙霧偵測";
  const isIvs = currentSensorType === "IVS防盜";
  document.querySelector("#sensorView")?.classList.toggle("is-ivs", isIvs);
  if (sensorTableTools) sensorTableTools.hidden = isIvs;
  if (sensorTableWrap) sensorTableWrap.hidden = isIvs;
  if (sensorPagination) sensorPagination.hidden = isIvs;
  if (sensorIvsPanel) sensorIvsPanel.hidden = !isIvs;
  if (isIvs) {
    renderIvsSensors();
    return;
  }

  const rows = sensorDataByType[currentSensorType];

  sensorTableBody.innerHTML = rows.map((row, index) => {
    const [zone, code, date, time, frequency, note] = row.map(escapeHtml);
    return `
      <tr data-sensor-type="${escapeHtml(currentSensorType)}" data-sensor-index="${index}">
        <td><input type="checkbox" aria-label="選取 ${code}" /></td>
        <td>${zone}</td>
        <td>${code}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${frequency}</td>
        <td>${note}</td>
        <td><button type="button" aria-label="編輯 ${code}">✎</button></td>
      </tr>
    `;
  }).join("");

  if (sensorHeaderCheckbox) sensorHeaderCheckbox.checked = false;
  if (sensorPaginationCount) sensorPaginationCount.textContent = `第 1 至 ${rows.length} 筆 共 ${rows.length} 筆`;
}

function renderIvsSensors() {
  if (!sensorIvsPanel) return;

  sensorIvsPanel.innerHTML = ivsDetectionGroups.map((group) => `
    <section class="ivs-group">
      <h3>${escapeHtml(group.title)}</h3>
      <div class="ivs-grid ivs-head">
        <span>警報啟動</span>
        <span>IVS攝影機</span>
        <span>位址</span>
        <span>輔助角度攝影機</span>
        <span>位址</span>
        <span>偵測警戒值</span>
        <span></span>
      </div>
      ${group.rows.map((row) => {
        const [status, camera, address, assistCamera, assistAddress, threshold] = row.map(escapeHtml);
        return `
          <div class="ivs-grid ivs-row">
            <span><i class="ivs-status ${status === "on" ? "is-on" : ""}"></i></span>
            <strong>${camera}</strong>
            <strong>${address}</strong>
            <strong>${assistCamera}</strong>
            <strong>${assistAddress}</strong>
            <strong>${threshold}</strong>
            <button type="button" aria-label="編輯 ${camera}">✎</button>
          </div>
        `;
      }).join("")}
    </section>
  `).join("");
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

function renderSelectedAccess() {
  if (!selectedAccessRows) return;

  const pickedRows = [...document.querySelectorAll("[data-access-row].is-picked")];

  if (!pickedRows.length) {
    selectedAccessRows.innerHTML = `<tr class="empty-row"><td colspan="3">暫無資料</td></tr>`;
    return;
  }

  selectedAccessRows.innerHTML = pickedRows.map((row) => `
    <tr>
      <td>${row.dataset.card}</td>
      <td>${row.dataset.name}</td>
      <td>${row.dataset.phone}</td>
    </tr>
  `).join("");
}

function toggleAccessRow(row) {
  if (!row) return;

  row.classList.toggle("is-picked");
  row.setAttribute("aria-checked", String(row.classList.contains("is-picked")));
  renderSelectedAccess();
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

function openSensorEditModal(row) {
  if (!sensorEditModal || !row) return;

  const cells = row.querySelectorAll("td");
  const rowIndex = Number(row.dataset.sensorIndex);
  const rowData = sensorDataByType[currentSensorType]?.[rowIndex];
  const isTemperature = currentSensorType === "溫濕度感測";
  const thresholds = rowData?.[6] || defaultSensorThresholds;

  editingSensorRow = row;
  sensorEditZone.value = cells[1]?.textContent.trim() || "";
  sensorEditCode.value = cells[2]?.textContent.trim() || "";
  sensorEditNote.value = cells[6]?.textContent.trim() || "";
  sensorEditModal.querySelector(".sensor-modal-panel")?.classList.toggle("is-temperature", isTemperature);
  if (sensorThresholdFields) sensorThresholdFields.hidden = !isTemperature;
  if (isTemperature) {
    sensorTempHigh.value = thresholds.tempHigh;
    sensorTempLow.value = thresholds.tempLow;
    sensorHumidityHigh.value = thresholds.humidityHigh;
    sensorHumidityLow.value = thresholds.humidityLow;
  }
  sensorEditModal.classList.add("is-visible");
  sensorEditModal.setAttribute("aria-hidden", "false");
  sensorEditZone.focus();
}

function closeSensorEditModal() {
  if (!sensorEditModal) return;

  sensorEditModal.classList.remove("is-visible");
  sensorEditModal.setAttribute("aria-hidden", "true");
  editingSensorRow = null;
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
    toggleAccessRow(accessRow);
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

  const sensorTypeButton = event.target.closest(".sensor-type-tabs button");
  if (sensorTypeButton) {
    document.querySelectorAll(".sensor-type-tabs button").forEach((button) => {
      button.classList.toggle("is-active", button === sensorTypeButton);
    });
    renderSensors(sensorTypeButton.textContent.trim());
  }

  if (event.target.closest(".sensor-table-tools > button")) {
    document.querySelectorAll("#sensorView .sensor-table tbody input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = true;
    });
  }

  const sensorEditButton = event.target.closest("#sensorView .sensor-table tbody td:last-child button");
  if (sensorEditButton) {
    openSensorEditModal(sensorEditButton.closest("tr"));
  }

  if (event.target === sensorEditModal) {
    closeSensorEditModal();
  }

  if (event.target.closest(".sensor-modal-close")) {
    closeSensorEditModal();
  }

  if (event.target.closest("[data-access-submit]")) {
    showAccessSuccess("設定成功");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sensorEditModal?.classList.contains("is-visible")) {
    closeSensorEditModal();
  }
});

sensorEditModal?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!editingSensorRow) return;

  const rowIndex = Number(editingSensorRow.dataset.sensorIndex);
  const rowData = sensorDataByType[currentSensorType]?.[rowIndex];
  if (rowData) {
    rowData[0] = sensorEditZone.value.trim();
    rowData[1] = sensorEditCode.value.trim();
    rowData[5] = sensorEditNote.value.trim();
    if (currentSensorType === "溫濕度感測") {
      rowData[6] = {
        tempHigh: sensorTempHigh.value.trim(),
        tempLow: sensorTempLow.value.trim(),
        humidityHigh: sensorHumidityHigh.value.trim(),
        humidityLow: sensorHumidityLow.value.trim(),
      };
    }
  }

  const cells = editingSensorRow.querySelectorAll("td");
  cells[1].textContent = sensorEditZone.value.trim();
  cells[2].textContent = sensorEditCode.value.trim();
  cells[6].textContent = sensorEditNote.value.trim();
  closeSensorEditModal();
});

sensorHeaderCheckbox?.addEventListener("change", (event) => {
  document.querySelectorAll("#sensorView .sensor-table tbody input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = event.target.checked;
  });
});

if (alarmType) {
  alarmType.addEventListener("change", () => renderAlarms(alarmType.value));
}

const exportBtn = document.querySelector("#exportBtn");
if (exportBtn) {
  exportBtn.addEventListener("click", exportCsv);
}

renderAlarms();
renderSelectedAccess();
renderSensors();
