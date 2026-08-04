/****************************************************
 * EACC Recruitment / Work For Us Router
 * Spreadsheet name: Recruitment EACC
 * Spreadsheet ID: 1G-RlVisVz06DLugqOiV3IfY10jNXo7ZpPiyHwblFxoo
 * Sheet tab: Recruitment
 *
 * What it does:
 * - Receives the Work for Us form as JSON from recruitment.html.
 * - Creates the Recruitment sheet headers if the sheet is empty.
 * - Uploads the applicant CV to the selected Google Drive folder.
 * - Saves one spreadsheet row with the same application fields.
 * - Stores the CV as a clickable Drive URL in the CV Link column.
 ****************************************************/

const SPREADSHEET_ID = "1G-RlVisVz06DLugqOiV3IfY10jNXo7ZpPiyHwblFxoo";
const RECRUITMENT_SHEET_NAME = "Recruitment";
const DEBUG_SHEET_NAME = "Recruitment Debug Log";
const CV_FOLDER_ID = "1UgjYvpjYdxMWQzY81M1_hNCzCnhO_M7w";

const HEADERS = [
  "Timestamp",
  "Form Type",
  "Full Name",
  "Mobile Number",
  "Email",
  "City of Residence",
  "Department of Interest",
  "Other Department",
  "Highest Qualification",
  "Field of Study",
  "Professional Certifications",
  "Years of Experience",
  "Current Employer",
  "Areas of Expertise",
  "Other Expertise",
  "Employment Preference",
  "Availability",
  "Why EACC",
  "Consent Confirmation",
  "CV File Name",
  "CV Link",
  "Page"
];

function doGet() {
  return jsonResponse_({
    success: true,
    message: "EACC recruitment router is running."
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const payload = parsePayload_(e);
    const sheet = getRecruitmentSheet_();
    const cv = saveCvToDrive_(payload);

    sheet.appendRow([
      new Date(),
      clean_(payload.formType || payload["Form Type"] || "Recruitment Application"),
      clean_(payload["Full Name"]),
      clean_(payload["Mobile Number"]),
      clean_(payload.email || payload.Email),
      clean_(payload["City of Residence"]),
      clean_(payload["Department of Interest"]),
      clean_(payload["Other Department"]),
      clean_(payload["Highest Qualification"]),
      clean_(payload["Field of Study"]),
      clean_(payload["Professional Certifications"]),
      clean_(payload["Years of Experience"]),
      clean_(payload["Current Employer"]),
      clean_(payload["Areas of Expertise"]),
      clean_(payload["Other Expertise"]),
      clean_(payload["Employment Preference"]),
      clean_(payload.Availability),
      clean_(payload["Why EACC"]),
      clean_(payload["Consent Confirmation"]),
      cv.fileName,
      cv.url,
      clean_(payload.page || payload.Page || "recruitment.html")
    ]);

    return jsonResponse_({
      success: true,
      message: "Recruitment application saved successfully.",
      cvUrl: cv.url
    });
  } catch (error) {
    return jsonResponse_({
      success: false,
      message: "Could not save the recruitment application.",
      error: String(error)
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (error) {
      // Ignore lock release errors.
    }
  }
}

function setupRecruitmentSheet() {
  getRecruitmentSheet_();
  return "Recruitment sheet is ready.";
}


function getDebugSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(DEBUG_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(DEBUG_SHEET_NAME);
  }

  const headers = ["Timestamp", "Request ID", "Stage", "Full Name", "Email", "Payload Keys", "Details"];
  const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasHeaders = existing.some(function (cell) {
    return String(cell || "").trim() !== "";
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#7a1f1f")
      .setFontColor("#ffffff")
      .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function logDebug_(requestId, stage, payload, details) {
  try {
    const sheet = getDebugSheet_();
    sheet.appendRow([
      new Date(),
      requestId || "",
      stage || "",
      clean_(payload && payload["Full Name"]),
      clean_(payload && (payload.email || payload.Email)),
      Object.keys(payload || {}).join(", "),
      details || ""
    ]);
  } catch (error) {
    // Debug logging must never block the real submission.
  }
}
function getRecruitmentSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(RECRUITMENT_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(RECRUITMENT_SHEET_NAME);
  }

  ensureHeaders_(sheet);
  return sheet;
}

function ensureHeaders_(sheet) {
  const existing = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = existing.some(function (cell) {
    return String(cell || "").trim() !== "";
  });

  if (hasHeaders) return;

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length)
    .setFontWeight("bold")
    .setBackground("#0d1457")
    .setFontColor("#ffffff")
    .setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, HEADERS.length);
}

function saveCvToDrive_(payload) {
  const cvFile = payload.cvFile;
  if (!cvFile || !cvFile.data) {
    return { fileName: "", url: "" };
  }

  const folder = DriveApp.getFolderById(CV_FOLDER_ID);
  const applicantName = fileSafe_(payload["Full Name"] || "Applicant");
  const originalName = fileSafe_(cvFile.name || "CV");
  const extension = getExtension_(originalName);
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd-HHmmss");
  const finalName = applicantName + " - CV - " + timestamp + extension;
  const bytes = Utilities.base64Decode(String(cvFile.data));
  const blob = Utilities.newBlob(bytes, cvFile.type || "application/octet-stream", finalName);
  const file = folder.createFile(blob);

  return {
    fileName: file.getName(),
    url: file.getUrl()
  };
}


function parsePayload_(e) {
  const rawBody = e && e.postData && e.postData.contents ? String(e.postData.contents) : "";
  if (!rawBody) return {};

  try {
    return JSON.parse(rawBody);
  } catch (error) {
    return {};
  }
}

function clean_(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function fileSafe_(value) {
  return clean_(value).replace(/[\\/:*?"<>|]+/g, "-") || "Applicant";
}

function getExtension_(fileName) {
  const match = String(fileName || "").match(/\.[a-z0-9]{1,8}$/i);
  return match ? match[0].toLowerCase() : "";
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}


function testDoPostRecruitment() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        formType: "Recruitment Application",
        "Full Name": "Debug Test Applicant",
        "Mobile Number": "01000000000",
        email: "debug@example.com",
        "City of Residence": "Cairo",
        "Department of Interest": "Academic & Teaching",
        "Other Department": "",
        "Highest Qualification": "Bachelor",
        "Field of Study": "Education",
        "Professional Certifications": "Debug certificate",
        "Years of Experience": "3",
        "Current Employer": "Debug employer",
        "Areas of Expertise": "English Language Teaching, Adult Education",
        "Other Expertise": "",
        "Employment Preference": "Full-Time",
        Availability: "Immediately",
        "Why EACC": "Debug test submission from Apps Script.",
        "Consent Confirmation": "Confirmed",
        page: "recruitment.html",
        cvFile: {
          name: "debug-cv.txt",
          type: "text/plain",
          data: Utilities.base64Encode("Debug CV file")
        }
      })
    }
  };

  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
  return result.getContent();
}


