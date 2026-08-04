# EACC Forms Apps Script

Paste [`eacc-forms-router.gs`](./eacc-forms-router.gs) into the Google Apps Script project that is bound to the `Website` spreadsheet.

Spreadsheet ID:
`1dFe6xkU9zee8FkSbe4PtR7jM4XFt_BUOpokbPvzHz3k`

Active sheet tabs created by the script:
- `Summer Camp`
- `Language Academy`
- `Mind Space`
- `request and book consultation`
- `Refund`
- `Debug Log`

Deployment steps:
1. Open the Google Apps Script project connected to the spreadsheet.
2. Replace the script content with `eacc-forms-router.gs`.
3. Save.
4. Run `setupAllSheetsManually()` once if you want the tabs created immediately.
5. Deploy as a Web App.
6. Keep the website forms pointing to that Web App URL.

Important:
- The script avoids whole-column number formatting so it works with the typed table columns already in the workbook.
- The recruitment / work-with-us flow is intentionally not included here because it stays email-only.
- Every submission writes a row to `Debug Log`, which helps confirm whether the web app received the payload and which sheet tab it chose.

## Recruitment / Work for Us

Use `eacc-recruitment-router.gs` for the dedicated Recruitment EACC spreadsheet.

Spreadsheet ID:
`1G-RlVisVz06DLugqOiV3IfY10jNXo7ZpPiyHwblFxoo`

Web App URL used by `recruitment.html`:
`https://script.google.com/macros/s/AKfycbzgxYodaiJmWSFu10wZIVATdD_8yE8t8VFxrb2cAEmGe1MUoZxuX3ZQCKH3pFh8Lx5F/exec`

Setup:
1. Open the Apps Script project for Recruitment EACC.
2. Paste `eacc-recruitment-router.gs` into the script editor.
3. Save.
4. Run `setupRecruitmentSheet()` once and approve Spreadsheet + Drive permissions.
5. Deploy as a Web App.
6. Use access settings that allow the website visitor to submit the form.

The `CV Link` column stores a Google Drive link. The CV file itself is saved in Drive folder `1UgjYvpjYdxMWQzY81M1_hNCzCnhO_M7w`.



