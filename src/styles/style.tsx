import { CSSProperties } from 'react';

interface PopupStyleProps {
  [key: string]: string | number;
}

export const selectedContainerStyle: React.CSSProperties = {
  left: 0,
  width: "85%",
  height: "auto",
  border: "2px solid #BCC7D2",
  borderRadius: "10px",
  backgroundColor: "#F5F9F5",
  color: "#253341",
  boxShadow: "0 2px 8px rgba(37, 51, 65, 0.08)",
  marginLeft: "5%",
  marginTop: "20px",
  padding: "15px",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
};

export const inputStyle: React.CSSProperties = {
  marginLeft: "10px",
  border: "none",
  borderBottom: "1px solid #BCC7D2",
  borderRadius: "0",
  padding: "7px",
  fontSize: "18px",
  color: "#253341",
  backgroundColor: "transparent",
  outline: "none",
  width: "80%",
};

export const popupStyle: CSSProperties & PopupStyleProps = {
  left: 0,
  scrollBarSize: 10,
  scroolBarHeight: 10,
  overflowY: "auto",
  maxHeight: "500px",
  scrollbarColor: "#3E5164 #DCE3EA",
  marginTop: "20px",
  width: "90%",
  marginLeft: "5%",
  backgroundColor: "#DCE3EA",
  color: "#253341",
  border: "1px solid #BCC7D2",
  borderRadius: "10px",
  boxShadow: "0 10px 24px rgba(37, 51, 65, 0.14)",
};

export const imageStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  marginTop: "10px",
  marginBottom: "10px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid #BCC7D2",
};

export const selectedCharactersName: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  marginLeft: "5px",
  backgroundColor: "#DBE6DD",
  color: "#253341",
  border: "1px solid #BCC7D2",
  borderRadius: "6px",
  padding: "6px 8px",
  marginBottom: "3px",
};

export const buttonX: React.CSSProperties = {
  fontSize: "16px",
  marginLeft: "7px",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "#F2A488",
  color: "#253341",
  border: "1px solid #EC7D55",
  fontWeight: 700,
};

export const ImageContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
  height: "auto",
  margin: "0 auto",
  marginTop: "10px",
};
