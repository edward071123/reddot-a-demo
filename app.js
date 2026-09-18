const credentials = {
  username: "admin",
  passwords: ["123123", "12123"],
};

const alarmData = [
  ["玻璃感應器", "4F 第三展廳", "玻璃破碎偵測異常，前往查看", "2026.01.29 13:00", "異常"],
  ["磁簧開啟", "4F 第一展廳", "門禁開啟未關閉", "2026.01.15 08:30", "異常"],
  ["震動感應", "2F 第一展廳", "展物遭震動，建議前往查看", "2026.01.03 22:00", "已解除"],
  ["遺失物發生", "1F 櫃檯", "偵測到現場遺失物發生", "2026.01.02 11:23", "已解除"],
  ["展櫃溫控異常", "2F 特展廳", "溫度異常", "2026.01.02 08:23", "已解除"],
  ["淹水感測", "2F 第二展廳", "偵測到淹水", "2025.12.28 16:22", "已解除"],
  ["煙霧偵測器", "4F 第一展廳　003文物櫃", "煙霧警報異常", "2025.11.29 03:30", "已解除"],
  ["玻璃感應器", "2F 第二展廳", "玻璃破碎偵測異常，前往查看", "2025.11.20 22:01", "已解除"],
  ["展櫃濕度異常", "3F 文物櫃", "濕度過高", "2025.10.27 09:30", "已解除"],
  ["震動感應", "2F 第二展廳", "展物遭震動，建議前往查看", "2025.10.27 09:27", "已解除"],
  ["遺留物發生", "1F 櫃檯", "發生遺留物，請前往查看", "2025.09.23 20:14", "已解除"],
  ["跨區警戒", "2F 第一展廳", "跨區安防觸發", "2025.09.07 08:07", "已解除"],
];

const accessHistoryData = [
  ["1F 大廳入口閘門", "0989321456", "", "刷卡事件:無此卡號", "進", "2025/01/06 09:57:01"],
  ["1F 大廳入口閘門", "0989321456", "", "刷卡事件:無此卡號", "進", "2025/01/06 09:56:52"],
  ["1F 大廳入口閘門", "0989321456", "", "刷卡事件:無此卡號", "進", "2025/01/06 09:55:55"],
  ["2F 特展廳管制門", "", "", "一般事件:裝置連線4", "", "2025/01/06 09:30:16"],
  ["B1 機房讀卡機", "", "", "一般事件:讀卡機重開機0", "", "2025/01/06 09:30:16"],
  ["2F 特展廳管制門", "", "", "一般事件:裝置連線4", "", "2025/01/02 15:44:02"],
  ["B1 機房讀卡機", "", "", "一般事件:讀卡機重開機0", "", "2025/01/02 15:44:02"],
  ["4F 典藏庫側門", "", "", "一般事件:裝置離線4", "", "2025/01/02 15:34:44"],
  ["南側員工門", "0987888888", "", "刷卡事件:無此卡號", "進", "2025/01/02 15:06:04"],
  ["南側員工門", "0987888888", "", "刷卡事件:卡片時效已過", "進", "2025/01/02 15:05:31"],
  ["南側員工門", "3265708516", "王志明", "刷卡事件:授權通過", "進", "2025/01/02 08:42:15"],
  ["典藏庫房門", "0831011879", "林佳蓉", "刷卡事件:授權通過", "出", "2025/01/01 18:22:06"],
  ...Array.from({ length: 26 }, (_, index) => {
    const locations = ["北側管制門", "1F 員工入口", "2F 展廳管制門", "3F 行政辦公室", "4F 典藏庫房門", "B2 停車場電梯廳"];
    const day = String(31 - Math.floor(index / 3)).padStart(2, "0");
    const minute = String(50 - index).padStart(2, "0");
    const card = index % 4 === 0 ? "0839848711" : index % 3 === 0 ? "0840222999" : "";
    const name = index % 4 === 0 ? "陳建宏" : index % 3 === 0 ? "張雅婷" : "";
    const eventName = index % 2 === 0 ? "一般事件:裝置連線4" : "刷卡事件:授權通過";
    const direction = eventName.startsWith("刷卡事件") ? (index % 3 === 0 ? "出" : "進") : "";
    return [locations[index % locations.length], card, name, eventName, direction, `2024/12/${day} 14:${minute}:08`];
  }),
];

const alarmSettingPhones = Array.from({ length: 6 }, (_, index) => (
  index === 1 ? "0921221545" : ""
));

const alarmSettingEmails = Array.from({ length: 16 }, (_, index) => (
  index === 1 ? "notify@example.com" : ""
));

