// import styled, { css } from "styled-components";

// export const getChildType = child => {
//   return (
//     (child.type && child.type.target && child.type.target.displayName) ||
//     (child.type && child.type.displayName)
//   );
// };

// export const validateEmail = email => {
//   const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return emailPattern.test(email);
// };

// export const validateDate = date => {
//   const datePattern = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
//   return datePattern.test(date);
// };

// export const validateUrl = url => {
//   const urlPattern = /^(https|chrome):\/\/[^\s$.?#].[^\s]*$/g;
//   return urlPattern.test(url);
// };

// export const getCssValue = value => {
//   if (typeof value === "number") return `${value}px`;
//   return value;
// };

// export const setToStyledComponent = styled;
// export const setCustomStyle = css;
