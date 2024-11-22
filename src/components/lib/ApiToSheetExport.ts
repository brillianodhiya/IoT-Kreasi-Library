// import moment from "moment";
import dayjs from "dayjs";
// import { message } from "antd";

export interface ApiToSheetExportInterface {
  fileName: string;
  customAction?: (params: any) => Promise<any>;
  url: string;
  params: Record<string, any>;
  format?: "csv" | "xlsx";
  onSuccess?: () => void;
  onError?: (error: any) => void;
  setLoading?: (loading: boolean) => void;
  Authorization?: string;
}

export const ApiToSheetExport = async ({
  fileName,
  customAction,
  url,
  params,
  format = "xlsx",
  onSuccess,
  onError,
  setLoading,
  Authorization,
}: ApiToSheetExportInterface) => {
  try {
    if (setLoading) {
      setLoading(true);
    }
    const queryString = new URLSearchParams(params).toString();
    let response;

    if (customAction) {
      response = await customAction({ url, params });
    } else {
      const headers: HeadersInit = {
        "Content-Type":
          format === "csv"
            ? "text/csv"
            : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };

      if (Authorization) {
        headers["Authorization"] = Authorization;
      }

      response = await fetch(`${url}?${queryString}`, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      response = await response.blob();
    }

    const blob =
      response instanceof Blob ? response : new Blob([response.data]);
    const downloadUrl = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.setAttribute(
      "download",
      `${fileName}_${dayjs().unix()}.${format}`
    );
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(downloadUrl);

    if (setLoading) {
      setLoading(false);
    }

    if (onSuccess) {
      onSuccess();
    }

    return "Success";
  } catch (error) {
    if (setLoading) {
      setLoading(false);
    }
    if (onError) {
      onError(error);
    } else {
      if (error instanceof Error) {
        // message.error(
        //   error.message || "An error occurred while exporting data."
        // );
        return error.message;
      } else {
        // message.error("An error occurred while exporting data.");
        return "An error occurred while exporting data.";
      }
    }
  }
};