const alarmSettingMessages = [
  "測試簡訊1",
  "測試簡訊123",
  "3",
  "4",
  "5",
  "6",
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

const accountAdmins = [
  { name: "王志明", username: "admin", password: "123123", role: "系統管理員", scope: "全館 / 帳密 / 警報 / 感測器", status: "啟用", lastLogin: "2026.07.20 08:30" },
  { name: "林佳蓉", username: "curator", password: "curator2026", role: "策展管理", scope: "展廳資訊 / 人流分析", status: "啟用", lastLogin: "2026.07.19 17:12" },
  { name: "陳建宏", username: "operator", password: "op2026", role: "維運人員", scope: "設備點位 / 溫濕度 / 感測器", status: "啟用", lastLogin: "2026.07.19 09:45" },
  { name: "張雅婷", username: "security", password: "sec2026", role: "安防人員", scope: "安防圖控 / 警戒事件", status: "啟用", lastLogin: "2026.07.18 22:05" },
  { name: "許文凱", username: "alarm", password: "alarm2026", role: "警報處理", scope: "警報歷程 / 發送紀錄", status: "啟用", lastLogin: "2026.07.18 13:28" },
  { name: "黃郁庭", username: "viewer", password: "view2026", role: "資料檢視", scope: "儀表板唯讀", status: "停用", lastLogin: "2026.07.10 11:02" },
];

let calendarYear = 2026;
let calendarMonth = 0;
let calendarWeekendGenerated = false;
let editingCalendarDate = "2026-01-01";
let securityAlertTimer = null;
let securityAlertAnimationTimer = null;
let currentSecurityAlertIndex = -1;
let currentSecurityCameraPositionIndex = -1;
let editingAccountIndex = null;

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
  exhibitSecurity: {
    id: "exhibitSecurityView",
    crumb: "展品安全監控系統 / 攝影機設定",
  },
  exhibitLive: {
    id: "exhibitLiveView",
    crumb: "展品安全監控系統 / 即時監看",
  },
  exhibitEvents: {
    id: "exhibitEventsView",
    crumb: "展品安全監控系統 / 事件統計",
  },
  exhibitFlow: {
    id: "exhibitFlowView",
    crumb: "展品安全監控系統 / 人流統計",
  },
  exhibitLeft: {
    id: "exhibitLeftView",
    crumb: "展品安全監控系統 / 遺留物",
  },
  exhibitMissing: {
    id: "exhibitMissingView",
    crumb: "展品安全監控系統 / 遺失物",
  },
  exhibitBackup: {
    id: "exhibitBackupView",
    crumb: "展品安全監控系統 / 備份管理",
  },
  loginAdmin: {
    id: "loginAdminView",
    crumb: "Login 權限密碼管理",
  },
  access: {
    id: "accessView",
    crumb: "門禁管理 / 門禁授權",
  },
  personnelAccess: {
    id: "personnelAccessView",
    crumb: "門禁管理 / 人員進出",
  },
  visitorBooking: {
    id: "visitorBookingView",
    crumb: "門禁管理 / 訪客預約",
  },
  reservationCard: {
    id: "reservationCardView",
    crumb: "門禁管理 / 預約發卡",
  },
  visitorBookingList: {
    id: "visitorBookingListView",
    crumb: "門禁管理 / 訪客預約清單",
  },
  remoteDoor: {
    id: "remoteDoorView",
    crumb: "門禁管理 / 遙控開門",
  },
  doorSystem: {
    id: "doorSystemView",
    crumb: "門禁管理 / 門禁系統設備",
  },
  elevatorSystem: {
    id: "elevatorSystemView",
    crumb: "門禁管理 / 電梯系統設備",
  },
  elevatorHistory: {
    id: "elevatorHistoryView",
    crumb: "門禁管理 / 電梯歷史列表",
  },
  accessHistory: {
    id: "accessHistoryView",
    crumb: "門禁管理 / 門禁歷史列表",
  },
  accessRealtime: {
    id: "accessRealtimeView",
    crumb: "門禁管理 / 門禁進出即時監控",
  },
  readerRealtime: {
    id: "readerRealtimeView",
    crumb: "門禁管理 / 卡機狀態即時監控",
  },
  workday: {
    id: "workdayView",
    crumb: "門禁管理 / 工作日設定",
  },
  timePeriod: {
    id: "timePeriodView",
    crumb: "門禁管理 / 時段",
  },
  calendar: {
    id: "calendarView",
    crumb: "門禁管理 / 萬年曆",
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
const logoutBtn = document.querySelector("#logoutBtn");
const alarmRows = document.querySelector("#alarmRows");
const alarmType = document.querySelector("#alarmType");
const floorFilter = document.querySelector("#floorFilter");
const dateFilter = document.querySelector("#dateFilter");
const timeFilter = document.querySelector("#timeFilter");
const alarmSettingModal = document.querySelector("#alarmSettingModal");
const alarmPhoneFields = document.querySelector("#alarmPhoneFields");
const alarmEmailFields = document.querySelector("#alarmEmailFields");
const alarmMessageFields = document.querySelector("#alarmMessageFields");
const breadcrumbs = document.querySelector("#breadcrumbs");
const tempValue = document.querySelector("#tempValue");
const humidityValue = document.querySelector("#humidityValue");
const accessRows = document.querySelector("#accessRows");
const selectedAccessRows = document.querySelector("#selectedAccessRows");
const accessSelectAll = document.querySelector("#accessSelectAll");
const selectedPeopleAll = document.querySelector("#selectedPeopleAll");
const accessNameSearch = document.querySelector("#accessNameSearch");
const accessPhoneSearch = document.querySelector("#accessPhoneSearch");
const floorDoorTree = document.querySelector("#floorDoorTree");
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
const ivsEditModal = document.querySelector("#ivsEditModal");
const ivsCameraInput = document.querySelector("#ivsCameraInput");
const ivsAddressInput = document.querySelector("#ivsAddressInput");
const ivsAssistCameraInput = document.querySelector("#ivsAssistCameraInput");
const ivsAssistAddressInput = document.querySelector("#ivsAssistAddressInput");
const ivsThresholdInput = document.querySelector("#ivsThresholdInput");
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
const accessHistoryRows = document.querySelector("#accessHistoryRows");
const historyCount = document.querySelector("#historyCount");
const historyPagination = document.querySelector("#accessHistoryView .history-pagination");
const historyEventFilter = document.querySelector("#historyEventFilter");
const historySearchInput = document.querySelector("#historySearchInput");
const elevatorHistoryRows = document.querySelector("#elevatorHistoryRows");
const accessRealtimeRows = document.querySelector("#accessRealtimeRows");
const readerRealtimeRows = document.querySelector("#readerRealtimeRows");
const cameraRegistryForm = document.querySelector("#cameraRegistryForm");
const cameraRegistryRows = document.querySelector("#cameraRegistryRows");
const cameraLiveTime = document.querySelector("#cameraLiveTime");
const backupFileInput = document.querySelector("#backupFileInput");
const backupFileName = document.querySelector("#backupFileName");
const backupImportBtn = document.querySelector("#backupImportBtn");
const workdayGroupButtons = [...document.querySelectorAll("[data-workday-group]")];
const workdayControls = [...document.querySelectorAll("#workdayView .workday-table input, #workdayView .workday-table select")];
const accountRows = document.querySelector("#accountRows");
const accountCount = document.querySelector("#accountCount");
const accountSearchInput = document.querySelector("#accountSearchInput");
const accountRoleFilter = document.querySelector("#accountRoleFilter");
const accountStatusFilter = document.querySelector("#accountStatusFilter");
const accountModal = document.querySelector("#accountModal");
const accountModalTitle = document.querySelector("#accountModalTitle");
const accountNameInput = document.querySelector("#accountNameInput");
const accountUsernameInput = document.querySelector("#accountUsernameInput");
const accountPasswordInput = document.querySelector("#accountPasswordInput");
const accountConfirmPasswordInput = document.querySelector("#accountConfirmPasswordInput");
const accountRoleInput = document.querySelector("#accountRoleInput");
const accountModalError = document.querySelector("#accountModalError");
const accessGroupSelect = document.querySelector("#accessGroupSelect");
const accessGroupCurrent = document.querySelector("#accessGroupCurrent");
const accessGroupMenu = document.querySelector("#accessGroupMenu");
const accessGroupModal = document.querySelector("#accessGroupModal");
const accessGroupForm = document.querySelector("#accessGroupForm");
const accessGroupModalTitle = document.querySelector("#accessGroupModalTitle");
const accessGroupField = document.querySelector("#accessGroupField");
const accessGroupLabel = document.querySelector("#accessGroupLabel");
const accessGroupNameInput = document.querySelector("#accessGroupNameInput");
const accessGroupDeleteText = document.querySelector("#accessGroupDeleteText");
const downloadZonePanel = document.querySelector("#downloadZonePanel");
const deviceMode = document.querySelector("#deviceMode");
const visitorBookingView = document.querySelector("#visitorBookingView");
const visitorBookingForm = document.querySelector("#visitorBookingForm");
const visitorDatePicker = document.querySelector("#visitorDatePicker");
const visitorPickerTitle = document.querySelector("#visitorPickerTitle");
const visitorPickerDays = document.querySelector("#visitorPickerDays");
const visitorPickerDate = document.querySelector("#visitorPickerDate");
const visitorPickerTime = document.querySelector("#visitorPickerTime");
const visitorStartText = document.querySelector("#visitorStartText");
const visitorEndText = document.querySelector("#visitorEndText");
const reservationVisitorForm = document.querySelector("#reservationVisitorForm");
const reservationGroupSelect = document.querySelector("#reservationGroupSelect");
const reservationGroupCurrent = document.querySelector("#reservationGroupCurrent");
const reservationGroupMenu = document.querySelector("#reservationGroupMenu");
const reservationGroupModal = document.querySelector("#reservationGroupModal");
const reservationGroupForm = document.querySelector("#reservationGroupForm");
const reservationGroupModalTitle = document.querySelector("#reservationGroupModalTitle");
const reservationGroupName = document.querySelector("#reservationGroupName");
const reservationFloorButtons = document.querySelector("#reservationFloorButtons");
const reservationDoorOptions = document.querySelector("#reservationDoorOptions");
const visitorListRows = document.querySelector("#visitorListRows");
const visitorListNameSearch = document.querySelector("#visitorListNameSearch");
const visitorListPhoneSearch = document.querySelector("#visitorListPhoneSearch");
const visitorListDateSearch = document.querySelector("#visitorListDateSearch");
const visitorListModal = document.querySelector("#visitorListModal");
const visitorListForm = document.querySelector("#visitorListForm");
const visitorListModalTitle = document.querySelector("#visitorListModalTitle");
const visitorListName = document.querySelector("#visitorListName");
const visitorListPhone = document.querySelector("#visitorListPhone");
const visitorListCompany = document.querySelector("#visitorListCompany");
const visitorListFloor = document.querySelector("#visitorListFloor");
const visitorListDate = document.querySelector("#visitorListDate");
const visitorListStart = document.querySelector("#visitorListStart");
const visitorListEnd = document.querySelector("#visitorListEnd");
const visitorListStatus = document.querySelector("#visitorListStatus");
const visitorQrModal = document.querySelector("#visitorQrModal");
const visitorQrCode = document.querySelector("#visitorQrCode");
const remoteDoorRows = document.querySelector("#remoteDoorRows");
const remoteDoorAll = document.querySelector("#remoteDoorAll");
const remoteDoorExecuteBtn = document.querySelector("#remoteDoorExecuteBtn");
const remoteDoorConfirmModal = document.querySelector("#remoteDoorConfirmModal");
const remoteDoorConfirmText = document.querySelector("#remoteDoorConfirmText");
const doorSystemRows = document.querySelector("#doorSystemRows");
const doorConfirmModal = document.querySelector("#doorConfirmModal");
const doorConfirmText = document.querySelector("#doorConfirmText");
const doorAddModal = document.querySelector("#doorAddModal");
const doorAddForm = document.querySelector("#doorAddForm");
const doorNameInput = document.querySelector("#doorNameInput");
const doorIpInput = document.querySelector("#doorIpInput");
const doorPortInput = document.querySelector("#doorPortInput");
const doorModelInput = document.querySelector("#doorModelInput");
const doorCountInput = document.querySelector("#doorCountInput");
const doorFloorInput = document.querySelector("#doorFloorInput");
const doorReadersModal = document.querySelector("#doorReadersModal");
const doorReadersForm = document.querySelector("#doorReadersForm");
const doorReadersRows = document.querySelector("#doorReadersRows");
const doorParamsModal = document.querySelector("#doorParamsModal");
const doorParamsForm = document.querySelector("#doorParamsForm");
const doorParamsTitle = document.querySelector("#doorParamsTitle");
const doorAntiDelay = document.querySelector("#doorAntiDelay");
const doorErrorCount = document.querySelector("#doorErrorCount");
const elevatorRows = document.querySelector("#elevatorRows");
const elevatorFloorModal = document.querySelector("#elevatorFloorModal");
const elevatorFloorForm = document.querySelector("#elevatorFloorForm");
const elevatorFloorRows = document.querySelector("#elevatorFloorRows");
const elevatorAddModal = document.querySelector("#elevatorAddModal");
const elevatorAddForm = document.querySelector("#elevatorAddForm");
const elevatorNameInput = document.querySelector("#elevatorNameInput");
const elevatorIpInput = document.querySelector("#elevatorIpInput");
const elevatorPortInput = document.querySelector("#elevatorPortInput");
const elevatorNodeInput = document.querySelector("#elevatorNodeInput");
const elevatorHardwareInput = document.querySelector("#elevatorHardwareInput");
const elevatorUpdateModal = document.querySelector("#elevatorUpdateModal");
let accessStep = 1;
let accessGroupMode = "edit";
let selectedAccessGroup = 0;
const accessGroups = ["飛彈展示廳", "履車、輪車展示廳"];
const accessPeople = [
  { card: "3265708516", name: "胡孝華", phone: "0936613158", role: "系統管理員" },
  { card: "0831011879", name: "洪映韻", phone: "0927730689", role: "系統管理員" },
  { card: "0839848711", name: "張晃寧", phone: "0972172724", role: "系統管理員" },
  { card: "0840222999", name: "黃淑君", phone: "0919069722", role: "系統管理員" },
  { card: "0830930759", name: "葉琬馨", phone: "0910291472", role: "系統管理員" },
  { card: "0898105335", name: "李星蓉", phone: "0923287283", role: "行銷" },
  { card: "0843123527", name: "何宏森", phone: "0952336120", role: "行銷" },
  { card: "3738076647", name: "徐仲嫻", phone: "0911299468", role: "行銷" },
  { card: "3738801703", name: "吳東樺", phone: "0974336965", role: "行銷" },
  { card: "3739509479", name: "黃姿晴", phone: "0971016196", role: "行銷" },
];
const checkedAccessPeople = new Set(accessPeople.map((person) => person.card));
const assignedAccessPeople = new Set();
const checkedAssignedPeople = new Set();
const selectedAccessFloors = new Set(["1F"]);
const expandedAccessFloors = new Set();
const selectedAccessDoors = new Set();
const accessFloorDoors = {
  B2F: ["地下停車場", "機房入口"],
  "1F": ["特展大廳"],
  "2F": ["博物館大廳", "展廳1", "展廳2"],
  "3F": ["資訊 機房"],
  "4F": ["行政辦公室", "會議室"],
  "5F": ["典藏庫房", "修復室"],
  "6F": ["4展廳1 (5展廳)", "4展廳2 (6展廳)", "圖書資訊中心"],
  "7F": ["親子教育推廣廳"],
};
let visitorPickerTarget = "start";
let visitorPickerYear = 2026;
let visitorPickerMonth = 8;
let visitorSelectedDate = "2026-09-18";
const visitorBookingTimes = { start: "", end: "" };
let reservationStep = 1;
let reservationGroupIndex = -1;
let reservationGroupMode = "add";
let reservationSelectedTime = "全時段";
const reservationGroups = ["飛彈展示廳", "履車、輪車展示廳"];
const reservationSelectedFloors = new Set(Object.keys(accessFloorDoors));
let editingVisitorListIndex = null;
let currentVisitorQrPayload = "";
const visitorReservations = [
  { name: "15F貴賓李小姐", phone: "0912456789", company: "Reddot", floor: "12FC室", date: "2025-12-16", start: "12:12", end: "14:12", status: "未審核" },
  { name: "拜訪貴賓陳秘書", phone: "0928765282", company: "睿德資訊", floor: "8F", date: "2025-12-16", start: "12:00", end: "14:00", status: "未審核" },
  { name: "拜訪貴賓劉董事", phone: "0928765282", company: "科技公司人資", floor: "3F", date: "2025-12-16", start: "12:00", end: "14:00", status: "審核通過" },
  { name: "張Cola", phone: "1234567890", company: "建築設計", floor: "8F", date: "2025-12-08", start: "13:17", end: "15:18", status: "審核通過" },
  { name: "張灣鄉", phone: "0912312111", company: "aa", floor: "8F", date: "2025-07-28", start: "00:30", end: "01:00", status: "審核通過" },
  { name: "John", phone: "0989545212", company: "aa", floor: "8F", date: "2025-08-02", start: "17:04", end: "18:40", status: "審核通過" },
  { name: "John", phone: "0989545212", company: "test8", floor: "13F", date: "2025-08-02", start: "17:04", end: "18:40", status: "審核通過" },
  { name: "Ben", phone: "0921221545", company: "睿德", floor: "10F", date: "2025-07-31", start: "03:30", end: "04:30", status: "未審核" },
];
const remoteDoorPoints = ["特展廳", "展覽廳1", "展覽廳1-展示櫃A", "展覽廳1-展示櫃B"];
const selectedRemoteDoors = new Set();
const doorDevices = [
  { id: "0000000055", name: "1F-大廳", ip: "192.168.0.102", port: "3195", model: "RAC-2400N-8", doors: "8", floor: "1F" },
  { id: "0000000091", name: "2F展示廳", ip: "192.168.53.111", port: "3195", model: "RAC-2400N-8", doors: "8", floor: "2F" },
  { id: "0000000108", name: "第二展廳", ip: "102.33.5.1", port: "3195", model: "RAC-2400N-8", doors: "8", floor: "2F" },
  { id: "0000000113", name: "第三展區", ip: "1.5.6.4", port: "3195", model: "RAC-2400N-8", doors: "8", floor: "3F" },
];
const doorReaders = [
  { primary: 0, secondary: 16, name: "特展大廳", floor: "1F", enabled: true },
  { primary: 1, secondary: 17, name: "博物館大廳", floor: "2F", enabled: true },
  { primary: 2, secondary: 18, name: "展廳1", floor: "2F", enabled: true },
  { primary: 3, secondary: 19, name: "展廳2", floor: "2F", enabled: true },
  { primary: 4, secondary: 20, name: "資訊 機房", floor: "3F", enabled: true },
  { primary: 5, secondary: 21, name: "展廳3-1 (3展廳)", floor: "4F", enabled: true },
  { primary: 6, secondary: 22, name: "展廳3-2 (4展廳)", floor: "4F", enabled: true },
  { primary: 7, secondary: 23, name: "視覺模擬體驗廳", floor: "4F", enabled: true },
];
let activeDoorDeviceIndex = 0;
let doorConfirmAction = "update";
let historyHasSearched = false;
let selectedWorkdayGroup = 0;
const workdayDefaultValues = workdayControls.map((control) => control.value);
const workdayGroupStates = Array.from({ length: 8 }, () => null);
const registeredCameras = [
  { name: "辦公室-space01", code: "CAM-0001", host: "60.250.105.234", port: "8554", path: "profile1", account: "admin" },
];
const accessRealtimeData = [
  ["履車、輪車展示廳", "4989321456", "一級主管", "通過/合法卡", "進", "2025/01/06 09:57:01"],
  ["履車、輪車展示廳", "4989321456", "一級主管", "通過/合法卡", "進", "2025/01/06 08:26:52"],
  ["槍砲管制區", "0989321456", "", "無此卡號", "進", "2025/01/06 09:55:55"],
];
const readerRealtimeData = [
  ["2F展示區", "", "", "讀卡機重開機", "", "2025/01/06 09:30:16"],
  ["2F展示區", "", "", "讀卡機重開機", "", "2025/01/02 15:44:02"],
];
const elevatorDevices = [
  { id: "0000000082", name: "樓層", ip: "192.168.0.101", port: "4660", node: "MCU0008", hardware: "1" },
];
const defaultElevatorFloors = [
  { id: 0, name: "B2F", position: "B3F", enabled: true },
  { id: 1, name: "1F", position: "B2F", enabled: true },
  { id: 2, name: "2F", position: "B1F", enabled: true },
  { id: 3, name: "3F", position: "1F", enabled: true },
  { id: 4, name: "4F", position: "2F", enabled: true },
  { id: 5, name: "5F", position: "3F", enabled: true },
  { id: 6, name: "6F", position: "4F", enabled: true },
  { id: 7, name: "7F", position: "5F", enabled: true },
];
let elevatorFloors = defaultElevatorFloors.map((floor) => ({ ...floor }));
let editingSensorRow = null;
let editingIvsRef = null;
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
  renderAccounts();
  startSecurityAlertSimulation();
}

function setLoggedOut() {
  window.clearInterval(securityAlertTimer);
  window.clearTimeout(securityAlertAnimationTimer);
  securityAlertTimer = null;
  securityAlertAnimationTimer = null;
  loginScreen.classList.remove("is-hidden");
  appShell.classList.add("is-hidden");
  loginError.textContent = "";
  loginForm.reset();
  document.querySelector("#username").value = credentials.username;
}

function showView(name) {
  const meta = viewMeta[name] || viewMeta.dashboard;
  if (name !== "visitorBooking") closeVisitorPicker();
  if (name !== "visitorBookingList") {
    closeVisitorListModal();
    closeVisitorQr();
  }
  if (name !== "remoteDoor") closeRemoteDoorConfirm();
  if (name !== "doorSystem") closeDoorSystemModals();
  if (name !== "elevatorSystem") closeElevatorModals();
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-current"));
  document.querySelector(`#${meta.id}`).classList.add("is-current");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.view === name);
  });
  document.querySelectorAll("[data-nav-group]").forEach((item) => {
    const childViews = [...item.querySelectorAll("[data-view]")].map((button) => button.dataset.view);
    item.classList.toggle("is-active", childViews.includes(name));
  });
  breadcrumbs.innerHTML = `<button type="button" data-home>首頁</button><span> / ${meta.crumb}</span>`;
  if (name === "security") {
    triggerRandomSecurityAlert();
  }
}

