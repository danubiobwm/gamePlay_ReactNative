import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { Background } from "../../components/Background";

export const SingnIn: React.FC = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas{`\n`} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  );
};
