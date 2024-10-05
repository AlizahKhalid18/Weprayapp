import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { fetchMasjids } from "@/services/Masjids";

const Map = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [region, setRegion] = useState<any>(null);

  const [masjids, setMasjids] = useState<any[]>([]);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async ({ status }) => {
      if (status !== "granted") {
        return setErrorMsg("Permission to access location was denied");
      }
      const { coords: userLocation } = await Location.getCurrentPositionAsync(
        {}
      );

      setRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      const masjids = await fetchMasjids(
        userLocation.latitude,
        userLocation.longitude
      );
      setMasjids(masjids);
    });
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Mark your peaceful location</Text>
      <View style={[styles.mapContainter]}>
        {region ? (
          <MapView
            style={styles.map}
            loadingEnabled={true}
            provider={PROVIDER_DEFAULT}
            showsUserLocation={true}
            region={region}
          >
            {masjids.map((masjid, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: masjid.lat,
                  longitude: masjid.lon,
                }}
                title={masjid.tags.name}
                description="This is a masjid"
              >
                <View style={{ width: 30, height: 30 }}>
                  <Image
                    source={require("../../assets/images/mosque.png")}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              </Marker>
            ))}
          </MapView>
        ) : (
          <View style={styles.mapLoading}>
            <ActivityIndicator size="large" color="#8B704E" />
            <Text style={{ color: "white" }}> {errorMsg}</Text>
          </View>
        )}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mark as peaceful location</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    paddingBottom: 20,
  },
  title: {
    marginTop: 5,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  mapContainter: {
    padding: 16,
    height: "85%",
  },
  mapLoading: {
    backgroundColor: "#424242",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "78%",
    padding: 16,
    borderRadius: 30,
    backgroundColor: "#8B704E",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Map;