function getAlarmFilters() {
  return {
    type: alarmType?.value || "",
    floor: floorFilter?.value || "",
    date: dateFilter?.value || "",
    time: timeFilter?.value || "",
  };
}

function alarmMatchesFilters(row, filters) {
  const [type, location, , happenedAt] = row;
  const [date = "", time = ""] = happenedAt.split(" ");
  return (!filters.type || type === filters.type)
    && (!filters.floor || location.includes(filters.floor))
    && (!filters.date || date === filters.date)
    && (!filters.time || time === filters.time);
}

function renderAlarms() {
  if (!alarmRows) return;
  const filters = getAlarmFilters();
  const rows = alarmData.filter((row) => alarmMatchesFilters(row, filters));
  alarmRows.innerHTML = rows.map((row) => {
    const cells = row.map((cell) => `<td>${cell}</td>`).join("");
    return `<tr>${cells}<td><span class="mail-cell" aria-label="已發送"></span></td></tr>`;
  }).join("");

  if (!rows.length) {
    alarmRows.innerHTML = `<tr><td colspan="6">查無符合搜尋條件的警報資料</td></tr>`;
  }
}

function renderAlarmSettingFields() {
  if (alarmPhoneFields) {
    alarmPhoneFields.innerHTML = alarmSettingPhones.map((value, index) => `
      <label class="alarm-setting-row">
        <span>Phone-${index + 1}</span>
        <input name="phone${index + 1}" value="${escapeHtml(value)}" inputmode="tel" />
      </label>
    `).join("");
  }

  if (alarmEmailFields) {
    alarmEmailFields.innerHTML = alarmSettingEmails.map((value, index) => `
      <label class="alarm-setting-row">
        <span>Email-${index + 1}</span>
        <input name="email${index + 1}" value="${escapeHtml(value)}" inputmode="email" />
      </label>
    `).join("");
  }

  if (alarmMessageFields) {
    alarmMessageFields.innerHTML = alarmSettingMessages.map((value, index) => `
      <label class="alarm-setting-row">
        <span>第${index + 1}組</span>
        <input name="message${index + 1}" value="${escapeHtml(value)}" />
      </label>
    `).join("");
  }
}

function openAlarmSettingModal() {
  renderAlarmSettingFields();
  alarmSettingModal?.classList.add("is-visible");
  alarmSettingModal?.setAttribute("aria-hidden", "false");
  alarmSettingModal?.querySelector("input")?.focus();
}

function closeAlarmSettingModal() {
  alarmSettingModal?.classList.remove("is-visible");
  alarmSettingModal?.setAttribute("aria-hidden", "true");
}

function showAlarmSettingSuccess(message = "警報設定已儲存") {
  let toast = document.querySelector("#alarmSettingToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "alarmSettingToast";
    toast.className = "alarm-setting-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<strong>警報設定</strong><span>${message}</span>`;
  toast.classList.add("is-visible");
  window.clearTimeout(showAlarmSettingSuccess.timer);
  showAlarmSettingSuccess.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function getAccountScope(role) {
  return {
    後台管理者: "後台管理 / 門禁 / 感測器",
    最高管理者: "全館 / 帳密 / 警報 / 感測器",
    系統管理員: "全館 / 帳密 / 警報 / 感測器",
    策展管理: "展廳資訊 / 人流分析",
    維運人員: "設備點位 / 溫濕度 / 感測器",
    安防人員: "安防圖控 / 警戒事件",
    警報處理: "警報歷程 / 發送紀錄",
    資料檢視: "儀表板唯讀",
  }[role] || "後台管理";
}

function getFilteredAccounts() {
  const keyword = accountSearchInput?.value.trim().toLowerCase() || "";
  const role = accountRoleFilter?.value || "全部角色";
  const status = accountStatusFilter?.value || "全部狀態";

  return accountAdmins
    .map((admin, index) => ({ ...admin, index }))
    .filter((admin) => {
      const matchesKeyword = !keyword
        || admin.name.toLowerCase().includes(keyword)
        || admin.username.toLowerCase().includes(keyword);
      const matchesRole = role === "全部角色" || admin.role === role;
      const matchesStatus = status === "全部狀態" || admin.status === status;
      return matchesKeyword && matchesRole && matchesStatus;
    });
}

function renderAccounts() {
  if (!accountRows) return;

  const rows = getFilteredAccounts();
  accountRows.innerHTML = rows.map((admin) => `
    <tr>
      <td>${escapeHtml(admin.name)}</td>
      <td>${escapeHtml(admin.username)}</td>
      <td>${escapeHtml(admin.password)}</td>
      <td>${escapeHtml(admin.role)}</td>
      <td>${escapeHtml(admin.scope)}</td>
      <td><span class="${admin.status === "啟用" ? "status-on" : "status-off"}">${escapeHtml(admin.status)}</span></td>
      <td>${escapeHtml(admin.lastLogin)}</td>
      <td>
        <button type="button" data-account-edit="${admin.index}">修改</button>
        <button type="button" data-account-reset="${admin.index}">忘記密碼</button>
        <button type="button" data-account-delete="${admin.index}">刪除</button>
      </td>
    </tr>
  `).join("");

  if (!rows.length) {
    accountRows.innerHTML = `<tr><td colspan="8">查無管理人員</td></tr>`;
  }
  if (accountCount) accountCount.textContent = `共 ${rows.length} 位管理人員`;
}

function openAccountModal(index = null) {
  if (!accountModal || !accountModalTitle) return;

  editingAccountIndex = index;
  const admin = Number.isInteger(index) ? accountAdmins[index] : null;
  accountModalTitle.textContent = admin ? "修改管理者" : "新增管理者";
  accountNameInput.value = admin?.name || "";
  accountUsernameInput.value = admin?.username || "";
  accountPasswordInput.value = admin?.password || "";
  accountConfirmPasswordInput.value = admin?.password || "";
  accountRoleInput.value = admin?.role || "後台管理者";
  accountModalError.textContent = "";
  accountModal.querySelector("form").setAttribute("aria-label", admin ? "修改管理者" : "新增管理者");
  accountModal.querySelector("[type='submit']").textContent = admin ? "確定修改" : "確定新增";
  accountModal.classList.add("is-visible");
  accountModal.setAttribute("aria-hidden", "false");
  accountNameInput.focus();
}

function closeAccountModal() {
  if (!accountModal) return;

  accountModal.classList.remove("is-visible");
  accountModal.setAttribute("aria-hidden", "true");
  editingAccountIndex = null;
}

function showAccountSuccess(message) {
  let toast = document.querySelector("#accountToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "accountToast";
    toast.className = "account-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<strong>權限密碼管理</strong><span>${message}</span>`;
  toast.classList.add("is-visible");
  window.clearTimeout(showAccountSuccess.timer);
  showAccountSuccess.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
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

  sensorIvsPanel.innerHTML = ivsDetectionGroups.map((group, groupIndex) => `
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
      ${group.rows.map((row, rowIndex) => {
        const [status, camera, address, assistCamera, assistAddress, threshold] = row.map(escapeHtml);
        return `
          <div class="ivs-grid ivs-row" data-ivs-group="${groupIndex}" data-ivs-row="${rowIndex}">
            <span><button class="ivs-status-button" type="button" data-ivs-toggle aria-label="切換 ${camera} 警報啟動狀態"><i class="ivs-status ${status === "on" ? "is-on" : ""}"></i></button></span>
            <strong>${camera}</strong>
            <strong>${address}</strong>
            <strong>${assistCamera}</strong>
            <strong>${assistAddress}</strong>
            <strong>${threshold}</strong>
            <button type="button" data-ivs-edit aria-label="編輯 ${camera}">✎</button>
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

const textEncoder = new TextEncoder();

function toUtf8Bytes(value) {
  return textEncoder.encode(value);
}

function xmlEscape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  }[char]));
}

function getExcelColumnName(index) {
  let column = "";
  let value = index + 1;
  while (value > 0) {
    const remainder = (value - 1) % 26;
    column = String.fromCharCode(65 + remainder) + column;
    value = Math.floor((value - 1) / 26);
  }
  return column;
}

function makeWorksheetXml(rows) {
  const sheetRows = rows.map((row, rowIndex) => {
    const cells = row.map((cell, columnIndex) => {
      const ref = `${getExcelColumnName(columnIndex)}${rowIndex + 1}`;
      return `<c r="${ref}" t="inlineStr"><is><t>${xmlEscape(cell)}</t></is></c>`;
    }).join("");
    return `<row r="${rowIndex + 1}">${cells}</row>`;
  }).join("");

  const lastColumn = getExcelColumnName(Math.max(...rows.map((row) => row.length), 1) - 1);
  const lastRow = Math.max(rows.length, 1);
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`
    + `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">`
    + `<dimension ref="A1:${lastColumn}${lastRow}"/>`
    + `<sheetViews><sheetView workbookViewId="0"/></sheetViews>`
    + `<sheetFormatPr defaultRowHeight="18"/>`
    + `<sheetData>${sheetRows}</sheetData>`
    + `</worksheet>`;
}

function makeCrcTable() {
  return Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    }
    return value >>> 0;
  });
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(bytes, offset, value) {
  bytes[offset] = value & 0xff;
  bytes[offset + 1] = (value >>> 8) & 0xff;
}

function writeUint32(bytes, offset, value) {
  bytes[offset] = value & 0xff;
  bytes[offset + 1] = (value >>> 8) & 0xff;
  bytes[offset + 2] = (value >>> 16) & 0xff;
  bytes[offset + 3] = (value >>> 24) & 0xff;
}

