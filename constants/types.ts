import { ReactNode, RefObject } from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";



export type IconComponent = React.ComponentType<{
  height?:number;
  width?:number;
  strokeWidth?:number;
  fill?:string;
  stroke?:string;
}>;

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;

};
export type InputTProps = {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: RefObject<TextInput>;

}
export type HeaderProps = {
  title: string;
  style?: ViewStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

