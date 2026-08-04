/****************************************************
 * EACC Website Forms Router
 * Spreadsheet name: Website
 * Spreadsheet ID: 1dFe6xkU9zee8FkSbe4PtR7jM4XFt_BUOpokbPvzHz3k
 *
 * This script routes each website form into its own
 * Google Sheets tab and creates headers if a tab is
 * missing or empty.
 *
 * Active forms:
 * - Summer Camp
 * - Language Academy
 * - Mind Space
 * - Book Consultation / request information
 * - Refund
 *
 * Notes:
 * - Do not format whole typed columns. The workbook
 *   already uses Sheets table structures, and applying
 *   number formats to typed columns can throw errors.
 * - The "Work With Us" / recruitment flow stays email-only
 *   and is intentionally not handled here.
 ****************************************************/

const SPREADSHEET_ID = "1dFe6xkU9zee8FkSbe4PtR7jM4XFt_BUOpokbPvzHz3k";
const DEBUG_SHEET_NAME = "Debug Log";

const ROUTES = {
  "summer camp": {
    sheetName: "Summer Camp",
    headers: [
      "Timestamp",
      "Form Type",
      "Parent Name",
      "Phone",
      "Child Name",
      "Child Age",
      "Interested",
      "Message",
      "Page"
    ],
    aliases: {
      "parentname": ["parentname", "guardianname", "full name", "fullname", "name"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber"],
      "childname": ["childname", "kidname", "studentname", "fullname", "name"],
      "childage": ["childage", "age"],
      "interested": ["interested", "interest", "service", "program", "courseinterest"],
      "message": ["message", "additionaldetails", "notes"],
      "page": ["page"]
    }
  },
  "language academy": {
    sheetName: "Language Academy",
    headers: [
      "Timestamp",
      "Form Type",
      "Full Name",
      "Phone",
      "Adult / Kids / Youth",
      "Age",
      "Language / Program",
      "Page"
    ],
    aliases: {
      "fullname": ["fullname", "full name", "name"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber"],
      "adultkidsyouth": ["adultkidsyouth", "agegroup", "category", "programtype"],
      "age": ["age", "childage"],
      "languageprogram": ["languageprogram", "language", "program", "service", "courseinterest"],
      "page": ["page"]
    }
  },
  "mind space": {
    sheetName: "Mind Space",
    headers: [
      "Timestamp",
      "Form Type",
      "Child Name",
      "Parent Name",
      "Phone",
      "Child Age",
      "Service of Interest",
      "Additional Details",
      "Page"
    ],
    aliases: {
      "childname": ["childname", "kidname", "studentname", "fullname", "name"],
      "parentname": ["parentname", "guardianname", "full name", "fullname", "name"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber"],
      "childage": ["childage", "age"],
      "serviceofinterest": ["serviceofinterest", "service", "interest", "program", "courseinterest"],
      "additionaldetails": ["additionaldetails", "message", "notes"],
      "page": ["page"]
    }
  },
  "book consultation": {
    sheetName: "request and book consultation",
    headers: [
      "Timestamp",
      "Form Type",
      "First Name / Full Name",
      "Last Name",
      "Email",
      "WhatsApp Number",
      "Course Interest",
      "Phone",
      "Preferred Contact Method",
      "Preferred Date",
      "Preferred Time",
      "Message",
      "Page"
    ],
    aliases: {
      "firstnamefullname": ["firstname", "fullname", "full name", "name", "consname"],
      "lastname": ["lastname", "surname", "familyname"],
      "email": ["email", "consemail"],
      "whatsappnumber": ["whatsappnumber", "whatsapp", "mobilenumber", "mobile", "phone", "consphone"],
      "courseinterest": ["courseinterest", "course", "program", "service", "interest"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber", "consphone"],
      "preferredcontactmethod": ["preferredcontactmethod", "contactmethod", "consmethod"],
      "preferreddate": ["preferreddate", "date", "consdate"],
      "preferredtime": ["preferredtime", "time", "constime"],
      "message": ["message", "notes", "additionaldetails", "consmessage"],
      "page": ["page"]
    }
  },
  "request information": {
    sheetName: "request and book consultation",
    headers: [
      "Timestamp",
      "Form Type",
      "First Name / Full Name",
      "Last Name",
      "Email",
      "WhatsApp Number",
      "Course Interest",
      "Phone",
      "Preferred Contact Method",
      "Preferred Date",
      "Preferred Time",
      "Message",
      "Page"
    ],
    aliases: {
      "firstnamefullname": ["firstname", "fullname", "full name", "name", "consname"],
      "lastname": ["lastname", "surname", "familyname"],
      "email": ["email", "consemail"],
      "whatsappnumber": ["whatsappnumber", "whatsapp", "mobilenumber", "mobile", "phone", "consphone"],
      "courseinterest": ["courseinterest", "course", "program", "service", "interest"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber", "consphone"],
      "preferredcontactmethod": ["preferredcontactmethod", "contactmethod", "consmethod"],
      "preferreddate": ["preferreddate", "date", "consdate"],
      "preferredtime": ["preferredtime", "time", "constime"],
      "message": ["message", "notes", "additionaldetails", "consmessage"],
      "page": ["page"]
    }
  },
  "refund": {
    sheetName: "Refund",
    headers: [
      "Timestamp",
      "Form Type",
      "Full Name",
      "Phone",
      "Email",
      "Program / Service",
      "Paid Amount",
      "Currency",
      "Receipt / Invoice No.",
      "Payment Date",
      "Preferred Contact Method",
      "Refund Reason",
      "Page"
    ],
    aliases: {
      "fullname": ["fullname", "full name", "name"],
      "phone": ["phone", "mobile", "mobilenumber", "whatsappnumber"],
      "email": ["email"],
      "programservice": ["programservice", "program", "service", "course"],
      "paidamount": ["paidamount", "amount", "paymentamount"],
      "currency": ["currency"],
      "receiptinvoiceno": ["receiptinvoiceno", "receiptnumber", "invoiceno", "invoice", "receipt"],
      "paymentdate": ["paymentdate", "date"],
      "preferredcontactmethod": ["preferredcontactmethod", "contactmethod"],
      "refundreason": ["refundreason", "reason", "message", "notes"],
      "page": ["page"]
    }
  }
};

const UNKNOWN_FORM_MESSAGE =
  "Unknown form type. Expected Summer Camp, Language Academy, Mind Space, Book Consultation, request information, or Refund.";

function doGet() {
  return jsonResponse_({
    success: true,
    message: "EACC website forms router is running.",
    debugSheet: DEBUG_SHEET_NAME
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  const requestId = Utilities.getUuid();

  try {
    lock.waitLock(10000);

    const payload = parseRequest_(e);
    const formType = sanitizeText_(payload.formType || payload.formtype || payload.type || payload["Form Type"]);
    const route = resolveRoute_(formType, payload);
    const debugEnabled = isDebugEnabled_(e, payload);

    logDebug_({
      requestId: requestId,
      stage: "received",
      formType: formType || "",
      route: route ? route.sheetName : "",
      debugEnabled: debugEnabled,
      payload: summarizePayload_(payload)
    });

    if (!route) {
      logDebug_({
        requestId: requestId,
        stage: "route-not-found",
        formType: formType || "",
        route: "",
        debugEnabled: debugEnabled,
        payload: summarizePayload_(payload),
        error: UNKNOWN_FORM_MESSAGE
      });

      return jsonResponse_({
        success: false,
        message: UNKNOWN_FORM_MESSAGE,
        receivedFormType: formType || "",
        requestId: requestId
      });
    }

    const sheet = getOrCreateSheet_(route.sheetName, route.headers);
    const row = buildRow_(route, payload);

    sheet.appendRow(row);

    logDebug_({
      requestId: requestId,
      stage: "saved",
      formType: formType || "",
      route: route.sheetName,
      debugEnabled: debugEnabled,
      payload: summarizePayload_(payload),
      rowPreview: row.map(function (value) {
        return value instanceof Date ? value.toISOString() : String(value || "");
      })
    });

    return jsonResponse_({
      success: true,
      message: "Form saved successfully.",
      sheet: route.sheetName,
      formType: formType || "",
      requestId: requestId
    });
  } catch (error) {
    logDebug_({
      requestId: requestId,
      stage: "error",
      formType: sanitizeText_(e && e.parameter && (e.parameter.formType || e.parameter.formtype || e.parameter.type || e.parameter["Form Type"]) || ""),
      route: "",
      debugEnabled: true,
      payload: summarizePayload_(parseRequest_(e)),
      error: String(error)
    });

    return jsonResponse_({
      success: false,
      message: "Something went wrong. Please try again.",
      error: String(error),
      requestId: requestId
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (releaseError) {
      // Ignore lock release errors.
    }
  }
}

function resolveRoute_(formType, payload) {
  const normalizedFormType = normalizeKey_(formType);
  if (normalizedFormType === "summercamp") return ROUTES["summer camp"];
  if (normalizedFormType === "languageacademy") return ROUTES["language academy"];
  if (normalizedFormType === "mindspace") return ROUTES["mind space"];
  if (normalizedFormType === "bookconsultation") return ROUTES["book consultation"];
  if (normalizedFormType === "requestinformation") return ROUTES["request information"];
  if (normalizedFormType === "contactus") return ROUTES["book consultation"];
  if (normalizedFormType === "refund") return ROUTES["refund"];

  const page = normalizeKey_(payload.page || payload.Page || "");
  if (page.includes("summercamp")) return ROUTES["summer camp"];
  if (page.includes("language") || page.includes("lang")) return ROUTES["language academy"];
  if (page.includes("mindspace") || page.includes("mind")) return ROUTES["mind space"];
  if (page.includes("refund")) return ROUTES["refund"];
  if (page.includes("consult") || page.includes("book")) return ROUTES["book consultation"];

  return null;
}

function getOrCreateSheet_(sheetName, headers) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  ensureHeaders_(sheet, headers);
  return sheet;
}

function ensureHeaders_(sheet, headers) {
  const row = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasAnyValue = row.some(function (cell) {
    return String(cell || "").trim() !== "";
  });

  if (!hasAnyValue) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#0d1457")
      .setFontColor("#ffffff")
      .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    return;
  }

  // If the tab already exists, only fill the header row when it is blank.
  // We intentionally avoid rewriting existing tables and avoid number-format
  // changes on whole columns so typed columns in the workbook keep working.
}

function isDebugEnabled_(e, payload) {
  const raw = String(
    (payload && (payload.debug || payload.DEBUG || payload.__debug)) ||
    (e && e.parameter && (e.parameter.debug || e.parameter.DEBUG || e.parameter.__debug)) ||
    ""
  ).toLowerCase();

  return raw === "1" || raw === "true" || raw === "yes" || raw === "on";
}

function summarizePayload_(payload) {
  const summary = {};
  Object.keys(payload || {}).forEach(function (key) {
    const value = payload[key];
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      summary[key] = String(value);
    } else if (value == null) {
      summary[key] = "";
    }
  });
  return summary;
}

function logDebug_(entry) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(DEBUG_SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(DEBUG_SHEET_NAME);
    }

    const headers = [
      "Timestamp",
      "Request ID",
      "Stage",
      "Form Type",
      "Route",
      "Debug",
      "Payload",
      "Row Preview",
      "Error"
    ];

    ensureHeaders_(sheet, headers);

    sheet.appendRow([
      new Date(),
      entry.requestId || "",
      entry.stage || "",
      entry.formType || "",
      entry.route || "",
      entry.debugEnabled ? "yes" : "no",
      JSON.stringify(entry.payload || {}),
      JSON.stringify(entry.rowPreview || []),
      entry.error || ""
    ]);
  } catch (error) {
    // Debug logging must never block a real submission.
  }
}

function buildRow_(route, payload) {
  const normalizedPayload = normalizePayload_(payload);

  return route.headers.map(function (header) {
    const normalizedHeader = normalizeKey_(header);

    if (normalizedHeader === "timestamp") {
      return new Date();
    }

    if (normalizedHeader === "formtype") {
      return sanitizeText_(payload.formType || payload.formtype || payload.type || payload["Form Type"] || "");
    }

    if (normalizedHeader === "page") {
      return sanitizeText_(payload.page || payload.Page || "");
    }

    const aliases = route.aliases[normalizedHeader] || [];
    return pickFirstValue_(normalizedPayload, [normalizedHeader].concat(aliases));
  });
}

function normalizePayload_(payload) {
  const out = {};

  Object.keys(payload || {}).forEach(function (key) {
    const normalized = normalizeKey_(key);
    const value = payload[key];

    if (normalized && value !== undefined && value !== null && String(value).trim() !== "") {
      if (!Object.prototype.hasOwnProperty.call(out, normalized)) {
        out[normalized] = value;
      }
    }
  });

  return out;
}

function pickFirstValue_(normalizedPayload, keys) {
  for (let i = 0; i < keys.length; i++) {
    const key = normalizeKey_(keys[i]);
    if (Object.prototype.hasOwnProperty.call(normalizedPayload, key)) {
      return sanitizeText_(normalizedPayload[key]);
    }
  }
  return "";
}

function parseRequest_(e) {
  const params = (e && e.parameter) ? e.parameter : {};
  const rawBody = e && e.postData && e.postData.contents ? String(e.postData.contents) : "";

  if (!rawBody) {
    return params;
  }

  try {
    return Object.assign({}, params, JSON.parse(rawBody));
  } catch (jsonError) {
    const bodyParams = {};

    rawBody.split("&").forEach(function (part) {
      if (!part) return;
      const pair = part.split("=");
      if (pair.length < 2) return;

      const key = decodeURIComponent(pair[0] || "").replace(/\+/g, " ");
      const value = decodeURIComponent(pair.slice(1).join("=") || "").replace(/\+/g, " ");
      bodyParams[key] = value;
    });

    return Object.assign({}, params, bodyParams);
  }
}

function sanitizeText_(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizeKey_(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupAllSheetsManually() {
  Object.keys(ROUTES).forEach(function (key) {
    const route = ROUTES[key];
    getOrCreateSheet_(route.sheetName, route.headers);
  });
  return "All form sheets are ready.";
}

/**
 * Manual debug helper.
 * Run this from the Apps Script editor to simulate a form submit.
 */
function testDoPostLanguageAcademy() {
  const fakeEvent = {
    parameter: {
      formType: "Language Academy",
      fullName: "Debug Test User",
      phone: "01012345678",
      category: "Adult",
      age: "12",
      language: "English",
      page: "lang-form.html",
      debug: "true"
    }
  };

  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
  return result.getContent();
}

/**
 * Manual debug helper for consultation/contact forms.
 */
function testDoPostConsultation() {
  const fakeEvent = {
    parameter: {
      formType: "request information",
      fullName: "Debug Test User",
      email: "test@example.com",
      phone: "01012345678",
      page: "contact-us/visit-our-centre.html",
      debug: "true"
    }
  };

  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
  return result.getContent();
}