function makeZip(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach((entry) => {
    const nameBytes = toUtf8Bytes(entry.name);
    const dataBytes = toUtf8Bytes(entry.content);
    const crc = crc32(dataBytes);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    writeUint32(localHeader, 0, 0x04034b50);
    writeUint16(localHeader, 4, 20);
    writeUint16(localHeader, 6, 0x0800);
    writeUint16(localHeader, 8, 0);
    writeUint16(localHeader, 10, 0);
    writeUint16(localHeader, 12, 0);
    writeUint32(localHeader, 14, crc);
    writeUint32(localHeader, 18, dataBytes.length);
    writeUint32(localHeader, 22, dataBytes.length);
    writeUint16(localHeader, 26, nameBytes.length);
    writeUint16(localHeader, 28, 0);
    localHeader.set(nameBytes, 30);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    writeUint32(centralHeader, 0, 0x02014b50);
    writeUint16(centralHeader, 4, 20);
    writeUint16(centralHeader, 6, 20);
    writeUint16(centralHeader, 8, 0x0800);
    writeUint16(centralHeader, 10, 0);
    writeUint16(centralHeader, 12, 0);
    writeUint16(centralHeader, 14, 0);
    writeUint32(centralHeader, 16, crc);
    writeUint32(centralHeader, 20, dataBytes.length);
    writeUint32(centralHeader, 24, dataBytes.length);
    writeUint16(centralHeader, 28, nameBytes.length);
    writeUint16(centralHeader, 30, 0);
    writeUint16(centralHeader, 32, 0);
    writeUint16(centralHeader, 34, 0);
    writeUint16(centralHeader, 36, 0);
    writeUint32(centralHeader, 38, 0);
    writeUint32(centralHeader, 42, offset);
    centralHeader.set(nameBytes, 46);

    localParts.push(localHeader, dataBytes);
    centralParts.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  });

  const centralSize = centralParts.reduce((size, part) => size + part.length, 0);
  const endRecord = new Uint8Array(22);
  writeUint32(endRecord, 0, 0x06054b50);
  writeUint16(endRecord, 8, entries.length);
  writeUint16(endRecord, 10, entries.length);
  writeUint32(endRecord, 12, centralSize);
  writeUint32(endRecord, 16, offset);

  return new Blob([...localParts, ...centralParts, endRecord], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

function makeExcelWorkbook(rows, sheetName = "Sheet1") {
  const safeSheetName = sheetName.replace(/[\\/:*?\[\]]/g, "").slice(0, 31) || "Sheet1";
  return makeZip([
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`
        + `<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">`
        + `<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>`
        + `<Default Extension="xml" ContentType="application/xml"/>`
        + `<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>`
        + `<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`
        + `</Types>`,
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`
        + `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">`
        + `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>`
        + `</Relationships>`,
    },
    {
      name: "xl/workbook.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`
        + `<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">`
        + `<sheets><sheet name="${xmlEscape(safeSheetName)}" sheetId="1" r:id="rId1"/></sheets>`
        + `</workbook>`,
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`
        + `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">`
        + `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>`
        + `</Relationships>`,
    },
    {
      name: "xl/worksheets/sheet1.xml",
      content: makeWorksheetXml(rows.length ? rows : [[""]]),
    },
  ]);
}

function downloadExcel(rows, filename, sheetName) {
  const blob = makeExcelWorkbook(rows, sheetName);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportCalendarExcel() {
  const rows = getCalendarListRows().map((row) => {
    const date = new Date(`${row.dateKey}T00:00:00`);
    const type = calendarTypeMeta[row.type] || calendarTypeMeta.workday;
    return [row.dateKey, calendarWeekdays[date.getDay()], type.label, row.note];
  });
  downloadExcel(
    [["日期", "星期", "假日類型", "說明備註"], ...rows],
    `calendar-${calendarYear}.xlsx`,
    "門禁假日表",
  );
}

function getAccessHistoryRows() {
  const location = historyEventFilter?.value || "";
  const keyword = (historySearchInput?.value || "").trim().toLowerCase();
  return accessHistoryData.filter((row) => {
    const [eventLocation, card, name, eventName] = row;
    const matchesLocation = !location || eventLocation === location;
    const haystack = `${card} ${name} ${eventName}`.toLowerCase();
    return matchesLocation && (!keyword || haystack.includes(keyword));
  });
}

function renderAccessHistory() {
  if (!accessHistoryRows) return;
  const rows = historyHasSearched ? getAccessHistoryRows() : [];
  const visibleRows = rows.slice(0, 10);
  accessHistoryRows.innerHTML = visibleRows.map((row) => `
    <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>
  `).join("");
  if (!rows.length) {
    accessHistoryRows.innerHTML = `<tr><td colspan="6">${historyHasSearched ? "查無符合搜尋條件的門禁歷史資料" : "暫無資料"}</td></tr>`;
  }
  accessHistoryRows.closest(".access-history-page")?.classList.toggle("is-empty", !rows.length);
  if (historyPagination) historyPagination.hidden = !rows.length;
  if (historyCount) historyCount.textContent = `共 ${rows.length} 項`;
}

function exportAccessHistoryExcel() {
  downloadExcel(
    [["事件地點", "卡片號碼", "姓名", "事件", "進出", "日期時間"], ...getAccessHistoryRows()],
    "access-history.xlsx",
    "門禁歷史列表",
  );
}

function renderRealtimeLogs() {
  const renderRows = (target, rows) => {
    if (!target) return;
    target.innerHTML = rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("");
  };
  renderRows(accessRealtimeRows, accessRealtimeData);
  renderRows(readerRealtimeRows, readerRealtimeData);
}

function renderRegisteredCameras() {
  if (!cameraRegistryRows) return;
  cameraRegistryRows.innerHTML = registeredCameras.map((camera, index) => `
    <article class="camera-source-row">
      <b>${String(index + 1).padStart(2, "0")}</b>
      <div><h2>${escapeHtml(camera.name)} <small>${escapeHtml(camera.code)}</small></h2><p>rtsp://${escapeHtml(camera.host)}:${escapeHtml(camera.port)}/${escapeHtml(camera.path)}</p><span>帳號 ${escapeHtml(camera.account || "-")} · 密碼 已設定</span></div>
    </article>
  `).join("");
}

function refreshCameraTime() {
  if (!cameraLiveTime) return;
  cameraLiveTime.textContent = new Intl.DateTimeFormat("zh-TW", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Asia/Taipei",
  }).format(new Date());
}

function exportExhibitBackup() {
  const payload = {
    exportedAt: new Date().toISOString(),
    timezone: "Asia/Taipei",
    startDate: document.querySelector("#backupStartDate")?.value,
    endDate: document.querySelector("#backupEndDate")?.value,
    cameras: registeredCameras,
    events: { total: 951, flowSamples: 10739 },
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `exhibit-security-backup-${payload.endDate || "latest"}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showPortalToast("展品安全監控備份已建立");
}

function selectWorkdayGroup(nextGroup) {
  if (!Number.isInteger(nextGroup) || nextGroup < 0 || nextGroup >= workdayGroupStates.length) return;

  workdayGroupStates[selectedWorkdayGroup] = workdayControls.map((control) => control.value);
  selectedWorkdayGroup = nextGroup;
  const values = workdayGroupStates[nextGroup] || workdayDefaultValues;
  workdayControls.forEach((control, index) => {
    control.value = values[index] ?? "";
  });
  workdayGroupButtons.forEach((button) => {
    const isSelected = Number(button.dataset.workdayGroup) === selectedWorkdayGroup;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function exportRealtimeLogs(type) {
  const rows = type === "reader" ? readerRealtimeData : accessRealtimeData;
  const label = type === "reader" ? "卡機狀態即時監控" : "門禁進出即時監控";
  downloadExcel(
    [["地點", "卡片號碼", "姓名", "事件", "進出", "日期時間"], ...rows],
    `${type === "reader" ? "reader" : "access"}-realtime.xlsx`,
    label,
  );
}

function exportExcel() {
  const visibleRows = [...alarmRows.querySelectorAll("tr")].map((tr) => {
    const cells = [...tr.querySelectorAll("td")].slice(0, 5);
    if (cells.length < 5) return "";
    return cells.map((td) => td.textContent.trim());
  }).filter(Boolean);
  downloadExcel(
    [["警報點", "位置", "告警訊息", "發生時間", "系統狀態"], ...visibleRows],
    "alarm-report.xlsx",
    "警報資料",
  );
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

function getFilteredAccessPeople() {
  const name = (accessNameSearch?.value || "").trim().toLowerCase();
  const phone = (accessPhoneSearch?.value || "").trim();
  return accessPeople.filter((person) => (
    (!name || person.name.toLowerCase().includes(name)) &&
    (!phone || person.phone.includes(phone))
  ));
}

function accessPersonRow(person, checked, side) {
  return `
    <tr>
      <td><input type="checkbox" data-person-check="${side}" data-card="${person.card}" ${checked ? "checked" : ""} aria-label="選取 ${escapeHtml(person.name)}" /></td>
      <td>${person.card}</td><td>${escapeHtml(person.name)}</td><td>${person.phone}</td>
      <td><span class="people-role">${escapeHtml(person.role)}</span></td>
    </tr>`;
}

function renderAccessPeople() {
  if (!accessRows || !selectedAccessRows) return;

  const sourcePeople = getFilteredAccessPeople();
  accessRows.innerHTML = sourcePeople.map((person) => accessPersonRow(person, checkedAccessPeople.has(person.card), "source")).join("");

  const assignedPeople = accessPeople.filter((person) => assignedAccessPeople.has(person.card));
  selectedAccessRows.innerHTML = assignedPeople.length
    ? assignedPeople.map((person) => accessPersonRow(person, checkedAssignedPeople.has(person.card), "assigned")).join("")
    : `<tr class="empty-row"><td colspan="5">暫無資料</td></tr>`;

  if (accessSelectAll) {
    accessSelectAll.checked = sourcePeople.length > 0 && sourcePeople.every((person) => checkedAccessPeople.has(person.card));
  }
  if (selectedPeopleAll) {
    selectedPeopleAll.checked = assignedPeople.length > 0 && assignedPeople.every((person) => checkedAssignedPeople.has(person.card));
  }
}

function transferAccessPeople(action) {
  if (action === "all-right") {
    accessPeople.forEach((person) => assignedAccessPeople.add(person.card));
  } else if (action === "right") {
    checkedAccessPeople.forEach((card) => assignedAccessPeople.add(card));
  } else if (action === "left") {
    checkedAssignedPeople.forEach((card) => assignedAccessPeople.delete(card));
    checkedAssignedPeople.clear();
  } else if (action === "all-left") {
    assignedAccessPeople.clear();
    checkedAssignedPeople.clear();
  }
  renderAccessPeople();
}

function renderAccessFloorTree() {
  if (!floorDoorTree) return;

  floorDoorTree.innerHTML = Object.keys(accessFloorDoors).filter((floor) => selectedAccessFloors.has(floor)).map((floor) => {
    const expanded = expandedAccessFloors.has(floor);
    const doors = expanded ? accessFloorDoors[floor].map((door) => {
      const key = `${floor}:${door}`;
      return `<label><input type="checkbox" data-door-key="${escapeHtml(key)}" ${selectedAccessDoors.has(key) ? "checked" : ""} />${escapeHtml(door)}</label>`;
    }).join("") : "";
    return `<div class="floor-tree-group"><button type="button" data-floor-expand="${floor}" aria-expanded="${expanded}">[${expanded ? "-" : "+"}] ${floor}</button><div class="floor-door-options">${doors}</div></div>`;
  }).join("");
}

function renderAccessGroups() {
  if (!accessGroupMenu || !accessGroupCurrent) return;

  const currentName = accessGroups[selectedAccessGroup] || "請選擇群組";
  accessGroupCurrent.textContent = currentName;
  accessGroupMenu.innerHTML = accessGroups.map((name, index) => `
    <button class="access-group-option${index === selectedAccessGroup ? " is-selected" : ""}" type="button" role="option" aria-selected="${index === selectedAccessGroup}" data-group-index="${index}">${escapeHtml(name)}</button>
  `).join("");
}

function setAccessGroupMenu(open) {
  accessGroupMenu?.classList.toggle("is-open", open);
  accessGroupSelect?.setAttribute("aria-expanded", String(open));
}

function openAccessGroupModal(mode) {
  if (!accessGroupModal || !accessGroupNameInput) return;

  const currentName = accessGroups[selectedAccessGroup] || "";
  accessGroupMode = mode;
  accessGroupModalTitle.textContent = mode === "delete" ? "提示" : mode === "add" ? "新增" : "修改";
  accessGroupField.hidden = mode === "delete";
  accessGroupDeleteText.hidden = mode !== "delete";
  accessGroupDeleteText.textContent = `確定要刪除群組「${currentName}」嗎？`;
  accessGroupLabel.textContent = mode === "add" ? "新增群組名稱" : "修改群組名稱";
  accessGroupNameInput.value = mode === "add" ? "" : currentName;
  accessGroupModal.classList.add("is-visible");
  setAccessGroupMenu(false);
  if (mode !== "delete") window.setTimeout(() => accessGroupNameInput.focus(), 0);
}

function closeAccessGroupModal() {
  accessGroupModal?.classList.remove("is-visible");
}

function setAccessStep(step) {
  accessStep = Math.max(1, Math.min(4, step));

  document.querySelectorAll("[data-access-step]").forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.accessStep) === accessStep);
  });

  document.querySelectorAll("[data-step-indicator]").forEach((indicator) => {
    const stepNumber = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("is-active", stepNumber === accessStep);
    indicator.classList.toggle("is-done", stepNumber < accessStep);
  });

  if (accessStep === 2) renderAccessPeople();
  if (accessStep === 3) renderAccessFloorTree();
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

function showPortalToast(message) {
  let toast = document.querySelector("#portalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "portalToast";
    toast.className = "portal-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span><strong>${escapeHtml(message)}</strong>`;
  toast.classList.add("is-visible");
  window.clearTimeout(showPortalToast.timer);
  showPortalToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function setDownloadZoneMode(useDeviceMode) {
  downloadZonePanel?.classList.toggle("is-disabled", !useDeviceMode);
  downloadZonePanel?.querySelectorAll("input").forEach((input) => {
    input.disabled = !useDeviceMode;
  });
}

function renderVisitorPicker() {
  if (!visitorPickerDays || !visitorPickerTitle || !visitorPickerDate) return;

  visitorPickerTitle.textContent = `${visitorPickerYear} 年 ${visitorPickerMonth + 1} 月`;
  const first = new Date(visitorPickerYear, visitorPickerMonth, 1);
  const start = new Date(visitorPickerYear, visitorPickerMonth, 1 - first.getDay());
  visitorPickerDays.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = formatCalendarDate(date);
    const isOtherMonth = date.getMonth() !== visitorPickerMonth;
    return `<button type="button" data-visitor-date="${key}" class="${isOtherMonth ? "is-muted" : ""}${key === visitorSelectedDate ? " is-selected" : ""}">${date.getDate()}</button>`;
  }).join("");
  visitorPickerDate.value = visitorSelectedDate;
}

function openVisitorPicker(target, trigger) {
  if (!visitorDatePicker || !visitorBookingView || !trigger) return;

  visitorPickerTarget = target;
  const saved = visitorBookingTimes[target];
  if (saved) {
    const [date, time] = saved.split(" ");
    const parsed = new Date(`${date}T00:00:00`);
    visitorSelectedDate = date;
    visitorPickerYear = parsed.getFullYear();
    visitorPickerMonth = parsed.getMonth();
    visitorPickerTime.value = time;
  }
  renderVisitorPicker();
  visitorDatePicker.classList.add("is-visible");
  document.querySelectorAll("[data-visitor-datetime]").forEach((button) => {
    button.classList.toggle("is-active", button === trigger);
  });

  const triggerRect = trigger.getBoundingClientRect();
  const viewRect = visitorBookingView.getBoundingClientRect();
  visitorDatePicker.style.left = `${Math.max(18, triggerRect.left - viewRect.left)}px`;
  visitorDatePicker.style.top = `${triggerRect.bottom - viewRect.top + 10}px`;
}

function closeVisitorPicker() {
  visitorDatePicker?.classList.remove("is-visible");
  document.querySelectorAll("[data-visitor-datetime]").forEach((button) => button.classList.remove("is-active"));
}

function setReservationStep(step) {
  reservationStep = Math.max(1, Math.min(2, step));
  document.querySelectorAll("[data-reservation-step]").forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.reservationStep) === reservationStep);
  });
  document.querySelectorAll("[data-reservation-indicator]").forEach((indicator) => {
    const number = Number(indicator.dataset.reservationIndicator);
    indicator.classList.toggle("is-active", number === reservationStep);
    indicator.classList.toggle("is-done", number < reservationStep);
  });
}

