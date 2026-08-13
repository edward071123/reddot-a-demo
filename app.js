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

const calendarMonthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const calendarWeekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const calendarTypeMeta = {
  workday: { label: "工作日", className: "is-workday" },
  holiday: { label: "國定/例假日", className: "is-holiday" },
  flex: { label: "彈性放假", className: "is-flex" },
  makeup: { label: "補班日", className: "is-makeup" },
};

const calendarEvents = {
  "2026-01-01": { type: "holiday", note: "元旦" },
  "2026-01-31": { type: "makeup", note: "春節前上班" },
  "2026-02-07": { type: "makeup", note: "春節前上班" },
  "2026-02-16": { type: "flex", note: "春節彈性放假" },
  "2026-02-17": { type: "holiday", note: "除夕" },
  "2026-02-18": { type: "holiday", note: "春節" },
  "2026-02-19": { type: "holiday", note: "春節" },
  "2026-02-20": { type: "holiday", note: "春節" },
  "2026-04-03": { type: "holiday", note: "兒童節補假" },
  "2026-04-05": { type: "holiday", note: "清明節" },
  "2026-06-19": { type: "holiday", note: "端午節" },
  "2026-09-25": { type: "holiday", note: "中秋節" },
  "2026-10-09": { type: "holiday", note: "國慶日補假" },
};

const securityAlerts = [
  {
    type: "磁簧開啟",
    location: "4F 第三展廳",
    message: "展示櫃門位異常開啟，請前往查看。",
    channel: "CH 1",
    statusId: "securityDoorStatus",
    marker: { x: 24, y: 28 },
  },
  {
    type: "煙霧偵測",
    location: "4F 第一展廳",
    message: "展櫃上方煙霧數值異常，已觸發警戒。",
    channel: "CH 2",
    statusId: "securitySmokeStatus",
    marker: { x: 71, y: 34 },
  },
  {
    type: "玻璃破碎",
    location: "2F 展覽廳二",
    message: "玻璃破碎感測器回報高頻震動。",
    channel: "CH 4",
    statusId: "securityGlassStatus",
    marker: { x: 58, y: 69 },
  },
  {
    type: "淹水警報",
    location: "B1 機房通道",
    message: "地面水位感測器觸發，請派員確認。",
    channel: "CH 6",
    statusId: "securityFloodStatus",
    marker: { x: 15, y: 74 },
  },
  {
    type: "電子圍籬跨越",
    location: "4F 展館3-2",
    message: "警戒線跨越事件，監控畫面已鎖定。",
    channel: "CH 1",
    statusId: "securityDoorStatus",
    marker: { x: 42, y: 44 },
  },
];

const securityCameraPositions = [
  { x: 3, y: 6 },
  { x: 57, y: 6 },
  { x: 4, y: 48 },
  { x: 58, y: 47 },
];

let calendarYear = 2026;
let calendarMonth = 0;
let calendarWeekendGenerated = false;
let editingCalendarDate = "2026-01-01";
let securityAlertTimer = null;
let securityAlertAnimationTimer = null;
let currentSecurityAlertIndex = -1;
let currentSecurityCameraPositionIndex = -1;

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
  calendar: {
    id: "calendarView",
    crumb: "單位管理 / 萬年曆",
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
const securityCameraAlert = document.querySelector("#securityCameraAlert");
const securityAlarmType = document.querySelector("#securityAlarmType");
const securityAlarmLocation = document.querySelector("#securityAlarmLocation");
const securityAlarmMessage = document.querySelector("#securityAlarmMessage");
const securityAlarmTime = document.querySelector("#securityAlarmTime");
const securityCameraChannel = document.querySelector("#securityCameraChannel");
const securityAlertSummary = document.querySelector("#securityAlertSummary");
const securityMapMarker = document.querySelector("#securityMapMarker");
const securityMapMarkerLabel = document.querySelector("#securityMapMarkerLabel");
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
const calendarYearInput = document.querySelector("#calendarYear");
const calendarGrid = document.querySelector("#calendarGrid");
const calendarMonthTitle = document.querySelector("#calendarMonthTitle");
const calendarListRows = document.querySelector("#calendarListRows");
const calendarModal = document.querySelector("#calendarModal");
const calendarModalTitle = document.querySelector("#calendarModalTitle");
const calendarDateInput = document.querySelector("#calendarDateInput");
const calendarNoteInput = document.querySelector("#calendarNoteInput");
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
  startSecurityAlertSimulation();
}

