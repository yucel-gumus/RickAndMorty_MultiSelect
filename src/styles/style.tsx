import { CSSProperties } from 'react';

interface PopupStyleProps {
  [key: string]: string | number;
}

export const selectedContainerStyle: React.CSSProperties = {
  left: 0,
  width: "85%",
  height: "auto",
  border: "2px solid #ccc",
  borderRadius: "10px",
  marginLeft: "5%",
  marginTop: "20px",
  padding: "15px",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
};

export const inputStyle = {
  marginLeft: "10px",
  border: "none",
  borderBottom: "1px solid #ffffff",
  borderRadius: "0",
  padding: "7px",
  fontSize: "18px",
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
  scrollbarColor: "skyblue",
  marginTop: "20px",
  width: "90%",
  marginLeft: "5%",
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

export const imageStyle = {
  width: "50px",
  height: "50px",
  marginTop: "10px",
  marginRight: "10px",
  borderRadius: "5px",
};

export const selectedCharactersName = {
  alignItems: "center",
  marginLeft: "5px",
  backgroundColor: "lightgray",
  borderRadius: "5px",
  padding: "7px",
  marginBottom: "3px"
}

export const buttonX = {
  fontSize: "16px",
  marginLeft: "7px",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "lightblue",
}

export const ImageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "auto",
  margin: "0 auto",
  marginTop: "10px",
};