function renderReservationGroups() {
  if (!reservationGroupMenu || !reservationGroupCurrent) return;
  reservationGroupCurrent.textContent = reservationGroupIndex >= 0 ? reservationGroups[reservationGroupIndex] : "請選擇權限群組";
  reservationGroupMenu.innerHTML = reservationGroups.map((name, index) => `<button type="button" data-reservation-group-index="${index}">${escapeHtml(name)}</button>`).join("");
  document.querySelectorAll("[data-reservation-group-action='edit'], [data-reservation-group-action='delete']").forEach((button) => {
    button.disabled = reservationGroupIndex < 0;
  });
}

function renderReservationAccessOptions() {
  if (!reservationFloorButtons || !reservationDoorOptions) return;
  reservationFloorButtons.innerHTML = Object.keys(accessFloorDoors).map((floor) => `<button class="${reservationSelectedFloors.has(floor) ? "is-selected" : ""}" type="button" data-reservation-floor="${floor}">${floor}</button>`).join("");
  reservationDoorOptions.innerHTML = Object.entries(accessFloorDoors)
    .filter(([floor]) => reservationSelectedFloors.has(floor))
    .map(([floor, doors]) => `<section><strong>[-] ${floor}</strong>${doors.map((door) => `<label><input type="checkbox" checked />${escapeHtml(door)}</label>`).join("")}</section>`)
    .join("");
}

function openReservationGroupModal(mode) {
  if (!reservationGroupModal || !reservationGroupName) return;
  reservationGroupMode = mode;
  reservationGroupModalTitle.textContent = mode === "add" ? "新增權限群組" : "修改權限群組";
  reservationGroupName.value = mode === "edit" ? reservationGroups[reservationGroupIndex] : "";
  reservationSelectedFloors.clear();
  Object.keys(accessFloorDoors).forEach((floor) => reservationSelectedFloors.add(floor));
  reservationSelectedTime = "全時段";
  document.querySelectorAll("[data-reservation-time]").forEach((button) => button.classList.toggle("is-selected", button.dataset.reservationTime === reservationSelectedTime));
  renderReservationAccessOptions();
  reservationGroupModal.classList.add("is-visible");
  window.setTimeout(() => reservationGroupName.focus(), 0);
}

function closeReservationGroupModal() {
  reservationGroupModal?.classList.remove("is-visible");
}

function getFilteredVisitorReservations() {
  const name = (visitorListNameSearch?.value || "").trim().toLowerCase();
  const phone = (visitorListPhoneSearch?.value || "").trim();
  const date = visitorListDateSearch?.value || "";
  return visitorReservations.map((row, index) => ({ row, index })).filter(({ row }) => (
    (!name || row.name.toLowerCase().includes(name)) &&
    (!phone || row.phone.includes(phone)) &&
    (!date || row.date === date)
  ));
}

function formatVisitorTime(value) {
  return value ? `${value}:00` : "";
}

function renderVisitorReservations() {
  if (!visitorListRows) return;
  const rows = getFilteredVisitorReservations();
  visitorListRows.innerHTML = rows.map(({ row, index }) => {
    const primaryLabel = row.status === "未審核" ? "核准" : "編輯";
    const qrButton = row.status === "未審核" ? "" : `<button class="is-qr" type="button" data-visitor-qr="${index}">顯示 QR Code</button>`;
    return `<tr><td>${escapeHtml(row.name)}</td><td>${row.phone}</td><td>${escapeHtml(row.company)}</td><td>${escapeHtml(row.floor)}</td><td>${row.date}</td><td>${formatVisitorTime(row.start)}</td><td>${formatVisitorTime(row.end)}</td><td><div class="visitor-row-actions"><button class="${primaryLabel === "核准" ? "is-approve" : "is-edit"}" type="button" data-visitor-edit="${index}">${primaryLabel}</button><button class="is-delete" type="button" data-visitor-delete="${index}">刪除</button>${qrButton}</div></td></tr>`;
  }).join("");
  if (!rows.length) visitorListRows.innerHTML = `<tr><td colspan="8">查無訪客預約資料</td></tr>`;
}

function openVisitorListModal(index = null) {
  if (!visitorListModal || !visitorListForm) return;
  editingVisitorListIndex = Number.isInteger(index) ? index : null;
  const row = editingVisitorListIndex === null ? null : visitorReservations[editingVisitorListIndex];
  visitorListModalTitle.textContent = row ? "修改" : "新增";
  visitorListName.value = row?.name || "";
  visitorListPhone.value = row?.phone || "";
  visitorListCompany.value = row?.company || "";
  visitorListFloor.value = row?.floor || "";
  visitorListDate.value = row?.date || "";
  visitorListStart.value = row?.start || "";
  visitorListEnd.value = row?.end || "";
  visitorListStatus.value = row?.status || "未審核";
  visitorListModal.classList.add("is-visible");
  window.setTimeout(() => visitorListName.focus(), 0);
}

function closeVisitorListModal() {
  visitorListModal?.classList.remove("is-visible");
}

function renderVisitorQr(payload) {
  if (!visitorQrCode) return;
  const size = 29;
  const matrix = Array.from({ length: size }, () => Array(size).fill(false));
  const addFinder = (startX, startY) => {
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        matrix[startY + y][startX + x] = x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4);
      }
    }
  };
  addFinder(0, 0);
  addFinder(size - 7, 0);
  addFinder(0, size - 7);
  let seed = [...payload].reduce((total, char) => total + char.charCodeAt(0), 0) || 97;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const inFinder = (x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8);
      if (!inFinder) {
        seed = (seed * 9301 + 49297) % 233280;
        matrix[y][x] = seed / 233280 > .52;
      }
    }
  }
  visitorQrCode.innerHTML = matrix.flat().map((on) => `<span class="${on ? "is-on" : ""}"></span>`).join("");
}

function openVisitorQr(index) {
  const row = visitorReservations[index];
  if (!row || !visitorQrModal) return;
  currentVisitorQrPayload = `${row.name}|${row.phone}|${row.date}|${row.start}-${row.end}|${row.floor}`;
  renderVisitorQr(currentVisitorQrPayload);
  visitorQrModal.classList.add("is-visible");
}

function closeVisitorQr() {
  visitorQrModal?.classList.remove("is-visible");
}

function renderRemoteDoors() {
  if (!remoteDoorRows) return;
  remoteDoorRows.innerHTML = remoteDoorPoints.map((name, index) => `
    <tr>
      <td><input type="checkbox" data-remote-door-index="${index}" ${selectedRemoteDoors.has(index) ? "checked" : ""} aria-label="選取 ${escapeHtml(name)}" /></td>
      <td>${escapeHtml(name)}</td>
    </tr>
  `).join("");
  if (remoteDoorAll) {
    remoteDoorAll.checked = selectedRemoteDoors.size === remoteDoorPoints.length;
    remoteDoorAll.indeterminate = selectedRemoteDoors.size > 0 && selectedRemoteDoors.size < remoteDoorPoints.length;
  }
  if (remoteDoorExecuteBtn) remoteDoorExecuteBtn.disabled = selectedRemoteDoors.size === 0;
}

function openRemoteDoorConfirm() {
  if (!selectedRemoteDoors.size) {
    showPortalToast("請先選擇門控點位");
    return;
  }
  const names = [...selectedRemoteDoors].sort((a, b) => a - b).map((index) => remoteDoorPoints[index]);
  remoteDoorConfirmText.textContent = `確定要對以下點位執行遠端開門嗎？ 【${names.join(", ")}】`;
  remoteDoorConfirmModal?.classList.add("is-visible");
}

function closeRemoteDoorConfirm() {
  remoteDoorConfirmModal?.classList.remove("is-visible");
}

