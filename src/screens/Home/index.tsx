import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Appointments } from "../../components/Appointments";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Duelo",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handlerCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handlerCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title={"Partifas Agendadas"} subtitle={"Total 6"} />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointments data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
