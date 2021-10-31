import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";




export function GuildIcon() {
  const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0-140x140.png'
  return (
    <Image 
    source={{uri}}
    style={styles.image}
    resizeMode="cover"
    />
    
  );
}