function renderDoorDevices() {
  if (!doorSystemRows) return;
  doorSystemRows.innerHTML = doorDevices.map((device, index) => `
    <tr>
      <td>${escapeHtml(device.id)}</td>
      <td><input value="${escapeHtml(device.name)}" data-door-device-field="name" data-door-device-index="${index}" aria-label="設備名稱" /></td>
      <td><input value="${escapeHtml(device.ip)}" data-door-device-field="ip" data-door-device-index="${index}" aria-label="IP" /></td>
      <td><input value="${escapeHtml(device.port)}" data-door-device-field="port" data-door-device-index="${index}" aria-label="Port" /></td>
      <td><div class="door-system-actions"><button type="button" data-door-readers="${index}">門禁卡機</button><button class="is-parameter" type="button" data-door-params="${index}">參數設定</button><button type="button" data-door-calibrate="${index}">卡機校時</button></div></td>
    </tr>
  `).join("");
}

function renderDoorReaders() {
  if (!doorReadersRows) return;
  const floorOptions = ["B3F", "B2F", "B1F", "1F", "2F", "3F", "4F", "5F"];
  doorReadersRows.innerHTML = doorReaders.map((reader, index) => `
    <tr>
      <td>${reader.primary}</td>
      <td>${reader.secondary}</td>
      <td><input value="${escapeHtml(reader.name)}" data-door-reader-name="${index}" aria-label="卡機名稱" /></td>
      <td><select data-door-reader-floor="${index}" aria-label="樓層">${floorOptions.map((floor) => `<option ${floor === reader.floor ? "selected" : ""}>${floor}</option>`).join("")}</select></td>
      <td><select data-door-reader-enabled="${index}" aria-label="使用中"><option value="true" ${reader.enabled ? "selected" : ""}>是</option><option value="false" ${reader.enabled ? "" : "selected"}>否</option></select></td>
    </tr>
  `).join("");
}

function openDoorConfirm(action, index = null) {
  doorConfirmAction = action;
  activeDoorDeviceIndex = Number.isInteger(index) ? index : activeDoorDeviceIndex;
  const device = doorDevices[activeDoorDeviceIndex];
  const messages = {
    update: "確定更新所有門禁?",
    calibrateAll: "確定校時所有門禁?",
    calibrateOne: `確定校時「${device?.name || "門禁設備"}」?`,
  };
  doorConfirmText.textContent = messages[action];
  doorConfirmModal?.classList.add("is-visible");
}

function openDoorAddModal() {
  if (!doorAddForm) return;
  doorAddForm.reset();
  doorPortInput.value = "3195";
  doorAddModal?.classList.add("is-visible");
  window.setTimeout(() => doorNameInput.focus(), 0);
}

function openDoorReadersModal(index) {
  activeDoorDeviceIndex = index;
  renderDoorReaders();
  doorReadersModal?.classList.add("is-visible");
}

function openDoorParamsModal(index) {
  activeDoorDeviceIndex = index;
  const device = doorDevices[index];
  doorParamsTitle.textContent = `設備參數設定 - ${device?.name || "門禁設備"}`;
  doorParamsModal?.classList.add("is-visible");
}

function closeDoorSystemModals() {
  doorConfirmModal?.classList.remove("is-visible");
  doorAddModal?.classList.remove("is-visible");
  doorReadersModal?.classList.remove("is-visible");
  doorParamsModal?.classList.remove("is-visible");
}

function renderElevatorDevices() {
  if (!elevatorRows) return;
  elevatorRows.innerHTML = elevatorDevices.map((device, index) => `
    <tr>
      <td>${escapeHtml(device.id)}</td>
      <td><input value="${escapeHtml(device.name)}" data-elevator-field="name" data-elevator-index="${index}" aria-label="設備名稱" /></td>
      <td><input value="${escapeHtml(device.ip)}" data-elevator-field="ip" data-elevator-index="${index}" aria-label="IP" /></td>
      <td><input value="${escapeHtml(device.port)}" data-elevator-field="port" data-elevator-index="${index}" aria-label="Port" /></td>
      <td><button type="button" data-elevator-floor>樓層</button></td>
    </tr>
  `).join("");
}

function elevatorPositionOptions(selected) {
  return ["B3F", "B2F", "B1F", "1F", "2F", "3F", "4F", "5F"]
    .map((position) => `<option ${position === selected ? "selected" : ""}>${position}</option>`).join("");
}

function renderElevatorFloors() {
  if (!elevatorFloorRows) return;
  elevatorFloorRows.innerHTML = elevatorFloors.map((floor, index) => `
    <tr>
      <td>${floor.id}</td>
      <td><input value="${escapeHtml(floor.name)}" data-elevator-floor-name="${index}" aria-label="樓層名稱" /></td>
      <td><select data-elevator-floor-position="${index}" aria-label="樓層位置">${elevatorPositionOptions(floor.position)}</select></td>
      <td><select data-elevator-floor-enabled="${index}" aria-label="啟用"><option value="true" ${floor.enabled ? "selected" : ""}>是</option><option value="false" ${floor.enabled ? "" : "selected"}>否</option></select></td>
    </tr>
  `).join("");
}

function openElevatorFloorModal() {
  renderElevatorFloors();
  elevatorFloorModal?.classList.add("is-visible");
}

function openElevatorAddModal() {
  if (!elevatorAddForm) return;
  elevatorAddForm.reset();
  elevatorPortInput.value = "4660";
  elevatorHardwareInput.value = "1";
  elevatorAddModal?.classList.add("is-visible");
  window.setTimeout(() => elevatorNameInput.focus(), 0);
}

function closeElevatorModals() {
  elevatorFloorModal?.classList.remove("is-visible");
  elevatorAddModal?.classList.remove("is-visible");
  elevatorUpdateModal?.classList.remove("is-visible");
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

function openIvsEditModal(row) {
  if (!ivsEditModal || !row) return;

  const groupIndex = Number(row.dataset.ivsGroup);
  const rowIndex = Number(row.dataset.ivsRow);
  const rowData = ivsDetectionGroups[groupIndex]?.rows[rowIndex];
  if (!rowData) return;

  editingIvsRef = { groupIndex, rowIndex };
  ivsCameraInput.value = rowData[1];
  ivsAddressInput.value = rowData[2];
  ivsAssistCameraInput.value = rowData[3];
  ivsAssistAddressInput.value = rowData[4];
  ivsThresholdInput.value = rowData[5];
  ivsEditModal.classList.add("is-visible");
  ivsEditModal.setAttribute("aria-hidden", "false");
  ivsCameraInput.focus();
}

function closeIvsEditModal() {
  if (!ivsEditModal) return;

  ivsEditModal.classList.remove("is-visible");
  ivsEditModal.setAttribute("aria-hidden", "true");
  editingIvsRef = null;
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

workdayGroupButtons.forEach((button) => {
  button.addEventListener("click", () => selectWorkdayGroup(Number(button.dataset.workdayGroup)));
});

cameraRegistryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#cameraNameInput")?.value.trim();
  const host = document.querySelector("#cameraHostInput")?.value.trim();
  const port = document.querySelector("#cameraPortInput")?.value.trim();
  const path = document.querySelector("#cameraPathInput")?.value.trim();
  const account = document.querySelector("#cameraAccountInput")?.value.trim();
  if (!name || !host || !port || !path) return;
  registeredCameras.push({
    name,
    host,
    port,
    path,
    account,
    code: `CAM-${String(registeredCameras.length + 1).padStart(4, "0")}`,
  });
  renderRegisteredCameras();
  cameraRegistryForm.reset();
});

backupFileInput?.addEventListener("change", () => {
  const file = backupFileInput.files?.[0];
  if (backupFileName) backupFileName.textContent = file?.name || "尚未選擇檔案";
  if (backupImportBtn) backupImportBtn.disabled = !file;
});

