import styled from '@emotion/styled';
interface FlexProps {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  background?: string;
  border?: string;
  gap?: string;
  borderRadius?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  fontFamily?: string;
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
  lineHeight?: string | number;
  fontSize?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  min-width: ${(props) => props.minWidth || "0"};
  max-height: ${(props) => props.maxHeight || "none"};
  min-height: ${(props) => props.minHeight || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "none"};
  gap: ${(props) => props.gap || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  line-height: ${(props) => props.lineHeight || "normal"};
  font-size: ${(props) => props.fontSize || "inherit"};
`;

export default Flex;