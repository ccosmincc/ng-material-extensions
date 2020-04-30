import { ExportType } from './export-type';
import { Mime } from './mime';
export const MAT_TABLE_EXPORTER = 'mat-table-exporter';
export const TYPE_ARRAY = 'array';
export const CHAR_SET_UTF = ';charset=utf-';
export const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
export const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
export const CONTENT_TYPE_APPLICATION = 'application/';
export const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
export const DOT = '.';
export const EXTENSION_XLS = DOT + ExportType.XLS;
export const EXTENSION_XLSX = DOT + ExportType.XLSX;
export const EXTENSION_CSV = DOT + ExportType.CSV;
export const EXTENSION_JSON = DOT + ExportType.JSON;
export const EXTENSION_TEXT = DOT + ExportType.TXT;
export const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
export const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
export const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
export const REF = '!ref';
export const XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
export const RETURN = '\n';
export const TAB = '\t';
export const XLSX_COLS = '!cols';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUIsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUNsQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLGNBQWMsQ0FBQztBQUN2RCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyx3QkFBd0IsR0FBRyxjQUFjLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDbEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ3JELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNuRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ3BELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDM0YsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUM3RixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixHQUFHLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQztBQUM3RixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDdEcsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDO0FBQ3JHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDMUIsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuL21pbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9UQUJMRV9FWFBPUlRFUiA9ICdtYXQtdGFibGUtZXhwb3J0ZXInO1xyXG5leHBvcnQgY29uc3QgVFlQRV9BUlJBWSA9ICdhcnJheSc7XHJcbmV4cG9ydCBjb25zdCBDSEFSX1NFVF9VVEYgPSAnO2NoYXJzZXQ9dXRmLSc7XHJcbmV4cG9ydCBjb25zdCBDSEFSX1NFVF9VVEZfOCA9IENIQVJfU0VUX1VURiArICc4JztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9URVhUID0gRXhwb3J0VHlwZS5UWFQgKyAnLyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfQVBQTElDQVRJT04gPSAnYXBwbGljYXRpb24vJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9FWENFTCA9IENPTlRFTlRfVFlQRV9BUFBMSUNBVElPTiArICdvY3RldC1zdHJlYW0nO1xyXG5leHBvcnQgY29uc3QgRE9UID0gJy4nO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1hMUyA9IERPVCArIEV4cG9ydFR5cGUuWExTO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1hMU1ggPSAgRE9UICsgRXhwb3J0VHlwZS5YTFNYO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX0NTViA9ICBET1QgKyBFeHBvcnRUeXBlLkNTVjtcclxuZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9KU09OID0gIERPVCArIEV4cG9ydFR5cGUuSlNPTjtcclxuZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9URVhUID0gIERPVCArIEV4cG9ydFR5cGUuVFhUO1xyXG5leHBvcnQgY29uc3QgTUlNRV9FWENFTF9YTFMgPSBuZXcgTWltZShFWFRFTlNJT05fWExTLCBDT05URU5UX1RZUEVfRVhDRUwgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0VYQ0VMX1hMU1ggPSBuZXcgTWltZShFWFRFTlNJT05fWExTWCwgQ09OVEVOVF9UWVBFX0VYQ0VMICsgQ0hBUl9TRVRfVVRGXzgpO1xyXG5leHBvcnQgY29uc3QgTUlNRV9KU09OID0gbmV3IE1pbWUoRVhURU5TSU9OX0pTT04sIENPTlRFTlRfVFlQRV9URVhUICsgSlNPTiArIENIQVJfU0VUX1VURl84KTtcclxuZXhwb3J0IGNvbnN0IE1JTUVfVFhUID0gbmV3IE1pbWUoRVhURU5TSU9OX1RFWFQsIENPTlRFTlRfVFlQRV9URVhUICsgRXhwb3J0VHlwZS5UWFQgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0NTViA9IG5ldyBNaW1lKEVYVEVOU0lPTl9DU1YsIENPTlRFTlRfVFlQRV9URVhUICsgRXhwb3J0VHlwZS5DU1YgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBSRUYgPSAnIXJlZic7XHJcbmV4cG9ydCBjb25zdCBYTFNfUkVHRVggPSBET1QgKyAnKlxcLicgKyBFeHBvcnRUeXBlLlhMUyArICckJztcclxuZXhwb3J0IGNvbnN0IFJFVFVSTiA9ICdcXG4nO1xyXG5leHBvcnQgY29uc3QgVEFCID0gJ1xcdCc7XHJcbmV4cG9ydCBjb25zdCBYTFNYX0NPTFMgPSAnIWNvbHMnO1xyXG4iXX0=