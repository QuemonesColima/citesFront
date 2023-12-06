/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  ScrollView as DefaultScrollView,
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  Pressable as DefaultPressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

interface ThemeProps {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type PressableProps = ThemeProps & typeof DefaultPressable;
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpacity["props"];

export type IconProps = ThemeProps & {
  name: string;
  size?: number;
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps != null) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
export function Pressable(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "background"
  );
  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function ThemedFeatherIcon(props: IconProps) {
  const {
    lightColor,
    darkColor,
    name,
    size: customSize,
    ...otherProps
  } = props;
  const defaultSize = 24;
  const size = customSize ?? defaultSize;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Feather name={name as any} size={size} color={color} {...otherProps} />
  );
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "background"
  );
  const borderColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "text"
  );

  return (
    <DefaultTouchableOpacity
      style={[{ backgroundColor, borderColor }, style]}
      {...otherProps}
    />
  );
}