logoutBtn?.addEventListener("click", setLoggedOut);

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-home]")) {
    showView("dashboard");
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton && !viewButton.classList.contains("nav-item")) {
    showView(viewButton.dataset.view);
  }

  if (event.target.closest("#accessGroupSelect")) {
    setAccessGroupMenu(!accessGroupMenu?.classList.contains("is-open"));
  } else if (!event.target.closest("#accessGroupMenu")) {
    setAccessGroupMenu(false);
  }

  if (event.target.closest("[data-camera-refresh]")) {
    refreshCameraTime();
    showPortalToast("攝影機資料已更新");
  }

  const cameraTool = event.target.closest("[data-camera-tool]");
  if (cameraTool) {
    showPortalToast(cameraTool.dataset.cameraTool === "baseline" ? "已建立目前畫面的物件基準" : "已清除目前物件標記");
  }

  if (event.target.closest("#backupExportBtn")) exportExhibitBackup();
  if (event.target.closest("#backupImportBtn") && backupFileInput?.files?.length) {
    showPortalToast(`已驗證備份檔：${backupFileInput.files[0].name}`);
  }

  const groupOption = event.target.closest("[data-group-index]");
  if (groupOption) {
    selectedAccessGroup = Number(groupOption.dataset.groupIndex);
    renderAccessGroups();
    setAccessGroupMenu(false);
  }

  const groupAction = event.target.closest("[data-group-action]");
  if (groupAction && (accessGroups.length || groupAction.dataset.groupAction === "add")) {
    openAccessGroupModal(groupAction.dataset.groupAction);
  }

  if (event.target.closest("[data-group-modal-close]") || event.target === accessGroupModal) {
    closeAccessGroupModal();
  }

  if (event.target.closest("#personnelDownloadBtn")) {
    showPortalToast("權限下載指令已派送！");
  }

  if (event.target.closest("#remoteDoorExecuteBtn")) openRemoteDoorConfirm();
  if (event.target.closest("[data-remote-door-close]") || event.target === remoteDoorConfirmModal) closeRemoteDoorConfirm();
  if (event.target.closest("#remoteDoorConfirmBtn")) {
    const count = selectedRemoteDoors.size;
    closeRemoteDoorConfirm();
    showPortalToast(`已向 ${count} 個門控點位送出遠端開門指令`);
  }

  if (event.target.closest("#doorCalibrateAllBtn")) openDoorConfirm("calibrateAll");
  if (event.target.closest("#doorUpdateAllBtn")) openDoorConfirm("update");
  if (event.target.closest("#doorAddBtn")) openDoorAddModal();
  const doorReadersButton = event.target.closest("[data-door-readers]");
  if (doorReadersButton) openDoorReadersModal(Number(doorReadersButton.dataset.doorReaders));
  const doorParamsButton = event.target.closest("[data-door-params]");
  if (doorParamsButton) openDoorParamsModal(Number(doorParamsButton.dataset.doorParams));
  const doorCalibrateButton = event.target.closest("[data-door-calibrate]");
  if (doorCalibrateButton) openDoorConfirm("calibrateOne", Number(doorCalibrateButton.dataset.doorCalibrate));
  if (event.target.closest("[data-door-confirm-close]") || event.target === doorConfirmModal) doorConfirmModal?.classList.remove("is-visible");
  if (event.target.closest("[data-door-add-close]") || event.target === doorAddModal) doorAddModal?.classList.remove("is-visible");
  if (event.target.closest("[data-door-readers-close]") || event.target === doorReadersModal) doorReadersModal?.classList.remove("is-visible");
  if (event.target.closest("[data-door-params-close]") || event.target === doorParamsModal) doorParamsModal?.classList.remove("is-visible");
  if (event.target.closest("#doorConfirmSubmitBtn")) {
    doorConfirmModal?.classList.remove("is-visible");
    showPortalToast(doorConfirmAction === "update" ? "所有門禁更新指令已送出" : "門禁校時指令已送出");
  }
  const doorStepper = event.target.closest("[data-door-step]");
  if (doorStepper) {
    const input = doorStepper.dataset.doorStep === "anti" ? doorAntiDelay : doorErrorCount;
    const nextValue = Math.max(0, Number(input.value) + Number(doorStepper.dataset.stepDelta));
    input.value = String(nextValue);
  }

  if (event.target.closest("[data-elevator-floor]")) openElevatorFloorModal();
  if (event.target.closest("#elevatorAddBtn")) openElevatorAddModal();
  if (event.target.closest("#elevatorUpdateAllBtn")) elevatorUpdateModal?.classList.add("is-visible");
  if (event.target.closest("[data-elevator-floor-close]") || event.target === elevatorFloorModal) elevatorFloorModal?.classList.remove("is-visible");
  if (event.target.closest("[data-elevator-add-close]") || event.target === elevatorAddModal) elevatorAddModal?.classList.remove("is-visible");
  if (event.target.closest("[data-elevator-update-close]") || event.target === elevatorUpdateModal) elevatorUpdateModal?.classList.remove("is-visible");
  if (event.target.closest("#elevatorFloorResetBtn")) {
    elevatorFloors = defaultElevatorFloors.map((floor) => ({ ...floor }));
    renderElevatorFloors();
    showPortalToast("樓層設定已恢復初始值");
  }
  if (event.target.closest("#elevatorUpdateConfirmBtn")) {
    elevatorUpdateModal?.classList.remove("is-visible");
    showPortalToast("所有電梯更新指令已送出");
  }

  if (event.target.closest("#visitorListAddBtn")) openVisitorListModal();
  if (event.target.closest("#visitorListSearchBtn")) renderVisitorReservations();
  if (event.target.closest("#visitorListResetBtn")) {
    visitorListNameSearch.value = "";
    visitorListPhoneSearch.value = "";
    visitorListDateSearch.value = "";
    renderVisitorReservations();
  }
  if (event.target.closest("#visitorListExportBtn")) {
    const rows = getFilteredVisitorReservations().map(({ row }) => [row.name, row.phone, row.company, row.floor, row.date, formatVisitorTime(row.start), formatVisitorTime(row.end), row.status]);
    downloadExcel([["姓名", "手機號", "拜訪公司/單位", "樓層", "拜訪日期", "拜訪時間(起)", "拜訪時間(迄)", "狀態"], ...rows], "visitor-bookings.xlsx", "訪客預約清單");
  }

  const visitorEdit = event.target.closest("[data-visitor-edit]");
  if (visitorEdit) openVisitorListModal(Number(visitorEdit.dataset.visitorEdit));

  const visitorDelete = event.target.closest("[data-visitor-delete]");
  if (visitorDelete) {
    visitorReservations.splice(Number(visitorDelete.dataset.visitorDelete), 1);
    renderVisitorReservations();
    showPortalToast("訪客預約已刪除");
  }

  const visitorQr = event.target.closest("[data-visitor-qr]");
  if (visitorQr) openVisitorQr(Number(visitorQr.dataset.visitorQr));

  if (event.target.closest("[data-visitor-list-close]") || event.target === visitorListModal) closeVisitorListModal();
  if (event.target.closest("[data-visitor-qr-close]") || event.target === visitorQrModal) closeVisitorQr();
  if (event.target.closest("[data-copy-visitor-qr]")) {
    navigator.clipboard?.writeText(currentVisitorQrPayload);
    showPortalToast("QR Code 資料已複製");
  }
  if (event.target.closest("[data-print-visitor-qr]")) window.print();

  if (event.target.closest("#reservationGroupSelect")) {
    reservationGroupMenu?.classList.toggle("is-open");
  } else if (!event.target.closest("#reservationGroupMenu")) {
    reservationGroupMenu?.classList.remove("is-open");
  }

  const reservationGroupOption = event.target.closest("[data-reservation-group-index]");
  if (reservationGroupOption) {
    reservationGroupIndex = Number(reservationGroupOption.dataset.reservationGroupIndex);
    reservationGroupMenu?.classList.remove("is-open");
    renderReservationGroups();
  }

  const reservationGroupAction = event.target.closest("[data-reservation-group-action]");
  if (reservationGroupAction && !reservationGroupAction.disabled) {
    const action = reservationGroupAction.dataset.reservationGroupAction;
    if (action === "delete") {
      reservationGroups.splice(reservationGroupIndex, 1);
      reservationGroupIndex = -1;
      renderReservationGroups();
      showPortalToast("權限群組已刪除");
    } else {
      openReservationGroupModal(action);
    }
  }

  const reservationFloor = event.target.closest("[data-reservation-floor]");
  if (reservationFloor) {
    const floor = reservationFloor.dataset.reservationFloor;
    if (reservationSelectedFloors.has(floor)) reservationSelectedFloors.delete(floor);
    else reservationSelectedFloors.add(floor);
    renderReservationAccessOptions();
  }

  const reservationTime = event.target.closest("[data-reservation-time]");
  if (reservationTime) {
    reservationSelectedTime = reservationTime.dataset.reservationTime;
    document.querySelectorAll("[data-reservation-time]").forEach((button) => button.classList.toggle("is-selected", button === reservationTime));
  }

  if (event.target.closest("[data-reservation-group-close]") || event.target === reservationGroupModal) {
    closeReservationGroupModal();
  }

  if (event.target.closest("[data-reservation-prev]")) setReservationStep(1);
  if (event.target.closest("[data-reservation-submit]")) showPortalToast("預約發卡資料已送出！");

  const datetimeButton = event.target.closest("[data-visitor-datetime]");
  if (datetimeButton) {
    openVisitorPicker(datetimeButton.dataset.visitorDatetime, datetimeButton);
  }

  const pickerShift = event.target.closest("[data-picker-shift]");
  if (pickerShift) {
    const shift = Number(pickerShift.dataset.pickerShift);
    visitorPickerMonth += shift;
    while (visitorPickerMonth < 0) {
      visitorPickerMonth += 12;
      visitorPickerYear -= 1;
    }
    while (visitorPickerMonth > 11) {
      visitorPickerMonth -= 12;
      visitorPickerYear += 1;
    }
    renderVisitorPicker();
  }

  const visitorDate = event.target.closest("[data-visitor-date]");
  if (visitorDate) {
    visitorSelectedDate = visitorDate.dataset.visitorDate;
    const date = new Date(`${visitorSelectedDate}T00:00:00`);
    visitorPickerYear = date.getFullYear();
    visitorPickerMonth = date.getMonth();
    renderVisitorPicker();
  }

  if (event.target.closest("[data-picker-today]")) {
    const today = new Date();
    visitorSelectedDate = formatCalendarDate(today);
    visitorPickerYear = today.getFullYear();
    visitorPickerMonth = today.getMonth();
    visitorPickerTime.value = `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
    renderVisitorPicker();
  }

  if (event.target.closest("[data-picker-confirm]")) {
    const value = `${visitorSelectedDate} ${visitorPickerTime.value || "09:00"}`;
    visitorBookingTimes[visitorPickerTarget] = value;
    const targetButton = document.querySelector(`[data-visitor-datetime="${visitorPickerTarget}"]`);
    targetButton?.classList.add("has-value");
    if (visitorPickerTarget === "start") visitorStartText.textContent = value;
    else visitorEndText.textContent = value;
    closeVisitorPicker();
  } else if (visitorDatePicker?.classList.contains("is-visible") && !event.target.closest("#visitorDatePicker") && !datetimeButton) {
    closeVisitorPicker();
  }

  const roomButton = event.target.closest("[data-room]");
  if (roomButton) {
    setRoomReading(roomButton.dataset.room);
  }

  if (event.target.closest("[data-access-next]")) {
    setAccessStep(accessStep + 1);
  }

  if (event.target.closest("[data-access-prev]")) {
    setAccessStep(accessStep - 1);
  }

  const floorButton = event.target.closest("[data-floor]");
  if (floorButton) {
    const floor = floorButton.dataset.floor;
    if (selectedAccessFloors.has(floor)) {
      selectedAccessFloors.delete(floor);
      expandedAccessFloors.delete(floor);
    } else {
      selectedAccessFloors.add(floor);
    }
    floorButton.classList.toggle("is-selected", selectedAccessFloors.has(floor));
    renderAccessFloorTree();
  }

  const floorExpandButton = event.target.closest("[data-floor-expand]");
  if (floorExpandButton) {
    const floor = floorExpandButton.dataset.floorExpand;
    if (expandedAccessFloors.has(floor)) expandedAccessFloors.delete(floor);
    else expandedAccessFloors.add(floor);
    renderAccessFloorTree();
  }

  const transferButton = event.target.closest("[data-people-transfer]");
  if (transferButton) {
    transferAccessPeople(transferButton.dataset.peopleTransfer);
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

  const ivsToggle = event.target.closest("[data-ivs-toggle]");
  if (ivsToggle) {
    const row = ivsToggle.closest("[data-ivs-group][data-ivs-row]");
    const groupIndex = Number(row?.dataset.ivsGroup);
    const rowIndex = Number(row?.dataset.ivsRow);
    const rowData = ivsDetectionGroups[groupIndex]?.rows[rowIndex];
    if (rowData) {
      rowData[0] = rowData[0] === "on" ? "off" : "on";
      renderIvsSensors();
      showAlarmSettingSuccess(rowData[0] === "on" ? "IVS 警報已啟動" : "IVS 警報已關閉");
    }
  }

  const ivsEditButton = event.target.closest("[data-ivs-edit]");
  if (ivsEditButton) {
    openIvsEditModal(ivsEditButton.closest("[data-ivs-group][data-ivs-row]"));
  }

  if (event.target === ivsEditModal || event.target.closest(".ivs-edit-modal .sensor-modal-close")) {
    closeIvsEditModal();
  }

  if (event.target.closest("#alarmSettingBtn") || event.target.closest("[data-sensor-alarm-setting]")) {
    openAlarmSettingModal();
  }

  if (event.target.closest("[data-account-all]")) {
    accountSearchInput.value = "";
    accountRoleFilter.value = "全部角色";
    accountStatusFilter.value = "全部狀態";
    renderAccounts();
  }

  if (event.target.closest("[data-account-search]")) {
    renderAccounts();
  }

  if (event.target.closest("[data-account-add]")) {
    openAccountModal();
  }

  const accountEdit = event.target.closest("[data-account-edit]");
  if (accountEdit) {
    openAccountModal(Number(accountEdit.dataset.accountEdit));
  }

  const accountReset = event.target.closest("[data-account-reset]");
  if (accountReset) {
    const admin = accountAdmins[Number(accountReset.dataset.accountReset)];
    if (admin) {
      admin.password = "Temp@2026";
      renderAccounts();
      showAccountSuccess(`${admin.name} 密碼已重設為 Temp@2026`);
    }
  }

  const accountDelete = event.target.closest("[data-account-delete]");
  if (accountDelete) {
    const index = Number(accountDelete.dataset.accountDelete);
    const admin = accountAdmins[index];
    if (admin && window.confirm(`確定刪除 ${admin.name}？`)) {
      accountAdmins.splice(index, 1);
      renderAccounts();
      showAccountSuccess("管理人員已刪除");
    }
  }

  if (event.target === accountModal || event.target.closest(".account-modal-close") || event.target.closest("[data-account-cancel]")) {
    closeAccountModal();
  }

  if (event.target === alarmSettingModal || event.target.closest(".alarm-setting-close")) {
    closeAlarmSettingModal();
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
    exportCalendarExcel();
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

  if (event.target.closest("#historySearchBtn")) {
    historyHasSearched = true;
    renderAccessHistory();
  }

  if (event.target.closest("#historyExportBtn")) {
    exportAccessHistoryExcel();
  }

  if (event.target.closest("#elevatorHistorySearchBtn")) {
    if (elevatorHistoryRows) elevatorHistoryRows.innerHTML = `<tr><td colspan="6">暫無資料</td></tr>`;
  }

  if (event.target.closest("#elevatorHistoryExportBtn")) {
    downloadExcel([["事件地點", "卡片號碼", "姓名", "事件", "進出", "日期時間"]], "elevator-history.xlsx", "電梯歷史列表");
  }

  const realtimeExport = event.target.closest("[data-realtime-export]");
  if (realtimeExport) exportRealtimeLogs(realtimeExport.dataset.realtimeExport);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setAccessGroupMenu(false);
    closeAccessGroupModal();
    closeVisitorPicker();
    closeReservationGroupModal();
    closeVisitorListModal();
    closeVisitorQr();
    closeRemoteDoorConfirm();
    closeDoorSystemModals();
    closeElevatorModals();
  }
  if (event.key === "Escape" && sensorEditModal?.classList.contains("is-visible")) {
    closeSensorEditModal();
  }
  if (event.key === "Escape" && ivsEditModal?.classList.contains("is-visible")) {
    closeIvsEditModal();
  }
  if (event.key === "Escape" && calendarModal?.classList.contains("is-visible")) {
    closeCalendarModal();
  }
  if (event.key === "Escape" && alarmSettingModal?.classList.contains("is-visible")) {
    closeAlarmSettingModal();
  }
  if (event.key === "Escape" && accountModal?.classList.contains("is-visible")) {
    closeAccountModal();
  }
});

document.addEventListener("change", (event) => {
  const remoteDoorCheckbox = event.target.closest("[data-remote-door-index]");
  if (remoteDoorCheckbox) {
    const index = Number(remoteDoorCheckbox.dataset.remoteDoorIndex);
    if (remoteDoorCheckbox.checked) selectedRemoteDoors.add(index);
    else selectedRemoteDoors.delete(index);
    renderRemoteDoors();
  }

  if (event.target === remoteDoorAll) {
    selectedRemoteDoors.clear();
    if (remoteDoorAll.checked) remoteDoorPoints.forEach((_, index) => selectedRemoteDoors.add(index));
    renderRemoteDoors();
  }

  const elevatorField = event.target.closest("[data-elevator-field]");
  if (elevatorField) {
    const device = elevatorDevices[Number(elevatorField.dataset.elevatorIndex)];
    if (device) device[elevatorField.dataset.elevatorField] = elevatorField.value.trim();
  }

  const doorDeviceField = event.target.closest("[data-door-device-field]");
  if (doorDeviceField) {
    const device = doorDevices[Number(doorDeviceField.dataset.doorDeviceIndex)];
    if (device) device[doorDeviceField.dataset.doorDeviceField] = doorDeviceField.value.trim();
  }

  if (event.target === doorModelInput) {
    const suggestedCount = doorModelInput.value.split("-").at(-1);
    if (["4", "8", "16"].includes(suggestedCount)) doorCountInput.value = suggestedCount;
  }

  const personCheckbox = event.target.closest("[data-person-check]");
  if (personCheckbox) {
    const targetSet = personCheckbox.dataset.personCheck === "assigned" ? checkedAssignedPeople : checkedAccessPeople;
    if (personCheckbox.checked) targetSet.add(personCheckbox.dataset.card);
    else targetSet.delete(personCheckbox.dataset.card);
    renderAccessPeople();
  }

  const doorCheckbox = event.target.closest("[data-door-key]");
  if (doorCheckbox) {
    if (doorCheckbox.checked) selectedAccessDoors.add(doorCheckbox.dataset.doorKey);
    else selectedAccessDoors.delete(doorCheckbox.dataset.doorKey);
  }

  if (event.target.matches("[name='zoneMode']")) {
    setDownloadZoneMode(deviceMode?.checked);
  }

  if (event.target.matches("#allPermissionGroups")) {
    document.querySelectorAll("[name='permissionGroup']").forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
  }
});

alarmSettingModal?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  alarmSettingModal.querySelectorAll("[name^='phone']").forEach((input, index) => {
    alarmSettingPhones[index] = input.value.trim();
  });
  alarmSettingModal.querySelectorAll("[name^='email']").forEach((input, index) => {
    alarmSettingEmails[index] = input.value.trim();
  });
  alarmSettingModal.querySelectorAll("[name^='message']").forEach((input, index) => {
    alarmSettingMessages[index] = input.value.trim();
  });
  closeAlarmSettingModal();
  showAlarmSettingSuccess("簡訊警報設定已儲存");
});

accountSearchInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderAccounts();
  }
});

accountRoleFilter?.addEventListener("change", renderAccounts);
accountStatusFilter?.addEventListener("change", renderAccounts);

accountModal?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = accountNameInput.value.trim();
  const username = accountUsernameInput.value.trim();
  const password = accountPasswordInput.value;
  const confirmPassword = accountConfirmPasswordInput.value;
  const role = accountRoleInput.value;

  if (password !== confirmPassword) {
    accountModalError.textContent = "密碼與確認密碼不一致";
    return;
  }

  const duplicate = accountAdmins.some((admin, index) => (
    admin.username === username && index !== editingAccountIndex
  ));
  if (duplicate) {
    accountModalError.textContent = "帳號已存在";
    return;
  }

  const admin = {
    name,
    username,
    password,
    role,
    scope: getAccountScope(role),
    status: "啟用",
    lastLogin: "尚未登入",
  };

  if (Number.isInteger(editingAccountIndex)) {
    accountAdmins[editingAccountIndex] = {
      ...accountAdmins[editingAccountIndex],
      ...admin,
      lastLogin: accountAdmins[editingAccountIndex].lastLogin,
    };
    showAccountSuccess("管理人員資料已修改");
  } else {
    accountAdmins.push(admin);
    showAccountSuccess("管理人員已新增");
  }

  closeAccountModal();
  showView("loginAdmin");
  renderAccounts();
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

ivsEditModal?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!editingIvsRef) return;

  const rowData = ivsDetectionGroups[editingIvsRef.groupIndex]?.rows[editingIvsRef.rowIndex];
  if (!rowData) return;

  rowData[1] = ivsCameraInput.value.trim();
  rowData[2] = ivsAddressInput.value.trim();
  rowData[3] = ivsAssistCameraInput.value.trim();
  rowData[4] = ivsAssistAddressInput.value.trim();
  rowData[5] = ivsThresholdInput.value.trim();
  closeIvsEditModal();
  renderIvsSensors();
  showAlarmSettingSuccess("IVS 防盜設定已更新");
});

sensorHeaderCheckbox?.addEventListener("change", (event) => {
  document.querySelectorAll("#sensorView .sensor-table tbody input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = event.target.checked;
  });
});

[alarmType, floorFilter, dateFilter, timeFilter].forEach((filter) => {
  filter?.addEventListener("change", renderAlarms);
});

historyEventFilter?.addEventListener("change", renderAccessHistory);
historySearchInput?.addEventListener("input", renderAccessHistory);
accessNameSearch?.addEventListener("input", renderAccessPeople);
accessPhoneSearch?.addEventListener("input", renderAccessPeople);
document.querySelector("#accessSearchBtn")?.addEventListener("click", renderAccessPeople);
accessSelectAll?.addEventListener("change", () => {
  getFilteredAccessPeople().forEach((person) => {
    if (accessSelectAll.checked) checkedAccessPeople.add(person.card);
    else checkedAccessPeople.delete(person.card);
  });
  renderAccessPeople();
});
selectedPeopleAll?.addEventListener("change", () => {
  accessPeople.filter((person) => assignedAccessPeople.has(person.card)).forEach((person) => {
    if (selectedPeopleAll.checked) checkedAssignedPeople.add(person.card);
    else checkedAssignedPeople.delete(person.card);
  });
  renderAccessPeople();
});

doorAddForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextId = String(114 + doorDevices.length - 4).padStart(10, "0");
  doorDevices.push({
    id: nextId,
    name: doorNameInput.value.trim(),
    ip: doorIpInput.value.trim(),
    port: doorPortInput.value.trim(),
    model: doorModelInput.value,
    doors: doorCountInput.value,
    floor: doorFloorInput.value,
  });
  doorAddModal?.classList.remove("is-visible");
  renderDoorDevices();
  showPortalToast("門禁設備已新增");
});

doorReadersForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  doorReaders.forEach((reader, index) => {
    reader.name = document.querySelector(`[data-door-reader-name="${index}"]`)?.value.trim() || reader.name;
    reader.floor = document.querySelector(`[data-door-reader-floor="${index}"]`)?.value || reader.floor;
    reader.enabled = document.querySelector(`[data-door-reader-enabled="${index}"]`)?.value === "true";
  });
  doorReadersModal?.classList.remove("is-visible");
  showPortalToast("門禁卡機設定已儲存");
});

doorParamsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  doorParamsModal?.classList.remove("is-visible");
  showPortalToast("設備參數已儲存並派送");
});

elevatorFloorForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  elevatorFloors = elevatorFloors.map((floor, index) => ({
    ...floor,
    name: document.querySelector(`[data-elevator-floor-name="${index}"]`)?.value.trim() || floor.name,
    position: document.querySelector(`[data-elevator-floor-position="${index}"]`)?.value || floor.position,
    enabled: document.querySelector(`[data-elevator-floor-enabled="${index}"]`)?.value === "true",
  }));
  elevatorFloorModal?.classList.remove("is-visible");
  showPortalToast("電梯樓層設定已儲存");
});

elevatorAddForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const sequence = String(82 + elevatorDevices.length).padStart(10, "0");
  elevatorDevices.push({
    id: sequence,
    name: elevatorNameInput.value.trim(),
    ip: elevatorIpInput.value.trim(),
    port: elevatorPortInput.value.trim(),
    node: elevatorNodeInput.value,
    hardware: elevatorHardwareInput.value.trim(),
  });
  elevatorAddModal?.classList.remove("is-visible");
  renderElevatorDevices();
  showPortalToast("電梯設備已新增");
});

visitorBookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!visitorBookingTimes.start || !visitorBookingTimes.end) {
    showPortalToast("請選擇拜訪開始與結束時間");
    return;
  }
  if (new Date(visitorBookingTimes.end.replace(" ", "T")) <= new Date(visitorBookingTimes.start.replace(" ", "T"))) {
    showPortalToast("結束時間必須晚於開始時間");
    return;
  }
  showPortalToast("訪客預約已建立！");
});

reservationVisitorForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const start = document.querySelector("#reservationStartTime")?.value;
  const end = document.querySelector("#reservationEndTime")?.value;
  const [startHour = 0, startMinute = 0] = (start || "").split(":").map(Number);
  let [endHour = 0, endMinute = 0] = (end || "").split(":").map(Number);

  // The source UI presents 00:xx as "上午 12:xx" and treats it as noon in this workflow.
  if (endHour === 0 && startHour > 0 && startHour < 12) endHour = 12;
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  if (start && end && endMinutes <= startMinutes) {
    showPortalToast("拜訪結束時間必須晚於開始時間");
    return;
  }
  setReservationStep(2);
});

reservationGroupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = reservationGroupName.value.trim();
  if (!name) return;
  if (reservationGroupMode === "add") {
    reservationGroups.push(name);
    reservationGroupIndex = reservationGroups.length - 1;
  } else if (reservationGroupIndex >= 0) {
    reservationGroups[reservationGroupIndex] = name;
  }
  renderReservationGroups();
  closeReservationGroupModal();
  showPortalToast("權限群組已儲存");
});

visitorListForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const row = {
    name: visitorListName.value.trim(),
    phone: visitorListPhone.value.trim(),
    company: visitorListCompany.value.trim(),
    floor: visitorListFloor.value,
    date: visitorListDate.value,
    start: visitorListStart.value,
    end: visitorListEnd.value,
    status: visitorListStatus.value,
  };
  if (editingVisitorListIndex === null) visitorReservations.unshift(row);
  else visitorReservations[editingVisitorListIndex] = row;
  closeVisitorListModal();
  renderVisitorReservations();
  showPortalToast("訪客預約已儲存");
});

accessGroupForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (accessGroupMode === "delete") {
    accessGroups.splice(selectedAccessGroup, 1);
    selectedAccessGroup = Math.max(0, Math.min(selectedAccessGroup, accessGroups.length - 1));
  } else {
    const groupName = accessGroupNameInput.value.trim();
    if (!groupName) {
      accessGroupNameInput.focus();
      return;
    }

    if (accessGroupMode === "add") {
      accessGroups.push(groupName);
      selectedAccessGroup = accessGroups.length - 1;
    } else if (accessGroups[selectedAccessGroup]) {
      accessGroups[selectedAccessGroup] = groupName;
    }
  }

  renderAccessGroups();
  closeAccessGroupModal();
});

const exportBtn = document.querySelector("#exportBtn");
if (exportBtn) {
  exportBtn.addEventListener("click", exportExcel);
}

renderAlarms();
renderAccessPeople();
renderAccessFloorTree();
renderAccessGroups();
renderVisitorPicker();
renderReservationGroups();
renderReservationAccessOptions();
renderVisitorReservations();
renderRemoteDoors();
renderDoorDevices();
renderDoorReaders();
renderElevatorDevices();
renderElevatorFloors();
renderCalendar();
renderAccessHistory();
renderRealtimeLogs();
renderRegisteredCameras();
refreshCameraTime();
renderSensors();
renderAccounts();
