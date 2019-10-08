// import React from "react";
// import PropTypes from "prop-types";
// import { StyledBox } from "./Box-styled";
// import styled from "styled-components";

// function Box(props) {
//   const { className, children, customStyle, renderAs, ...other } = props;
//   if (typeof customStyle === "object") styled(StyledBox)(customStyle);

//   return (
//     <StyledBox className={className} css={customStyle} as={renderAs} {...other}>
//       {children}
//     </StyledBox>
//   );
// }

// Box.propTypes = {
//   w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   b: PropTypes.string,
//   bt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   bb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   bl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   brs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

//   display: PropTypes.string,

//   flex: PropTypes.string,
//   flexDirection: PropTypes.string,
//   flexWrap: PropTypes.string,
//   flexFlow: PropTypes.string,
//   flexGrow: PropTypes.string,
//   flexShrink: PropTypes.string,
//   flexBasis: PropTypes.string,
//   justifyContent: PropTypes.string,
//   alignItems: PropTypes.string,
//   alignContent: PropTypes.string,
//   alignSelf: PropTypes.string,
//   order: PropTypes.string,

//   position: PropTypes.string,
//   zIndex: PropTypes.number,
//   top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

//   fontFamily: PropTypes.string,
//   fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   fontStyle: PropTypes.string,
//   fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   textAlign: PropTypes.string,
//   bg: PropTypes.string,
//   bgColor: PropTypes.string,

//   renderAs: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.string,
//     PropTypes.func
//   ]),
//   customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

//   onClick: PropTypes.func
// };

// Box.defaultProps = {
//   renderAs: "div",
//   onClick: () => {}
// };

// export default Box;
