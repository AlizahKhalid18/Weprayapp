import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Dropdown = ({
  placeholder = "",
  options = [] as any,
  style = {} as any,
  onChange = (option: any) => {},
  value = {} as any,
}) => {
  const [open, setOpen] = useState(false);

  const handleChange = (option: any) => {
    setOpen(false);
    onChange(option);
  };
  const { label } = value;
  return (
    <>
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        style={[styles.button, style.button]}
      >
        <Text style={[styles.placeholder, style.placeholder]}>
          {label || placeholder}
        </Text>
      </Pressable>
      {open && (
        <View style={[styles.listContainer, style.listContainer]}>
          {options.map((option: any) => {
            const { label, value } = option;
            return (
              <TouchableOpacity
                style={[styles.option, style.option]}
                key={value}
                onPress={() => handleChange(option)}
              >
                <Text style={[styles.label, style.label]}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: "#32324720",
    borderRadius: 6,
    justifyContent: "center",
    paddingLeft: 10,
    marginBottom: 16,
  },
  placeholder: {},
  listContainer: {
    top: -10,
    borderWidth: 1,
    borderColor: "#32324720",
    borderRadius: 6,
  },
  label: {
    color: "#555555",
  },
  option: {
    padding: 10,
  },
});

export default Dropdown;
