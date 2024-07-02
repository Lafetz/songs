import styled from '@emotion/styled';
import { css } from '@emotion/react'

interface ButtonProps  {
    isLoading?: boolean;
    buttonColor?: string;
    hoverColor?: string;
    disabledColor?: string;
    width?: string;
    height?: string;
    padding?: string;
  }
  const Loader = css`
  
  &:after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 6.4px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
  export const LoadingBtn = styled.button<ButtonProps>`
    ${Loader}
    background-color: ${(props) => props.buttonColor || '#007bff'};
    color: #fff;
    border-radius:5px;
  
    border: none;
    padding: ${(props) => props.padding || '10px 20px'};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
  
    &:hover {
      background-color: ${(props) => props.hoverColor || '#0056b3'};
    }
  
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${(props) => props.disabledColor || '#ccc'};
    }
  `;
  const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.buttonColor || '#007bff'};
  color: #fff;
  border-radius:5px;

  border: none;
  padding: ${(props) => props.padding || '10px 20px'};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  &:hover {
    background-color: ${(props) => props.hoverColor || '#0056b3'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${(props) => props.disabledColor || '#ccc'};
  }
  `

  export default Button