import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary30, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary30, secondary100]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
