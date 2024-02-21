import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Page1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.page1}
      onPress={() => navigation.navigate("Page3")}
    >
      <Image
        style={styles.objectsIcon}
        contentFit="cover"
        source={require("../assets/objects.png")}
      />
      <Image
        style={styles.page1Child}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <Image
        style={styles.objectsIcon1}
        contentFit="cover"
        source={require("../assets/group21.png")}
      />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame6.png")}
        />
        <View style={styles.frame}>
          <Text style={[styles.multiplied, styles.taxoTypo]}>Multiplied</Text>
          <Text style={[styles.earnings, styles.earningsPosition]}>
            earnings
          </Text>
          <Text
            style={[styles.perceiveUpTo, styles.earningsPosition]}
          >{`Perceive up to 3 times the
amount of the ride`}</Text>
        </View>
      </View>
      <View style={styles.taxoParent}>
        <Text style={[styles.taxo, styles.taxoTypo]}>taxo</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taxoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  earningsPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  objectsIcon: {
    top: 453,
    left: -28,
    width: 651,
    height: 479,
    position: "absolute",
    overflow: "hidden",
  },
  page1Child: {
    top: -1,
    left: 333,
    width: 149,
    height: 952,
    position: "absolute",
  },
  objectsIcon1: {
    height: "19.64%",
    width: "67.72%",
    top: "30.36%",
    right: "16.23%",
    bottom: "50%",
    left: "16.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    left: 263,
    width: 10,
    height: 112,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  multiplied: {
    color: Color.colorOrange,
    fontSize: FontSize.size_21xl,
  },
  earnings: {
    top: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_21xl,
  },
  perceiveUpTo: {
    top: 116,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSilver_100,
  },
  frame: {
    width: 207,
    left: 0,
    top: 0,
    height: 158,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 556,
    left: 41,
    width: 273,
    height: 158,
    position: "absolute",
  },
  taxo: {
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
  },
  frameChild: {
    top: 10,
    left: 70,
    width: 9,
    height: 9,
    position: "absolute",
  },
  taxoParent: {
    top: 30,
    left: 175,
    width: 79,
    height: 45,
    position: "absolute",
  },
  page1: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page1;
