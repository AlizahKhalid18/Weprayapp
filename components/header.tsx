import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const Header = ({ props }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AQ</Text>
        </View>
        <Text style={styles.avatarName}>Hi Ahmad Qureshi</Text>
      </View>
      <Icon name="bell" size={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B704E",
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
  },
  avatarName: {
    color: "#181818",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
