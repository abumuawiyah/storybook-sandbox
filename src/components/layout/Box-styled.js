// import styled, { css } from "styled-components";
// import { getCssValue } from "../utils";

// const StyledBox = styled.div`
//   ${props =>
//     props.w &&
//     css`
//       width: ${getCssValue(props.w)};
//     `};
//   ${props =>
//     props.h &&
//     css`
//       height: ${getCssValue(props.h)};
//     `};

//   ${props =>
//     props.m &&
//     css`
//       margin: ${getCssValue(props.m)};
//     `};
//   ${props =>
//     props.mt &&
//     css`
//       margin-top: ${getCssValue(props.mt)};
//     `};
//   ${props =>
//     props.mb &&
//     css`
//       margin-bottom: ${getCssValue(props.mb)};
//     `};
//   ${props =>
//     props.mr &&
//     css`
//       margin-right: ${getCssValue(props.mr)};
//     `};
//   ${props =>
//     props.ml &&
//     css`
//       margin-left: ${getCssValue(props.ml)};
//     `};

//   ${props =>
//     props.p &&
//     css`
//       padding: ${getCssValue(props.p)};
//     `};
//   ${props =>
//     props.pt &&
//     css`
//       padding-top: ${getCssValue(props.pt)};
//     `};
//   ${props =>
//     props.pb &&
//     css`
//       padding-bottom: ${getCssValue(props.pb)};
//     `};
//   ${props =>
//     props.pr &&
//     css`
//       padding-right: ${getCssValue(props.pr)};
//     `};
//   ${props =>
//     props.pl &&
//     css`
//       padding-left: ${getCssValue(props.pl)};
//     `};

//   ${props =>
//     props.b &&
//     css`
//       border: ${props.b};
//     `};
//   ${props =>
//     props.bt &&
//     css`
//       border-top: ${getCssValue(props.bt)};
//     `};
//   ${props =>
//     props.bb &&
//     css`
//       border-bottom: ${getCssValue(props.bb)};
//     `};
//   ${props =>
//     props.br &&
//     css`
//       border-right: ${getCssValue(props.br)};
//     `};
//   ${props =>
//     props.bl &&
//     css`
//       border-left: ${getCssValue(props.bl)};
//     `};
//   ${props =>
//     props.brs &&
//     css`
//       border-radius: ${props.brs};
//     `};
//   ${props =>
//     props.borderRadius &&
//     css`
//       border-radius: ${props.borderRadius};
//     `};

//   ${props =>
//     props.position &&
//     css`
//       position: ${props.position};
//     `};
//   ${props =>
//     props.top &&
//     css`
//       top: ${getCssValue(props.top)};
//     `};
//   ${props =>
//     props.right &&
//     css`
//       right: ${getCssValue(props.right)};
//     `};
//   ${props =>
//     props.left &&
//     css`
//       left: ${getCssValue(props.left)};
//     `};
//   ${props =>
//     props.bottom &&
//     css`
//       bottom: ${getCssValue(props.bottom)};
//     `};
//   ${props =>
//     props.zIndex &&
//     css`
//       z-index: ${props.zIndex};
//     `};

//   ${props =>
//     props.display === "flex" &&
//     css`
//       display: flex;
//       ${props =>
//         props.flexDirection &&
//         css`
//           flex-direction: ${props.flexDirection};
//         `};
//       ${props =>
//         props.flexWrap &&
//         css`
//           flex-wrap: ${props.flexWrap};
//         `};
//       ${props =>
//         props.justifyContent &&
//         css`
//           justify-content: ${props.justifyContent};
//         `};
//       ${props =>
//         props.alignItems &&
//         css`
//           align-items: ${props.alignItems};
//         `};
//       ${props =>
//         props.alignContent &&
//         css`
//           align-content: ${props.alignContent};
//         `};
//     `};

//   ${props =>
//     props.flex &&
//     css`
//       flex: ${props.flex};
//     `};
//   ${props =>
//     props.flexFlow &&
//     css`
//       flex-flow: ${props.flexFlow};
//     `};
//   ${props =>
//     props.flexGrow &&
//     css`
//       flex-grow: ${props.flexGrow};
//     `};
//   ${props =>
//     props.flexShrink &&
//     css`
//       flex-shrink: ${props.flexShrink};
//     `};
//   ${props =>
//     props.flexBasis &&
//     css`
//       flex-basis: ${props.flexBasis};
//     `};
//   ${props =>
//     props.alignSelf &&
//     css`
//       align-self: ${props.alignSelf};
//     `};
//   ${props =>
//     props.order &&
//     css`
//       order: ${props.order};
//     `};

//   ${props =>
//     props.fontFamily &&
//     css`
//       font-family: ${props.fontFamily};
//     `};
//   ${props =>
//     props.fontSize &&
//     css`
//       font-size: ${getCssValue(props.fontSize)};
//     `};
//   ${props =>
//     props.fontStyle &&
//     css`
//       font-style: ${props.fontStyle};
//     `};
//   ${props =>
//     props.fontWeight &&
//     css`
//       font-weight: ${getCssValue(props.fontWeight)};
//     `};
//   ${props =>
//     props.letterSpacing &&
//     css`
//       letter-spacing: ${getCssValue(props.letterSpacing)};
//     `};
//   ${props =>
//     props.lineHeight &&
//     css`
//       line-height: ${getCssValue(props.lineHeight)};
//     `};
//   ${props =>
//     props.textAlign &&
//     css`
//       text-align: ${props.textAlign};
//     `};
//   ${props =>
//     props.bg &&
//     css`
//       background: ${props.bg};
//     `};
//   ${props =>
//     props.bgColor &&
//     css`
//       background-color: ${props.bgColor};
//     `};
// `;

// export { StyledBox };