function showView(name) {
  const meta = viewMeta[name] || viewMeta.dashboard;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-current"));
  document.querySelector(`#${meta.id}`).classList.add("is-current");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.view === name);
  });
  breadcrumbs.innerHTML = `<button type="button" data-home>首頁</button><span> / ${meta.crumb}</span>`;
  if (name === "security") {
    triggerRandomSecurityAlert();
  }
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

function formatCalendarDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCalendarMeta(dateKey, date) {
  const customEvent = calendarEvents[dateKey];
  if (customEvent) {
    return {
      ...calendarTypeMeta[customEvent.type],
      type: customEvent.type,
      note: customEvent.note,
    };
  }

  if (calendarWeekendGenerated && (date.getDay() === 0 || date.getDay() === 6)) {
    return {
      ...calendarTypeMeta.holiday,
      type: "holiday",
      note: "例假日",
    };
  }

  return {
    ...calendarTypeMeta.workday,
    type: "workday",
    note: "工作日",
  };
}

function renderCalendar() {
  if (!calendarGrid || !calendarMonthTitle) return;

  calendarMonthTitle.textContent = `${calendarYear} ${calendarMonthNames[calendarMonth]}`;
  if (calendarYearInput) calendarYearInput.value = String(calendarYear);
  const batchButton = document.querySelector("#calendarBatchBtn");
  if (batchButton && !batchButton.textContent.startsWith("已產生")) {
    batchButton.textContent = `批次產生 ${calendarYear} 全年週末例假日`;
  }
  if (batchButton && batchButton.textContent.startsWith("已產生")) {
    batchButton.textContent = `已產生 ${calendarYear} 全年週末例假日`;
  }

  const firstDay = new Date(calendarYear, calendarMonth, 1);
  const startDate = new Date(calendarYear, calendarMonth, 1 - firstDay.getDay());
  const cells = [];

  for (let index = 0; index < 42; index += 1) {
    const cellDate = new Date(startDate);
    cellDate.setDate(startDate.getDate() + index);
    const dateKey = formatCalendarDate(cellDate);
    const inMonth = cellDate.getMonth() === calendarMonth;
    const meta = getCalendarMeta(dateKey, cellDate);
    const dayText = String(cellDate.getDate()).padStart(2, "0");
    cells.push(`
      <button class="calendar-day ${inMonth ? "" : "is-muted"} ${meta.className}" type="button" data-calendar-date="${dateKey}">
        <strong>${dayText}</strong>
        <span>${meta.note}</span>
      </button>
    `);
  }

  calendarGrid.innerHTML = cells.join("");
  renderCalendarList();
}

function getCalendarListRows() {
  const generatedWeekendRows = [];
  if (calendarWeekendGenerated) {
    const start = new Date(calendarYear, 0, 1);
    const end = new Date(calendarYear, 11, 31);
    for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateKey = formatCalendarDate(date);
      if ((date.getDay() === 0 || date.getDay() === 6) && !calendarEvents[dateKey]) {
        generatedWeekendRows.push({
          dateKey,
          type: "holiday",
          note: "例假日",
        });
      }
    }
  }

  const customRows = Object.entries(calendarEvents)
    .filter(([dateKey]) => dateKey.startsWith(`${calendarYear}-`))
    .map(([dateKey, value]) => ({ dateKey, ...value }));

  return [...customRows, ...generatedWeekendRows]
    .sort((a, b) => a.dateKey.localeCompare(b.dateKey));
}

function renderCalendarList() {
  if (!calendarListRows) return;

  const rows = getCalendarListRows();
  calendarListRows.innerHTML = rows.map((row) => {
    const date = new Date(`${row.dateKey}T00:00:00`);
    const type = calendarTypeMeta[row.type] || calendarTypeMeta.workday;
    return `
      <tr>
        <td>${row.dateKey}</td>
        <td>${calendarWeekdays[date.getDay()]}</td>
        <td><span class="calendar-badge ${type.className}">${type.label}</span></td>
        <td>${escapeHtml(row.note)}</td>
        <td><button type="button" data-calendar-edit="${row.dateKey}">編輯</button><button type="button" data-calendar-delete="${row.dateKey}">刪除</button></td>
      </tr>
    `;
  }).join("");
}

function openCalendarModal(dateKey = formatCalendarDate(new Date(calendarYear, calendarMonth, 1))) {
  if (!calendarModal || !calendarDateInput || !calendarNoteInput || !calendarModalTitle) return;

  const event = calendarEvents[dateKey];
  const date = new Date(`${dateKey}T00:00:00`);
  const fallback = getCalendarMeta(dateKey, date);
  editingCalendarDate = dateKey;
  calendarModalTitle.textContent = `設定日期：${dateKey}`;
  calendarDateInput.value = dateKey;
  calendarNoteInput.value = event?.note || fallback.note;
  const typeValue = event?.type || fallback.type;
  const typeRadio = calendarModal.querySelector(`[name="calendarType"][value="${typeValue}"]`);
  if (typeRadio) typeRadio.checked = true;
  calendarModal.classList.add("is-visible");
  calendarModal.setAttribute("aria-hidden", "false");
}

function closeCalendarModal() {
  if (!calendarModal) return;
  calendarModal.classList.remove("is-visible");
  calendarModal.setAttribute("aria-hidden", "true");
}

function showCalendarSuccess(message) {
  let toast = document.querySelector("#calendarToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "calendarToast";
    toast.className = "calendar-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<strong>萬年曆</strong><span>${message}</span>`;
  toast.classList.add("is-visible");
  window.clearTimeout(showCalendarSuccess.timer);
  showCalendarSuccess.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function exportCalendarCsv() {
  const rows = getCalendarListRows().map((row) => {
    const date = new Date(`${row.dateKey}T00:00:00`);
    const type = calendarTypeMeta[row.type] || calendarTypeMeta.workday;
    return [row.dateKey, calendarWeekdays[date.getDay()], type.label, row.note]
      .map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",");
  });
  const csv = ["日期,星期,假日類型,說明備註", ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `calendar-${calendarYear}.csv`;
  link.click();
  URL.revokeObjectURL(url);
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

function getCurrentClockText() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function getNextSecurityCameraPosition() {
  let nextIndex = Math.floor(Math.random() * securityCameraPositions.length);
  if (nextIndex === currentSecurityCameraPositionIndex) {
    nextIndex = (nextIndex + 1) % securityCameraPositions.length;
  }
  currentSecurityCameraPositionIndex = nextIndex;
  return securityCameraPositions[nextIndex];
}

function triggerRandomSecurityAlert() {
  if (!securityCameraAlert) return;

  let nextIndex = Math.floor(Math.random() * securityAlerts.length);
  if (nextIndex === currentSecurityAlertIndex) {
    nextIndex = (nextIndex + 1) % securityAlerts.length;
  }
  currentSecurityAlertIndex = nextIndex;

  const alert = securityAlerts[nextIndex];
  const time = getCurrentClockText();
  const cameraPosition = getNextSecurityCameraPosition();

  window.clearTimeout(securityAlertAnimationTimer);
  const hadActiveAlert = securityCameraAlert.classList.contains("is-active");
  securityCameraAlert.classList.remove("is-active");
  securityCameraAlert.classList.toggle("is-collapsing", hadActiveAlert);
  securityMapMarker?.classList.remove("is-active");

  const showNextAlert = () => {
    securityAlarmType.textContent = alert.type;
    securityAlarmLocation.textContent = alert.location;
    securityAlarmMessage.textContent = alert.message;
    securityAlarmTime.textContent = time;
    securityCameraChannel.textContent = alert.channel;
    securityAlertSummary.textContent = `警戒　${time} ${alert.type}　${alert.location}`;
    securityCameraAlert.style.left = `${cameraPosition.x}%`;
    securityCameraAlert.style.top = `${cameraPosition.y}%`;
    if (securityMapMarker && alert.marker) {
      securityMapMarker.style.left = `${alert.marker.x}%`;
      securityMapMarker.style.top = `${alert.marker.y}%`;
      securityMapMarkerLabel.textContent = alert.location;
    }

    document.querySelectorAll(".security-status span").forEach((item) => {
      item.classList.toggle("is-alert", item.id === alert.statusId);
    });
    securityAlertSummary.classList.add("is-alert");
    securityCameraAlert.classList.remove("is-collapsing");
    void securityCameraAlert.offsetWidth;
    securityCameraAlert.classList.add("is-active");
    securityMapMarker?.classList.add("is-active");
  };

  securityAlertAnimationTimer = window.setTimeout(showNextAlert, hadActiveAlert ? 260 : 0);
}

function startSecurityAlertSimulation() {
  if (securityAlertTimer) return;

  window.setTimeout(triggerRandomSecurityAlert, 900);
  securityAlertTimer = window.setInterval(triggerRandomSecurityAlert, 10000);
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

  if (event.target.closest("#calendarManualBtn")) {
    openCalendarModal(formatCalendarDate(new Date(calendarYear, calendarMonth, 1)));
  }

  if (event.target.closest("#calendarBatchBtn")) {
    calendarWeekendGenerated = true;
    renderCalendar();
    const weekendCount = getCalendarListRows().filter((row) => {
      const date = new Date(`${row.dateKey}T00:00:00`);
      return (date.getDay() === 0 || date.getDay() === 6) && row.note === "例假日";
    }).length;
    const batchButton = document.querySelector("#calendarBatchBtn");
    if (batchButton) batchButton.textContent = `已產生 ${calendarYear} 全年週末例假日`;
    showCalendarSuccess(`批次產生成功，共 ${weekendCount} 筆週末例假日`);
  }

  if (event.target.closest("#calendarExportBtn")) {
    exportCalendarCsv();
  }

  if (event.target.closest("[data-calendar-prev]")) {
    calendarMonth -= 1;
    if (calendarMonth < 0) {
      calendarMonth = 11;
      calendarYear -= 1;
    }
    renderCalendar();
  }

  if (event.target.closest("[data-calendar-next]")) {
    calendarMonth += 1;
    if (calendarMonth > 11) {
      calendarMonth = 0;
      calendarYear += 1;
    }
    renderCalendar();
  }

  if (event.target.closest("[data-calendar-today]")) {
    const today = new Date();
    calendarYear = today.getFullYear();
    calendarMonth = today.getMonth();
    renderCalendar();
  }

  const calendarTab = event.target.closest("[data-calendar-tab]");
  if (calendarTab) {
    const tabName = calendarTab.dataset.calendarTab;
    document.querySelectorAll("[data-calendar-tab]").forEach((button) => {
      button.classList.toggle("is-active", button === calendarTab);
    });
    document.querySelectorAll("[data-calendar-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.calendarPanel === tabName);
    });
    renderCalendarList();
  }

  const calendarEdit = event.target.closest("[data-calendar-edit]");
  if (calendarEdit) {
    openCalendarModal(calendarEdit.dataset.calendarEdit);
  }

  const calendarDelete = event.target.closest("[data-calendar-delete]");
  if (calendarDelete) {
    delete calendarEvents[calendarDelete.dataset.calendarDelete];
    renderCalendar();
  }

  const calendarDay = event.target.closest("[data-calendar-date]");
  if (calendarDay) {
    openCalendarModal(calendarDay.dataset.calendarDate);
  }

  if (event.target === calendarModal || event.target.closest(".calendar-modal-close") || event.target.closest("[data-calendar-cancel]")) {
    closeCalendarModal();
  }

  if (event.target.closest("[data-access-submit]")) {
    showAccessSuccess("設定成功");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sensorEditModal?.classList.contains("is-visible")) {
    closeSensorEditModal();
  }
  if (event.key === "Escape" && calendarModal?.classList.contains("is-visible")) {
    closeCalendarModal();
  }
});

calendarYearInput?.addEventListener("change", () => {
  calendarYear = Number(calendarYearInput.value) || 2026;
  renderCalendar();
});

calendarModal?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!calendarDateInput || !calendarNoteInput || !calendarModal) return;

  const dateKey = calendarDateInput.value || editingCalendarDate;
  const checkedType = calendarModal.querySelector("[name='calendarType']:checked");
  calendarEvents[dateKey] = {
    type: checkedType?.value || "holiday",
    note: calendarNoteInput.value.trim() || calendarTypeMeta[checkedType?.value || "holiday"].label,
  };
  const date = new Date(`${dateKey}T00:00:00`);
  calendarYear = date.getFullYear();
  calendarMonth = date.getMonth();
  closeCalendarModal();
  renderCalendar();
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
renderCalendar();
renderSensors();
